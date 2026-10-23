const slides = Array.from(document.querySelectorAll(".slide"));
const deck = document.getElementById("deck");
const deckShell = document.getElementById("deckShell");
const viewport = document.getElementById("viewport");
const counter = document.getElementById("counter");
const slideTitle = document.getElementById("slideTitle");
const progressBar = document.getElementById("progressBar");
const notesPanel = document.getElementById("notesPanel");
const notesContent = document.getElementById("notesContent");
const notesToggle = document.getElementById("notesToggle");
const notesClose = document.getElementById("notesClose");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");
const fullscreenButton = document.getElementById("fullscreen");

let current = 0;
let notesVisible = false;

function pad(number) {
  return String(number).padStart(2, "0");
}

function fitDeck() {
  const availableWidth = Math.max(320, viewport.clientWidth - 40);
  const availableHeight = Math.max(180, viewport.clientHeight - 40);
  const scale = Math.min(availableWidth / 1280, availableHeight / 720);
  deckShell.style.width = `${Math.round(1280 * scale)}px`;
  deckShell.style.height = `${Math.round(720 * scale)}px`;
  deck.style.transform = `scale(${scale})`;
}

function updateNotes() {
  const note = slides[current].querySelector(".speaker-notes");
  notesContent.textContent = note ? note.textContent.trim() : "本页暂无讲稿。";
}

function showSlide(index, updateHash = true) {
  current = Math.max(0, Math.min(slides.length - 1, index));
  slides.forEach((slide, slideIndex) => {
    const active = slideIndex === current;
    slide.classList.toggle("is-active", active);
    slide.setAttribute("aria-hidden", String(!active));
  });
  counter.textContent = `${pad(current + 1)} / ${pad(slides.length)}`;
  slideTitle.textContent = slides[current].dataset.title || "";
  progressBar.style.width = `${((current + 1) / slides.length) * 100}%`;
  prevButton.disabled = current === 0;
  nextButton.disabled = current === slides.length - 1;
  updateNotes();
  if (updateHash) {
    history.replaceState(null, "", `#slide-${current + 1}`);
  }
}

function nextSlide() {
  if (current < slides.length - 1) showSlide(current + 1);
}

function previousSlide() {
  if (current > 0) showSlide(current - 1);
}

function toggleNotes(force) {
  notesVisible = typeof force === "boolean" ? force : !notesVisible;
  notesPanel.hidden = !notesVisible;
  notesToggle.setAttribute("aria-pressed", String(notesVisible));
}

async function toggleFullscreen() {
  if (!document.fullscreenElement) {
    await document.documentElement.requestFullscreen?.();
  } else {
    await document.exitFullscreen?.();
  }
  setTimeout(fitDeck, 60);
}

nextButton.addEventListener("click", nextSlide);
prevButton.addEventListener("click", previousSlide);
notesToggle.addEventListener("click", () => toggleNotes());
notesClose.addEventListener("click", () => toggleNotes(false));
fullscreenButton.addEventListener("click", toggleFullscreen);
window.addEventListener("resize", fitDeck);
document.addEventListener("fullscreenchange", () => setTimeout(fitDeck, 60));

document.addEventListener("keydown", (event) => {
  const target = event.target;
  if (target instanceof HTMLInputElement || target instanceof HTMLTextAreaElement) return;
  if (["ArrowRight", "PageDown", " "].includes(event.key)) {
    event.preventDefault();
    nextSlide();
  } else if (["ArrowLeft", "PageUp"].includes(event.key)) {
    event.preventDefault();
    previousSlide();
  } else if (event.key === "Home") {
    event.preventDefault();
    showSlide(0);
  } else if (event.key === "End") {
    event.preventDefault();
    showSlide(slides.length - 1);
  } else if (event.key.toLowerCase() === "n") {
    event.preventDefault();
    toggleNotes();
  } else if (event.key.toLowerCase() === "f") {
    event.preventDefault();
    toggleFullscreen();
  } else if (event.key === "Escape" && notesVisible) {
    toggleNotes(false);
  }
});

window.addEventListener("hashchange", () => {
  const match = location.hash.match(/slide-(\d+)/);
  if (match) showSlide(Number(match[1]) - 1, false);
});

const initialMatch = location.hash.match(/slide-(\d+)/);
showSlide(initialMatch ? Number(initialMatch[1]) - 1 : 0, false);
fitDeck();

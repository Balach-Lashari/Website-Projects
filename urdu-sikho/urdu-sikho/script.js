// script.js
// All app logic for Urdu Sikho: rendering views, navigating flashcards,
// shuffling, marking known/learning, and saving progress to localStorage.

const STORAGE_KEY = "urduSikhoProgress";

// ---- Progress storage helpers ----
// Progress shape: { [categoryId]: { [wordIndex]: "known" | "learning" } }

function loadProgress() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch (err) {
    // localStorage may be unavailable (e.g. private browsing) - fail gracefully
    return {};
  }
}

function saveProgress(progress) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  } catch (err) {
    // Ignore write errors so the app keeps working without persistence
  }
}

let progress = loadProgress();

// ---- App state ----
let currentCategory = null; // the category object currently open
let deck = []; // array of { urdu, translit, english, wordIndex } in display order
let currentIndex = 0; // position within `deck`

// ---- DOM references ----
const homeView = document.getElementById("home-view");
const flashcardView = document.getElementById("flashcard-view");

const overallProgressText = document.getElementById("overall-progress-text");
const overallProgressBar = document.getElementById("overall-progress-bar");
const categoryGrid = document.getElementById("category-grid");

const backBtn = document.getElementById("back-btn");
const categoryTitle = document.getElementById("category-title");
const categoryProgressText = document.getElementById("category-progress-text");
const categoryProgressBar = document.getElementById("category-progress-bar");

const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const shuffleBtn = document.getElementById("shuffle-btn");
const learningBtn = document.getElementById("learning-btn");
const knownBtn = document.getElementById("known-btn");

const cardStatusBadge = document.getElementById("card-status-badge");
const cardUrdu = document.getElementById("card-urdu");
const cardTranslit = document.getElementById("card-translit");
const cardEnglish = document.getElementById("card-english");
const cardCounter = document.getElementById("card-counter");

// ---- Helpers ----

function getCategoryKnownCount(categoryId) {
  const catProgress = progress[categoryId] || {};
  return Object.values(catProgress).filter((status) => status === "known").length;
}

function getWordStatus(categoryId, wordIndex) {
  const catProgress = progress[categoryId] || {};
  return catProgress[wordIndex] || null; // null | "known" | "learning"
}

function setWordStatus(categoryId, wordIndex, status) {
  if (!progress[categoryId]) progress[categoryId] = {};
  progress[categoryId][wordIndex] = status;
  saveProgress(progress);
}

function shuffleArray(array) {
  // Fisher-Yates shuffle, returns a new shuffled array
  const result = array.slice();
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

function switchView(viewToShow) {
  [homeView, flashcardView].forEach((v) => v.classList.remove("active"));
  viewToShow.classList.add("active");
}

// ---- Home view rendering ----

function renderHome() {
  // Overall progress across every category
  let totalWords = 0;
  let totalKnown = 0;

  categoryGrid.innerHTML = "";

  CATEGORIES.forEach((category) => {
    totalWords += category.words.length;
    const knownCount = getCategoryKnownCount(category.id);
    totalKnown += knownCount;

    const card = document.createElement("button");
    card.className = "category-card";
    card.style.borderColor = "transparent";
    card.setAttribute("type", "button");
    card.addEventListener("mouseenter", () => (card.style.borderColor = category.color));
    card.addEventListener("mouseleave", () => (card.style.borderColor = "transparent"));

    const percent = Math.round((knownCount / category.words.length) * 100);

    card.innerHTML = `
      <span class="cat-emoji" aria-hidden="true">${category.emoji}</span>
      <p class="cat-name">${category.name}</p>
      <p class="cat-progress-text">${knownCount} / ${category.words.length} known</p>
      <div class="progress-bar-track">
        <div class="progress-bar-fill" style="width:${percent}%; background:${category.color};"></div>
      </div>
    `;

    card.addEventListener("click", () => openCategory(category.id));
    categoryGrid.appendChild(card);
  });

  const overallPercent = totalWords === 0 ? 0 : Math.round((totalKnown / totalWords) * 100);
  overallProgressText.textContent = `${totalKnown} / ${totalWords} words learned`;
  overallProgressBar.style.width = `${overallPercent}%`;
}

// ---- Flashcard view rendering ----

function openCategory(categoryId) {
  currentCategory = CATEGORIES.find((c) => c.id === categoryId);
  if (!currentCategory) return;

  deck = currentCategory.words.map((word, index) => ({ ...word, wordIndex: index }));
  currentIndex = 0;

  categoryTitle.textContent = `${currentCategory.emoji} ${currentCategory.name}`;
  switchView(flashcardView);
  renderCard();
  renderCategoryProgress();
}

function renderCategoryProgress() {
  const knownCount = getCategoryKnownCount(currentCategory.id);
  const total = currentCategory.words.length;
  const percent = Math.round((knownCount / total) * 100);

  categoryProgressText.textContent = `${knownCount} / ${total} known`;
  categoryProgressBar.style.width = `${percent}%`;
  categoryProgressBar.style.background = currentCategory.color;
}

function renderCard() {
  const word = deck[currentIndex];

  cardUrdu.textContent = word.urdu;
  cardTranslit.textContent = word.translit;
  cardEnglish.textContent = word.english;
  cardCounter.textContent = `Card ${currentIndex + 1} of ${deck.length}`;

  const status = getWordStatus(currentCategory.id, word.wordIndex);
  if (status === "known") {
    cardStatusBadge.textContent = "Known";
    cardStatusBadge.className = "status-badge known";
  } else if (status === "learning") {
    cardStatusBadge.textContent = "Still Learning";
    cardStatusBadge.className = "status-badge learning";
  } else {
    cardStatusBadge.textContent = "New";
    cardStatusBadge.className = "status-badge";
  }
}

function goToNextCard() {
  currentIndex = (currentIndex + 1) % deck.length;
  renderCard();
}

function goToPrevCard() {
  currentIndex = (currentIndex - 1 + deck.length) % deck.length;
  renderCard();
}

function shuffleDeck() {
  deck = shuffleArray(deck);
  currentIndex = 0;
  renderCard();
}

function markCurrentCard(status) {
  const word = deck[currentIndex];
  setWordStatus(currentCategory.id, word.wordIndex, status);
  renderCard();
  renderCategoryProgress();
}

function backToHome() {
  switchView(homeView);
  renderHome();
}

// ---- Event listeners ----

backBtn.addEventListener("click", backToHome);
prevBtn.addEventListener("click", goToPrevCard);
nextBtn.addEventListener("click", goToNextCard);
shuffleBtn.addEventListener("click", shuffleDeck);
learningBtn.addEventListener("click", () => markCurrentCard("learning"));
knownBtn.addEventListener("click", () => markCurrentCard("known"));

// Keyboard navigation while a flashcard is open (left/right arrows)
document.addEventListener("keydown", (event) => {
  if (!flashcardView.classList.contains("active")) return;
  if (event.key === "ArrowRight") goToNextCard();
  if (event.key === "ArrowLeft") goToPrevCard();
});

// ---- Init ----
switchView(homeView);
renderHome();

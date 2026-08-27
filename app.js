/**
 * Raksha Bandhan Scrapbook Website - Interactive Engine
 * Author: Antigravity AI
 */

document.addEventListener("DOMContentLoaded", () => {
  // Ensure CONFIG is available
  if (!window.CONFIG) {
    console.error("Configuration file config.js is missing or failed to load.");
    return;
  }

  const data = window.CONFIG;

  // Set document title & meta tags
  document.title = data.meta.title;
  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) {
    metaDescription.setAttribute("content", data.meta.description);
  }

  // Initialize all sections
  renderHero(data.hero);
  renderFunnyMemories(data.funnyMemories);
  renderGallery(data.gallery);
  renderUnadmittedTruths(data.unadmittedTruths);
  renderCinematicNarrative(data.cinematicNarrative);
  renderTimeline(data.timelineMessages);
  renderMissingYou(data.missingYou);
  renderLetter(data.letter);
  renderSurpriseSection(data.surprise);

  // Setup Scroll-Reveal Observers
  setupScrollReveal();

  // Setup Interactive Events
  setupCardFlips();
  setupSmoothScrolling();
  setupHeroInteractions();

  // Trigger loaded class for Hero animations
  setTimeout(() => {
    document.body.classList.add("loaded");
  }, 100);
});

/**
 * 1. Render Hero Section
 */
function renderHero(heroData) {
  const container = document.getElementById("hero-container");
  if (!container) return;

  // Create ambient floating elements (gold dust/marigold leaf fragments)
  let particlesHTML = "";
  for (let i = 0; i < 22; i++) {
    const delay = (Math.random() * 8).toFixed(1);
    const left = (Math.random() * 100).toFixed(0);
    const size = (Math.random() * 10 + 6).toFixed(0);
    // Alternate between marigold petal and gold spark particles
    const typeClass = Math.random() > 0.45 ? "marigold" : "spark";
    particlesHTML += `<div class="floating-particle ${typeClass}" style="left: ${left}%; animation-delay: ${delay}s; width: ${size}px; height: ${size}px;"></div>`;
  }

  // Generate 20 fairy lights bulbs
  let lightsHTML = "";
  for (let i = 0; i < 20; i++) {
    lightsHTML += `<li></li>`;
  }

  // Wrap the heart emoji in a span class for spring scaling
  const formattedTitle = heroData.title.replace("❤️", '<span class="heart-emoji">❤️</span>');
  const formattedButtonText = heroData.scrollButtonText.replace("↓", '<span class="arrow-char">↓</span>');

  container.innerHTML = `
    <!-- Subtle Background Decor Dot Grid -->
    <div class="hero-bg-decor"></div>

    <!-- Glowing Festive Fairy Lights -->
    <ul class="fairy-lights">${lightsHTML}</ul>

    <!-- Floating Gold Dust & Marigold Particles -->
    <div class="particle-container">${particlesHTML}</div>

    <div class="hero-grid">
      <div class="hero-content">
        <h1 class="hero-title">${formattedTitle}</h1>
        <p class="hero-subheading">${heroData.subheading}</p>
        <p class="hero-message">${heroData.personalMessage}</p>
        <button class="scroll-btn" onclick="scrollToNextSection()">
          ${formattedButtonText}
        </button>
      </div>

      <div class="hero-photo-collage-container">
        <!-- Single Featured Polaroid displaying assets/2.jpeg -->
        <div class="single-polaroid-container">
          <div class="washi-tape top-center terracotta"></div>
          <div class="polaroid">
            <div class="polaroid-img-wrapper">
              <img src="${heroData.image3}" alt="Forever Sibling Bond">
            </div>
            <div class="polaroid-caption" style="font-family: var(--font-handwritten); font-size: 1.15rem; margin-top: 0.5rem; text-align: center;">Forever Sibling Bond</div>
          </div>
        </div>
      </div>
    </div>
  `;
}

/**
 * 2. Render Funny Childhood Memories
 */
function renderFunnyMemories(funnyData) {
  // Render Intro Quotes
  const quotesContainer = document.getElementById("funny-quotes-container");
  if (quotesContainer) {
    quotesContainer.innerHTML = funnyData.introQuotes
      .map((quote, index) => `
        <div class="quote-bubble reveal reveal-delay-${index + 1}">
          <p>${quote}</p>
        </div>
      `).join("");
  }

  // Render Funny Cards
  const cardsContainer = document.getElementById("funny-cards-container");
  if (cardsContainer) {
    cardsContainer.innerHTML = funnyData.cards
      .map((card, index) => `
        <div class="funny-card reveal reveal-delay-${index + 1}">
          <div class="funny-card-img">
            <img src="${card.image}" alt="${card.title}" style="object-position: ${card.objectPosition || 'center'};">
          </div>
          <div class="funny-card-content">
            <h3 class="funny-card-title">${card.title}</h3>
            <p class="funny-card-desc">${card.description}</p>
            <div class="funny-card-note">${card.playfulNote}</div>
          </div>
        </div>
      `).join("");
  }
}

/**
 * 3. Render Photo Gallery
 */
function renderGallery(galleryData) {
  const container = document.getElementById("gallery-container");
  if (!container) return;

  container.innerHTML = galleryData.photos
    .map((photo, index) => {
      const rotation = photo.rotation || 0;
      return `
        <div class="scattered-item reveal reveal-delay-${(index % 3) + 1}" style="--rot: ${rotation}deg;">
          <div class="washi-tape top-left ${index % 2 === 0 ? 'sage' : 'terracotta'}"></div>
          
          <div class="polaroid locked" id="gallery-polaroid-${index}">
            <div class="polaroid-img-wrapper">
              <img src="${photo.image}" alt="${photo.title}" style="object-position: ${photo.objectPosition || 'center'};">
            </div>
            
            <!-- Sibling Memory Form -->
            <div class="polaroid-quiz" id="quiz-block-${index}">
              <div class="quiz-question">What does this memory mean to you?</div>
              <textarea class="quiz-input" id="quiz-input-${index}" placeholder="Type your thoughts here..."></textarea>
              <button class="quiz-btn" onclick="unlockPolaroidText(${index})">Save & Reveal Story ✨</button>
            </div>

            <!-- Captions Revealed on Unlock -->
            <div class="polaroid-reveal-content">
              <div class="user-guess-result" id="user-guess-${index}"></div>
              <div class="polaroid-caption">${photo.title}</div>
              <p class="polaroid-caption" style="font-size: 0.95rem; margin-top: 0.25rem; font-family: var(--font-sans); color: var(--text-muted); font-style: italic;">
                ${photo.caption}
              </p>
              <div class="polaroid-date">${photo.date}</div>
            </div>

          </div>
        </div>
      `;
    }).join("");
}

/**
 * 4. Render "Things I'll Never Admit..." Cards
 */
function renderUnadmittedTruths(truthsData) {
  const container = document.getElementById("flip-cards-container");
  if (!container) return;

  container.innerHTML = truthsData.cards
    .map((card, index) => `
      <div class="flip-card reveal reveal-delay-${(index % 2) + 1}">
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <h3>${card.front}</h3>
            <p>Hover / Tap to read the truth</p>
          </div>
          <div class="flip-card-back">
            <p>${card.back}</p>
          </div>
        </div>
      </div>
    `).join("");
}

/**
 * 5. Render Cinematic Narrative Section
 */
function renderCinematicNarrative(narrativeData) {
  const container = document.getElementById("cinematic-container");
  if (!container) return;

  const paragraphsHTML = narrativeData.paragraphs
    .map(p => `<p>${p}</p>`)
    .join("");

  container.innerHTML = `
    <div class="cinematic-grid">
      <div class="cinematic-text reveal">
        <h2 class="cinematic-title">${narrativeData.title}</h2>
        ${paragraphsHTML}
      </div>
      <div class="cinematic-img-wrapper reveal reveal-delay-2">
        <div class="washi-tape top-right mustard"></div>
        <div class="polaroid">
          <div class="polaroid-img-wrapper">
            <img src="${narrativeData.image}" alt="Sibling Walk at Sunset" style="object-position: ${narrativeData.objectPosition || 'center'};">
          </div>
          <div class="polaroid-caption">Walking Together</div>
          <div class="polaroid-date">Childhood & Beyond</div>
        </div>
      </div>
    </div>
  `;
}

/**
 * 6. Render Scroll Timeline
 */
function renderTimeline(timelineMessages) {
  const container = document.getElementById("timeline-container");
  if (!container) return;

  container.innerHTML = timelineMessages
    .map((item, index) => {
      const alignment = index % 2 === 0 ? "left" : "right";
      return `
        <div class="timeline-item ${alignment} reveal reveal-delay-${(index % 2) + 1}">
          <div class="timeline-icon">${item.icon}</div>
          <div class="timeline-content">${item.text}</div>
        </div>
      `;
    }).join("");
}

/**
 * 7. Render "I'm Missing You"
 */
function renderMissingYou(missingData) {
  const container = document.getElementById("missing-container");
  if (!container) return;

  container.innerHTML = `
    <div class="missing-content reveal">
      <h2 class="section-title" style="margin-bottom: 2rem;">${missingData.title}</h2>
      <p class="missing-text">${missingData.message}</p>
      <div class="missing-note">${missingData.closingLine}</div>
    </div>
    <div class="missing-polaroid reveal reveal-delay-2">
      <div class="washi-tape top-center sage"></div>
      
      <div class="polaroid locked" id="missing-polaroid-card">
        <div class="polaroid-img-wrapper">
          <img src="${missingData.image}" alt="Missing You" style="object-position: ${missingData.objectPosition || 'center'};">
        </div>
        
        <!-- Sibling Memory Form -->
        <div class="polaroid-quiz" id="missing-quiz-block">
          <div class="quiz-question">What does this memory mean to you?</div>
          <textarea class="quiz-input" id="missing-quiz-input" placeholder="Type your thoughts here..."></textarea>
          <button class="quiz-btn" onclick="unlockMissingPolaroidText()">Save & Reveal Story ✨</button>
        </div>

        <!-- Real Sibling Captions (Revealed on Unlock) -->
        <div class="polaroid-reveal-content">
          <div class="user-guess-result" id="missing-user-guess"></div>
          <div class="polaroid-caption">Thinking of You</div>
        </div>
      </div>
    </div>
  `;
}

/**
 * 8. Render Handwritten Letter
 */
function renderLetter(letterData) {
  const container = document.getElementById("letter-container");
  if (!container) return;

  const paragraphsHTML = letterData.paragraphs
    .map(p => `<p>${p}</p>`)
    .join("");

  container.innerHTML = `
    <div class="letter-paper reveal">
      <div class="letter-salutation">${letterData.salutation}</div>
      <div class="letter-body">
        ${paragraphsHTML}
      </div>
      <div class="letter-closing">
        <span>${letterData.closing}</span>
        <div class="letter-signature">${letterData.signature}</div>
      </div>
    </div>
  `;
}

/**
 * 9. Render Final Surprise Button and Overlay
 */
function renderSurpriseSection(surpriseData) {
  const triggerContainer = document.getElementById("surprise-trigger-container");
  if (triggerContainer) {
    triggerContainer.innerHTML = `
      <button class="surprise-btn reveal" onclick="openSurprise()">
        ${surpriseData.triggerText}
      </button>
    `;
  }

  // Create the overlay elements dynamically
  const overlay = document.createElement("div");
  overlay.id = "surprise-overlay";
  overlay.className = "surprise-overlay";
  
  const linesHTML = surpriseData.lines
    .map(line => `<p class="surprise-title">${line}</p>`)
    .join("");

  overlay.innerHTML = `
    <button class="close-surprise-btn" onclick="closeSurprise()">&times;</button>
    <canvas id="confetti-canvas" class="confetti-canvas"></canvas>
    <div class="surprise-wrapper">
      <div class="surprise-text">
        ${linesHTML}
        <h2 class="surprise-highlight">${surpriseData.highlightText}</h2>
        <div class="surprise-wishes">${surpriseData.wishesText}</div>
        <p class="handwritten" style="font-size: 2rem; color: var(--accent-terracotta); text-align: center; margin-top: 1rem;">
          ${surpriseData.signatureText}
        </p>
      </div>
      <div class="surprise-photo">
        <div class="washi-tape top-center terracotta"></div>
        <div class="polaroid">
          <div class="polaroid-img-wrapper" style="aspect-ratio: 1.1 / 1;">
            <img src="${surpriseData.image}" alt="Happy Raksha Bandhan" style="object-position: ${surpriseData.objectPosition || 'center'};">
          </div>
          <div class="polaroid-caption" style="font-size: 1.75rem;">Vamsi & Sirisha</div>
        </div>
      </div>
    </div>
  `;
  document.body.appendChild(overlay);
}

/**
 * Scroll Reveal IntersectionObserver
 */
function setupScrollReveal() {
  const options = {
    root: null,
    rootMargin: "0px -10% -10% 0px",
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("revealed");
        // Once revealed, no need to track it anymore
        observer.unobserve(entry.target);
      }
    });
  }, options);

  // Track elements
  document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
  document.querySelectorAll(".timeline-item").forEach(el => observer.observe(el));
}

/**
 * Mobile click-to-flip support
 */
function setupCardFlips() {
  document.querySelectorAll(".flip-card").forEach(card => {
    card.addEventListener("click", () => {
      card.classList.toggle("flipped");
    });
  });
}

/**
 * Smooth scrolling scroll helper
 */
function setupSmoothScrolling() {
  // Ensure custom clicks on anchor/trigger scroll smoothly
}

window.scrollToNextSection = function() {
  const hero = document.getElementById("hero");
  if (hero) {
    const nextSection = hero.nextElementSibling;
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  }
};

/**
 * Open Surprise Action
 */
let confettiAnimationId = null;
window.openSurprise = function() {
  const overlay = document.getElementById("surprise-overlay");
  if (overlay) {
    overlay.classList.add("active");
    document.body.style.overflow = "hidden"; // disable background scrolling
    startConfetti();
  }
};

/**
 * Close Surprise Action
 */
window.closeSurprise = function() {
  const overlay = document.getElementById("surprise-overlay");
  if (overlay) {
    overlay.classList.remove("active");
    document.body.style.overflow = ""; // enable scrolling
    stopConfetti();
  }
};

/**
 * Canvas Confetti System (Lightweight Custom Engine)
 */
function startConfetti() {
  const canvas = document.getElementById("confetti-canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  
  // Set dimensions
  const resizeCanvas = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  };
  resizeCanvas();
  window.addEventListener("resize", resizeCanvas);

  const colors = [
    "#c96f53", // terracotta
    "#d49b41", // mustard
    "#5c7a67", // sage
    "#b57c83", // rose
    "#ffffff", // paper white
    "#f8d878", // soft gold
    "#859e99"  // pale green
  ];
  
  const particles = [];
  const particleCount = 120;

  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height - canvas.height,
      size: Math.random() * 8 + 4,
      color: colors[Math.floor(Math.random() * colors.length)],
      speed: Math.random() * 3 + 2,
      rotation: Math.random() * 360,
      rotationSpeed: Math.random() * 4 - 2,
      oscillationSpeed: Math.random() * 0.03 + 0.01,
      oscillationDistance: Math.random() * 30 + 10,
      oscillationAngle: Math.random() * Math.PI
    });
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    particles.forEach(p => {
      ctx.save();
      
      // Calculate horizontal oscillation
      p.oscillationAngle += p.oscillationSpeed;
      const xOffset = Math.sin(p.oscillationAngle) * p.oscillationDistance;
      
      // Move vertical falling speed
      p.y += p.speed;
      
      // Recur particles when out of screen bounds
      if (p.y > canvas.height) {
        p.y = -20;
        p.x = Math.random() * canvas.width;
      }
      
      p.rotation += p.rotationSpeed;
      
      ctx.translate(p.x + xOffset, p.y);
      ctx.rotate((p.rotation * Math.PI) / 180);
      ctx.fillStyle = p.color;
      
      // Render simple confetti shapes (rectangles and circles)
      if (Math.random() > 0.5) {
        ctx.fillRect(-p.size / 2, -p.size, p.size, p.size * 1.5);
      } else {
        ctx.beginPath();
        ctx.arc(0, 0, p.size / 2, 0, Math.PI * 2);
        ctx.fill();
      }
      
      ctx.restore();
    });
    
    confettiAnimationId = requestAnimationFrame(draw);
  }
  
  draw();
}

function stopConfetti() {
  if (confettiAnimationId) {
    cancelAnimationFrame(confettiAnimationId);
    confettiAnimationId = null;
  }
}

/**
 * Sibling Memory Form Unlock Handlers
 */
window.unlockPolaroidText = function(index) {
  const input = document.getElementById(`quiz-input-${index}`);
  const userGuess = document.getElementById(`user-guess-${index}`);
  const polaroid = document.getElementById(`gallery-polaroid-${index}`);

  if (!input || !polaroid || !userGuess) return;

  const value = input.value.trim() || "A beautiful memory.";
  userGuess.innerHTML = `<div class="user-note-label">Vamsi's thought:</div><div class="user-note-content">"${value}"</div>`;

  polaroid.classList.remove("locked");
  polaroid.classList.add("unlocked");
};

window.unlockMissingPolaroidText = function() {
  const input = document.getElementById("missing-quiz-input");
  const userGuess = document.getElementById("missing-user-guess");
  const polaroid = document.getElementById("missing-polaroid-card");

  if (!input || !polaroid || !userGuess) return;

  const value = input.value.trim() || "Missing you too.";
  userGuess.innerHTML = `<div class="user-note-label">Vamsi's thought:</div><div class="user-note-content">"${value}"</div>`;

  polaroid.classList.remove("locked");
  polaroid.classList.add("unlocked");
};

/**
 * 10. Setup Premium Hero Cursor Parallax & Direct Hovers
 */
function setupHeroInteractions() {
  const hero = document.getElementById("hero");
  const item = document.querySelector(".single-polaroid-container");
  if (!hero || !item) return;

  // Track cursor mousemove for subtle parallax
  hero.addEventListener("mousemove", (e) => {
    if (item.classList.contains("hovered")) return;

    const rect = hero.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    const moveX = x * 0.04;
    const moveY = y * 0.04;
    const rotOffset = (x * 0.008);

    item.style.transform = `translate(${moveX}px, ${moveY}px) rotate(${-2 + rotOffset}deg) scale(1)`;
  });

  // Reset positions on leave
  hero.addEventListener("mouseleave", () => {
    if (!item.classList.contains("hovered")) {
      item.style.transform = "";
    }
  });

  // Bind mouse hover zoom overrides
  item.addEventListener("mouseenter", () => {
    item.classList.add("hovered");
    item.style.transform = "translateY(-10px) rotate(0deg) scale(1.04)";
    item.style.zIndex = "25";
  });

  item.addEventListener("mouseleave", () => {
    item.classList.remove("hovered");
    item.style.transform = "";
    item.style.zIndex = "";
  });
}

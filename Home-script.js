document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.getElementById("navLinks");
  const hamburger = document.querySelector(".hamburger");

  function toggleMenu() {
    navLinks.classList.toggle("show");
  }

  if (hamburger) {
    hamburger.addEventListener("click", toggleMenu);
  }

  // Close nav when link is clicked
  document.querySelectorAll(".nav-links a, .dropdown-content a").forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("show");
    });
  });
});

// Optional: Search Function
function performSearch() {
  const query = document.getElementById("searchInput").value.trim();
  if (query) {
    alert("Searching for: " + query);
  } else {
    alert("Please enter a search term.");
  }
}

// Close dropdown when a link inside it is clicked
document.querySelectorAll(".dropdown-content a").forEach(link => {
  link.addEventListener("click", () => {
    const navLinks = document.getElementById("navLinks");
    navLinks.classList.remove("show");
  });
});

  let currentIndex = 0;
  const totalSlides = document.querySelectorAll('.slide').length;
  const slider = document.getElementById("slider");
  
  function moveLeft() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateSlider();
  }
  
  function moveRight() {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateSlider();
  }
  
  function updateSlider() {
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
    slider.style.transition = 'transform 1s ease'; // Ensure smooth transition for all slides
    const texts = document.querySelectorAll('.slide-text');
    texts.forEach((text, i) => {
      text.style.opacity = i === currentIndex ? '1' : '1';
      text.style.transition = 'opacity 1s ease'; // Ensure text opacity transitions smoothly
      text.style.animation = i === currentIndex ? 'slideUp 1s ease forwards' : 'none';
    });
  }
  
  // Auto-play every 5 seconds
  setInterval(moveRight, 5000);

  
  f// Trigger search on "Enter" key
document.getElementById("searchInput").addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      performSearch();
    }
  });
  
  function performSearch() {
    const query = document.getElementById("searchInput").value.trim();
    if (query) {
      alert(`Searching for: ${query}`);
      // You can replace the alert with real search logic
    } else {
      alert("Please enter a search term.");
    }
  }
  




document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll('.gallery-container img');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if(entry.isIntersecting) {
        entry.target.classList.add('show');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1
  });

  images.forEach(img => observer.observe(img));
});



const partnerTrack = document.getElementById("partnerTrack");
  const partnerNext = document.getElementById("partnerNext");
  const partnerPrev = document.getElementById("partnerPrev");

  let partnerIndex = 0;
  const totalPartnerSlides = 10;
  const maxVisible = window.innerWidth > 768 ? 5 : 1;

  function updatePartnerSlider() {
    const itemWidth = partnerTrack.clientWidth / totalPartnerSlides;
    const moveBy = partnerIndex * itemWidth;
    partnerTrack.style.transform = `translateX(-${moveBy}px)`;
  }

  function nextPartnerSlide() {
    partnerIndex = (partnerIndex + 1) % totalPartnerSlides;
    updatePartnerSlider();
  }

  function prevPartnerSlide() {
    partnerIndex = (partnerIndex - 1 + totalPartnerSlides) % totalPartnerSlides;
    updatePartnerSlider();
  }

  partnerNext.addEventListener("click", nextPartnerSlide);
  partnerPrev.addEventListener("click", prevPartnerSlide);

  // Auto Slide every 3 seconds
  setInterval(nextPartnerSlide, 3000);

  // Adjust slider on resize
  window.addEventListener("resize", updatePartnerSlider);
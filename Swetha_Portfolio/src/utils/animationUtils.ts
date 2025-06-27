
export function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  });
  
  const elements = document.querySelectorAll(".animate-on-scroll");
  elements.forEach((element) => observer.observe(element));
  
  return () => {
    elements.forEach((element) => observer.unobserve(element));
  };
}

export function smoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      
      const href = this.getAttribute('href');
      if (!href) return;
      
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth'
        });
        
        // Update URL without page reload
        history.pushState(null, '', href);
      }
    });
  });
}

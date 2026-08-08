/* Thanh Di Studio — hành vi dùng chung cho mọi trang con */
(function(){

  /* Nav hamburger toggle */
  var navToggle = document.querySelector('.nav-toggle');
  var navLinks = document.querySelector('.site-nav-links');
  if (navToggle && navLinks) {
    navToggle.addEventListener('click', function(){
      var isOpen = navLinks.classList.toggle('open');
      navToggle.classList.toggle('open', isOpen);
      navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
    navLinks.querySelectorAll('a').forEach(function(a){
      a.addEventListener('click', function(){
        navLinks.classList.remove('open');
        navToggle.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
    document.addEventListener('click', function(e){
      if (!navLinks.classList.contains('open')) return;
      if (navLinks.contains(e.target) || navToggle.contains(e.target)) return;
      navLinks.classList.remove('open');
      navToggle.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  }

  /* Reveal on scroll */
  var revealIO = new IntersectionObserver(function(entries){
    entries.forEach(function(e){
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        revealIO.unobserve(e.target);
      }
    });
  }, { threshold: 0.08 });
  document.querySelectorAll('.reveal').forEach(function(el){ revealIO.observe(el); });

  /* Back to top */
  var topBtn = document.getElementById('topBtn');
  if (topBtn) {
    window.addEventListener('scroll', function(){
      topBtn.classList.toggle('show', window.scrollY > 420);
    });
    topBtn.addEventListener('click', function(){
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* FAQ accordion — mọi .faq-item trong trang */
  document.querySelectorAll('.faq-item').forEach(function(item){
    var q = item.querySelector('.faq-q');
    if (!q) return;
    q.addEventListener('click', function(){
      var isOpen = item.classList.contains('open');
      item.parentElement.querySelectorAll('.faq-item.open').forEach(function(el){ el.classList.remove('open'); });
      if (!isOpen) item.classList.add('open');
    });
  });

})();

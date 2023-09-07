const appearOptions = {
    threshold: 0,
    rootMargin: "0% 0% -35% 0%"

};
const fades = document.querySelectorAll('.box')

 const appearOnScroll =  new IntersectionObserver
 (function(
     entries,
     appearOnScroll) {
         entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('fade');
                appearOnScroll.unobserve(entry.target);
            }
         });
     },
    appearOptions);

fades.forEach(fade => {
    appearOnScroll.observe(fade);
}

    );
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (!reduce) {
  // Revelações simples
  gsap.utils.toArray<HTMLElement>('[data-reveal]').forEach((el) => {
    gsap.from(el, {
      autoAlpha: 0,
      y: 42,
      duration: 0.9,
      ease: 'power3.out',
      scrollTrigger: { trigger: el, start: 'top 88%', once: true },
    });
  });

  // Grupos com stagger (cards, listas)
  gsap.utils.toArray<HTMLElement>('[data-reveal-group]').forEach((group) => {
    gsap.from(Array.from(group.children), {
      autoAlpha: 0,
      y: 44,
      duration: 0.85,
      stagger: 0.09,
      ease: 'power3.out',
      scrollTrigger: { trigger: group, start: 'top 85%', once: true },
    });
  });

  // Palavras acendendo com o scrub
  gsap.utils.toArray<HTMLElement>('[data-light-words]').forEach((el) => {
    const words = (el.textContent ?? '').trim().split(/\s+/);
    el.innerHTML = words.map((w) => `<span class="w">${w}</span>`).join(' ');
    gsap.fromTo(
      el.querySelectorAll<HTMLElement>('.w'),
      { color: 'rgb(233 238 251 / .14)' },
      {
        color: '#ffffff',
        textShadow: '0 0 26px rgb(255 194 75 / .45)',
        stagger: 0.18,
        ease: 'none',
        scrollTrigger: { trigger: el, start: 'top 78%', end: 'bottom 48%', scrub: 0.6 },
      }
    );
  });

  // Linha de energia percorrendo os divisores
  gsap.utils.toArray<HTMLElement>('[data-energy]').forEach((line) => {
    gsap.fromTo(
      line,
      { scaleX: 0 },
      {
        scaleX: 1,
        transformOrigin: 'left center',
        ease: 'none',
        scrollTrigger: { trigger: line, start: 'top 95%', end: 'top 40%', scrub: 0.5 },
      }
    );
  });

  // Galeria horizontal de projetos
  const track = document.querySelector<HTMLElement>('[data-hgallery]');
  if (track) {
    const distance = () => Math.max(0, track.scrollWidth - window.innerWidth + 48);
    gsap.to(track, {
      x: () => -distance(),
      ease: 'none',
      scrollTrigger: {
        trigger: track.parentElement!,
        start: 'top top',
        end: () => '+=' + distance(),
        pin: true,
        scrub: 0.8,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      },
    });
  }
}

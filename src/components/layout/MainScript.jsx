'use client';

import { useEffect } from 'react';
// Import only React hooks directly - they work in server components
import dynamic from 'next/dynamic';

// Create a nested component that will only run on the client
function ScriptInitializer() {
  useEffect(() => {
    const initScript = async () => {
      // Dynamically import all browser-only modules
      const AOS = (await import('aos')).default;
      const Swiper = (await import('swiper')).Swiper;
      const { Navigation, Pagination } = await import('swiper/modules');
      const GLightbox = (await import('glightbox')).default;

      // Use strict mode
      "use strict";

    /**
     * Apply .scrolled class to the body as the page is scrolled down
     */
    function toggleScrolled() {
      const selectBody = document.querySelector('body');
      const selectHeader = document.querySelector('#header');
      if (!selectHeader || (!selectHeader.classList.contains('scroll-up-sticky') &&
          !selectHeader.classList.contains('sticky-top') &&
          !selectHeader.classList.contains('fixed-top'))) return;
      window.scrollY > 100 ? selectBody.classList.add('scrolled') : selectBody.classList.remove('scrolled');
    }

    document.addEventListener('scroll', toggleScrolled);
    toggleScrolled(); // Call on initial load

    /**
     * Mobile nav toggle
     */
    const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');

    function mobileNavToogle() {
      document.querySelector('body').classList.toggle('mobile-nav-active');
      mobileNavToggleBtn.classList.toggle('bi-list');
      mobileNavToggleBtn.classList.toggle('bi-x');
    }

    if (mobileNavToggleBtn) {
      mobileNavToggleBtn.addEventListener('click', mobileNavToogle);
    }

    /**
     * Hide mobile nav on same-page/hash links
     */
    document.querySelectorAll('#navmenu a').forEach(navmenu => {
      navmenu.addEventListener('click', () => {
        if (document.querySelector('.mobile-nav-active')) {
          mobileNavToogle();
        }
      });
    });

    /**
     * Toggle mobile nav dropdowns
     */
    document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
      navmenu.addEventListener('click', function(e) {
        e.preventDefault();
        this.parentNode.classList.toggle('active');
        this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
        e.stopImmediatePropagation();
      });
    });

    /**
     * Preloader
     */
    const preloader = document.querySelector('#preloader');
    if (preloader) {
      setTimeout(() => {
        preloader.remove();
      }, 1000);
    }

    /**
     * Scroll top button
     */
    let scrollTop = document.querySelector('.scroll-top');

    function toggleScrollTop() {
      if (scrollTop) {
        window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
      }
    }

    if (scrollTop) {
      scrollTop.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      });
    }

    toggleScrollTop();
    document.addEventListener('scroll', toggleScrollTop);

    /**
     * Animation on scroll function and init
     */
    function aosInit() {
      AOS.init({
        duration: 600,
        easing: 'ease-in-out',
        once: true,
        mirror: false
      });
    }
    aosInit();

    /**
     * Init swiper sliders
     */
    function initSwiper() {
      document.querySelectorAll(".swiper").forEach(function(swiperElement) {
        new Swiper(swiperElement, {
          modules: [Navigation, Pagination],
          slidesPerView: 'auto',
          spaceBetween: 30,
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
          },
        });
      });
    }

    initSwiper();

      /**
       * Initiate glightbox
       */
      const glightbox = GLightbox({
        selector: '.glightbox'
      });
    };

    // Call the init function
    initScript();

    // Cleanup function
    return () => {
      document.removeEventListener('scroll', () => {});
      
      const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');
      if (mobileNavToggleBtn) {
        mobileNavToggleBtn.removeEventListener('click', () => {});
      }

      const scrollTop = document.querySelector('.scroll-top');
      if (scrollTop) {
        scrollTop.removeEventListener('click', () => {});
      }

      document.querySelectorAll('#navmenu a').forEach(navmenu => {
        navmenu.removeEventListener('click', () => {});
      });

      document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
        navmenu.removeEventListener('click', () => {});
      });
    };
  }, []);

  return null;
}

// Use dynamic import with SSR disabled for the component that uses browser APIs
const MainScript = dynamic(() => Promise.resolve(ScriptInitializer), { ssr: false });

export default MainScript;


new Swiper('.movie-wrapper', {
    watchOverflow: true,
    spaceBetween: 15,
    cssMode: true,
    // If we need pagination
   

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },


    breakpoints: {
        
        0: {
            slidesPerView: 2.5
        },
        620: {
            slidesPerView: 3
        },

        750: {
            slidesPerView: 3.5
        },
        850: {
            slidesPerView: 4
        },
        950: {
            slidesPerView: 4.5
        },
        1300: {
            slidesPerView: 5.5
        },
    
        1700: {
            slidesPerView: 6
        },

    
    }
});



// document.addEventListener("DOMContentLoaded", function () {
//   const faqItems = document.querySelectorAll(".hero");

//   faqItems.forEach((item) => {
//     item.addEventListener("click", () => {
//       const answer = item.nextElementSibling; // Get the .faq-answer div right after .hero
//       const icon = item.querySelector(".plus");

//       const isOpen = answer.style.display === "block";

//       // Close all answers and reset icons
//       faqItems.forEach((el) => {
//         el.nextElementSibling.style.display = "none";
//         el.querySelector(".plus").textContent = "+";
//       });

//       // Toggle current one if it wasn't open
//       if (!isOpen) {
//         answer.style.display = "block";
//         icon.textContent = "×";
//       }
//     });
//   });
// });

document.addEventListener("DOMContentLoaded", function () {
  const faqItems = document.querySelectorAll(".hero");

  faqItems.forEach((item) => {
    item.addEventListener("click", () => {
      const answer = item.nextElementSibling;
      const icon = item.querySelector(".plus");
      const isOpen = answer.classList.contains("open");

      // Close all
      document.querySelectorAll(".faq-answer").forEach((ans) => {
        ans.classList.remove("open");
      });
      document.querySelectorAll(".plus").forEach((ic) => {
        ic.textContent = "+";
      });

      // Open current if it was closed
      if (!isOpen) {
        answer.classList.add("open");
        icon.textContent = "×";
      }
    });
  });
});






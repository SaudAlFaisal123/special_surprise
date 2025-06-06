// background
// Basic welcome animation or logic can go here
document.addEventListener("DOMContentLoaded", () => {
    console.log("Farewell page loaded 🎭");
  
    // You can later add animation or interactivity here
  });
  
  
  //confette code
  document.addEventListener("DOMContentLoaded", () => {
    tsParticles.load("tsparticles", {
      fullScreen: {
        enable: false, // Important: disables global full screen
        zIndex: 1
      },
      particles: {
        color: {
          value: ["#FFFFFF", "#FFD700"]
        },
        move: {
          direction: "bottom",
          enable: true,
          outModes: {
            default: "out"
          },
          size: true,
          speed: {
            min: 1,
            max: 3
          }
        },
        number: {
          value: 500,
          density: {
            enable: true,
            area: 800
          }
        },
        opacity: {
          value: 1,
          animation: {
            enable: false,
            startValue: "max",
            destroy: "min",
            speed: 0.3,
            sync: true
          }
        },
        rotate: {
          value: { min: 0, max: 360 },
          direction: "random",
          move: true,
          animation: {
            enable: true,
            speed: 60
          }
        },
        tilt: {
          direction: "random",
          enable: true,
          move: true,
          value: { min: 0, max: 360 },
          animation: {
            enable: true,
            speed: 60
          }
        },
        shape: {
          type: ["circle", "square"]
        },
        size: {
          value: { min: 2, max: 4 }
        },
        roll: {
          darken: { enable: true, value: 30 },
          enlighten: { enable: true, value: 30 },
          enable: true,
          speed: { min: 15, max: 25 }
        },
        wobble: {
          distance: 30,
          enable: true,
          move: true,
          speed: { min: -15, max: 15 }
        }
      }
    });
  });
  
  
  //message
  const message = `Dear President, Vice President & Advisor of BUDC...
  Ye ek chota sa gift ha ap logo ke lye na sirf meri trf se blke on behalf of whole BUDC, i
  know ke ye kuch itna bara gift nhi ha but still we present this to you guys, 
  after all the things you did for us, you guys were the best. We made lots of memories
  but as the saying goes all good things must come to an end. Khne ko alfaz nhi but we want to thankyou
  from the bottom of our hearts and wish you all the very best of luck in the future and we hope, no not 
  just hope blke we will continue the legacy you laid for us and take it to the top. \n Thankyou for everything.`;
  
  let index = 0;
  const speed = 90; // typing speed in ms
  
  function typeWriter() {
    if (index < message.length) {
      const el = document.getElementById("typewriter-text");
      el.innerHTML += message.charAt(index);
      index++;
      setTimeout(typeWriter, speed);
    }
  }
  
  document.addEventListener("DOMContentLoaded", typeWriter);
  
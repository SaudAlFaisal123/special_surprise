

//confette falling
tsParticles.load({
    id: "tsparticles",
    options: {
      fullScreen: {
        enable: false // Disable fullscreen so it stays inside our div
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
    }
  });
  
  // Navigation Buttons
  backToWelcomeBtn.addEventListener("click", () => {
    window.location.href = "page2.html";
});

nextSurpriseBtn.addEventListener("click", () => {
    window.location.href = "end.html";
});
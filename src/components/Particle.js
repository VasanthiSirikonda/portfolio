import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

function Particle() {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        particles: {
          number: {
            value: 160,
            density: {
              enable: true,
              area: 1500, // ✅ renamed from value_area
            },
          },
          links: {
            enable: false,
            opacity: 0.03,
          },
          move: {
            direction: "right",
            speed: 0.05,
          },
          size: {
            value: 1,
          },
          opacity: {
            animation: {
              enable: true,
              speed: 1,
              minimumValue: 0.05,
            },
          },
        },
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
          },
          modes: {
            push: {
              quantity: 1,
            },
          },
        },
        detectRetina: true,
      }}
    />
  );
}

export default Particle;
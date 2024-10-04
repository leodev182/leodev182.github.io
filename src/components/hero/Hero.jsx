// import React, { useEffect } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import "./Hero.css"; // Importa el archivo CSS

// export const Hero = () => {
//   console.clear();

//   useEffect(() => {
//     gsap.registerPlugin(ScrollTrigger);

//     const tl = gsap
//       .timeline({
//         scrollTrigger: {
//           trigger: ".wrapper",
//           start: "top top",
//           end: "+=150%",
//           pin: true,
//           scrub: true,
//           markers: true,
//         },
//       })
//       .to("img", {
//         scale: 2,
//         z: 350,
//         transformOrigin: "center center",
//         ease: "power1.inOut",
//       })
//       .to(
//         ".section.hero",
//         {
//           scale: 1.1,
//           transformOrigin: "center center",
//           ease: "power1.inOut",
//         },
//         "<"
//       );

//     return () => {
//       tl.kill(); // Limpia la animación al desmontar el componente
//     };
//   }, []);

//   return (
//     <>
//       <div className="wrapper">
//         <div className="content">
//           <section className="section hero"></section>
//           <section className="section gradient-purple"></section>
//           <section className="section gradient-blue"></section>
//         </div>
//         <div className="image-container">
//           <img
//             src="https://assets-global.website-files.com/63ec206c5542613e2e5aa784/643312a6bc4ac122fc4e3afa_main%20home.webp"
//             alt="image"
//           />
//         </div>
//       </div>
//     </>
//   );
// };

import React, { useEffect, useContext } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Hero.css";
import { NavbarContext } from "../../contexts/NavbarContext.jsx";

export const Hero = () => {
  const { setBgColor } = useContext(NavbarContext);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.create({
      trigger: ".wrapper",
      start: "top top",
      end: "+=150%",
      onUpdate: (self) => {
        const progress = self.progress.toFixed(2);
        if (progress < 0.5) {
          setBgColor("transparent");
        } else {
          setBgColor("rgba(255, 255, 255, 1)");
        }
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [setBgColor]);

  useEffect(() => {
    const tl = gsap
      .timeline({
        scrollTrigger: {
          trigger: ".wrapper",
          start: "top top",
          end: "+=150%",
          pin: true,
          scrub: true,
          markers: true,
        },
      })
      .to("img", {
        scale: 2,
        z: 350,
        transformOrigin: "center center",
        ease: "power1.inOut",
      })
      .to(
        ".section.hero",
        {
          scale: 1.1,
          transformOrigin: "center center",
          ease: "power1.inOut",
        },
        "<"
      );

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div className="wrapper">
      <div className="content">
        <section className="section hero"></section>
        <section className="section gradient-purple"></section>
        <section className="section gradient-blue"></section>
      </div>
      <div className="image-container">
        <img
          src="https://assets-global.website-files.com/63ec206c5542613e2e5aa784/643312a6bc4ac122fc4e3afa_main%20home.webp"
          alt="image"
        />
      </div>
    </div>
  );
};

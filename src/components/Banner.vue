<template>

    <main id="home">
        <div class="vignette"></div>
        <div class="vignette-img"></div>

        <img src="../assets/img/background.png" alt="" data-speedx="0.3" data-speedy="0.38" data-speedz="0" data-rotate="0" data-distance="-200" class="parallax bg-img">
        <img src="../assets/img/fog_7.png" alt="" data-speedx="0.27" data-speedy="0.32" data-speedz="0" data-rotate="0" data-distance="850" class="parallax fog-7">
        <img src="../assets/img/mountain_10.png" alt="" data-speedx="0.195" data-speedy="0.305" data-speedz="0" data-rotate="0" data-distance="1100" class="parallax mountain-10">
        <img src="../assets/img/fog_6.png" alt="" data-speedx="0.25" data-speedy="0.28" data-speedz="0"data-rotate="0" data-distance="1400" class="parallax fog-6">
        <img src="../assets/img/mountain_9.png" alt="" data-speedx="0.125" data-speedy="0.155" data-speedz="0.15" data-rotate="0" data-distance="1700" class="parallax mountain-9">
        <img src="../assets/img/mountain_8.png" alt="" data-speedx="0.1" data-speedy="0.11" data-speedz="0" data-rotate="0.02" data-distance="1800" class="parallax mountain-8">
        <img src="../assets/img/fog_5.png" alt="" data-speedx="0.16" data-speedy="0.105" data-speedz="0" data-rotate="0" data-distance="1900" class="parallax fog-5">
        <img src="../assets/img/mountain_7.png" alt="" data-speedx="0.1" data-speedy="0.07" data-speedz="0" data-rotate="0.09" data-distance="2000" class="parallax mountain-7">
        <div class="text parallax" data-speedx="0.07" data-rotate="0.11" data-distance="0">
            <h2> Emily Dickinson</h2>
            <h1>"A natureza é o que sabemos sem ter a arte de exprimi-lo"</h1> 
        </div>
        <img src="../assets/img/mountain_6.png" alt="" data-speedx="0.065" data-speedy="0.05" data-speedz="0.05" data-rotate="0.12" data-distance="2300" class="parallax mountain-6">
        <img src="../assets/img/fog_4.png" alt="" data-speedx="0.135" data-speedy="0.2" data-speedz="0" data-rotate="0" data-distance="2400" class="parallax fog-4">
        <img src="../assets/img/mountain_5.png" alt="" data-speedx="0.08" data-speedy="0.08" data-speedz="0.13" data-rotate="0" data-distance="2550" class="parallax mountain-5">
        <img src="../assets/img/fog_3.png" alt="" data-speedx="0.11" data-speedy="0.018" data-speedz="0" data-rotate="0.14" data-distance="2800" class="parallax fog-3">
        <img src="../assets/img/mountain_4.png" alt="" data-speedx="0.059" data-speedy="0.024" data-speedz="0" data-rotate="0.05" data-distance="3200" class="parallax mountain-4">
        <img src="../assets/img/mountain_3.png" alt="" data-speedx="0.04" data-speedy="0.018" data-speedz="0.32" data-rotate="0.05" data-distance="3400" class="parallax mountain-3">
        <img src="../assets/img/fog_2.png" alt="" data-speedx="0.15" data-speedy="0.0115" data-speedz="0" data-rotate="0" data-distance="3600" class="parallax fog-2">
        <img src="../assets/img/mountain_2.png" alt="" data-speedx="0.0235" data-speedy="0.013" data-speedz="0" data-rotate="0.15" data-distance="3800" class="parallax mountain-2">
        <img src="../assets/img/mountain_1.png" alt="" data-speedx="0.027" data-speedy="0.018" data-speedz="0.53" data-rotate="0.2" data-distance="4000" class="parallax mountain-1"><!-- problema -->
        <img src="../assets/img/sun_rays.png" alt="" class="sun-rays">
        <img src="../assets/img/black_shadow.png" alt="" class="black-shadow">
        <img src="../assets/img/fog_1.png" alt="" data-speedx="0.12" data-speedy="0.01" data-speedz="0" data-distance="4200" class="parallax fog-1">
        
    </main>
</template>

<script>
import { gsap } from "gsap";

export default {
  name: 'Banner',

  mounted() {
    const parallax_el = document.querySelectorAll('.parallax');

    const updateParallax = (xValue, yValue) => {
    const rotateDegree = (xValue / window.innerWidth) * 20;

      parallax_el.forEach((el) => {
        const speedx = parseFloat(el.dataset.speedx) || 0;
        const speedy = parseFloat(el.dataset.speedy) || 0;
        const speedz = parseFloat(el.dataset.speedz) || 0;
        const rotate = parseFloat(el.dataset.rotate) || 0;

        const zValue = xValue * speedz;

        el.style.transform = `
          perspective(2300px)
          translateX(calc(-50% + ${-xValue * speedx}px))
          translateY(calc(-50% + ${yValue * speedy}px))
          translateZ(${zValue}px)
          rotateY(${rotateDegree * rotate}deg)
        `;
      });
    };

    // Posição inicial (quando a página carrega)
    updateParallax(0, 0);

      // Animação inicial com GSAP
      Array.from(parallax_el)
          .filter(el => !el.classList.contains("text"))
          .forEach(el => {
            gsap.from(el, {
            top: `${el.offsetHeight / 2 + +el.dataset.distance}px`,
                duration: 3.5,
            ease: "power3.out"
            });
      })
      
    // Atualiza conforme o mouse se move
    window.addEventListener('mousemove', (e) => {
      const xValue = e.clientX - window.innerWidth / 2;
      const yValue = e.clientY - window.innerHeight / 2;

      updateParallax(xValue, yValue);
    });
  }
};

</script>

<style scoped>
main{
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    position: relative;
}

.parallax{
    pointer-events: none;
    transition: 0.45s cubic-bezier(0.2, 0.49, 0.38, 0.99);
    will-change: transform;
    backface-visibility: hidden;
}

.bg-img{
    position: absolute;
    width: 2800px;
    top: calc(50% - 390px);
    left: calc(50% + 10px);
    z-index: 1;
}

.fog-1{
    position: absolute;
    z-index: 2;
    width: 1600px;
    top: calc(100% - 355px);
    left: 50%;
}

.fog-2{
    position: absolute;
    z-index: 4;
    width: 1833px;
    top: calc(50% - 95px);
    left: calc(50% + 7px);
}

.fog-3{
    position: absolute;
    z-index: 7;
    width: 449px;
    top: calc(50% + 171px);
    left: calc(50% + 29px);
}

.fog-4{
    position: absolute;
    z-index: 11;
    width: 543px;
    top: calc(50% + 242px);
    left: calc(50% - 64px);
}

.fog-5{
    position: absolute;
    z-index: 6;
    width: 1600px;
    top: calc(50% + 110px);
    left: calc(50% - 15px);
}

.fog-6{
    position: absolute;
    z-index: 5;
    width: 590px;
    top: calc(50% + 223px);
    left: calc(50% - 60px);
}

.fog-7{
    position: absolute;
    z-index: 2;
    width: 1900px;
    top: calc(50% - 100px);
    left: calc(50% + 300px);
}

.mountain-1{
    position: absolute;
    z-index: 18;
    width: 450px;
    top: calc(50% + 91.5px);
    left: calc(46% - 601px);
}

.mountain-2{
    position: absolute;
    z-index: 8;
    width: 625px;
    top: calc(50% + 188px);
    left: calc(50% - 412px);
}

.mountain-3{
    position: absolute;
    z-index: 15;
    width: 419px;
    top: calc(50% + 133px);
    left: calc(50% + 736px);
}

.mountain-4{
    position: absolute;
    z-index: 8;
    width: 780px;
    top: calc(50% + 196px);
    left: calc(50% - 381.5px);
}

.mountain-5{
    position: absolute;
    z-index: 12;
    width: 583px;
    top: calc(50% + 250px);
    left: calc(50% + 130px);
}

.mountain-6{
    position: absolute;
    z-index: 10;
    width: 408px;
    top: calc(50% + 60px);
    left: calc(50% + 590px);
}

.mountain-7{
    position: absolute;
    z-index: 8;
    width: 538px;
    top: calc(50% + 123px);
    left: calc(50% + 305px);
}

.mountain-8{
    position: absolute;
    z-index: 6;
    width: 810px;
    top: calc(50% + 86px);
    left: calc(50% - 202px);
}

.mountain-9{
    position: absolute;
    z-index: 5;
    width: 470px;
    top: calc(50% + 113px);
    left: calc(50% - 457px);
}

.mountain-10{
    position: absolute;
    z-index: 3;
    width: 870px;
    top: calc(50% + 69px);
    left: calc(50% - 230px);
}

.text{
    position: absolute;
    z-index: 9;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    text-transform: uppercase;
    color: var(--color-p);
    text-shadow: 1px 0 6px var(--background-color);
    pointer-events: auto;
}

.text h2{
    font-size: 2rem;
    font-weight: 100;
    line-height: 0.88;
}

.text h1{
    font-weight: 8200;
    font-size:3rem;  
}

.sun-rays{
    position: absolute;
    z-index: 19;
    width: 595px;
    top: 0;
    right:0;
    pointer-events: auto;
}

.black-shadow{
    position: absolute;
    z-index: 20;
    width: 100%;
    height: 150px;
    bottom: 0;
    left: 0;
    pointer-events: auto;
}

.vignette{
    position: absolute;
    z-index: 22;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    /* background: radial-gradient(ellipse at center, rgba(0,0,0,0) 60%, rgba(0,0,0,0.7) 100%);
    background-position: cover; */
    background: linear-gradient(0deg,#444444 0%, rgba(2, 7, 13, 0) 51%);
}

.vignette-img{
    position: absolute;
    z-index: 20;
    width: 100%;
    height: 100%;
    top: 20em;
    left: 0;
    background-image: url(../assets/img/fog_6.png);
    background-repeat: no-repeat;
}

</style>
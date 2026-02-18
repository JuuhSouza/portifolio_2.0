<template>
    <footer>
    <div class="ondas">
        <div class="onda" id="onda1"></div>
        <div class="onda" id="onda2"></div>
        <div class="onda" id="onda3"></div>
        <div class="onda" id="onda4"></div>
    </div>
    <ul class="social_icon">
        <li><a href="https://github.com/JuuhSouza"><i class="fa-brands fa-github"></i></a></li>
        <li><a href="https://www.linkedin.com/in/j%C3%BAlia-souza-0577572b2/"><i class="fa-brands fa-linkedin"></i></a></li>
       <!--  <li><a href="https://www.instagram.com/juliasouzak4/"> <i class="fa-brands fa-instagram"></i></a></li> -->
    </ul>

    <ul class="menu">
        <li><router-link :to="{ path: '/', hash: '#home'}">Início</router-link></li>
        <li><router-link :to="{ path: '/', hash: '#soft-skills'}">Soft Skills</router-link></li>
        <li><router-link :to="{ path: '/', hash: '#projetos'}">Projetos</router-link></li>
        <li><router-link :to="{ path: '/', hash: '#formacoes'}">Formações</router-link></li>
    </ul>

    <p>Desenvolvido por Júlia Souza | &copy; 2026</p>
    
   </footer>
</template>

<script>
    export default {
        name : "Footer",
    }
</script>

<style scoped>
footer {
    position: relative;
    widows: 100%;
    background: var(--background-color-card-footer);
    min-height: 100px;
    padding: 20px 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 2em;
}

footer .social_icon,
footer .menu {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px 0;
}

footer .social_icon li,
footer .menu li {
    list-style: none;
    /* tirar ponto */
}

footer .social_icon li a {
    font-size: 2em;
    color: var(--color-text);
    margin: 0 10px;
    display: inline-block;
    transition: 0.5s;
}

footer .social_icon li a:hover {
    transform: translateY(-10px);
}

footer .menu li a {
    font-size: 1.2em;
    color: var(--color-text);
    margin: 0 10px;
    display: inline-block;
    text-decoration: none;
    opacity: 0.75;
}

footer .menu li a:hover {
    opacity: 1;
}

footer p {
    color: var(--color-text);
    text-align: center;
    margin-top: 15px;
    margin-bottom: 10px;
    font-size: 1em;
}

footer .onda {
    position: absolute;
    top: -100px;
    left: 0;
    width: 100%;
    height: 100px;
    background: url(../assets/img/wave.png);
    background-size: 1000px 100px;

}

footer .onda#onda1 {
    z-index: 1000;
    opacity: 1;
    bottom: 0;
    animation: animaonda 10s linear infinite;
}

footer .onda#onda2 {
    z-index: 999;
    opacity: 0.5;
    bottom: 10px;
    animation: animaonda2 15s linear infinite;
}

footer .onda#onda3 {
    z-index: 999;
    opacity: 0.2;
    bottom: 15px;
    animation: animaonda2 3s linear infinite;
}

footer .onda#onda4 {
    z-index: 999;
    opacity: 0.7;
    bottom: 20px;
    animation: animaonda2 7s linear infinite;
}

@keyframes animaonda {
    0% {
        background-position-x: 1000px;
    }

    100% {
        background-position-x: 0px;
    }
}

@keyframes animaonda2 {
    0% {
        background-position-x: 0px;
    }

    100% {
        background-position-x: 1000px;
    }
}

</style>
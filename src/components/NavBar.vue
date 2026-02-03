<template>
    <header>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <nav>
        <img src="../assets/img/brasao.tucano.png" alt="" class="logo">
        <ul>
            <li><router-link to="/">Início</router-link></li>
            <li><router-link to="/about">Sobre</router-link></li>
            <li><router-link to="/about">Soft Skills</router-link></li>
            <!-- <li class="humburguer-menu">
                <a href="#">
                    <div class="bar"></div>
                </a>
            </li> -->
        </ul>
    </nav>
    </header>
</template>

<script>
    export default {
        name: "NavBar"
    }
</script>

<style scoped>
::selection{
    background-color: rgba(255, 255, 255, 0.2);
}

.logo{
    width: 60px;
    height: 60px;
    margin-left: 20px;
}

header{
    z-index: 9999;
    padding: 0.9rem 0;
    top: 0;
    left: 0;
    position: absolute;
    width: 100%;
    border-bottom: 1px solid var(--nav-color-border);
}

nav{
    /* background-color: red; */
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 2rem;
    display: flex;
    justify-content: space-between;
}

nav ul{
    display: flex;
    list-style: none;
    align-items: center;
}

nav ul a{
    text-decoration: none;
    color: var(--nav-color-a);
    padding: 0 1.5rem;
    transform: uppercase;
   /*  font-weight: 300; */
    font-size: var(--font-size);
    transition: all .3s ease
}

nav ul a:hover{
    color: var(--nav-color-hover);
}

/* .hamburguer-menu{
    padding-left:1.5rem ;
}

.hamburguer-menu a{
    width: 37px;
    height: 37px;
    display: flex;
    border-radius: 50%;
    background-color: blue;
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    text-align: center;
}

.hamburguer-menu .bar{
    width: 52%;
    height: 1.3rem;
    background-color: white;
    border-radius:2px ;
}
 */

</style>
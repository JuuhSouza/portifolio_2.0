<template>
    <nav>
        <router-link to="/">Início</router-link> |
        <router-link to="/about">Sobre</router-link> |
        <router-link to="/about">Soft Skills</router-link>
    </nav>
</template>

<script>
    export default {
        name: "NavBar"
    }
</script>

<style scoped>
nav{
    background-color: red;
    padding: 10px;
    text-align: end;
}

nav a {
    margin: 0 20px;
    font-size: var(--font-size);
    text-decoration: none;
    color: black;
    font-family: var(--font);
    transition: all .4s ease;
}   

nav a:hover{
   color:white;
   transform: translateX(-2px);
}   

</style>
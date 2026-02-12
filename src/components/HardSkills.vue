<template>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    
<section class="hardskills-section">
    <div class="title">
            <h1>Hard Skills</h1>
        </div>

    <div class="container-card">  
        <div class="card-box"
            v-for="(skill, index) in skills"
            :key="index" 
            :class="'shape-' + (index % 3 + 1)"
            data-aos="fade-down-right">
            <div class="content">
                <i v-if="skill.icon.startsWith('fa')" :class="skill.icon"></i>
                <img v-else :src="skill.icon" :alt="skill.name">

                <p>{{ skill.name }}</p>
            </div>     
        </div>      
    </div>      
</section>
</template>

<script>
export default {
    name: 'HardSkills',
    data() {
        return {
            skills: [
                { name: 'CSS 3', icon: 'fa-brands fa-css3-alt' },
                { name: 'HTML 5', icon: 'fa-brands fa-html5' },
                { name: 'vue.js', icon: 'fa-brands fa-vuejs' },
                { name: 'JavaScript', icon: 'fa-brands fa-js' },
                { name: 'PostgreSQL', icon: 'https://img.icons8.com/carbon-copy/2x/postgresql.png' },
                { name: 'Java', icon: 'fa-brands fa-java' },
        ]
    }
  }
}

</script>

<style scoped>
.title h1{
    background-color: var(--background-color-card);
    text-align: center;
    font-size: 2.8em;
 /*    margin-top: -3em; */
    padding: 1em 0;
    color: var(--title-color-card);
}
.container-card{
    background: var(--background-color-card-hardskill);
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    padding: 50px 0;
    gap: 40px 60px;
}

.card-box{
    position: relative;
    width: 300px;
    height: 300px;
    box-shadow: inset 20px 20px 20px rgba(255, 255, 255, 0.2),
    25px 35px 20px rgba(255, 255, 255, 0.05),
    25px 30px 30px rgba(255, 255, 255, 0),
    inset -20px -20px 25px rgba(255, 255, 255, 0.103);
    transition: all 0.5s ease-in-out;
    display: flex;
    justify-content: center;
    align-items: center;transition: border-radius 0.5s ease-in-out, transform 0.3s ease !important;
}

.card-box:hover {
    border-radius: 50% !important;
    transform: scale(1.05) !important; /* Um leve aumento ajuda a ver que o hover funcionou */
}

.shape-1 { 
    border-radius: 47% 53% 70% 30% / 30% 43% 57% 70%; 
}
.shape-2 { 
    border-radius: 61% 39% 52% 48% / 44% 59% 41% 56%; 
}
.shape-3 {
     border-radius: 35% 65% 31% 69% / 57% 59% 41% 43%; 
    }

.card-box::before{
    content: '';
    position: absolute;
    width: 15px;
    height: 15px;
    top: 90px;
    left: 110px;
    background-color: rgba(255, 255, 255, 0.164);
    border-radius: 50%;
    opacity: 0.9;
}

.card-box::after{
    content: '';
    position: absolute;
    width: 35px;
    height: 35px;
    top: 50px;
    left: 90px;
    background-color: rgba(255, 255, 255, 0.267);
    border-radius: 50%;
    opacity: 0.9;
}

.content{
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    padding: 40px;
    gap: 15px;
}

.content img{
    width: 100%;
}

.content i{
    font-size: 8em;
    color: var(--icone-hardskill);
}

.content p{
    font-size: 1.5em;
    color: var(--icone-hardskill);
    margin-top: -.9em;
}

</style>
<template>
    <div class="title">
            <h1>SoftSkills</h1>
        </div>

    <div class="container-card">  
        <div class="card-box">
            <div class="content">
                <h1>Soft Skills</h1> 
                <p>Proatividade</p>
            </div>     
        </div>
        
        <div class="card-box">
            <div class="content">
                <h1>Soft Skills</h1> 
                <p>textooo</p>
            </div>     
        </div>
        
        <div class="card-box">
            <div class="content">
                <h1>Soft Skills</h1> 
                <p>textooo</p>
            </div>     
        </div>
        
    </div>
</template>

<script>
export default {
  name: 'SoftSkills',
}

</script>

<style scoped>
.title h1{
    background-color: #0D0805;
    text-align: center;
    font-size: 2.8em;
    margin-top: -3em;
    padding: 1em 0;
    color: var(--title-color-card);
}
.container-card{
    background: linear-gradient(0deg,rgba(0, 4, 13, 1) 0%, rgba(0, 4, 13, 1) 51%, rgba(13, 8, 5, 1) 88%);
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
    width: 400px;
    height: 400px;
    box-shadow: inset 20px 20px 20px rgba(255, 255, 255, 0.2),
    25px 35px 20px rgba(255, 255, 255, 0.05),
    25px 30px 30px rgba(255, 255, 255, 0),
    inset -20px -20px 25px rgba(255, 255, 255, 0.103);
    transition: all 0.5s ease-in-out;
    display: flex;
    justify-content: center;
    align-items: center;
}

.card-box:nth-child(1){
    border-radius: 47% 53% 70% 30% / 30% 43% 57% 70%;
}

.card-box:nth-child(2){
    border-radius: 61% 39% 52% 48% / 44% 59% 41% 56%;
}

.card-box:nth-child(3){
    border-radius: 35% 65% 31% 69% / 57% 59% 41% 43%;
}

.card-box:hover{
    border-radius: 50% 
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

.content h1{
    position: relative;
    padding: 2em;
    top: -1em;
    width: 300px auto;
    height: 80px;
    border-radius: 20%;
    box-shadow: inset 2px 5px 10px rgba(0, 0, 0, 0.1),
    inset -2px -5px 10px rgba(255, 255, 255, 0.1),
    15px 15px 10px rgba(0, 0, 0, 0.5),
    15px 10px 15px rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5em;
    color: var(--title-color-card);
}

.content p{
    font-size: 1.2em;
    color: var(--p-color);
}

</style>
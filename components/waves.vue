<template>
    <div class="ocean">
        <div class="wave"></div>
        <div class="wave"></div>
    </div>
</template>

<script>
export default {

}
</script>

<style>

.ocean { 
    height: 5%;
    width:100%;
    position:absolute;
    bottom:0;
    left:0;
    background: #1B2034;
}

.wave {
    background: url('../assets/imgs/wave.svg') repeat-x; 
    position: absolute;
    top: -198px;
    width: 6400px;
    height: 198px;
    animation: wave 10s cubic-bezier( 0.36, 0.45, 0.63, 0.53) infinite;
    transform: translate3d(0, 0, 0);
   
}

.wave:nth-of-type(1) {
    opacity: 0.8;
}

.wave:nth-of-type(2) {
    top: -175px;
    animation: wave 10s cubic-bezier( 0.36, 0.45, 0.63, 0.53) -.125s infinite, swell 5s ease -1.25s infinite;
    opacity: 1;
}

@keyframes wave {
    0% {
        margin-left: 0;
    }
    100% {
        margin-left: -1600px;
    }
}

@keyframes swell {
    0%, 100% {
        transform: translate3d(0,-23px,0);
    }
    50% {
        transform: translate3d(0,10px,0);
    }}
</style>
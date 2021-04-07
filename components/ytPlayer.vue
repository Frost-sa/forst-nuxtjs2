<template>
  <div class="yt-container">
    <iframe
        src="https://www.youtube.com/embed/Hh_kiZTTBr0" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen>
    </iframe>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.yt-container{
    position: absolute;  left: 0; top: 0 ;bottom: 0; 
    width: 100%;
}
iframe{
    height: 100%;
    width: 100%;
}
</style>
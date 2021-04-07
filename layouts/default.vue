<template>
  <div class="frost-app">
    <Snowf :amount="50" :size="10" :speed="0.5" :wind="-0.5" :opacity="0.5" :swing="1" :image="'https://svgshare.com/i/V24.svg'" :zIndex="null" :resize="true" color="#fff" />
     <frost-nav-bar></frost-nav-bar>
     <div class="ScrollablePage">
        <Nuxt />
     </div>
    
     <div class="waves-container">
          <waves></waves>
      </div>
  </div>
</template>

<script>
  import Snowf from '~/components/snowf.vue'
  import Waves from '~/components/waves.vue'
  import FrostNavBar from '~/components/NavBar.vue'
export default {
  components:{Snowf,Waves,FrostNavBar},
}
</script>

<style>
html,body {
  font-family:
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  overflow: hidden;
  background: rgb(20,29,47);
    background: linear-gradient(16deg, rgba(20,29,47,1) 0%, rgba(58,77,99,1) 100%);
    background-repeat:no-repeat;
    color:#fff;
    font-family: 'Cairo', sans-serif;
    overflow: hidden;
    position: relative;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>

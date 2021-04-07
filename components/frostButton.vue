<template>
  <div class="share-button" :style="generateRad">
    <span :style="generateRad">{{title}}</span>
    <div>
        <slot>Next Slot</slot>
    </div>
</div>
</template>

<script>
export default {
    props:{
        title:{
            type:String,
            default:"Frost Button",
        },
        radius:{
            type:Number,
            default:40,
        }
    },
    computed:{
        generateRad(){
            return " border-radius: " + this.radius + "px;"
        }
    }
}
</script>

<style>
.share-button {
  width: 280px;
  height: 80px;
  background: linear-gradient(50deg, rgba(63,82,98,1) 0%, rgba(77,112,131,1) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 50px;
  overflow: hidden;
  position: relative;
  cursor: pointer;
  transition: .3s linear;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.2), 0 0 20px 0 rgba(0, 0, 0, 0.19);
}
.share-button:hover{
  transform: scale(1.02);
}
.share-button span{
  position: absolute;
  width: 100%;
  height: 100%;
  font-size: 32px;
  background: linear-gradient(16deg, rgba(53,80,103,1) 0%, rgba(80,128,152,1) 100%);
  color: #f1f1f1;
  font-weight: 600;
  text-align: center;
  line-height: 80px;
  z-index: 999;
  transition: .6s linear;
 
}
.share-button:hover span{
  transform: translateX(-100%);
  transition-delay: .3s;
}
.share-button a {
  flex: 1;
  font-size: 24px;
  color: #f1f1f1 !important;
  text-align: center;
  transform: translateX(-100%);
  opacity: 1;
  transition: .3s linear;
}
</style>
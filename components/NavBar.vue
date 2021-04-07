<template>
    <div class="center examplex">
        <vs-navbar target-scroll="#hide-scroll-content" hide-scroll center-collapsed v-model="active" class="nav-bar-main">
        <template #left>
            <div class="logo">
                <a href="#" class="logo-border">
                    <img src="../assets/imgs/logo.png" />
                </a>
            </div>
            <div class="a-txt">
               <div class="txtWithIcon">
                <div class="text">
                    فروست
                </div>
                <div class="icon">
                    <frost-icon :color="'var(--navIconColor)'" :width="'20px'"/>
                </div>
            </div>
            </div>
        </template>
        
        <template #right>
            <vs-navbar-item class="a-txt">
            <div class="txtWithIcon">
                <div class="text">
                    تسجيل الدخول
                </div>
                <div class="icon">
                    <frost-icon :color="'var(--navIconColor)'" :width="'20px'"/>
                </div>
            </div>
        </vs-navbar-item>
        <vs-navbar-item :active="active == 'discord'" id="discord" class="a-txt">
            <div class="txtWithIcon">
                <div class="text">
                    المجتمع
                </div>
                <div class="icon">
                    <frost-icon :color="'var(--navIconColor)'" :width="'20px'"/>
                </div>
            </div>
        </vs-navbar-item>
        <vs-navbar-item :active="active == 'home'" id="home" class="a-txt">
            <div class="txtWithIcon">
                <div class="text">
                    الرئيسية
                </div>
                <div class="icon">
                    <frost-icon :color="'var(--navIconColor)'" :width="'20px'"/>
                </div>
            </div>
        </vs-navbar-item>
        </template>
        </vs-navbar>
        <div id="hide-scroll-content" class="square">
            <div class="child">
            child 1
            </div>
            <div class="child">
            child 2
            </div>
            <div class="child">
            child 3
            </div>
        </div>
        </div>
</template>

<script>
    import frostIcon from './frostIcon.vue'
export default {
    name:'frost-navbar',
    components:{frostIcon},
    data(){
        return {
            active :'guide',
        }
        
    }
}
</script>

<style>
    
     @media (min-width: 992px) {
        .vs-navbar-content {
            height:60px;
        }
        .logo{
            position: relative;
            top:20px;
        }
        .partner-btn{
            display:block !important;
        }
        .mobile-txt{
            display: none !important;
        }
        .login-Btn{
            display: none !important;
        }
    }
    @media (max-width: 800px) {
        .responsive-order{
            flex-direction: column-reverse !important;
        }
    }
    .vs-navbar-content{
        margin-top:-5px;
        border-radius:0px;
    }
    .nav-bar-main{
        background: var(--navColor);
        
    }
    .login-Btn{
        display:block;
    }
    .txtWithIcon{
        display: flex;
    }
    .a-txt{
        color:var(--navFontColor);
        font-family: Cairo;
        font-weight: 500;
        font-size:18px;
        font-weight: 700;
        text-decoration:none;
        line-height: 30px;
        cursor: pointer;
    }
    .a-txt span {
        margin-top:auto;
    }
    .a-txt:hover{
        color:var(--navFontHover);
        text-decoration:none;
    }
    .vs-dialog-content.blur {
        -webkit-backdrop-filter: blur(15px) !important;
        backdrop-filter: blur(15px) !important;
    }
    .logo{
        padding: 5px;
        background: var(--navColor);
        margin-left: 50px;
        width: 65px;
        height: 70px;
        border-radius: 50px;
        margin-right: 50px;
        box-shadow: 0px 8px 6px -3px rgba(0, 0, 0, 0.2);
    }
    .logo > a > img {
        max-width:60px;
        margin-left:-5px;
    }
    .logo-border{
        border: 1px solid #ffffff20;
        padding: auto;
        height: 65px;
        display: block;
        width: 50px;
        margin-left: 2.5px;
        border-radius: 30px;
        margin-top: -8px;
    }
    .partner-btn{
        display:none;
    }
    .has-margin a{
        margin-right:10px;
    }
    .mobile-txt{
        margin-right:20px;
        display: block;
    } 
    .mobile-txt a {
        color:var(--navFontColor) !important;
        font-size: 24px;
        font-weight: 800;
    }
    .not-margin {
    margin: 0px;
    padding: 10px;
    font-family: Cairo , sans-serif;
    }
    .responsive-order{
        flex-direction: row;
    }
    .vs-dialog{
        background: #233949 !important;
        color:white !important;
    }
    .vs-dialog .vs-dialog__close{
        color:white !important;
        background: white !important;
    }
    .login-mod-btn{
        font-size: 18px !important;
        background: #596DAC !important;
    }
    .login-mod-btn:hover{
       box-shadow: none !important;
    }
    .con-form {
    width: 100%;
    font-family: Cairo;
    font-weight: 400;
    }
    .con-form .flex {
    display: flex;
    align-items: center;
    justify-content: space-between;
    }
    .con-form .flex a {
    font-size: 0.8rem;
    opacity: 0.7;
    }
    .con-form .flex a:hover {
    opacity: 1;
    }
    .con-form .vs-checkbox-label {
    font-size: 0.8rem;
    }
    .con-form .vs-input-content {
    margin: 10px 0px;
    width: calc(100%);
    }
    .con-form .vs-input-content .vs-input {
    width: 100%;
    }
    .footer-dialog {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    font-family: Cairo;
    width: calc(100%);
    }
    .footer-dialog .new {
    margin: 0px;
    margin-top: 20px;
    padding: 0px;
    font-size: 0.7rem;
    }
    .footer-dialog .new a {
    color: rgba(var(--vs-primary), 1) !important;
    margin-left: 6px;
    }
    .footer-dialog .new a:hover {
    text-decoration: underline;
    }
    .footer-dialog .vs-button {
    margin: 0px;
    }
</style>

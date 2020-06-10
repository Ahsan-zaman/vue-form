<template>
    <q-page class="flex flex-center bg-main-image">
        <div class="form-wrapper flex flex-center column bg-white rounded-borders">
                <div class="img-container flex flex-center">
                    <transition>
                        <img
                        v-if="loading"
                        src="../assets/cog_1.gif">   
                    </transition>
                    <transition>
                        <svg version="1.1" class="checkmark" v-if="success" :class="anim_svg ? 'anim' : ''"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                            viewBox="0 0 161.2 161.2" enable-background="new 0 0 161.2 161.2" xml:space="preserve">
                        <path class="path" fill="none" stroke="#7DB0D5" stroke-miterlimit="10" d="M425.9,52.1L425.9,52.1c-2.2-2.6-6-2.6-8.3-0.1l-42.7,46.2l-14.3-16.4
                            c-2.3-2.7-6.2-2.7-8.6-0.1c-1.9,2.1-2,5.6-0.1,7.7l17.6,20.3c0.2,0.3,0.4,0.6,0.6,0.9c1.8,2,4.4,2.5,6.6,1.4c0.7-0.3,1.4-0.8,2-1.5
                            c0.3-0.3,0.5-0.6,0.7-0.9l46.3-50.1C427.7,57.5,427.7,54.2,425.9,52.1z"/>
                        <circle class="path" fill="none" stroke="#7DB0D5" stroke-width="4" stroke-miterlimit="10" cx="80.6" cy="80.6" r="62.1"/>
                        <polyline class="path" fill="none" stroke="#7DB0D5" stroke-width="6" stroke-linecap="round" stroke-miterlimit="10" points="113,52.8 
                            74.1,108.4 48.2,86.4 "/>

                        <circle class="spin" fill="none" stroke="#7DB0D5" stroke-width="4" stroke-miterlimit="10" stroke-dasharray="12.2175,12.2175" cx="80.6" cy="80.6" r="73.9"/>

                        </svg>
                    </transition>
                </div>
                <h5 class="text-h5">
                    <transition name="slide-fade">
                        <span v-if="show">{{text}}</span>
                    </transition>
                </h5>
        </div>
    </q-page>
</template>

<script>
export default {
    data: function(){
        return{
            text : null,
            show : false,
            success : false,
            loading : true,
            anim_svg : false,
            refreshIntervalId: null,
            texts : [
                'Please wait ...',
                'Verifying your email ...',
                'Setting up your company ...',
                'Creating admin profile ...',
                'Setting up database ...'
            ]
        }
    },
    mounted(){
        this.textAnim()

        fetch('https://app.nezohr.com/api/auth/company-registration-confirm',{
            method : 'POST',
            headers : {
                'Accept' : 'application/json',
                'Content-Type': 'application/json'
            },
            body : JSON.stringify({
                q : this.$route.query.q
            })
        }).then(() => {
            clearInterval(this.refreshIntervalId)
            this.loading = false
            this.success = true
            this.anim_svg = true
            this.text = "Email verified successfully."
            this.show = true
        })
    },
    methods:{
        textAnim(){
            let count = 0
            this.refreshIntervalId = setInterval(() => {

                if(this.show){
                    this.show = false
                }else{
                    this.text = this.texts[count]
                    this.show = true
                    if(count+1 == this.texts.length){
                        count = 0
                    }else{
                        count++
                    }
                }
            }, 2000);
        }
    }
}
</script>

<style>
.bg-main-image{
    background-image: url('../assets/trial-background-min.jpg');
    background-position: center;
    position: relative; 
    background-size: cover;
}
.bg-main-image::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: linear-gradient(260deg, rgba(251,184,71,1) 0%, rgba(91,209,192,1) 100%);
    opacity: 0.6;
  }
.form-wrapper{
    width: 100%;
    max-width: 980px;
    min-height: 80vh;
    z-index: 5;
}
.text-h5{
    height: 32px;
    color: #2f2d2b;
}

.checkmark {
  width: 200px;
  margin: 0 auto;
  padding-top: 40px;
}

.path {
  stroke-dasharray: 1000;
  stroke-dashoffset: 0;
  stroke: rgba(91,209,192,1);
}
.anim .path{
  animation: dash 2s ease-in-out;
  -webkit-animation: dash 2s ease-in-out;
}
.anim .spin{
    animation: spin 2s;
  -webkit-animation: spin 2s;
}

.spin {
  transform-origin: 50% 50%;
  -webkit-transform-origin: 50% 50%;
  stroke: rgba(251,184,71,1);
}


@-webkit-keyframes dash {
 0% {
   stroke-dashoffset: 1000;
 }
 100% {
   stroke-dashoffset: 0;
 }
}

@keyframes dash {
 0% {
   stroke-dashoffset: 1000;
 }
 100% {
   stroke-dashoffset: 0;
 }
}

@-webkit-keyframes spin {
  0% {
    -webkit-transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
  }
}

@keyframes spin {
  0% {
    -webkit-transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
  }
}

.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>
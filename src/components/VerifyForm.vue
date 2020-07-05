<template>
    <q-page class="flex flex-center bg-main-image">
        <div class="form-wrapper flex flex-center column bg-white rounded-borders">
            <div class="img-container flex flex-center">
                <transition name="fade">
                    <img
                    class="image"
                    v-if="loading"
                    src="../assets/cog_1.gif">   
                </transition>
                <transition name="fade">
                    <div v-if="error" class="ui-error image">
                        <svg  viewBox="0 0 87 87" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                            <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                <g id="Group-2" transform="translate(2.000000, 2.000000)">
                                    <circle id="Oval-2" stroke="rgba(252, 191, 191, .5)" stroke-width="4" cx="41.5" cy="41.5" r="41.5"></circle>
                                    <circle  class="ui-error-circle" stroke="#F74444" stroke-width="4" cx="41.5" cy="41.5" r="41.5"></circle>
                                        <path class="ui-error-line1" d="M22.244224,22 L60.4279902,60.1837662" id="Line" stroke="#E5002D" stroke-width="3" stroke-linecap="square"></path>
                                        <path class="ui-error-line2" d="M60.755776,21 L23.244224,59.8443492" id="Line" stroke="#E5002D" stroke-width="3" stroke-linecap="square"></path>
                                </g>
                            </g>
                        </svg>
                    </div>
                </transition>
                <transition name="fade">
                    <svg version="1.1" class="checkmark image" v-if="success" :class="anim_svg ? 'anim' : ''"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
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
                <span v-html="text" v-if="show"></span>
            </h5>
            <span v-html="redirectText" v-if="showRedirect"></span>
        </div>
    </q-page>
</template>

<script>
export default {
    data: function(){
        return{
            text : null,
            show : false,
            loading : true,
            success : false,
            error : false,
            anim_svg : false,
            refreshIntervalId: null,
            texts : [
                'Please wait ...',
                'Verifying your email ...',
                'Setting up your company ...',
                'Creating admin profile ...',
                'Setting up database ...'
            ],
            showRedirect : false,
            redirectUrl : 'https://app.nezohr.com/login?company=',
            redirectText:''
        }
    },
    beforeCreate(){
        if(!this.$route.query.q){
            this.$router.push('/')
        }
    },
    mounted(){
        this.textAnim()

        let q = new FormData()
        q.append('q', this.$route.query.q)
        // fetch('http://localhost:8000/api/auth/company-registration-confirm',{
        fetch('https://app.nezohr.com/api/auth/company-registration-confirm',{
              method : 'POST',
              headers : {
                  'Accept' : 'application/json',
              },
              body : q
          })
          .then( response => {
              let resp = response.clone()
                this.status = resp.status
                return resp.json();
          })
          .then( (res) => {
              if(this.status >= 400 && this.status < 600){
                  this.loading = false
                this.error = true
                clearInterval(this.refreshIntervalId)
                this.text = 'There was a problem. Please try again later'
                this.show = true
                let dismissed = this.$q.notify({
                    type: 'negative',
                    textColor: 'white',
                    icon: 'warning',
                    message: res.message,
                    timeout : 0,
                    actions:[ { label: 'Okay', color: 'white', handler: () => { 
                        dismissed()
                        this.$router.push('/')
                    } } ]
                })
              }else{
                this.loading = false
                this.success = true
                this.anim_svg = true
                clearInterval(this.refreshIntervalId)
                this.text = 'Email verified successfully'
                this.show = true

                this.redirectUrl += res.name
                this.redirectText = `You will be redirected to the login page. If you are not redirected, <a href="${this.redirectUrl}">click here</a>`
                this.showRedirect = true
                setInterval(()=>{
                    window.location.href = this.redirectUrl;
                },2000)
              }
          })
          .catch( () => {
                this.$q.notify({
                    type: 'negative',
                    textColor: 'white',
                    icon: 'warning',
                    message: `Couldn't connect to server. Please try again later.`
                })
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
.img-container{
    height: 300px;
    width: 300px;
    position: relative;
}
.image{
    position: absolute;
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
a{
    color: var(--q-color-secondary);
}
.checkmark {
  width: 200px;
  margin: 0 auto;
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
.ui-success,.ui-error {
	width: 200px; height: 200px;
}
.ui-error-circle{
    stroke-dasharray:260.75219024795285px, 260.75219024795285px;
    stroke-dashoffset: 260.75219024795285px;
    animation: ani-error-circle 1.2s linear;
}
.ui-error-line1{
    stroke-dasharray: 54px 55px;
    stroke-dashoffset: 55px;
    stroke-linecap: round;
    animation: ani-error-line .15s 1.2s linear both;
}
.ui-error-line2{
    stroke-dasharray: 54px 55px;
    stroke-dashoffset: 55px;
    stroke-linecap: round;
    animation: ani-error-line .2s .9s linear both;
}

@keyframes ani-error-line{
	to { stroke-dashoffset: 0; }
}

 @keyframes ani-error-circle {
		0% {
				stroke-dasharray: 0, 260.75219024795285px;
				stroke-dashoffset: 0;
		}
		35% {
				stroke-dasharray: 120px, 120px;
				stroke-dashoffset: -120px;
		}
		70% {
				stroke-dasharray: 0, 260.75219024795285px;
				stroke-dashoffset: -260.75219024795285px;
		}
		100% {
				stroke-dasharray: 260.75219024795285px, 0;
				stroke-dashoffset: -260.75219024795285px;
		}
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

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
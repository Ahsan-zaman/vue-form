<template>
  <q-page class="flex flex-center bg-main-image">
        <div class="form-wrapper flex flex-center column bg-white rounded-borders">
            <div class="img-container flex flex-center">
                <svg version="1.1" class="checkmark image"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                    viewBox="0 0 161.2 161.2" enable-background="new 0 0 161.2 161.2" xml:space="preserve">
                <path class="path" fill="none" stroke="#7DB0D5" stroke-miterlimit="10" d="M425.9,52.1L425.9,52.1c-2.2-2.6-6-2.6-8.3-0.1l-42.7,46.2l-14.3-16.4
                    c-2.3-2.7-6.2-2.7-8.6-0.1c-1.9,2.1-2,5.6-0.1,7.7l17.6,20.3c0.2,0.3,0.4,0.6,0.6,0.9c1.8,2,4.4,2.5,6.6,1.4c0.7-0.3,1.4-0.8,2-1.5
                    c0.3-0.3,0.5-0.6,0.7-0.9l46.3-50.1C427.7,57.5,427.7,54.2,425.9,52.1z"/>
                <circle class="path" fill="none" stroke="#7DB0D5" stroke-width="4" stroke-miterlimit="10" cx="80.6" cy="80.6" r="62.1"/>
                <polyline class="path" fill="none" stroke="#7DB0D5" stroke-width="6" stroke-linecap="round" stroke-miterlimit="10" points="113,52.8 
                    74.1,108.4 48.2,86.4 "/>

                <circle class="spin" fill="none" stroke="#7DB0D5" stroke-width="4" stroke-miterlimit="10" stroke-dasharray="12.2175,12.2175" cx="80.6" cy="80.6" r="73.9"/>

                </svg>
            </div>
            <h5 class="text-h5 text-secondary">
                Thank you for registering
            </h5>
            <span class="text-center text-body1">
                An email has been sent to your account for verification. <br> Please follow the link there to complete your registration process.
            </span>
        </div>
    </q-page>
</template>

<script>
export default {

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
.checkmark {
  width: 200px;
  margin: 0 auto;
}

.path {
  stroke-dasharray: 1000;
  stroke-dashoffset: 0;
  stroke: rgba(91,209,192,1);
}
.path{
  animation: dash 2s ease-in-out;
  -webkit-animation: dash 2s ease-in-out;
}
.spin{
    animation: spin 2s;
  -webkit-animation: spin 2s;
}

.spin {
  transform-origin: 50% 50%;
  -webkit-transform-origin: 50% 50%;
  stroke: rgba(251,184,71,1);
}
</style>
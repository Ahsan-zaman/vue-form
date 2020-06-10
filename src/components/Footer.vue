<template>
  <div class="flex flex-center column">
      <div class="flex flex-center bg-secondary text-white full-width q-px-xl">
          <div class="flex flex-center justify-between full-width" style="max-width:1170px">
              <h5 class="text-center q-my-sm" style="flex:1">
                    With NezoHR;<br>
                    Our clients have tracked
                </h5>
                <div class="flex">
                    <div class="flex column text-center flex-center q-px-xl" style="flex:1">
                        <h6 class="text-no-wrap q-my-xs">10+ Millions</h6>
                        <span>Leave Requests</span>
                    </div>
                    <div class="flex column text-center flex-center q-px-xl" style="flex:1">
                        <h6 class="text-no-wrap q-my-xs">4+ Millions</h6>
                        <span>Active Users</span>
                    </div>
                    <div class="flex column text-center flex-center q-px-xl" style="flex:1">
                        <h6 class="text-no-wrap q-my-xs">Over 100</h6>
                        <span>Countries</span>
                    </div>
                    <div class="flex column text-center flex-center q-px-xl" style="flex:1">
                        <h6 class="text-no-wrap q-my-xs">500,000+</h6>
                        <span>Operating Vacancies</span>
                    </div>
                </div>
          </div>
      </div>
      <div class="flex flex-center q-pa-md full-width">
          <div class="flex full-width justify-start" style="max-width:1170px">
              <div>
                  <h6 class="text-weight-regular q-my-xs">Contact Us</h6>
                <span>HQ Alkhaldiah <br>
                    Jeddah, Saudi Arabia <br>
                    info@nezohr.com</span>
              </div>
              <div class="flex column align-start q-ml-auto text-right">
                  <h6 class="text-weight-regular q-my-xs">Social Media</h6>
                <div>
                    <a class="q-pa-xs" target="_blank" href="#"><q-icon size="18px" color="primary" :name="ionLogoYoutube" /></a>
                <a class="q-pa-xs" target="_blank" href="#"><q-icon size="18px" color="primary" :name="ionLogoTwitter" /></a>
                <a class="q-pa-xs" target="_blank" href="#"><q-icon size="18px" color="primary" :name="ionLogoFacebook" /></a>
                </div>
                <span class="q-my-sm text-wrap">NezoHR © {{new Date().toISOString().substr(0,4)}} <br> All Rights Reserved.</span>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
import { ionLogoYoutube, ionLogoTwitter, ionLogoFacebook } from '@quasar/extras/ionicons-v5'
export default {
created(){
    this.ionLogoYoutube = ionLogoYoutube
    this.ionLogoTwitter = ionLogoTwitter
    this.ionLogoFacebook = ionLogoFacebook
}
}
</script>

<style>

</style>
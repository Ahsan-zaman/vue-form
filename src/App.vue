<template>
  <div>
      <router-view>
          <Main/>
      </router-view>
  </div>
</template>

<script>
import Main from './views/Main.vue'

export default {
  components: {
    Main,
  },

  data () {
    
  }
}
</script>

<style>
a{
    text-decoration: none;
}
ul{
    list-style: none;
}
</style>

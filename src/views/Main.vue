<template>
  <MainForm />
</template>

<script>
// @ is an alias to /src
import MainForm from '@/components/MainForm.vue'

export default {
  components: {
    MainForm,
  },
  data: function(){
      return {
      leftDrawerOpen: false
    }
  }
}
</script>

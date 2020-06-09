<template>
  <verifyForm/>
</template>

<script>
// @ is an alias to /src
import VerifyForm from '@/components/VerifyForm.vue'

export default {
  components: {
    VerifyForm,
  },
  data: function(){
      return {
      leftDrawerOpen: false
    }
  }
}
</script>

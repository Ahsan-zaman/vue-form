<template>
  <div>
      <top-nav/>
      <main-form/>
  </div>
</template>

<script>
// @ is an alias to /src
import MainForm from '@/components/MainForm.vue'
import TopNav from '@/components/TopNav.vue'

export default {
  components: {
    MainForm,
    TopNav
  }
}
</script>

<template>
    <q-layout view="lHh Lpr lFf">
        <top-nav/>
        <q-page-container>
            <router-view>
            </router-view>
        </q-page-container>
        <Footer/>
    </q-layout>
</template>

<script>
import TopNav from '@/components/TopNav.vue'
import Footer from '@/components/Footer.vue'


export default {
  components: {
    Footer,
    TopNav,
  },
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

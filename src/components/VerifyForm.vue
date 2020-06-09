<template>
    <q-page class="flex flex-center text-white bg-main-image q-pa-lg">
        <p>
            {{$route.query.q}}
        </p>
        <img
        src="../assets/gears.gif"   
      >
    </q-page>
</template>

<script>
export default {

}
</script>

<style>
img{
    mix-blend-mode: darken;
}
</style>
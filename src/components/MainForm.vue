<template>
  <q-page class="flex flex-center text-white bg-main-image">
    <div class="form-wrapper">
        <div class="flex flex-center top-boxes">
            <div class="box bg-white shadow-5 flex flex-center text-dark column"><q-icon size="100px" color="primary" name="update" />
                Get started for free
            </div>
            <div class="box bg-white shadow-5 flex flex-center text-dark column"><q-icon size="100px" color="primary" name="payment" />
                No credit cards required
            </div>
            <div class="box bg-white shadow-5 flex flex-center text-dark column"><q-icon size="100px" color="primary" :name="matVerifiedUser" />
                Full access to all modules
            </div>
        </div>
    </div>
  </q-page>
</template>

<script>
import { matVerifiedUser } from '@quasar/extras/material-icons'

export default {
  name: 'Form',
  props: {
    msg: String
  },
  created () {
    this.matVerifiedUser = matVerifiedUser
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.bg-main-image{
    background-image: url('../assets/trial-background-min.jpg');
    background-position: center;
    background-size: cover;
}
.form-wrapper{
    width: 100%;
    max-width: 1170px;
}
.top-boxes{
    justify-content: space-around;
}
</style>

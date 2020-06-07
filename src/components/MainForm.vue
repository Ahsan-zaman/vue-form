<template>
  <q-page class="flex flex-center text-white bg-main-image">
    <div class="form-wrapper">
        <div class="flex flex-center top-boxes">
            <div class="box bg-white shadow-5 flex flex-center text-dark column q-pa-md q-mx-xs q-my-sm rounded-borders"><q-icon size="100px" color="primary" :name="ionCashOutline" />
                Get started for free
            </div>
            <div class="box bg-white shadow-5 flex flex-center text-dark column q-pa-md q-mx-xs q-my-sm rounded-borders"><q-icon size="100px" color="primary" :name="fasIdCardAlt" />
                No credit cards required
            </div>
            <div class="box bg-white shadow-5 flex flex-center text-dark column q-pa-md q-mx-xs q-my-sm rounded-borders"><q-icon size="100px" color="primary" :name="fasShieldAlt" />
                Full access to all modules
            </div>
        </div>
        <div class="form-container bg-white q-pa-xl rounded-borders">
            <q-form
                @submit="onSubmit"
                @reset="onReset"
                autocorrect="off"
                autocapitalize="off"
                autocomplete="off"
                spellcheck="false"
                autofocus
                class="q-gutter-md">
                <div class="row">
                    <div class="q-pa-sm col-xs-12 col-md-6">
                        <q-input
                            v-model="name"
                            label="Your name *"
                            hint="Name and surname"
                            outlined
                            :rules="[ val => val && val.length > 0 || 'Please type something']"
                        />
                    </div>
                    <div class="q-pa-sm col-xs-12 col-md-6">
                        <q-input
                            outlined
                            type="number"
                            v-model="age"
                            label="Your age *"
                            :rules="[
                            val => val !== null && val !== '' || 'Please type your age',
                            val => val > 0 && val < 100 || 'Please type a real age'
                            ]"
                        />
                    </div>
                    <div class="q-pa-sm col-xs-12 col-md-6">
                        <q-toggle v-model="accept" label="I accept the license and terms" />
                    </div>
                    <div class="q-pa-sm col-12">
                        <q-btn label="Submit" type="submit" color="secondary"/>
                        <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
                    </div>
                </div>
            </q-form>
        </div>
    </div>
  </q-page>
</template>

<script>
import { ionShieldCheckmarkOutline, ionCardOutline, ionCashOutline } from '@quasar/extras/ionicons-v5'

export default {
  name: 'Form',
  props: {
    msg: String
  },
  data(){
      return{
        name: null,
        age: null,

        accept: false
      }
  },
  created () {
    this.ionCashOutline = ionCashOutline
    this.fasShieldAlt = ionShieldCheckmarkOutline
    this.fasIdCardAlt = ionCardOutline
  },
  methods: {
    onSubmit () {
      if (this.accept !== true) {
        this.$q.notify({
          type: 'negative',
          textColor: 'white',
          icon: 'warning',
          message: 'You need to accept the license and terms first'
        })
      }
      else {
        this.$q.notify({
          type: 'positive',
          textColor: 'white',
          message: 'Submitted'
        })
      }
    },

    onReset () {
      this.name = null
      this.age = null
      this.accept = false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
    max-width: 1170px;
    z-index: 1;
}
/* .top-boxes{
    background: rgb(251,184,71);
    background: linear-gradient(9deg, rgba(251,184,71,1) 0%, rgba(91,209,192,1) 100%);;
} */
.box{
    min-width: 193px;
}
</style>

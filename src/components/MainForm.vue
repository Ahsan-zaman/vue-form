<template>
  <q-page :class="$q.screen.gt.xs ? 'q-pa-lg' : 'q-pa-xs'" class="flex flex-center text-white bg-main-image">
    <div class="form-wrapper">
        <div class="flex flex-center top-boxes q-mb-lg">
            <div class="box bg-white shadow-5 flex flex-center text-dark column q-pa-md q-ma-sm rounded-borders"><q-icon size="100px" color="primary" :name="ionCashOutline" />
                Get started for free
            </div>
            <div class="box bg-white shadow-5 flex flex-center text-dark column q-pa-md q-ma-sm rounded-borders"><q-icon size="100px" color="primary" :name="fasIdCardAlt" />
                No credit cards required
            </div>
            <div class="box bg-white shadow-5 flex flex-center text-dark column q-pa-md q-ma-sm rounded-borders"><q-icon size="100px" color="primary" :name="fasShieldAlt" />
                Full access to all modules
            </div>
        </div>
        <div :class="$q.screen.gt.xs ? 'q-pa-xl' : 'q-pa-xs'" class="form-container bg-white shadow-5 rounded-borders">
            <h4 class="q-ma-sm text-secondary">NezoHR Registration Form</h4>
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
                    <div class="q-pa-sm q-px-sm col-xs-12 flex text-grey">
                        <span  class="q-px-sm bg-white">Admin Details </span>
                        <div class="line"/>
                    </div>
                    <div class="q-pa-sm col-xs-12 col-md-6">
                        <q-input
                            v-model="first_name"
                            label="First name *"
                            outlined
                            :rules="[ val => val && val.length > 0 || 'Please type first name']"
                        />
                    </div>
                    <div class="q-pa-sm col-xs-12 col-md-6">
                        <q-input
                            v-model="last_name"
                            label="Last name *"
                            outlined
                            :rules="[ val => val && val.length > 0 || 'Please type last name']"
                        />
                    </div>
                    <div class="q-pa-sm col-xs-12 col-md-6">
                        <q-input
                            v-model="email"
                            label="Email *"
                            outlined
                            type="email"
                            :rules="[ val => !!val || 'Please enter a valide email', isValidEmail]"
                        />
                    </div>
                    <div class="q-pa-sm col-xs-12 col-md-6">
                        <q-input
                            v-model="phone"
                            label="Phone Number *"
                            hint="eg. 05########"
                            type="number"
                            outlined
                            :rules="[ val => val && val.length >= 10 || 'Number enter a valid number']"
                        />
                    </div>
                    <div class="q-pa-sm q-px-sm q-mt-md col-xs-12 flex text-grey">
                        <span  class="q-px-sm bg-white">Company Details </span>
                        <div class="line"/>
                    </div>
                    <div class="q-pa-sm col-xs-12 col-md-6">
                        <q-input
                            v-model="company_name"
                            label="Company Name *"
                            outlined
                            :rules="[ val => !!val || 'Please type company name']"
                        />
                    </div>
                    <div class="q-pa-sm col-xs-12 col-md-6">
                         <q-input
                            @input="val => { file = val }"
                            outlined
                            accept=".jpg, image/*"
                            type="file"
                            hint="Company Logo. Must be a image file below 512kB"
                        />
                    </div>
                    <div class="q-pa-sm col-xs-12 col-md-6">
                        <q-select outlined v-model="employee_count" :options="options" label="Number of Employees" />
                    </div>
                    <div class="q-pa-sm col-xs-12 col-md-6">
                        <q-select outlined v-model="industry" :options="industries" label="Industry" />
                    </div>
                    <div class="q-pa-sm q-px-sm q-mt-md col-xs-12 flex text-grey">
                        <span  class="q-px-sm bg-white">Set Password </span>
                        <div class="line"/>
                    </div>
                    <div class="q-pa-sm col-xs-12 col-md-6">
                        <q-input
                            v-model="password"
                            label="Password *"
                            type="password"
                            outlined
                            :rules="[ val => val && val.length >= 8 || 'Password must be 8 characters long', isValidPass]"
                        />
                    </div>
                    <div class="q-pa-sm col-xs-12 col-md-6">
                        <q-input
                            v-model="password_confirm"
                            label="Enter password again *"
                            type="password"
                            outlined
                            :rules="[ val => val && password == val || `Password & Confirm password doesn't match`]"
                        />
                    </div>
                    <div class="q-pa-sm col-xs-12 col-md-6 text-dark">
                        <q-toggle v-model="accept" label="I accept the license and terms" />
                    </div>
                    <div class="q-pa-sm col-12 flex">
                        <q-btn :loading="loading" :disable="loading" class="q-ml-auto" label="Submit" type="submit" color="secondary">
                            <template v-slot:loading>
                                <q-spinner-gears />
                            </template>
                        </q-btn>
                        <q-btn label="Reset" type="reset" :disable="loading" color="primary" flat class="q-ml-sm" />
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
  data : function() {
      return{
        first_name: '',
        last_name: '',
        email: '',
        phone: null,
        company_name: '',
        password: null,
        password_confirm: null,
        employee_count: null,
        options: [
            '1 - 10', 
            'more than 10',
            'more than 100',
            'more than 1000',
            'more than 10000',
        ],
        industry:null,
        industries:[
            "Accommodation and food service activities",
            "Activities of extraterritorial organizations and bodies",
            "Activities of households as employers; undifferentiated goods- and services-producing activities of households for own use",
            "Administrative and support service activities",
            "Aerospace",
            "Agriculture",
            "Arts, entertainment and recreation",
            "Automotive",
            "Business Services/Consultancy",
            "Computer / Technology-Reseller",
            "Computer / Technology-Services",
            "Computer / Technology-Manufacturer",
            "Construction",
            "Education",
            "Electricity, gas, steam and air conditioning supply",
            "Finance / Banking / Insurance / Real Estate / Legal",
            "Forestry and fishing",
            "Government-National / Federal",
            "Government-Local",
            "Human health and social work activities",
            "Information and communication",
            "Media / Marketing / Entertainment / Publishing / PR",
            "Mining and quarrying",
            "Manufacturing",
            "Other service activities",
            "Public administration and defence; compulsory social security",
            "Professional, scientific and technical activities",
            "Real estate activities",
            "Retail",
            "Telecoms/Communications",
            "Transportation and storage",
            "Travel / Tourism",
            "Water supply; sewerage, waste management and remediation activities",
            "Wholesale and retail trade; repair of motor vehicles and motorcycles",
            "Other"
        ],
        accept: true,
        file: "",
        status : null,
        loading : false        
      }
  },
  created () {
    this.ionCashOutline = ionCashOutline
    this.fasShieldAlt = ionShieldCheckmarkOutline
    this.fasIdCardAlt = ionCardOutline
  },
  methods: {
    onSubmit () {
        this.loading = true
      if (this.accept !== true) {
        this.$q.notify({
          type: 'negative',
          textColor: 'white',
          icon: 'warning',
          message: 'You need to accept the license and terms first'
        })
      }else if (this.file.length == 0){
          this.$q.notify({
          type: 'negative',
          textColor: 'white',
          icon: 'warning',
          message: 'You need to upload a company logo',
        })
      }
      else {
            let form = new FormData()
            form.append('first_name', this.first_name)
            form.append('last_name', this.last_name)
            form.append('email', this.email)
            form.append('phone', this.phone)
            form.append('password', this.password)
            form.append('password_confirmation', this.password_confirm)
            form.append('company_name', this.company_name)
            // form.append('company_logo', this.file)
            this.file.forEach(f =>{
                form.append('company_logo',f)
            })
            form.append('employee_count', this.employee_count)
            form.append('industry', this.industry)
            form.append('cr', this.cr)

            // console.log(form)

        //   fetch('http://localhost:8000/api/auth/company-registration',{
          fetch('https://app.nezohr.com/api/auth/company-registration',{
              method : 'POST',
              headers : {
                  'Accept' : 'application/json',
              },
              body : form
          })
          .then( response => {
              let resp = response.clone()
              console.log('resp', resp)
                this.status = resp.status
                return resp.json();
          })
          .then( (res) => {
            //   console.log('res', res)
              if(this.status >= 400 && this.status < 600){
                if(this.status == 422){
                    for(let value of Object.entries(res.errors)) {
                        let dismissed = this.$q.notify({
                            type: 'negative',
                            textColor: 'white',
                            icon: 'warning',
                            message: value[1],
                            timeout : 0,
                            actions:[ { label: 'Okay', color: 'white', handler: () => { dismissed() } } ]
                        })
                    }
                }else{
                    let dismissed = this.$q.notify({
                        type: 'negative',
                        textColor: 'white',
                        icon: 'warning',
                        message: res.message,
                        timeout : 0,
                        actions:[ { label: 'Okay', color: 'white', handler: () => { dismissed() } } ]
                    })
                }
              }else{
                const dismissed = this.$q.notify({
                    type: 'positive',
                    textColor: 'white',
                    message: res.message,
                    timeout: 0,
                    actions:[ { label: 'Okay', color: 'white', handler: () => { dismissed() } } ]
                })
              }
              this.loading = false
          })
          .catch( () => {
                this.$q.notify({
                    type: 'negative',
                    textColor: 'white',
                    icon: 'warning',
                    message: `Couldn't connect to server. Please try again later.`
                })
                this.loading = false
          })
      }
    },

    onReset () {
      this.first_name = null
      this.last_name = null
      this.email = null
      this.company_name = null
      this.phone = null
      this.file = null
      this.industry = null
      this.employee_count = null
      this.password = null
      this.password_confirm = null
      this.accept = false
    },
    isValidEmail (val) {
        const emailPattern = /^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/;
        return emailPattern.test(val) || 'Invalid email';
    },
    isValidPass (val) {
        const lower_case = /^(?=.*[a-z])/;
        const upper_case = /^(?=.*[A-Z])/;
        const number = /^(?=.*[0-9])/;
        const special = /^(?=.*[!@#$%^&*])/;
        let d = "Password must contain "
        if(!lower_case.test(val)){
            d += "a lower case letter,"
        }
        if(!upper_case.test(val)){
            d += "an upper case letter,"
        }
        if(!number.test(val)){
            d += "a number,"
        }
        if(!special.test(val)){
            d += "a special character,"
        }
        return d === "Password must contain " || d ;
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
    max-width: 980px;
    z-index: 1;
}
.top-boxes{
    justify-content: space-around;
}
.box{
    min-width: 200px;
    flex-grow: 1;
}
.line{
    flex-grow: 1;
    height: 1px;
    background: grey;
    align-self: center;
}
</style>

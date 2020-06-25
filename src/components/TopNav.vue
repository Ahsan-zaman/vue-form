<template>
  <div class="nav-container">
      <nav>
          <a href="/" class="logo">
              <img src="https://nezohr.com/assets/img/logo.png" alt="LOGO" srcset="">
          </a>
          <ul class="gt-sm">
              <li v-for="(n,i) in navItems" :key="i"><a :href="n.link">{{n.name}}</a></li>
          </ul>
          <div class="more">
            <router-link class="gt-xs" to="/">EN</router-link>
            <router-link class="gt-xs" to="#">AR</router-link>
          <q-btn class="xs" @click="leftDrawerOpen = !leftDrawerOpen" color="grey" outline tile flat>
              <q-icon :name="ionMenuOutline" />
          </q-btn>
          </div>
      </nav>
      <q-drawer
        side="right"
        overlay
        bordered
        v-model="leftDrawerOpen"
        content-class="bg-white text-grey-9 ">
        <q-list></q-list>
        <q-list class="flex justify-center column full-height">
            <q-item  clickable @click="leftDrawerOpen = !leftDrawerOpen">
                
                <q-item-section >
                    <q-item-label>CLOSE</q-item-label>
                </q-item-section>
                <q-item-section avatar>
                    <q-icon :name="ionCloseCircleOutline" />
                </q-item-section>
            </q-item>
            <q-item v-for="(n,i) in navItems" :key="i" clickable tag="a" target="_blank" :href="n.link">
                <q-item-section>
                    <q-item-label>{{n.name}}</q-item-label>
                </q-item-section>
            </q-item>
        </q-list>
    </q-drawer>
  </div>
</template>

<script>
import { ionMenuOutline, ionCloseCircleOutline } from '@quasar/extras/ionicons-v5'
export default {
name: 'top-nav',
data : () => {
    return {
        leftDrawerOpen:false,
        navItems : [
            // {
            //     name : 'Features',
            //     link : '/features'
            // },
            {
                name : 'About-Us',
                link : '/about-us'
            },
            {
                name : 'Services',
                link : '/services'
            },
            // {
            //     name : 'Partners',
            //     link : '/partners/integration-partnership-program/'
            // },
            {
                name : 'Contact-Us',
                link : '/contact-us'
            },
        ]
    }
},
created(){
    this.ionMenuOutline = ionMenuOutline
    this.ionCloseCircleOutline = ionCloseCircleOutline
}
}
</script>

<style scoped>

div.nav-container{
    display: flex;
    align-items: center;
    justify-content: center;
    height: 65px;
}
nav{
    display: flex;
    width: 100%;
    max-width: 1170px;
}
nav .logo img {
    width: 200px;
}
nav .logo{
    display: flex;
    align-items: center;
    justify-content: center;
}
nav ul {
    display: flex;
    flex-grow: 1;
    align-items: center;
    /* justify-content: space-around; */
    list-style: none;
}
nav ul li a{
    display: block;
    padding: 15px 13px;
    font-size: 14px;
    color: #777777;
}
nav ul li a:hover{
    color: #2f2d2b;
}
nav div.more{
    display: flex;
    margin-left: auto;
    align-items: center;
}
nav div.more a{
    font-size: 14px;
    padding: 15px 5px;
    color: #777777;
}
nav div.more a:hover{
    color: #2f2d2b;
}

.router-link-active{
    color: #5BD1C0 !important;
}
</style>


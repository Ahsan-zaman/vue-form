<template>
  <div class="nav-container">
      <nav>
          <a href="/" class="logo">
              <img src="https://nezohr.com/assets/img/logo.png" alt="" srcset="">
          </a>
          <ul class="gt-sm">
              <li><a href="/features">Features</a></li>
              <li><a href="/about-us">Aout Us</a></li>
              <li><a href="/services">Services</a></li>
              <li><a href="/partners/integration-partnership-program/">Partners</a></li>
              <li><a href="/contact-us">Contact Us</a></li>
          </ul>
          <div class="more">
            <router-link to="/" class="en">EN</router-link>
            <router-link to="#" class="ar">AR</router-link>
          </div>
      </nav>
  </div>
</template>

<script>
export default {
name: 'top-nav'
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


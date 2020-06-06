<template>
  <div class="nav-container">
      <nav>
          <div class="logo">
              <img src="../assets/logo.png" alt="" srcset="">
          </div>
          <ul>
              <li><a href="#">Features</a></li>
              <li><a href="#">Aout Us</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Partners</a></li>
              <li><a href="#">Contact Us</a></li>
          </ul>
          <div class="more">
              <a href="#" class="get_started">Get Started Now</a>
              <div class="lang">
                  <a href="#" class="en">En</a>
                  <a href="#" class="ar">Ar</a>
              </div>
          </div>
      </nav>
  </div>
</template>

<script>
export default {

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
nav div.more{
    display: flex;
    margin-left: auto;
}
nav div.more a.get_started{
    padding: 7px 15px;
    font-size: 14px;
    background-color: var(--main-bg-color);
    color: #ffffff;
}
</style>


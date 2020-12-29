<template>
  <div>
    <Contact />
    <div id="hero">
      <Navigation />
      <div class="overlay"></div>
      <div class="container">
        <h1 class="title glitch" data-text="MODURE RARES"><span>MODURE</span> RARES</h1>
        <div style="height: 20px">
           <p class="subtitle"><typical class="vt-subTitle" :steps="['web | mobile developer', 1000, 'computer science & economics student at FSEGA', 1000, 'professional keyboard stroker', 1000, 'casual internet surfer', 1000, '']" :loop=10000 :wrapper="'p'"></typical></p>
        </div>
        <div id="social-meida-container">
          <a href="https://www.instagram.com/modurerares/"><unicon width="30" height="30" class="icon" name="instagram" /></a>
          <a href="https://www.linkedin.com/in/modure-rares-778b16170/"><unicon width="30" height="30" class="icon" name="linkedin-alt" /></a>
          <a href="https://github.com/RaresM2001"><unicon width="30" height="30" class="icon" name="github" /></a>
        </div>
        <img id="signature" src="../assets/images/signature.png" alt="image not found">
      </div>
    </div>
  </div>
</template>

<script>
import Navigation from '../components/Navigation';
import Contact from '../components/Contact';
import typical from 'vue-typical'

export default {
  components: {
    Navigation,
    Contact,
    typical
  }
}
</script>
<style scoped>
#hero {
  width: 100%;
  height: 100vh;
  background-image: url('../assets/images/wallpaper3.png');
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
}

.overlay {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  background-color: rgba(0, 0, 0, .5);
  z-index: 1;
}

#social-meida-container {
  margin-top: 30px;
}

.icon {
  fill: white;
  float: left;
  margin-right: 50px;
  transition: all .4s;
  cursor: pointer;
}

.icon:hover {
  fill: var(--primary);
}

#signature {
  width: 250px;
  margin-top: 100px;
  margin-left: -280px;
}

#tech-container {
  position: absolute;
  bottom: 100px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
}

</style>
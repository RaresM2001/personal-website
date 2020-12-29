<template>
  <div class="root">
    <div id="centered">
      <h1 class="title glitch" data-text="THANKS FOR REACHING OUT"><span>THANKS FOR REACHING</span> OUT</h1>
      <p class="subtitle"><typical class="vt-subTitle" :steps="['if i don\'t get back to you, call me: 0732717194']" :loop=1 :wrapper="'p'"></typical></p>
     
    </div>
     <div id="social-media-container">
        <a href="https://www.instagram.com/modurerares/"><unicon width="30" height="30" class="icon" name="instagram" /></a>
          <a href="https://www.linkedin.com/in/modure-rares-778b16170/"><unicon width="30" height="30" class="icon" name="linkedin-alt" /></a>
          <a href="https://github.com/RaresM2001"><unicon width="30" height="30" class="icon" name="github" /></a>
      </div>
    <img id="signature" src="../../assets/images/signature.png" alt="Image not found">
  </div>
</template>
<script>
import typical from 'vue-typical'
export default {
  components: {
    typical
  }
}
</script>
<style scoped>
.root {
  width: 100%;
  height: 100vh;
  background-color: black;
}

#centered {
  width: 400px;
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
}

#signature {
  width: 150px;
  position: absolute;
  left: 50%;
  bottom: 50px;
  transform: translateX(-50%);
}

.subtitle {
  margin-top: 30px;
}

#social-media-container {
  position: absolute;
  left: 50%;
  bottom: 200px;
  transform: translateX(-50%);
}

.icon {
  margin-left: 50px;
  fill: white;
}

.icon:hover {
  fill: var(--primary);
}


</style>  
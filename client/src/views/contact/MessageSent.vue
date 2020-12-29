<template>
  <div class="root">
    <div id="centered">
      <h1 class="title glitch" data-text="THANKS FOR REACHING OUT"><span>THANKS FOR REACHING</span> OUT</h1>
      <p class="subtitle"><typical class="vt-subTitle" :steps="['if i don\'t get back to you, call me: 0732717194']" :loop=1 :wrapper="'p'"></typical></p>
      <div class="separator"></div>
      <mfooter></mfooter>
    </div>
     
  </div>
</template>
<script>
import typical from 'vue-typical'
import mfooter from '../../components/Footer';

export default {
  components: {
    typical,
    mfooter
  }
}
</script>
<style scoped>

#centered {
  width: 400px;
  position: absolute;
  top: 50%;
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
  float: left;
}

.icon:hover {
  fill: var(--primary);
}

.separator {
  height: 200px;
}

@media only screen and (max-width: 700px) {
  .title {
    font-size: 2.5em;
  }

  #centered {
    width: auto;
    min-width: 300px;
  }

  #signature {
    margin-top: 50px;
  }


}
</style>  
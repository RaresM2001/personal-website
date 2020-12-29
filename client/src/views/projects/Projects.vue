<template>
  <div class="root">
    <div class="container">
      <h1 class="title glitch" data-text="PORJECTS ."><span>PROJECTS</span> .</h1>
      <div id="cards-container">
        <div class="card">
          <div class="overlay"></div>
        </div>
         <div class="card">
          <div class="overlay"></div>
        </div>
         <div class="card">
          <div class="overlay"></div>
        </div>
         <div class="card">
          <div class="overlay"></div>
        </div>
         <div class="card">
          <div class="overlay"></div>
        </div>
        <div class="clearfix"></div>
         <mfooter></mfooter>
      </div>
    </div>
    
   
  </div>
</template>
<script>
import mfooter from '../../components/Footer';
export default {
  components: {
    mfooter
  }
}
</script>
<style scoped>

.container {
  margin-top: 0px;
  top: 50px;
}

#cards-container {
  margin-top: 50px;
  /* background-color: pink; */
}

.card {
  width: 33.33%;
  height: 300px;
  float: left;
  background-color: red;
  cursor: pointer;
  position: relative;
  background-image: url('../../assets/images/webstack.png');
  background-size: cover;
  background-position: center;
}

.card:nth-child(2) {
  background-image: url('../../assets/images/ps.png');
}

.card:nth-child(3) {
  background-image: url('../../assets/images/discord.jpg');
}

.card:nth-child(4) {
  background-image: url('../../assets/images/snswebsite.png');
}

.card:nth-child(5) {
  background-image: url('../../assets/images/dashboard.png');
}

.container {
  max-width: 1400px;
}

.overlay {
  background-color: rgba(0, 0, 0, .8);
  transition: all .4s;
}

.overlay:hover {
  background-color: rgba(0, 0, 0, 0);
}

.clearfix {
  content: "";
  clear: both;
}

</style>
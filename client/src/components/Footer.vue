<template>
  <footer id="footer">
     <div id="social">
        <a href="https://www.instagram.com/modurerares/"><unicon width="30" height="30" class="icon" name="instagram" /></a>
        <a href="https://www.linkedin.com/in/modure-rares-778b16170/"><unicon width="30" height="30" class="icon" name="linkedin-alt" /></a>
        <a href="https://github.com/RaresM2001"><unicon width="30" height="30" class="icon" name="github" /></a>
        <div class="clearfix"></div>
     </div>
    <img id="signature" src="../assets/images/signature.png" alt="Image not found">
  </footer>
</template>
<script>
export default {
  
}
</script>
<style scoped>

#footer {
  margin-top: 50px;
  padding-bottom: 50px;
}

#social {
  width: 50%;
  margin-left: 25%;
}

#social .icon {
  width: 33.33%;
  margin: 0;
  text-align: center;
}

.clearfix {
  content: "";
  clear: both;
}

#signature {
  width: 150px;
  margin-top: 50px;
  margin-left: calc(50% - 75px);
  display: inline;
}

#social-media-container {
  display: inline;
  width: 300px;
  margin-left: calc(50% - 150px);
}

.subtitle {
  margin-top: 30px;
}

.icon {
  margin-left: 50px;
  fill: white;
}

.icon:hover {
  fill: var(--primary);
}

@media only screen and (max-width: 800px) {
  #social-media-container .icon {
    margin-left: 20px;
    margin-right: 20px;
  }
}

@media only screen and (max-width: 800px) {
  #social-media-container .icon {
    margin-left: 10px;
    margin-right: 10px;
  }
}

</style>
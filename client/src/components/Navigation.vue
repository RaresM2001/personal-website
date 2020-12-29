<template>
  <div id="navigation">
    <div id="nav-container">
      <h1 class="title" @click="showNavbar">contact</h1>
      <router-link tag="h1" to="/projects" class="title">projects</router-link>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      toggleNavigation: false
    }
  },
  methods: {
    showNavbar() {
      this.$store.commit('show')
    }
  }
};
</script>  
<style scoped>
#navigation {
  width: 100%;
  height: 50px;
  background-color:black;
  position: absolute;    
  top: 0;
  z-index: 3;
}

#nav-container {
  width: 100%;
  max-width: 1400px;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
  line-height: 50px;
  vertical-align: center;
}

#nav-container .title {
  font-family: "Bebas Neue";
  font-size: 1.8em;
  float: right;
  cursor: pointer;
  transition: all .2s;
}

#nav-container .title:nth-child(2) {
  margin-right: 30px;
}

#nav-container .title:hover {
  color: var(--primary);
}
</style>
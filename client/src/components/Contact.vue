<template>
  <div class="contact" :class="{visible: $store.state.isNavigationVisible}">
    <div class="container">
       <unicon class="icon" name="times" width="50" height="50" @click="hideNavigation"/>
      <h1 class="title glitch" data-text="CONTACT ME"><span>CONTACT</span> ME</h1>
      <form id="contact-form">
        <input type="text" placeholder="your name" v-model="message.name">
        <input type="email" placeholder="your email address" v-model="message.from">
        <textarea placeholder="the reason you contact me" v-model="message.content"></textarea>
      </form>
    </div>
    <img id="signature" src="../assets/images/signature.png" alt="Image not found">
  </div>
</template>
<script>
export default {
  data() {
    return {
      message: {
        name: '',
        from: '',
        content: ''
      }
    }
  },
  methods: {
    hideNavigation() {
      this.$store.commit('show')
    },
    send() {
      console.log(message)
    }
  }
}
</script>
<style scoped>
.contact {
  width: 100%;
  height: 100vh;
  position: absolute;
  top: -100vh;
  z-index: 4;
  background-color: black;
  transition: all .8s;
}

.visible {
  top: 0;
}

.title {
  display: block;
}

.icon {
  fill: white;
  transition: all .4s;
  cursor: pointer;
  margin-bottom: 50px;
  float: right;
  z-index: 199;
}

.icon:hover {
  fill: var(--primary);
}

input,
textarea {
  height: 60px;
  width: 60%;
  background-color: #110d11;
  border: none;
  border-radius: 5px;
  outline: none;
  color: white;
  font-weight: bold;
  font-size: 1.2em;
  padding: 0 0 0 30px;
  margin: 50px 0 0;
  float: left;
  margin-right: 40%;
}

input:focus,
textarea:focus {
  border: 2px solid var(--primary);
}

textarea {
  height: 300px;
  padding: 30px 0 0 30px;
  resize: none;
}

::placeholder {
  color: white;
  font-family: 'Bebas Neue';
}

#signature {
  width: 250px;
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
}

</style>
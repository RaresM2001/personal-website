<template>
  <div class="contact" :class="{visible: $store.state.isNavigationVisible}">
    <div class="container">
      <unicon class="icon" name="times" width="50" height="50" @click="hideNavigation"/>
      <h1 class="title glitch" data-text="CONTACT ME"><span>CONTACT</span> ME</h1>
     
      <input type="text" placeholder="your name" v-model="message.name">
      <input type="email" placeholder="your email address" v-model="message.email">
      <textarea placeholder="what can i do for you" v-model="message.content"></textarea>
      <button class="m-btn" @click="send">CONTACT</button>
      <div class="clearfix"></div>
      <img id="signature" src="../assets/images/signature.png" alt="Image not found">
    </div>
   
  </div>
</template>
<script>
export default {
  data() {
    return {
      message: {
        name: '',
        email: '',
        content: ''
      }
    }
  },
  methods: {
    hideNavigation() {
      this.$store.commit('show');
    },
    async send() {
      let result = await axios.post('http://localhost:8082/mailgun/', {
        data: {
          from: `${this.message.name} <${this.message.email}>`,
          subject: 'Client Contact',
          text: this.message.content,
          to: 'm.rares956@yahoo.com',
        }
      });

      this.$router.push({name: 'message-sent'})
    }
  }
}
</script>
<style scoped>
.contact {
  width: 100%;
  height: 100%;
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
  margin-right: 0px;
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

textarea {
  height: 300px;
  padding: 30px 0 0 30px;
  resize: none;
}

input:focus,
textarea:focus {
  border: 2px solid var(--primary);
}

button {
  float: left;
}

::placeholder {
  color: white;
  font-family: 'Bebas Neue';
}

#signature {
  width: 150px;
  margin-left: calc(50% - 75px);
  margin-top: 200px;
}

.clearfix {
  content: "";
  clear: both;
}

</style>
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
      <mfooter></mfooter>
    </div>
   
  </div>
</template>
<script>
import environment from '../config/environment';
import mfooter from '../components/Footer';
export default {
  components: {
    mfooter
  },
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
      let result = await axios.post(`${environment.getApiUrl()}/mailgun/`, {
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
  min-height: 100vh;
  position: absolute;
  top: -10000px;
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

.container {
  background-color: black;
  top: 0;
  margin-top: 50px;
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
  margin-top: 150px;
  margin-bottom: 50px;
}

.clearfix {
  content: "";
  clear: both;
}

@media only screen and (max-width: 1400px) {
  input, textarea, button {
    width: 96%;
    margin-right: 4%;
  }
}

@media only screen and (max-width: 1100px) {
  .container {
    width: 96%;
    margin-left: 2%;
  }

  .icon {
    margin-right: 4%;
  }
}

@media only screen and (max-width: 700px) {
  .title {
    font-size: 2.5em;
  }

  .container {
    margin-top: 0;
    top: 30px;
  }

  #signature {
    margin-top: 50px;
  }
}
</style>
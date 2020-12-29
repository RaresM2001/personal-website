<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');

:root {
  --primary: #9158bd;
}

* {
  box-sizing: border-box;
  font-family: 'Roboto';
}

body {
  margin: 0;
  padding: 0;
  background-color: black;
}

.overlay {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  background-color: rgba(0, 0, 0, .5);
  z-index: 1;
}

.root {
  width: 100%;
  height: 100vh;
  background-color: black;
  overflow: auto;
}

.container {
  width: 100%;
  max-width: 1000px;
  position: absolute;
  left: 50%;
  top: 200px;
  transform: translateX(-50%);
  z-index: 2;
}

.title {
  padding: 0;
  margin: 0;
  font-size: 3.5em;
  font-weight: 100;
  color: white;
  display: block;
}

.subtitle {
  color: lightgrey;
  font-weight: bold;
  font-family: 'Bebas Neue';
}


span {
  font-weight: bold;
}

.icon {
  fill: white;
  float: left;
  margin-right: 50px;
  transition: all .4s;
  cursor: pointer;
}

.m-btn {
  width: 200px;
  height: 50px;
  border: none;
  border-radius: 5px;
  border: 2px solid white;
  color: white;
  background-color: transparent;
  font-family: 'Bebas Neue';
  font-size: 1.5em;
  margin-top: 50px;
  cursor: pointer;
  transition: all .4s;
}

.m-btn:hover {
  color: var(--primary);
  border-color: var(--primary);
}

.glitch:before,
.glitch:after {
  content: attr(data-text);
  position: absolute;
  top: 0;
  background: black;
  clip: rect(0, 0, 0, 0);
}

.glitch:before {
  left: -4px;
  text-shadow: 6px 0 #ff00ff;
}

.glitch:before {
  text-shadow: 4px 0 #ff00ff;
  animation: glitch-anim-1 0.4s infinite ease-in-out alternate-reverse;
}

.glitch:after {
  left: 4px;
  text-shadow: -3px 0 #00ffc8;
}

.glitch:after {
  text-shadow: -5px 0 #00ffc8;
  animation: glitch-anim-2 0.9s infinite ease-in-out alternate-reverse;
}

@keyframes glitch-anim-1 {
  0% {clip: rect(30px, 9999px, 10px, 0);}
  25% {clip: rect(15px, 9999px, 100px, 0);}
  50% {clip: rect(50px, 9999px, 105px, 0);}
  75% {clip: rect(2px, 9999px, 80px, 0);}
  100% {clip: rect(90px, 9999px, 100px, 0);}
}

@keyframes glitch-anim-2 {
  0% {
    top: -1px;
    left: 50px;
    clip: rect(65px, 9999px, 119px, 0);
  }
  25% {
    top: -10px;
    left: 1px;
    clip: rect(79px, 9999px, 19px, 0);
  }
  50% {
    top: -7px;
    left: 20px;
    clip: rect(65px, 9999px, 11px, 0);
  }
  75% {
    top: 10px;
    right: 20px;
    left: -50px;
    clip: rect(95px, 9999px, 53px, 0);
  }
  100% {
    top: -5px;
    left: -7px;
    clip: rect(31px, 9999px, 149px, 0);
  }
}

@media only screen and (max-width: 1100px) {
  .container {
    width: 98%;
    margin-left: 1%;
   }
}

</style>

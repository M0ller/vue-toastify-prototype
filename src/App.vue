<template>
  <div class="divide">
    <div class="login">
      <h1>Default settings</h1>
      <button @click="notify">Notify !</button>
      <h1>Info settings</h1>
      <button @click="notifyInfo">Notify !</button>
      <h1>Success settings</h1>
      <button @click="notifySuccess">Notify !</button>
      <h1>Warning settings</h1>
      <button @click="notifyWarning">Notify !</button>
      <h1>Error settings</h1>
      <button @click="notifyError">Notify !</button>

      <div class="login">
        <h1>Customized position</h1>
        <button @click="notifyNewPos">Notify!</button>
      </div>
    </div>
  </div>
</template>

<script>

import {toast} from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

export default {
  methods: {
    notify() {
      toast("Wow default popup");
    },
    notifyInfo() {
      toast.info("Wow info popup");
    },
    notifySuccess() {
      toast.success("Wow success popup");
    },
    notifyWarning() {
      toast.warning("Wow warning popup");
    },
    notifyError() {
      toast.error("Wow error popup");
    },
    notifyNewPos() {
      toast.success("Im a special popup!", {
        autoClose: 1000,
        position: "bottom-center",
        style: {
          bottom: 20 + "%",
        }
      });
    }
  },
}
</script>

<style scoped>

/*
Themes settings:
light
dark
colored

Position settings:
top-left
top-center
top-right
bottom-left
bottom-center
bottom-right

Types settings:
default
info
success
warning
error

Transitions settings:
bounce
fade
flip
zoom
*/

.login {
  display: flex;
  flex-direction: column;
  row-gap: 5px;
}


.divide {
  display: flex;
  flex-direction: row;
  column-gap: 20px;
}

</style>

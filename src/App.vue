<template>
  <div class="divide">
    <div class="login">
      <h1>Default settings</h1>
      <button @click="notify">Notify !</button>

      <div class="login">
        <h1>Customized position</h1>
        <button @click="notifyNewPos">Notify!</button>
        <div class="toast-container"></div>
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
      toast.success("Wow cool popup");
    },
    notifyNewPos() {
      toast.success("Im a special popup!", {
        autoClose: 1000,
        toastStyle: 'toast-container',
      });
    }
  },
}
</script>

<style scoped>


.toast-container {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
}

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

<template>
  <IxSpace>
    <IxTimePicker v-model:value="time" format="hh:mm A" />
    <IxTimePicker v-model:value="time" format="hh:mm:ss" />
    <IxTimePicker v-model:value="time" format="HH:mm" />
    <IxTimePicker v-model:value="time" format="HH时ss秒" />
  </IxSpace>
</template>
<script setup lang="ts">
import { ref } from 'vue'

const time = ref(new Date())
</script>

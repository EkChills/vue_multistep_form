<template>
  <button @click="onClick" :class="`${color} text-white text-[14px] lg:ml-auto w-[97px] h-[40px] grid place-items-center rounded-md`">
    {{ text }}
  </button>
</template>

<script>
export default {
  props:['text', 'color', 'onClick']
}
</script>

<style>
  .denim {
    background-color: #022959;
  }
  .light-blue {
    background-color: #483EFF;
  }
</style>
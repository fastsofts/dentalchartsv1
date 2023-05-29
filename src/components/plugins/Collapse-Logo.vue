<template>
  <img class="adjust" :src="left"/>
</template>


<style>
.adjust{
  margin-top: -5vh;
}
</style>

<script>
import left from './left.svg'

export default {
  data() {
    return {
      left
    }
  }
}
</script>
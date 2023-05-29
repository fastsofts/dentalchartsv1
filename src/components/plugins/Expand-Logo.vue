
<template>
  <img class = "adjust" :src="right"/>
</template>

<style>
.adjust{
  margin-top: -5vh;
}
</style>

<script>
import right from './right.svg'

export default {
  data() {
    return {
      right
    }
  }
}
</script>
<template>
<div>
  <search/>
  <weather/>
</div>
</template>

<script>
import search from "./search";
import weather from "./weather";
export default {
  name: "mainpage",
  components: {
    search,
    weather
  }
}
</script>

<style scoped>

</style>
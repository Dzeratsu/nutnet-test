<template>
<div class="footerCopy">Сделано в Nutnet, {{dataYear.getFullYear()}}</div>
</template>

<script>
export default {
  name: "footerCopy",
  data() {
    return {
      dataYear: new Date()
    }
  }
}
</script>

<style scoped>
.footerCopy {
  padding-top: 96px;
  height: 65px;
  left: 0px;
  bottom: 0px;
  text-align: center;
  color: #8A91AB;
}
</style>
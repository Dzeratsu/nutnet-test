<template>
  <div>
<div class="header">
  <div><router-link class="link" active-class="active" to="/" exact>Главная</router-link></div>
  <div><router-link class="link" active-class="active" to="/history">История</router-link></div>
  <div><router-link class="link" active-class="active" to="/about">О компании</router-link></div>
</div></div>
</template>

<script>
export default {
  name: "headerMenu",
}
</script>

<style scoped>
.header{
  height: 65px;
  background: #2A2F45;
  display: flex;
  justify-content: center;
  padding-top: 24px;

}
.header div {
  font-size: 14px;
  padding: 0 23px;
}
.link {
  color: #8A91AB;
}
.active {
  color: white;
}

</style>
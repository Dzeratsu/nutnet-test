<template>
<div class="cont-about">
  <p>Это красивое и функциональное приложение отображает прогноз погоды. Вы можете узнавать текущую температуру, почасовой прогноз на следующие 24 часа и прогноз
    на 10 дней в разных точках мира.</p>
  <h1>Возможности:</h1>
  <ul>
    <li>Текущие погодные условия отображаются в виде анимации в фоновом режиме.</li>
    <li>Просматривайте прогноз на следующие 24 часа или 10 дней, в том числе вероятность осадков.</li>
    <li>Вероятность и прогнозируемая интенсивность осадков в ближайший час отображаются в поминутной таблице.*</li>
    <li>Получайте официальные оповещения об экстремальных погодных условиях, таких как ураганы, снежные бури или наводнения.*</li>
    <li>Для крупных городов можно отображать цветовую шкалу, показывающую индекс качества воздуха.*</li>
    <li>Сохраняйте места в своем списке, а затем переключайтесь между ними смахиванием или сведите пальцы для просмотра всего списка.</li>
  </ul>
</div>
</template>

<script>
export default {
  name: "about"
}
</script>

<style scoped>
.cont-about{
  margin: 0 auto;
  max-width: 511px;
  padding-top: 145px;
}
p{
  font-size: 24px;
  margin-right: 10px;
  line-height: 150%;
  font-style: normal;
  font-weight: normal;
}
h1 {
  margin-top: 40px;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 150%;
}
li {
  padding-top: 24px;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
}
li::before {
  content: '•';
  color: #494F68;
  display: inline-block;
  width: 6px;
  margin-right: 10px;
}
</style>
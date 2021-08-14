<template>
  <div class="appBar_app">
    <div class="appBar__header">
      <h1>Sound<span>Bit</span></h1>
    </div>
    <ul class="appBar__content">
      <router-link to="#"><li>Songs</li></router-link>
      <router-link to="#"><li>Testing</li></router-link>
      <router-link to="#"><li>Podcasts</li></router-link>
      <router-link to="#"><li>Favoritos</li></router-link>
    </ul>
  </div>
</template>

<script></script>

<style scoped>
.appBar_app {
  display: flex;
  flex-direction: column;

  width: 15vw;
  height: 100vh;
  background-color: #ecf0f1;
}

.appBar__header {
  color: #e85288;
  height: 120px;
  display: flex;
  align-items: center;
  margin: 0 60px;
}

.appBar__header span {
  color: #000;
}

.appBar__content {
  display: flex;
  flex-direction: column;
  text-align: center;

  padding: 0;

  margin-top: 10em;
}

.appBar__content li {
  display: flex;
  flex-direction: column;
  justify-content: center;
  list-style-type: none;
  width: 100%;

  height: 50px;

  font-weight: bold;
  font-size: 18px;

  margin-bottom: 2px;
}

.appBar__content li:hover {
  background-color: #d4d4d4;
}

.appBar__content a {
  text-decoration: none;
  color: #000;
}
</style>

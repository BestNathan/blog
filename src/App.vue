<template>
  <div id="app">
    <!--<loading></loading>-->
    <tipIcon></tipIcon>
    <navbar></navbar>
    <!--<modal></modal>-->
    <div class="container main">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import navbar from './components/Navbar'
import tipIcon from './components/tipIcon'

export default {
  name: 'app',
  components: {
    navbar,
    tipIcon
  }
}
</script>

<style>
@import "/static/css/bootstrap.min.css";
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.ql-editor {
  height: 500px;
  background-color: #e5e5e5;
}
.main {
  margin-top: 70px;
}
</style>

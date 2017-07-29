<template>
    <div class="test">
      <form action="">
        姓名
        <input type="text" v-model="data.name" placeholder="">
        <br>
        性别
        <input type="radio" id="man" value="One" v-model="data.sex">
        <label for="man">男</label>
        <input type="radio" id="woman" value="Two" v-model="data.sex">
        <label for="woman">女</label>
        兴趣：
        <input type="checkbox" id="book" value="book" v-model="data.interest">
        <label for="book">读书</label>
        <input type="checkbox" id="swim" value="swim" v-model="data.interest">
        <label for="swim">游泳</label>
        <input type="checkbox" id="game" value="game" v-model="data.interest">
        <label for="game">游戏</label>
        <input type="checkbox" id="sing" value="sing" v-model="data.interest">
        <label for="sing">唱歌</label>
        身份：
        <select v-model="data.identity">
          <option value="techer" selected>老师</option>
          <option value="doctor" >医生</option>
          <option value="lawyer" >律师</option>
        </select>
      </form>
      <div v-model="data">{{ data }}</div>
    </div>
</template>
<script>
export default {
  name: '',
  data () {
    return {
      data: {
        name: '',
        sex: '',
        interest: [],
        identity: ''
      }
    }
  },
  methods: {
    toggle: function () {
      this.ok = !this.ok
    }
  }
}
</script>
<style scoped>
.test {
  margin-top: 70px;
}
</style>

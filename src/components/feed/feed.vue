<template>
  <div class="pl-header pl-header--feed" show.bind="isShowHeader">
      <div>
          <img class="pl-icon pl-icon--user" src="../../assets/img/icon-user.png">
          <button type="button" class="btn btn-primary" click.trigger="search()">
                  <span class="glyphicon glyphicon-search"></span> 
                  Search
              </button>
      </div>
      <button type="button" class="btn btn-primary" click.delegate="isInputOnFocus = true">Compose</button>
  </div>
</template>

<!--<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>-->

<style lang="scss" scoped>
  @import "./feed.scss";
</style>

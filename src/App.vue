<template>
  <div id="app" >
    <div id="nav">
      <router-link to="/">首页</router-link> |
      <router-link to="/list">列表</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50; 

  background-color: #fff;
    position: fixed;
    top: 0;
    bottom: 0;
    width: 100%;
    min-height: 100%;
    overflow-y: scroll;
}

#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

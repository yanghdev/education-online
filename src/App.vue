<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<style lang="less">
* {
  padding: 0;
  margin: 0;
}
body,
html,
#app {
  height: 100%;
}
body {
  overflow: scroll;
}
::-webkit-scrollbar {
  width: 0px;
}

::-webkit-scrollbar {
  display: none;
}
</style>

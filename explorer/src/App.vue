<template>
  <div id="app">
    <Header></Header>
    <router-view style="margin-top: 0.61rem;flex: 1;"/>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "./components/Header"
import Footer from "./components/Footer";
export default {
  name: 'app',
  components:{Footer, Header},
  data (){
    return {
      key: new Date()
    }
  }
}
</script>

<style lang="scss">
  @import "style/index.css";
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
}
  html {
    width: 100%;
    height: 100%;
    font-size: 625% !important;
    -webkit-text-size-adjust: none;
  }
  body{
    overflow-y: scroll;
    background: #F5F7FA;
    font-size:16px !important;
  }
 html body{
   height: 100%;
   font-size: 0.16px;
    .el-menu--horizontal{
      .el-menu {
        background: #fff !important;
        .el-menu-item{
          background: #fff !important;
          a{
            color: #171D44;
          }
          a:hover{
            color: #4E61E7 !important;
          }
        }
      }
    }
  }
/*  {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }*/
  .el-select-dropdown__item.selected{
    color:#3264fd !important;
  }

</style>

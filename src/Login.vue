<!--<template>-->
<!--  <div>-->
<!--    <el-aside>-->
<!--      <el-input v-model="username" placeholder="请输用户名"></el-input>-->
<!--      <el-input placeholder="请输入密码" v-model="password" show-password></el-input>-->
<!--      <el-row>-->
<!--        <el-button type="primary" round>登录</el-button>-->
<!--        <router-link to="/home"><el-button type="primary" round>返回首页</el-button></router-link>-->
<!--        <router-link to="/register"><el-button type="primary" round>注册页</el-button></router-link>-->
<!--      </el-row>-->
<!--    </el-aside>-->

<!--  </div>-->


<!--</template>-->
<!--<script>-->
<!--  export default {-->
<!--    data() {-->
<!--      return {-->
<!--        input: ''-->
<!--      }-->
<!--    }-->
<!--  }-->

<!--</script>-->
<template>
  <div id="wrap">
    <div id="top_content">
      <div id="header">
        <div id="rightheader">
          <p>
            2009/11/20
            <br />
          </p>
        </div>
        <div id="topheader">
          <h1 id="title">
            <a href="#">main</a>
          </h1>
        </div>
        <div id="navigation">
        </div>
      </div>
      <div id="content">
        <p id="whereami">
        </p>
        <h1>登录</h1>
        <form action="#" method="post" @click="user_login">
          <!--          {% csrf_token %}-->
          <table cellpadding="0" cellspacing="0" border="0"
                 class="form_table">
            <tr>
              <td valign="middle" align="right">
                用户名:
              </td>
              <td valign="middle" align="left">
                <input type="text" class="inputgri" name="username" />
              </td>
            </tr>
            <tr>
              <td valign="middle" align="right">
                密码:
              </td>
              <td valign="middle" align="left">
                <input type="password" class="inputgri" name="pwd" v-model="password"/>
              </td>
            </tr>
          </table>
          <p>
            <el-row>
              <el-button type="primary" round @click="user_login">登录</el-button>
              <router-link to="/register"><el-button type="primary" round >注册页</el-button></router-link>
            </el-row>
          </p>
        </form>
      </div>
    </div>
    <div id="footer">
      <div id="footer_bg">
        ABC@126.com
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name:"Login",
    data(){
      return {
        username:"",
        password:"",
      }
    },
    methods:{
      //完成用户登录
      user_login(){
        this.$axios({
          url:"http://127.0.0.1:8000/app/user/",
          methods:"get",
          params:{
            username:this.username,
            password:this.password,
          }
        }).then(res=>{
          console.log(res.data['message']);
          if (res.data['message']){
            let username=res.data.results['username'];
            // let user = res.data.result;
            localStorage.setItem("user",username);
            this.$route.push("/home");
          }
        }).catch(error=>{
          this.$message.error('用户名不存在');
        })
      }
    }
  }
</script>

<!--<template>-->
<!--  <el-aside>-->
<!--    <el-input v-model="input" placeholder="请输入用户名"></el-input>-->
<!--    <el-input placeholder="请输入密码" v-model="input" show-password></el-input>-->
<!--    <el-input placeholder="请输确认密码" v-model="input" show-password></el-input>-->
<!--    <el-row>-->
<!--      <el-button type="success" round>注册</el-button>-->
<!--    </el-row>-->
<!--  </el-aside>-->
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

<!--<style scoped>-->

<!--</style>-->
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
        <h1>注册</h1>
        <form action="#" method="post" @click="user_register">
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
                真实姓名:
              </td>
              <td valign="middle" align="left">
                <input type="text" class="inputgri" name="name" v-model="real_name" @click="blur()"/>
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
            <tr>
              <td valign="middle" align="right">
                性别:
              </td>
              <td valign="middle" align="left">
                男
                <input type="radio" class="inputgri" name="sex" value="m" checked="checked" @click="gender=0"/>
                女
                <input type="radio" class="inputgri" name="sex" value="f" @click="gender=1"/>
              </td>
            </tr>

<!--            <tr>-->
<!--              <td valign="middle" align="right">-->
<!--                验证码:-->
<!--                <img id="num" src="image" />-->
<!--                <a href="javascript:;" onclick="document.getElementById('num').src = 'image?'+(new Date()).getTime()">换一张</a>-->
<!--              </td>-->
<!--              <td valign="middle" align="left">-->
<!--                <input type="text" class="inputgri" name="number" />-->
<!--              </td>-->
<!--            </tr>-->
<!--            <tr>-->
<!--              <td valign="middle" align="right">-->
<!--                头像-->
<!--              </td>-->
<!--              <td valign="middle" align="left">-->
<!--                <input type="file" name="head_picture">-->
<!--              </td>-->
<!--            </tr>-->
          </table>
          <p>
            <el-row><el-button type="primary" round @click="user_register">注册</el-button></el-row>
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
  export  default {
    name:"Register",
    data(){
      return{
        username:"",
        password:"",
        real_name:"",
        gender:"0",
      }
    },
    methods:{
      user_register(){
          this.$axios({
            url:"http://127.0.0.1:8000/app/user/",
            methods:"post",
            data:{
              username:this.username,
              password:this.password,
              real_name:this.real_name,
              gender:this.gender,
            }
          }).then(res=>{
            console.log(res.data['message']);
            //
            if (res.data['message']){
              this.$message.error("成功");
              this.$route.push("/login");
            }
          }).catch(error=>{
            console.log(error);
            this.$message.error("用户信息错误")
          })
      }
    }
  }
</script>

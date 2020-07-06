<!--<template>-->
<!--  <el-table-->
<!--    :data="tableData"-->
<!--    style="width: 100%">-->
<!--    <el-table-column-->
<!--      prop="date"-->
<!--      label="姓名"-->
<!--      width="180">-->
<!--    </el-table-column>-->
<!--    <el-table-column-->
<!--      prop="name"-->
<!--      label="性别"-->
<!--      width="180">-->
<!--    </el-table-column>-->
<!--    <el-table-column-->
<!--      prop="address"-->
<!--      label="密码">-->
<!--    </el-table-column>-->
<!--  </el-table>-->

<!--  <router-link to="/pag"><el-button type="primary" round>修改页面</el-button></router-link>-->
<!--</template>-->

<!--<script>-->
<!--  export default {-->
<!--    data() {-->
<!--      return {-->
<!--        tableData: [{-->
<!--          date: '王小虎',-->
<!--          name: '男',-->
<!--          address: '123456'-->
<!--        }, {-->
<!--          date: '王小虎',-->
<!--          name: '男',-->
<!--          address: '123456'-->
<!--        }, {-->
<!--          date: '王小虎',-->
<!--          name: '男',-->
<!--          address: '123456'-->
<!--        }, {-->
<!--          date: '王小虎',-->
<!--          name: '男',-->
<!--          address: '123456'-->
<!--        }]-->
<!--      }-->
<!--    }-->
<!--  }-->
<!--</script>-->

<!--<style scoped>-->

<!--</style>-->


<!--<template>-->
<!--  <el-table-->
<!--    :data="tableData"-->
<!--    style="width: 100%">-->
<!--    <el-table-column-->
<!--      label="日期"-->
<!--      width="180">-->
<!--      <template slot-scope="scope">-->
<!--        <i class="el-icon-time"></i>-->
<!--        <span style="margin-left: 10px">{{ scope.row.date }}</span>-->
<!--      </template>-->
<!--    </el-table-column>-->
<!--    <el-table-column-->
<!--      label="姓名"-->
<!--      width="180">-->
<!--      <template slot-scope="scope">-->
<!--        <el-popover trigger="hover" placement="top">-->
<!--          <p>姓名: {{ scope.row.name }}</p>-->
<!--          <p>住址: {{ scope.row.address }}</p>-->
<!--          <div slot="reference" class="name-wrapper">-->
<!--            <el-tag size="medium">{{ scope.row.name }}</el-tag>-->
<!--          </div>-->
<!--        </el-popover>-->
<!--      </template>-->
<!--    </el-table-column>-->
<!--    <el-table-column label="操作">-->
<!--      <template slot-scope="scope">-->
<!--        <el-button-->
<!--          size="mini"-->
<!--          @click="handleEdit(scope.$index, scope.row)">编辑</el-button>-->
<!--        <el-button-->
<!--          size="mini"-->
<!--          type="danger"-->
<!--          @click="handleDelete(scope.$index, scope.row)">删除</el-button>-->
<!--      </template>-->
<!--    </el-table-column>-->
<!--  </el-table>-->
<!--</template>-->

<!--<script>-->
<!--  export default {-->
<!--    name:'Home',-->
<!--    data() {-->
<!--      return {-->
<!--        tableData: [{-->
<!--          date: '2016-05-02',-->
<!--          name: '王小虎',-->
<!--          address: '上海市普陀区金沙江路 1518 弄'-->
<!--        }, {-->
<!--          date: '2016-05-04',-->
<!--          name: '王小虎',-->
<!--          address: '上海市普陀区金沙江路 1517 弄'-->
<!--        }, {-->
<!--          date: '2016-05-01',-->
<!--          name: '王小虎',-->
<!--          address: '上海市普陀区金沙江路 1519 弄'-->
<!--        }, {-->
<!--          date: '2016-05-03',-->
<!--          name: '王小虎',-->
<!--          address: '上海市普陀区金沙江路 1516 弄'-->
<!--        }]-->
<!--      }-->
<!--    },-->
<!--    methods: {-->
<!--      handleEdit(index, row) {-->
<!--        console.log(index, row);-->
<!--      },-->
<!--      handleDelete(index, row) {-->
<!--        console.log(index, row);-->
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
          <h1>退出</h1>
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
        <h1>欢迎:{{user_msg}}访问</h1>

        <table class="table">
          <tr class="table_header">
            <td>ID</td>
            <td>Name</td>
            <td>Salary</td>
            <td>Age</td>
            <td>Operation</td>
          </tr>


          <tr class="row1" v-for="{emp,index} in emp_list" :key="emp.id" :class="index%2==0? 'row1':'rowe2'">
            <td>{{emp.id}}</td>
            <td>{{emp.name}}</td>
            <td><img :src="emp.img" style="height: 60px;"></td>
            <td>{{emp.salary}}</td>
            <td>{{emp.age}}</td>
            <td><a href="">delete emp</a>&nbsp;<a href="javascript:;" @click="delEmp(emp.id)">删除员工</a></td>
            <td><a href="">修改员工</a>$nbsp; </td>
            <td><a href="javascript:;" @click="update(emp_id)">更新员工</a></td>
<!--            <router-link :to="/update/"+emp.id></router-link>-->
          </tr>
<!--          <tr class="row2">-->
<!--            <td>2</td>-->
<!--            <td>lishi</td>-->
<!--            <td>20000</td>-->
<!--            <td>20</td>-->

<!--            <td>-->
<!--              <a href="">delete emp</a>&nbsp;<a href="">update emp</a>-->
<!--            </td>-->
<!--            <td><img src="./static/img/nane.gif" width="50" alt="无法加载图片"></td>-->
<!--          </tr>-->
        </table>
        <p>
<!--          <input type="button" class="button" value="Add Employee" onclick="location='addEmp.html'"/>-->
          <el-button type="success"><router-link to="/add">添加成功</router-link></el-button>
        </p>
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
    name: "Home",
    data() {
      return {
        user_msg: "",
        emp_list: [],//员工列表
      }
    },
    methods: {
      findAllEmp() {
        //     this.$axios.get({
        //         this.emp_list = res.data.result;
        //     }).catch(error=>{
        //       this.$message.error("查询出错");
        //     })
        //   }
        // },
        this.$axios({
          url: "http://127.0.0.1:8000/app/emp",
          methods: "post",
          data: {}
        }).then(res => {
          console.log(res.data['message']);
          this.emp_list = res.data.result;
          // //
          // if (res.data['message']){
          //   this.$message.error("成功");
          //   this.$route.push("/login");
          // }
        }).catch(error => {
          console.log(error);
          this.$message.error("用户信息错误")
        })

      },
      delEmp(id){
        alert(id)
      },
      update(id){
        alert(id)
      },
      // addEmp(){
      //
      // },

      created() {
        let username = localStorage.getItem("user")
        this.user_msg = username;
        if (username) {

        } else {
          this.$message.error("您还没有登录,请登录");
          this.$route.push("/login")
        }
        this.findAllEmp();

      }
    }
  }
</script>

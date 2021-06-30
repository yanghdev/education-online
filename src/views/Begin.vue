<template>
  <div id="app-first">
    <el-container>
      <el-header>
        <div class="d-flex">
          <div class="d-flex flex-1 font-weight font-md">后台管理系统</div>
          <div class="d-flex flex-5 j-center mr-4">
            <div
              class="d-flex flex-column line-1 px-5"
              v-for="(v, i) in topLabel"
              :key="i"
            >
              <div class="flex-1 mt-2 text-white">
                <span :class="v.icon"></span>
              </div>
              <div class="flex-1 mb-1 font-sm text-white">
                <span>{{ v.name }}</span>
              </div>
            </div>
          </div>
        </div>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <el-row class="tac">
            <el-menu
              default-active="2"
              class="el-menu-vertical-demo"
              background-color="#c3e4fa"
              unique-opened
            >
              <router-link exact active-class="active" tag="span" to="homePage">
                <el-menu-item class="shouye border-bottom" index="0">
                  <i class="el-icon-s-home"></i>
                  <span class="shouye pr-3">首页</span>
                </el-menu-item>
              </router-link>
              <el-submenu index="1">
                <template slot="title">
                  <i class="el-icon-s-cooperation"></i>
                  <span>课程管理</span>
                </template>
                <el-menu-item-group>
                  <router-link tag="span" to="/DiviceType">
                    <el-menu-item
                      index="1-1"
                      @click="clicks('设备管理', '设备类型')"
                      >课程列表</el-menu-item
                    >
                  </router-link>
                  <router-link tag="span" to="/DiviceMoney">
                    <el-menu-item
                      index="1-2"
                      @click="clicks('设备管理', '设备台账')"
                      >课程消耗</el-menu-item
                    >
                  </router-link>
                </el-menu-item-group>
              </el-submenu>
              <el-submenu index="2">
                <template slot="title">
                  <i class="el-icon-s-flag"></i>
                  <span>班级管理</span>
                </template>
                <el-menu-item-group>
                  <router-link tag="span" to="/MalfunctionRepair">
                    <el-menu-item
                      index="2-1"
                      @click="clicks('维修管理', '故障报修')"
                      >班级管理</el-menu-item
                    >
                  </router-link>
                  <router-link tag="span" to="/MaintenanceOrder">
                    <el-menu-item
                      index="2-2"
                      @click="clicks('维修管理', '维修工单')"
                      >课时管理</el-menu-item
                    >
                  </router-link>
                  <el-menu-item
                    index="2-3"
                    @click="clicks('维修管理', '维修记录')"
                    >教室管理</el-menu-item
                  >
                  <el-menu-item
                    index="2-4"
                    @click="clicks('维修管理', '维修记录')"
                    >课程表</el-menu-item
                  >
                </el-menu-item-group>
              </el-submenu>
              <el-submenu index="3">
                <template slot="title">
                  <i class="el-icon-document-copy"></i>
                  <span>订单管理</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item
                    index="3-1"
                    @click="clicks('保养管理', '故障报修')"
                    >订单列表</el-menu-item
                  >
                  <el-menu-item
                    index="3-2"
                    @click="clicks('保养管理', '维修工单')"
                    >退款管理</el-menu-item
                  >
                </el-menu-item-group>
              </el-submenu>
              <el-menu-item index="4">
                <i class="el-icon-user"></i>
                <span slot="title">学员管理</span>
              </el-menu-item>
              <el-submenu index="5">
                <template slot="title">
                  <i class="el-icon-user-solid"></i>
                  <span>教师管理</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item
                    index="5-1"
                    @click="clicks('保养管理', '故障报修')"
                    >校区管理</el-menu-item
                  >
                  <el-menu-item
                    index="5-2"
                    @click="clicks('保养管理', '维修工单')"
                    >教师管理</el-menu-item
                  >
                </el-menu-item-group>
              </el-submenu>
              <el-submenu index="6">
                <template slot="title">
                  <i class="el-icon-receiving"></i>
                  <span>文章管理</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item
                    index="6-1"
                    @click="clicks('保养管理', '故障报修')"
                    >轮播图管理</el-menu-item
                  >
                  <el-menu-item
                    index="6-2"
                    @click="clicks('保养管理', '维修工单')"
                    >资讯管理</el-menu-item
                  >
                  <el-menu-item
                    index="6-3"
                    @click="clicks('保养管理', '维修记录')"
                    >活动管理</el-menu-item
                  >
                  <el-menu-item
                    index="6-3"
                    @click="clicks('保养管理', '维修记录')"
                    >公开课管理</el-menu-item
                  >
                </el-menu-item-group>
              </el-submenu>
              <el-submenu index="7">
                <template slot="title">
                  <i class="el-icon-files"></i>
                  <span>促销活动</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item
                    index="7-1"
                    @click="clicks('保养管理', '故障报修')"
                    >秒杀活动</el-menu-item
                  >
                  <el-menu-item
                    index="7-2"
                    @click="clicks('保养管理', '维修工单')"
                    >优惠券管理</el-menu-item
                  >
                </el-menu-item-group>
              </el-submenu>
              <el-menu-item index="9">
                <i class="el-icon-paperclip"></i>
                <span slot="title">统计分析</span>
              </el-menu-item>
              <el-submenu index="10">
                <template slot="title">
                  <i class="el-icon-s-tools"></i>
                  <span>系统设置</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item
                    index="10-1"
                    @click="clicks('保养管理', '故障报修')"
                    >员工管理</el-menu-item
                  >
                  <el-menu-item
                    index="10-2"
                    @click="clicks('保养管理', '维修工单')"
                    >角色管理</el-menu-item
                  >
                  <el-menu-item
                    index="10-3"
                    @click="clicks('保养管理', '维修记录')"
                    >关于我们</el-menu-item
                  >
                  <el-menu-item
                    index="10-4"
                    @click="clicks('保养管理', '维修记录')"
                    >通用设置</el-menu-item
                  >
                  <el-menu-item
                    index="10-5"
                    @click="clicks('保养管理', '维修记录')"
                    >消息</el-menu-item
                  >
                  <el-menu-item
                    index="10-6"
                    @click="clicks('保养管理', '维修记录')"
                    >操作日志</el-menu-item
                  >
                </el-menu-item-group>
              </el-submenu>
            </el-menu>
          </el-row>
        </el-aside>
        <el-main> 
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      topLabel: [
        { icon: "el-icon-user", name: "管理员" },
        { icon: "el-icon-s-home", name: "首页" },
        { icon: "el-icon-alarm-clock", name: "消息" },
        { icon: "el-icon-circle-close", name: "退出" },
      ],
    };
  },
};
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
}
ul,
li {
  list-style: none;
}

html,
body,
#app-first,
.el-container,
.el-aside,
.el-main {
  height: 100%;
}
.el-main {
  background-color: #fff !important;
  color: #333 !important;
  text-align: left !important ;
  line-height: 1px !important;
}

.el-header,
.el-footer {
  background-color: #42aef8;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #c3e4fa;
  color: #333;
  text-align: center;
  line-height: 200px;
}
.el-menu-item i,
.el-submenu__title i {
  color: rgb(15, 14, 14) !important;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>

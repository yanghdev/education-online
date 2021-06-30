<template>
  <div>
    <div class="font-weight font-md">首页</div>
    <div class="py-3 px-2">
      <el-row :gutter="15"
        ><!---->
        <el-col
          v-for="(item, index) in cardList1"
          :key="index"
          style="width: 25%"
        >
          <div class="yh-card d-flex flex-row">
            <div
              class="flex-3 d-flex a-center j-center font-mg text-white"
              :style="{ background: item.leftBg }"
            >
              <div :class="item.icon" class="yh-icon"></div>
            </div>
            <div
              class="flex-6 d-flex flex-column"
              style="max-width: 100%"
              :style="{ background: item.rightBg }"
            >
              <div class="line-1 font-msd font-weight p-1 pt-3 t-center">
                {{ item.name }}
              </div>
              <div class="d-flex flex-row line-1 px-1 t-center">
                <div class="flex-1 pt-1 text-ellipsis" style="font-size: 13px">
                  ￥ {{ item.sum }}
                </div>
              </div>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="d-flex flex-column">
      <div class="bg-table p-2 border">代办事项</div>
      <div class="border a-center">
        <el-row :gutter="12"
          ><!---->
          <el-col
            v-for="(item, index) in cardList2"
            :key="index"
            style="width: 33%"
          >
            <div class="yh-card d-flex flex-row">
              <div
                class="d-flex a-center j-center font-mg"
                style="padding-left: 120px"
              >
                <div :class="item.icon" class="yh-icon"></div>
              </div>
              <div class="d-flex flex-column" style="max-width: 100%">
                <div class="line-1 font-msd pt-3 t-center">
                  {{ item.name }}
                </div>
                <div class="d-flex flex-row line-1 px-1 t-center">
                  <div
                    class="flex-1 pt-1 text-ellipsis"
                    style="font-size: 13px"
                  >
                    ￥ {{ item.sum }}
                  </div>
                </div>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>

    <div class="d-flex flex-row mt-2">
      <div class="d-flex flex-column flex-1">
        <div class="bg-table p-2 border">课程总览</div>
        <div class="border a-center">
          <el-row :gutter="12"
            ><!---->
            <el-col
              v-for="(item, index) in cardList3"
              :key="index"
              style="width: 33%"
            >
              <div class="yh-card d-flex flex-row">
                <div class="d-flex flex-column pl-6" style="max-width: 100%">
                  <div class="line-1 font-msd pt-3 t-center">
                    {{ item.name }}
                  </div>
                  <div class="d-flex flex-row line-1 px-1 t-center">
                    <div
                      class="flex-1 pt-1 text-ellipsis font-weight"
                      style="font-size: 13px"
                    >
                      ￥ {{ item.sum }}
                    </div>
                  </div>
                </div>
              </div>
            </el-col>
          </el-row>
        </div>
      </div>
      <div class="d-flex flex-column flex-1">
        <div class="bg-table p-2 border">学员总览</div>
        <div class="border a-center">
          <el-row :gutter="12"
            ><!---->
            <el-col
              v-for="(item, index) in cardList4"
              :key="index"
              style="width: 25%"
            >
              <div class="yh-card d-flex flex-row">
                <div class="d-flex flex-column pl-3" style="max-width: 100%">
                  <div class="line-1 font-msd pt-3 t-center">
                    {{ item.name }}
                  </div>
                  <div class="d-flex flex-row line-1 px-1 t-center">
                    <div
                      class="flex-1 pt-1 text-ellipsis font-weight"
                      style="font-size: 13px"
                    >
                      ￥ {{ item.sum }}
                    </div>
                  </div>
                </div>
              </div>
            </el-col>
          </el-row>
        </div>
      </div>
    </div>
    <div class="mt-2">
      <div class="bg-table p-2 border">订单统计</div>
      <div class="border a-center d-flex flex-row">
        <div class="flex-1 p-4">
          <div class="flex-column">
            <div class="p-4 font-smd">
              本月订单总数
              <p class="pt-2 font-sm font-weight">2000</p>
            </div>

            <div class="p-4 font-smd">
              本周订单总数
              <p class="pt-2 font-sm font-weight">4000</p>
            </div>
          </div>
        </div>
        <div class="flex-4 p-4">
          <div class="d-flex flex-row font-sm pl-5 ">
            <div class="d-flex flex-1">
              近一周订单统计
            </div>
            <div class="text-right">
              <span style="color:#108ee9">本周</span>
              <span class="px-4">本月</span>
            </div>
          </div>
          <div class="d-flex" id="main" :style="{ width: '860px', height: '500px' }"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      cardList1: [
        {
          icon: "ri-money-cny-circle-line",
          leftBg: "#fb6260",
          rightBg: "#f2d4d3",
          name: "今日订单收入",
          sum: 28111111,
        },
        {
          icon: "ri-money-pound-circle-line",
          leftBg: "#ffa94c",
          rightBg: "#f3e2cf",
          name: "昨日订单收入",
          sum: 28,
        },
        {
          icon: "ri-arrow-right-up-fill",
          leftBg: "#52c1f5",
          rightBg: "#d0e7f1",
          name: "进7天订单收入",
          sum: 28,
        },
        {
          icon: "ri-arrow-right-up-line",
          leftBg: "#73a0fa",
          rightBg: "#d7e0f2",
          name: "进一个月订单收入",
          sum: 28,
        },
      ],
      cardList2: [
        {
          icon: "el-icon-wallet",
          name: "待付款订单",
          sum: 28111111,
        },
        {
          icon: "el-icon-sell",
          name: "待确认订单",
          sum: 28,
        },
        {
          icon: "ri-money-euro-circle-line",
          name: "待处理退款申请",
          sum: 28,
        },
      ],
      cardList3: [
        {
          name: "已上架",
          sum: 28111111,
        },
        {
          name: "已下架",
          sum: 28,
        },
        {
          name: "全部",
          sum: 28,
        },
      ],
      cardList4: [
        {
          name: "今日新增",
          sum: 28111111,
        },
        {
          name: "昨日新增",
          sum: 28,
        },
        {
          name: "本月新增",
          sum: 28,
        },
        {
          name: "学员总数",
          sum: 28,
        },
      ],
    };
  },
  mounted() {
    this.drawLine();
  },
  methods: {
    drawLine() {
      var chartDom = document.getElementById("main");
      var myChart = this.$echarts.init(chartDom);
      var option;
      option = {
        // backgroundColor:'red',
        xAxis: {
          type: "category",
          data: ["周一", "周二", "周三", "周四", "周五", "周六", "周天"],
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            data: [150, 230, 224, 218, 135, 147, 260],
            type: "line",
          },
        ],
      };

      option && myChart.setOption(option);
    },
  },
};
</script>


<style scoped>
.yh-card {
  border-radius: 10px;
  height: 100px;
  overflow: hidden;
}
</style>

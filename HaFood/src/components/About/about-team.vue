<template>
    <div class="about-team-box">
        <div class="about-team-title">
            <h3 class="font-32">Meat Our Team</h3>
        </div>
        <ul class="about-team-lists">
            <li class="about-team-list"
            :key="index"
            v-for="(item, index) in ourteamList.data"
            >
            <!-- ourteamList.data -->
                <div class="team-photo">
                    <img :src="'http://192.168.97.241:3000/' + item.memberpic"/>
                    <!-- <img src="../../img/about_team_1.jpg"> -->
                </div>
                <p class="team-list-title font-16">{{item.membername}}</p>
                <!-- <p class="team-list-title font-16">{{item.name}}</p> -->
            </li>
        </ul>
    </div>
</template>

<script>
import axios from 'axios'
// let api = 'http://192.168.97.241:3000/'
export default {
  data () {
    return {
      // 我们的团队列表
      ourteamList: [
      //   {
      //     id: 1,
      //     photo: 'src/img/about_team_1.jpg',
      //     name: 'Jared Paul'
      //   },
      //   {
      //     id: 2,
      //     photo: '',
      //     name: 'Lowell Casey'
      //   },
      //   {
      //     id: 3,
      //     photo: '',
      //     name: 'Ted Owens'
      //   },
      //   {
      //     id: 4,
      //     photo: '',
      //     name: 'Wilfred Rowe'
      //   }
      ]
    }
  },
  created () {
  },
  // 节点挂在完成
  // 如果要找页面的节点做操作，放到mounted中
  // ajax请求发送 一般在created 和mounted中
  mounted () {
    // axios 我的团队
    axios({
      method: 'get',
      url: 'http://192.168.97.241:3000/team',
      data: {
      }
    }).then((res) => {
      if (res.data.status === 200) {
        this.ourteamList = res.data
      }
    }).catch(() => {
    })
  },
  computed: {
  },
  methods: {
  }
}
</script>

<style>

</style>

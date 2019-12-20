<template>
    <!-- 联系地址 电话 邮件 -->
    <ul class="contact-way-lists">
        <li class="contact-way-list"
        :key="index"
        v-for="(item, index) in ContactWay"
        >
            <i :class="item.icon" class="iconfont contact-way-icon"></i>
            <h3 class="title font-16">{{item.title}}</h3>
            <p class="text font-14">{{item.text}}</p>
        </li>
    </ul>
</template>

<script>

export default {
  data () {
    return {
      ContactWay: [
        {
          icon: 'icon-ditu',
          title: 'address',
          text: '82 Valley Farms Court'
        },
        {
          icon: 'icon-dianhua',
          title: 'Phone Number',
          text: '(546) 347-9636'
        },
        {
          icon: 'icon-xinfeng',
          title: 'Email',
          text: 'sswstudio@gmail.com'
        }
      ]
    }
  }
}
</script>

<style>

</style>

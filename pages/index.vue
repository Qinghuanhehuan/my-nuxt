<template>
<div>
  <h2>商品列表页</h2>
  <ul>
    <div v-for="good in goods" :key="good.id">
      <nuxt-link :to="`/detail/${good.id}`">{{good.text}}</nuxt-link>
    </div>
  </ul>
</div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  head() {
    return {
      title: "课程列表",
      meta: [{
        name: "description",
        hid: "description",
        content: "set page meta"
      }],
      link: [{
        rel: "favicon",
        href: "favicon.ico"
      }]
    }
  },
  async asyncData({
    $axios,error
  }) {
    //前后端都会执行，时间点发生在beforeCreate之前，里面不能使用this访问组件实例
    //会传递一个上下文对象
    //会和data合并，
    try {
      const {
        ok,
        goods
      } = await $axios.$get('/api/goods')
      if (ok) {
        return {
          goods
        }
      }
      //错误处理
      error({
        statusCode: 400,
        message: '数据查询失败'
      })
    } catch (error) {
      error(error)
    }
  },
  // data() {
  //   return {
  //     goods: [{
  //         id: 1,
  //         text: "Web全栈架构师",
  //         price: 1000
  //       },
  //       {
  //         id: 2,
  //         text: "Python架构师",
  //         price: 1000
  //       }
  //     ]
  //   }
  // },
  components: {
    Logo
  }
}
</script>

<style>

</style>

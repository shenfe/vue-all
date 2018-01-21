<template>
  <div>
    <Loading v-if="status == 0" />
    <ul v-else class="list">
      <li v-for="item in list" :key="item.id">
        <router-link :to="{ name: 'detail', params: { id: item.id }}">
          {{ item.id }}: {{ item.title }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      list: [],
      status: 0
    }
  },
  beforeMount () {
    let _this = this
    axios.get('/api/getList')
      .then(function (res) {
        _this.list.splice(0, _this.list.length, ...res.data.data)
        _this.status = 1
      })
      .catch(function (err) {
        console.log(err)
      })
  }
}
</script>

<style lang="scss" scoped>
ul.list {
  margin: 0;
  padding: 0;
  padding-left: 32px;
  list-style: none;
  li {
    text-align: left;
    line-height: 32px;
    a {
      display: block;
    }
    &.active a {
      color: lightseagreen;
    }
  }
}
</style>

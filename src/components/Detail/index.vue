<template>
  <div style="padding: 0 32px">
    <Loading v-if="status == 0" />
    <h1>{{ title }}</h1>
    <p>{{ content }}</p>
  </div>
</template>

<script>
/* global ENV */

import axios from 'axios'

import { lifecycleLogger } from '@/mixins'

export default {
  name: 'DetailView',
  mixins: ENV('pro') ? [] : [lifecycleLogger()],
  data () {
    return {
      status: 0,
      id: null,
      title: '',
      content: ''
    }
  },
  created () {
    this.fetch()
  },
  beforeRouteUpdate (to, from, next) {
    this.fetch()
    next()
  },
  methods: {
    fetch: function () {
      this.status = 0
      this.id = this.$route.params.id
      let _this = this
      return axios.get(`/api/getDetail?id=${this.id}`)
        .then(function (res) {
          _this.status = 1
          _this.title = res.data.data.title
          _this.content = res.data.data.content
        })
        .catch(function (err) {
          console.error(err)
        })
    }
  }
}
</script>

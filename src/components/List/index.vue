<template>
  <div>
    <input type="text" v-focus :value="filterText" @input="updateFilterText">
    <Loading v-if="status == 0" />
    <ul v-else class="list">
      <li v-for="item in filterList" :key="item.id">
        <router-link :to="{ name: 'detail', params: { id: item.id }}">
          {{ item.id }}: {{ item.title }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
/* global ENV */

import { mapState } from 'vuex'

import axios from 'axios'

import { lifecycleLogger } from '@/mixins'

const mixinForTest = {
  ...lifecycleLogger()
}

export default {
  name: 'ListView',
  mixins: ENV('pro') ? [] : [mixinForTest],
  data () {
    return {
      list: [],
      status: 0
    }
  },
  computed: {
    ...mapState({
      filterText: state => state.list.filterText
    }),
    filterList: function () {
      let t = this.filterText.trim()
      return this.list.filter(item => String(item.id).includes(t) || item.title.includes(t))
    }
  },
  beforeMount () {
    this.fetch()
  },
  methods: {
    updateFilterText (e) {
      this.$store.commit('list/filter', e.target.value)
    },
    fetch: function () {
      this.status = 0
      let _this = this
      return axios.get('/api/getList')
        .then(function (res) {
          _this.list = res.data.data
          _this.status = 1
        })
        .catch(function (err) {
          console.error(err)
        })
    }
  },
  directives: {
    focus: {
      inserted: function (el) {
        el.focus()
      }
    }
  }
}
</script>

<style lang="scss" scoped src="./style.scss">
</style>

<template>
  <ul>
    <li v-for="item in links" :key="item.alias" :class="{ active: current === item.alias }">
      {{ item.text }}
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    current: String,
    links: {
      type: Array,
      required: true
    }
  }
}
</script>

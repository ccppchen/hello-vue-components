<template>
  <component
    :is="mode"
    v-bind="$attrs"
    v-on="$listeners"
  />
</template>

<script>
import { importScript } from 'runtime-import'
import Vue from 'vue'
export default {
  name: 'RemoteView',
  inheritAttrs: true,
  props: {
    viewName: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      mode: '',
      $libURL: 'http://127.0.0.1:5500/components/'
    }
  },
  watch: {
    viewName: {
      immediate: true,
      async handler(name) {
        if (!name) return
        try {
          const component = await importScript(
            `${this.$libURL + name}/${name}.umd.min.js`
          )
          this.mode = name
          Vue.component(this.mode, component)
        } catch (error) {
          this.mode = ''
          console.warn('js加载错误,请检查组件名是否正确')
        }
      }
    }
  }
}
</script>

<meta>
{
  "description": "A component that says \"HelloB\" with green text."
}
</meta>

<example>
  <!-- No props or content are necessary. -->
  <remote-view></remote-view>
</example>

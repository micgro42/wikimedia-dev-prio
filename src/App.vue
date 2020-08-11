<template>
  <div id="app">
    <ApiKeyInput v-if="isApiKeyIsMissing" />
    <section v-else>
      <TaskSelector />
      <Scoring :questions="questions" />
    </section>
  </div>
</template>

<script>
import Scoring from './components/Scoring'
import TaskSelector from './components/TaskSelector'
import ApiKeyInput from './components/ApiKeyInput'

export default {
  name: 'App',
  components: {
    Scoring,
    TaskSelector,
    ApiKeyInput,
  },
  computed: {
    isApiKeyIsMissing() {
      return this.$store.state.phabricatorApiKey === ''
    },
    questions() {
      return this.$store.state.features;
    },
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

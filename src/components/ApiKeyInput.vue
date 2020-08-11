<template>
  <form v-on:submit="saveApiKey">
    <label>
      <input type="password" v-model="apiKey" /><span class="label-body">Phabricator API Key</span>
    </label>
    <button type="button" v-on:click="saveApiKey">Remember till reload</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      apiKey: '',
    }
  },
  methods: {
    saveApiKey() {
      this.$store.dispatch('setApiKey', this.apiKey);
    }
  }
}
</script>

<style lang="scss">

</style>

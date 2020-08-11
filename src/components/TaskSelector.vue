<template>
  <form v-on:submit="retrieveTask">
    <label>
      <input type="text" v-model="taskId" pattern="T\d+" placeholder="T123456"><span class="label-body">Task ID:</span>
    </label>
    <button type="button" v-on:click="retrieveTask">Retrieve Task</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      taskId: '',
    }
  },
  methods: {
    retrieveTask() {
      this.$store.dispatch('retrieveTask', this.taskId);
    }
  },
}
</script>

<style lang="scss">

</style>


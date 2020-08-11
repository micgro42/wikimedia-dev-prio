<template>
<section>
  <span class="label">{{question.label}}</span>
  <label v-for="(option, id) in question.options" :key="id">
    <input type="radio" :name="question_id" :value="id"><span class="label-body">{{option.value}} - {{option.label}}</span>
  </label>
</section>
</template>

<script>
export default {
  props: {
    question: {
      type: Object,
    },
    question_id: {
      type: String,
    },
  }
}
</script>

<style lang="scss">

</style>


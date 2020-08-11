<template>
<form>
  <section v-for="(question, id) in questions" :key="id">
    <Question :question="question" :question_id="id"/>
  </section>
  <Button type="button">Save to phabricator</Button>
</form>
</template>

<script>
import Question from './Question';

export default {
  components: {
    Question,
  },
  props: {
    questions: {
      type: Object,
    },
  }
}
</script>

<style lang="scss">

</style>

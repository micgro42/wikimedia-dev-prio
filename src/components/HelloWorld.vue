<template>
  <section>
    <b-field :label="questionLabel">
      <b-select>
        <option
            v-for="option in options"
            :value="option.id"
            :key="option.id">
          {{ option.label }}
        </option>
      </b-select>
    </b-field>
  </section>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  computed: {
    questionLabel() {
      return this.$store.state.features.fd9888eb7.label;
    },
    options() {
      const responseIds = this.$store.state.features.fd9888eb7.responses;
      return responseIds.map(responseId => this.$store.state.featureResponses[responseId]);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

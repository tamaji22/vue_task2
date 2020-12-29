<template>
  <section class="section">
    <div class="container">
      <div class="card">
        <div class="card-content has-background-link p-3">
          <span class="tag is-info is-pulled-left">STEP3</span>
          <p class="has-text-centered is-size-5 has-text-light"><font-awesome-icon icon="file-alt" class="mr-2"/>ご相談内容をご記入ください</p>
        </div>
        <div class="card-content">
          <p class="has-text-info mb-5">-ご相談内容-</p>
          <textarea class="textarea" name="consulatation" cols="100" rows="15"></textarea>
        </div>
      </div>
      <div class="columns">
        <div class="column buttons has-text-centered mt-6">
          <button class="button is-primary" @click="previousPage">前へ戻る<font-awesome-icon icon="angle-right" class="ml-3"/></button>
          <button class="button is-primary">次へ進む<font-awesome-icon icon="angle-right" class="ml-3"/></button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ConsultationForm',
  methods: {
    previousPage: function() {
      this.$router.push('/page2');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

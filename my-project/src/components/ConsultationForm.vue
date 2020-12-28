<template>
  <div>
    <div>
      <p>STEP3</p>
      <p>ご相談内容をご記入ください</p>
    </div>
    <div>
      <p>-ご相談内容-</p>
      <textarea name="consulatation" cols="100" rows="30"></textarea>
    </div>
    <div>
      <button @click="previousPage">前へ戻る</button>
      <button>次へ進む</button>
    </div>
  </div>
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

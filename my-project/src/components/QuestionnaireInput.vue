<template>
  <div>
    <div>
      <p>STEP2</p>
      <p>以下にお答えください</p>
    </div>
    <div>
      <p>現在、生命保険に加入されていますか？</p>
      <input type="radio" v-model="answer1" name="insurance" value="true">はい
      <input type="radio" v-model="answer1" name="insurance" value="false">いいえ
    </div>
    <div v-if="answer1 !== null">
      <p>現在入院中ですか。または、最近3ヶ月以内に医師の診察・検査の結果、入院・手術をすすめられたことはありますか？</p>
      <input type="radio" v-model="answer2" name="medical" value="true">はい
      <input type="radio" v-model="answer2" name="medical" value="false">いいえ
    </div>
    <div v-if="answer2 !== null">
      <p>過去5年以内に、病気やけがで、手術をうけたことまたは継続して7日以上の入院をしたことがありますか？</p>
      <input type="radio" name="hospitalization" value="true">はい
      <input type="radio" name="hospitalization" value="false">いいえ
    </div>
    <div>
      <button @click="previousPage">前へ戻る</button>
      <button @click="nextPage">次へ進む</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'QuestionnaireInput',
  data() {
    return {
      answer1: null,
      answer2: null
    }
  },
  methods: {
    previousPage: function() {
      this.$router.push('/');
    },
    nextPage: function() {
      this.$router.push('/page3');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

<template>
  <section class="section">
    <div class="container">
      <div class="card">
        <div class="card-content has-background-link p-3">
          <span class="tag is-info is-pulled-left">STEP4</span>
          <p class="has-text-centered is-size-5 has-text-light"><font-awesome-icon icon="chalkboard-teacher" class="mr-2"/>以下の内容をご確認ください</p>
        </div>
        <div class="card-content">
          <p class="has-text-info mb-2">-性別-</p>
          <p class="ml-5 mb-2">{{ genderDetermination }}</p>
          <p class="has-text-info mb-2">-生年月日-</p>
          <p class="ml-5 mb-2">{{ year }}年{{ month }}月{{ day }}日</p>
          <p class="has-text-info mb-2">-現在、生命保険に加入されていますか？-</p>
          <p class="ml-5 mb-2">{{ insuranceDetermination }}</p>
          <p class="has-text-info mb-2">-現在入院中ですか。または、最近3ヶ月以内に医師の診察・検査の結果、入院・手術をすすめられたことはありますか？-</p>
          <p class="ml-5 mb-2">{{ medicalDetermination }}</p>
          <p class="has-text-info mb-2">-過去5年以内に、病気やけがで、手術をうけたことまたは継続して7日以上の入院をしたことがありますか？-</p>
          <p class="ml-5 mb-2">{{ hospitalizationDetermination }}</p>
          <p class="has-text-info mb-2">-ご相談内容-</p>
          <p class="ml-5 mb-2">{{ consultation }}</p>
        </div>
      </div>
      <div class="columns">
        <div class="column buttons has-text-centered mt-6">
          <button class="button is-primary" @click="previousPage">前へ戻る<font-awesome-icon icon="angle-right" class="ml-3"/></button>
          <button class="button is-primary">送信<font-awesome-icon icon="angle-right" class="ml-3"/></button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Confirmation',
  computed: {
    ...mapState([
      'gender',
      'year',
      'month',
      'day',
      'insurance',
      'medical',
      'hospitalization',
      'consultation'
    ]),
    genderDetermination: function() {
      return this.gender === 'male' ? '男性' : '女性'
    },
    insuranceDetermination: function() {
      return this.insurance === 'true' ? 'はい' : 'いいえ'
    },
    medicalDetermination: function() {
      return this.medical === 'true' ? 'はい' : 'いいえ'
    },
    hospitalizationDetermination: function() {
      return this.hospitalization === 'true' ? 'はい' : 'いいえ'
    }
  },
  methods: {
    previousPage: function() {
      this.$router.push('/page3');
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

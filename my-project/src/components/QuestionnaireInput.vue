<template>
  <section class="section">
    <div class="container">
      <div class="card">
        <div class="card-content has-background-link p-3">
          <span class="tag is-info is-pulled-left">STEP2</span>
          <p class="has-text-centered is-size-5 has-text-light">
            <font-awesome-icon icon="chalkboard-teacher" class="mr-2" />以下にお答えください
          </p>
        </div>
        <div class="card-content">
          <p class="has-text-info mb-3">現在、生命保険に加入されていますか？</p>
          <div class="control">
            <label class="radio ml-5">
              <input type="radio" v-model="insurance" name="insurance" value="true" />
              <div class="is-inline-block ml-1">はい</div>
            </label>
            <label class="radio">
              <input type="radio" v-model="insurance" name="insurance" value="false" />
              <div class="is-inline-block ml-1">いいえ</div>
            </label>
          </div>
          <div v-if="insurance !== null">
            <p class="has-text-info mb-3 mt-3">
              現在入院中ですか。または、最近3ヶ月以内に医師の診察・検査の結果、入院・手術をすすめられたことはありますか？
            </p>
            <div class="control">
              <label class="radio ml-5">
                <input type="radio" v-model="medical" name="medical" value="true" />
                <div class="is-inline-block ml-1">はい</div>
              </label>
              <label class="radio">
                <input type="radio" v-model="medical" name="medical" value="false" />
                <div class="is-inline-block ml-1">いいえ</div>
              </label>
            </div>
          </div>
          <div v-if="medical !== null">
            <p class="has-text-info mb-3 mt-3">
              過去5年以内に、病気やけがで、手術をうけたことまたは継続して7日以上の入院をしたことがありますか？
            </p>
            <div class="control">
              <label class="radio ml-5">
                <input type="radio" v-model="hospitalization" name="hospitalization" value="true" />
                <div class="is-inline-block ml-1">はい</div>
              </label>
              <label class="radio">
                <input
                  type="radio"
                  v-model="hospitalization"
                  name="hospitalization"
                  value="false"
                />
                <div class="is-inline-block ml-1">いいえ</div>
              </label>
            </div>
          </div>
        </div>
      </div>
      <div class="columns">
        <div class="column buttons has-text-centered mt-6">
          <button class="button is-primary" @click="previousPage">
            前へ戻る<font-awesome-icon icon="angle-right" class="ml-3" />
          </button>
          <button class="button is-primary" @click="nextPage">
            次へ進む<font-awesome-icon icon="angle-right" class="ml-3" />
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'QuestionnaireInput',
  computed: {
    insurance: {
      get() {
        return this.$store.getters.getInsurance;
      },
      set(value) {
        this.$store.commit('setInsurance', value);
      },
    },
    medical: {
      get() {
        return this.$store.getters.getMedical;
      },
      set(value) {
        this.$store.commit('setMedical', value);
      },
    },
    hospitalization: {
      get() {
        return this.$store.getters.getHospitalization;
      },
      set(value) {
        this.$store.commit('setHospitalization', value);
      },
    },
  },
  methods: {
    previousPage: function() {
      this.$router.push('/');
    },
    nextPage: function() {
      this.$router.push('/page3');
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>

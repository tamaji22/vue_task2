<template>
    <section class="section">
    <div class="container">
      <div class="card">
        <div class="card-content has-background-link p-3">
          <span class="tag is-info is-pulled-left">STEP1</span>
          <p class="has-text-centered is-size-5 has-text-light"><font-awesome-icon icon="address-card" class="mr-2"/>お客様の情報を入力してください</p>
        </div>
        <div class="card-content">
          <p class="has-text-info mb-2">-性別-</p>
          <div class="control">
            <label class="radio">
              <input type="radio" name="gender" value="male"><div class="is-inline-block ml-1">男性</div>
            </label>
            <label class="radio">
              <input type="radio" name="gender" value="female"><div class="is-inline-block ml-1">女性</div>
            </label>
          </div>
          <div class="mt-5 mb-3">
            <p class="has-text-info mb-2">-生年月日-</p>
            <div class="select">
              <select name="year">
                <option v-for="i in 100" :key="i" value="year + i">{{ year + i }}年{{ wareki(year + i) }}</option>
              </select>
            </div>
            <div class="is-inline-block pt-2 pl-1 pr-3">年</div>
            <div class="select">
              <select name="month">
                <option v-for="i in 12" :key="i" value="i">{{ i }}</option>
              </select>
            </div>
            <div class="is-inline-block pt-2 pl-1 pr-3">月</div>
            <div class="select">
              <select name="day">
                <option v-for="i in 31" :key="i" value="i">{{ i }}</option>
              </select>
            </div>
            <div class="is-inline-block pt-2 pl-1">日</div>
          </div>
        </div>
      </div>
      <div class="has-text-centered mt-6">
        <button class="button is-primary" @click="nextPage">次へ進む<font-awesome-icon icon="angle-right" class="ml-3"/></button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'BasicInfo',
  data() {
    return {
      year: new Date().getFullYear() - 100, // 現在から100年前を基準とする
      eraName: [ // 元号判定用
        { gengou: '明治', start: 1868, end: 1912 },
        { gengou: '大正', start: 1912, end: 1926 },
        { gengou: '昭和', start: 1926, end: 1989 },
        { gengou: '平成', start: 1989, end: 2019 },
        { gengou: '令和', start: 2019, end: 9999 },
      ],
    }
  },
  computed: {
    // 西暦を元号に変換する
    wareki: function() {
      return function (year) {
        for(let i = 0; i < this.eraName.length; i++) {
          if(this.eraName[i].start <= year && year < this.eraName[i].end) {
            const warekiYear = year - this.eraName[i].start + 1;
              return `(${ this.eraName[i].gengou }${warekiYear})`;
          }
        }
      }
    }
  },
  methods: {
    nextPage: function() {
      this.$router.push('/page2');
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

<template>
  <div class="hello">
    <div>
      <p>STEP1</p>
      <p>お客様の情報を入力してください</p>
    </div>
    <div>
      <p>-性別-</p>
      <input type="radio" name="gender" value="male">男性
      <input type="radio" name="gender" value="female">女性
    </div>
    <div>
      <p>-生年月日-</p>
      <select name="year">
        <option v-for="i in 100" :key="i" value="year + i">{{ year + i }}年{{ wareki(year + i) }}</option>
      </select>
      年
      <select name="month">
        <option v-for="i in 12" :key="i" value="i">{{ i }}</option>
      </select>
      月
      <select name="day">
        <option v-for="i in 31" :key="i" value="i">{{ i }}</option>
      </select>
      日
    </div>
    <div>
      <button>次へ進む</button>
    </div>
  </div>
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
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

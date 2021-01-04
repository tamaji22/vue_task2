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
                <option v-for="i in 100" :key="i" value="year[i - 1]">{{ year[i - 1] }}年{{ wareki[i - 1] }}</option>
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
import {year, wareki} from '../definition';

export default {
  name: 'BasicInfo',
  data() {
    return {
      year: year,
      wareki: wareki,
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

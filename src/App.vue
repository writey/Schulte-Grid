<template>
    <control v-if="!isStart && !isComplete" :cardHidden="cardHidden" v-on:listenCardHidden="changeCaedHidden" v-on:listenLevel="start" />
    <card-list class="flex flex-col transition-opacity duration-500 w-screen h-vw sm:w-auto sm:h-auto" 
    v-if="isStart" v-on:listenComplete="complete" :count="level" :cardHidden="cardHidden"/>
    <complete v-if="isComplete" v-on:listenToControl="isStart = false; isComplete = false;" :score="score" :bestScore="bestScore" />
</template>
<script>
import CardList from './components/CardList.vue'
import Complete from './components/Complete.vue'
import Control from './components/Control.vue'
export default {
  components: { CardList, Control, Complete },
  data() {
    return {
      level: 4,
      isStart: false,
      isComplete: false,
      score: 0,
      bestScore: 999999,
      startDate: 0,
      cardHidden: true
    }
  },
  methods: {
    start(level) {
      this.level = level;
      this.isStart = true;
      this.isComplete = false;
      this.startDate = new Date();
      this.bestScore = Number(localStorage.getItem(this.level)) || 999999;
    },
    complete() {
      this.isStart = false; 
      this.isComplete = true;
      this.score = new Date() - this.startDate;
      if (this.bestScore > this.score) {
        localStorage.setItem(this.level, this.score);
        this.bestScore = this.score;
      }
    },
    changeCaedHidden(state) {
      this.cardHidden = state;
    }
  }
}
</script>
<style>
  html, body, #app {
    height: 100%;
  }
  #app {
    font-family: 'Muyao';
    background-image: linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%);
    display: flex;
    justify-content: center;
    align-items: center;
  }

</style>
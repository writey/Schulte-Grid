<template lang="">
  <div>
    <div class="fixed text-4xl transition-opacity" v-bind:class="{ 'opacity-0': hiddenTip }" style="left: 50%; top: 3rem; transform: translateX(-50%)">{{ currentCount }}</div>
    <div v-for="(numbersVal, index) in numbers" :key="index" class="flex justify-center flex-1">
      <Card  v-on:listenShowTip="showTip" v-on:listenReturnNum="changeCount" v-for="(item, index) in numbersVal" :key="index" :num="item" :currentCount="currentCount" :cardHidden="cardHidden" />
    </div>
  </div>
</template>
<script>
import Card from './Card.vue'
export default {
  components: { Card },
  props: {
    count: Number,
    cardHidden: Boolean
  },
  data() {
    return {
      numbers: [],
      currentCount: 1,
      hiddenTip: true
    }
  },
  created() {
    for (let i = 0; i < this.count  ; i++) {
      this.numbers.push(i + 1);
    }
    this.numbers.sort(() => { return 0.5 - Math.random()});
    this.numbers = this.groupArray(this.numbers, Math.sqrt(this.numbers.length));
  },
  methods: {
    changeCount() {
      if (this.currentCount === this.count) this.complete();
      this.currentCount++;
    },
    groupArray(arr, length) {
      let index = 0;
      let newArray = [];
      while (index < arr.length) {
        newArray.push(arr.slice(index, index += length))
      }
      return newArray;
    },
    complete() {
      this.$emit('listenComplete');
    },
    showTip(second) {
      this.hiddenTip = false;
      setTimeout(() => {
        this.hiddenTip = true;
      }, second * 1000);
    }
  },
}
</script>
<style lang="">
  
</style>
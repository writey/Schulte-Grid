<template>
  <div @click="clickNum()" v-bind:class="{ 'opacity-0': hidden }" 
  class="select-none font-bold transition-opacity duration-500 cursor-pointer 
  bg-linear rounded-md shadow-lg flex-1 m-1 flex items-center justify-center sm:leading-16 sm:m-2 sm:w-16 sm:h-16 sm:text-4xl">
    <div class=" text-2xl">{{ num }}</div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    num: Number,
    currentCount: Number,
    cardHidden: Boolean
  },
  data() {
    return {
      hidden: false
    }
  },
  methods: {
    clickNum() {
      if (this.num === this.currentCount) {
        this.$emit('listenReturnNum', this.num);
        if (this.cardHidden) this.changeHidden();
      }else {
        this.$emit('listenShowTip', 1)
      }
    },
    changeHidden() {
      this.hidden = !this.hidden;
    }
  }
}
</script>
<style scoped>
.bg-linear {
  background-image: linear-gradient(120deg, #f6d365 0%, #fda085 100%);
}
</style>
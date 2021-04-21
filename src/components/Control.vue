<template>
  <div class="flex flex-col justify-center items-center select-none">
    <h1 class="text-3xl font-bold pointer-events-none">请选择难度</h1>
    <div class="p-3 max-w-xs mx-auto bg-white rounded-xl bgc shadow-md mt-4">
      <label class="flex items-center space-x-3 text-xl font-semibold">
        <input type="checkbox" :checked="cardHidden" @click="$emit('listenCardHidden', !cardHidden)" name="checked-demo" value="1" class="form-tick appearance-none h-6 w-6 border border-black rounded-md checked:bg-blue-600 checked:border-transparent focus:outline-none">
        <span class="text-gray-900 font-medium">方块消失</span>
      </label>
    </div>
    <div class=" mt-6">
      <level @click="$emit('listenLevel', item*item)" v-for="(item, index) in levels" :level="item" :key="index" />
    </div>
  </div>
</template>
<script>
import Level from './Level.vue'
export default {
  components: { Level },
  props: {
    cardHidden: Boolean
  },
  data() {
    return {
      levels: [2,3,4,5,6,7,8]
    }
  }
}
</script>
<style scoped>
.bgc {
  background-image: linear-gradient(120deg, #e0c3fc 0%, #8ec5fc 100%);
}
.form-tick:checked {
  background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e");
  background-size: 100% 100%;
  background-position: 50%;
  background-repeat: no-repeat;
}
</style>
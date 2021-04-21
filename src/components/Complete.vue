<template lang="">
  <div class="text-center p-8 bg-gray-100 rounded-xl shadow-lg">
    <h1 class=" pointer-events-none font-bold text-4xl text-center m-4">太棒了</h1>
    <p class=" pointer-events-none text-xl m-1">本次使用了 {{ score/1000 }} 秒</p>
    <p class=" pointer-events-none text-xl m-1">最高纪录 {{ bestScore/1000 }} 秒</p>
    <div class=" select-none cursor-pointer m-4 p-8 pt-3 pb-3 bg-cyan-300 rounded-2xl text-2xl shadow-xl" @click="$emit('listenToControl')">返回首页</div>
  </div>
</template>
<script>
export default {
  props:{
    score: Number,
    bestScore: Number,
  },
}
</script>
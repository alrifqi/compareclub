<template>
  <div class="credit-score__container">
    

    <div class="credit-score--button--container">
      <div class="credit-score--button credit-score--button__grey">
        783
      </div>
      <div class="credit-score--button credit-score--button__green">
        VERY GOOD
      </div>
    </div>

    <div class="credit-score--info">
      Last updated : <span class="bold">07/10/2019</span>
    </div>
  </div>
</template>

<script>
import { Line } from 'vue-chartjs'
export default {
  name: "Creditscore",
  components: {
    Line
  }
};
</script>

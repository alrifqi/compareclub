<template>
  <div class="topgroceries--card--container">
    <div class="topgroceries--card--header">
      <img src="~/assets/images/shoplogo.png" class="image-logo"/>
      <div class="disc-info">
        {{ data['discount'] }}%
      </div>
    </div>
    <div class="topgroceries--card--body">
      <img :src="data['imgUrl']" class="product--image"/>
      <div class="product--name">
        {{ data['fullName'] }}
      </div>
      <div class="product--price">
        <div class="green value">${{ data['latestPrice']}}</div>
        <div class="discount">${{ data['beforePrice']}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TopGroceriesCard',
  props: {
    data: Array
  }
}
</script>
<template>
  <div class="shopping-list--card">
    <img src="~/assets/images/oreo.png" class="shopping-list--image">

    <div class="shopping-list--info">
      <img src="~/assets/images/shoplogo.png" class="shopping-list--shoplogo" />
      <div class="shopping-list--productname">Oreo Mini Vanilla Cup</div>

      <div class="shopping-list--disc-info">
        <div class="shopping-list--disc-percentage">
          <div class="shopping-list--disc-text">
            DISCOUNT
          </div>
          40%
        </div>
        <div class="shopping-list--disc-amount">
          $8.40
        </div>
      </div>
    </div>

    <div class="shopping-list--trash">
      <img src="~/assets/images/trash.svg" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'ShoppingListCard'
}
</script>
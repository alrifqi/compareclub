<template>
  <div class="shopping-list--container">
    <div class="shopping-list--header">
      My Shopping List
    </div>

    <div class="shopping-list--body">
      <div class="shopping-list--content">
        <ShoppingListCard />
        <ShoppingListCard />
        <ShoppingListCard />
      </div>
    </div>

    <div class="shopping-list--summary">
      <span class="bold">Total :</span>
      <span class="green">$34.00</span>
    </div>

    <div class="shopping-top--groceries">
      <div class="shopping-top--groceries--title">
        <span class="bold">
          Today's top <span class="green">groceries</span> specials:
        </span>
      </div>
      
      <div class="shopping-top--groceries--body">
        <carousel perPage="1.3" paginationColor="#EBEBEB" 
          paginationActiveColor="#41B077" paginationSize="5" paginationPadding="5"
          :scrollPerPage="false">
          <slide v-for="(top, index) in specialShop" v-key:index="index">
            <TopGroceriesCard :data="top"/>  
          </slide>
        </carousel>
      </div>
    </div>
  </div>
</template>

<script>
import ShoppingListCard from '@/components/Dashboard/ShoppingListCard'
import TopGroceriesCard from '@/components/Dashboard/TopGroceriesCard'

import { getData as getDataShopList } from '@/service/shoppinglist'
import { getData as getDataSpecialShop } from '@/service/todayspecials'
export default {
  name: 'ShoppingList',
  components: {
    ShoppingListCard,
    TopGroceriesCard
  },
  data () {
    return {
      specialShop: [],
      shopList: []
    }
  },
  mounted () {
    this.shopList = getDataShopList()
    this.specialShop = getDataSpecialShop()
  }
}
</script>
<template>
  <div class="fuel--container">
    <div class="fuel--header">
      Show Fuel Prices for:

      <div class="fuel--header--search">
        <b-form-select v-model="selected" :options="options"></b-form-select>
        <GearIcon />
      </div>
    </div>

    <div class="fuel--body">
      <div class="fuel--list">
        <span class="fuel--item fuel--item__active">E10</span>
        <span class="fuel--item">Premium 98</span>
        <span class="fuel--item">Diesel</span>
      </div>

      <div class="fuel--list--card">
        <carousel perPage="1.3" paginationColor="#EBEBEB" 
          paginationActiveColor="#41B077" paginationSize="5" paginationPadding="5"
          :scrollPerPage="false">
          <slide>
            <FuelCard />
          </slide>
          <slide>
            <FuelCard />
          </slide>
          <slide>
            <FuelCard />
          </slide>
        </carousel>
      </div>
    </div>
  </div>
</template>

<script>
import GearIcon from '@/components/Icon/GearIcon'
import FuelCard from '@/components/Dashboard/FuelCard'
export default {
  name: "Fuel",
  components: {
    GearIcon,
    FuelCard
  },
  data() {
    return {
      options: [
        { value: null, text: 'Please select an option' },
        { value: 'darwin', text: 'Darwin, 0800' },
      ]
    }
  },
  props: {
    fuel: []
  }
}
</script>
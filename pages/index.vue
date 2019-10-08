<template>
  <div>
    <b-tabs content-class="mt-3" fill>
      <b-tab active>
        <template v-slot:title>
          <GaugeIcon />
        </template>
        <b-card class="card--dashboard" header-tag="header">
          <template v-slot:header>
            <span>My Credit Score</span>
            <span class="ml-auto card--report">View Report</span>
          </template>

          <b-card-text>
            <Creditscore />
          </b-card-text>
        </b-card>

        <b-card class="card--dashboard" header-tag="header">
          <template v-slot:header>
            <span class="bold">My Score History : </span>
            <span class="ml-auto card--report">
              <b-form-select v-model="selected" :options="options"></b-form-select>
            </span>
          </template>

          <b-card-text>
            <Scorehistory />
          </b-card-text>
        </b-card>
      </b-tab>
      <b-tab title="Second">
        <template v-slot:title>
          <FireIcon />
        </template>

        <b-card-text>
          <Fuel />
        </b-card-text>
      </b-tab>
      <b-tab>
        <template v-slot:title>
          <svg width="21px" height="20px" viewBox="0 0 21 20">
            <g
              id="Page-1"
              stroke="none"
              stroke-width="1"
              fill="none"
              fill-rule="evenodd"
            >
              <g
                id="1.1-Mobile---Dashboard-score"
                transform="translate(-294.000000, -76.000000)"
                fill="#858585"
                fill-rule="nonzero"
              >
                <g id="Group-7" transform="translate(-8.000000, 56.000000)">
                  <path
                    d="M322.200893,25.796875 C322.252976,25.8750004 322.285528,25.9661453 322.298549,26.0703125 C322.31157,26.1744797 322.30506,26.272135 322.279018,26.3632812 L319.290737,35.1523438 C319.251674,35.2695318 319.176805,35.3671871 319.066127,35.4453125 C318.95545,35.5234379 318.835008,35.5625 318.704799,35.5625 L310.267299,35.5625 C310.13709,35.5625 310.016649,35.5201827 309.905971,35.4355469 C309.795293,35.350911 309.720424,35.2434902 309.681362,35.1132812 L306.22433,22.4179688 C306.133184,22.1054672 306.035529,21.9231773 305.931362,21.8710938 C305.827194,21.8190102 305.74907,21.7929688 305.696987,21.7929688 L303.021205,21.7929688 C302.851934,21.7929688 302.708706,21.7343756 302.591518,21.6171875 C302.47433,21.4999994 302.415737,21.3567717 302.415737,21.1875 C302.415737,21.0052074 302.47433,20.8554693 302.591518,20.7382812 C302.708706,20.6210932 302.851934,20.5625 303.021205,20.5625 L305.696987,20.5625 C305.8923,20.5625 306.178756,20.6438794 306.556362,20.8066406 C306.933968,20.9694019 307.220423,21.3893195 307.415737,22.0664062 L308.431362,25.5234375 L310.032924,25.5234375 L313.958705,22.125 C314.206102,21.8776029 314.502323,21.7539062 314.847377,21.7539062 C315.192431,21.7539062 315.488652,21.8776029 315.736049,22.125 L319.739955,25.5234375 L321.69308,25.5234375 C321.784227,25.5234375 321.875372,25.5494789 321.966518,25.6015625 C322.057664,25.6536461 322.135788,25.7187496 322.200893,25.796875 Z M314.857143,23.0039062 L311.868862,25.5429688 L317.825893,25.5429688 L314.857143,23.0039062 Z M318.275112,34.3125 L320.794643,26.7734375 L308.763393,26.7734375 L310.75558,34.3125 L318.275112,34.3125 Z M317.044643,36.8125 C317.474333,36.8125 317.842167,36.9654933 318.148158,37.2714844 C318.45415,37.5774755 318.607143,37.9453104 318.607143,38.375 C318.607143,38.8046896 318.45415,39.1725245 318.148158,39.4785156 C317.842167,39.7845067 317.474333,39.9375 317.044643,39.9375 C316.614953,39.9375 316.247118,39.7845067 315.941127,39.4785156 C315.635136,39.1725245 315.482143,38.8046896 315.482143,38.375 C315.482143,37.9453104 315.635136,37.5774755 315.941127,37.2714844 C316.247118,36.9654933 316.614953,36.8125 317.044643,36.8125 Z M311.419643,36.8125 C311.849333,36.8125 312.217167,36.9654933 312.523158,37.2714844 C312.82915,37.5774755 312.982143,37.9453104 312.982143,38.375 C312.982143,38.8046896 312.82915,39.1725245 312.523158,39.4785156 C312.217167,39.7845067 311.849333,39.9375 311.419643,39.9375 C310.989953,39.9375 310.622118,39.7845067 310.316127,39.4785156 C310.010136,39.1725245 309.857143,38.8046896 309.857143,38.375 C309.857143,37.9453104 310.010136,37.5774755 310.316127,37.2714844 C310.622118,36.9654933 310.989953,36.8125 311.419643,36.8125 Z"
                  ></path>
                </g>
              </g>
            </g>
          </svg>
        </template>

        <b-card-text>
          <ShoppingList />
        </b-card-text>
      </b-tab>
    </b-tabs>
  </div>
</template>

<script>
import Creditscore from '@/components/Dashboard/Creditscore'
import Scorehistory from '@/components/Dashboard/Scorehistory'
import Fuel from '@/components/Dashboard/Fuel'
import GaugeIcon from '@/components/Icon/GaugeIcon'
import FireIcon from '@/components/Icon/FireIcon'
import ShoppingList from '@/components/Dashboard/ShoppingList'

import { getData, getFuelList } from '../service/petrol.js'
export default {
  components: {
    Creditscore,
    Scorehistory,
    GaugeIcon,
    FireIcon,
    Fuel,
    ShoppingList
  },
  data() {
    return {
      options: [
        { value: null, text: 'Please select an option' },
        { value: '6', text: '6 Months' },
      ]
    }
  },
  mounted () {
    // getData()
    getFuelList()
  }
}
</script>

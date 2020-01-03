<template>
  <div class="coins">
    <p>Name: {{ coin.name }}</p>
    <p>Symbol: {{ coin.symbol }}</p>
    <p>Price (USD): {{ coin.price_usd }}</p>
    <router-view></router-view>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Coins",

  data() {
    return {
      coin: {}
    };
  },

  created() {
    this.fetchData();
  },

  watch: {
    $route: "fetchData"
  },

  methods: {
    fetchData() {
      var list_coins = {
        usd: {
          name: "USD",
          symbol: "$",
          price: "222"
        }
      };

      this.coin = list_coins[this.$route.params.id];
    }
  }
};
</script>

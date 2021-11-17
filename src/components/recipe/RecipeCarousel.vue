<template>
  <v-card>
    <v-carousel
      cycle
      show-arrows-on-hover
      hide-delimiter-background
      height="500px"
      v-model="recipeIndex"
    >
      <v-carousel-item
        v-for="(item, i) in recipes"
        :key="i"
        :src="item.imageUrl"
        fade
      >
        <v-card-title class="justify-center blue-grey lighten-5">
          {{ recipes[recipeIndex].name }} by {{ recipes[recipeIndex].author }}
        </v-card-title>
      </v-carousel-item>
    </v-carousel>
  </v-card>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: {
    recipes: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      recipeIndex: 0,
    };
  },
});
</script>

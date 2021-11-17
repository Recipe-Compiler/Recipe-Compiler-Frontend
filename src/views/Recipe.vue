<template>
  <v-form>
    <v-card shaped>
      <v-card-title v-text="recipe.name"></v-card-title>
      <v-list>
        <v-list-title>Instructions</v-list-title>
        <v-list-item v-for="(item, index) in recipe.instructions" :key="index">
          <v-col cols="1">
            <v-list-item-content v-text="index + 1"> </v-list-item-content>
          </v-col>
            <v-col cols="11">
          <v-list-item-content v-text="item.description"> </v-list-item-content>
          </v-col>
        </v-list-item>
      </v-list>
    </v-card>
  </v-form>
</template>

<script lang="ts">
import Vue from "vue";
import { Recipe } from "@/interfaces/recipe";
export default Vue.extend({
  data() {
    return {
      recipe: {},
    };
  },
  mounted() {
    this.setRecipe(1);
  },
  methods: {
    setRecipe(id: any) {
      const requestOptions = {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      };
      return fetch(
        process.env.VUE_APP_API + "Recipe/GetById/" + id,
        requestOptions
      )
        .then(this.handleResponse)
        .then((recipe: Recipe) => {
          if (recipe) {
            console.log(recipe);
            this.recipe = recipe;
          }
        });
    },
    handleResponse(response: any) {
      return response.text().then((text: any) => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
          if (response.status === 401) {
            // Unauthorized request
          }
          const error = (data && data.message) || response.statusText;
          return Promise.reject(error);
        }
        return data;
      });
    },
  },
});
</script>

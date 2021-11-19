<template>
  <v-form>
    <v-card shaped>
      <v-card-title v-text="recipe.name" class="justify-center font-weight-bold headline"></v-card-title>
      <v-row>
        <v-col cols="6">
          <v-list class="ml-4" dense>
            <v-list-item-title class="font-weight-bold">Ingredients</v-list-item-title>
            <v-list-item
              v-for="(item, index) in recipe.ingredients"
              :key="index"
              
            >
              <v-col cols="1">
                <v-list-item-content v-text="index + 1"> </v-list-item-content>
              </v-col>
              <v-col cols="11">
                <v-list-item-content v-text="item.displayName">
                </v-list-item-content>
              </v-col>
            </v-list-item>
          </v-list>
          <v-list class="ml-4" dense>
            <v-list-item-title class="font-weight-bold">Instructions</v-list-item-title>
            <v-list-item
              v-for="(item, index) in recipe.instructions"
              :key="index"
            >
              <v-col cols="1">
                <v-list-item-content v-text="index + 1"> </v-list-item-content>
              </v-col>
              <v-col cols="7">
                <v-list-item-content v-text="item.description">
                </v-list-item-content>
              </v-col>
            </v-list-item>
          </v-list>
        </v-col>
        <v-col cols="6">
          <v-img :src="recipe.imageUrl" height="20vh" contain></v-img>
        </v-col>
      </v-row>
    </v-card>
  </v-form>
</template>

<script lang="ts">
import Vue from "vue";
import { Recipe } from "@/interfaces/recipe";
export default Vue.extend({
  props: {
      id: Number,
  },
  data() {
    return {
      recipe: {},
    };
  },
  mounted() {
    this.setRecipe(this.id);
    console.log(this.id)
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

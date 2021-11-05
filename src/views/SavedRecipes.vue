<template>
  <v-form>
      <v-bottom-navigation color="white" style="background-color: #fd6359" grow height="50px">
      <v-btn style="text-color: white; background-color: #fd6359" height="50px" @click="goHome">
        <span>Home</span>
        <v-icon>mdi-home</v-icon>
      </v-btn>
      <v-btn style="text-color: white; background-color: #fd6359" height="50px">
        <span>Explore</span>
        <v-icon>mdi-earth</v-icon>
      </v-btn>
      <v-btn style="text-color: white; background-color: #fd6359" height="50px">
        <span>Search</span>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
      <v-btn style="text-color: white; background-color: #fd6359" height="50px">
        <span>Meal Prep</span>
        <v-icon>mdi-food</v-icon>
      </v-btn>
      <v-btn style="text-color: white; background-color: #fd6359" height="50px">
        <span>Bookmarks</span>
        <v-icon>mdi-bookmark</v-icon>
      </v-btn>
    </v-bottom-navigation>
    <v-col class="pt-15">
      <v-row align="center" justify="center">
        <h1>Saved Recipes</h1>
      </v-row>
      <v-row align="center" justify="center">
      <v-btn
        color="#fd6359"
        elevation="2"
        @click="setFilters"
      >
        Set Filters
      </v-btn>
    </v-row>
    <v-col class="pt-15">
        <v-row align="center" justify="center">
        <v-data-table align="center" justify="center"
            :headers="tableHeaders"
            :items="savedRecipes"
            :items-per-page="5"
            :search="search"
            class="elevation-1"
            >
            </v-data-table>
        </v-row>
    </v-col>
  </v-col>
  </v-form>
</template>

<script lang="ts">
import Vue from "vue";
import { mapActions } from "vuex";
export default Vue.extend({
    data() {
        return {
            search: '',
            tableHeaders: [
                {
                    text: "Recipes",
                    align: "start",
                    value: "name"
                },
                {
                  text: "Image",
                  align: "start",
                  value: "imgUrl"
                },
                // TODO: change this or append
                {
                  text: "Recipe Page",
                  align: "start",
                  value: "recipeUrl"
                }
            ],
            savedRecipes: [],
        }
    },
    mounted() {
        let user = JSON.parse(localStorage.user);
        this.username = user.username;
        this.getSavedRecipes();
    },
    methods: {
        goHome() {
            this.$router.push("Home");
        },
        setFilters() {
            // sets filters to display recipes
            return 0;
        },
        viewRecipe() {
          // route to the correct recipe page
          return 0;
        },
        unsaveRecipe() {
          // removes recipe from user's saved list
          return 0;
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
        getSavedRecipes() {
          const requestOptions = {
            method: "GET",
            headers: { "Content-Type": "application/json" },
          };
          return fetch(process.env.VUE_APP_API + "Recipe/GetAll", requestOptions)
            .then(this.handleResponse)
            .then((recipes: any) => {
            console.log(recipes)
            this.savedRecipes = recipes; 
          });
        }
     },
});
</script>

<style></style>
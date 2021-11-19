<template>
  <v-form>
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
          <v-snackbar v-model="snackbar">
            {{ text }}
            <template v-slot:action="{ attrs }">
              <v-btn color="blue" text v-bind="attrs" @click="snackbar = false">
                Close
              </v-btn>
            </template>
          </v-snackbar>
          <v-data-table align="center" justify="center"
            :headers="tableHeaders"
            :items="savedRecipes"
            :page.sync="page"
            :items-per-page="itemsPerPage"
            :search="search"
            show-expand
            item-key="name"
            hide-default-footer
            class="elevation-1"
            @page-count="pageCount = $event"
            loading-text="Loading Your Delicious Recipes..."
          >
          <template v-slot:item.viewrecipe="{ item }">
            <v-icon small align="center" justify="center"
              @click="goToRecipe(item)"
            >
              mdi-eye
            </v-icon>
          </template>
          <template v-slot:item.actions="{ item }">
            <v-icon small align="center" justify="center"
              @click="unsaveRecipe(item)"
            >
              mdi-bookmark
            </v-icon>
          </template>
          <template v-slot:expanded-item="{ headers, item }">
            <td :colspan="headers.length">
              More Info About {{ item.name }}: {{ item.description }}
            </td>
          </template>
          </v-data-table>
        </v-row>
    </v-col>
    <div class="text-center pt-2">
      <v-pagination
        v-model="page"
        :length="pageCount"
      ></v-pagination>
      <v-text-field
        :value="itemsPerPage"
        label="Items per page"
        type="number"
        min="-1"
        max="15"
        @input="itemsPerPage = parseInt($event, 10)"
      ></v-text-field>
    </div>
  </v-col>
  </v-form>
</template>

<script lang="ts">
import Vue from "vue";
import { mapActions } from "vuex";
import { Recipe } from "@/interfaces/recipe";
export default Vue.extend({
    data() {
        return {
            snackbar: "",
            text: "",
            page: 1,
            pageCount: 0,
            itemsPerPage: 10,
            dialog: false,
            dialogDelete: false,
            tableHeaders: [
                {
                  text: "Recipe",
                  align: "start",
                  value: "name"
                },
                {
                  text: "View",
                  value: 'viewrecipe',
                  sortable: false
                },
                {
                  text: "Unsave",
                  value: 'actions',
                  sortable: false
                }
            ],
            savedRecipes: []
        }
    },
    mounted() {
        let user = JSON.parse(localStorage.user);
        this.getSavedRecipes();
    },
    methods: {
        goHome() {
            this.$router.push("/");
        },
        setFilters() {
            // sets filters to display recipes
            return 0;
        },
        goToRecipe(recipe: Recipe) {
            this.$router.push("/recipe/".concat(recipe.id));
        },
        unsaveRecipe(recipe: Recipe) {
          // removes recipe from user's saved list
          this.snackbar = true;
          const index = this.savedRecipes.indexOf(recipe, 0);
          if (index > -1) {
            this.savedRecipes.splice(index, 1);
          }
          this.text = "Recipe Unsaved";
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
        // Gets saved recipes
        getSavedRecipes() {
          const requestOptions = {
            method: "GET",
            headers: { "Content-Type": "application/json" },
          };
          // return fetch(process.env.VUE_APP_API + "/User/GetSavedRecipesByUsername/".concat(user), requestOptions)
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
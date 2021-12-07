<template>
  <v-form>
    <v-col class="pt-15">
      <v-row align="center" justify="center">
        <h1>Saved Recipes</h1>
      </v-row>
      <v-row align="center" justify="center">
        <v-btn color="#fd6359" elevation="2" @click="setFilters">
          Set Filters
        </v-btn>
      </v-row>
      <v-col class="pt-15">
        <v-row align="center" justify="center">
          <v-data-table
            align="center"
            justify="center"
            :headers="tableHeaders"
            :items="savedRecipes"
            :page.sync="page"
            :items-per-page="itemsPerPage"
            show-expand
            item-key="name"
            hide-default-footer
            class="elevation-1"
            @page-count="pageCount = $event"
            loading-text="Loading Your Delicious Recipes..."
          >
            <template v-slot:[`item.viewrecipe`]="{ item }">
              <v-icon
                small
                align="center"
                justify="center"
                @click="goToRecipe(item)"
              >
                mdi-eye
              </v-icon>
            </template>
            <template v-slot:[`item.actions`]="{ item }">
              <v-icon
                small
                align="center"
                justify="center"
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
        <v-pagination v-model="page" :length="pageCount"></v-pagination>
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
import Service from "@/service";
export default Vue.extend({
  data() {
    return {
      page: 1,
      pageCount: 0,
      itemsPerPage: 10,
      dialog: false,
      dialogDelete: false,
      tableHeaders: [
        {
          text: "Recipe",
          align: "start",
          value: "name",
        },
        {
          text: "View",
          value: "viewrecipe",
          sortable: false,
        },
        {
          text: "Unsave",
          value: "actions",
          sortable: false,
        },
      ],
      savedRecipes: [] as any,
      user: null as any,
    };
  },
  mounted() {
    this.loadUser();
    console.log(localStorage.user)
    this.getSavedRecipes(JSON.parse(localStorage.user));
  },
  methods: {
    ...mapActions(["snackBar"]),
    loadUser() {
      if (localStorage.user != null) {
        this.user = JSON.parse(localStorage.user);
        this.getUserDetails(JSON.parse(localStorage.user).userId);
      }
    },
    getUserDetails(userId: string) {
      Service.get(
        process.env.VUE_APP_API + "User/GetUserById/" + userId,
        this.getUserDetailsCallback
      );
    },
    getUserDetailsCallback(status: any, data: any) {
      console.log(status);
      this.user = data;
    },
    setFilters() {
      // sets filters to display recipes
      return 0;
    },
    goToRecipe(recipe: Recipe) {
      this.$router.push("/recipe/" + recipe.id);
    },
    unsaveRecipe(recipe: Recipe) {
      if (JSON.parse(localStorage.user) == null) {
        this.snackBar("Please login to unsave recipe");
        return;
      }
      console.log(Number(recipe.id));
      console.log(JSON.parse(localStorage.user).userId);
      const payload = {
        userId: JSON.parse(localStorage.user).userId,
        recipeId: Number(recipe.id),
      };
      Service.post(
        process.env.VUE_APP_API + "User/UnSaveRecipe",
        payload,
        this.unsaveRecipeCallback
      );
    },
    unsaveRecipeCallback(status: any, data: any) {
      this.snackBar(data.message);
    },
    // Gets saved recipes
    getSavedRecipes(user: any) {
      
      if (user === null) {
        this.snackBar("Please login to view your saved recipes.");
        return;
      }
      Service.get(
        process.env.VUE_APP_API + "User/GetSavedRecipesById/" + user.userId,
        this.getSavedRecipesCallback
      );
    },
    getSavedRecipesCallback(status: any, data: Array<string>) {
      this.savedRecipes = data;
    },
  },
});
</script>

<style></style>

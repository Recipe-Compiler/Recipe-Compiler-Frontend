<template>
  <v-form>
    <v-card shaped>
      <v-card-title
        v-text="recipe.name"
        class="justify-center font-weight-bold headline"
      ></v-card-title>
      <v-row>
        <v-col cols="6">
          <v-list class="ml-4" dense>
            <v-list-item-title class="font-weight-bold"
              >Ingredients</v-list-item-title
            >
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
            <v-list-item-title class="font-weight-bold"
              >Instructions</v-list-item-title
            >
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
          <v-btn @click="saveRecipe"> Save this Recipe</v-btn>
        </v-col>
      </v-row>
    </v-card>
  </v-form>
</template>

<script lang="ts">
import Vue from "vue";
import { Recipe } from "@/interfaces/recipe";
import Service from "@/service";
import { mapActions } from "vuex";
export default Vue.extend({
  props: {
    id: String,
  },
  data() {
    return {
      recipe: {},
      user: {} as any,
    };
  },
  mounted() {
    this.setRecipe(this.id);
    console.log(this.id);
  },
  methods: {
    ...mapActions(["snackBar"]),
    setRecipe(id: any) {
      Service.get(
        process.env.VUE_APP_API + "Recipe/GetById/" + id,
        this.setRecipeCallback
      );
    },
    setRecipeCallback(status: any, data: Recipe) {
      this.recipe = data;
    },
    saveRecipe() {
      console.log(localStorage.user);
      if (JSON.parse(localStorage.user) == null) {
        this.snackBar("Please login to save recipe");
        return;
      }
      //this.getUser(JSON.parse(localStorage.user).userId);
      console.log(Number(this.id));
      console.log(JSON.parse(localStorage.user).userId);
      const payload = {
        userId: JSON.parse(localStorage.user).userId,
        recipeId: Number(this.id),
      };
      Service.post(
        process.env.VUE_APP_API + "User/SaveRecipe",
        payload,
        this.saveRecipeCallback
      );
    },
    saveRecipeCallback(status: any, data: any) {
      this.snackBar(data.message);
    },
    getUser(userId: any) {
      Service.get(
        process.env.VUE_APP_API + "User/GetUserById/" + userId,
        this.getUserCallback
      );
    },
    getUserCallback(status: any, data: any) {
      this.user = data;
      //console.log(this.user);
    },
  },
});
</script>

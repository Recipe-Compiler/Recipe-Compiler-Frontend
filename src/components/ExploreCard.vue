<template>
  <v-form>
    <v-hover v-slot="{ hover }">
      <v-card
        :loading="loading"
        class="mt-4 mb-4"
        max-width="400"
        max-height="700"
      >
        <template slot="progress">
          <v-progress-linear color="deep-purple" height="10" indeterminate>
          </v-progress-linear>
        </template>
        <v-img height="250" :src="recipe.imageUrl">
          <v-fade-transition>
            <v-overlay v-if="hover" absolute color="orange">
              <v-btn @click="$router.push('recipe/' + recipe.id)">See more info</v-btn>
            </v-overlay>
          </v-fade-transition>
        </v-img>
        <v-card-title>{{ recipe.name }}</v-card-title>
        <v-card-text>
          <div class="my-4 text-subtitle-1">
            Recipe by: {{ recipe.author || "Unknown" }}
          </div>

          <small class="ml-2"> Tags: </small>
          <v-chip v-for="tag in recipe.tags" :key="tag.id" class="ma-2" label>
            {{ tag.name }}
          </v-chip>

          <!--  <div>{{ recipe.description }}</div> -->
        </v-card-text>

        <v-divider class="mx-4"></v-divider>
        <v-card-actions>
          <v-btn @click="saveRecipe">
            <v-icon>mdi-bookmark</v-icon>
          </v-btn>
          <v-btn>
            <v-icon>mdi-thumb-up</v-icon>
          </v-btn>
          <v-btn>
            <v-icon>mdi-thumb-down</v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-hover>
  </v-form>
</template> 

<script lang="ts">
import Vue from "vue";
import Service from "@/service";
import { mapActions } from "vuex";
export default Vue.extend({
  props: {
    recipe: Object,
    hover: Boolean,
  },
  data() {
    return {};
  },
  methods: {
    ...mapActions(["snackBar"]),
    saveRecipe() {
      if (JSON.parse(localStorage.user) == null) {
        this.snackBar("Please login to save recipe");
        return;
      }
      //this.getUser(JSON.parse(localStorage.user).userId);
      const payload = {
        userId: JSON.parse(localStorage.user).userId,
        recipeId: Number(this.recipe.id),
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
  },
});
</script> 
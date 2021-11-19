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
            <v-overlay v-if="hover" absolute color="#036358">
              <v-btn>See more info</v-btn>
            </v-overlay>
          </v-fade-transition>
        </v-img>
        <v-card-title>{{ recipe.name }}</v-card-title>
        <v-card-text>
          <v-row align="center" class="mx-0">
            <!-- <v-rating
              :value="4.5"
              color="amber"
              dense
              half-increments
              readonly
              size="14"
            ></v-rating> 

            <div class="grey--text ms-4">4.5 (413)</div> -->
          </v-row>

          <div class="my-4 text-subtitle-1">
            Recipe by: {{ recipe.author || "Unknown"  }}
          </div>

          <small class="ml-2"> Tags: </small>
          <v-chip
            v-for="tag in recipe.tags"
            :key="tag.id"
            class="ma-2"
            label
          >
            {{ tag.name }}
          </v-chip>
          

         <!--  <div>{{ recipe.description }}</div> -->
        </v-card-text>

        <v-divider class="mx-4"></v-divider>
        <v-card-actions>
          <v-btn @click="bookmarkMessage">
            <v-icon>mdi-bookmark</v-icon>
          </v-btn>
          <v-btn @click="likeMessage">
            <v-icon>mdi-thumb-up</v-icon>
          </v-btn>
          <v-btn @click="dislikeMessage">
            <v-icon>mdi-thumb-down</v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-hover>
  </v-form>
</template> 

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: {
    recipe: Object,
    hover: Boolean,
  },
  data() {
    return {};
  },
});
</script> 
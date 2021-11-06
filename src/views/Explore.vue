<template>
  <v-form>
    <v-col class="pt-15">
      <v-row class="mt-4 mb-4">
        <v-col cols="4">
          <!-- Edit navigation above -->

          <v-snackbar v-model="snackbar">
            {{ text }}
            <template v-slot:action="{ attrs }">
              <v-btn color="blue" text v-bind="attrs" @click="snackbar = false">
                Close
              </v-btn>
            </template>
          </v-snackbar>

          <v-hover v-slot="{ hover }">
            <v-card
              :loading="loading"
              class="mt-4 mb-4"
              max-width="400"
              max-height="460"
            >
              <template slot="progress">
                <v-progress-linear
                  color="deep-purple"
                  height="10"
                  indeterminate
                >
                </v-progress-linear>
              </template>
              <v-img
                height="250"
                src="https://www.cooking-therapy.com/wp-content/uploads/2021/08/Matcha-Cookies-6.jpg"
              >
                <v-fade-transition>
                  <v-overlay v-if="hover" absolute color="#036358">
                    <v-btn>See more info</v-btn>
                  </v-overlay>
                </v-fade-transition>
              </v-img>
              <v-card-title>Matcha Cookies</v-card-title>
              <v-card-text>
                <v-row align="center" class="mx-0">
                  <v-rating
                    :value="4.5"
                    color="amber"
                    dense
                    half-increments
                    readonly
                    size="14"
                  ></v-rating>

                  <div class="grey--text ms-4">4.5 (413)</div>
                </v-row>

                <div class="my-4 text-subtitle-1">
                  2 Hours 35 mins • Dessert, Easy
                </div>

                <div>Add info about the recipe.</div>
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

          <v-hover v-slot="{ hover }">
            <v-card
              :loading="loading"
              class="mt-4 mb-4"
              max-width="400"
              max-height="460"
            >
              <template slot="progress">
                <v-progress-linear
                  color="deep-purple"
                  height="10"
                  indeterminate
                >
                </v-progress-linear>
              </template>
              <v-img
                height="250"
                src="https://www.justonecookbook.com/wp-content/uploads/2017/07/Spicy-Shoyu-Ramen-NEW-500x375.jpg"
              >
                <v-fade-transition>
                  <v-overlay v-if="hover" absolute color="#036358">
                    <v-btn>See more info</v-btn>
                  </v-overlay>
                </v-fade-transition>
              </v-img>
              <v-card-title>Homemade Shoyu Ramen</v-card-title>

              <v-card-text>
                <v-row align="center" class="mx-0">
                  <v-rating
                    :value="4.2"
                    color="amber"
                    dense
                    half-increments
                    readonly
                    size="14"
                  ></v-rating>

                  <div class="grey--text ms-4">4.2 (413)</div>
                </v-row>

                <div class="my-4 text-subtitle-1">
                  6 Hours 30 mins • Ramen, Pork, Soup
                </div>

                <div>Add info about the recipe.</div>
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
        </v-col>

        <v-col cols="4">
          <v-hover v-slot="{ hover }">
            <v-card
              :loading="loading"
              class="mt-4 mb-4"
              max-width="400"
              max-height="460"
            >
              <template slot="progress">
                <v-progress-linear
                  color="deep-purple"
                  height="10"
                  indeterminate
                >
                </v-progress-linear>
              </template>
              <v-img
                height="250"
                src="https://www.lovebakesgoodcakes.com/wp-content/uploads/2013/06/Shrimp-Scampi-square.jpg"
              >
                <v-fade-transition>
                  <v-overlay v-if="hover" absolute color="#036358">
                    <v-btn>See more info</v-btn>
                  </v-overlay>
                </v-fade-transition>
              </v-img>
              <v-card-title>Classic Shrimp Scampi</v-card-title>

              <v-card-text>
                <v-row align="center" class="mx-0">
                  <v-rating
                    :value="5"
                    color="amber"
                    dense
                    half-increments
                    readonly
                    size="14"
                  ></v-rating>

                  <div class="grey--text ms-4">5 (400)</div>
                </v-row>

                <div class="my-4 text-subtitle-1">
                  15 mins • Quick, Shrimp, Easy
                </div>

                <div>Add info about the recipe.</div>
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

          <v-hover v-slot="{ hover }">
            <v-card
              :loading="loading"
              class="mt-4 mb-4"
              max-width="400"
              max-height="460"
            >
              <template slot="progress">
                <v-progress-linear
                  color="deep-purple"
                  height="10"
                  indeterminate
                >
                </v-progress-linear>
              </template>
              <v-img
                height="250"
                src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F44%2F2019%2F08%2F26232540%2F5177935.jpg&q=85"
              >
                <v-fade-transition>
                  <v-overlay v-if="hover" absolute color="#036358">
                    <v-btn>See more info</v-btn>
                  </v-overlay>
                </v-fade-transition>
              </v-img>
              <v-card-title>Coconut Cream Pie</v-card-title>

              <v-card-text>
                <v-row align="center" class="mx-0">
                  <v-rating
                    :value="4.7"
                    color="amber"
                    dense
                    half-increments
                    readonly
                    size="14"
                  ></v-rating>

                  <div class="grey--text ms-4">4.7 (400)</div>
                </v-row>

                <div class="my-4 text-subtitle-1">
                  4 Hours 50 Mins • Pie, Dessert
                </div>

                <div>Add info about the recipe.</div>
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
        </v-col>

        <v-col cols="4">
          <v-hover v-slot="{ hover }">
            <v-card
              :loading="loading"
              class="mt-4 mb-4"
              max-width="400"
              max-height="460"
            >
              <template slot="progress">
                <v-progress-linear
                  color="deep-purple"
                  height="10"
                  indeterminate
                >
                </v-progress-linear>
              </template>
              <v-img
                height="250"
                src="https://cook.me/wp-content/uploads/2020/03/Spiced-carrot-lentil-soup-Recipe-How-To-Make-Spiced-carrot-lentil-soup-Delicious-Spiced-carrot-lentil-soup-8-678x1024.jpg"
              >
                <v-fade-transition>
                  <v-overlay v-if="hover" absolute color="#036358">
                    <v-btn>See more info</v-btn>
                  </v-overlay>
                </v-fade-transition>
              </v-img>
              <v-card-title>Spiced Carrot & Lentil Soup</v-card-title>

              <v-card-text>
                <v-row align="center" class="mx-0">
                  <v-rating
                    :value="5"
                    color="amber"
                    dense
                    half-increments
                    readonly
                    size="14"
                  ></v-rating>

                  <div class="grey--text ms-4">5 (400)</div>
                </v-row>

                <div class="my-4 text-subtitle-1">
                  25 mins • Quick, Soup, Lentil
                </div>

                <div>Add info about the recipe.</div>
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

          <v-hover v-slot="{ hover }">
            <v-card
              :loading="loading"
              class="mt-4 mb-4"
              max-width="400"
              max-height="460"
            >
              <template slot="progress">
                <v-progress-linear
                  color="deep-purple"
                  height="10"
                  indeterminate
                >
                </v-progress-linear>
              </template>
              <v-img
                height="250"
                src="https://miro.medium.com/max/1400/1*YtnKAZ3HapFN_82nqHEeIw.jpeg"
              >
                <v-fade-transition>
                  <v-overlay v-if="hover" absolute color="#036358">
                    <v-btn>See more info</v-btn>
                  </v-overlay>
                </v-fade-transition>
              </v-img>
              <v-card-title>Butter Zopf - Swiss Braided Bread</v-card-title>

              <v-card-text>
                <v-row align="center" class="mx-0">
                  <v-rating
                    :value="4.1"
                    color="amber"
                    dense
                    half-increments
                    readonly
                    size="14"
                  ></v-rating>

                  <div class="grey--text ms-4">4.1 (400)</div>
                </v-row>

                <div class="my-4 text-subtitle-1">
                  3 Hours 5 mins • Bread, Swiss, Bake
                </div>

                <div>Add info about the recipe.</div>
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
        </v-col>
      </v-row>
    </v-col>
  </v-form>
</template>

<script lang="ts">
import Vue from "vue";
import { mapActions } from "vuex";
//import ExploreCard from "@/components/ExploreCard.vue";
export default Vue.extend({
  data() {
    return {
      Recipes: [],
      snackbar: false,
      text: "",
    };
  },
  mounted() {
    this.GetAllRecipes();
  },
  components: {
    //ExploreCard,
  },
  methods: {
    goHome() {
      this.$router.push("Home");
    },
    bookmarkMessage() {
      this.snackbar = true;
      this.text = "Added to bookmarks";
    },
    likeMessage() {
      this.snackbar = true;
      this.text = "Recipe Liked";
    },
    dislikeMessage() {
      this.snackbar = true;
      this.text = "Recipe Disliked";
    },
    GetAllRecipes() {
      const requestOptions = {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      };
      return fetch(process.env.VUE_APP_API + "Recipe/GetAll", requestOptions)
        .then(this.handleResponse)
        .then((recipe: any) => {
          console.log(recipe);
          this.Recipes = recipe;
          this.Recipes.splice(0, this.Recipes.length - 3);
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

<style></style>

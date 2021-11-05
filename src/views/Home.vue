<template>
  <v-form>
    <v-btn @click="routeLogin"> login </v-btn>
    <RecipeCarousel :recipes="Recipes" />
    <v-col class="pt-15">
      <v-row class="mt-4 mb-4">
        <RecipeHoverCard
          v-for="(recipe, i) in Recipes"
          :key="i"
          :recipe="recipe"
        >
        </RecipeHoverCard>
      </v-row>
    </v-col>
  </v-form>
</template>

<script lang="ts">
import Vue from "vue";
//import { mapActions } from "vuex";
import RecipeHoverCard from "../components/RecipeHoverCard.vue";
import RecipeCarousel from "../components/RecipeCarousel.vue";
//import Login from "../components/Login.vue";
//import Create from "../components/Create.vue";
export default Vue.extend({
  data() {
    return {
      Recipes: [],
      items: [
        {
          src: "https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2018/11/Roasted-Butternut-Squash-Soup-1-2.jpg",
        },
        {
          src: "https://d1uz88p17r663j.cloudfront.net/original/b829edd68c818352a26f754a8184e636_bak---02---libby_s-famous-pumpkin-pie-617_edit.jpg",
        },
        {
          src: "https://www.seriouseats.com/thmb/G5vpQw2SVCP4DBBFKVhUW0tXsvU=/1500x1125/filters:fill(auto,1)/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2016__02__20160209-finishing-pasta-pesto-vicky-wasik-8-2-ef92adeced95462b8a8871aec7e163e8.jpg",
        },
        {
          src: "https://assets.bonappetit.com/photos/5c4b21e785b9bd2cf3b17454/16:9/w_4800,h_2700,c_limit/red-wine-braised-short-ribs.jpg",
        },
      ],
      user: null,
      username: "",
      password: "",
      email: "",
      rules: {
        required: (v: any) => !!v || "Required.",
        min: (v: any) => v.length >= 8 || "Min 8 characters",
        numbers: (v: any) => /\d/.test(v) || "At least one number required",
        nonalphanum: (v: any) =>
          /^a-zA-Z0-9/.test(v) || "At least one nonalphanumeric",
      },
    };
  },
  mounted() {
    this.GetAllRecipes();
  },
  components: {
    RecipeHoverCard,
    RecipeCarousel,
  },
  methods: {
    login(dialog: any) {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userName: this.username,
          password: this.password,
        }),
      };
      return fetch(process.env.VUE_APP_API + "User/login", requestOptions)
        .then(this.handleResponse)
        .then((user: any) => {
          if (user.token) {
            dialog.value = false;
            console.log(user);
            this.username = "";
            this.password = "";
            localStorage.setItem("user", JSON.stringify(user));
          }
        });
    },
    register(dialog: any) {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userName: this.username,
          password: this.password,
          email: this.email,
        }),
      };
      return fetch(process.env.VUE_APP_API + "User/register", requestOptions)
        .then(this.handleResponse)
        .then((user: any) => {
          if (user.token) {
            dialog.value = false;
            this.username = "";
            this.password = "";
            this.email = "";
            localStorage.setItem("user", JSON.stringify(user));
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
          this.Recipes.splice(0, this.Recipes.length - 4);
        });
    },

    GoToSearch() {
      this.$router.push("SearchResults");
    },

    routeLogin() {
      this.$router.push("Login");
    },
  },
});
</script>
<style></style>

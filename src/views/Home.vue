<template>
  <v-form>
    <div>
      <v-toolbar dark dense src="https://i.imgur.com/x6hfLlY.png">
        
        <v-spacer></v-spacer>
        <v-btn icon width = "100px">
          <v-icon>mdi-home</v-icon>
        </v-btn>
        <v-btn icon width = "100px">
          <v-icon>mdi-earth</v-icon>
        </v-btn>
        <v-dialog transition="dialog-bottom-transition" max-width="1000">
          <template v-slot:activator="{ on, attrs }">
            <v-btn icon width="100px" v-bind="attrs" v-on="on">
              <v-icon>mdi-magnify</v-icon> 
            </v-btn>
          </template>
          <template v-slot:default="dialog">
            <v-card>
              <v-toolbar color="#fd6359">Search</v-toolbar>
              <v-card-text>
                <v-text-field
                  label="Keyword"
                ></v-text-field>
              </v-card-text>
              <v-card-actions class="justify-end">
              <v-btn
                text
                @click="dialog.value = false"
              >Search</v-btn>
            </v-card-actions>
            </v-card>
          </template>
        </v-dialog>
        <v-btn icon width = "100px">
          <v-icon>mdi-food</v-icon>
        </v-btn>
        <v-btn icon width = "100px">
          <v-icon>mdi-bookmark</v-icon>
        </v-btn>
        <v-spacer></v-spacer>
        <v-dialog transition="dialog-bottom-transition" max-width="600">
          <template v-slot:activator="{ on, attrs }">
            <v-btn icon v-bind="attrs" v-on="on">
              <v-icon>mdi-account</v-icon>
            </v-btn>
          </template>
          <template v-slot:default="dialog">
            <v-card>
              <v-toolbar color="#fd6359">Login</v-toolbar>
              <v-card-text>
                <v-text-field
                  label="Username"
                  v-model="username"
                  :rules="[rules.required]"
                  required
                ></v-text-field>
                <v-text-field
                  label="Password"
                  v-model="password"
                  :rules="[rules.required]"
                  required
                ></v-text-field>
              </v-card-text>
              <v-card-actions class="justify-end"> 
                <v-btn text @click="login(dialog)">Login</v-btn>
              </v-card-actions> 
            </v-card>
          </template>
        </v-dialog> 
      </v-toolbar>
    </div>

    <v-carousel
      cycle
      show-arrows-on-hover
      hide-delimiter-background
      height="1250px"
    >
      <v-carousel-item
        v-for="(item, i) in Recipes"
        :key="i"
        :src="item.imageUrl"
        reverse-transition="fade-transition"
        transition="fade-transition"
      ></v-carousel-item>
    </v-carousel>

    <v-col class="pt-15">
      <v-row class="mt-4 mb-4">

      <RecipeHoverCard v-for="(recipe, i) in Recipes" :key="i" :recipe="recipe">  </RecipeHoverCard>
      </v-row>
    </v-col>
  </v-form>
</template>

<script lang="ts">
import Vue from "vue";
//import { mapActions } from "vuex";
import RecipeHoverCard from "../components/RecipeHoverCard.vue";
import Login from "../components/Login.vue";
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
  mounted(){
    this.GetAllRecipes();
  },
  components: {
    RecipeHoverCard,
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
        console.log(recipe)
        this.Recipes = recipe
        this.Recipes.splice(0, this.Recipes.length - 4)
        
        });
    },

    GoToSearch() {
      this.$router.push("SearchResults");
    },
  },
});
</script>  
<style></style>



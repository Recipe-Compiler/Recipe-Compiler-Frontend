<template>
  <v-form>
    <!-- <v-bottom-navigation color="white" style="background-color: #fd6359" grow height="50px" width="3000px"> 
      <v-btn style="text-color: white; background-color: #fd6359" height="50px">
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
    </v-bottom-navigation>-->
    <div>
      <v-toolbar dark dense src="https://i.imgur.com/yicLpLZ.jpg">
        <v-spacer></v-spacer>
        <v-btn icon>
          <v-icon>mdi-home</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>mdi-earth</v-icon>
        </v-btn>
        <v-btn @click="GoToSearch" icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>mdi-food</v-icon>
        </v-btn>
        <v-btn icon>
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
              <v-card-cations class="justify-end">
                <v-btn text @click="dialog.value = false">Login</v-btn>
              </v-card-cations>
            </v-card>
          </template>
        </v-dialog>
      </v-toolbar>
    </div>

    <v-carousel cycle show-arrows-on-hover hide-delimiter-background height="1000px">
      <v-carousel-item
        v-for="(item, i) in items"
        :key="i"
        :src="item.src"
        reverse-transition="fade-transition"
        transition="fade-transition"
      ></v-carousel-item>
    </v-carousel>

    <v-col class="pt-15">
      <v-row class="mt-4 mb-4">
        <v-col cols="3">
          <v-hover>
            <template v-slot:default="{ hover }">
              <v-card class="mx-auto" max-width="344" height="500">
                <v-card-text>
                  <h2 class="text-h6 primary--text">Butternut Squash Bisque</h2>A Delicious fall soup that will fend off the coming cold!
                </v-card-text>

                <v-card-title>
                  <v-rating
                    :value="4"
                    dense
                    color="orange"
                    background-color="orange"
                    hover
                    class="mr-2"
                  ></v-rating>
                  <span class="primary--text text-subtitle-2">64 Reviews</span>
                </v-card-title>

                <v-fade-transition>
                  <v-overlay v-if="hover" absolute color="#036358">
                    <v-btn>See more info</v-btn>
                  </v-overlay>
                </v-fade-transition>
              </v-card>
            </template>
          </v-hover>
        </v-col>
        <v-col cols="3">
          <v-hover>
            <template v-slot:default="{ hover }">
              <v-card class="mx-auto" max-width="344" height="500">
                <v-card-text>
                  <h2 class="text-h6 primary--text">Pumkin Pie</h2>A Delicious fall treat that pairs well with whipped cream or vanilla ice cream!
                </v-card-text>

                <v-card-title>
                  <v-rating
                    :value="4"
                    dense
                    color="orange"
                    background-color="orange"
                    hover
                    class="mr-2"
                  ></v-rating>
                  <span class="primary--text text-subtitle-2">64 Reviews</span>
                </v-card-title>

                <v-fade-transition>
                  <v-overlay v-if="hover" absolute color="#036358">
                    <v-btn>See more info</v-btn>
                  </v-overlay>
                </v-fade-transition>
              </v-card>
            </template>
          </v-hover>
        </v-col>
        <v-col cols="3">
          <v-hover>
            <template v-slot:default="{ hover }">
              <v-card class="mx-auto" max-width="344" height="500">
                <v-card-text>
                  <h2 class="text-h6 primary--text">Pesto Pasta</h2>A simple, comforting pasta dish for fall lovers!
                </v-card-text>

                <v-card-title>
                  <v-rating
                    :value="4"
                    dense
                    color="orange"
                    background-color="orange"
                    hover
                    class="mr-2"
                  ></v-rating>
                  <span class="primary--text text-subtitle-2">64 Reviews</span>
                </v-card-title>

                <v-fade-transition>
                  <v-overlay v-if="hover" absolute color="#036358">
                    <v-btn>See more info</v-btn>
                  </v-overlay>
                </v-fade-transition>
              </v-card>
            </template>
          </v-hover>
        </v-col>
        <v-col cols="3">
          <v-hover>
            <template v-slot:default="{ hover }">
              <v-card class="mx-auto" max-width="344" height="500">
                <v-card-text>
                  <h2 class="text-h6 primary--text">Braised Short Ribs</h2>A Hearty stew that can be made in any situation!
                </v-card-text>

                <v-card-title>
                  <v-rating
                    :value="4"
                    dense
                    color="orange"
                    background-color="orange"
                    hover
                    class="mr-2"
                  ></v-rating>
                  <span class="primary--text text-subtitle-2">64 Reviews</span>
                </v-card-title>

                <v-fade-transition>
                  <v-overlay v-if="hover" absolute color="#036358">
                    <v-btn>See more info</v-btn>
                  </v-overlay>
                </v-fade-transition>
              </v-card>
            </template>
          </v-hover>
        </v-col>
      </v-row>
    </v-col>
  </v-form>
</template>

<script lang="ts">
import Vue from "vue";
import { mapActions } from "vuex";
export default Vue.extend({ 
  data() {
    return {
      items: [
        {
          src:
            "https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2018/11/Roasted-Butternut-Squash-Soup-1-2.jpg"
        },
        {
          src:
            "https://d1uz88p17r663j.cloudfront.net/original/b829edd68c818352a26f754a8184e636_bak---02---libby_s-famous-pumpkin-pie-617_edit.jpg"
        },
        {
          src:
            "https://www.seriouseats.com/thmb/G5vpQw2SVCP4DBBFKVhUW0tXsvU=/1500x1125/filters:fill(auto,1)/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2016__02__20160209-finishing-pasta-pesto-vicky-wasik-8-2-ef92adeced95462b8a8871aec7e163e8.jpg"
        },
        {
          src:
            "https://assets.bonappetit.com/photos/5c4b21e785b9bd2cf3b17454/16:9/w_4800,h_2700,c_limit/red-wine-braised-short-ribs.jpg"
        }
      ],
      username: "",
      password: "",
      rules: {
        required: (v: any) => !!v || "Required.",
        min: (v: any) => v.length >= 8 || "Min 8 characters",
        numbers: (v: any) => /\d/.test(v) || "At least one number required",
        nonalphanum: (v: any) =>
          /^a-zA-Z0-9/.test(v) || "At least one nonalphanumeric"
      }
    };
  },
  methods: {
    login() {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: this.username,
          password: this.password
        })
      };
      return fetch("http://localhost:5001/users/login", requestOptions)
        .then(this.handleResponse)
        .then((user: any) => {
          if (user.jwtToken) {
            this.username = "";
            this.password = "";
            localStorage.setItem("user", JSON.stringify(user));
            // this.$router.push("dashboard");
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
    GoToSearch(){
      this.$router.push("SearchResults");
    },
  }, 
});
</script>  ss
<style></style>



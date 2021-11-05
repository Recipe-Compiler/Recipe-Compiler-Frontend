<template>
  <v-form>
    <v-bottom-navigation color="white" style="background-color: #fd6359" grow>
      <v-btn style="text-color: white">
        <span>Home</span>
        <v-icon>mdi-home</v-icon>
      </v-btn>
      <v-btn style="text-color: white">
        <span>Explore</span>
        <v-icon>mdi-earth</v-icon>
      </v-btn>
      <v-btn style="text-color: white">
        <span>Search</span>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
      <v-btn style="text-color: white">
        <span>Meal Prep</span>
        <v-icon>mdi-food</v-icon>
      </v-btn>
      <v-btn style="text-color: white">
        <span>Bookmarks</span>
        <v-icon>mdi-bookmark</v-icon>
      </v-btn>
    </v-bottom-navigation>

    <v-col class="pt-15">
      <h1 align="center" style="color: #7d312c">
        Welcome to The Recipe Compiler!
      </h1>
      <h3 align="center" style="color: #7d312c">
        Please enter your login credentials.
      </h3>
      <v-card class="px-7 py-7 mr-5" shaped>
        <v-text-field
          v-model="username"
          label="Username"
          required
          :rules="[rules.required]"
          outlined
          class="mt-2"
        ></v-text-field>
        <v-text-field
          v-model="password"
          label="Password"
          required
          :rules="[rules.required, rules.min, rules.numbers, rules.nonalphanum]"
          outlined
          class="mt-2"
        ></v-text-field>
        <v-btn color="red" align="center">Login</v-btn>
      </v-card>

      <v-row justify="center" class="mb-4 mt-4 mr-4 ml-4">
        <v-col cols="4"></v-col>
        <v-col cols="2">
          <span style="color: #7d312c">Clicked the wrong button?</span>
        </v-col>
        <v-col cols="1">
          <v-btn color="red" :center="true" :absolute="true"
            >create Account</v-btn
          >
        </v-col>
        <v-col cols="5"></v-col>
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
      username: "",
      password: "",
      rules: {
        required: (value: any) => !!value || "Required.",
        min: (v: any) => v.length >= 8 || "Min 8 characters",
        numbers: (v: any) => /\d/.test(v) || "At least one number required",
        nonalphanum: (v: any) =>
          /^a-zA-Z0-9/.test(v) || "At least one nonalphanumeric",
      },
    };
  },
  methods: {
    login() {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: this.username,
          password: this.password,
        }),
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
  },
});
</script>

<style></style>

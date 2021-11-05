<template>
  <v-form>
    <v-col class="pt-15">
      <h1 align="center" style="color: #7d312c">
        Please enter your login credentials.
      </h1>
      <v-card class="px-7 py-7 mr-5" shaped>
        <v-text-field
          v-model="username"
          label="Username"
          required
          outlined
          class="mt-2"
        ></v-text-field>
        <v-text-field
          v-model="password"
          label="Password"
          required
          outlined
          class="mt-2"
        ></v-text-field>
        <v-btn color="red" @click="login">Login</v-btn>
      </v-card>
      <v-row justify="center" class="mb-4 mt-4 mr-4 ml-4">
        <v-col cols="4"></v-col>
        <v-col cols="2">
          <span style="color: #7d312c">Clicked the wrong button?</span>
        </v-col>
        <v-col cols="1">
          <v-btn @click="routeCreate" color="red" :center="true" :absolute="true" 
            >Create Account</v-btn
          >
        </v-col>
        <v-col cols="5"></v-col>
      </v-row>
    </v-col>
  </v-form>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data () {
    return {
      username: "",
      password: "",
      rules: {
        required: (v: any) => !!v || "Required.",
      },
    };
  },
  methods: {
    login() {
      console.log("inside login method");
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
            console.log(user);
            this.username = "";
            this.password = "";
            localStorage.setItem("user", JSON.stringify(user));
            this.$router.push("Home");
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
    routeCreate() {
      this.$router.push("Create");
    },
  },
});

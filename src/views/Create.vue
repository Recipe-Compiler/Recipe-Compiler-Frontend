<template>
  <v-form>
    <v-col class="pt-15">
      <h1 align="center" style="color: #7d312c">
        Please enter your information to register an account.
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
          v-model="email"
          label="Email"
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
        <v-row>
          <v-col cols="8"
            ><v-btn color="red" @click="register">Register</v-btn></v-col
          >
          <v-col cols="2"
            ><span style="color: #7d312c"
              >Clicked the wrong button?</span
            ></v-col
          >
          <v-col cols="2"
            ><v-btn
              color="red"
              :center="true"
              :absolute="true"
              @click="routeLogin"
              >Login</v-btn
            ></v-col
          >
        </v-row>
      </v-card>
    </v-col>
  </v-form>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  data() {
    return {
      username: "",
      password: "",
      email: "",
    };
  },
  methods: {
    register() {
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
    routeLogin() {
      this.$router.push("Login");
    },
  },
});
</script>

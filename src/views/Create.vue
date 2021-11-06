<template>
  <v-form>
    <v-card>
      <h3>Create Account</h3>
      <v-card-text>
        <v-text-field
          label="Username"
          v-model="username"
          required
        ></v-text-field>
        <v-text-field label="Email" v-model="email" required></v-text-field>
        <v-text-field
          label="Password"
          v-model="password"
          required
        ></v-text-field>
      </v-card-text>
      <v-btn @click="register" color="red">Register</v-btn>
    </v-card>
    <v-row justify="center" class="mb-4 mt-4 mr-4 ml-4">
      <v-col cols="4"></v-col>
      <v-col cols="2">
        <span style="color: #7d312c">Clicked the wrong button?</span>
      </v-col>
      <v-col cols="1">
        <v-btn color="red" :center="true" :absolute="true" @click="routeLogin"
          >Login</v-btn
        >
      </v-col>
      <v-col cols="5"></v-col>
    </v-row>
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

<template v-slot:default="dialog">
  <v-card>
    <v-toolbar color="#fd6359">Create Account</v-toolbar>
    <v-card-text>
      <v-text-field
        label="Username"
        v-model="username"
        required
      ></v-text-field>
      <v-text-field
        label="Email"
        v-model="email"
        required
      ></v-text-field>
      <v-text-field
        label="Password"
        v-model="password"
        required
      ></v-text-field>
    </v-card-text>

    <v-card-actions class="justify-end">
      <v-btn text left @click="render_login = true">Login</v-btn>
      <div v-if="render_create === true">
        <Login />
      </div>
      <v-btn text @click="register(dialog)">Register</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import Vue from "vue";
import { mapActions } from "vuex";
export default Vue.extend({
  data() {
    return {

      username: "",
      password: "",
      email: "",
      render_login: false,
    };
  },
  methods: {
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
  },
});

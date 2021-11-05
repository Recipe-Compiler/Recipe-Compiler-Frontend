<template>  
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
      <v-btn text left @click="render_create = true">Create Account</v-btn>
      <div v-if="render_create === true">
        <Create />
      </div>
      <v-btn text @click="login(dialog)">Login</v-btn>
    </v-card-actions>
  </v-card>
</template>
<script lang="ts">
import Vue from "vue";
import { mapActions } from "vuex";
export default Vue.extend({
  props: {
    dialog: Object
  },
  data() {
    return {
      username: "",
      password: "",
      render_create: false,
      rules: {
        required: (v: any) => !!v || "Required.",
      },
    };
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

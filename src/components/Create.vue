<template>
  <v-form>
    <v-col class="pt-15">
      <h1 align="center" style="color: #7d312c">
        Welcome to The Recipe Compiler!
      </h1>
      <h3 align="center" style="color: #7d312c">
        Please enter your login credentials.
      </h3>
      <v-card class="px-7 py-7 mr-5" shaped>
        <v-text-field
          v-model="firstname"
          label="First Name"
          required
          :rules="[rules.required]"
          outlined
          class="mt-2"
        ></v-text-field>
        <v-text-field
          v-model="lastname"
          label="Last Name"
          required
          :rules="[rules.required]"
          outlined
          class="mt-2"
        ></v-text-field>
        <v-text-field
          v-model="username"
          label="Username"
          required
          :rules="[rules.required]"
          outlined
          class="mt-2"
        ></v-text-field>
        <v-text-field
          v-model="email"
          label="Email"
          required
          :rules="[rules.required]"
          outlined
          class="mt-2"
        ></v-text-field>
        <v-text-field
          v-model="password"
          label="Password"
          required
          :rules="[rules.required]"
          outlined
          class="mt-2"
        ></v-text-field>
        <v-text-field
          v-model="confirm_password"
          label="Confirm Password"
          required
          :rules="[rules.required]"
          outlined
          class="mt-2"
        ></v-text-field>
        <v-btn color="red" align="center">Create Account</v-btn>
      </v-card>
      <v-row justify="center" class="mb-4 mt-4 mr-4 ml-4">
        <v-col cols="4"></v-col>
        <v-col cols="2">
          <span style="color: #7d312c">Clicked the wrong button?</span>
        </v-col>
        <v-col cols="1">
          <v-btn color="red" :center="true" :absolute="true">Login</v-btn>
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
      firstname: "",
      lastname: "",
      username: "",
      email: "",
      password: "",
      confirm_pass: "",
    };
  },
  methods: {
    register() {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: this.firstname,
          lastName: this.lastname,
          username: this.username,
          email: this.email,
          password: this.password,
        }),
      };
      return fetch("http://localhost:5001/users/register", requestOptions)
        .then(this.handleResponse)
        .then((message: any) => {
          console.log(JSON.stringify(message));
          this.firstname = "";
          this.lastname = "";
          this.username = "";
          this.email = "";
          this.password = "";
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

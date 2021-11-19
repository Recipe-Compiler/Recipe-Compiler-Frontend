<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" max-width="600px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="amber darken-3" dark v-bind="attrs" v-on="on">
          <v-icon>mdi-account</v-icon>
          Register
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="text-h5">Register</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-form>
              <v-card-text>
                <v-text-field
                  label="Username"
                  v-model="username"
                  required
                  outlined
                ></v-text-field>
                <v-text-field
                  label="Email"
                  v-model="email"
                  required
                  outlined
                ></v-text-field>
                <v-text-field
                  label="Password"
                  v-model="password"
                  required
                  outlined
                  :type="showPass ? 'text' : 'password'"
                  @click:append="showPass = !showPass"
                  :append-icon="showPass ? 'mdi-eye' : 'mdi-eye-off'"
                ></v-text-field>
              </v-card-text>
              <v-btn @click="register" color="red">Register</v-btn>
            </v-form>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary darken-1" text @click="dialog = false">
            Close
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script lang="ts">
import Vue from "vue";
import { mapActions } from "vuex";
export default Vue.extend({
  data: () => ({
    dialog: false,
    showPass: false,
    username: "",
    password: "",
    email: "",
    rules: {
      required: (v: any) => !!v || "Required.",
    },
  }),
  methods: {
    ...mapActions(["snackBar"]),
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
          this.username = "";
          this.password = "";
          this.email = "";
          this.snackBar(user.message);
          if (user.success) {
            this.dialog = false;
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

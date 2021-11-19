<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" max-width="600px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="amber darken-3" dark v-bind="attrs" v-on="on">
          <v-icon>mdi-account</v-icon>
          Login
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="text-h5">Login</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-form>
              <v-text-field
                v-model="username"
                label="Username*"
                required
                outlined
                :rules="[rules.required]"
                class="mt-2"
              ></v-text-field>
              <v-text-field
                v-model="password"
                label="Password*"
                required
                outlined
                :rules="[rules.required]"
                class="mt-2"
                :type="showPass ? 'text' : 'password'"
                @click:append="showPass = !showPass"
                :append-icon="showPass ? 'mdi-eye' : 'mdi-eye-off'"
              ></v-text-field>
              <v-row>
                <v-col cols="6"
                  ><v-btn color="red" @click="Login">Login</v-btn></v-col
                >
              </v-row>
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
    username: "",
    password: "",
    showPass: false,
    rules: {
      required: (v: any) => !!v || "Required.",
    },
  }),
  methods: {
    ...mapActions(["snackBar"]),
    Login() {
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
          console.log(user);
          if (user.token) {
            console.log(user);
            localStorage.setItem("user", JSON.stringify(user));
            this.cleanup("Login successful");
          } else {
            this.snackBar(user.message);
            this.password = "";
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
    cleanup(snackbarMessage: string) {
      this.username = "";
      this.password = "";
      this.dialog = false;
      if (snackbarMessage) {
        this.snackBar(snackbarMessage);
      }
      this.$router.go(0);
    },
  },
});
</script>

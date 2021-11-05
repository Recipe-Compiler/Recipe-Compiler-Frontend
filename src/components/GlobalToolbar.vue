<template>
  <v-form>
    <v-toolbar dark dense src="https://i.imgur.com/x6hfLlY.png">
      <v-spacer></v-spacer>
      <v-btn icon width="100px">
        <v-icon>mdi-home</v-icon>
      </v-btn>
      <v-btn icon width="100px">
        <v-icon>mdi-earth</v-icon>
      </v-btn>
      <v-dialog transition="dialog-bottom-transition" max-width="1000">
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon width="100px" v-bind="attrs" v-on="on">
            <v-icon>mdi-magnify</v-icon>
          </v-btn>
        </template>
        <template v-slot:default="dialog">
          <v-card>
            <v-toolbar color="#fd6359">Search</v-toolbar>
            <v-card-text>
              <v-text-field label="Keyword"></v-text-field>
            </v-card-text>
            <v-card-actions class="justify-end">
              <v-btn text @click="dialog.value = false">Search</v-btn>
            </v-card-actions>
          </v-card>
        </template>
      </v-dialog>
      <v-btn icon width="100px">
        <v-icon>mdi-food</v-icon>
      </v-btn>
      <v-btn icon width="100px">
        <v-icon>mdi-bookmark</v-icon>
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-account</v-icon>
      </v-btn>
      <!-- <v-dialog transition="dialog-bottom-transition" max-width="600">
      <template v-slot:activator="{ on, attrs }">
        <v-btn icon v-bind="attrs" v-on="on" @click="accountBtn">
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
          <v-card-actions class="justify-end">
            <v-btn text @click="login(dialog)">Login</v-btn>
          </v-card-actions>
        </v-card>
      </template> 
    </v-dialog> -->
    </v-toolbar>
  </v-form>
</template>

<script lang="ts">
import Vue from "vue";
//import { mapActions } from "vuex";
import Login from "../views/Login.vue";
//import Create from "../components/Create.vue";
export default Vue.extend({
  data() {
    return {
      user: null,
    };
  },
  mounted() {
    this.user = JSON.parse(localStorage.user);
  },
  methods: {
    
  },
});

<template>
  <v-form>
      <v-bottom-navigation 
      color="white" 
      style="background-color:#FD6359" 
      grow>
        <v-btn style="text-color:white">
            <span>Home</span>
            <v-icon>mdi-home</v-icon>
        </v-btn>
        <v-btn style="text-color:white">
            <span>Explore</span>
            <v-icon>mdi-earth</v-icon>
        </v-btn>
        <v-btn style="text-color:white">
            <span>Search</span>
            <v-icon>mdi-magnify</v-icon>
        </v-btn>
        <v-btn style="text-color:white">
            <span>Meal Prep</span>
            <v-icon>mdi-food</v-icon>
        </v-btn>
        <v-btn style="text-color:white">
            <span>Bookmarks</span>
            <v-icon>mdi-bookmark</v-icon>
        </v-btn>
    </v-bottom-navigation>
    
      <v-col class="pt-15">
        <h1 align="center" style="color:#7D312C">Welcome to The Recipe Compiler!</h1>
        <h3 align="center" style="color:#7D312C">Please enter your login credentials.</h3>
        <v-card class="px-7 py-7 mr-5" shaped>
            <v-text-field
                v-model="username"
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
            <v-btn color="red" align="center">Login</v-btn> 
        </v-card>

        <v-row justify="center" class="mb-4 mt-4 mr-4 ml-4">
            <v-col cols=4></v-col>
            <v-col cols=2>
                <span style="color:#7D312C">Clicked the wrong button?</span>
            </v-col>
            <v-col cols=1>
            <v-btn color="red" :center="true" :absolute="true">create Account</v-btn>
            </v-col>
            <v-col cols=5></v-col>
        </v-row>
    </v-col>
  </v-form>
</template>

<script lang="ts">
import Vue from "vue";
import { mapActions } from "vuex";
export default Vue.extend({});
</script>

<style></style>

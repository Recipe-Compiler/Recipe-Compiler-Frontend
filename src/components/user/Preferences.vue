<template>
  <v-form>
    <v-card shaped>
      <v-card-title class="justify-center font-weight-bold headline"
        >Preferences</v-card-title
      >
      <v-row>
        <v-col cols="6">
          <v-subheader
            >Are there any food preferences you would like to
            include?</v-subheader
          >
          <v-text-field
            label="Preference"
            v-model="preference"
            outlined
          ></v-text-field
          ><v-btn color="orange" class="ml-4 mb-4">Add preference</v-btn>
        </v-col>
        <v-col cols="6">
          <v-subheader>Your current preferences include: </v-subheader>
          <v-list class="ml-4" dense>
            <v-list-item v-for="(item, index) in pref_list" :key="index">
              <v-list-item-icon>
                <v-icon>mdi-arrow-right</v-icon>
              </v-list-item-icon>
              <v-list-item-content v-text="item"> </v-list-item-content
            ></v-list-item>
          </v-list>
        </v-col>
      </v-row>
    </v-card>
  </v-form>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      preference: "",
      pref_list: [] as any,
      user: null as any,
    };
  },
  mounted() {
    this.loadUser();
    this.setPreferences();
  },
  methods: {
    loadUser() {
      if (localStorage.user != null) {
        this.user = JSON.parse(localStorage.user);
      }
    },
    setPreferences() {
      if (this.user == null) {
        return;
      }

      this.pref_list = this.user.preferences;
    },
    addPreference() {
      if (this.user == null) {
        return;
      }
      this.user.preferences.find((element: string) => {
        if (element === this.preference) {
          return;
        }
      });
       /* TODO: API CALL TO ADD PREFERENCE TO USER */
    },
  },
});
</script>

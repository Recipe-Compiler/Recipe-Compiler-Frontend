<template>
  <v-form>
    <v-row>
      <h1 class="pt-7 pl-7 pr-7 pb-7">Your results for {search input}</h1>
    </v-row>
    <v-row>
      <v-data-table
        :headers="tableHeader"
        :items="results"
        class="pt-7 pl-7 pr-7 pb-7 mx-7"
      >
        <template v-slot:[`item.viewRecipe`]="{ item }">
          <v-btn color="green" @click="viewRecipe(item.id)">View</v-btn>
        </template>
      </v-data-table>
      <v-btn color="orange" class="pt-7 pl-7 pr-7 pb-7 mt-7">Filter</v-btn>
    </v-row>
  </v-form>
</template>

<script lang="ts">
import Vue from "vue";
import { mapActions } from "vuex";
import { api } from "@/App.vue";
export default Vue.extend({
  data() {
    return {
      tableHeader: [
        {
          text: "Recipe Name",
          value: "name",
        },
      ],
      results: [],
      recipeID: null,
    };
  },
  methods: {
    viewRecipe(id: any) {
      // Route to the recipe page where the recipe ID is passed into recipe vue
      this.$router.push("");
    },
    getSearchResults() {
      // API call for getting items that match the search
      api
        .get(/* API CALL */)
        .then((response: any) => {
          this.results = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
});
</script>
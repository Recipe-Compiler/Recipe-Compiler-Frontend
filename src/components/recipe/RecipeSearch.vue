<template>
  <v-autocomplete
    v-model="recipe"
    :items="recipes"
    :loading="isLoading"
    :search-input.sync="search"
    color="white"
    hide-no-data
    hide-details
    outlined
    hide-selected
    item-text="name"
    item-value="id"
    label="Search for Recipes"
    placeholder="Start typing to Search"
    prepend-icon="mdi-database-search"
    return-object
    dense
    @change="onChange"
  ></v-autocomplete>
</template>
<script lang="ts">
import Vue from "vue";
import Service from "@/service";
export default Vue.extend({
  methods: {
    getAllCallback(status: any, data: any) {
      this.recipes = data;
    },
    searchCallback(status: any, data: any) {
      this.recipes = data;
    },
    onChange() {
      if (this.recipe != null) {
        this.$router.push({ path: `/recipe/${this.recipe.id}` });
      }
    },
  },
  watch: {
    search(val: any) {
      if (val === "") {
        Service.get(
          process.env.VUE_APP_API + "Recipe/GetAll",
          this.getAllCallback
        );
      } else {
        Service.get(
          process.env.VUE_APP_API + "Recipe/Search/" + val,
          this.searchCallback
        );
      }
    },
  },
  data() {
    return {
      recipes: [],
      recipe: null as any,
      search: null,
      isLoading: false,
      descriptionLimit: 50,
    };
  },
});
</script>

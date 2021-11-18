<template>
  <v-form>
    <v-col class="pt-15">
      <v-row align="center" justify="center">
        <h1>Meal Planning</h1>
      </v-row>
    <v-row align="center" justify="center">
      <v-col class="pt-15">
        <v-row align="center" justify="center">
          Schedule Your Meals
        </v-row>
      </v-col>
    </v-row>
    <v-col class="pt-15">
        <v-row align="center" justify="center">
          <v-snackbar v-model="snackbar">
            {{ text }}
            <template v-slot:action="{ attrs }">
              <v-btn color="blue" text v-bind="attrs" @click="snackbar = false">
                Close
              </v-btn>
            </template>
          </v-snackbar>
          <v-data-table align="center" justify="center"
            :headers="tableHeaders"
            :items="mealPlanRecipes"
            :page.sync="page"
            :items-per-page="itemsPerPage"
            :search="search"
            show-expand
            item-key="name"
            hide-default-footer
            class="elevation-1"
            @page-count="pageCount = $event"
            loading-text="Loading Your Delicious Recipes..."
          >
          <template v-slot:expanded-item="{ headers, item }">
            <td :colspan="headers.length">
              {{ item.name }} Instructions: {{ item.instructions }}
            </td>
          </template>
          </v-data-table>
        </v-row>
    </v-col>
    <div class="text-center pt-2">
      <v-pagination
        v-model="page"
        :length="pageCount"
      ></v-pagination>
    </div>
  </v-col>
  </v-form>
</template>

<script lang="ts">
import Vue from "vue";
import { mapActions } from "vuex";
export default Vue.extend({
    data() {
        return {
            snackbar: "",
            text: "",
            page: 1,
            pageCount: 0,
            itemsPerPage: 7,
            dialog: false,
            dialogDelete: false,
            tableHeaders: [
                {
                  text: "Recipe",
                  align: "start",
                  value: "name"
                },
                {
                  text: "Description",
                  align: "start",
                  value: "description"
                },
                {
                  text: "Total Time",
                  align: "start",
                  value: "totalTimeMinutes"
                },
                {
                  text: "Recipe ID",
                  align: "start",
                  value: "id"
                },
            ],
            mealPlanRecipes: []
        }
    },
    mounted() {
        let user = JSON.parse(localStorage.user);
        this.getMealPlan();
    },
    methods: {
        goHome() {
            this.$router.push("/");
        },
        setFilters() {
            // sets filters to display recipes
            return 0;
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
        // Gets saved recipes
        getMealPlan() {
          const requestOptions = {
            method: "GET",
            headers: { "Content-Type": "application/json" },
          };
          return fetch(process.env.VUE_APP_API + "Recipe/GetAll", requestOptions)
            .then(this.handleResponse)
            .then((recipes: any) => {
            console.log(recipes)
            this.mealPlanRecipes = recipes; 
          });
        }
     },
});
</script>

<style></style>
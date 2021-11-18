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
          <template v-slot:item.actions="{ item }">
            <v-icon small align="center" justify="center"
              @click="addDay1(item)"
            >
              mdi-numeric-1-circle
            </v-icon>
            <v-icon small align="center" justify="center"
              @click="addDay2(item)"
            >
              mdi-numeric-2-circle
            </v-icon>
            <v-icon small align="center" justify="center"
              @click="addDay3(item)"
            >
              mdi-numeric-3-circle
            </v-icon>
            <v-icon small align="center" justify="center"
              @click="addDay4(item)"
            >
              mdi-numeric-4-circle
            </v-icon>
            <v-icon small align="center" justify="center"
              @click="addDay5(item)"
            >
              mdi-numeric-5-circle
            </v-icon>
            <v-icon small align="center" justify="center"
              @click="addDay6(item)"
            >
              mdi-numeric-6-circle
            </v-icon>
            <v-icon small align="center" justify="center"
              @click="addDay7(item)"
            >
              mdi-numeric-7-circle
            </v-icon>
          </template>
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
  <v-col class="pt-15">
    <v-row align="center" justify="center">
    <v-data-table align="center" justify="center"
            :headers="day1Headers"
            :items="day1Recipes"
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
    </v-data-table>
    <v-data-table align="center" justify="center"
            :headers="day2Headers"
            :items="day2Recipes"
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
    </v-data-table>
    <v-data-table align="center" justify="center"
            :headers="day3Headers"
            :items="day3Recipes"
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
    </v-data-table>
    <v-data-table align="center" justify="center"
            :headers="day4Headers"
            :items="day4Recipes"
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
    </v-data-table>
    <v-data-table align="center" justify="center"
            :headers="day5Headers"
            :items="day5Recipes"
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
    </v-data-table>
    <v-data-table align="center" justify="center"
            :headers="day6Headers"
            :items="day6Recipes"
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
    </v-data-table>
    <v-data-table align="center" justify="center"
            :headers="day7Headers"
            :items="day7Recipes"
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
    </v-data-table>
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
                  text: "Select Day To Add To Plan",
                  value: 'actions',
                  sortable: false
                }
            ],
            day1Headers: [
              {
                  text: "Day 1 Recipes",
                  align: "start",
                  value: "name"
              },
            ],
            day2Headers: [
              {
                  text: "Day 2 Recipes",
                  align: "start",
                  value: "name"
              },
            ],
            day3Headers: [
              {
                  text: "Day 3 Recipes",
                  align: "start",
                  value: "name"
              },
            ],
            day4Headers: [
              {
                  text: "Day 4 Recipes",
                  align: "start",
                  value: "name"
              },
            ],
            day5Headers: [
              {
                  text: "Day 5 Recipes",
                  align: "start",
                  value: "name"
              },
            ],
            day6Headers: [
              {
                  text: "Day 6 Recipes",
                  align: "start",
                  value: "name"
              },
            ],
            day7Headers: [
              {
                  text: "Day 7 Recipes",
                  align: "start",
                  value: "name"
              },
            ],
            mealPlanRecipes: [],
            day1Recipes: [],
            day2Recipes: [],
            day3Recipes: [],
            day4Recipes: [],
            day5Recipes: [],
            day6Recipes: [],
            day7Recipes: []
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
        addDay1() {
          this.snackbar = true;
          this.text = "Recipe Added To Day 1 Plan";
        },
        addDay2() {
          this.snackbar = true;
          this.text = "Recipe Added To Day 2 Plan";
        },
        addDay3() {
          this.snackbar = true;
          this.text = "Recipe Added To Day 3 Plan";
        },
        addDay4() {
          this.snackbar = true;
          this.text = "Recipe Added To Day 4 Plan";
        },
        addDay5() {
          this.snackbar = true;
          this.text = "Recipe Added To Day 5 Plan";
        },
        addDay6() {
          this.snackbar = true;
          this.text = "Recipe Added To Day 6 Plan";
        },
        addDay7() {
          this.snackbar = true;
          this.text = "Recipe Added To Day 7 Plan";
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
<template>
  <v-form>
    <v-col class="pt-15">
      <v-row align="center" justify="center">
        <h1>Meal Planning</h1>
      </v-row>
      <v-row align="center" justify="center">
        <v-col class="pt-15">
          <v-row align="center" justify="center"> Schedule Your Meals </v-row>
        </v-col>
      </v-row>
      <v-col class="pt-15">
        <v-row align="center" justify="center">
          <v-data-table
            align="center"
            justify="center"
            :headers="tableHeaders"
            :items="mealPlanRecipes"
            :items-per-page="10"
            show-expand
            item-key="name"
            class="elevation-1"
            loading-text="Loading Your Delicious Recipes..."
          >
            <template v-slot:[`item.viewrecipe`]="{ item }">
              <v-icon small align="center" justify="center"
                @click="goToRecipe(item)"
              >
                mdi-eye
              </v-icon>
            </template>
            <template v-slot:[`item.actions`]="{ item }">
              <v-icon
                small
                align="center"
                justify="center"
                @click="addDayRecipe(day1Recipes, item)"
              >
                mdi-numeric-1-circle
              </v-icon>
              <v-icon
                small
                align="center"
                justify="center"
                @click="addDayRecipe(day2Recipes, item)"
              >
                mdi-numeric-2-circle
              </v-icon>
              <v-icon
                small
                align="center"
                justify="center"
                @click="addDayRecipe(day3Recipes, item)"
              >
                mdi-numeric-3-circle
              </v-icon>
              <v-icon
                small
                align="center"
                justify="center"
                @click="addDayRecipe(day4Recipes, item)"
              >
                mdi-numeric-4-circle
              </v-icon>
              <v-icon
                small
                align="center"
                justify="center"
                @click="addDayRecipe(day5Recipes, item)"
              >
                mdi-numeric-5-circle
              </v-icon>
              <v-icon
                small
                align="center"
                justify="center"
                @click="addDayRecipe(day6Recipes, item)"
              >
                mdi-numeric-6-circle
              </v-icon>
              <v-icon
                small
                align="center"
                justify="center"
                @click="addDayRecipe(day7Recipes, item)"
              >
                mdi-numeric-7-circle
              </v-icon>
            </template>
            <template v-slot:expanded-item="{ headers, item }">
              <td :colspan="headers.length">
                More Info About {{ item.name }}: {{ item.description }}
              </td>
            </template>
          </v-data-table>
        </v-row>
      </v-col>
    </v-col>
    <v-col class="mt-4 mb-4 ml-4 mr-4">
      <v-row align="center" justify="center">
        <v-data-table
          align="center"
          justify="center"
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
        <template v-slot:[`item.viewrecipe`]="{ item }">
              <v-icon small align="center" justify="center"
                @click="goToRecipe(item)"
              >
                mdi-eye
              </v-icon>
            </template>
          <template v-slot:[`item.actions`]="{ item }">
            <v-icon
              small
              align="center"
              justify="center"
              @click="removeRecipe(day1Recipes, item)"
            >
              mdi-minus-circle
            </v-icon>
          </template>
          <template v-slot:expanded-item="{ headers, item }">
            <td :colspan="headers.length">
              More Info About {{ item.name }}: {{ item.description }}
            </td>
          </template>
        </v-data-table>
        <v-data-table
          align="center"
          justify="center"
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
        <template v-slot:[`item.viewrecipe`]="{ item }">
              <v-icon small align="center" justify="center"
                @click="goToRecipe(item)"
              >
                mdi-eye
              </v-icon>
            </template>
          <template v-slot:[`item.actions`]="{ item }">
            <v-icon
              small
              align="center"
              justify="center"
              @click="removeRecipe(day2Recipes, item)"
            >
              mdi-minus-circle
            </v-icon>
          </template>
          <template v-slot:expanded-item="{ headers, item }">
            <td :colspan="headers.length">
              More Info About {{ item.name }}: {{ item.description }}
            </td>
          </template>
        </v-data-table>
        <v-data-table
          align="center"
          justify="center"
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
        <template v-slot:[`item.viewrecipe`]="{ item }">
              <v-icon small align="center" justify="center"
                @click="goToRecipe(item)"
              >
                mdi-eye
              </v-icon>
            </template>
          <template v-slot:[`item.actions`]="{ item }">
            <v-icon
              small
              align="center"
              justify="center"
              @click="removeRecipe(day3Recipes, item)"
            >
              mdi-minus-circle
            </v-icon>
          </template>
          <template v-slot:expanded-item="{ headers, item }">
            <td :colspan="headers.length">
              More Info About {{ item.name }}: {{ item.description }}
            </td>
          </template>
        </v-data-table>
        <v-data-table
          align="center"
          justify="center"
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
        <template v-slot:[`item.viewrecipe`]="{ item }">
              <v-icon small align="center" justify="center"
                @click="goToRecipe(item)"
              >
                mdi-eye
              </v-icon>
            </template>
          <template v-slot:[`item.actions`]="{ item }">
            <v-icon
              small
              align="center"
              justify="center"
              @click="removeRecipe(day4Recipes, item)"
            >
              mdi-minus-circle
            </v-icon>
          </template>
          <template v-slot:expanded-item="{ headers, item }">
            <td :colspan="headers.length">
              More Info About {{ item.name }}: {{ item.description }}
            </td>
          </template>
        </v-data-table>
        <v-data-table
          align="center"
          justify="center"
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
        <template v-slot:[`item.viewrecipe`]="{ item }">
              <v-icon small align="center" justify="center"
                @click="goToRecipe(item)"
              >
                mdi-eye
              </v-icon>
            </template>
          <template v-slot:[`item.actions`]="{ item }">
            <v-icon
              small
              align="center"
              justify="center"
              @click="removeRecipe(day5Recipes, item)"
            >
              mdi-minus-circle
            </v-icon>
          </template>
          <template v-slot:expanded-item="{ headers, item }">
            <td :colspan="headers.length">
              More Info About {{ item.name }}: {{ item.description }}
            </td>
          </template>
        </v-data-table>
        <v-data-table
          align="center"
          justify="center"
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
        <template v-slot:[`item.viewrecipe`]="{ item }">
              <v-icon small align="center" justify="center"
                @click="goToRecipe(item)"
              >
                mdi-eye
              </v-icon>
            </template>
          <template v-slot:[`item.actions`]="{ item }">
            <v-icon
              small
              align="center"
              justify="center"
              @click="removeRecipe(day6Recipes, item)"
            >
              mdi-minus-circle
            </v-icon>
          </template>
          <template v-slot:expanded-item="{ headers, item }">
            <td :colspan="headers.length">
              More Info About {{ item.name }}: {{ item.description }}
            </td>
          </template>
        </v-data-table>
        <v-data-table
          align="center"
          justify="center"
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
        <template v-slot:[`item.viewrecipe`]="{ item }">
              <v-icon small align="center" justify="center"
                @click="goToRecipe(item)"
              >
                mdi-eye
              </v-icon>
            </template>
          <template v-slot:[`item.actions`]="{ item }">
            <v-icon
              small
              align="center"
              justify="center"
              @click="removeRecipe(day7Recipes, item)"
            >
              mdi-minus-circle
            </v-icon>
          </template>
          <template v-slot:expanded-item="{ headers, item }">
            <td :colspan="headers.length">
              More Info About {{ item.name }}: {{ item.description }}
            </td>
          </template>
        </v-data-table>
      </v-row>
    </v-col>
  </v-form>
</template>

<script lang="ts">
import Vue from "vue";
import { mapActions } from "vuex";
import { Recipe } from "@/interfaces/recipe";
export default Vue.extend({
  data() {

    return {
      page: 1,
      pageCount: 0,
      itemsPerPage: 7,
      dialog: false,
      dialogDelete: false,
      tableHeaders: [
        {
          text: "Recipe",
          align: "start",
          value: "name",
        },
        {
          text: "View Recipe",
          value: 'viewrecipe',
          sortable: false
        },
        {
          text: "Select Day To Add To Plan",
          value: "actions",
          sortable: false,
        },
      ],
      day1Headers: [
        {
          text: "Day 1 Recipes",
          align: "start",
          value: "name",
        },
        {
          value: 'viewrecipe',
          sortable: false
        },
        {
          value: "actions",
          sortable: false,
        },
      ],
      day2Headers: [
        {
          text: "Day 2 Recipes",
          align: "start",
          value: "name",
        },
        {
          value: 'viewrecipe',
          sortable: false
        },
        {
          value: "actions",
          sortable: false,
        },
      ],
      day3Headers: [
        {
          text: "Day 3 Recipes",
          align: "start",
          value: "name",
        },
        {
          value: 'viewrecipe',
          sortable: false
        },
        {
          value: "actions",
          sortable: false,
        },
      ],
      day4Headers: [
        {
          text: "Day 4 Recipes",
          align: "start",
          value: "name",
        },
        {
          value: 'viewrecipe',
          sortable: false
        },
        {
          value: "actions",
          sortable: false,
        },
      ],
      day5Headers: [
        {
          text: "Day 5 Recipes",
          align: "start",
          value: "name",
        },
        {
          value: 'viewrecipe',
          sortable: false
        },
        {
          value: "actions",
          sortable: false,
        },
      ],
      day6Headers: [
        {
          text: "Day 6 Recipes",
          align: "start",
          value: "name",
        },
        {
          value: 'viewrecipe',
          sortable: false
        },
        {
          value: "actions",
          sortable: false,
        },
      ],
      day7Headers: [
        {
          text: "Day 7 Recipes",
          align: "start",
          value: "name",
        },
        {
          value: 'viewrecipe',
          sortable: false
        },
        {
          value: "actions",
          sortable: false,
        },
      ],
      mealPlanRecipes: [],
      day1Recipes: [],
      day2Recipes: [],
      day3Recipes: [],
      day4Recipes: [],
      day5Recipes: [],
      day6Recipes: [],
      day7Recipes: [],
    };
  },
  mounted() {
    let user = JSON.parse(localStorage.user);
    this.getMealPlan();
  },
  methods: {
    ...mapActions(['snackBar']),
    goHome() {
      this.$router.push("/");
    },
    goToRecipe(recipe: Recipe) {
      this.$router.push("/recipe/".concat(recipe.id));
    },
    setFilters() {
      // sets filters to display recipes
      return 0;
    },
    addDayRecipe(dayRecipes: any, recipe: Recipe) {
      dayRecipes.push(recipe);
      this.snackBar("Recipe Added To Day Plan");
    },
    removeRecipe(dayRecipes: any, recipe: Recipe) {
      const index = dayRecipes.indexOf(recipe, 0);
      if (index > -1) {
        dayRecipes.splice(index, 1);
      }
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
    // Gets list of recipes
    getMealPlan() {
      const requestOptions = {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      };
      return fetch(process.env.VUE_APP_API + "Recipe/GetAll", requestOptions)
        .then(this.handleResponse)
        .then((recipes: any) => {
          console.log(recipes);
          this.mealPlanRecipes = recipes;
        });
    },
  },
});
</script>

<style></style>
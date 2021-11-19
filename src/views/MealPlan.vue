<template>
<ShoppingList></ShoppingList>

</template>

<script lang="ts">
import Vue from "vue";
import { mapActions } from "vuex";
import ShoppingList from "@/components/ShoppingList.vue"
export default Vue.extend({
  components: {
    ShoppingList,
  }
});
</script>

<style></style>
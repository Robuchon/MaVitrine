<template>
  <div class="flex flex-col min-h-screen justify-between">
    <NavbarTarget
      :target="selectInput.value"
      :navigation="navigation"
    ></NavbarTarget>
    <RouterView class="mx-auto"></RouterView>
    <div>
      <InputsTarget
        class="w-80"
        :data="selectInput"
        :error="''"
        v-model="selectInput.value"
      ></InputsTarget>
      
    </div>
  </div>
</template>

<script setup>
import NavbarTarget from "@components/NavbarTarget.vue";
import InputsTarget from "@components/InputsTarget.vue";
import { ref } from "vue";
const navigation = ref([
  { name: "Home", goto: "/home" },
  { name: "Input", goto: "/input" },
  { name: "Button", goto: "/button" },
]);

const selectInput = ref({
  label: "changer de navbar",
  name: "input",
  type: "select",
  value: "SideNavbar",
  target: "InputSelect",
  options: [
    { slot: "Faite un choix", value: "" },
    { slot: "Side Bar", value: "SideNavbar" },
    { slot: "Top Navbar", value: "TopNavbar" },
  ],
});
</script>

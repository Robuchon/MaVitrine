<template>
  <div>
    <NavbarTarget
      :target="selectInput.value"
      :navigation="navigation"
    ></NavbarTarget>
    <RouterView></RouterView>
    <div>
      <InputsTarget
        class="w-80"
        :target="'InputSelect'"
        :data="selectInput"
        :error="''"
        v-model="selectInput.value"
      ></InputsTarget>
      <div class="flex space-x-2">
        <div class="flex h-8 w-14 rounded-full bg-Primary">
          <p class="m-auto text-Accent">!!hello!!</p>
        </div>
        <div class="flex h-8 w-14 rounded-full bg-Secondary">
          <p class="m-auto text-Accent">!!hello!!</p>
        </div>
        <div class="flex h-8 w-14 rounded-full bg-Accent">
          <p class="m-auto text-Accent">!!hello!!</p>
        </div>
        <div class="flex h-8 w-14 rounded-full bg-Neutral">
          <p class="m-auto text-Accent">!!hello!!</p>
        </div>
        <div class="flex h-8 w-14 rounded-full bg-Info">
          <p class="m-auto text-Accent">!!hello!!</p>
        </div>
        <div class="flex h-8 w-14 rounded-full bg-Success">
          <p class="m-auto text-Accent">!!hello!!</p>
        </div>
        <div class="flex h-8 w-14 rounded-full bg-Warning">
          <p class="m-auto text-Accent">!!hello!!</p>
        </div>
        <div class="flex h-8 w-14 rounded-full bg-Error">
          <p class="m-auto text-Accent">!!hello!!</p>
        </div>
      </div>
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
]);

const selectInput = ref({
  label: "changer de navbar",
  name: "input",
  type: "select",
  value: "SideNavbar",
  options: [
    { slot: "Faite un choix", value: "" },
    { slot: "Side Bar", value: "SideNavbar" },
    { slot: "Top Navbar", value: "TopNavbar" },
  ],
});
</script>

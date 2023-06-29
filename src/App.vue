<template>
  <div class="flex min-h-screen flex-col justify-between">
    <div
      class="absolute inset-y-0 left-0 right-0 w-full overflow-hidden lg:w-full"
    >
      <svg
        class="absolute inset-0 h-full w-full stroke-Neutral/80 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="54f88622-e7f8-4f1d-aaf9-c2f5e46dd1f2"
            width="200"
            height="200"
            x="100%"
            y="-1"
            patternUnits="userSpaceOnUse"
          >
            <path d="M130 200V.5M.5 .5H200" fill="none" />
          </pattern>
        </defs>
        <svg x="100%" y="-1" class="overflow-visible fill-Info/10">
          <path d="M-470.5 0h201v201h-201Z" stroke-width="0" />
        </svg>
        <rect
          width="100%"
          height="100%"
          stroke-width="0"
          fill="url(#54f88622-e7f8-4f1d-aaf9-c2f5e46dd1f2)"
        />
      </svg>
      <div
        class="absolute -left-56 top-[calc(100%-13rem)] transform-gpu blur-3xl lg:left-[max(-14rem,calc(100%-59rem))] lg:top-[calc(50%-7rem)]"
        aria-hidden="true"
      >
        <div
          class="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-br from-[#67e8f9] to-[#D926AA] opacity-30"
          style="
            clip-path: polygon(
              74.1% 56.1%,
              100% 38.6%,
              97.5% 73.3%,
              85.5% 100%,
              80.7% 98.2%,
              72.5% 67.7%,
              60.2% 37.8%,
              52.4% 32.2%,
              47.5% 41.9%,
              45.2% 65.8%,
              27.5% 23.5%,
              0.1% 35.4%,
              17.9% 0.1%,
              27.6% 23.5%,
              76.1% 2.6%,
              74.1% 56.1%
            );
          "
        />
      </div>
      <div
        class="absolute left-[max(-14rem,calc(100%-150rem))] top-[calc(50%-27rem)] -rotate-90 transform-gpu blur-3xl"
        aria-hidden="true"
      >
        <div
          class="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-br from-[#67e8f9] to-[#4ade80] opacity-30"
          style="
            clip-path: polygon(
              74.1% 56.1%,
              100% 38.6%,
              97.5% 73.3%,
              85.5% 100%,
              80.7% 98.2%,
              72.5% 67.7%,
              60.2% 37.8%,
              52.4% 32.2%,
              47.5% 41.9%,
              45.2% 65.8%,
              27.5% 23.5%,
              0.1% 35.4%,
              17.9% 0.1%,
              27.6% 23.5%,
              76.1% 2.6%,
              74.1% 56.1%
            );
          "
        />
      </div>
    </div>
    <NavbarTarget
      class="z-20"
      :target="selectInput.value"
      :navigation="navigation"
    ></NavbarTarget>
    <RouterView class="mx-auto px-2 z-10"></RouterView>
    <Footer class="z-10"></Footer>
  </div>
</template>

<script setup>
import NavbarTarget from "@components/NavbarTarget.vue";
import Footer from "./components/footer/Footer.vue";
import { ref } from "vue";
const navigation = ref([
  { name: "Moi", goto: "/home" },
  { name: "Techno", goto: "/techno" },
  {
    name: "Demo",
    dataNav: [
      { name: "Input", goto: "/input" },
      { name: "Button", goto: "/button" },
    ],
  },

  { name: "Contact", goto: "/Contact" },
]);

const selectInput = ref({
  label: "changer de navbar",
  name: "input",
  type: "select",
  value: "VitrineNavbar",
  target: "InputSelect",
  options: [
    { slot: "Faite un choix", value: "" },
    { slot: "Side Bar", value: "SideNavbar" },
    { slot: "Top Navbar", value: "TopNavbar" },
  ],
});
</script>

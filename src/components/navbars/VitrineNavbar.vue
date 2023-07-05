<template>
  <Disclosure as="nav" class="z-30" v-slot="{ open }">
    <div
      class="flex items-center justify-between px-8 py-3 md:px-8 md:py-6 lg:px-24 xl:mx-auto xl:w-[1200px] xl:px-0"
    >
      <div class="flex items-center justify-between">
        <PopoverGroup
          as="nav"
          class="mx-auto flex flex-wrap justify-center space-x-2 lg:space-x-6"
        >
          <div v-for="item in navigation">
            <div v-if="item.dataNav === undefined" class="flex">
              <router-link
                :to="item.goto"
                class="my-auto flex w-full items-center rounded-md p-1 text-center text-base font-medium no-underline md:px-3 md:py-2"
                :class="
                  item.goto === router.currentRoute.value.path
                    ? 'pointer-events-none text-Secondary'
                    : 'text-Primary hover:bg-Secondary hover:text-Accent'
                "
              >
                <SvgTarget
                  :target="item.logo"
                  class="h-5 w-5 md:mr-2"
                ></SvgTarget>

                <span class="hidden text-inherit md:block">{{
                  item.name
                }}</span>
              </router-link>
            </div>
            <Popover v-else class="flex" @mouseleave="opendropdown = false">
              <PopoverButton @mouseover="opendropdown = true">
                <p
                  class="my-auto flex w-full items-center rounded-md p-1 text-center text-base font-medium hover:bg-Secondary md:px-3 md:py-2"
                  :class="
                    'Input' === router.currentRoute.value.name ||
                    'Button' === router.currentRoute.value.name
                      ? 'text-Secondary'
                      : 'text-Primary hover:text-Accent'
                  "
                >
                  <SvgTarget
                    :target="item.logo"
                    class="h-5 w-5 md:mr-2"
                  ></SvgTarget>
                  <span class="hidden text-inherit md:block">{{
                    item.name
                  }}</span>
                </p>
              </PopoverButton>
              <transition
                enter-active-class="transition ease-out duration-200"
                enter-from-class="translate-y-5 opacity-0"
                enter-to-class="opacity-100 translate-y-0 translate-x-0"
                leave-active-class="transition ease-in duration-150"
                leave-from-class="opacity-100 translate-y-0 translate-x-0"
                leave-to-class="translate-y-5 opacity-0"
              >
                <PopoverPanel
                  v-if="opendropdown"
                  class="absolute z-20 mt-7 md:mt-10 -ml-5"
                  :class="opendropdown"
                  static
                >
                  <DropDown
                    class=""
                    :dataNav="item.dataNav"
                    @action="opendropdown = false"
                  ></DropDown>
                </PopoverPanel>
              </transition>
            </Popover>
          </div>
        </PopoverGroup>
        <!-- Mobile menu button -->
      </div>
      <div class="flex justify-center space-x-6 md:order-2">
        <a
          v-for="itemSocial in navigationSocial"
          :key="itemSocial.name"
          :href="itemSocial.href"
          class="text-Primary hover:text-Neutral"
          target="_blank"
        >
          <span class="sr-only">{{ itemSocial.name }}</span>
          <component
            v-if="itemSocial.icon !== undefined"
            :is="itemSocial.icon"
            class="h-6 w-6"
            aria-hidden="true"
          />
          <svg-target
            :target="itemSocial.name"
            height="24"
            width="24"
          ></svg-target>
        </a>
      </div>
    </div>
    <!-- Mobile menu -->
  </Disclosure>
</template>

<script setup>
import { ref, defineComponent, h } from "vue";
import router from "@router";
import SvgTarget from "../svg/SvgTarget.vue";

import {
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
  Disclosure,
} from "@headlessui/vue";

import DropDown from "./vitrineComponents/DropDown.vue";

const props = defineProps(["navigation"]);
const opendropdown = ref(false);

const navigationSocial = [
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/hugues-robuchon-311a2721a/",
  },
  {
    name: "GitHub",
    href: "https://github.com/Robuchon",
    icon: defineComponent({
      render: () =>
        h("svg", { fill: "currentColor", viewBox: "0 0 24 24" }, [
          h("path", {
            "fill-rule": "evenodd",
            d: "M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z",
            "clip-rule": "evenodd",
          }),
        ]),
    }),
  },
];
</script>

<style lang="scss" scoped></style>

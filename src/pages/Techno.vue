<template>
  <div class="mb-96 flex max-w-4xl flex-col items-center">
    <h1>Dans les grandes lignes</h1>
    <p class="max-w-2xl">
      Je considère encore être un enfant dans
      <span>le vaste monde du développement</span>, même si je peux facilement
      consacrer plus de <span>60 heures</span> par semaine à cette passion. J'y
      trouve toujours du <span>plaisir</span>, m'amusant comme dans un immense
      jeu de gestion avec ses ressources et ses chaînes de production infinies.
      J'ai hâte de vous faire <span>partager ma vision</span> de ce domaine
      captivant.
    </p>
    <div class="relative grid grid-cols-1 gap-2">
      <div v-for="(section, index) in Txt.fr" :name="section.id">
        <h3 class="h-16 text-center">{{ section.title }}</h3>
        <div class="grid gap-2 sm:grid-cols-3">
          <div
            v-for="(item, indexBis) in section.contents"
            @mouseover="
              (openSection = true),
                (sectionSelect = index),
                (itemSelect = indexBis)
            "
            @mouseleave="openSection = false"
            class="transform cursor-pointer md:duration-200 md:hover:z-20 md:hover:scale-125"
          >
            <div
              class="flex h-full max-h-56 w-full md:transform flex-col justify-between rounded-2xl bg-Accent/20 p-2 md:duration-200 md:hover:bg-Accent/90"
              @click="
                (open = true), (sectionSelect = index), (itemSelect = indexBis)
              "
            >
              <div class="relative z-0 mx-auto my-auto flex h-[60%] w-[90%]">
                <SvgTarget
                  v-if="item?.logoType === 'svg'"
                  :target="item.logo"
                  class="w-9/10 z-10 flex items-center justify-center"
                ></SvgTarget>
                <img
                  v-else
                  :src="item.logo"
                  alt=""
                  class="z-10 mx-auto rounded-xl bg-contain"
                />
                <div
                  class="absolute bottom-0 left-0 right-0 top-0 -z-10 m-auto bg-white/30 blur-xl"
                ></div>
              </div>
              <p class="text-justify">{{ item.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <TransitionRoot as="template" :show="open">
      <Dialog as="div" class="relative z-50" @close="open = false">
        <TransitionChild
          as="template"
          enter="ease-out duration-300"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="ease-in duration-200"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <div
            class="fixed inset-0 bg-Accent/90 bg-opacity-50 transition-opacity"
          />
        </TransitionChild>

        <div class="fixed inset-0 z-10 overflow-y-auto">
          <div
            class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"
          >
            <TransitionChild
              as="template"
              enter="ease-out duration-300"
              enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enter-to="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leave-from="opacity-100 translate-y-0 sm:scale-100"
              leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <DialogPanel
                class="relative h-[90%] w-[90%] transform overflow-hidden rounded-lg bg-Accent px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-[85%] sm:max-w-7xl sm:p-6"
              >
                <div
                  class="relative float-left mr-6 mt-6 aspect-[16/9] max-h-48"
                >
                  <div class="flex h-full max-h-48">
                    <SvgTarget
                      v-if="
                        Txt.fr[sectionSelect].contents[itemSelect]?.logoType ===
                        'svg'
                      "
                      :target="Txt.fr[sectionSelect].contents[itemSelect].logo"
                      class="z-10 mx-auto my-auto flex h-full max-h-48 w-max max-w-[200px] items-center justify-center"
                    ></SvgTarget>
                    <img
                      v-else
                      :src="Txt.fr[sectionSelect].contents[itemSelect].logo"
                      alt=""
                      class="z-10 mx-auto my-auto flex h-full max-h-48 w-max max-w-[200px] rounded-xl"
                    />
                    <div
                      class="absolute bottom-5 left-5 right-5 top-5 -z-10 m-auto bg-white/30 blur-xl"
                    ></div>
                  </div>
                </div>
                <p
                  v-html="Txt.fr[sectionSelect].contents[itemSelect].txt"
                  class=""
                ></p>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </TransitionRoot>
  </div>
</template>

<script setup>
import SvgTarget from "../components/svg/SvgTarget.vue";
import Txt from "./txt/techno";

import { ref } from "vue";
import {
  Dialog,
  DialogPanel,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";

const open = ref(false);
const openSection = ref(false);
const sectionSelect = ref("");
const itemSelect = ref("");
</script>

<style lang="scss" scoped></style>

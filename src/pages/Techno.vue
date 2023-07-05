<template>
  <div class="flex max-w-4xl flex-col items-center">
    <h1>Dans les grandes lignes</h1>
    <p class="max-w-2xl">
      Je considère encore être un enfant dans
      <span>le vaste monde du développement</span>, même si
      je peux facilement consacrer plus de
      <span>60 heures</span> par semaine à cette passion.
      J'y trouve toujours du <span>plaisir</span>,
      m'amusant comme dans un immense jeu de gestion avec ses ressources et ses
      chaînes de production infinies. J'ai hâte de vous faire
      <span>partager ma vision</span> de ce domaine
      captivant.
    </p>
    <div class="grid grid-cols-3 gap-2">
      <div v-for="section in Txt.fr" :name="section.id">
        <h3 class="h-16 text-center">{{ section.title }}</h3>
        <div class="grid grid-cols-1 gap-2">
          <div
            v-for="item in section.contents"
            class="rounded-2xl bg-Success/10 p-2"
          >
            <div class="relative aspect-[16/9] w-full">
              <SvgTarget
                v-if="item?.logoType === 'svg'"
                :target="item.logo"
                class="z-10 mx-5 h-full flex items-center justify-center"
              ></SvgTarget>
              <img
                v-else
                :src="item.logo"
                alt=""
                class="z-10 mx-auto h-full rounded-xl"
              />
              <div
                class="absolute top-5 bottom-5 right-5 left-5 -z-10 m-auto bg-white/30 blur-xl"
              ></div>
            </div>
            <p v-html="item.txt" class="line-clamp-4"></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import SvgTarget from "../components/svg/SvgTarget.vue";
import Txt from "./txt/techno";
</script>

<style lang="scss" scoped></style>

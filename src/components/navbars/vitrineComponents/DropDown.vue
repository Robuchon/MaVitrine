<template>
  <div
    class="overflow-hidden rounded-lg shadow-lg ring-1 ring-Primary ring-opacity-5"
  >
    <div class="mx-auto flex w-28 flex-col bg-Secondary">
      <div>
        <div class="grid">
          <div
            v-for="item in dataNav"
            :key="item.name"
            class="flex cursor-pointer items-center py-4 text-center"
            @click="goTo(item)"
          >
            <p class="mx-auto my-0"
            :class="
              item.name === router.currentRoute.value.name 
                ? 'text-Neutral'
                : 'text-Primary hover:text-Neutral'
            ">
              {{ item.name }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import router from "@router";
const props = defineProps(["dataNav"]);
const emit = defineEmits(["action"]);

function goTo(value) {
  emit("action");
  if (value.param) {
    router.push({
      name: value.goto,
      params: { view: value.param },
    });
  } else {
    router.push({
      path: value.goto,
    });
  }
}
</script>

<style lang="scss" scoped></style>

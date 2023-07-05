<template>
  <div
    class="overflow-hidden rounded-lg shadow-lg ring-1 ring-Primary ring-opacity-5"
  >
    <div class="mx-auto flex w-28 flex-col bg-Accent">
      <div>
        <div class="grid py-2 gap-2">
          <button
            v-for="item in dataNav"
            :key="item.name"
            class="my-auto block w-full rounded-md px-3 py-2 text-base font-medium"
            :class="
              item.name === router.currentRoute.value.name
                ? ''
                : 'hover:bg-Secondary'
            "
            @click="goTo(item)"
          >
            <p
              class="mx-auto my-0 text-center"
              :class="
                item.name === router.currentRoute.value.name
                  ? 'text-Neutral'
                  : 'text-Primary  hover:text-Accent'
              "
            >
              {{ item.name }}
            </p>
          </button>
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

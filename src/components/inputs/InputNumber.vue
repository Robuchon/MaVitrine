<template>
  <div class="flex flex-col justify-between p-2">
    <label
      class="flex items-center justify-between text-base font-normal text-Neutral"
      :style="classLabelRef"
      :for="data.name"
    >
      {{ data.label }}
      <span class="ml-2 text-sm font-normal text-Error" id="email-error">{{
        !error ? "" : error.message
      }}</span>
    </label>

    <input
      :id="data.name"
      :value="value"
      type="number"
      :placeholder="data.placeholder"
      @input="emit('action', $event.target.value)"
      class="block w-full rounded-xl border-0 bg-Primary py-3 px-6 text-base font-normal leading-none text-Accent file:border file:border-solid focus:ring-0"
    />
  </div>
</template>

<script setup>
import { ref, watch } from "vue";

const props = defineProps(["data", "value", "error"]);
const emit = defineEmits(["action"]);

const classLabelRef = ref(String);

watch(
  () => props.data.classLabel,
  () => {
    classLabelRef.value = { marginBottom: props.data.classLabel + "px" };
  },
);
</script>

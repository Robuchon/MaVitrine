<template>
  <div class="flex items-center p-2">
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
    <Switch
      :id="data.name"
      v-model="switchPosition"
      :class="[
        value ? 'bg-Success' : 'bg-Error',
        'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-Info focus:ring-offset-2',
      ]"
    >
      <span class="sr-only">Use setting</span>
      <span
        aria-hidden="true"
        :class="[
          value ? 'translate-x-5' : 'translate-x-0',
          'pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out',
        ]"
      />
    </Switch>
  </div>
</template>

<script setup>
import { Switch } from "@headlessui/vue";
import { watch, ref } from "vue";
const props = defineProps(["data", "value", "error"]);
const emit = defineEmits(["action"]);

const classLabelRef = ref(String);

watch(
  () => props.data.classLabel,
  () => {
    classLabelRef.value = { marginRight: props.data.classLabel + "px" };
  },
);

const switchPosition = ref(props.value);

watch(
  () => switchPosition.value,
  () => {
    emit("action", switchPosition.value);
  },
);
</script>

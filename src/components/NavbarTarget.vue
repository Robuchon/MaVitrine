<template>
  <div>
    <component
      :is="target"
      :navigation="navigation"
    ></component>
  </div>
</template>

<script>
import * as navbar from "@components/navbar/navbarImports";

export default {
  components: {
    ...navbar,
  },
  props: ["target", "navigation"],
};
</script>

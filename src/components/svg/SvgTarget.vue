<template>
  <div>
    <component
      :is="target"
      :color1="color1"
      :height="heightInt()"
      :width="widthInt()"
    ></component>
  </div>
</template>

<script>
import {
  BeakerIcon,
  HomeIcon,
  DocumentTextIcon,
  MegaphoneIcon,
  ChatBubbleBottomCenterTextIcon
} from "@heroicons/vue/24/outline";
import * as footer from "../../assets/svg/footer/footerImport";
import * as divers from "../../assets/svg/divers/diversImport";

export default {
  components: {
    ...footer,
    ...divers,
    BeakerIcon,
    HomeIcon,
    DocumentTextIcon,
    MegaphoneIcon,
    ChatBubbleBottomCenterTextIcon,
  },
  props: ["target", "width", "color1", "height"],
  methods: {
    heightInt() {
      if (parseInt(this.height) === NaN) {
        console.log(this.height);
        return undefined;
      } else {
        return parseInt(this.height);
      }
    },
    widthInt() {
      if (parseInt(this.width) === NaN) {
        console.log(this.width);
        return undefined;
      } else {
        return parseInt(this.width);
      }
    },
  },
};
</script>

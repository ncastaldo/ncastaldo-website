<script>
import { ref } from "vue";
import BaseSection from "../base/BaseSection.vue";
import ContactsTextChart from "./ContactsTextChart.vue";
import BaseIconLink from "../base/BaseIconLink.vue";

import { useClipboard } from "@vueuse/core";
import BaseIconAction from "../base/BaseIconAction.vue";

export default {
  components: {
    BaseSection,
    ContactsTextChart,
    BaseIconLink,
    BaseIconAction,
  },
  setup() {
    const showEmail = ref(false);

    const email = ref("me@ncastaldo.it");
    const { copy, copied } = useClipboard({ source: email });

    return { email, showEmail, copy, copied };
  },
};
</script>

<template>
  <BaseSection>
    <template #title>Contacts</template>
    <template #default>
      <div class="contacts-content">
        <div class="contacts-content-text">
          <span>Click</span>
          <BaseIconLink
            url="/assets/files/NICOLA_CASTALDO_CV_SMALL.pdf"
            :icon="['fas', 'scroll']"
            size="1x"
            class="contacts-content-icon"
          ></BaseIconLink>
          <span>to see my resume,</span>
        </div>
        <div class="contacts-content-text">
          <span>
            or click on the email to
            <span>{{ showEmail ? "encrypt" : "decrypt" }}</span>
            it.
          </span>
        </div>
        <div class="contacts-content-chart">
          <ContactsTextChart
            :text="email"
            :height="40"
            :ordered="showEmail"
            :style="{ cursor: 'pointer' }"
            @click="showEmail = !showEmail"
          ></ContactsTextChart>
          <BaseIconAction
            :icon="['fas', 'copy']"
            size="1x"
            class="contacts-content-icon"
            :color="showEmail ? '#42a07e' : '#888'"
            :disabled="!showEmail"
            @click="copy(email)"
          ></BaseIconAction>
        </div>
      </div>
    </template>
  </BaseSection>
</template>

<style scoped>
.contacts-content {
  width: 100%;
  padding: 4rem 0 8rem;
  font-size: 3rem;
  text-align: center;
  user-select: none;
}

.contacts-content-text {
  padding-bottom: 1rem;
}

.contacts-content-icon {
  margin: 0 1.6rem;
}

.contacts-content-chart {
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

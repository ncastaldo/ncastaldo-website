<script>
import { ref, watch, watchEffect } from "vue";
import BaseSection from "../base/BaseSection.vue";
import ContactsTextChart from "./ContactsTextChart.vue";
import BaseIconLink from "../base/BaseIconLink.vue";
import { computed } from "@vue/reactivity";

const CV_URL = import.meta.env.BASE_URL + "assets/files/NICOLA_CASTALDO_CV.pdf";

export default {
  components: {
    BaseSection,
    ContactsTextChart,
    BaseIconLink,
  },
  setup() {
    const showEmail = ref(false);

    const email = ref("me@" + window.location.hostname.replace("www.", ""));

    const copied = ref(false);

    const copy = () => {
      navigator.clipboard.writeText(email.value);

      copied.value = true;
    };

    watchEffect(() => {
      if (showEmail.value == false) {
        copied.value = false;
      }
    });

    return { email, showEmail, copy, copied, CV_URL };
  },
};
</script>

<template>
  <BaseSection>
    <template #title>Contacts</template>
    <template #default>
      <div class="contacts-content">
        <div class="contacts-content-text">
          Click
          <BaseIconLink
            :url="CV_URL"
            :icon="['fa', 'link']"
            color="#1f1f1f"
            class="contacts-content-icon"
          />
          to see my resume or click the email to
          <i
            ><span>{{ showEmail ? "encrypt" : "decrypt" }}</span></i
          >
          it.
        </div>
        <div class="contacts-content-chart">
          <ContactsTextChart
            :text="email"
            :height="40"
            :ordered="showEmail"
            :style="{ cursor: 'pointer' }"
            @click="showEmail = !showEmail"
          ></ContactsTextChart>
        </div>
        <div class="contacts-content-caption">
          <span
            class="contacts-content-caption-span"
            :class="showEmail ? (copied ? 'copied' : '') : 'disabled'"
            @click="copy"
            >{{ showEmail && copied ? "Copied!" : "Copy email" }}</span
          >
        </div>
      </div>
    </template>
  </BaseSection>
</template>

<style scoped>
.contacts-content {
  width: 100%;
  padding: 3rem 3rem 6rem;

  display: flex; /* NEW, Spec - Firefox, Chrome, Opera */

  flex-direction: column;

  justify-content: center;
  align-items: center;
  min-height: min(100vh - 10rem, 40rem);

  max-width: 50rem;
  margin: 0 auto;
  box-sizing: border-box;
  font-size: 3rem;
  text-align: center;
}

.contacts-content-text {
  padding-bottom: 1rem;
}

.contacts-content-icon {
  margin: 0 0.8rem;
}

.contacts-content-chart {
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
  padding: 1rem 0 2rem;
}

.contacts-content-caption-span {
  padding: 0.6rem 1.2rem;
  box-shadow: #1f1f1f 0 0 0 0.1rem;
  font-size: 2rem;
  border-radius: 2rem;
  cursor: pointer;
  font-weight: 400;
}

.contacts-content-caption-span.disabled {
  color: #888;
  box-shadow: #ddd 0 0 0 0.1rem;
  pointer-events: none;
}

.contacts-content-caption-span:hover {
  color: #42a07e;
  box-shadow: #42a07e 0 0 0 0.1rem;
}

.contacts-content-caption-span.copied {
  color: #fff;
  font-weight: 500;
  background-color: #42a07e;
  box-shadow: #42a07e 0 0 0 0.1rem;
}
</style>

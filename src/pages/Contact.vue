<template>
  <div class="relative isolate mt-16">
    <div class="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
      <div
        class="relative px-6 pb-10 pt-6 sm:pt-8 lg:static lg:px-8 lg:py-12"
      >
        <div class="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
          
          <h2 class="text-3xl font-bold tracking-tight">Contactez-moi</h2>
          <p class="mt-6 text-lg leading-8">
            Je suis ravi de vous entendre ! Votre opinion est d'une importance capitale pour moi en tant que travailleur indépendant. Que vous ayez des questions, des commentaires ou que vous souhaitiez simplement discuter de votre projet, n'hésitez pas à me contacter. Je suis là pour vous écouter et vous aider à concrétiser vos idées. Remplissez simplement le formulaire ci-dessous et je vous répondrai dans les plus brefs délais. Votre satisfaction est ma priorité absolue, alors faites-moi savoir comment je peux vous assister. Je suis prêt à vous accompagner dans votre parcours vers la réussite. Contactez-moi dès maintenant !
          </p>
          <dl class="mt-10 space-y-4 text-base leading-7 text-Primary">
            <div class="flex gap-x-4">
              <dt class="flex-none">
                <span class="sr-only">Address</span>
                <BuildingOffice2Icon class="h-7 w-6" aria-hidden="true" />
              </dt>
              <dd>Rn 6085 Residence les Cyprine<br />06460 St Vallier de Thiey</dd>
            </div>
            <div class="flex gap-x-4">
              <dt class="flex-none">
                <span class="sr-only">Telephone</span>
                <PhoneIcon class="h-7 w-6" aria-hidden="true" />
              </dt>
              <dd>
                <a class="hover:text-Neutral" href="tel:+33 615932846"
                  >+33 684181320</a
                >
              </dd>
            </div>
            <div class="flex gap-x-4">
              <dt class="flex-none">
                <span class="sr-only">Email</span>
                <EnvelopeIcon class="h-7 w-6" aria-hidden="true" />
              </dt>
              <dd>
                <a class="hover:text-Neutral" href="mailto:hugues.robuchon@gmail.com"
                  >hugues.robuchon@gmail.com</a
                >
              </dd>
            </div>
          </dl>
        </div>
      </div>
      <form
        action="#"
        method="POST"
        class="px-6 pb-12 pt-10 sm:pb-16 lg:px-8 lg:py-24"
      >
        <div class="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
          <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div>
              <label
                for="first-name"
                class="block text-sm font-semibold leading-6 text-Primary"
                >Prénom</label
              >
              <div class="mt-2.5">
                <input
                  type="text"
                  name="first-name"
                  v-model="firstName"
                  id="first-name"
                  autocomplete="given-name"
                  class="block w-full rounded-md border-0 bg-Secondary/20 px-3.5 py-2 text-Primary shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-Neutral sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label
                for="last-name"
                class="block text-sm font-semibold leading-6 text-Primary"
                >Nom</label
              >
              <div class="mt-2.5">
                <input
                  type="text"
                  name="last-name"
                  v-model="lastName"
                  id="last-name"
                  autocomplete="family-name"
                  class="block w-full rounded-md border-0 bg-Secondary/20 px-3.5 py-2 text-Primary shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-Neutral sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div class="sm:col-span-2">
              <label
                for="email"
                class="block text-sm font-semibold leading-6 text-Primary"
                >Email</label
              >
              <div class="mt-2.5">
                <input
                  type="email"
                  v-model="email"
                  name="email"
                  id="email"
                  autocomplete="email"
                  class="block w-full rounded-md border-0 bg-Secondary/20 px-3.5 py-2 text-Primary shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-Neutral sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div class="sm:col-span-2">
              <label
                for="phone-number"
                class="block text-sm font-semibold leading-6 text-Primary"
                >Télephone</label
              >
              <div class="mt-2.5">
                <input
                  type="tel"
                  name="phone-number"
                  v-model="tel"
                  id="phone-number"
                  autocomplete="tel"
                  class="block w-full rounded-md border-0 bg-Secondary/20 px-3.5 py-2 text-Primary shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-Neutral sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div class="sm:col-span-2">
              <label
                for="message"
                class="block text-sm font-semibold leading-6 text-Primary"
                >Message</label
              >
              <div class="mt-2.5">
                <textarea
                  name="message"
                  id="message"
                  v-model="message"
                  rows="4"
                  class="block w-full rounded-md border-0 bg-Secondary/20 px-3.5 py-2 text-Primary shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-Neutral sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
          <div class="mt-8 flex justify-end">
            <button
              @click.prevent="pushMail()"
              class="rounded-md bg-Primary px-3.5 py-2.5 text-center text-sm font-semibold text-Secondary shadow-sm hover:bg-Neutral focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-Neutral"
            >
              Send message
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import emailjs from "emailjs-com";
import { ref, onMounted } from "vue";

import {
  BuildingOffice2Icon,
  EnvelopeIcon,
  PhoneIcon,
} from "@heroicons/vue/24/outline";

const lastName = ref("");
const firstName = ref("");
const email = ref("");
const tel = ref("");
const message = ref("");

function pushMail() {
  emailjs
    .send(
      import.meta.env.VITE_YOUR_SERVICE_ID,
      import.meta.env.VITE_YOUR_TEMPLATE_ID,
      {
        from_lastName: lastName.value,
        from_firstName: firstName.value,
        from_email: email.value,
        from_tel: tel.value,
        message: message.value,
      },
    )
    .then((response) => {
      console.log(
        "Le message a été envoyé avec succès !",
        response.status,
        response.text,
      );
      // Affichez un message de succès à l'utilisateur ou effectuez toute autre action nécessaire

      // Réinitialisez le formulaire après l'envoi
      lastName.value = "";
      firstName.value = "";
      email.value = "";
      tel.value = "";
      message.value = "";
    })
    .catch((error) => {
      console.error(
        "Une erreur s'est produite lors de l'envoi du message.",
        error,
      );
      // Gérez les erreurs d'envoi du formulaire
    });
}

onMounted(async () => {
  emailjs.init(import.meta.env.VITE_YOUR_USER_ID);
});
</script>

<style lang="scss" scoped></style>

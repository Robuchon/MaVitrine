<template>
  <div class="flex w-full max-w-2xl flex-col items-center">
    <h1>Heap Dump</h1>
    <h3 class="text-center">
      Résolution d'une fuite de mémoire causée
      <span
        v-if="!explication.value"
        class="mt-8 text-2xl font-semibold text-Primary"
      >
        par un ....-..... sous NodeJS</span
      ><span v-else class="mt-8 text-2xl font-semibold text-Primary"
        >par un Keep-Alive sous NodeJS</span
      >
    </h3>
    <div class="flex flex-col items-center">
      <p class="mx-auto flex items-center gap-4">
        <span class="w-1/3 text-Error">Problématique</span>
        <InputsTarget
          class="w-1/3"
          :data="explication"
          :error="''"
          v-model="explication.value"
        ></InputsTarget>
        <span class="w-1/3 text-Success">Résolution</span>
      </p>
    </div>
    <transition
      enter-active-class="transition ease-out delay-300 duration-200"
      enter-from-class="opacity-0 scale-0"
      enter-to-class="opacity-100 scale-100"
      leave-active-class="transition ease-in duration-150"
      leave-from-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-0"
    >
      <div v-if="!explication.value">
        <p>
          Pour <span>commencer</span> un <span>état des lieux</span> : J'arrive
          sur un projet de quiz grandeur nature qui a une
          <span>dette technique</span> importante car le projet a été
          <span>développé</span> avec des obligations qui ont restreint à un
          moment les <span>possibilités</span> et les choix faits n'ont pas
          permis de rendre le projet facilement <span>maintenable</span> et
          surtout de déployer de grosses mises à jour <span>hardware</span> ou
          même sur certains points <span>software</span> compliqués.
        </p>
        <p>
          <span>Symptôme</span> : si plusieurs parties sont jouées d'affilée le
          <span>Raspberry Pi</span>, va planter. La cause : une utilisation à
          100% de sa RAM. Il y a un gros doute sur les <span>audios</span> joués
          mais pour le moment rien n'a pu mettre en lumière le problème. Juste,
          c'est une des seules explications logiques.
        </p>
        <p>
          <span>Problématique</span> : être sûr que c'est bien les
          <span>audios</span> le problème et trouver un patch qui ne casse pas
          tout car c'est l'audio qui fait avancer tout le jeu avec des écouteurs
          d'événements sur les pistes jouées pour avancer sur les parties. Et
          aussi, c'est sur du <span>Node.js</span> que le son est joué donc il
          faut utiliser une interface directe entre le serveur et le matériel
          pour jouer les musiques et c'est ici une partie du problème. À
          l'époque, le choix a été porté sur un <span>framework</span> qui n'a
          pas été maintenu longtemps et donc peut-être que cela vient de ça.
        </p>
        <p>
          <span>Générer</span> le bug à volonté : j'ai modifié le cycle d'une
          partie pour jouer plus de son. Si cela accélère le problème, c'est que
          j'ai mis le doigt dessus. Bingo ! Si je double ou triple les sons
          joués, j'ai bien une augmentation de la mémoire.
        </p>
        <p>
          Je vérifie le <span>déréférencement</span> de mes variables et objets,
          le <span>scope</span> et tout pour être sûr qu'il n'y a pas un
          problème lié à ça dans le code. Je ne trouve rien de cela mais je ne
          comprends pas pourquoi et je tombe à force de chercher comment être
          sûr que le <span>garbage collector</span> marche. Une chose : les
          <span>HeapDumps</span>. Et là, c'est la réponse à une bonne partie de
          mes doutes.
        </p>
        <p>
          J'en suis sûr, j'ai un problème de référencement. Mes objets créés
          pour générer un <span>player</span> à mes audios ne sont jamais jetés
          à la poubelle. Mais pourquoi...
        </p>
      </div>
      <div v-else>
        <p>
          Pour la <span>résolution</span>, je suis parti sur
          deux grands axes :
        </p>
        <p>
          1- Lecture de la <span>documentation</span>. Cela ne
          m'a pas aidé car le <span>framework</span> n'en a
          pas vraiment.
        </p>
        <p>
          2- Lecture du <span>code</span> directement et là,
          ça a payé. En gros, pour <span>interfacer</span> le
          code directement avec le <span>hardware</span>, on
          utilise un <span>child_process</span> avec la
          méthode <span>spawn</span>. Et là, le
          <span>keepAlive</span> : en gros, dans le code, si
          jamais le <span>child_process</span> était stoppé,
          il était de nouveau recréé mais sans garder le
          <span>référencement</span> (si j'ai bien tout
          compris à comment ça marche).
        </p>
        <p><span>Conclusion</span> :</p>
        <p>
          En résumé, la résolution du problème s'est basée sur deux approches
          principales : d'abord, la tentative de compréhension par la
          documentation, qui n'a pas été fructueuse en raison de son absence.
          Ensuite, l'analyse directe du code source a révélé l'utilisation d'un
          <span>child_process</span> pour interfacer avec le
          <span>hardware</span> via la méthode
          <span>spawn</span>. Le problème principal provenait
          du <span>keepAlive</span>, où le
          <span>child_process</span> était recréé sans
          conserver les références appropriées, entraînant des fuites de
          mémoire.
        </p>
        <p>
          Pendant mes recherches, j'ai découvert les
          <span>HeapDumps</span>, qui m'ont réellement permis
          de progresser dans la compréhension de la gestion des ressources.
          Grâce à eux, j'ai pu confirmer que j'étais sur la bonne voie en
          identifiant les problèmes de référencement des objets et en validant
          que ma solution ciblait bien la source du problème.
        </p>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref } from "vue";
import InputsTarget from "@components/InputsTarget.vue";

const explication = ref({
  label: "",
  name: "switch",
  type: "switch",
  target: "InputSwitch",
  value: false,
});
</script>

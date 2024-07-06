<template>
  <div class="flex max-w-2xl flex-col items-center">
    <h1 class="text-center drop-shadow-2xl">Bienvenu chez Dev Prog Creation</h1>
    <div class="mt-4 grid w-full grid-cols-2 justify-between">
      <div>
        <h4 class="max-w-md">Je me presente:</h4>
        <h5 class="mt-2">Mon nom est Robuchon Hugues.</h5>
        <h5 class="mt-2">Je suis un Développeur web FullStack.</h5>
        <h5 class="mt-2">J'ai 38 ans.</h5>
      </div>
      <div class="flex">
        <div class="image-container mx-auto overflow-hidden rounded-xl">
          <div class="blur-overlay-t"></div>
          <div class="blur-overlay-r"></div>
          <div class="blur-overlay-b"></div>
          <div class="blur-overlay-l"></div>
          <img src="/img/photoprofil.jpg" alt="" class="h-56" />
        </div>
      </div>
    </div>
    <div class="flex flex-col items-center">
      <p class="mx-auto flex items-center gap-4">
        <span class="text-Error">Mes travaux</span>
        <InputsTarget
        :data="choix"
        :error="''"
        v-model="choix.value"
      ></InputsTarget>
        <span class="text-Success">Mon parcours</span>
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
      <div v-if="choix.value">
        <h4 class="text-center">
          Permettez-moi de vous partager mon parcours, qui a été une aventure
          riche en expériences et en rebondissements.
        </h4>
        <div class="mt-8 space-y-4">
          <p>
            Après avoir terminé mes études en restauration, j'ai obtenu un
            <span>diplôme professionnel</span> en 2005. Cependant, j'ai pris la
            décision de changer de voie et de me lancer dans la pâtisserie en
            suivant une formation <span>CAP</span>. Bien que je n'aie pas passé
            l'examen final, cette période a été marquée par une circonstance
            importante : <span>une blessure grave</span> à la jambe qui m'a
            contraint à une pause de plus de 10 mois.
          </p>
          <p>
            Une fois rétabli, ma soif de découvrir de nouveaux horizons
            professionnels m'a poussé à explorer
            <span>différentes opportunités</span>. J'ai ainsi travaillé en tant
            qu'<span>intérimaire pendant 4 ans</span>
            et j'ai même eu l'occasion de vivre deux saisons passionnantes avec
            des forains. Toutefois, mon parcours ne s'est pas arrêté là.
          </p>
          <p>
            En 2009, j'ai rejoint l'équipe de
            <span>Micromania</span> en tant que vendeur, et j'ai eu
            l'opportunité de progresser dans mon parcours professionnel. Au fil
            des années, j'ai gravi les échelons pour devenir
            <span>responsable de magasin</span>, assumant ainsi des
            <span>responsabilités croissantes</span> au sein de cette entreprise
            renommée. J'ai eu le privilège de travailler dans l'un des plus
            grands magasins de France, ce qui m'a offert une expérience
            inestimable.
          </p>
          <p>
            Cette <span>expérience</span> chez Micromania, qui a duré
            <span>plus de 12 ans</span> jusqu'en septembre 2021, a été une
            période marquante de ma carrière. Cependant, au fur et à mesure de
            ma progression, j'ai ressenti le besoin d'entreprendre une
            <span>transition professionnelle</span>
            significative pour exploiter pleinement mon potentiel.
          </p>
          <p>
            C'est ainsi que j'ai décidé de rejoindre la
            <span>Bocal Academy</span> pour suivre leur formation
            <span>FullStack JS</span>, axée sur le stack
            <span>MERN</span> (MongoDB, Express, React, Node). Malheureusement,
            quelques jours après la fin de cette formation prometteuse, j'ai dû
            faire face à des problèmes de santé majeurs.
          </p>
          <p>
            Malgré ces défis, j'ai puisé ma force dans ma détermination et j'ai
            choisi de transformer cette période de convalescence en une
            opportunité. Je me suis lancé en tant que
            <span>freelance</span>, prêt à mettre à profit mes compétences et
            mon expérience pour aider mes clients à atteindre leurs objectifs.
          </p>
          <p>
            Je suis impatient de partager mon expertise avec vous et de
            collaborer pour concrétiser vos projets.
          </p>
        </div>
      </div>
      <div v-else>
        <h4 class="mt-8 text-center text-Secondary">
          Maintenant que les bases sont posées, passons au développement.
        </h4>
        <div class="mt-8 space-y-4">
          <p>
            J'ai toujours eu une passion pour l'informatique dans son ensemble,
            mais j'ai longtemps cru que sans un diplôme universitaire et des
            études spécialisées, je ne pourrais jamais réussir ou être pris au
            sérieux dans ce domaine. Heureusement, en 2020, j'ai eu la chance de
            rencontrer des personnes évoluant dans le milieu informatique qui
            m'ont encouragé. Je me suis alors lancé dans l'<span
              >apprentissage</span
            >
            autonome du
            <span>PHP, de l'HTML, du SQL et du CSS</span>. À l'été 2021, j'ai
            publié mon <span>premier site</span>, qui n'est plus en ligne
            aujourd'hui, car la personne pour qui je l'ai créé ne l'a jamais
            utilisé. Vous pouvez trouver le
            <a href="https://github.com/Robuchon/Le-petit-salon" target="_blank"
              >Lien du dépôt Git.</a
            >
          </p>
          <div class="flex">
            <a
              href="https://github.com/Robuchon/Le-petit-salon"
              target="_blank"
              class="mx-auto w-1/2 sm:duration-300 sm:hover:w-full"
            >
              <img src="/img/home/gitSalon.png" alt="" class="h-full" />
            </a>
          </div>
          <p>
            En septembre, j'ai décidé de me lancer dans la
            <span>formation</span> proposée par le <span>Bocal Academy</span> en
            tant que <span>développeur web FullStack JS</span>. Cela m'a
            tellement enthousiasmé que j'ai
            <span>quitté mon emploi début 2022</span> pour devenir
            <span>freelance</span>. Depuis lors, j'ai travaillé sur différents
            projets, notamment la création d'un site vitrine et d'une
            application web pour REAVE et
            d'autres projets privés.
          </p>
          <p>
            J'ai également eu l'occasion de mettre à l'<span
              >épreuve mes compétences</span
            >
            sur des projets <span>semi-personnels</span>, tels que le site d'art
            de ma femme, réalisé en un <span>minimum de temps</span> sur 1 jour
            environs 10 heures. Aujourd'hui hors ligne car il etait hebergé completement de chez moi je vais le remettre en ligne avec Cloodflare d'ici quelques semaines
          </p>
          <div class="flex">
              <img src="/img/home/maFemme.png" alt="" class="h-full mx-auto w-1/2 sm:duration-300 sm:hover:w-full" />
          </div>

          <p>
            Et récemment, j'ai conçu un site
            <span>vitrine</span> pour l'<span>entreprise ADP</span> en
            <span>construction</span> pour le moment. Vous pouvez le découvrir
            ici :
            <a href="https://9ca2847f.adp.pages.dev/home" target="_blank"
              >Site vitrine de l'entreprise ADP</a
            >.
          </p>
          <div class="flex">
            <a
              href="https://9ca2847f.adp.pages.dev/home"
              target="_blank"
              class="mx-auto w-1/2 sm:duration-300 sm:hover:w-full"
            >
              <img src="/img/home/beauPere.png" alt="" class="h-full" />
            </a>
          </div>
        </div></div
    ></transition>
  </div>
</template>

<script setup>
import { ref } from "vue";

import InputsTarget from "@components/InputsTarget.vue";

const choix = ref({
  label: "",
  name: "switch",
  type: "switch",
  target: "InputSwitch",
  value: true,
});
</script>

<style scoped>
.image-container {
  position: relative;
  display: inline-block;
}

.blur-overlay-t {
  position: absolute;
  background: linear-gradient(
    to top,
    rgb(76, 29, 149, 0),
    rgba(77, 29, 149, 0.629)
  );
  height: 20px;
  top: 0;
  right: 0; /* Ajustez la valeur de flou selon vos besoins */
  left: 0; /* Ajustez la valeur de flou selon vos besoins */
  z-index: 1;
}
.blur-overlay-r {
  position: absolute;
  background: linear-gradient(
    to right,
    rgb(76, 29, 149, 0),
    rgba(77, 29, 149, 0.629)
  );
  width: 10px;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
}
.blur-overlay-b {
  position: absolute;
  background: linear-gradient(
    to bottom,
    rgb(76, 29, 149, 0),
    rgba(77, 29, 149, 0.629)
  );
  height: 20px;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 1;
}
.blur-overlay-l {
  position: absolute;
  background: linear-gradient(
    to left,
    rgb(76, 29, 149, 0),
    rgba(77, 29, 149, 0.629)
  );
  width: 10px;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 1;
}

.image-container img {
  display: block;
}
</style>

<template>
  <div>
    <h1>Theme</h1>
    <div name="fontTheme" class="my-5">
      <h1>Balise texte</h1>
      <div class="flex items-center gap-4">
        <h1>Texte H1</h1>
        <h2>Texte H2</h2>
        <h3>Texte H3</h3>
        <h4>Texte H4</h4>
        <h5>Texte H5</h5>
        <h6>Texte H6</h6>
        <p>Texte P</p>
        <a href="">Texte A</a>
      </div>
    </div>
    <div name="colorTheme" class="my-5">
      <h1>Colors</h1>
      <div class="flex space-x-2">
        <div>
          <h5 class="text-Primary">Primary</h5>
          <div class="flex h-8 w-14 rounded-full bg-Primary">
            <p class="m-auto text-Accent">!!hello!!</p>
          </div>
        </div>
        <div>
          <h5 class="text-Secondary">Secondary</h5>
          <div class="flex h-8 w-14 rounded-full bg-Secondary">
            <p class="m-auto text-Accent">!!hello!!</p>
          </div>
        </div>
        <div class="bg-Primary">
          <h5 class="text-Accent">Accent</h5>
          <div class="flex h-8 w-14 rounded-full bg-Accent">
            <p class="m-auto text-Primary">!!hello!!</p>
          </div>
        </div>
        <div>
          <h5 class="text-Neutral">Neutral</h5>
          <div class="flex h-8 w-14 rounded-full bg-Neutral">
            <p class="m-auto text-Accent">!!hello!!</p>
          </div>
        </div>
        <div>
          <h5 class="text-Info">Info</h5>
          <div class="flex h-8 w-14 rounded-full bg-Info">
            <p class="m-auto text-Accent">!!hello!!</p>
          </div>
        </div>
        <div>
          <h5 class="text-Success">Success</h5>
          <div class="flex h-8 w-14 rounded-full bg-Success">
            <p class="m-auto text-Accent">!!hello!!</p>
          </div>
        </div>
        <div>
          <h5 class="text-Warning">Warning</h5>
          <div class="flex h-8 w-14 rounded-full bg-Warning">
            <p class="m-auto text-Accent">!!hello!!</p>
          </div>
        </div>
        <div>
          <h5 class="text-Error">Error</h5>
          <div class="flex h-8 w-14 rounded-full bg-Error">
            <p class="m-auto text-Accent">!!hello!!</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>

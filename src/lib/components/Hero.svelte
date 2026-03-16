<!--
  Hero.svelte
  Section hero plein écran en haut de la page.
  Contient : nom, sous-titre, description, bouton CTA et indicateur de scroll animé.
-->
<script lang="ts">
  import { t } from "$lib/i18n";
  import { theme } from "$lib/stores/theme";
  import { ChevronDown } from "lucide-svelte";
</script>

<section
  id="hero"
  class="relative min-h-screen flex flex-col items-center justify-center text-center px-4 sm:px-6 pt-20"
>
  <!-- Nom principal -->
  <h1
    class="font-heading font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-4 text-title"
  >
    {$t.hero.name}
  </h1>

  <!-- Sous-titre en couleur accent corail -->
  <p
    class="font-heading font-medium text-lg sm:text-xl md:text-2xl text-accent mb-6"
  >
    {$t.hero.subtitle}
  </p>

  <!-- Description -->
  <p
    class="max-w-2xl text-base sm:text-lg leading-relaxed mb-10
      {$theme === 'dark' ? 'text-text-dark/80' : 'text-text-light/80'}"
  >
    {$t.hero.description}
  </p>

  <!-- Bouton CTA "Découvrir mes projets" -->
  <a
    href="#projects"
    class="inline-flex items-center gap-2 px-8 py-4 bg-accent text-white
      rounded-button font-heading font-medium text-base sm:text-lg
      hover:bg-accent/90 hover:shadow-xl hover:shadow-accent/25
      transition-all duration-300 hover:-translate-y-0.5"
  >
    {$t.hero.cta}
  </a>

  <!-- Indicateur de scroll animé (bounce infini) -->
  <div
    class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce-slow"
  >
    <span
      class="text-xs {$theme === 'dark'
        ? 'text-text-dark/50'
        : 'text-text-light/50'}"
    >
      {$t.hero.scrollHint}
    </span>
    <ChevronDown
      size={24}
      class={$theme === "dark" ? "text-subtitle/70" : "text-subtitle"}
    />
  </div>
</section>

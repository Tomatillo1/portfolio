<!--
  RevealOnScroll.svelte
  Composant wrapper qui anime l'apparition des éléments au scroll.
  Utilise IntersectionObserver pour détecter quand un élément entre dans le viewport.
  
  Usage : <RevealOnScroll>{#snippet children()}<MonComposant />{/snippet}</RevealOnScroll>
-->
<script lang="ts">
  import { onMount } from "svelte";
  import type { Snippet } from "svelte";

  /** Props du composant : contenu enfant à rendre */
  let { children }: { children: Snippet } = $props();

  /** Référence à l'élément wrapper pour l'observer */
  let element: HTMLDivElement | undefined = $state(undefined);

  /** État de visibilité - true quand l'élément est dans le viewport */
  let isVisible = $state(false);

  onMount(() => {
    /* Créer l'observateur avec un seuil de 15% de visibilité */
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            isVisible = true;
            /* Une fois visible, on arrête d'observer (animation unique) */
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 },
    );

    /* Observer l'élément */
    if (element) {
      observer.observe(element);
    }

    /* Nettoyer l'observateur au démontage */
    return () => observer.disconnect();
  });
</script>

<!-- Wrapper avec transition d'opacité et de translation -->
<div
  bind:this={element}
  class="transition-all duration-700 ease-out {isVisible
    ? 'opacity-100 translate-y-0'
    : 'opacity-0 translate-y-8'}"
>
  {@render children()}
</div>

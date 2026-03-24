<script lang="ts">
  import { ChevronUp } from "lucide-svelte";

  // État local (réactivité Svelte 5)
  let showButton = $state(false);

  // Remonter doucement en haut de la page
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  // Vérifie si on a dépassé la majeure partie de la section Hero (environ 80vh)
  function checkScroll() {
    if (typeof window !== "undefined") {
      showButton = window.scrollY > window.innerHeight * 0.8;
    }
  }
</script>

<!-- Écoute l'événement scroll sur la fenêtre (via l'attribut Svelte 5 `onscroll`) -->
<svelte:window onscroll={checkScroll} />

{#if showButton}
  <button
    onclick={scrollToTop}
    class="fixed bottom-6 right-6 lg:bottom-8 lg:right-8 z-50 p-2.5 rounded-full bg-subtitle text-white shadow-md shadow-subtitle/20 opacity-70 hover:opacity-100 hover:-translate-y-1 hover:shadow-lg hover:shadow-subtitle/40 transition-all duration-300"
    aria-label="Remonter tout en haut"
    type="button"
  >
    <ChevronUp size={20} strokeWidth={2} />
  </button>
{/if}

<!--
  +layout.svelte
  Layout principal de l'application SvelteKit.
  - Importe les styles globaux (app.css)
  - Initialise le thème (dark/light) au montage
  - Affiche le Header et le Footer sur toutes les pages
-->
<script lang="ts">
	import "../app.css";
	import { onMount } from "svelte";
	import { theme } from "$lib/stores/theme";
	import Header from "$lib/components/Header.svelte";
	import Footer from "$lib/components/Footer.svelte";

	/** Initialiser le thème au premier rendu côté client */
	onMount(() => {
		theme.init();
	});
</script>

<!-- Structure principale de la page -->
<Header />

<!-- Contenu de la page (slot pour les routes enfants) -->
<main>
	<slot />
</main>

<Footer />

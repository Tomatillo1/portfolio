<!--
  +page.svelte
  Page principale one-page du portfolio.
  Assemble toutes les sections dans l'ordre :
  Hero → Stack Technique → Projets → À propos → Centres d'intérêt → Contact
  Chaque section est wrappée dans un RevealOnScroll pour les animations au scroll.
-->
<script lang="ts">
    import RevealOnScroll from "$lib/components/RevealOnScroll.svelte";
    import Hero from "$lib/components/Hero.svelte";
    import Stack from "$lib/components/Stack.svelte";
    import Projects from "$lib/components/Projects.svelte";
    import About from "$lib/components/About.svelte";
    import Interests from "$lib/components/Interests.svelte";
    import Contact from "$lib/components/Contact.svelte";
    import ScrollToTop from "$lib/components/ScrollToTop.svelte";
</script>

<!-- SEO : titre et description de la page -->
<svelte:head>
    <title>Portfolio — Développeur Web</title>
    <meta
        name="description"
        content="Portfolio de développeur web — Créateur d'expériences digitales modernes et performantes."
    />
</svelte:head>

<!-- Section Hero (pas de RevealOnScroll car elle est directement visible) -->
<Hero />

<!-- Sections avec animation d'apparition au scroll -->
<RevealOnScroll>
    <Stack />
</RevealOnScroll>

<RevealOnScroll>
    <Projects />
</RevealOnScroll>

<RevealOnScroll>
    <About />
</RevealOnScroll>

<RevealOnScroll>
    <Interests />
</RevealOnScroll>

<RevealOnScroll>
    <Contact />
</RevealOnScroll>

<!-- Bouton pour remonter en haut de la page une fois la section Hero passée -->
<ScrollToTop />

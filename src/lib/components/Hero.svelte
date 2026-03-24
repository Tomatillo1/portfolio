<!--
  Hero.svelte
  Section hero avec un layout Split-Screen.
  Gauche : Textes de présentation avec effet Spotlight interactif.
  Droite : Scène 3D Spline interactive (masquée sur mobile pour privilégier les performances).
-->
<script lang="ts">
  import { t } from "$lib/i18n";
  import { theme } from "$lib/stores/theme";
  import { ChevronDown } from "lucide-svelte";
  import { Application } from "@splinetool/runtime";
  import { onMount } from "svelte";

  // Référence pour le canvas qui accueillera le rendu Spline
  let canvasRef: HTMLCanvasElement;
  // Instance de l'environnement Spline
  let splineApp: Application;

  // Coordonnées pour l'effet Spotlight (en pourcentages) - Svelte 5 (State)
  let mouseX = $state(50); 
  let mouseY = $state(50); 

  // Mise à jour de la position lumineuse "Spotlight" lors du survol de la zone de gauche
  function handleMouseMove(event: MouseEvent) {
    const { currentTarget, clientX, clientY } = event;
    if (currentTarget instanceof HTMLElement) {
      const rect = currentTarget.getBoundingClientRect();
      const x = ((clientX - rect.left) / rect.width) * 100;
      const y = ((clientY - rect.top) / rect.height) * 100;
      mouseX = x;
      mouseY = y;
    }
  }

  onMount(() => {
    // Étape 1 : Initialisation de l'application Spline 3D sur le canvas ciblé.
    if (canvasRef) {
      splineApp = new Application(canvasRef);
      // Étape 2 : Chargement asynchrone de la scène Spline via l'URL exportée
      splineApp.load("https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode").then(() => {
        // La scène a terminé de charger. 
        // -> C'est ici que vous pouvez interagir avec l'API Spline pour ajuster les couleurs ou les rotations :
        // Exemples : 
        // splineApp.setVariable("Couleur", "#FF6B35"); 
        // const objet = splineApp.findObjectByName("Robot"); 
        console.log("Spline scene loaded!");
      });
    }

    return () => {
      // Nettoyage de la mémoire au changement de page pour éviter les fuites JavaScript
      if (splineApp) {
        splineApp.dispose();
      }
    };
  });
</script>

<!-- Grille 1 colonne sur mobile, 2 colonnes asymétriques/symétriques sur Desktop -->
<section
  id="hero"
  class="relative min-h-screen grid grid-cols-1 lg:grid-cols-2 pt-20"
>
  <!-- 
    Côté Gauche : Titre, Slogan et Bouton
    On y attache l'action de Spotlight via onmousemove (Svelte 5)
  -->
  <div
    class="relative flex flex-col justify-center px-4 sm:px-6 lg:px-12 xl:px-24 h-full py-20 lg:py-0 overflow-hidden"
    onmousemove={handleMouseMove}
    role="region"
    aria-label="Zone de présentation"
  >
    <!-- 
      L'effet Spotlight de fond : 
      Un gradient radial qui suit les coordonnées "mouseX" et "mouseY". 
      Sa couleur varie selon le mode Sombre ou Clair pour un meilleur contraste.
    -->
    <div
      class="pointer-events-none absolute inset-0 transition-opacity duration-300"
      style="background: radial-gradient(circle 600px at {mouseX}% {mouseY}%, {$theme === 'dark' ? 'rgba(255, 107, 53, 0.12)' : 'rgba(255, 107, 53, 0.08)'}, transparent 80%);"
    ></div>

    <!-- Conteneur qui garde le texte devant le Spotlight -->
    <div class="relative z-10 flex flex-col md:items-start text-center md:text-left">
      <!-- Nom "Thomas Farkas" injecté via i18n -->
      <h1
        class="font-heading font-semibold text-5xl sm:text-6xl md:text-7xl lg:text-7xl mb-4 text-title"
      >
        {$t.hero.name}
      </h1>

      <!-- Sous-titre "Digital Marketing & IA" (Couleur Orange Corail de votre charte) -->
      <p
        class="font-heading font-medium text-xl sm:text-2xl md:text-3xl text-accent mb-6"
      >
        {$t.hero.subtitle}
      </p>

      <!-- Description courte -->
      <p
        class="max-w-xl text-base sm:text-lg leading-relaxed mb-10
          {$theme === 'dark' ? 'text-text-dark/80' : 'text-text-light/80'} mx-auto md:mx-0"
      >
        {$t.hero.description}
      </p>

      <!-- Bouton d'action "Découvrir mes projets" - Orange Corail #FF6B35 -->
      <!-- La couleur bg-[#FF6B35] est utilisée inline/via les classes existantes pour s'assurer du code couleur exact -->
      <a
        href="#projects"
        class="inline-flex items-center gap-2 px-8 py-4 bg-[#FF6B35] text-white
          rounded-3xl font-heading font-medium text-base sm:text-lg
          hover:bg-[#e56030] hover:shadow-xl hover:shadow-[#FF6B35]/30
          transition-all duration-300 hover:-translate-y-0.5 mx-auto md:mx-0"
      >
        {$t.hero.cta}
      </a>
    </div>
  </div>

  <!-- 
    Côté Droit : Rendu 3D Interactive (Spline)
    Masqué sur les petits écrans (hidden) pour éviter les ralentissements sur le téléphone, visible sur Desktop (lg:flex).
  -->
  <div class="hidden lg:flex relative items-center justify-center w-full h-full min-h-[500px]">
    <!-- Le canvas cible l'application @splinetool/runtime -->
    <canvas 
      bind:this={canvasRef} 
      class="w-full h-full outline-none block" 
      aria-label="Animation 3D interactive du robot"
    ></canvas>
  </div>

  <!-- Indicateur de scroll infini (animé) pointant vers la stack technique -->
  <a
    href="#stack"
    class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce-slow transition-transform hover:scale-110 z-20"
    aria-label="Aller à la section détaillée"
  >
    <ChevronDown
      size={24}
      class={$theme === "dark" ? "text-subtitle/70" : "text-subtitle"}
    />
  </a>
</section>

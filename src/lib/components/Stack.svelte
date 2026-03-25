<!--
  Stack.svelte
  Section "Stack Technique" affichant les compétences par catégorie.
  6 catégories en grille 3×2 : Intelligence Artificielle, Code, Design,
  Marketing, Communication, Logiciels.
  Chaque carte contient :
  - Un badge icône orange (cercle avec fond orange clair)
  - Un titre en gras (Poppins)
  - Des tags/pills avec bordure arrondie
  Design fidèle à la maquette fournie.
-->
<script lang="ts">
    import { t } from "$lib/i18n";
    import { theme } from "$lib/stores/theme";
    import {
        BrainCircuit,
        CodeXml,
        Palette,
        Megaphone,
        MonitorSmartphone,
        LayoutGrid,
    } from "lucide-svelte";

    /**
     * Map des icônes par nom.
     * Chaque catégorie a un champ 'icon' qui référence une clé ici.
     */
    const iconMap: Record<string, any> = {
        BrainCircuit,
        CodeXml,
        Palette,
        Megaphone,
        MonitorSmartphone,
        LayoutGrid,
    };
</script>

<section id="stack" class="py-10 sm:py-14 px-4 sm:px-6">
    <div class="max-w-6xl mx-auto">
        <!-- Titre de la section -->
        <div class="text-center mb-16">
            <h2
                class="font-heading font-semibold text-3xl sm:text-4xl mb-3 {$theme ===
                'dark'
                    ? 'text-text-dark'
                    : 'text-title'}"
            >
                {$t.stack.title}
            </h2>
            <p class="text-subtitle font-medium text-base sm:text-lg">
                {$t.stack.subtitle}
            </p>
        </div>

        <!-- Grille 3 colonnes × 2 lignes (responsive) -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {#each $t.stack.categories as category}
                {@const IconComponent = iconMap[category.icon] || BrainCircuit}
                <div
                    class="rounded-card p-6 transition-all duration-300 hover:-translate-y-1
            {$theme === 'dark'
                        ? 'glass-card hover:shadow-xl hover:shadow-subtitle/5'
                        : 'bg-card-light border border-border-light shadow-sm hover:shadow-lg'}"
                >
                    <!-- Badge icône : cercle orange clair avec icône orange -->
                    <div
                        class="w-12 h-12 rounded-full bg-accent/15 flex items-center justify-center mb-5"
                    >
                        <IconComponent size={22} class="text-accent" />
                    </div>

                    <!-- Titre de la catégorie (gras, Poppins) -->
                    <h3
                        class="font-heading font-semibold text-lg mb-4
            {$theme === 'dark' ? 'text-white' : 'text-title'}"
                    >
                        {category.title}
                    </h3>

                    <!-- Tags / pills des compétences -->
                    <div class="flex flex-wrap gap-2">
                        {#each category.items as item}
                            <span
                                class="text-xs px-3 py-1.5 rounded-full
                  {$theme === 'dark'
                                    ? 'bg-subtitle/15 text-subtitle'
                                    : 'bg-subtitle/10 text-subtitle'}"
                            >
                                {item}
                            </span>
                        {/each}
                    </div>
                </div>
            {/each}
        </div>
    </div>
</section>

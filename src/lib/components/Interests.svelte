<!--
  Interests.svelte
  Section "Centres d'intérêt" affichant une grille d'icônes avec labels.
  Utilise les icônes Lucide dynamiquement via un mapping.
-->
<script lang="ts">
    import { t } from "$lib/i18n";
    import { theme } from "$lib/stores/theme";
    import {
        Monitor,
        Camera,
        Plane,
        Music,
        Dumbbell,
        BookOpen,
    } from "lucide-svelte";
    import type { Component } from "svelte";

    /**
     * Map des icônes pour les centres d'intérêt.
     * Associe le nom d'icône défini dans les traductions au composant Lucide.
     */
    const iconComponents: Record<string, Component> = {
        Monitor,
        Camera,
        Plane,
        Music,
        Dumbbell,
        BookOpen,
    };

    /** Récupérer le composant icône pour un intérêt donné */
    function getIcon(iconName: string): Component {
        return iconComponents[iconName] || Monitor;
    }
</script>

<section id="interests" class="py-10 sm:py-14 px-4 sm:px-6">
    <div class="max-w-4xl mx-auto">
        <!-- Titre de la section -->
        <div class="text-center mb-16">
            <h2
                class="font-heading font-semibold text-3xl sm:text-4xl text-title mb-3"
            >
                {$t.interests.title}
            </h2>
        </div>

        <!-- Grille des centres d'intérêt -->
        <div
            class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 sm:gap-6"
        >
            {#each $t.interests.items as interest}
                {@const IconComponent = getIcon(interest.icon)}
                <div
                    class="flex flex-col items-center gap-3 p-5 rounded-card transition-all duration-300
            hover:-translate-y-2 cursor-default
            {$theme === 'dark'
                        ? 'glass-card hover:shadow-lg hover:shadow-subtitle/10'
                        : 'bg-card-light border border-border-light shadow-sm hover:shadow-lg'}"
                >
                    <!-- Icône du centre d'intérêt -->
                    <div class="text-subtitle">
                        <IconComponent size={28} />
                    </div>
                    <!-- Label -->
                    <span
                        class="text-sm font-medium text-center
            {$theme === 'dark' ? 'text-text-dark' : 'text-text-light'}"
                    >
                        {interest.name}
                    </span>
                </div>
            {/each}
        </div>
    </div>
</section>

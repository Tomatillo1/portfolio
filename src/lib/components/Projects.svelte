<!--
  Projects.svelte
  Section "Projets" affichant une grille de cartes projet.
  Chaque carte contient : image gradient, titre, description, tags et lien.
  Animations hover avec scale et ombre.
-->
<script lang="ts">
    import { t } from "$lib/i18n";
    import { theme } from "$lib/stores/theme";
    import { ExternalLink } from "lucide-svelte";

    /**
     * Gradients pour les images placeholder des projets.
     * Simule des images de couverture avec des dégradés colorés.
     */
    const gradients = [
        "from-blue-400/40 to-purple-500/40",
        "from-orange-400/40 to-pink-500/40",
        "from-green-400/40 to-cyan-500/40",
        "from-indigo-400/40 to-blue-500/40",
        "from-rose-400/40 to-orange-500/40",
        "from-teal-400/40 to-emerald-500/40",
    ];
</script>

<section id="projects" class="py-10 sm:py-14 px-4 sm:px-6">
    <div class="max-w-6xl mx-auto">
        <!-- Titre de la section -->
        <div class="text-center mb-16">
            <h2
                class="font-heading font-semibold text-3xl sm:text-4xl mb-3 {$theme ===
                'dark'
                    ? 'text-text-dark'
                    : 'text-title'}"
            >
                {$t.projects.title}
            </h2>
            <p class="text-subtitle font-medium text-base sm:text-lg">
                {$t.projects.subtitle}
            </p>
        </div>

        <!-- Grille de projets (3 colonnes sur desktop, 2 sur tablette, 1 sur mobile) -->
        <div
            class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
            {#each $t.projects.items as project, i}
                <div
                    class="group block rounded-card overflow-hidden transition-all duration-300
            hover:-translate-y-2 hover:shadow-2xl
            {$theme === 'dark'
                        ? 'glass-card hover:shadow-subtitle/10'
                        : 'bg-card-light border border-border-light shadow-sm hover:shadow-xl'}"
                >
                    <!-- Image placeholder avec gradient -->
                    <img
                        class="border-b shadow-md glass-card {$theme === 'dark'
                            ? 'shadow-accent/10'
                            : 'shadow-subtitle/15'}"
                        src={project.logo}
                        alt="{project.title} logo"
                    />

                    <!-- Contenu de la carte -->
                    <div class="p-5 sm:p-6">
                        <!-- Titre du projet -->
                        <h3
                            class="font-heading font-semibold text-lg mb-2
              {$theme === 'dark' ? 'text-white' : 'text-title'}"
                        >
                            {project.title}
                        </h3>

                        <!-- Tags de technologies -->
                        <div class="flex flex-wrap gap-2 mb-4">
                            {#each project.tags as tag}
                                <span
                                    class="text-xs px-3 py-1 rounded-full font-medium
                    {$theme === 'dark'
                                        ? 'bg-subtitle/15 text-subtitle'
                                        : 'bg-subtitle/10 text-subtitle'}"
                                >
                                    {tag}
                                </span>
                            {/each}
                        </div>

                        <!-- Description -->
                        <p
                            class="text-sm leading-relaxed mb-2 {$theme ===
                            'dark'
                                ? 'text-text-dark'
                                : 'text-text-light'}"
                        >
                            {$t.projects.tasks}
                        </p>
                        <p
                            class="text-sm leading-relaxed
              {$theme === 'dark' ? 'text-text-dark/70' : 'text-text-light/70'}"
                        >
                            {project.description}
                        </p>
                        {#each project.missions as mission}
                            <ul
                                class="list-disc ml-5 space-y-2 {$theme ===
                                'dark'
                                    ? 'marker:text-dark'
                                    : 'marker:text-title'}"
                            >
                                <li
                                    class="text-sm leading-relaxed
            {$theme === 'dark' ? 'text-text-dark/70' : 'text-text-light/70'}"
                                >
                                    {mission}
                                </li>
                            </ul>
                        {/each}
                    </div>
                </div>
            {/each}
        </div>
    </div>
</section>

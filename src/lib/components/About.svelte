<!--
  About.svelte
  Section "À propos" avec timeline d'expériences professionnelles.
  Design en timeline verticale avec points d'ancrage bleu #016DFF.
  Les cartes alternent gauche et droite sur desktop.
-->
<script lang="ts">
    import { t } from "$lib/i18n";
    import { theme } from "$lib/stores/theme";
    import { Briefcase } from "lucide-svelte";
</script>

<section id="about" class="py-10 sm:py-14 px-4 sm:px-6">
    <div class="max-w-4xl mx-auto">
        <!-- Titre de la section -->
        <div class="text-center mb-16">
            <h2
                class="font-heading font-semibold text-3xl sm:text-4xl text-title mb-3"
            >
                {$t.about.title}
            </h2>
            <p class="text-subtitle font-medium text-base sm:text-lg">
                {$t.about.subtitle}
            </p>
        </div>

        <!-- Timeline des expériences -->
        <div class="relative">
            <!-- Ligne verticale de la timeline -->
            <div
                class="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2
          {$theme === 'dark' ? 'bg-subtitle/30' : 'bg-subtitle/20'}"
            ></div>

            <!-- Boucle sur chaque expérience -->
            {#each $t.about.experiences as exp, i}
                <div class="relative mb-12 last:mb-0">
                    <!-- Point d'ancrage sur la timeline -->
                    <div
                        class="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-subtitle
              border-4 -translate-x-1/2 z-10
              {$theme === 'dark' ? 'border-bg-dark' : 'border-bg-light'}"
                        style="top: 24px;"
                    ></div>

                    <!-- Carte d'expérience (alternance gauche/droite sur desktop) -->
                    <div
                        class="ml-12 md:ml-0 md:w-[45%] {i % 2 === 0
                            ? 'md:mr-auto md:pr-8'
                            : 'md:ml-auto md:pl-8'}"
                    >
                        <div
                            class="rounded-card p-6 transition-all duration-300 hover:-translate-y-1
                {$theme === 'dark'
                                ? 'glass-card hover:shadow-lg hover:shadow-subtitle/10'
                                : 'bg-card-light border border-border-light shadow-sm hover:shadow-lg'}"
                        >
                            <!-- Année et icône -->
                            <div class="flex items-center gap-3 mb-3">
                                <Briefcase
                                    size={18}
                                    class="text-subtitle flex-shrink-0"
                                />
                                <span
                                    class="text-subtitle font-heading font-semibold text-sm"
                                    >{exp.year}</span
                                >
                            </div>

                            <!-- Rôle -->
                            <h3
                                class="font-heading font-semibold text-lg mb-1
                {$theme === 'dark' ? 'text-white' : 'text-title'}"
                            >
                                {exp.role}
                            </h3>

                            <!-- Entreprise -->
                            <p class="text-accent font-medium text-sm mb-3">
                                {exp.company}
                            </p>

                            <!-- Description -->
                            <p
                                class="text-sm leading-relaxed mb-4
                {$theme === 'dark'
                                    ? 'text-text-dark/70'
                                    : 'text-text-light/70'}"
                            >
                                {exp.description}
                            </p>

                            <!-- Compétences utilisées -->
                            <div class="flex flex-wrap gap-2">
                                {#each exp.skills as skill}
                                    <span
                                        class="text-xs px-2.5 py-1 rounded-full
                      {$theme === 'dark'
                                            ? 'bg-subtitle/15 text-subtitle'
                                            : 'bg-subtitle/10 text-subtitle'}"
                                    >
                                        {skill}
                                    </span>
                                {/each}
                            </div>
                        </div>
                    </div>
                </div>
            {/each}
        </div>
    </div>
</section>

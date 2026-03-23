<!--
  Header.svelte
  Barre de navigation fixe en haut de page.
  Contient : logo, liens de navigation, toggle langue, toggle thème, bouton CTA.
  Responsive avec menu hamburger sur mobile.
-->
<script lang="ts">
    import { t, locale } from "$lib/i18n";
    import { theme } from "$lib/stores/theme";
    import { Sun, Moon, Menu, X } from "lucide-svelte";
    import { onMount } from "svelte";

    /** État du menu mobile (ouvert/fermé) */
    let mobileMenuOpen = $state(false);

    /** Basculer le menu mobile */
    function toggleMobileMenu() {
        mobileMenuOpen = !mobileMenuOpen;
    }

    /** Fermer le menu mobile (après clic sur un lien) */
    function closeMobileMenu() {
        mobileMenuOpen = false;
    }

    /** État de scroll (pour changer le style du header au scroll) */
    let scrolled = $state(false);

    /** État de la section active pour l'underline */
    let activeSection = $state("");

    /** Détecter le scroll pour ajouter un fond au header */
    function handleScroll() {
        scrolled = window.scrollY > 50;

        // Détecter la section active avec getBoundingClientRect pour éviter les soucis d'offsetParent
        const sections = document.querySelectorAll("section[id]");
        let current = "";
        sections.forEach((section) => {
            const rect = section.getBoundingClientRect();
            // Si le haut de la section approche le haut de l'écran
            if (rect.top <= 200) {
                current = section.getAttribute("id") || "";
            }
        });

        if (window.scrollY < 100) {
            activeSection = "hero";
        } else if (current) {
            activeSection = current;
        }
    }

    onMount(() => {
        handleScroll();
    });
</script>

<!-- Écouter le scroll sur la fenêtre -->
<svelte:window onscroll={handleScroll} />

<header
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300
    {scrolled
        ? $theme === 'dark'
            ? 'bg-bg-dark/90 backdrop-blur-md shadow-lg'
            : 'bg-bg-light/90 backdrop-blur-md shadow-lg'
        : 'bg-transparent'}"
>
    <!-- Nav Structure -->
    <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center h-16 lg:h-20 w-full relative">
            <!-- Logo / Nom (Left part) -->
            <div class="flex-shrink-0 z-10">
                <a
                    href="#hero"
                    class="font-heading font-semibold text-xl
              {$theme === 'dark' ? 'text-white' : 'text-title'}"
                >
                    Thomas Farkas
                </a>
            </div>

            <!-- Navigation desktop centrée avec position absolute pure -->
            <div
                class="hidden lg:flex absolute left-1/2 -translate-x-1/2 items-center gap-8 z-10"
            >
                <!-- Liens de navigation avec underline (bleu) uniquement sur active -->
                <a
                    href="#hero"
                    class="nav-link block py-2 border-b-2 transition-all duration-200
                        {activeSection === 'hero' ||
                    (activeSection === '' && scrolled === false)
                        ? 'border-subtitle text-subtitle'
                        : 'border-transparent ' +
                          ($theme === 'dark'
                              ? 'text-text-dark hover:text-subtitle'
                              : 'text-text-light hover:text-subtitle')}"
                >
                    {$t.header.home}
                </a>
                <a
                    href="#stack"
                    class="nav-link block py-2 border-b-2 transition-all duration-200
                        {activeSection === 'stack'
                        ? 'border-subtitle text-subtitle'
                        : 'border-transparent ' +
                          ($theme === 'dark'
                              ? 'text-text-dark hover:text-subtitle'
                              : 'text-text-light hover:text-subtitle')}"
                >
                    {$t.header.stack}
                </a>
                <a
                    href="#projects"
                    class="nav-link block py-2 border-b-2 transition-all duration-200
                        {activeSection === 'projects'
                        ? 'border-subtitle text-subtitle'
                        : 'border-transparent ' +
                          ($theme === 'dark'
                              ? 'text-text-dark hover:text-subtitle'
                              : 'text-text-light hover:text-subtitle')}"
                >
                    {$t.header.projects}
                </a>
                <a
                    href="#about"
                    class="nav-link block py-2 border-b-2 transition-all duration-200
                        {activeSection === 'about'
                        ? 'border-subtitle text-subtitle'
                        : 'border-transparent ' +
                          ($theme === 'dark'
                              ? 'text-text-dark hover:text-subtitle'
                              : 'text-text-light hover:text-subtitle')}"
                >
                    {$t.header.about}
                </a>
                <a
                    href="#contact"
                    class="nav-link block py-2 border-b-2 transition-all duration-200
                        {activeSection === 'contact'
                        ? 'border-subtitle text-subtitle'
                        : 'border-transparent ' +
                          ($theme === 'dark'
                              ? 'text-text-dark hover:text-subtitle'
                              : 'text-text-light hover:text-subtitle')}"
                >
                    {$t.header.contact}
                </a>
            </div>

            <!-- Toggles et CTA (Right part) -->
            <div class="hidden lg:flex ml-auto items-center gap-4 z-10">
                <!-- Toggle langue FR/EN -->
                <button
                    onclick={() => locale.toggle()}
                    class="px-3 py-1.5 rounded-xl text-sm font-medium transition-all duration-200
                        {$theme === 'dark'
                        ? 'text-text-dark hover:bg-white/10 hover:text-white'
                        : 'text-text-light hover:bg-black/5 hover:text-title'}"
                >
                    {$locale === "fr" ? "EN" : "FR"}
                </button>

                <!-- Toggle dark/light mode -->
                <button
                    onclick={() => theme.toggle()}
                    class="p-2 rounded-xl transition-all duration-200
                        {$theme === 'dark'
                        ? 'text-yellow-400 hover:bg-white/10'
                        : 'text-title hover:bg-black/5'}"
                    aria-label="Toggle theme"
                >
                    {#if $theme === "dark"}
                        <Sun size={20} />
                    {:else}
                        <Moon size={20} />
                    {/if}
                </button>

                <!-- Bouton CTA Contact -->
                <a
                    href="#contact"
                    class="px-5 py-2.5 bg-accent text-white rounded-3xl font-medium text-sm
                        hover:bg-accent/90 transition-all duration-200 hover:shadow-lg hover:shadow-accent/25"
                >
                    {$t.header.cta}
                </a>
            </div>

            <!-- Bouton hamburger mobile -->
            <div class="flex items-center gap-3 lg:hidden z-10 ml-auto">
                <!-- Toggle thème mobile -->
                <button
                    onclick={() => theme.toggle()}
                    class="p-2 rounded-xl {$theme === 'dark'
                        ? 'text-yellow-400'
                        : 'text-title'}"
                    aria-label="Toggle theme"
                >
                    {#if $theme === "dark"}
                        <Sun size={20} />
                    {:else}
                        <Moon size={20} />
                    {/if}
                </button>

                <!-- Bouton menu -->
                <button
                    onclick={toggleMobileMenu}
                    class="p-2 rounded-xl {$theme === 'dark'
                        ? 'text-white'
                        : 'text-title'}"
                    aria-label="Toggle menu"
                >
                    {#if mobileMenuOpen}
                        <X size={24} />
                    {:else}
                        <Menu size={24} />
                    {/if}
                </button>
            </div>
        </div>
    </nav>

    <!-- Menu mobile (visible uniquement quand ouvert) -->
    {#if mobileMenuOpen}
        <div
            class="lg:hidden border-t transition-all duration-300
        {$theme === 'dark'
                ? 'bg-bg-dark/95 backdrop-blur-md border-border-dark'
                : 'bg-bg-light/95 backdrop-blur-md border-border-light'}"
        >
            <div class="px-4 py-6 flex flex-col gap-4">
                <a
                    href="#stack"
                    onclick={closeMobileMenu}
                    class="py-2 px-4 rounded-xl transition-colors {$theme ===
                    'dark'
                        ? 'text-text-dark hover:bg-white/10'
                        : 'text-text-light hover:bg-black/5'}"
                >
                    {$t.header.stack}
                </a>
                <a
                    href="#projects"
                    onclick={closeMobileMenu}
                    class="py-2 px-4 rounded-xl transition-colors {$theme ===
                    'dark'
                        ? 'text-text-dark hover:bg-white/10'
                        : 'text-text-light hover:bg-black/5'}"
                >
                    {$t.header.projects}
                </a>
                <a
                    href="#about"
                    onclick={closeMobileMenu}
                    class="py-2 px-4 rounded-xl transition-colors {$theme ===
                    'dark'
                        ? 'text-text-dark hover:bg-white/10'
                        : 'text-text-light hover:bg-black/5'}"
                >
                    {$t.header.about}
                </a>
                <a
                    href="#contact"
                    onclick={closeMobileMenu}
                    class="py-2 px-4 rounded-xl transition-colors {$theme ===
                    'dark'
                        ? 'text-text-dark hover:bg-white/10'
                        : 'text-text-light hover:bg-black/5'}"
                >
                    {$t.header.contact}
                </a>

                <!-- Toggle langue mobile -->
                <button
                    onclick={() => locale.toggle()}
                    class="py-2 px-4 rounded-xl text-left transition-colors
            {$theme === 'dark'
                        ? 'text-text-dark hover:bg-white/10 hover:text-white'
                        : 'text-text-light hover:bg-black/5 hover:text-title'}"
                >
                    {$locale === "fr" ? "🇬🇧 English" : "🇫🇷 Français"}
                </button>

                <!-- CTA mobile -->
                <a
                    href="#contact"
                    onclick={closeMobileMenu}
                    class="mt-2 px-5 py-3 bg-accent text-white rounded-xl font-medium text-center
            hover:bg-accent/90 transition-all duration-200"
                >
                    {$t.header.cta}
                </a>
            </div>
        </div>
    {/if}
</header>

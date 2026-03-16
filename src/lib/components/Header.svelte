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

    /** Détecter le scroll pour ajouter un fond au header */
    function handleScroll() {
        scrolled = window.scrollY > 50;
    }
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
    <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16 lg:h-20">
            <!-- Logo / Nom -->
            <a
                href="#hero"
                class="font-heading font-semibold text-xl
          {$theme === 'dark' ? 'text-white' : 'text-title'}"
            >
                Thomas Farkas
            </a>

            <!-- Navigation desktop (cachée sur mobile) -->
            <div class="hidden lg:flex items-center gap-8">
                <!-- Liens de navigation -->
                <a
                    href="/"
                    class="nav-link {$theme === 'dark'
                        ? 'text-text-dark hover:text-subtitle'
                        : 'text-text-light hover:text-subtitle'} transition-colors duration-200"
                >
                    {$t.header.home}
                </a>
                <a
                    href="#stack"
                    class="nav-link {$theme === 'dark'
                        ? 'text-text-dark hover:text-subtitle'
                        : 'text-text-light hover:text-subtitle'} transition-colors duration-200"
                >
                    {$t.header.stack}
                </a>
                <a
                    href="#projects"
                    class="nav-link {$theme === 'dark'
                        ? 'text-text-dark hover:text-subtitle'
                        : 'text-text-light hover:text-subtitle'} transition-colors duration-200"
                >
                    {$t.header.projects}
                </a>
                <a
                    href="#about"
                    class="nav-link {$theme === 'dark'
                        ? 'text-text-dark hover:text-subtitle'
                        : 'text-text-light hover:text-subtitle'} transition-colors duration-200"
                >
                    {$t.header.about}
                </a>
                <a
                    href="#contact"
                    class="nav-link {$theme === 'dark'
                        ? 'text-text-dark hover:text-subtitle'
                        : 'text-text-light hover:text-subtitle'} transition-colors duration-200"
                >
                    {$t.header.contact}
                </a>

                <!-- Toggle langue FR/EN -->
                <button
                    onclick={() => locale.toggle()}
                    class="px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200
            {$theme === 'dark'
                        ? 'bg-white/10 text-white hover:bg-white/20'
                        : 'bg-black/5 text-text-light hover:bg-black/10'}"
                >
                    {$locale === "fr" ? "EN" : "FR"}
                </button>

                <!-- Toggle dark/light mode -->
                <button
                    onclick={() => theme.toggle()}
                    class="p-2 rounded-lg transition-all duration-200
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
                    class="px-5 py-2.5 bg-accent text-white rounded-button font-medium text-sm
            hover:bg-accent/90 transition-all duration-200 hover:shadow-lg hover:shadow-accent/25"
                >
                    {$t.header.cta}
                </a>
            </div>

            <!-- Bouton hamburger mobile -->
            <div class="flex items-center gap-3 lg:hidden">
                <!-- Toggle thème mobile -->
                <button
                    onclick={() => theme.toggle()}
                    class="p-2 rounded-lg {$theme === 'dark'
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
                    class="p-2 rounded-lg {$theme === 'dark'
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
                    class="py-2 px-4 rounded-lg transition-colors {$theme ===
                    'dark'
                        ? 'text-text-dark hover:bg-white/10'
                        : 'text-text-light hover:bg-black/5'}"
                >
                    {$t.header.stack}
                </a>
                <a
                    href="#projects"
                    onclick={closeMobileMenu}
                    class="py-2 px-4 rounded-lg transition-colors {$theme ===
                    'dark'
                        ? 'text-text-dark hover:bg-white/10'
                        : 'text-text-light hover:bg-black/5'}"
                >
                    {$t.header.projects}
                </a>
                <a
                    href="#about"
                    onclick={closeMobileMenu}
                    class="py-2 px-4 rounded-lg transition-colors {$theme ===
                    'dark'
                        ? 'text-text-dark hover:bg-white/10'
                        : 'text-text-light hover:bg-black/5'}"
                >
                    {$t.header.about}
                </a>
                <a
                    href="#contact"
                    onclick={closeMobileMenu}
                    class="py-2 px-4 rounded-lg transition-colors {$theme ===
                    'dark'
                        ? 'text-text-dark hover:bg-white/10'
                        : 'text-text-light hover:bg-black/5'}"
                >
                    {$t.header.contact}
                </a>

                <!-- Toggle langue mobile -->
                <button
                    onclick={() => locale.toggle()}
                    class="py-2 px-4 rounded-lg text-left transition-colors
            {$theme === 'dark'
                        ? 'text-text-dark hover:bg-white/10'
                        : 'text-text-light hover:bg-black/5'}"
                >
                    {$locale === "fr" ? "🇬🇧 English" : "🇫🇷 Français"}
                </button>

                <!-- CTA mobile -->
                <a
                    href="#contact"
                    onclick={closeMobileMenu}
                    class="mt-2 px-5 py-3 bg-accent text-white rounded-button font-medium text-center
            hover:bg-accent/90 transition-all duration-200"
                >
                    {$t.header.cta}
                </a>
            </div>
        </div>
    {/if}
</header>

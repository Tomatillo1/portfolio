<!--
  Footer.svelte
  Pied de page du portfolio.
  Contient le copyright et les liens légaux.
-->
<script lang="ts">
    import { t } from "$lib/i18n";
    import { theme } from "$lib/stores/theme";
</script>

<footer
    class="py-6 px-4 sm:px-6 border-t
    {$theme === 'dark' ? 'border-border-dark' : 'border-border-light'}"
>
    <div
        class="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-center justify-between gap-8 text-center md:text-left"
    >
        <!-- Info à gauche -->
        <div class="flex flex-col gap-1">
            <h3 class="text-xl font-bold text-subtitle">
                {$t.footer.title}
            </h3>
            <p class="text-sm {$theme === 'dark' ? 'text-text-dark/60' : 'text-text-light/60'}">
                {$t.footer.subtitle}
            </p>
            <p class="text-sm {$theme === 'dark' ? 'text-text-dark/60' : 'text-text-light/60'}">
                {$t.footer.location}
            </p>
        </div>

        <!-- Copyright à droite -->
        <div class="flex flex-col items-center justify-center">
            <p
                class="text-sm {$theme === 'dark'
                    ? 'text-text-dark/60'
                    : 'text-text-light/60'}"
            >
                {$t.footer.rights}
            </p>
        </div>
    </div>
</footer>

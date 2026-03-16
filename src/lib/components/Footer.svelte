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
    class="py-8 px-4 sm:px-6 border-t
    {$theme === 'dark' ? 'border-border-dark' : 'border-border-light'}"
>
    <div
        class="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4"
    >
        <!-- Copyright -->
        <p
            class="text-sm {$theme === 'dark'
                ? 'text-text-dark/60'
                : 'text-text-light/60'}"
        >
            {$t.footer.rights}
        </p>

        <!-- Liens légaux -->
        <div class="flex gap-6">
            <button
                class="text-sm transition-colors duration-200
          {$theme === 'dark'
                    ? 'text-text-dark/60 hover:text-subtitle'
                    : 'text-text-light/60 hover:text-subtitle'}"
            >
                {$t.footer.links.privacy}
            </button>
            <button
                class="text-sm transition-colors duration-200
          {$theme === 'dark'
                    ? 'text-text-dark/60 hover:text-subtitle'
                    : 'text-text-light/60 hover:text-subtitle'}"
            >
                {$t.footer.links.terms}
            </button>
        </div>
    </div>
</footer>

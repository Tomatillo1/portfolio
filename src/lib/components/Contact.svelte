<!--
  Contact.svelte
  Section "Contact" avec un formulaire et des informations de contact.
  Le formulaire utilise une Server Action SvelteKit pour envoyer
  les emails via Resend (côté serveur uniquement).
-->
<script lang="ts">
    import { t } from "$lib/i18n";
    import { theme } from "$lib/stores/theme";
    import { enhance } from "$app/forms";
    import { Mail, Phone, MapPin } from "lucide-svelte";

    /** État du formulaire : loading, succès ou erreur */
    let loading = $state(false);
    let success = $state(false);
    let errorMsg = $state("");
</script>

<section id="contact" class="py-10 sm:py-14 px-4 sm:px-6">
    <div class="max-w-5xl mx-auto">
        <!-- Titre de la section -->
        <div class="text-center mb-16">
            <h2
                class="font-heading font-semibold text-3xl sm:text-4xl mb-3 {$theme ===
                'dark'
                    ? 'text-text-dark'
                    : 'text-title'}"
            >
                {$t.contact.title}
            </h2>
            <p class="text-subtitle font-medium text-base sm:text-lg">
                {$t.contact.subtitle}
            </p>
        </div>

        <!-- Container formulaire + infos (2 colonnes sur desktop) -->
        <div class="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
            <!-- Formulaire de contact (3/5 de la largeur) -->
            <div class="lg:col-span-3">
                <form
                    method="POST"
                    action="?/contact"
                    use:enhance={() => {
                        /* Avant l'envoi : afficher le loader */
                        loading = true;
                        success = false;
                        errorMsg = "";
                        return async ({ result, update }) => {
                            loading = false;
                            if (result.type === "success") {
                                success = true;
                                /* Reset du formulaire après 3 secondes */
                                setTimeout(() => {
                                    success = false;
                                }, 5000);
                            } else if (result.type === "failure") {
                                errorMsg =
                                    (result.data as any)?.message ??
                                    "Erreur inconnue.";
                            } else {
                                errorMsg = "Une erreur est survenue.";
                            }
                            /* update() remet à jour le formulaire SvelteKit */
                            await update({ reset: result.type === "success" });
                        };
                    }}
                    class="rounded-card p-6 sm:p-8 space-y-5
            {$theme === 'dark'
                        ? 'glass-card'
                        : 'bg-card-light border border-border-light shadow-sm'}"
                >
                    <!-- Message de succès -->
                    {#if success}
                        <div
                            class="p-4 rounded-xl bg-green-500/15 text-green-500 text-sm font-medium text-center"
                        >
                            {$t.contact.form.success}
                        </div>
                    {/if}

                    <!-- Message d'erreur -->
                    {#if errorMsg}
                        <div
                            class="p-4 rounded-xl bg-red-500/15 text-red-500 text-sm font-medium text-center"
                        >
                            {errorMsg}
                        </div>
                    {/if}

                    <!-- Champ Nom -->
                    <div>
                        <label
                            for="name"
                            class="block text-sm font-medium mb-2
                {$theme === 'dark' ? 'text-text-dark' : 'text-text-light'}"
                        >
                            {$t.contact.form.name}
                        </label>
                        <input
                            id="name"
                            name="name"
                            type="text"
                            required
                            disabled={loading}
                            class="w-full px-4 py-3 rounded-xl border text-sm transition-all duration-200
                focus:outline-none focus:ring-2 focus:ring-subtitle/50
                {$theme === 'dark'
                                ? 'bg-white/5 border-border-dark text-white placeholder:text-white/30'
                                : 'bg-white border-border-light text-text-light placeholder:text-text-light/40'}"
                            placeholder={$t.contact.form.name}
                        />
                    </div>

                    <!-- Champ Email -->
                    <div>
                        <label
                            for="email"
                            class="block text-sm font-medium mb-2
                {$theme === 'dark' ? 'text-text-dark' : 'text-text-light'}"
                        >
                            {$t.contact.form.email}
                        </label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            required
                            disabled={loading}
                            class="w-full px-4 py-3 rounded-xl border text-sm transition-all duration-200
                focus:outline-none focus:ring-2 focus:ring-subtitle/50
                {$theme === 'dark'
                                ? 'bg-white/5 border-border-dark text-white placeholder:text-white/30'
                                : 'bg-white border-border-light text-text-light placeholder:text-text-light/40'}"
                            placeholder={$t.contact.form.email}
                        />
                    </div>

                    <!-- Champ Sujet -->
                    <div>
                        <label
                            for="subject"
                            class="block text-sm font-medium mb-2
                {$theme === 'dark' ? 'text-text-dark' : 'text-text-light'}"
                        >
                            {$t.contact.form.subject}
                        </label>
                        <input
                            id="subject"
                            name="subject"
                            type="text"
                            required
                            disabled={loading}
                            class="w-full px-4 py-3 rounded-xl border text-sm transition-all duration-200
                focus:outline-none focus:ring-2 focus:ring-subtitle/50
                {$theme === 'dark'
                                ? 'bg-white/5 border-border-dark text-white placeholder:text-white/30'
                                : 'bg-white border-border-light text-text-light placeholder:text-text-light/40'}"
                            placeholder={$t.contact.form.subject}
                        />
                    </div>

                    <!-- Champ Message (textarea) -->
                    <div>
                        <label
                            for="message"
                            class="block text-sm font-medium mb-2
                {$theme === 'dark' ? 'text-text-dark' : 'text-text-light'}"
                        >
                            {$t.contact.form.message}
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            required
                            disabled={loading}
                            rows="5"
                            class="w-full px-4 py-3 rounded-xl border text-sm transition-all duration-200 resize-none
                focus:outline-none focus:ring-2 focus:ring-subtitle/50
                {$theme === 'dark'
                                ? 'bg-white/5 border-border-dark text-white placeholder:text-white/30'
                                : 'bg-white border-border-light text-text-light placeholder:text-text-light/40'}"
                            placeholder={$t.contact.form.message}
                        ></textarea>
                    </div>

                    <!-- Bouton d'envoi avec état de chargement -->
                    <button
                        type="submit"
                        disabled={loading}
                        class="w-full py-3.5 bg-accent text-white rounded-3xl font-heading font-medium
              hover:bg-accent/90 hover:shadow-lg hover:shadow-accent/25
              transition-all duration-300 hover:-translate-y-0.5
              disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                    >
                        {#if loading}
                            {$t.contact.form.sending}
                        {:else}
                            {$t.contact.form.send}
                        {/if}
                    </button>
                </form>
            </div>

            <!-- Informations de contact (2/5 de la largeur) -->
            <div class="lg:col-span-2 flex flex-col gap-6">
                <!-- Carte infos de contact -->
                <div
                    class="rounded-card p-6 sm:p-8
            {$theme === 'dark'
                        ? 'glass-card'
                        : 'bg-card-light border border-border-light shadow-sm'}"
                >
                    <h3
                        class="font-heading font-semibold text-lg mb-6
            {$theme === 'dark' ? 'text-white' : 'text-title'}"
                    >
                        {$t.contact.info.title}
                    </h3>

                    <div class="space-y-5">
                        <!-- Email -->
                        <div class="flex items-center gap-4">
                            <div
                                class="p-2.5 rounded-xl {$theme === 'dark'
                                    ? 'bg-subtitle/15'
                                    : 'bg-subtitle/10'}"
                            >
                                <Mail size={20} class="text-subtitle" />
                            </div>
                            <div>
                                <p
                                    class="text-xs {$theme === 'dark'
                                        ? 'text-text-dark/50'
                                        : 'text-text-light/50'}"
                                >
                                    Email
                                </p>
                                <a
                                    href="mailto:farkasthomas2003@gmail.com"
                                    class="text-sm {$theme === 'dark'
                                        ? 'text-text-dark hover:text-subtitle'
                                        : 'text-text-light hover:text-subtitle'}"
                                >
                                    {$t.contact.info.email}
                                </a>
                            </div>
                        </div>

                        <!-- Téléphone -->
                        <div class="flex items-center gap-4">
                            <div
                                class="p-2.5 rounded-xl {$theme === 'dark'
                                    ? 'bg-subtitle/15'
                                    : 'bg-subtitle/10'}"
                            >
                                <Phone size={20} class="text-subtitle" />
                            </div>
                            <div>
                                <p
                                    class="text-xs {$theme === 'dark'
                                        ? 'text-text-dark/50'
                                        : 'text-text-light/50'}"
                                >
                                    Téléphone
                                </p>
                                <a
                                    href="tel:0688442005"
                                    class="text-sm {$theme === 'dark'
                                        ? 'text-text-dark hover:text-subtitle'
                                        : 'text-text-light hover:text-subtitle'}"
                                >
                                    {$t.contact.info.phone}
                                </a>
                            </div>
                        </div>

                        <!-- Localisation -->
                        <div class="flex items-center gap-4">
                            <div
                                class="p-2.5 rounded-xl {$theme === 'dark'
                                    ? 'bg-subtitle/15'
                                    : 'bg-subtitle/10'}"
                            >
                                <MapPin size={20} class="text-subtitle" />
                            </div>
                            <div>
                                <p
                                    class="text-xs {$theme === 'dark'
                                        ? 'text-text-dark/50'
                                        : 'text-text-light/50'}"
                                >
                                    Localisation
                                </p>
                                <p
                                    class="text-sm {$theme === 'dark'
                                        ? 'text-text-dark'
                                        : 'text-text-light'}"
                                >
                                    {$t.contact.info.location}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Réseaux sociaux -->
                <div
                    class="rounded-card p-6 sm:p-8
            {$theme === 'dark'
                        ? 'glass-card'
                        : 'bg-card-light border border-border-light shadow-sm'}"
                >
                    <h3
                        class="font-heading font-semibold text-lg mb-6
            {$theme === 'dark' ? 'text-white' : 'text-title'}"
                    >
                        {$t.contact.social.title}
                    </h3>
                    <div class="flex gap-3">
                        <!-- Lien GitHub -->
                        <a
                            href="https://github.com/Tomatillo1"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="p-3 rounded-xl transition-all duration-200
                {$theme === 'dark'
                                ? 'bg-white/5 hover:bg-subtitle/20 text-text-dark hover:text-subtitle'
                                : 'bg-subtitle/10 text-subtitle hover:bg-subtitle hover:text-text-dark'}"
                            aria-label="GitHub"
                        >
                            <svg
                                role="img"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                                class="w-5.5 h-5.5 fill-current"
                                aria-hidden="true"
                                fill="currentColor"
                                ><path
                                    d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
                                /></svg
                            >
                        </a>
                        <!-- Lien LinkedIn -->
                        <a
                            href="https://www.linkedin.com/in/thomas-farkas-8b993b221/"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="p-3 rounded-xl transition-all duration-200
                {$theme === 'dark'
                                ? 'bg-white/5 hover:bg-subtitle/20 text-text-dark hover:text-subtitle'
                                : 'bg-subtitle/10 text-subtitle hover:bg-subtitle hover:text-text-dark'}"
                            aria-label="LinkedIn"
                        >
                            <svg
                                role="img"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                                class="w-5.5 h-5.5 fill-current"
                                aria-hidden="true"
                                fill="currentColor"
                                ><path
                                    d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                                /></svg
                            >
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

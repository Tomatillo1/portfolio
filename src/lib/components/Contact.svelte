<!--
  Contact.svelte
  Section "Contact" avec un formulaire et des informations de contact.
  Le formulaire contient : nom, email, sujet, message et bouton d'envoi.
  Les infos de contact sont affichées à droite sur desktop.
-->
<script lang="ts">
    import { t } from "$lib/i18n";
    import { theme } from "$lib/stores/theme";
    import {
        Mail,
        Phone,
        MapPin,
        Github,
        Linkedin,
        Twitter,
    } from "lucide-svelte";

    /** Données du formulaire (liées aux champs input) */
    let formName = $state("");
    let formEmail = $state("");
    let formSubject = $state("");
    let formMessage = $state("");

    /**
     * Gérer la soumission du formulaire.
     * Pour l'instant, affiche les données dans la console.
     * À remplacer par un appel API réel.
     */
    function handleSubmit(e: SubmitEvent) {
        e.preventDefault();
        console.log("Form submitted:", {
            name: formName,
            email: formEmail,
            subject: formSubject,
            message: formMessage,
        });
        /* TODO: intégrer un service d'envoi d'email (EmailJS, API custom, etc.) */
    }
</script>

<section id="contact" class="py-20 sm:py-28 px-4 sm:px-6">
    <div class="max-w-5xl mx-auto">
        <!-- Titre de la section -->
        <div class="text-center mb-16">
            <h2
                class="font-heading font-semibold text-3xl sm:text-4xl text-title mb-3"
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
                    onsubmit={handleSubmit}
                    class="rounded-card p-6 sm:p-8 space-y-5
            {$theme === 'dark'
                        ? 'glass-card'
                        : 'bg-card-light border border-border-light shadow-sm'}"
                >
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
                            type="text"
                            bind:value={formName}
                            required
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
                            type="email"
                            bind:value={formEmail}
                            required
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
                            type="text"
                            bind:value={formSubject}
                            required
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
                            bind:value={formMessage}
                            required
                            rows="5"
                            class="w-full px-4 py-3 rounded-xl border text-sm transition-all duration-200 resize-none
                focus:outline-none focus:ring-2 focus:ring-subtitle/50
                {$theme === 'dark'
                                ? 'bg-white/5 border-border-dark text-white placeholder:text-white/30'
                                : 'bg-white border-border-light text-text-light placeholder:text-text-light/40'}"
                            placeholder={$t.contact.form.message}
                        ></textarea>
                    </div>

                    <!-- Bouton d'envoi -->
                    <button
                        type="submit"
                        class="w-full py-3.5 bg-accent text-white rounded-button font-heading font-medium
              hover:bg-accent/90 hover:shadow-lg hover:shadow-accent/25
              transition-all duration-300 hover:-translate-y-0.5"
                    >
                        {$t.contact.form.send}
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
                                <p
                                    class="text-sm {$theme === 'dark'
                                        ? 'text-text-dark'
                                        : 'text-text-light'}"
                                >
                                    {$t.contact.info.email}
                                </p>
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
                                <p
                                    class="text-sm {$theme === 'dark'
                                        ? 'text-text-dark'
                                        : 'text-text-light'}"
                                >
                                    {$t.contact.info.phone}
                                </p>
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
                            href="https://github.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="p-3 rounded-xl transition-all duration-200
                {$theme === 'dark'
                                ? 'bg-white/5 hover:bg-subtitle/20 text-text-dark hover:text-subtitle'
                                : 'bg-black/5 hover:bg-subtitle/10 text-text-light hover:text-subtitle'}"
                            aria-label="GitHub"
                        >
                            <Github size={22} />
                        </a>
                        <!-- Lien LinkedIn -->
                        <a
                            href="https://linkedin.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="p-3 rounded-xl transition-all duration-200
                {$theme === 'dark'
                                ? 'bg-white/5 hover:bg-subtitle/20 text-text-dark hover:text-subtitle'
                                : 'bg-black/5 hover:bg-subtitle/10 text-text-light hover:text-subtitle'}"
                            aria-label="LinkedIn"
                        >
                            <Linkedin size={22} />
                        </a>
                        <!-- Lien Twitter/X -->
                        <a
                            href="https://twitter.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="p-3 rounded-xl transition-all duration-200
                {$theme === 'dark'
                                ? 'bg-white/5 hover:bg-subtitle/20 text-text-dark hover:text-subtitle'
                                : 'bg-black/5 hover:bg-subtitle/10 text-text-light hover:text-subtitle'}"
                            aria-label="Twitter"
                        >
                            <Twitter size={22} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

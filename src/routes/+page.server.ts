/**
 * +page.server.ts
 * Server Action pour le formulaire de contact.
 * 
 * Ce fichier s'exécute UNIQUEMENT côté serveur (jamais côté client).
 * Il utilise la bibliothèque Resend pour envoyer un email
 * lorsque l'utilisateur soumet le formulaire de contact.
 * 
 * La clé API est importée depuis les variables d'environnement privées
 * via $env/static/private, ce qui garantit qu'elle n'est jamais
 * exposée au navigateur.
 */

import { RESEND_API_KEY } from '$env/static/private';
import { Resend } from 'resend';
import { fail } from '@sveltejs/kit';
import type { Actions } from './$types';

/**
 * Initialisation du client Resend avec la clé API.
 * La clé est lue depuis le fichier .env (variable RESEND_API_KEY).
 * Ce client est utilisé pour appeler l'API Resend et envoyer des emails.
 */
const resend = new Resend(RESEND_API_KEY);

/** Adresse email de destination (ton adresse) */
const DESTINATION_EMAIL = 'farkasthomas2003@gmail.com';

export const actions: Actions = {
    /**
     * Action "contact" déclenchée par le formulaire.
     * 
     * Étapes :
     * 1. Récupère les données du formulaire (nom, email, sujet, message)
     * 2. Valide que tous les champs sont remplis
     * 3. Envoie l'email via l'API Resend
     * 4. Retourne un statut de succès ou d'erreur
     */
    contact: async ({ request }) => {
        /* --- 1. Récupération des données du formulaire --- */
        const formData = await request.formData();
        const name = formData.get('name') as string;
        const email = formData.get('email') as string;
        const subject = formData.get('subject') as string;
        const message = formData.get('message') as string;

        /* --- 2. Validation des champs --- */
        if (!name || !email || !subject || !message) {
            return fail(400, {
                error: true,
                message: 'Tous les champs sont obligatoires.',
            });
        }

        try {
            /* --- 3. Envoi de l'email via Resend --- */
            /*
             * Paramètres de l'envoi :
             * - from : adresse d'expédition (domaine Resend par défaut "onboarding@resend.dev")
             *   Note : Pour utiliser un domaine personnalisé, il faut le configurer dans Resend.
             * - to : ton adresse email de réception
             * - subject : sujet du message avec le nom de l'expéditeur
             * - html : contenu de l'email formaté en HTML
             * - reply_to : l'email du visiteur pour pouvoir lui répondre directement
             */
            await resend.emails.send({
                from: 'Portfolio Contact <onboarding@resend.dev>',
                to: DESTINATION_EMAIL,
                subject: `[Portfolio] ${subject} — de ${name}`,
                replyTo: email,
                html: `
                    <div style="font-family: 'Inter', Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
                        <h2 style="color: #016DFF; margin-bottom: 20px;">Nouveau message depuis le portfolio</h2>
                        <table style="width: 100%; border-collapse: collapse;">
                            <tr>
                                <td style="padding: 10px; font-weight: bold; color: #153259; border-bottom: 1px solid #eee;">Nom</td>
                                <td style="padding: 10px; border-bottom: 1px solid #eee;">${name}</td>
                            </tr>
                            <tr>
                                <td style="padding: 10px; font-weight: bold; color: #153259; border-bottom: 1px solid #eee;">Email</td>
                                <td style="padding: 10px; border-bottom: 1px solid #eee;">${email}</td>
                            </tr>
                            <tr>
                                <td style="padding: 10px; font-weight: bold; color: #153259; border-bottom: 1px solid #eee;">Sujet</td>
                                <td style="padding: 10px; border-bottom: 1px solid #eee;">${subject}</td>
                            </tr>
                        </table>
                        <div style="margin-top: 20px; padding: 15px; background: #f5f5f5; border-radius: 8px;">
                            <p style="font-weight: bold; color: #153259; margin-bottom: 10px;">Message :</p>
                            <p style="white-space: pre-wrap; line-height: 1.6;">${message}</p>
                        </div>
                        <hr style="margin-top: 30px; border: none; border-top: 1px solid #eee;" />
                        <p style="color: #999; font-size: 12px; margin-top: 10px;">
                            Envoyé depuis le formulaire de contact du portfolio.
                        </p>
                    </div>
                `,
            });

            /* --- 4. Retour succès --- */
            return { success: true };
        } catch (err) {
            /* --- 4. Retour erreur --- */
            console.error('Erreur Resend :', err);
            return fail(500, {
                error: true,
                message: "Une erreur est survenue lors de l'envoi. Réessaie plus tard.",
            });
        }
    },
};

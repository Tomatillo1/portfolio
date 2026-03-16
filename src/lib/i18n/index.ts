/**
 * Store principal d'internationalisation (i18n)
 * Gère la langue courante et fournit un accès réactif aux traductions.
 * - Langue par défaut : français ('fr')
 * - Persistance dans localStorage pour conserver le choix de l'utilisateur
 */

import { writable, derived } from 'svelte/store';
import { fr } from './fr';
import { en } from './en';
import type { Translations } from './fr';

/** Langues disponibles */
export type Locale = 'fr' | 'en';

/** Map des traductions par langue */
const translations: Record<Locale, Translations> = { fr, en };

/**
 * Store réactif de la langue courante.
 * Initialisé depuis localStorage si disponible, sinon 'fr'.
 */
function createLocaleStore() {
    /* Récupérer la langue sauvegardée dans le navigateur */
    const stored = typeof window !== 'undefined' ? localStorage.getItem('locale') : null;
    const initial: Locale = (stored === 'en' ? 'en' : 'fr');

    const { subscribe, set, update } = writable<Locale>(initial);

    return {
        subscribe,
        /** Changer la langue et persister le choix */
        set: (value: Locale) => {
            if (typeof window !== 'undefined') {
                localStorage.setItem('locale', value);
            }
            set(value);
        },
        /** Basculer entre FR et EN */
        toggle: () => {
            update((current) => {
                const next: Locale = current === 'fr' ? 'en' : 'fr';
                if (typeof window !== 'undefined') {
                    localStorage.setItem('locale', next);
                }
                return next;
            });
        }
    };
}

/** Store exporté de la langue courante */
export const locale = createLocaleStore();

/**
 * Store dérivé des traductions.
 * Se met à jour automatiquement quand la langue change.
 */
export const t = derived(locale, ($locale) => translations[$locale]);

/**
 * Store du thème (Dark / Light mode)
 * Gère le mode sombre/clair avec :
 * - Persistance dans localStorage
 * - Application de la classe 'dark' sur le body
 * - Thème par défaut : sombre (dark)
 */

import { writable } from 'svelte/store';

/** Type du thème */
export type Theme = 'dark' | 'light';

/**
 * Créer le store du thème avec persistance.
 */
function createThemeStore() {
    /* Récupérer le thème sauvegardé ou utiliser 'dark' par défaut */
    const stored = typeof window !== 'undefined' ? localStorage.getItem('theme') : null;
    const initial: Theme = stored === 'light' ? 'light' : 'dark';

    const { subscribe, set, update } = writable<Theme>(initial);

    return {
        subscribe,
        /** Définir le thème et l'appliquer au DOM */
        set: (value: Theme) => {
            if (typeof window !== 'undefined') {
                localStorage.setItem('theme', value);
                applyTheme(value);
            }
            set(value);
        },
        /** Basculer entre dark et light */
        toggle: () => {
            update((current) => {
                const next: Theme = current === 'dark' ? 'light' : 'dark';
                if (typeof window !== 'undefined') {
                    localStorage.setItem('theme', next);
                    applyTheme(next);
                }
                return next;
            });
        },
        /** Initialiser le thème au montage du composant */
        init: () => {
            if (typeof window !== 'undefined') {
                const saved = localStorage.getItem('theme') as Theme | null;
                const value = saved === 'light' ? 'light' : 'dark';
                applyTheme(value);
                set(value);
            }
        }
    };
}

/**
 * Appliquer le thème au body (ajout/suppression de la classe 'dark').
 */
function applyTheme(value: Theme) {
    if (value === 'dark') {
        document.body.classList.add('dark');
    } else {
        document.body.classList.remove('dark');
    }
}

/** Store exporté du thème */
export const theme = createThemeStore();

import FaTwitter from 'svelte-icons/fa/FaTwitter.svelte';
import FaInstagram from 'svelte-icons/fa/FaInstagram.svelte';
import FaCopyright from 'svelte-icons/fa/FaCopyright.svelte';
import type { Icon } from './prop-subtypes';

export type SvelteIconOption = typeof FaTwitter | FaInstagram | FaCopyright

export const iconToSvelteIcon = (icon: Icon): SvelteIconOption => {
    return {
        'twitter': FaTwitter,
        'instagram': FaInstagram,
        'copyright': FaCopyright,
    }[icon]
}
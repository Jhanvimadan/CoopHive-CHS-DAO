import flowbitePlugin from 'flowbite/plugin'
import type { Config } from "tailwindcss";

export default {
  content: ['./src/**/*.{html,js,svelte,ts}', './node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'],
  darkMode: 'selector',
	theme: {
		extend: {
      colors: {
        primary: {
			50:  '#f4e0e5',  // Soft blush pink
			100: '#e9bdca',  // Pastel rose
			200: '#de99b0',  // Warm mauve
			300: '#d2668c',  // Deep rose
			400: '#c5336b',  // Vivid pink-red
			500: '#b9004f',  // Core magenta
			600: '#a60048',  // Rich berry
			700: '#88003c',  // Dark ruby
			800: '#6a0030',  // Deep plum
			900: '#530024',  // Dark wine
		}		
      }
    }
	},

	plugins: [flowbitePlugin]
} as Config;

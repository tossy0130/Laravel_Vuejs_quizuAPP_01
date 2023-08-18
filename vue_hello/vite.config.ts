import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'


/* ------- �ǋL ---------*/
import * as path from 'path'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()], // , �ǋL

  /* --- �ǋL --- */
	resolve: {
	  alias: {
            '@': path.resolve(__dirname, './src'),
         },
      },
  /* --- �ǋL END --- */

  
  /* --- �ǋL --- */
  css: {
       preprocessorOptions: {
	scss: { additionalData: `@import '@/assets/scss/style.scss';`},
       }
     }, 
  /* --- �ǋL END --- */

})

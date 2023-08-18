import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'


/* ------- 追記 ---------*/
import * as path from 'path'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()], // , 追記

  /* --- 追記 --- */
	resolve: {
	  alias: {
            '@': path.resolve(__dirname, './src'),
         },
      },
  /* --- 追記 END --- */

  
  /* --- 追記 --- */
  css: {
       preprocessorOptions: {
	scss: { additionalData: `@import '@/assets/scss/style.scss';`},
       }
     }, 
  /* --- 追記 END --- */

})

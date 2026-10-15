import {defineConfig} from 'vitest/config';
import react from '@vitejs/plugin-react';
import {VitePWA} from 'vite-plugin-pwa';
export default defineConfig({plugins:[react(),VitePWA({registerType:'prompt',includeAssets:['icons/icon.svg'],manifest:{name:'Калькулятор себестоимости',short_name:'FoodCost',lang:'ru',description:'Себестоимость рецептов без интернета',theme_color:'#19664b',background_color:'#f6f7f3',display:'standalone',start_url:'/',icons:[{src:'/icons/icon.svg',sizes:'any',type:'image/svg+xml',purpose:'any maskable'}]},workbox:{globPatterns:['**/*.{js,css,html,png,svg,woff2}'],navigateFallback:'/index.html'}})],test:{environment:'jsdom',include:['src/**/*.test.{ts,tsx}'],setupFiles:['./src/tests/setup.ts']}});

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// 用户站点 HDU-Link.github.io 部署在根路径，base 保持 '/'
export default defineConfig({
  base: '/',
  plugins: [react()],
})

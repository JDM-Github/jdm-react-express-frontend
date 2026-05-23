import { defineConfig } from 'vite'
import tailwindcss from "@tailwindcss/vite";
import react from '@vitejs/plugin-react-swc'
import path from 'path'

export default defineConfig({
	plugins: [react(), tailwindcss()],
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src"),
			"@/lib": path.resolve(__dirname, "./src/lib")
		},
	},
	build: {
		outDir: path.resolve(__dirname, "../backend/client"),
		emptyOutDir: true,
	},
});
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
    plugins: [react()],
    build: {
        emptyOutDir: false,
        outDir: 'dist',
        lib: {
            entry: resolve(process.cwd(), 'src/content/index.jsx'),
            name: 'ContentScript',
            fileName: () => 'assets/content.js',
            formats: ['iife']
        },
        rollupOptions: {
            output: {
                extend: true,
                globals: {
                    react: 'React',
                    'react-dom': 'ReactDOM'
                }
            }
        }
    },
    define: {
        'process.env.NODE_ENV': '"production"'
    }
})

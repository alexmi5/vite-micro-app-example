import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        react(),
        federation({
            name: 'micro1',
            filename: 'remoteEntry.js',
            exposes: {
                './App': './src/App.tsx',
            },
            shared: ['react'],
        }),
    ],
    build: {
        modulePreload: false,
        target: 'esnext',
        minify: false,
        cssCodeSplit: false,
    },
})

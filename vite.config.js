import tailwindcss from "tailwindcss";
import {resolve} from "path";
import { defineConfig } from "vite";

export default defineConfig({
    base: "/lojacompleta/",
    plugins: [],
    resolve:{
        /*something*/
    },
    css:{
        postcss: {
            plugins:[tailwindcss],
        },
},
build: {
    outDir: 'dist',
    rollupOptions :{
        input: {
            main: resolve(__dirname, "./index.html"),
            checkout: resolve(__dirname, "./checkout.html"),
            pedidos: resolve(__dirname, "./pedidos.html"),
        },
    },
},
});

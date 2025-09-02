import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@repo/**/*.{js,ts,jsx,tsx,mdx}"
  ]
}

export default config;
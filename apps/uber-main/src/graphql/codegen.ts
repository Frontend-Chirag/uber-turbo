import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
    schema: "./src/graphql/schema/**/*.graphql",
    documents: "./src/**/*.{ts,tsx,graphql}",
    generates: {
        // client side types
        "./src/graphql/generated/client/": {
            preset: 'client',
        },

        // server side types
        "./src/graphql/generated/server/types.ts": {
            plugins: ["typescript", "typescript-resolvers"]

        }
    },
    ignoreNoDocuments: true,
    overwrite: true
};

export default config
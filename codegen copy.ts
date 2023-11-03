import type { CodegenConfig } from "@graphql-codegen/cli"

const config: CodegenConfig = {
  overwrite: true,
  schema: "http://localhost:3000/shop-api",
  documents: "src/**/*.{tsx,ts}",
  ignoreNoDocuments: true,
  generates: {
    "src/gql/": {
      preset: "client",
      plugins: [],
    },
  },
  hooks: { afterAllFileWrite: ["prettier --write"] },
}

export default config

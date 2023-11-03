import type { CodegenConfig } from "@graphql-codegen/cli"

const config: CodegenConfig = {
  overwrite: true,
  schema: "http:localhost:8000/shop-api",
  documents: "src/**/*.{tsx,ts}",
  generates: {
    "src/gql/": {
      preset: "client",
      plugins: [],
    },
  },
}

export default config

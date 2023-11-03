import type { CodegenConfig } from "@graphql-codegen/cli"

const config: CodegenConfig = {
  overwrite: true,
  generates: {
    "./src/hooks/use-query.ts": {
      schema: "http://localhost:3000/shop-api",
      documents: "src/graphql/**/*.{tsx,ts}",
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-graphql-request",
        "plugin-typescript-swr",
      ],
    },
  },
  config: {
    useSWRInfinite: ["GetPost"],
    scalars: {
      DateTime: "string",
      JSON: "unknown",
      Upload: "unknown",
      Time: "string",
      Date: "string",
      Long: "number",
    },
    autogenSWRKey: true,
  },
}

export default config

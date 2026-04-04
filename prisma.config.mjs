// G:\FinAI\finai\prisma.config.mjs
import { defineConfig, env } from "prisma/config";
import "dotenv/config";

export default defineConfig({
  schema: "prisma/schema.prisma",
  datasource: {
    // This tells the CLI to use the DIRECT_URL you just added
    url: env("DIRECT_URL"), 
  },
});
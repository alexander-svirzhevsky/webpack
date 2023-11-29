import { Configuration } from "webpack";
import { BuildOptions } from "./types/types";

const buildResolvers = ({ paths }: BuildOptions): Configuration["resolve"] => {
  return {
    extensions: [".tsx", ".ts", ".js"],
    alias: {
      "@": paths.src
    }
  }
}

export default buildResolvers;
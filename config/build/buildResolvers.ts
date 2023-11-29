import { Configuration } from "webpack";

const buildResolvers = (): Configuration["resolve"] => {
  return {
    extensions: [".tsx", ".ts", ".js"]
  }
}

export default buildResolvers;
import typescript from "rollup-plugin-typescript2";
import styles from "rollup-plugin-styles";

export default {
  input: ["src/index.ts"],
  output: [
    {
      dir: "dist",
      entryFileNames: "[name].js",
      format: "cjs",
      exports: "named",
    },
  ],
  plugins: [typescript(), styles()],
  external: ["react"],
};

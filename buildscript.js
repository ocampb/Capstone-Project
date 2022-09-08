const { sassPlugin } = require("esbuild-sass-plugin");

require("esbuild").build({
  entryPoints: ["components/App.jsx"],
  bundle: true,
  watch: true,
  outdir: "public",
  plugins: [sassPlugin()],
});

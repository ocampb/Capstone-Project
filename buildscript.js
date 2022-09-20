const { sassPlugin } = require("esbuild-sass-plugin");

require("esbuild").build({
  entryPoints: ["components/App.jsx"],
  bundle: true,
  watch: !!process.env.ESBUILD_WATCH_ENABLED,
  outdir: "public",
  plugins: [sassPlugin()],
  loader: {
    ".jpg": "dataurl",
    ".png": "dataurl",
  },
});

import { appTools, defineConfig } from '@modern-js/app-tools';

// https://modernjs.dev/en/configure/app/usage
export default defineConfig({
  runtime: {
    router: true,
  },
  plugins: [
    appTools({
      bundler: 'rspack', // Set to 'webpack' to enable webpack
    }),
  ],
  html: {
    template({ value, entryName }) {
      return entryName === 'designer' ? `./static/${entryName}.html` : value;
    },
  },
  source: {
    enableCustomEntry: true,
    disableDefaultEntries: true,
    entries: {
      designer: {
        entry: './src/designer/index.ts',
        disableMount: true,
      },
      preview: './src/preview/index.ts',
    }
  },
  output: {
    externals: {
      "react": "var window.React",
      "react-dom": "var window.ReactDOM",
      "prop-types": "var window.PropTypes",
      // "@alifd/next": "var window.Next",
      "@alilc/lowcode-engine": "var window.AliLowCodeEngine",
      "@alilc/lowcode-engine-ext": "var window.AliLowCodeEngineExt",
      "moment": "var window.moment",
      "lodash": "var window._"
    }
  }
});

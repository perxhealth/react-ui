module.exports = {
  stories: ["../stories/**/*.stories.@(ts|tsx|js|jsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chakra-ui/storybook-addon",
  ],
  // https://storybook.js.org/docs/react/configure/typescript#mainjs-configuration
  typescript: {
    check: true, // type-check stories during Storybook build
  },
  core: {
    builder: "webpack5",
  },
  features: {
    emotionAlias: false,
  }
}

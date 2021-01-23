module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `
            @import "@/styles/variables/_variables.scss";
            @import "@/styles/mixins/_mixins.scss";
          `,
      },
    },
  },
  devServer: {
    proxy: {
      "^/api": {
        target: "http://localhost:5000",
      },
    },
  },
};

module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `
          @import "@/styles/_colors.scss";
          @import "@/styles/_transitions.scss";
          @import "@/styles/index.scss";
        `,
      },
    },
  },
};

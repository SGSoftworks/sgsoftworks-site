const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,

  chainWebpack: (config) => {
    config.plugin("define").tap((args) => {
      args[0].__VUE_OPTIONS_API__ = JSON.stringify(true);
      args[0].__VUE_PROD_DEVTOOLS__ = JSON.stringify(false);
      args[0].__VUE_PROD_HYDRATION_MISMATCH_DETAILS__ = JSON.stringify(false);

      // Lógica para ver los detalles de hidratación en desarrollo,
      // if (process.env.NODE_ENV === 'development') {
      //   args[0].__VUE_PROD_HYDRATION_MISMATCH_DETAILS__ = JSON.stringify(true);
      // } else {
      //   args[0].__VUE_PROD_HYDRATION_MISMATCH_DETAILS__ = JSON.stringify(false);
      // }

      return args;
    });
  },
});

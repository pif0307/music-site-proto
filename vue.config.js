module.exports = {
  transpileDependencies: ["vuetify"],

  publicPath: "/music-site-proto",
  outputDir: "docs",

  devServer: {
    proxy: { 
      '/api': { 
        target: 'http://localhost:3000/api',
        changeOrigin: true, 
        pathRewrite: { 
          '^/api': ''
        } 
      } 
    } 
  },
};

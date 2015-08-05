module.exports = {
  // point webpack to the root component.So know where to start process.
  entry: "./app/components/Main.js",
  // after compiling, throw the code to public/bundle.js.
  output: {
    filename: "public/bundle.js"
  },

  // tell webpack what to do with the main.js file and its children components.
  // we use the babel loader we downloaded, it complie our jxs code to js and put into the bundle.js file.
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel'
      }
    ]
  }
};

const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "index.js",
    libraryTarget: "umd",
    library: { amd: "index", commonjs: "index", root: "Index" },
    umdNamedDefine: true
  },
  externals: {
    "react": { amd: "react", commonjs: "react", commonjs2: "react", root: "React"},
    "react-dom": { amd: "react-dom", commonjs: "react-dom", commonjs2: "react-dom", root: "ReactDOM" },
    "react-dnd": { amd: "react-dnd", commonjs: "react-dnd", commonjs2: "react-dnd", root: "ReactDnD" }
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "index.html",
      inject: false
    })
  ]
};
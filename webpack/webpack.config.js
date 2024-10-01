import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export default {
    entry: './src/index.jsx',
    output: {
        path: path.resolve('dist'),
        filename: 'bundle.js',
        clean: true //Clean the directory before each build
    },
    resolve: {
        extensions: ['.js', '.jsx'], //Automatically resolve extensions
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/, //Match JS and JSX files
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader', //For JavaScript and JSX files
                },
            },
            {
                test: /\.scss$/, //Match SCSS files
                use: [
                    MiniCssExtractPlugin.loader, //Extract CSS into files
                    'css-loader',    //Turn CSS into CommonJS
                    'sass-loader',   //Compile SASS to CSS
                ],
            },
            /*{
                test: /\.css$/, //Match plain CSS files
                use: ['style-loader', 'css-loader'], //Process CSS files
            },*/
            {
                test: /\.(png|jpg|jpeg|gif|svg|mp4|webm|ogg|mov|mp3|wav|flac|aac)$/, //Handle image, video and audio files
                type: 'asset/resource',
                generator: {
                    filename: 'assets/[name].[hash][ext]', //Output path for all assets (images, videos, audios)
                },               
            }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            favicon: './public/favicon.png'
        }),
        new MiniCssExtractPlugin({
            filename: 'style.css',
        }),
    ],
    devServer: {
        static: './dist', //Serve files from "dist"
        port: 3000, //Development server port
        open: true
    },
    mode: 'development',
};
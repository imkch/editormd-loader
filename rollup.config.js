/*
 * @Author: G.TAO
 * @Date: 2020-11-27 14:02:22
 * @LastEditors: G.TAO
 * @LastEditTime: 2020-11-27 17:00:56
 * @Description: 
 */
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs'
import resolve from 'rollup-plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';
import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload';
const isDev = process.env.NODE_ENV !== 'production';
export default {
  input: 'src/index.js',
  output: [
    {
      file: 'dist/index.js',
      format: 'umd',
      name: 'EditormdLoader',
      globals: {
        'jquery': '$'
      }
    },
    !isDev && {
      file: 'dist/index.min.js',
      format: 'umd',
      name: 'EditormdLoader',
      globals: {
        'jquery': '$'
      },
      plugins: [terser()]
    }
  ],
  external: [
    'jquery'
  ],
  plugins: [
    babel({
      exclude: 'node_modules/**'
    }),
    commonjs(),
    resolve(),
    isDev && serve({
      port: 8000,
      contentBase: './',
      historyApiFallback: '/examples/index.html',
    }),
    livereload()
  ]
};
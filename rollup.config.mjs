import nodeResolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { babel } from '@rollup/plugin-babel';
import { terser } from 'rollup-plugin-terser';

const isProd = process.env.mode === 'prod';

const bundles = [];

bundles.push({
  input: './src/index.js',
  output: {
    dir: 'dist/',
    sourcemap: !isProd,
    format: 'umd',
    name: 'Share',
  },
  plugins: [
    nodeResolve(),
    commonjs(),
  ].concat(
    isProd ? [
      terser(),
      babel({
        babelHelpers: 'bundled',
        presets: ['@babel/preset-env'],
      }),
    ] : []
  ),
})

export default bundles;

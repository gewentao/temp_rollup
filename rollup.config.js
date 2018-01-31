import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import globals from 'rollup-plugin-node-globals';
import builtins from 'rollup-plugin-node-builtins';
import includePaths from 'rollup-plugin-includepaths';
import json from 'rollup-plugin-json';

export default {
  input: './main.js',
  output: {
    file: './main.min.js',
    format: 'iife',
    name: 'rolldown'
  },
  plugins: [
    includePaths({
      external: [],
    }),
    resolve({
      preferBuiltins: true,
    }),
    commonjs(),
    globals(),
    builtins(),
    json(),
  ]
};

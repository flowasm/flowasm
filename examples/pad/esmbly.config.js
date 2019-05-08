const path = require('path');
const Flow = require('@esmbly/transformer-flow');
const Wasm = require('@esmbly/transformer-wasm');

module.exports = {
  input: ['./src/**/*.js'],
  transformers: [
    Flow.createTransformer(),
    Wasm.createTransformer({
      memory: { export: true, allocator: 'allocator/tlsf' },
    }),
  ],
  output: [
    {
      format: '.ts',
      outFile: path.join(__dirname, 'dist', 'pad.ts'),
    },
    {
      format: '.wasm',
      outFile: path.join(__dirname, 'dist', 'pad.wasm'),
    },
    {
      format: '.as',
      outFile: path.join(__dirname, 'dist', 'pad.as.ts'),
    },
  ],
};

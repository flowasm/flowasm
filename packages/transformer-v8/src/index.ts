import { AST } from '@esmbly/types';

export const output = ['TypeScript'];

interface TransformerV8Options {}

export default function(astArray: AST[], options: TransformerV8Options): AST[] {
  console.log('Running V8 transformer');
  console.log(options);
  return astArray;
}
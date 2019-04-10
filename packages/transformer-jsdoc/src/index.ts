import { File, Format, Output, SyntaxTree, Transformer } from '@esmbly/types';
import { stripAllComments } from './utils';
import traverse from './traverse';

export interface JSDocTransformerOptions {
  stripComments?: boolean;
}

export default ({
  stripComments = false,
}: JSDocTransformerOptions): Transformer => {
  return {
    createFiles(trees: SyntaxTree[], output: Output[]): File[] {
      return ([] as File[]).concat(
        ...output.map((out: Output) => {
          if (!this.outputFormats.includes(out.format)) {
            return [];
          }
          return trees.map((tree: SyntaxTree) => tree.toFile(out));
        }),
      );
    },
    inputFormat: Format.JSDoc,
    name: 'JSDoc',
    outputFormats: [Format.TypeScript],
    transform(trees: SyntaxTree[]): void {
      trees.forEach((tree: SyntaxTree) => {
        traverse(tree);
        tree.setFormat(Format.TypeScript);
        if (stripComments) {
          stripAllComments(tree);
        }
      });
    },
  };
};

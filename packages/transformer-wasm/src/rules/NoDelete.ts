import * as t from '@babel/types';
import { Node, NodePath, Visitor } from '@babel/traverse';
import { Warning } from '../types';

const info = 'AssemblyScript does not support the delete operator';

export default (warnings: Warning[]): Visitor<Node> => ({
  // @ts-ignore
  UnaryExpression({ node }: NodePath<t.UnaryExpression>) {
    if (node.operator === 'delete') {
      warnings.push({ info, node });
    }
  },
});
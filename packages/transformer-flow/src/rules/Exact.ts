import * as t from '@babel/types';
import { Node, NodePath, Visitor } from '@babel/traverse';
import { Warning } from '@esmbly/types';

export function Exact(warnings: Warning[]): Visitor<Node> {
  return {
    ObjectTypeAnnotation(path: NodePath<t.ObjectTypeAnnotation>) {
      if (path.node.exact) {
        warnings.push({
          info: `Exact types can't be expressed in TypeScript.`,
          issueUrl: 'https://github.com/Microsoft/TypeScript/issues/12936',
          loc: path.node.loc,
        });

        path.replaceWith(
          t.objectTypeAnnotation(
            path.node.properties,
            path.node.indexers,
            path.node.callProperties,
          ),
        );
      }
    },
  };
}

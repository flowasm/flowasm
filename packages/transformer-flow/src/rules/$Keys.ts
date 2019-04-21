import t from '@babel/types';
import { Node, NodePath, Visitor } from '@babel/traverse';

export default (): Visitor<Node> => ({
  GenericTypeAnnotation(path: NodePath<t.GenericTypeAnnotation>) {
    if (!t.isIdentifier(path.node.id)) {
      return;
    }
    if (path.node.id.name !== '$Keys') {
      return;
    }
    if (!path.node.typeParameters) {
      return;
    }

    const [param] = path.node.typeParameters.params;
    if (!t.isGenericTypeAnnotation(param)) {
      return;
    }
    if (!t.isIdentifier(param.id)) {
      return;
    }

    path.replaceWith(t.tsTypeOperator(t.tsTypeReference(param.id)));
  },
});
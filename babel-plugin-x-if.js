module.exports = function ({ types: t }) {
  return {
    visitor: {
      JSXElement(path) {
        const { node } = path;
        const xIfAttr = node.openingElement.attributes.find((item) => {
          return item.type === "JSXAttribute" && item.name.name === "x-if";
        });
        if (!xIfAttr) return;
        const openElement = t.jSXOpeningElement(
          node.openingElement.name,
          node.openingElement.attributes
            ? node.openingElement.attributes.filter((attr) => attr !== xIfAttr)
            : null
        );
        const Element = t.JSXElement(
          openElement,
          node.closingElement,
          node.children,
          false
        );
        const expression = t.conditionalExpression(
          xIfAttr.value.expression,
          Element,
          t.nullLiteral()
        );
        path.replaceWith(expression);
      },
    },
  };
};

function customReact(container,reactElement) {
  const element = document.createElement(reactElement.type);
  element.innerHTML = reactElement.children;

  for (const prop in reactElement.props) {
    element.setAttribute(prop, reactElement.props[prop]);
  }

  container.appendChild(element);
}

const mainContainer = document.getElementById("root");

const reactElement = {
  type: "button",
  props: {
    type: "button",
  },
  children: "Get Data",
};

customReact(mainContainer, reactElement);

// Make a virtual DOM node
function h(tag, text) {
    return { tag, text };
}

// Render VDOM to real DOM
function render(vnode) {
    const el = document.createElement(vnode.tag);
    el.textContent = vnode.text;
    return el;
}

// Compare old vs new VDOM (very basic)
function diffAndPatch(parent, oldNode, newNode) {
    const el = parent.firstChild; // only one child for this simple example

    // If no old node, create new
    if (!oldNode) {
        parent.appendChild(render(newNode));
    }
    // If no new node, remove old
    else if (!newNode) {
        parent.removeChild(el);
    }
    // If tag changed, replace
    else if (oldNode.tag !== newNode.tag) {
        parent.replaceChild(render(newNode), el);
    }
    // If text changed, update text
    else if (oldNode.text !== newNode.text) {
        el.textContent = newNode.text;
    }
}

// Initial tree
let oldTree = h("p", "Hello World!");
const root = document.getElementById("app");
root.appendChild(render(oldTree));

// New tree when we click update
let newTree = h("p", "Hello Virtual DOM!");

document.getElementById("update").addEventListener("click", () => {
    diffAndPatch(root, oldTree, newTree);
    oldTree = newTree; // update reference
});


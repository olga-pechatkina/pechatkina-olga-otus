class myTree extends HTMLElement {
  constructor() {
    super();
    var id = 0;
    var items = '';
  }
}

class myLeaf extends HTMLElement {
  constructor() {
    super();
    var id = 0;
  }
}

customElements.define('my-tree', myTree);
customElements.define('my-leaf', myLeaf);

var div = document.createElement('div');
div.setAttribute('data-json', '{"id": 1,"items": [{"id": 2,"items": [{ "id": 3 }]}]}');
document.body.appendChild(div);
var shadowRoot = div.attachShadow({
  mode: 'open'
});

function findNext(div) {
  var treeElements = JSON.parse(div.dataset.json);
  if (Object.keys(treeElements).length === 0) {
    return shadowRoot;
  }

  if (treeElements["id"]) {
    if (treeElements["items"]) {
      const localTree = document.createElement('my-tree');
      localTree.id = treeElements["id"];
      localTree.items = treeElements["items"][0];
      localTree.dataset.json = JSON.stringify(localTree.items);
      shadowRoot.appendChild(localTree);
      findNext(localTree);
    } else {
      const localLeaf = document.createElement('my-leaf');
      shadowRoot.appendChild(localLeaf);
      localLeaf.id = treeElements["id"];
    }
  }
}

findNext(div);

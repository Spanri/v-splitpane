import Vue from "vue";

const createSplitBlock = () => {
  const splitBlock: HTMLElement = document.createElement("div");
  splitBlock.innerHTML = "<p>Split</p>";
  return splitBlock;
};

const addSplitBlocks = (el: HTMLElement) => {
  for (let i = 0; i < el.childNodes.length - 1; i += 2) {
    const splitBlock = createSplitBlock();
    const child = el.childNodes[i];

    child?.parentNode?.insertBefore(splitBlock, child.nextSibling);
  }
};

export default Vue.directive("splitpane", {
  inserted: function(el) {
    addSplitBlocks(el);

    // Focus the element
    console.log("el");
  },
});

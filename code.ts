const page = figma.currentPage
const selectedFrame = page?.selection[0] as FrameNode;
const metadataFrameNode = selectedFrame?.children.find((node) => node.name === "metadata") as FrameNode;
const metadataNodes = metadataFrameNode?.children as TextNode[];

const loadFont = async (fontName) => {
  await figma.loadFontAsync(fontName);
};

const replaceTargetWithContent = (textNode:TextNode, {type="date"}) => {
  const content = textNode.characters
  let newContent = ""
  let replacedContent = ""
  let testString = ""
  let baseString = ""
  if (type === "user") {
    testString = "Last updated by:"
    replacedContent = figma.currentUser?.name
  } else if (type === "date") {
    testString = "Last updated on:"
    replacedContent = new Date().toLocaleString()
  }

  if (replacedContent && testString) {
    baseString = content.substring(0, testString.lastIndexOf(':') + 1);
    newContent = `${baseString} ${replacedContent}`
    textNode.characters = newContent
  }
}

if (metadataNodes?.length) {
  loadFont(metadataNodes[0].fontName).then(() => {
    replaceTargetWithContent(metadataNodes[0], {type: "date"})
    replaceTargetWithContent(metadataNodes[1], {type: "user"})
    page.selection = []
  }).catch((error) => {
    console.error(error)
  }).finally(() => {
    figma.closePlugin();
  })
} else {
  console.error("No frame with metadata is selected.")
  figma.closePlugin();
}

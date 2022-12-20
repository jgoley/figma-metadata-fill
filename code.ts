const ANNOTATION_COMPONENT_KEY = "2d8635cd6133c6ac76a00b4573386acc1afa9969"
const page = figma.currentPage

const getMetadataFrame = () => {
  const selectedFrame = page?.selection[0] as FrameNode;
  const metadataFrameNode = selectedFrame?.children.find((node) => node.name === "metadata") as FrameNode;
  return metadataFrameNode?.children as TextNode[];
}

const loadFont = async (fontName) => {
  await figma.loadFontAsync(fontName);
};

const getAnnotationComponent = async () => (
  await figma
    .importComponentByKeyAsync(ANNOTATION_COMPONENT_KEY)
    .catch(err => {
      throw new Error('Team library component import failed.')
    })
)

const replaceTargetWithContent = (textNode:TextNode, {type="date"}) => {
  let newContent = ""
  let replacedContent = ""
  let baseString = ""
  if (type === "user") {
    baseString = "Last updated by:"
    replacedContent = figma.currentUser?.name
  } else if (type === "date") {
    baseString = "Last updated on:"
    replacedContent = new Date().toLocaleString()
  }

  if (replacedContent) {
    newContent = `${baseString} ${replacedContent}`
    textNode.characters = newContent
  }
}

const updateMetadata = async (componentAdded=false) => {
  const metadataNodes = getMetadataFrame()
  return loadFont(metadataNodes[0].fontName).then(() => {
    replaceTargetWithContent(metadataNodes[0], {type: "date"})
    replaceTargetWithContent(metadataNodes[1], {type: "user"})
    if (componentAdded) {
      figma.notify("Annotation component added and metadata updated 🛠", {timeout: 3000})
    } else {
      figma.notify("Metadata updated ✨", {timeout: 3000})
    }
  }).catch((error) => {
    console.error(error)
    figma.notify(`Error in updating metadata: ${error}`, {error: true, timeout: 3000})
  }).finally(() => {
    figma.closePlugin();
  })
}

getAnnotationComponent().then((annotationComponent) => {
  if (getMetadataFrame()?.length) {
    updateMetadata()
  } else if (annotationComponent) {
    const instance = annotationComponent.createInstance()
    const position = figma.viewport.center
    instance.x = position.x - (instance.width / 2)
    instance.y = position.y - (instance.height / 2)
    page.selection = [instance]
    updateMetadata(true)
  } else {

  }
}).catch((error) => {
  console.error(error)
  figma.notify(`Error in getting annotation component from library`, {error: true, timeout: 3000})
  figma.closePlugin();
})

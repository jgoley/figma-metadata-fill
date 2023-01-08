// import { createAnnotation } from 'src/components/annotation'

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

const updateMetadataV1 = async (componentAdded=false) => {
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

const updateMetadata = (componentAdded=false) => {
  const componentInstance = page?.selection[0] as InstanceNode;
  if (componentInstance.type !== "INSTANCE") return

  const newValues = {
    timeStamp: new Date().toLocaleString(),
    user: figma.currentUser?.name
  }
  let propertyNames = Object.keys(componentInstance.componentProperties)

  const hasProperties = propertyNames.filter(k => k.match(/user|timeStamp/)).length === 2

  if (hasProperties) {
    const props = {}
    propertyNames.forEach((nameWithId:string) => {
      const value = newValues[nameWithId.split("#")[0]]
      if (value) props[nameWithId] = value;
    })
    componentInstance.setProperties(props)
  } else {
    // search for layers and replace text
  }

  if (componentAdded) {
    figma.notify("Annotation component added and metadata updated 🛠", {timeout: 3000})
  } else {
    figma.notify("Metadata updated ✨", {timeout: 3000})
  }
}

getAnnotationComponent().then((annotationComponent) => {
  if (page?.selection.length) {
    updateMetadata()
  } else if (annotationComponent) {
    const instance = annotationComponent.createInstance()
    const position = figma.viewport.center
    instance.x = position.x - (instance.width / 2)
    instance.y = position.y - (instance.height / 2)
    page.selection = [instance]
    updateMetadata(true)
  } else {
    // createAnnotation().then(() => {
    //   figma.notify("Annotation component created", {timeout: 3000})
    // })
  }
}).catch((error) => {
  console.error(error)
  figma.notify(`Error in getting annotation component from library`, {error: true, timeout: 3000})
  figma.closePlugin();
})

const createAnnotationComponent = async () => {

	// Load FONTS
	async function loadFonts() {
		await Promise.all([
			figma.loadFontAsync({
				family: "Open Sans",
				style: "Bold"
				}),figma.loadFontAsync({
				family: "Open Sans",
				style: "SemiBold"
				}),figma.loadFontAsync({
				family: "Open Sans",
				style: "Regular"
				})
		])
	}

	await loadFonts()

	// Create COMPONENT
	const component_2_60 = figma.createComponent()
	component_2_60.resize(600.0000000000, 806.0000000000)
	component_2_60.primaryAxisSizingMode = "AUTO"
	component_2_60.name = "Type=Developer"
	component_2_60.fills = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":1,"g":1,"b":1}}]
	component_2_60.strokes = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.9800000190734863,"g":0,"b":1}}]
	component_2_60.strokeWeight = 7.5
	component_2_60.strokeAlign = "CENTER"
	component_2_60.cornerRadius = 4
	component_2_60.paddingLeft = 40
	component_2_60.paddingRight = 40
	component_2_60.paddingTop = 40
	component_2_60.paddingBottom = 40
	component_2_60.strokeTopWeight = 7.5
	component_2_60.strokeBottomWeight = 7.5
	component_2_60.strokeLeftWeight = 7.5
	component_2_60.strokeRightWeight = 7.5
	component_2_60.backgrounds = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":1,"g":1,"b":1}}]
	component_2_60.clipsContent = true
	component_2_60.expanded = false
	component_2_60.layoutMode = "VERTICAL"
	component_2_60.itemSpacing = 10
	component_2_60.description = "For use when annotating a design file"


	// Create FRAME
	const frame_2_61 = figma.createFrame()
	component_2_60.appendChild(frame_2_61)
	frame_2_61.resize(226.0000000000, 44.0000000000)
	frame_2_61.primaryAxisSizingMode = "AUTO"
	frame_2_61.counterAxisSizingMode = "AUTO"
	frame_2_61.name = "Label"
	frame_2_61.relativeTransform = [[1,0,40],[0,1,40]]
	frame_2_61.x = 40
	frame_2_61.y = 40
	frame_2_61.fills = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.9800000190734863,"g":0,"b":1}}]
	frame_2_61.cornerRadius = 100
	frame_2_61.paddingLeft = 15
	frame_2_61.paddingRight = 15
	frame_2_61.paddingTop = 5
	frame_2_61.paddingBottom = 5
	frame_2_61.strokeTopWeight = 1
	frame_2_61.strokeBottomWeight = 1
	frame_2_61.strokeLeftWeight = 1
	frame_2_61.strokeRightWeight = 1
	frame_2_61.backgrounds = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.9800000190734863,"g":0,"b":1}}]
	frame_2_61.clipsContent = false
	frame_2_61.expanded = false
	frame_2_61.layoutMode = "HORIZONTAL"
	frame_2_61.counterAxisSizingMode = "AUTO"
	frame_2_61.itemSpacing = 10


	// Create TEXT
	const text_2_62 = figma.createText()
	frame_2_61.appendChild(text_2_62)
	text_2_62.resize(196.0000000000, 34.0000000000)
	text_2_62.name = "chip text"
	text_2_62.fills = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":1,"g":1,"b":1}}]
	text_2_62.relativeTransform = [[1,0,15],[0,1,5]]
	text_2_62.x = 15
	text_2_62.y = 5
	text_2_62.autoRename = false

	// Font properties
	text_2_62.fontName = {
		family: "Open Sans",
		style: "Bold"
	}
		text_2_62.listSpacing = 0
	text_2_62.characters = "Developer Note"
	text_2_62.fontSize = 25
	text_2_62.fontName = {"family":"Open Sans","style":"Bold"}
	text_2_62.textAutoResize = "WIDTH_AND_HEIGHT"


	// Create TEXT
	const text_2_63 = figma.createText()
	component_2_60.appendChild(text_2_63)
	text_2_63.resize(520.0000000000, 54.0000000000)
	text_2_63.name = "Title"
	text_2_63.relativeTransform = [[1,0,40],[0,1,94]]
	text_2_63.x = 40
	text_2_63.y = 94
	text_2_63.layoutAlign = "STRETCH"
	text_2_63.autoRename = false

	// Font properties
	text_2_63.fontName = {
		family: "Open Sans",
		style: "SemiBold"
	}
		text_2_63.listSpacing = 0
	text_2_63.characters = "Title"
	text_2_63.fontSize = 40
	text_2_63.fontName = {"family":"Open Sans","style":"SemiBold"}
	text_2_63.textAutoResize = "HEIGHT"


	// Create FRAME
	const frame_2_64 = figma.createFrame()
	component_2_60.appendChild(frame_2_64)
	frame_2_64.resize(217.0000000000, 44.0000000000)
	frame_2_64.primaryAxisSizingMode = "AUTO"
	frame_2_64.counterAxisSizingMode = "AUTO"
	frame_2_64.name = "metadata"
	frame_2_64.relativeTransform = [[1,0,40],[0,1,158]]
	frame_2_64.x = 40
	frame_2_64.y = 158
	frame_2_64.fills = [{"type":"SOLID","visible":false,"opacity":1,"blendMode":"NORMAL","color":{"r":1,"g":1,"b":1}}]
	frame_2_64.strokeTopWeight = 1
	frame_2_64.strokeBottomWeight = 1
	frame_2_64.strokeLeftWeight = 1
	frame_2_64.strokeRightWeight = 1
	frame_2_64.backgrounds = [{"type":"SOLID","visible":false,"opacity":1,"blendMode":"NORMAL","color":{"r":1,"g":1,"b":1}}]
	frame_2_64.clipsContent = false
	frame_2_64.layoutMode = "VERTICAL"
	frame_2_64.counterAxisSizingMode = "AUTO"


	// Create FRAME
	const frame_2_115 = figma.createFrame()
	frame_2_64.appendChild(frame_2_115)
	frame_2_115.resize(217.0000000000, 22.0000000000)
	frame_2_115.primaryAxisSizingMode = "AUTO"
	frame_2_115.counterAxisSizingMode = "AUTO"
	frame_2_115.name = "Updated On"
	frame_2_115.fills = []
	frame_2_115.strokeTopWeight = 1
	frame_2_115.strokeBottomWeight = 1
	frame_2_115.strokeLeftWeight = 1
	frame_2_115.strokeRightWeight = 1
	frame_2_115.backgrounds = []
	frame_2_115.clipsContent = false
	frame_2_115.layoutMode = "HORIZONTAL"
	frame_2_115.counterAxisSizingMode = "AUTO"
	frame_2_115.itemSpacing = 2


	// Create TEXT
	const text_2_65 = figma.createText()
	frame_2_115.appendChild(text_2_65)
	text_2_65.resize(130.0000000000, 22.0000000000)
	text_2_65.name = "Last updated on"
	text_2_65.locked = true
	text_2_65.fills = [{"type":"SOLID","visible":true,"opacity":0.800000011920929,"blendMode":"NORMAL","color":{"r":0,"g":0,"b":0}}]
	text_2_65.autoRename = false

	// Font properties
	text_2_65.fontName = {
		family: "Open Sans",
		style: "Regular"
	}
		text_2_65.listSpacing = 0
	text_2_65.characters = "Last updated on:"
	text_2_65.fontSize = 16
	text_2_65.fontName = {"family":"Open Sans","style":"Regular"}
	text_2_65.textAutoResize = "HEIGHT"


	// Create TEXT
	const text_2_116 = figma.createText()
	frame_2_115.appendChild(text_2_116)
	text_2_116.resize(85.0000000000, 22.0000000000)
	text_2_116.name = "timeStamp"
	text_2_116.fills = [{"type":"SOLID","visible":true,"opacity":0.800000011920929,"blendMode":"NORMAL","color":{"r":0,"g":0,"b":0}}]
	text_2_116.relativeTransform = [[1,0,132],[0,1,0]]
	text_2_116.x = 132
	text_2_116.autoRename = false

	// Font properties
	text_2_116.fontName = {
		family: "Open Sans",
		style: "SemiBold"
	}
		text_2_116.listSpacing = 0
	text_2_116.characters = "DATE_TIME"
	text_2_116.fontSize = 16
	text_2_116.fontName = {"family":"Open Sans","style":"SemiBold"}
	text_2_116.textAutoResize = "WIDTH_AND_HEIGHT"


	// Create FRAME
	const frame_2_117 = figma.createFrame()
	frame_2_64.appendChild(frame_2_117)
	frame_2_117.resize(172.0000000000, 22.0000000000)
	frame_2_117.primaryAxisSizingMode = "AUTO"
	frame_2_117.counterAxisSizingMode = "AUTO"
	frame_2_117.name = "Updated By"
	frame_2_117.relativeTransform = [[1,0,0],[0,1,22]]
	frame_2_117.y = 22
	frame_2_117.fills = []
	frame_2_117.strokeTopWeight = 1
	frame_2_117.strokeBottomWeight = 1
	frame_2_117.strokeLeftWeight = 1
	frame_2_117.strokeRightWeight = 1
	frame_2_117.backgrounds = []
	frame_2_117.clipsContent = false
	frame_2_117.layoutMode = "HORIZONTAL"
	frame_2_117.counterAxisSizingMode = "AUTO"
	frame_2_117.itemSpacing = 2


	// Create TEXT
	const text_2_66 = figma.createText()
	frame_2_117.appendChild(text_2_66)
	text_2_66.resize(130.0000000000, 22.0000000000)
	text_2_66.name = "Last updated by"
	text_2_66.locked = true
	text_2_66.fills = [{"type":"SOLID","visible":true,"opacity":0.800000011920929,"blendMode":"NORMAL","color":{"r":0,"g":0,"b":0}}]
	text_2_66.autoRename = false

	// Font properties
	text_2_66.fontName = {
		family: "Open Sans",
		style: "Regular"
	}
		text_2_66.listSpacing = 0
	text_2_66.characters = "Last updated by:"
	text_2_66.fontSize = 16
	text_2_66.fontName = {"family":"Open Sans","style":"Regular"}
	text_2_66.textAutoResize = "HEIGHT"


	// Create TEXT
	const text_2_118 = figma.createText()
	frame_2_117.appendChild(text_2_118)
	text_2_118.resize(40.0000000000, 22.0000000000)
	text_2_118.name = "user"
	text_2_118.fills = [{"type":"SOLID","visible":true,"opacity":0.800000011920929,"blendMode":"NORMAL","color":{"r":0,"g":0,"b":0}}]
	text_2_118.relativeTransform = [[1,0,132],[0,1,0]]
	text_2_118.x = 132
	text_2_118.autoRename = false

	// Font properties
	text_2_118.fontName = {
		family: "Open Sans",
		style: "SemiBold"
	}
		text_2_118.listSpacing = 0
	text_2_118.characters = "USER"
	text_2_118.fontSize = 16
	text_2_118.fontName = {"family":"Open Sans","style":"SemiBold"}
	text_2_118.textAutoResize = "WIDTH_AND_HEIGHT"


	// Create TEXT
	const text_2_67 = figma.createText()
	component_2_60.appendChild(text_2_67)
	text_2_67.resize(520.0000000000, 272.0000000000)
	text_2_67.name = "Content 1"
	text_2_67.relativeTransform = [[1,0,40],[0,1,212]]
	text_2_67.x = 40
	text_2_67.y = 212
	text_2_67.layoutAlign = "STRETCH"
	text_2_67.autoRename = false

	// Font properties
	text_2_67.fontName = {
		family: "Open Sans",
		style: "Regular"
	}
		text_2_67.listSpacing = 0
	text_2_67.characters = "Suspendisse eu luctus elit. Maecenas lobortis at est vitae bibendum. Nunc mattis posuere urna, eu ullamcorper quam condimentum quis. Sed efficitur blandit condimentum. Aliquam nec rutrum lorem, ut suscipit lorem. Suspendisse at nulla vel ligula congue ornare. Aenean non quam a urna luctus ullamcorper."
	text_2_67.fontSize = 25
	text_2_67.fontName = {"family":"Open Sans","style":"Regular"}
	text_2_67.textAutoResize = "HEIGHT"


	// Create TEXT
	const text_2_68 = figma.createText()
	component_2_60.appendChild(text_2_68)
	text_2_68.resize(520.0000000000, 272.0000000000)
	text_2_68.name = "Content 2"
	text_2_68.relativeTransform = [[1,0,40],[0,1,494]]
	text_2_68.x = 40
	text_2_68.y = 494
	text_2_68.layoutAlign = "STRETCH"
	text_2_68.autoRename = false

	// Font properties
	text_2_68.fontName = {
		family: "Open Sans",
		style: "Regular"
	}
		text_2_68.listSpacing = 0
	text_2_68.characters = "Suspendisse eu luctus elit. Maecenas lobortis at est vitae bibendum. Nunc mattis posuere urna, eu ullamcorper quam condimentum quis. Sed efficitur blandit condimentum. Aliquam nec rutrum lorem, ut suscipit lorem. Suspendisse at nulla vel ligula congue ornare. Aenean non quam a urna luctus ullamcorper."
	text_2_68.fontSize = 25
	text_2_68.fontName = {"family":"Open Sans","style":"Regular"}
	text_2_68.textAutoResize = "HEIGHT"


	// Create COMPONENT
	const component_2_69 = figma.createComponent()
	component_2_69.resize(600.0000000000, 806.0000000000)
	component_2_69.primaryAxisSizingMode = "AUTO"
	component_2_69.name = "Type=Reference"
	component_2_69.relativeTransform = [[1,0,0],[0,1,2569]]
	component_2_69.y = 2569
	component_2_69.fills = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":1,"g":1,"b":1}}]
	component_2_69.strokes = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0,"g":0.5199999809265137,"b":1}}]
	component_2_69.strokeWeight = 7.5
	component_2_69.strokeAlign = "CENTER"
	component_2_69.cornerRadius = 4
	component_2_69.paddingLeft = 40
	component_2_69.paddingRight = 40
	component_2_69.paddingTop = 40
	component_2_69.paddingBottom = 40
	component_2_69.strokeTopWeight = 7.5
	component_2_69.strokeBottomWeight = 7.5
	component_2_69.strokeLeftWeight = 7.5
	component_2_69.strokeRightWeight = 7.5
	component_2_69.backgrounds = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":1,"g":1,"b":1}}]
	component_2_69.clipsContent = true
	component_2_69.expanded = false
	component_2_69.layoutMode = "VERTICAL"
	component_2_69.itemSpacing = 10
	component_2_69.description = "For use when annotating a design file"


	// Create FRAME
	const frame_2_70 = figma.createFrame()
	component_2_69.appendChild(frame_2_70)
	frame_2_70.resize(156.0000000000, 44.0000000000)
	frame_2_70.primaryAxisSizingMode = "AUTO"
	frame_2_70.counterAxisSizingMode = "AUTO"
	frame_2_70.name = "Label"
	frame_2_70.relativeTransform = [[1,0,40],[0,1,40]]
	frame_2_70.x = 40
	frame_2_70.y = 40
	frame_2_70.fills = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0,"g":0.5199999809265137,"b":1}}]
	frame_2_70.cornerRadius = 100
	frame_2_70.paddingLeft = 15
	frame_2_70.paddingRight = 15
	frame_2_70.paddingTop = 5
	frame_2_70.paddingBottom = 5
	frame_2_70.strokeTopWeight = 1
	frame_2_70.strokeBottomWeight = 1
	frame_2_70.strokeLeftWeight = 1
	frame_2_70.strokeRightWeight = 1
	frame_2_70.backgrounds = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0,"g":0.5199999809265137,"b":1}}]
	frame_2_70.clipsContent = false
	frame_2_70.expanded = false
	frame_2_70.layoutMode = "HORIZONTAL"
	frame_2_70.counterAxisSizingMode = "AUTO"
	frame_2_70.itemSpacing = 10


	// Create TEXT
	const text_2_71 = figma.createText()
	frame_2_70.appendChild(text_2_71)
	text_2_71.resize(126.0000000000, 34.0000000000)
	text_2_71.name = "chip text"
	text_2_71.fills = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":1,"g":1,"b":1}}]
	text_2_71.relativeTransform = [[1,0,15],[0,1,5]]
	text_2_71.x = 15
	text_2_71.y = 5
	text_2_71.autoRename = false

	// Font properties
	text_2_71.fontName = {
		family: "Open Sans",
		style: "Bold"
	}
		text_2_71.listSpacing = 0
	text_2_71.characters = "Reference"
	text_2_71.fontSize = 25
	text_2_71.fontName = {"family":"Open Sans","style":"Bold"}
	text_2_71.textAutoResize = "WIDTH_AND_HEIGHT"


	// Create TEXT
	const text_2_72 = figma.createText()
	component_2_69.appendChild(text_2_72)
	text_2_72.resize(520.0000000000, 54.0000000000)
	text_2_72.name = "Title"
	text_2_72.relativeTransform = [[1,0,40],[0,1,94]]
	text_2_72.x = 40
	text_2_72.y = 94
	text_2_72.layoutAlign = "STRETCH"
	text_2_72.autoRename = false

	// Font properties
	text_2_72.fontName = {
		family: "Open Sans",
		style: "SemiBold"
	}
		text_2_72.listSpacing = 0
	text_2_72.characters = "Title"
	text_2_72.fontSize = 40
	text_2_72.fontName = {"family":"Open Sans","style":"SemiBold"}
	text_2_72.textAutoResize = "HEIGHT"


	// Create FRAME
	const frame_2_140 = figma.createFrame()
	component_2_69.appendChild(frame_2_140)
	frame_2_140.resize(217.0000000000, 44.0000000000)
	frame_2_140.primaryAxisSizingMode = "AUTO"
	frame_2_140.counterAxisSizingMode = "AUTO"
	frame_2_140.name = "metadata"
	frame_2_140.relativeTransform = [[1,0,40],[0,1,158]]
	frame_2_140.x = 40
	frame_2_140.y = 158
	frame_2_140.fills = [{"type":"SOLID","visible":false,"opacity":1,"blendMode":"NORMAL","color":{"r":1,"g":1,"b":1}}]
	frame_2_140.strokeTopWeight = 1
	frame_2_140.strokeBottomWeight = 1
	frame_2_140.strokeLeftWeight = 1
	frame_2_140.strokeRightWeight = 1
	frame_2_140.backgrounds = [{"type":"SOLID","visible":false,"opacity":1,"blendMode":"NORMAL","color":{"r":1,"g":1,"b":1}}]
	frame_2_140.clipsContent = false
	frame_2_140.layoutMode = "VERTICAL"
	frame_2_140.counterAxisSizingMode = "AUTO"


	// Create FRAME
	const frame_2_141 = figma.createFrame()
	frame_2_140.appendChild(frame_2_141)
	frame_2_141.resize(217.0000000000, 22.0000000000)
	frame_2_141.primaryAxisSizingMode = "AUTO"
	frame_2_141.counterAxisSizingMode = "AUTO"
	frame_2_141.name = "Updated On"
	frame_2_141.fills = []
	frame_2_141.strokeTopWeight = 1
	frame_2_141.strokeBottomWeight = 1
	frame_2_141.strokeLeftWeight = 1
	frame_2_141.strokeRightWeight = 1
	frame_2_141.backgrounds = []
	frame_2_141.clipsContent = false
	frame_2_141.layoutMode = "HORIZONTAL"
	frame_2_141.counterAxisSizingMode = "AUTO"
	frame_2_141.itemSpacing = 2


	// Create TEXT
	const text_2_142 = figma.createText()
	frame_2_141.appendChild(text_2_142)
	text_2_142.resize(130.0000000000, 22.0000000000)
	text_2_142.name = "Last updated on"
	text_2_142.locked = true
	text_2_142.fills = [{"type":"SOLID","visible":true,"opacity":0.800000011920929,"blendMode":"NORMAL","color":{"r":0,"g":0,"b":0}}]
	text_2_142.autoRename = false

	// Font properties
	text_2_142.fontName = {
		family: "Open Sans",
		style: "Regular"
	}
		text_2_142.listSpacing = 0
	text_2_142.characters = "Last updated on:"
	text_2_142.fontSize = 16
	text_2_142.fontName = {"family":"Open Sans","style":"Regular"}
	text_2_142.textAutoResize = "HEIGHT"


	// Create TEXT
	const text_2_143 = figma.createText()
	frame_2_141.appendChild(text_2_143)
	text_2_143.resize(85.0000000000, 22.0000000000)
	text_2_143.name = "timeStamp"
	text_2_143.fills = [{"type":"SOLID","visible":true,"opacity":0.800000011920929,"blendMode":"NORMAL","color":{"r":0,"g":0,"b":0}}]
	text_2_143.relativeTransform = [[1,0,132],[0,1,0]]
	text_2_143.x = 132
	text_2_143.autoRename = false

	// Font properties
	text_2_143.fontName = {
		family: "Open Sans",
		style: "SemiBold"
	}
		text_2_143.listSpacing = 0
	text_2_143.characters = "DATE_TIME"
	text_2_143.fontSize = 16
	text_2_143.fontName = {"family":"Open Sans","style":"SemiBold"}
	text_2_143.textAutoResize = "WIDTH_AND_HEIGHT"


	// Create FRAME
	const frame_2_144 = figma.createFrame()
	frame_2_140.appendChild(frame_2_144)
	frame_2_144.resize(172.0000000000, 22.0000000000)
	frame_2_144.primaryAxisSizingMode = "AUTO"
	frame_2_144.counterAxisSizingMode = "AUTO"
	frame_2_144.name = "Updated By"
	frame_2_144.relativeTransform = [[1,0,0],[0,1,22]]
	frame_2_144.y = 22
	frame_2_144.fills = []
	frame_2_144.strokeTopWeight = 1
	frame_2_144.strokeBottomWeight = 1
	frame_2_144.strokeLeftWeight = 1
	frame_2_144.strokeRightWeight = 1
	frame_2_144.backgrounds = []
	frame_2_144.clipsContent = false
	frame_2_144.layoutMode = "HORIZONTAL"
	frame_2_144.counterAxisSizingMode = "AUTO"
	frame_2_144.itemSpacing = 2


	// Create TEXT
	const text_2_145 = figma.createText()
	frame_2_144.appendChild(text_2_145)
	text_2_145.resize(130.0000000000, 22.0000000000)
	text_2_145.name = "Last updated by"
	text_2_145.locked = true
	text_2_145.fills = [{"type":"SOLID","visible":true,"opacity":0.800000011920929,"blendMode":"NORMAL","color":{"r":0,"g":0,"b":0}}]
	text_2_145.autoRename = false

	// Font properties
	text_2_145.fontName = {
		family: "Open Sans",
		style: "Regular"
	}
		text_2_145.listSpacing = 0
	text_2_145.characters = "Last updated by:"
	text_2_145.fontSize = 16
	text_2_145.fontName = {"family":"Open Sans","style":"Regular"}
	text_2_145.textAutoResize = "HEIGHT"


	// Create TEXT
	const text_2_146 = figma.createText()
	frame_2_144.appendChild(text_2_146)
	text_2_146.resize(40.0000000000, 22.0000000000)
	text_2_146.name = "user"
	text_2_146.fills = [{"type":"SOLID","visible":true,"opacity":0.800000011920929,"blendMode":"NORMAL","color":{"r":0,"g":0,"b":0}}]
	text_2_146.relativeTransform = [[1,0,132],[0,1,0]]
	text_2_146.x = 132
	text_2_146.autoRename = false

	// Font properties
	text_2_146.fontName = {
		family: "Open Sans",
		style: "SemiBold"
	}
		text_2_146.listSpacing = 0
	text_2_146.characters = "USER"
	text_2_146.fontSize = 16
	text_2_146.fontName = {"family":"Open Sans","style":"SemiBold"}
	text_2_146.textAutoResize = "WIDTH_AND_HEIGHT"


	// Create TEXT
	const text_2_76 = figma.createText()
	component_2_69.appendChild(text_2_76)
	text_2_76.resize(520.0000000000, 272.0000000000)
	text_2_76.name = "Content 1"
	text_2_76.relativeTransform = [[1,0,40],[0,1,212]]
	text_2_76.x = 40
	text_2_76.y = 212
	text_2_76.layoutAlign = "STRETCH"
	text_2_76.autoRename = false

	// Font properties
	text_2_76.fontName = {
		family: "Open Sans",
		style: "Regular"
	}
		text_2_76.listSpacing = 0
	text_2_76.characters = "Suspendisse eu luctus elit. Maecenas lobortis at est vitae bibendum. Nunc mattis posuere urna, eu ullamcorper quam condimentum quis. Sed efficitur blandit condimentum. Aliquam nec rutrum lorem, ut suscipit lorem. Suspendisse at nulla vel ligula congue ornare. Aenean non quam a urna luctus ullamcorper."
	text_2_76.fontSize = 25
	text_2_76.fontName = {"family":"Open Sans","style":"Regular"}
	text_2_76.textAutoResize = "HEIGHT"


	// Create TEXT
	const text_2_77 = figma.createText()
	component_2_69.appendChild(text_2_77)
	text_2_77.resize(520.0000000000, 272.0000000000)
	text_2_77.name = "Content 2"
	text_2_77.relativeTransform = [[1,0,40],[0,1,494]]
	text_2_77.x = 40
	text_2_77.y = 494
	text_2_77.layoutAlign = "STRETCH"
	text_2_77.autoRename = false

	// Font properties
	text_2_77.fontName = {
		family: "Open Sans",
		style: "Regular"
	}
		text_2_77.listSpacing = 0
	text_2_77.characters = "Suspendisse eu luctus elit. Maecenas lobortis at est vitae bibendum. Nunc mattis posuere urna, eu ullamcorper quam condimentum quis. Sed efficitur blandit condimentum. Aliquam nec rutrum lorem, ut suscipit lorem. Suspendisse at nulla vel ligula congue ornare. Aenean non quam a urna luctus ullamcorper."
	text_2_77.fontSize = 25
	text_2_77.fontName = {"family":"Open Sans","style":"Regular"}
	text_2_77.textAutoResize = "HEIGHT"


	// Create COMPONENT
	const component_2_78 = figma.createComponent()
	component_2_78.resize(600.0000000000, 806.0000000000)
	component_2_78.primaryAxisSizingMode = "AUTO"
	component_2_78.name = "Type=Discussion"
	component_2_78.relativeTransform = [[1,0,762],[0,1,2569]]
	component_2_78.x = 762
	component_2_78.y = 2569
	component_2_78.fills = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":1,"g":1,"b":1}}]
	component_2_78.strokes = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":1,"g":0.6000000238418579,"b":0}}]
	component_2_78.strokeWeight = 7.5
	component_2_78.strokeAlign = "CENTER"
	component_2_78.cornerRadius = 4
	component_2_78.paddingLeft = 40
	component_2_78.paddingRight = 40
	component_2_78.paddingTop = 40
	component_2_78.paddingBottom = 40
	component_2_78.strokeTopWeight = 7.5
	component_2_78.strokeBottomWeight = 7.5
	component_2_78.strokeLeftWeight = 7.5
	component_2_78.strokeRightWeight = 7.5
	component_2_78.backgrounds = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":1,"g":1,"b":1}}]
	component_2_78.clipsContent = true
	component_2_78.expanded = false
	component_2_78.layoutMode = "VERTICAL"
	component_2_78.itemSpacing = 10
	component_2_78.description = "For use when annotating a design file"


	// Create FRAME
	const frame_2_79 = figma.createFrame()
	component_2_78.appendChild(frame_2_79)
	frame_2_79.resize(354.0000000000, 44.0000000000)
	frame_2_79.primaryAxisSizingMode = "AUTO"
	frame_2_79.counterAxisSizingMode = "AUTO"
	frame_2_79.name = "Label"
	frame_2_79.relativeTransform = [[1,0,40],[0,1,40]]
	frame_2_79.x = 40
	frame_2_79.y = 40
	frame_2_79.fills = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":1,"g":0.6000000238418579,"b":0}}]
	frame_2_79.cornerRadius = 100
	frame_2_79.paddingLeft = 15
	frame_2_79.paddingRight = 15
	frame_2_79.paddingTop = 5
	frame_2_79.paddingBottom = 5
	frame_2_79.strokeTopWeight = 1
	frame_2_79.strokeBottomWeight = 1
	frame_2_79.strokeLeftWeight = 1
	frame_2_79.strokeRightWeight = 1
	frame_2_79.backgrounds = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":1,"g":0.6000000238418579,"b":0}}]
	frame_2_79.clipsContent = false
	frame_2_79.expanded = false
	frame_2_79.layoutMode = "HORIZONTAL"
	frame_2_79.counterAxisSizingMode = "AUTO"
	frame_2_79.itemSpacing = 10


	// Create TEXT
	const text_2_80 = figma.createText()
	frame_2_79.appendChild(text_2_80)
	text_2_80.resize(324.0000000000, 34.0000000000)
	text_2_80.name = "chip text"
	text_2_80.fills = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.18333333730697632,"g":0.18333333730697632,"b":0.18333333730697632}}]
	text_2_80.relativeTransform = [[1,0,15],[0,1,5]]
	text_2_80.x = 15
	text_2_80.y = 5
	text_2_80.autoRename = false

	// Font properties
	text_2_80.fontName = {
		family: "Open Sans",
		style: "Bold"
	}
		text_2_80.listSpacing = 0
	text_2_80.characters = "Meeting Note or Question"
	text_2_80.fontSize = 25
	text_2_80.fontName = {"family":"Open Sans","style":"Bold"}
	text_2_80.textAutoResize = "WIDTH_AND_HEIGHT"


	// Create TEXT
	const text_2_81 = figma.createText()
	component_2_78.appendChild(text_2_81)
	text_2_81.resize(520.0000000000, 54.0000000000)
	text_2_81.name = "Title"
	text_2_81.relativeTransform = [[1,0,40],[0,1,94]]
	text_2_81.x = 40
	text_2_81.y = 94
	text_2_81.layoutAlign = "STRETCH"
	text_2_81.autoRename = false

	// Font properties
	text_2_81.fontName = {
		family: "Open Sans",
		style: "SemiBold"
	}
		text_2_81.listSpacing = 0
	text_2_81.characters = "Title"
	text_2_81.fontSize = 40
	text_2_81.fontName = {"family":"Open Sans","style":"SemiBold"}
	text_2_81.textAutoResize = "HEIGHT"


	// Create FRAME
	const frame_2_147 = figma.createFrame()
	component_2_78.appendChild(frame_2_147)
	frame_2_147.resize(217.0000000000, 44.0000000000)
	frame_2_147.primaryAxisSizingMode = "AUTO"
	frame_2_147.counterAxisSizingMode = "AUTO"
	frame_2_147.name = "metadata"
	frame_2_147.relativeTransform = [[1,0,40],[0,1,158]]
	frame_2_147.x = 40
	frame_2_147.y = 158
	frame_2_147.fills = [{"type":"SOLID","visible":false,"opacity":1,"blendMode":"NORMAL","color":{"r":1,"g":1,"b":1}}]
	frame_2_147.strokeTopWeight = 1
	frame_2_147.strokeBottomWeight = 1
	frame_2_147.strokeLeftWeight = 1
	frame_2_147.strokeRightWeight = 1
	frame_2_147.backgrounds = [{"type":"SOLID","visible":false,"opacity":1,"blendMode":"NORMAL","color":{"r":1,"g":1,"b":1}}]
	frame_2_147.clipsContent = false
	frame_2_147.layoutMode = "VERTICAL"
	frame_2_147.counterAxisSizingMode = "AUTO"


	// Create FRAME
	const frame_2_148 = figma.createFrame()
	frame_2_147.appendChild(frame_2_148)
	frame_2_148.resize(217.0000000000, 22.0000000000)
	frame_2_148.primaryAxisSizingMode = "AUTO"
	frame_2_148.counterAxisSizingMode = "AUTO"
	frame_2_148.name = "Updated On"
	frame_2_148.fills = []
	frame_2_148.strokeTopWeight = 1
	frame_2_148.strokeBottomWeight = 1
	frame_2_148.strokeLeftWeight = 1
	frame_2_148.strokeRightWeight = 1
	frame_2_148.backgrounds = []
	frame_2_148.clipsContent = false
	frame_2_148.layoutMode = "HORIZONTAL"
	frame_2_148.counterAxisSizingMode = "AUTO"
	frame_2_148.itemSpacing = 2


	// Create TEXT
	const text_2_149 = figma.createText()
	frame_2_148.appendChild(text_2_149)
	text_2_149.resize(130.0000000000, 22.0000000000)
	text_2_149.name = "Last updated on"
	text_2_149.locked = true
	text_2_149.fills = [{"type":"SOLID","visible":true,"opacity":0.800000011920929,"blendMode":"NORMAL","color":{"r":0,"g":0,"b":0}}]
	text_2_149.autoRename = false

	// Font properties
	text_2_149.fontName = {
		family: "Open Sans",
		style: "Regular"
	}
		text_2_149.listSpacing = 0
	text_2_149.characters = "Last updated on:"
	text_2_149.fontSize = 16
	text_2_149.fontName = {"family":"Open Sans","style":"Regular"}
	text_2_149.textAutoResize = "HEIGHT"


	// Create TEXT
	const text_2_150 = figma.createText()
	frame_2_148.appendChild(text_2_150)
	text_2_150.resize(85.0000000000, 22.0000000000)
	text_2_150.name = "timeStamp"
	text_2_150.fills = [{"type":"SOLID","visible":true,"opacity":0.800000011920929,"blendMode":"NORMAL","color":{"r":0,"g":0,"b":0}}]
	text_2_150.relativeTransform = [[1,0,132],[0,1,0]]
	text_2_150.x = 132
	text_2_150.autoRename = false

	// Font properties
	text_2_150.fontName = {
		family: "Open Sans",
		style: "SemiBold"
	}
		text_2_150.listSpacing = 0
	text_2_150.characters = "DATE_TIME"
	text_2_150.fontSize = 16
	text_2_150.fontName = {"family":"Open Sans","style":"SemiBold"}
	text_2_150.textAutoResize = "WIDTH_AND_HEIGHT"


	// Create FRAME
	const frame_2_151 = figma.createFrame()
	frame_2_147.appendChild(frame_2_151)
	frame_2_151.resize(172.0000000000, 22.0000000000)
	frame_2_151.primaryAxisSizingMode = "AUTO"
	frame_2_151.counterAxisSizingMode = "AUTO"
	frame_2_151.name = "Updated By"
	frame_2_151.relativeTransform = [[1,0,0],[0,1,22]]
	frame_2_151.y = 22
	frame_2_151.fills = []
	frame_2_151.strokeTopWeight = 1
	frame_2_151.strokeBottomWeight = 1
	frame_2_151.strokeLeftWeight = 1
	frame_2_151.strokeRightWeight = 1
	frame_2_151.backgrounds = []
	frame_2_151.clipsContent = false
	frame_2_151.layoutMode = "HORIZONTAL"
	frame_2_151.counterAxisSizingMode = "AUTO"
	frame_2_151.itemSpacing = 2


	// Create TEXT
	const text_2_152 = figma.createText()
	frame_2_151.appendChild(text_2_152)
	text_2_152.resize(130.0000000000, 22.0000000000)
	text_2_152.name = "Last updated by"
	text_2_152.locked = true
	text_2_152.fills = [{"type":"SOLID","visible":true,"opacity":0.800000011920929,"blendMode":"NORMAL","color":{"r":0,"g":0,"b":0}}]
	text_2_152.autoRename = false

	// Font properties
	text_2_152.fontName = {
		family: "Open Sans",
		style: "Regular"
	}
		text_2_152.listSpacing = 0
	text_2_152.characters = "Last updated by:"
	text_2_152.fontSize = 16
	text_2_152.fontName = {"family":"Open Sans","style":"Regular"}
	text_2_152.textAutoResize = "HEIGHT"


	// Create TEXT
	const text_2_153 = figma.createText()
	frame_2_151.appendChild(text_2_153)
	text_2_153.resize(40.0000000000, 22.0000000000)
	text_2_153.name = "user"
	text_2_153.fills = [{"type":"SOLID","visible":true,"opacity":0.800000011920929,"blendMode":"NORMAL","color":{"r":0,"g":0,"b":0}}]
	text_2_153.relativeTransform = [[1,0,132],[0,1,0]]
	text_2_153.x = 132
	text_2_153.autoRename = false

	// Font properties
	text_2_153.fontName = {
		family: "Open Sans",
		style: "SemiBold"
	}
		text_2_153.listSpacing = 0
	text_2_153.characters = "USER"
	text_2_153.fontSize = 16
	text_2_153.fontName = {"family":"Open Sans","style":"SemiBold"}
	text_2_153.textAutoResize = "WIDTH_AND_HEIGHT"


	// Create TEXT
	const text_2_85 = figma.createText()
	component_2_78.appendChild(text_2_85)
	text_2_85.resize(520.0000000000, 272.0000000000)
	text_2_85.name = "Content 1"
	text_2_85.relativeTransform = [[1,0,40],[0,1,212]]
	text_2_85.x = 40
	text_2_85.y = 212
	text_2_85.layoutAlign = "STRETCH"
	text_2_85.autoRename = false

	// Font properties
	text_2_85.fontName = {
		family: "Open Sans",
		style: "Regular"
	}
		text_2_85.listSpacing = 0
	text_2_85.characters = "Suspendisse eu luctus elit. Maecenas lobortis at est vitae bibendum. Nunc mattis posuere urna, eu ullamcorper quam condimentum quis. Sed efficitur blandit condimentum. Aliquam nec rutrum lorem, ut suscipit lorem. Suspendisse at nulla vel ligula congue ornare. Aenean non quam a urna luctus ullamcorper."
	text_2_85.fontSize = 25
	text_2_85.fontName = {"family":"Open Sans","style":"Regular"}
	text_2_85.textAutoResize = "HEIGHT"


	// Create TEXT
	const text_2_86 = figma.createText()
	component_2_78.appendChild(text_2_86)
	text_2_86.resize(520.0000000000, 272.0000000000)
	text_2_86.name = "Content 2"
	text_2_86.relativeTransform = [[1,0,40],[0,1,494]]
	text_2_86.x = 40
	text_2_86.y = 494
	text_2_86.layoutAlign = "STRETCH"
	text_2_86.autoRename = false

	// Font properties
	text_2_86.fontName = {
		family: "Open Sans",
		style: "Regular"
	}
		text_2_86.listSpacing = 0
	text_2_86.characters = "Suspendisse eu luctus elit. Maecenas lobortis at est vitae bibendum. Nunc mattis posuere urna, eu ullamcorper quam condimentum quis. Sed efficitur blandit condimentum. Aliquam nec rutrum lorem, ut suscipit lorem. Suspendisse at nulla vel ligula congue ornare. Aenean non quam a urna luctus ullamcorper."
	text_2_86.fontSize = 25
	text_2_86.fontName = {"family":"Open Sans","style":"Regular"}
	text_2_86.textAutoResize = "HEIGHT"


	// Create COMPONENT
	const component_2_87 = figma.createComponent()
	component_2_87.resize(600.0000000000, 806.0000000000)
	component_2_87.primaryAxisSizingMode = "AUTO"
	component_2_87.name = "Type=In Process"
	component_2_87.relativeTransform = [[1,0,0],[0,1,848]]
	component_2_87.y = 848
	component_2_87.fills = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":1,"g":1,"b":1}}]
	component_2_87.strokes = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":1,"g":0,"b":0}}]
	component_2_87.strokeWeight = 7.5
	component_2_87.strokeAlign = "CENTER"
	component_2_87.cornerRadius = 4
	component_2_87.paddingLeft = 40
	component_2_87.paddingRight = 40
	component_2_87.paddingTop = 40
	component_2_87.paddingBottom = 40
	component_2_87.strokeTopWeight = 7.5
	component_2_87.strokeBottomWeight = 7.5
	component_2_87.strokeLeftWeight = 7.5
	component_2_87.strokeRightWeight = 7.5
	component_2_87.backgrounds = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":1,"g":1,"b":1}}]
	component_2_87.clipsContent = true
	component_2_87.expanded = false
	component_2_87.layoutMode = "VERTICAL"
	component_2_87.itemSpacing = 10
	component_2_87.description = "For use when annotating a design file"


	// Create FRAME
	const frame_2_88 = figma.createFrame()
	component_2_87.appendChild(frame_2_88)
	frame_2_88.resize(157.0000000000, 44.0000000000)
	frame_2_88.primaryAxisSizingMode = "AUTO"
	frame_2_88.counterAxisSizingMode = "AUTO"
	frame_2_88.name = "Label"
	frame_2_88.relativeTransform = [[1,0,40],[0,1,40]]
	frame_2_88.x = 40
	frame_2_88.y = 40
	frame_2_88.fills = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":1,"g":0,"b":0}}]
	frame_2_88.cornerRadius = 100
	frame_2_88.paddingLeft = 15
	frame_2_88.paddingRight = 15
	frame_2_88.paddingTop = 5
	frame_2_88.paddingBottom = 5
	frame_2_88.strokeTopWeight = 1
	frame_2_88.strokeBottomWeight = 1
	frame_2_88.strokeLeftWeight = 1
	frame_2_88.strokeRightWeight = 1
	frame_2_88.backgrounds = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":1,"g":0,"b":0}}]
	frame_2_88.clipsContent = false
	frame_2_88.expanded = false
	frame_2_88.layoutMode = "HORIZONTAL"
	frame_2_88.counterAxisSizingMode = "AUTO"
	frame_2_88.itemSpacing = 10


	// Create TEXT
	const text_2_89 = figma.createText()
	frame_2_88.appendChild(text_2_89)
	text_2_89.resize(127.0000000000, 34.0000000000)
	text_2_89.name = "chip text"
	text_2_89.fills = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":1,"g":1,"b":1}}]
	text_2_89.relativeTransform = [[1,0,15],[0,1,5]]
	text_2_89.x = 15
	text_2_89.y = 5
	text_2_89.autoRename = false

	// Font properties
	text_2_89.fontName = {
		family: "Open Sans",
		style: "Bold"
	}
		text_2_89.listSpacing = 0
	text_2_89.characters = "In Process"
	text_2_89.fontSize = 25
	text_2_89.fontName = {"family":"Open Sans","style":"Bold"}
	text_2_89.textAutoResize = "WIDTH_AND_HEIGHT"


	// Create TEXT
	const text_2_90 = figma.createText()
	component_2_87.appendChild(text_2_90)
	text_2_90.resize(520.0000000000, 54.0000000000)
	text_2_90.name = "Title"
	text_2_90.relativeTransform = [[1,0,40],[0,1,94]]
	text_2_90.x = 40
	text_2_90.y = 94
	text_2_90.layoutAlign = "STRETCH"
	text_2_90.autoRename = false

	// Font properties
	text_2_90.fontName = {
		family: "Open Sans",
		style: "SemiBold"
	}
		text_2_90.listSpacing = 0
	text_2_90.characters = "Title"
	text_2_90.fontSize = 40
	text_2_90.fontName = {"family":"Open Sans","style":"SemiBold"}
	text_2_90.textAutoResize = "HEIGHT"


	// Create FRAME
	const frame_2_126 = figma.createFrame()
	component_2_87.appendChild(frame_2_126)
	frame_2_126.resize(217.0000000000, 44.0000000000)
	frame_2_126.primaryAxisSizingMode = "AUTO"
	frame_2_126.counterAxisSizingMode = "AUTO"
	frame_2_126.name = "metadata"
	frame_2_126.relativeTransform = [[1,0,40],[0,1,158]]
	frame_2_126.x = 40
	frame_2_126.y = 158
	frame_2_126.fills = [{"type":"SOLID","visible":false,"opacity":1,"blendMode":"NORMAL","color":{"r":1,"g":1,"b":1}}]
	frame_2_126.strokeTopWeight = 1
	frame_2_126.strokeBottomWeight = 1
	frame_2_126.strokeLeftWeight = 1
	frame_2_126.strokeRightWeight = 1
	frame_2_126.backgrounds = [{"type":"SOLID","visible":false,"opacity":1,"blendMode":"NORMAL","color":{"r":1,"g":1,"b":1}}]
	frame_2_126.clipsContent = false
	frame_2_126.layoutMode = "VERTICAL"
	frame_2_126.counterAxisSizingMode = "AUTO"


	// Create FRAME
	const frame_2_127 = figma.createFrame()
	frame_2_126.appendChild(frame_2_127)
	frame_2_127.resize(217.0000000000, 22.0000000000)
	frame_2_127.primaryAxisSizingMode = "AUTO"
	frame_2_127.counterAxisSizingMode = "AUTO"
	frame_2_127.name = "Updated On"
	frame_2_127.fills = []
	frame_2_127.strokeTopWeight = 1
	frame_2_127.strokeBottomWeight = 1
	frame_2_127.strokeLeftWeight = 1
	frame_2_127.strokeRightWeight = 1
	frame_2_127.backgrounds = []
	frame_2_127.clipsContent = false
	frame_2_127.layoutMode = "HORIZONTAL"
	frame_2_127.counterAxisSizingMode = "AUTO"
	frame_2_127.itemSpacing = 2


	// Create TEXT
	const text_2_128 = figma.createText()
	frame_2_127.appendChild(text_2_128)
	text_2_128.resize(130.0000000000, 22.0000000000)
	text_2_128.name = "Last updated on"
	text_2_128.locked = true
	text_2_128.fills = [{"type":"SOLID","visible":true,"opacity":0.800000011920929,"blendMode":"NORMAL","color":{"r":0,"g":0,"b":0}}]
	text_2_128.autoRename = false

	// Font properties
	text_2_128.fontName = {
		family: "Open Sans",
		style: "Regular"
	}
		text_2_128.listSpacing = 0
	text_2_128.characters = "Last updated on:"
	text_2_128.fontSize = 16
	text_2_128.fontName = {"family":"Open Sans","style":"Regular"}
	text_2_128.textAutoResize = "HEIGHT"


	// Create TEXT
	const text_2_129 = figma.createText()
	frame_2_127.appendChild(text_2_129)
	text_2_129.resize(85.0000000000, 22.0000000000)
	text_2_129.name = "timeStamp"
	text_2_129.fills = [{"type":"SOLID","visible":true,"opacity":0.800000011920929,"blendMode":"NORMAL","color":{"r":0,"g":0,"b":0}}]
	text_2_129.relativeTransform = [[1,0,132],[0,1,0]]
	text_2_129.x = 132
	text_2_129.autoRename = false

	// Font properties
	text_2_129.fontName = {
		family: "Open Sans",
		style: "SemiBold"
	}
		text_2_129.listSpacing = 0
	text_2_129.characters = "DATE_TIME"
	text_2_129.fontSize = 16
	text_2_129.fontName = {"family":"Open Sans","style":"SemiBold"}
	text_2_129.textAutoResize = "WIDTH_AND_HEIGHT"


	// Create FRAME
	const frame_2_130 = figma.createFrame()
	frame_2_126.appendChild(frame_2_130)
	frame_2_130.resize(172.0000000000, 22.0000000000)
	frame_2_130.primaryAxisSizingMode = "AUTO"
	frame_2_130.counterAxisSizingMode = "AUTO"
	frame_2_130.name = "Updated By"
	frame_2_130.relativeTransform = [[1,0,0],[0,1,22]]
	frame_2_130.y = 22
	frame_2_130.fills = []
	frame_2_130.strokeTopWeight = 1
	frame_2_130.strokeBottomWeight = 1
	frame_2_130.strokeLeftWeight = 1
	frame_2_130.strokeRightWeight = 1
	frame_2_130.backgrounds = []
	frame_2_130.clipsContent = false
	frame_2_130.layoutMode = "HORIZONTAL"
	frame_2_130.counterAxisSizingMode = "AUTO"
	frame_2_130.itemSpacing = 2


	// Create TEXT
	const text_2_131 = figma.createText()
	frame_2_130.appendChild(text_2_131)
	text_2_131.resize(130.0000000000, 22.0000000000)
	text_2_131.name = "Last updated by"
	text_2_131.locked = true
	text_2_131.fills = [{"type":"SOLID","visible":true,"opacity":0.800000011920929,"blendMode":"NORMAL","color":{"r":0,"g":0,"b":0}}]
	text_2_131.autoRename = false

	// Font properties
	text_2_131.fontName = {
		family: "Open Sans",
		style: "Regular"
	}
		text_2_131.listSpacing = 0
	text_2_131.characters = "Last updated by:"
	text_2_131.fontSize = 16
	text_2_131.fontName = {"family":"Open Sans","style":"Regular"}
	text_2_131.textAutoResize = "HEIGHT"


	// Create TEXT
	const text_2_132 = figma.createText()
	frame_2_130.appendChild(text_2_132)
	text_2_132.resize(40.0000000000, 22.0000000000)
	text_2_132.name = "user"
	text_2_132.fills = [{"type":"SOLID","visible":true,"opacity":0.800000011920929,"blendMode":"NORMAL","color":{"r":0,"g":0,"b":0}}]
	text_2_132.relativeTransform = [[1,0,132],[0,1,0]]
	text_2_132.x = 132
	text_2_132.autoRename = false

	// Font properties
	text_2_132.fontName = {
		family: "Open Sans",
		style: "SemiBold"
	}
		text_2_132.listSpacing = 0
	text_2_132.characters = "USER"
	text_2_132.fontSize = 16
	text_2_132.fontName = {"family":"Open Sans","style":"SemiBold"}
	text_2_132.textAutoResize = "WIDTH_AND_HEIGHT"


	// Create TEXT
	const text_2_94 = figma.createText()
	component_2_87.appendChild(text_2_94)
	text_2_94.resize(520.0000000000, 272.0000000000)
	text_2_94.name = "Content 1"
	text_2_94.relativeTransform = [[1,0,40],[0,1,212]]
	text_2_94.x = 40
	text_2_94.y = 212
	text_2_94.layoutAlign = "STRETCH"
	text_2_94.autoRename = false

	// Font properties
	text_2_94.fontName = {
		family: "Open Sans",
		style: "Regular"
	}
		text_2_94.listSpacing = 0
	text_2_94.characters = "Suspendisse eu luctus elit. Maecenas lobortis at est vitae bibendum. Nunc mattis posuere urna, eu ullamcorper quam condimentum quis. Sed efficitur blandit condimentum. Aliquam nec rutrum lorem, ut suscipit lorem. Suspendisse at nulla vel ligula congue ornare. Aenean non quam a urna luctus ullamcorper."
	text_2_94.fontSize = 25
	text_2_94.fontName = {"family":"Open Sans","style":"Regular"}
	text_2_94.textAutoResize = "HEIGHT"


	// Create TEXT
	const text_2_95 = figma.createText()
	component_2_87.appendChild(text_2_95)
	text_2_95.resize(520.0000000000, 272.0000000000)
	text_2_95.name = "Content 2"
	text_2_95.relativeTransform = [[1,0,40],[0,1,494]]
	text_2_95.x = 40
	text_2_95.y = 494
	text_2_95.layoutAlign = "STRETCH"
	text_2_95.autoRename = false

	// Font properties
	text_2_95.fontName = {
		family: "Open Sans",
		style: "Regular"
	}
		text_2_95.listSpacing = 0
	text_2_95.characters = "Suspendisse eu luctus elit. Maecenas lobortis at est vitae bibendum. Nunc mattis posuere urna, eu ullamcorper quam condimentum quis. Sed efficitur blandit condimentum. Aliquam nec rutrum lorem, ut suscipit lorem. Suspendisse at nulla vel ligula congue ornare. Aenean non quam a urna luctus ullamcorper."
	text_2_95.fontSize = 25
	text_2_95.fontName = {"family":"Open Sans","style":"Regular"}
	text_2_95.textAutoResize = "HEIGHT"


	// Create COMPONENT
	const component_2_96 = figma.createComponent()
	component_2_96.resize(600.0000000000, 806.0000000000)
	component_2_96.primaryAxisSizingMode = "AUTO"
	component_2_96.name = "Type=General"
	component_2_96.relativeTransform = [[1,0,0],[0,1,1721]]
	component_2_96.y = 1721
	component_2_96.fills = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":1,"g":1,"b":1}}]
	component_2_96.strokes = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0,"g":0,"b":0}}]
	component_2_96.strokeWeight = 7.5
	component_2_96.strokeAlign = "CENTER"
	component_2_96.cornerRadius = 4
	component_2_96.paddingLeft = 40
	component_2_96.paddingRight = 40
	component_2_96.paddingTop = 40
	component_2_96.paddingBottom = 40
	component_2_96.strokeTopWeight = 7.5
	component_2_96.strokeBottomWeight = 7.5
	component_2_96.strokeLeftWeight = 7.5
	component_2_96.strokeRightWeight = 7.5
	component_2_96.backgrounds = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":1,"g":1,"b":1}}]
	component_2_96.clipsContent = true
	component_2_96.expanded = false
	component_2_96.layoutMode = "VERTICAL"
	component_2_96.itemSpacing = 10
	component_2_96.description = "For use when annotating a design file"


	// Create FRAME
	const frame_2_97 = figma.createFrame()
	component_2_96.appendChild(frame_2_97)
	frame_2_97.resize(197.0000000000, 44.0000000000)
	frame_2_97.primaryAxisSizingMode = "AUTO"
	frame_2_97.counterAxisSizingMode = "AUTO"
	frame_2_97.name = "Label"
	frame_2_97.relativeTransform = [[1,0,40],[0,1,40]]
	frame_2_97.x = 40
	frame_2_97.y = 40
	frame_2_97.fills = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0,"g":0,"b":0}}]
	frame_2_97.cornerRadius = 100
	frame_2_97.paddingLeft = 15
	frame_2_97.paddingRight = 15
	frame_2_97.paddingTop = 5
	frame_2_97.paddingBottom = 5
	frame_2_97.strokeTopWeight = 1
	frame_2_97.strokeBottomWeight = 1
	frame_2_97.strokeLeftWeight = 1
	frame_2_97.strokeRightWeight = 1
	frame_2_97.backgrounds = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0,"g":0,"b":0}}]
	frame_2_97.clipsContent = false
	frame_2_97.expanded = false
	frame_2_97.layoutMode = "HORIZONTAL"
	frame_2_97.counterAxisSizingMode = "AUTO"
	frame_2_97.itemSpacing = 10


	// Create TEXT
	const text_2_98 = figma.createText()
	frame_2_97.appendChild(text_2_98)
	text_2_98.resize(167.0000000000, 34.0000000000)
	text_2_98.name = "chip text"
	text_2_98.fills = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":1,"g":1,"b":1}}]
	text_2_98.relativeTransform = [[1,0,15],[0,1,5]]
	text_2_98.x = 15
	text_2_98.y = 5
	text_2_98.autoRename = false

	// Font properties
	text_2_98.fontName = {
		family: "Open Sans",
		style: "Bold"
	}
		text_2_98.listSpacing = 0
	text_2_98.characters = "General Note"
	text_2_98.fontSize = 25
	text_2_98.fontName = {"family":"Open Sans","style":"Bold"}
	text_2_98.textAutoResize = "WIDTH_AND_HEIGHT"


	// Create TEXT
	const text_2_99 = figma.createText()
	component_2_96.appendChild(text_2_99)
	text_2_99.resize(520.0000000000, 54.0000000000)
	text_2_99.name = "Title"
	text_2_99.relativeTransform = [[1,0,40],[0,1,94]]
	text_2_99.x = 40
	text_2_99.y = 94
	text_2_99.layoutAlign = "STRETCH"
	text_2_99.autoRename = false

	// Font properties
	text_2_99.fontName = {
		family: "Open Sans",
		style: "SemiBold"
	}
		text_2_99.listSpacing = 0
	text_2_99.characters = "Title"
	text_2_99.fontSize = 40
	text_2_99.fontName = {"family":"Open Sans","style":"SemiBold"}
	text_2_99.textAutoResize = "HEIGHT"


	// Create FRAME
	const frame_2_133 = figma.createFrame()
	component_2_96.appendChild(frame_2_133)
	frame_2_133.resize(217.0000000000, 44.0000000000)
	frame_2_133.primaryAxisSizingMode = "AUTO"
	frame_2_133.counterAxisSizingMode = "AUTO"
	frame_2_133.name = "metadata"
	frame_2_133.relativeTransform = [[1,0,40],[0,1,158]]
	frame_2_133.x = 40
	frame_2_133.y = 158
	frame_2_133.fills = [{"type":"SOLID","visible":false,"opacity":1,"blendMode":"NORMAL","color":{"r":1,"g":1,"b":1}}]
	frame_2_133.strokeTopWeight = 1
	frame_2_133.strokeBottomWeight = 1
	frame_2_133.strokeLeftWeight = 1
	frame_2_133.strokeRightWeight = 1
	frame_2_133.backgrounds = [{"type":"SOLID","visible":false,"opacity":1,"blendMode":"NORMAL","color":{"r":1,"g":1,"b":1}}]
	frame_2_133.clipsContent = false
	frame_2_133.layoutMode = "VERTICAL"
	frame_2_133.counterAxisSizingMode = "AUTO"


	// Create FRAME
	const frame_2_134 = figma.createFrame()
	frame_2_133.appendChild(frame_2_134)
	frame_2_134.resize(217.0000000000, 22.0000000000)
	frame_2_134.primaryAxisSizingMode = "AUTO"
	frame_2_134.counterAxisSizingMode = "AUTO"
	frame_2_134.name = "Updated On"
	frame_2_134.fills = []
	frame_2_134.strokeTopWeight = 1
	frame_2_134.strokeBottomWeight = 1
	frame_2_134.strokeLeftWeight = 1
	frame_2_134.strokeRightWeight = 1
	frame_2_134.backgrounds = []
	frame_2_134.clipsContent = false
	frame_2_134.layoutMode = "HORIZONTAL"
	frame_2_134.counterAxisSizingMode = "AUTO"
	frame_2_134.itemSpacing = 2


	// Create TEXT
	const text_2_135 = figma.createText()
	frame_2_134.appendChild(text_2_135)
	text_2_135.resize(130.0000000000, 22.0000000000)
	text_2_135.name = "Last updated on"
	text_2_135.locked = true
	text_2_135.fills = [{"type":"SOLID","visible":true,"opacity":0.800000011920929,"blendMode":"NORMAL","color":{"r":0,"g":0,"b":0}}]
	text_2_135.autoRename = false

	// Font properties
	text_2_135.fontName = {
		family: "Open Sans",
		style: "Regular"
	}
		text_2_135.listSpacing = 0
	text_2_135.characters = "Last updated on:"
	text_2_135.fontSize = 16
	text_2_135.fontName = {"family":"Open Sans","style":"Regular"}
	text_2_135.textAutoResize = "HEIGHT"


	// Create TEXT
	const text_2_136 = figma.createText()
	frame_2_134.appendChild(text_2_136)
	text_2_136.resize(85.0000000000, 22.0000000000)
	text_2_136.name = "timeStamp"
	text_2_136.fills = [{"type":"SOLID","visible":true,"opacity":0.800000011920929,"blendMode":"NORMAL","color":{"r":0,"g":0,"b":0}}]
	text_2_136.relativeTransform = [[1,0,132],[0,1,0]]
	text_2_136.x = 132
	text_2_136.autoRename = false

	// Font properties
	text_2_136.fontName = {
		family: "Open Sans",
		style: "SemiBold"
	}
		text_2_136.listSpacing = 0
	text_2_136.characters = "DATE_TIME"
	text_2_136.fontSize = 16
	text_2_136.fontName = {"family":"Open Sans","style":"SemiBold"}
	text_2_136.textAutoResize = "WIDTH_AND_HEIGHT"


	// Create FRAME
	const frame_2_137 = figma.createFrame()
	frame_2_133.appendChild(frame_2_137)
	frame_2_137.resize(172.0000000000, 22.0000000000)
	frame_2_137.primaryAxisSizingMode = "AUTO"
	frame_2_137.counterAxisSizingMode = "AUTO"
	frame_2_137.name = "Updated By"
	frame_2_137.relativeTransform = [[1,0,0],[0,1,22]]
	frame_2_137.y = 22
	frame_2_137.fills = []
	frame_2_137.strokeTopWeight = 1
	frame_2_137.strokeBottomWeight = 1
	frame_2_137.strokeLeftWeight = 1
	frame_2_137.strokeRightWeight = 1
	frame_2_137.backgrounds = []
	frame_2_137.clipsContent = false
	frame_2_137.layoutMode = "HORIZONTAL"
	frame_2_137.counterAxisSizingMode = "AUTO"
	frame_2_137.itemSpacing = 2


	// Create TEXT
	const text_2_138 = figma.createText()
	frame_2_137.appendChild(text_2_138)
	text_2_138.resize(130.0000000000, 22.0000000000)
	text_2_138.name = "Last updated by"
	text_2_138.locked = true
	text_2_138.fills = [{"type":"SOLID","visible":true,"opacity":0.800000011920929,"blendMode":"NORMAL","color":{"r":0,"g":0,"b":0}}]
	text_2_138.autoRename = false

	// Font properties
	text_2_138.fontName = {
		family: "Open Sans",
		style: "Regular"
	}
		text_2_138.listSpacing = 0
	text_2_138.characters = "Last updated by:"
	text_2_138.fontSize = 16
	text_2_138.fontName = {"family":"Open Sans","style":"Regular"}
	text_2_138.textAutoResize = "HEIGHT"


	// Create TEXT
	const text_2_139 = figma.createText()
	frame_2_137.appendChild(text_2_139)
	text_2_139.resize(40.0000000000, 22.0000000000)
	text_2_139.name = "user"
	text_2_139.fills = [{"type":"SOLID","visible":true,"opacity":0.800000011920929,"blendMode":"NORMAL","color":{"r":0,"g":0,"b":0}}]
	text_2_139.relativeTransform = [[1,0,132],[0,1,0]]
	text_2_139.x = 132
	text_2_139.autoRename = false

	// Font properties
	text_2_139.fontName = {
		family: "Open Sans",
		style: "SemiBold"
	}
		text_2_139.listSpacing = 0
	text_2_139.characters = "USER"
	text_2_139.fontSize = 16
	text_2_139.fontName = {"family":"Open Sans","style":"SemiBold"}
	text_2_139.textAutoResize = "WIDTH_AND_HEIGHT"


	// Create TEXT
	const text_2_103 = figma.createText()
	component_2_96.appendChild(text_2_103)
	text_2_103.resize(520.0000000000, 272.0000000000)
	text_2_103.name = "Content 1"
	text_2_103.relativeTransform = [[1,0,40],[0,1,212]]
	text_2_103.x = 40
	text_2_103.y = 212
	text_2_103.layoutAlign = "STRETCH"
	text_2_103.autoRename = false

	// Font properties
	text_2_103.fontName = {
		family: "Open Sans",
		style: "Regular"
	}
		text_2_103.listSpacing = 0
	text_2_103.characters = "Suspendisse eu luctus elit. Maecenas lobortis at est vitae bibendum. Nunc mattis posuere urna, eu ullamcorper quam condimentum quis. Sed efficitur blandit condimentum. Aliquam nec rutrum lorem, ut suscipit lorem. Suspendisse at nulla vel ligula congue ornare. Aenean non quam a urna luctus ullamcorper."
	text_2_103.fontSize = 25
	text_2_103.fontName = {"family":"Open Sans","style":"Regular"}
	text_2_103.textAutoResize = "HEIGHT"


	// Create TEXT
	const text_2_104 = figma.createText()
	component_2_96.appendChild(text_2_104)
	text_2_104.resize(520.0000000000, 272.0000000000)
	text_2_104.name = "Content 2"
	text_2_104.relativeTransform = [[1,0,40],[0,1,494]]
	text_2_104.x = 40
	text_2_104.y = 494
	text_2_104.layoutAlign = "STRETCH"
	text_2_104.autoRename = false

	// Font properties
	text_2_104.fontName = {
		family: "Open Sans",
		style: "Regular"
	}
		text_2_104.listSpacing = 0
	text_2_104.characters = "Suspendisse eu luctus elit. Maecenas lobortis at est vitae bibendum. Nunc mattis posuere urna, eu ullamcorper quam condimentum quis. Sed efficitur blandit condimentum. Aliquam nec rutrum lorem, ut suscipit lorem. Suspendisse at nulla vel ligula congue ornare. Aenean non quam a urna luctus ullamcorper."
	text_2_104.fontSize = 25
	text_2_104.fontName = {"family":"Open Sans","style":"Regular"}
	text_2_104.textAutoResize = "HEIGHT"


	// Create COMPONENT_SET
	const componentSet_2_105 = figma.combineAsVariants([component_2_60, component_2_69, component_2_78, component_2_87, component_2_96], figma.currentPage)
	componentSet_2_105.resize(1737.0000000000, 3603.0000000000)
	componentSet_2_105.primaryAxisSizingMode = "AUTO"
	componentSet_2_105.name = "Document Notes"
	componentSet_2_105.visible = true
	componentSet_2_105.locked = false
	componentSet_2_105.opacity = 1
	componentSet_2_105.blendMode = "PASS_THROUGH"
	componentSet_2_105.isMask = false
	componentSet_2_105.effects = []
	componentSet_2_105.relativeTransform = [[1,0,-3176],[0,1,-235]]
	componentSet_2_105.x = -3176
	componentSet_2_105.y = -235
	componentSet_2_105.rotation = 0
	componentSet_2_105.layoutAlign = "INHERIT"
	componentSet_2_105.constrainProportions = false
	componentSet_2_105.layoutGrow = 0
	componentSet_2_105.layoutPositioning = "AUTO"
	componentSet_2_105.exportSettings = []
	componentSet_2_105.fills = []
	componentSet_2_105.strokes = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.48235294222831726,"g":0.3803921639919281,"b":1}}]
	componentSet_2_105.strokeWeight = 1
	componentSet_2_105.strokeAlign = "INSIDE"
	componentSet_2_105.strokeJoin = "MITER"
	componentSet_2_105.dashPattern = [10,5]
	componentSet_2_105.strokeCap = "NONE"
	componentSet_2_105.strokeMiterLimit = 4
	componentSet_2_105.cornerRadius = 5
	componentSet_2_105.cornerSmoothing = 0
	componentSet_2_105.paddingLeft = 0
	componentSet_2_105.paddingRight = 0
	componentSet_2_105.paddingTop = 0
	componentSet_2_105.paddingBottom = 0
	componentSet_2_105.primaryAxisAlignItems = "MIN"
	componentSet_2_105.counterAxisAlignItems = "MIN"
	componentSet_2_105.primaryAxisSizingMode = "AUTO"
	componentSet_2_105.strokeTopWeight = 1
	componentSet_2_105.strokeBottomWeight = 1
	componentSet_2_105.strokeLeftWeight = 1
	componentSet_2_105.strokeRightWeight = 1
	componentSet_2_105.layoutGrids = []
	componentSet_2_105.backgrounds = []
	componentSet_2_105.clipsContent = true
	componentSet_2_105.guides = []
	componentSet_2_105.expanded = true
	componentSet_2_105.constraints = {"horizontal":"MIN","vertical":"MIN"}
	componentSet_2_105.layoutMode = "NONE"
	componentSet_2_105.counterAxisSizingMode = "FIXED"
	componentSet_2_105.itemSpacing = 0
	componentSet_2_105.overflowDirection = "NONE"
	componentSet_2_105.numberOfFixedChildren = 0
	componentSet_2_105.overlayPositionType = "CENTER"
	componentSet_2_105.overlayBackground = {"type":"NONE"}
	componentSet_2_105.overlayBackgroundInteraction = "NONE"
	componentSet_2_105.itemReverseZIndex = false
	componentSet_2_105.strokesIncludedInLayout = false
	componentSet_2_105.description = ""
	componentSet_2_105.documentationLinks = []
}



// const componentPage = figma.createPage()
// componentPage.name = "Annotation Component"
// const currentPage = figma.currentPage
// figma.currentPage = componentPage
// createAnnotationComponent().finally(() => {
//   figma.currentPage = currentPage
//   figma.closePlugin();
// })

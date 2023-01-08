const createAnnotation = async () => {

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

  // const componentPage = figma.createPage()
  // componentPage.name = "Annotation component"

	// Create COMPONENT
	var component_18_3 = figma.createComponent()
	component_18_3.resize(600.0000000000, 806.0000000000)
	component_18_3.primaryAxisSizingMode = "AUTO"
	component_18_3.name = "Type=Developer"
	component_18_3.relativeTransform = [[1,0,20],[0,1,20]]
	component_18_3.x = 20
	component_18_3.y = 20
	component_18_3.fills = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":1,"g":1,"b":1}}]
	component_18_3.strokes = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.9800000190734863,"g":0,"b":1}}]
	component_18_3.strokeWeight = 7.5
	component_18_3.strokeAlign = "CENTER"
	component_18_3.cornerRadius = 4
	component_18_3.paddingLeft = 40
	component_18_3.paddingRight = 40
	component_18_3.paddingTop = 40
	component_18_3.paddingBottom = 40
	component_18_3.strokeTopWeight = 7.5
	component_18_3.strokeBottomWeight = 7.5
	component_18_3.strokeLeftWeight = 7.5
	component_18_3.strokeRightWeight = 7.5
	component_18_3.backgrounds = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":1,"g":1,"b":1}}]
	component_18_3.clipsContent = true
	component_18_3.expanded = false
	component_18_3.layoutMode = "VERTICAL"
	component_18_3.itemSpacing = 10
	component_18_3.description = "For use when annotating a design file"


	// Create FRAME
	var frame_18_4 = figma.createFrame()
	component_18_3.appendChild(frame_18_4)
	frame_18_4.resize(226.0000000000, 44.0000000000)
	frame_18_4.primaryAxisSizingMode = "AUTO"
	frame_18_4.counterAxisSizingMode = "AUTO"
	frame_18_4.name = "Label"
	frame_18_4.relativeTransform = [[1,0,40],[0,1,40]]
	frame_18_4.x = 40
	frame_18_4.y = 40
	frame_18_4.fills = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.9800000190734863,"g":0,"b":1}}]
	frame_18_4.cornerRadius = 100
	frame_18_4.paddingLeft = 15
	frame_18_4.paddingRight = 15
	frame_18_4.paddingTop = 5
	frame_18_4.paddingBottom = 5
	frame_18_4.strokeTopWeight = 1
	frame_18_4.strokeBottomWeight = 1
	frame_18_4.strokeLeftWeight = 1
	frame_18_4.strokeRightWeight = 1
	frame_18_4.backgrounds = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.9800000190734863,"g":0,"b":1}}]
	frame_18_4.clipsContent = false
	frame_18_4.expanded = false
	frame_18_4.layoutMode = "HORIZONTAL"
	frame_18_4.counterAxisSizingMode = "AUTO"
	frame_18_4.itemSpacing = 10


	// Create TEXT
	var text_18_5 = figma.createText()
	frame_18_4.appendChild(text_18_5)
	text_18_5.resize(196.0000000000, 34.0000000000)
	text_18_5.name = "chip text"
	text_18_5.fills = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":1,"g":1,"b":1}}]
	text_18_5.relativeTransform = [[1,0,15],[0,1,5]]
	text_18_5.x = 15
	text_18_5.y = 5
	text_18_5.autoRename = false

	// Font properties
	text_18_5.fontName = {
		family: "Open Sans",
		style: "Bold"
	}
		text_18_5.listSpacing = 0
	text_18_5.characters = "Developer Note"
	text_18_5.fontSize = 25
	text_18_5.fontName = {"family":"Open Sans","style":"Bold"}
	text_18_5.textAutoResize = "WIDTH_AND_HEIGHT"


	// Create TEXT
	var text_18_6 = figma.createText()
	component_18_3.appendChild(text_18_6)
	text_18_6.resize(520.0000000000, 54.0000000000)
	text_18_6.name = "Title"
	text_18_6.relativeTransform = [[1,0,40],[0,1,94]]
	text_18_6.x = 40
	text_18_6.y = 94
	text_18_6.layoutAlign = "STRETCH"

	// Font properties
	text_18_6.fontName = {
		family: "Open Sans",
		style: "SemiBold"
	}
		text_18_6.listSpacing = 0
	text_18_6.characters = "Title"
	text_18_6.fontSize = 40
	text_18_6.fontName = {"family":"Open Sans","style":"SemiBold"}
	text_18_6.textAutoResize = "HEIGHT"


	// Create FRAME
	var frame_18_7 = figma.createFrame()
	component_18_3.appendChild(frame_18_7)
	frame_18_7.resize(122.0000000000, 44.0000000000)
	frame_18_7.primaryAxisSizingMode = "AUTO"
	frame_18_7.counterAxisSizingMode = "AUTO"
	frame_18_7.name = "metadata"
	frame_18_7.relativeTransform = [[1,0,40],[0,1,158]]
	frame_18_7.x = 40
	frame_18_7.y = 158
	frame_18_7.fills = [{"type":"SOLID","visible":false,"opacity":1,"blendMode":"NORMAL","color":{"r":1,"g":1,"b":1}}]
	frame_18_7.strokeTopWeight = 1
	frame_18_7.strokeBottomWeight = 1
	frame_18_7.strokeLeftWeight = 1
	frame_18_7.strokeRightWeight = 1
	frame_18_7.backgrounds = [{"type":"SOLID","visible":false,"opacity":1,"blendMode":"NORMAL","color":{"r":1,"g":1,"b":1}}]
	frame_18_7.clipsContent = false
	frame_18_7.expanded = false
	frame_18_7.layoutMode = "VERTICAL"
	frame_18_7.counterAxisSizingMode = "AUTO"


	// Create TEXT
	var text_18_8 = figma.createText()
	frame_18_7.appendChild(text_18_8)
	text_18_8.resize(122.0000000000, 22.0000000000)
	text_18_8.name = "Last updated on"
	text_18_8.fills = [{"type":"SOLID","visible":true,"opacity":0.800000011920929,"blendMode":"NORMAL","color":{"r":0,"g":0,"b":0}}]

	// Font properties
	text_18_8.fontName = {
		family: "Open Sans",
		style: "Regular"
	}
		text_18_8.listSpacing = 0
	text_18_8.characters = "Last updated on"
	text_18_8.fontSize = 16
	text_18_8.fontName = {"family":"Open Sans","style":"Regular"}
	text_18_8.textAutoResize = "WIDTH_AND_HEIGHT"


	// Create TEXT
	var text_18_9 = figma.createText()
	frame_18_7.appendChild(text_18_9)
	text_18_9.resize(120.0000000000, 22.0000000000)
	text_18_9.name = "Last updated by"
	text_18_9.fills = [{"type":"SOLID","visible":true,"opacity":0.800000011920929,"blendMode":"NORMAL","color":{"r":0,"g":0,"b":0}}]
	text_18_9.relativeTransform = [[1,0,0],[0,1,22]]
	text_18_9.y = 22

	// Font properties
	text_18_9.fontName = {
		family: "Open Sans",
		style: "Regular"
	}
		text_18_9.listSpacing = 0
	text_18_9.characters = "Last updated by"
	text_18_9.fontSize = 16
	text_18_9.fontName = {"family":"Open Sans","style":"Regular"}
	text_18_9.textAutoResize = "WIDTH_AND_HEIGHT"


	// Create TEXT
	var text_18_10 = figma.createText()
	component_18_3.appendChild(text_18_10)
	text_18_10.resize(520.0000000000, 272.0000000000)
	text_18_10.name = "Content 1"
	text_18_10.relativeTransform = [[1,0,40],[0,1,212]]
	text_18_10.x = 40
	text_18_10.y = 212
	text_18_10.layoutAlign = "STRETCH"
	text_18_10.autoRename = false

	// Font properties
	text_18_10.fontName = {
		family: "Open Sans",
		style: "Regular"
	}
		text_18_10.listSpacing = 0
	text_18_10.characters = "Suspendisse eu luctus elit. Maecenas lobortis at est vitae bibendum. Nunc mattis posuere urna, eu ullamcorper quam condimentum quis. Sed efficitur blandit condimentum. Aliquam nec rutrum lorem, ut suscipit lorem. Suspendisse at nulla vel ligula congue ornare. Aenean non quam a urna luctus ullamcorper."
	text_18_10.fontSize = 25
	text_18_10.fontName = {"family":"Open Sans","style":"Regular"}
	text_18_10.textAutoResize = "HEIGHT"


	// Create TEXT
	var text_18_11 = figma.createText()
	component_18_3.appendChild(text_18_11)
	text_18_11.resize(520.0000000000, 272.0000000000)
	text_18_11.name = "Content 2"
	text_18_11.relativeTransform = [[1,0,40],[0,1,494]]
	text_18_11.x = 40
	text_18_11.y = 494
	text_18_11.layoutAlign = "STRETCH"
	text_18_11.autoRename = false

	// Font properties
	text_18_11.fontName = {
		family: "Open Sans",
		style: "Regular"
	}
		text_18_11.listSpacing = 0
	text_18_11.characters = "Suspendisse eu luctus elit. Maecenas lobortis at est vitae bibendum. Nunc mattis posuere urna, eu ullamcorper quam condimentum quis. Sed efficitur blandit condimentum. Aliquam nec rutrum lorem, ut suscipit lorem. Suspendisse at nulla vel ligula congue ornare. Aenean non quam a urna luctus ullamcorper."
	text_18_11.fontSize = 25
	text_18_11.fontName = {"family":"Open Sans","style":"Regular"}
	text_18_11.textAutoResize = "HEIGHT"


	// Create COMPONENT
	var component_18_12 = figma.createComponent()
	component_18_12.resize(600.0000000000, 806.0000000000)
	component_18_12.primaryAxisSizingMode = "AUTO"
	component_18_12.name = "Type=Reference"
	component_18_12.relativeTransform = [[1,0,20],[0,1,2589]]
	component_18_12.x = 20
	component_18_12.y = 2589
	component_18_12.fills = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":1,"g":1,"b":1}}]
	component_18_12.strokes = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0,"g":0.5199999809265137,"b":1}}]
	component_18_12.strokeWeight = 7.5
	component_18_12.strokeAlign = "CENTER"
	component_18_12.cornerRadius = 4
	component_18_12.paddingLeft = 40
	component_18_12.paddingRight = 40
	component_18_12.paddingTop = 40
	component_18_12.paddingBottom = 40
	component_18_12.strokeTopWeight = 7.5
	component_18_12.strokeBottomWeight = 7.5
	component_18_12.strokeLeftWeight = 7.5
	component_18_12.strokeRightWeight = 7.5
	component_18_12.backgrounds = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":1,"g":1,"b":1}}]
	component_18_12.clipsContent = true
	component_18_12.expanded = false
	component_18_12.layoutMode = "VERTICAL"
	component_18_12.itemSpacing = 10
	component_18_12.description = "For use when annotating a design file"


	// Create FRAME
	var frame_18_13 = figma.createFrame()
	component_18_12.appendChild(frame_18_13)
	frame_18_13.resize(156.0000000000, 44.0000000000)
	frame_18_13.primaryAxisSizingMode = "AUTO"
	frame_18_13.counterAxisSizingMode = "AUTO"
	frame_18_13.name = "Label"
	frame_18_13.relativeTransform = [[1,0,40],[0,1,40]]
	frame_18_13.x = 40
	frame_18_13.y = 40
	frame_18_13.fills = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0,"g":0.5199999809265137,"b":1}}]
	frame_18_13.cornerRadius = 100
	frame_18_13.paddingLeft = 15
	frame_18_13.paddingRight = 15
	frame_18_13.paddingTop = 5
	frame_18_13.paddingBottom = 5
	frame_18_13.strokeTopWeight = 1
	frame_18_13.strokeBottomWeight = 1
	frame_18_13.strokeLeftWeight = 1
	frame_18_13.strokeRightWeight = 1
	frame_18_13.backgrounds = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0,"g":0.5199999809265137,"b":1}}]
	frame_18_13.clipsContent = false
	frame_18_13.expanded = false
	frame_18_13.layoutMode = "HORIZONTAL"
	frame_18_13.counterAxisSizingMode = "AUTO"
	frame_18_13.itemSpacing = 10


	// Create TEXT
	var text_18_14 = figma.createText()
	frame_18_13.appendChild(text_18_14)
	text_18_14.resize(126.0000000000, 34.0000000000)
	text_18_14.name = "chip text"
	text_18_14.fills = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":1,"g":1,"b":1}}]
	text_18_14.relativeTransform = [[1,0,15],[0,1,5]]
	text_18_14.x = 15
	text_18_14.y = 5
	text_18_14.autoRename = false

	// Font properties
	text_18_14.fontName = {
		family: "Open Sans",
		style: "Bold"
	}
		text_18_14.listSpacing = 0
	text_18_14.characters = "Reference"
	text_18_14.fontSize = 25
	text_18_14.fontName = {"family":"Open Sans","style":"Bold"}
	text_18_14.textAutoResize = "WIDTH_AND_HEIGHT"


	// Create TEXT
	var text_18_15 = figma.createText()
	component_18_12.appendChild(text_18_15)
	text_18_15.resize(520.0000000000, 54.0000000000)
	text_18_15.name = "Title"
	text_18_15.relativeTransform = [[1,0,40],[0,1,94]]
	text_18_15.x = 40
	text_18_15.y = 94
	text_18_15.layoutAlign = "STRETCH"

	// Font properties
	text_18_15.fontName = {
		family: "Open Sans",
		style: "SemiBold"
	}
		text_18_15.listSpacing = 0
	text_18_15.characters = "Title"
	text_18_15.fontSize = 40
	text_18_15.fontName = {"family":"Open Sans","style":"SemiBold"}
	text_18_15.textAutoResize = "HEIGHT"


	// Create FRAME
	var frame_18_16 = figma.createFrame()
	component_18_12.appendChild(frame_18_16)
	frame_18_16.resize(122.0000000000, 44.0000000000)
	frame_18_16.primaryAxisSizingMode = "AUTO"
	frame_18_16.counterAxisSizingMode = "AUTO"
	frame_18_16.name = "metadata"
	frame_18_16.relativeTransform = [[1,0,40],[0,1,158]]
	frame_18_16.x = 40
	frame_18_16.y = 158
	frame_18_16.fills = [{"type":"SOLID","visible":false,"opacity":1,"blendMode":"NORMAL","color":{"r":1,"g":1,"b":1}}]
	frame_18_16.strokeTopWeight = 1
	frame_18_16.strokeBottomWeight = 1
	frame_18_16.strokeLeftWeight = 1
	frame_18_16.strokeRightWeight = 1
	frame_18_16.backgrounds = [{"type":"SOLID","visible":false,"opacity":1,"blendMode":"NORMAL","color":{"r":1,"g":1,"b":1}}]
	frame_18_16.clipsContent = false
	frame_18_16.expanded = false
	frame_18_16.layoutMode = "VERTICAL"
	frame_18_16.counterAxisSizingMode = "AUTO"


	// Create TEXT
	var text_18_17 = figma.createText()
	frame_18_16.appendChild(text_18_17)
	text_18_17.resize(122.0000000000, 22.0000000000)
	text_18_17.name = "Last updated on"
	text_18_17.fills = [{"type":"SOLID","visible":true,"opacity":0.800000011920929,"blendMode":"NORMAL","color":{"r":0,"g":0,"b":0}}]

	// Font properties
	text_18_17.fontName = {
		family: "Open Sans",
		style: "Regular"
	}
		text_18_17.listSpacing = 0
	text_18_17.characters = "Last updated on"
	text_18_17.fontSize = 16
	text_18_17.fontName = {"family":"Open Sans","style":"Regular"}
	text_18_17.textAutoResize = "WIDTH_AND_HEIGHT"


	// Create TEXT
	var text_18_18 = figma.createText()
	frame_18_16.appendChild(text_18_18)
	text_18_18.resize(120.0000000000, 22.0000000000)
	text_18_18.name = "Last updated by"
	text_18_18.fills = [{"type":"SOLID","visible":true,"opacity":0.800000011920929,"blendMode":"NORMAL","color":{"r":0,"g":0,"b":0}}]
	text_18_18.relativeTransform = [[1,0,0],[0,1,22]]
	text_18_18.y = 22

	// Font properties
	text_18_18.fontName = {
		family: "Open Sans",
		style: "Regular"
	}
		text_18_18.listSpacing = 0
	text_18_18.characters = "Last updated by"
	text_18_18.fontSize = 16
	text_18_18.fontName = {"family":"Open Sans","style":"Regular"}
	text_18_18.textAutoResize = "WIDTH_AND_HEIGHT"


	// Create TEXT
	var text_18_19 = figma.createText()
	component_18_12.appendChild(text_18_19)
	text_18_19.resize(520.0000000000, 272.0000000000)
	text_18_19.name = "Content 1"
	text_18_19.relativeTransform = [[1,0,40],[0,1,212]]
	text_18_19.x = 40
	text_18_19.y = 212
	text_18_19.layoutAlign = "STRETCH"
	text_18_19.autoRename = false

	// Font properties
	text_18_19.fontName = {
		family: "Open Sans",
		style: "Regular"
	}
		text_18_19.listSpacing = 0
	text_18_19.characters = "Suspendisse eu luctus elit. Maecenas lobortis at est vitae bibendum. Nunc mattis posuere urna, eu ullamcorper quam condimentum quis. Sed efficitur blandit condimentum. Aliquam nec rutrum lorem, ut suscipit lorem. Suspendisse at nulla vel ligula congue ornare. Aenean non quam a urna luctus ullamcorper."
	text_18_19.fontSize = 25
	text_18_19.fontName = {"family":"Open Sans","style":"Regular"}
	text_18_19.textAutoResize = "HEIGHT"


	// Create TEXT
	var text_18_20 = figma.createText()
	component_18_12.appendChild(text_18_20)
	text_18_20.resize(520.0000000000, 272.0000000000)
	text_18_20.name = "Content 2"
	text_18_20.relativeTransform = [[1,0,40],[0,1,494]]
	text_18_20.x = 40
	text_18_20.y = 494
	text_18_20.layoutAlign = "STRETCH"
	text_18_20.autoRename = false

	// Font properties
	text_18_20.fontName = {
		family: "Open Sans",
		style: "Regular"
	}
		text_18_20.listSpacing = 0
	text_18_20.characters = "Suspendisse eu luctus elit. Maecenas lobortis at est vitae bibendum. Nunc mattis posuere urna, eu ullamcorper quam condimentum quis. Sed efficitur blandit condimentum. Aliquam nec rutrum lorem, ut suscipit lorem. Suspendisse at nulla vel ligula congue ornare. Aenean non quam a urna luctus ullamcorper."
	text_18_20.fontSize = 25
	text_18_20.fontName = {"family":"Open Sans","style":"Regular"}
	text_18_20.textAutoResize = "HEIGHT"


	// Create COMPONENT
	var component_18_51 = figma.createComponent()
	component_18_51.resize(600.0000000000, 806.0000000000)
	component_18_51.primaryAxisSizingMode = "AUTO"
	component_18_51.name = "Type=Discussion"
	component_18_51.relativeTransform = [[1,0,782],[0,1,2589]]
	component_18_51.x = 782
	component_18_51.y = 2589
	component_18_51.fills = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":1,"g":1,"b":1}}]
	component_18_51.strokes = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":1,"g":0.6000000238418579,"b":0}}]
	component_18_51.strokeWeight = 7.5
	component_18_51.strokeAlign = "CENTER"
	component_18_51.cornerRadius = 4
	component_18_51.paddingLeft = 40
	component_18_51.paddingRight = 40
	component_18_51.paddingTop = 40
	component_18_51.paddingBottom = 40
	component_18_51.strokeTopWeight = 7.5
	component_18_51.strokeBottomWeight = 7.5
	component_18_51.strokeLeftWeight = 7.5
	component_18_51.strokeRightWeight = 7.5
	component_18_51.backgrounds = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":1,"g":1,"b":1}}]
	component_18_51.clipsContent = true
	component_18_51.expanded = false
	component_18_51.layoutMode = "VERTICAL"
	component_18_51.itemSpacing = 10
	component_18_51.description = "For use when annotating a design file"


	// Create FRAME
	var frame_18_52 = figma.createFrame()
	component_18_51.appendChild(frame_18_52)
	frame_18_52.resize(354.0000000000, 44.0000000000)
	frame_18_52.primaryAxisSizingMode = "AUTO"
	frame_18_52.counterAxisSizingMode = "AUTO"
	frame_18_52.name = "Label"
	frame_18_52.relativeTransform = [[1,0,40],[0,1,40]]
	frame_18_52.x = 40
	frame_18_52.y = 40
	frame_18_52.fills = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":1,"g":0.6000000238418579,"b":0}}]
	frame_18_52.cornerRadius = 100
	frame_18_52.paddingLeft = 15
	frame_18_52.paddingRight = 15
	frame_18_52.paddingTop = 5
	frame_18_52.paddingBottom = 5
	frame_18_52.strokeTopWeight = 1
	frame_18_52.strokeBottomWeight = 1
	frame_18_52.strokeLeftWeight = 1
	frame_18_52.strokeRightWeight = 1
	frame_18_52.backgrounds = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":1,"g":0.6000000238418579,"b":0}}]
	frame_18_52.clipsContent = false
	frame_18_52.expanded = false
	frame_18_52.layoutMode = "HORIZONTAL"
	frame_18_52.counterAxisSizingMode = "AUTO"
	frame_18_52.itemSpacing = 10


	// Create TEXT
	var text_18_53 = figma.createText()
	frame_18_52.appendChild(text_18_53)
	text_18_53.resize(324.0000000000, 34.0000000000)
	text_18_53.name = "chip text"
	text_18_53.fills = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.18333333730697632,"g":0.18333333730697632,"b":0.18333333730697632}}]
	text_18_53.relativeTransform = [[1,0,15],[0,1,5]]
	text_18_53.x = 15
	text_18_53.y = 5
	text_18_53.autoRename = false

	// Font properties
	text_18_53.fontName = {
		family: "Open Sans",
		style: "Bold"
	}
		text_18_53.listSpacing = 0
	text_18_53.characters = "Meeting Note or Question"
	text_18_53.fontSize = 25
	text_18_53.fontName = {"family":"Open Sans","style":"Bold"}
	text_18_53.textAutoResize = "WIDTH_AND_HEIGHT"


	// Create TEXT
	var text_18_54 = figma.createText()
	component_18_51.appendChild(text_18_54)
	text_18_54.resize(520.0000000000, 54.0000000000)
	text_18_54.name = "Title"
	text_18_54.relativeTransform = [[1,0,40],[0,1,94]]
	text_18_54.x = 40
	text_18_54.y = 94
	text_18_54.layoutAlign = "STRETCH"

	// Font properties
	text_18_54.fontName = {
		family: "Open Sans",
		style: "SemiBold"
	}
		text_18_54.listSpacing = 0
	text_18_54.characters = "Title"
	text_18_54.fontSize = 40
	text_18_54.fontName = {"family":"Open Sans","style":"SemiBold"}
	text_18_54.textAutoResize = "HEIGHT"


	// Create FRAME
	var frame_18_55 = figma.createFrame()
	component_18_51.appendChild(frame_18_55)
	frame_18_55.resize(122.0000000000, 44.0000000000)
	frame_18_55.primaryAxisSizingMode = "AUTO"
	frame_18_55.counterAxisSizingMode = "AUTO"
	frame_18_55.name = "metadata"
	frame_18_55.relativeTransform = [[1,0,40],[0,1,158]]
	frame_18_55.x = 40
	frame_18_55.y = 158
	frame_18_55.fills = [{"type":"SOLID","visible":false,"opacity":1,"blendMode":"NORMAL","color":{"r":1,"g":1,"b":1}}]
	frame_18_55.strokeTopWeight = 1
	frame_18_55.strokeBottomWeight = 1
	frame_18_55.strokeLeftWeight = 1
	frame_18_55.strokeRightWeight = 1
	frame_18_55.backgrounds = [{"type":"SOLID","visible":false,"opacity":1,"blendMode":"NORMAL","color":{"r":1,"g":1,"b":1}}]
	frame_18_55.clipsContent = false
	frame_18_55.expanded = false
	frame_18_55.layoutMode = "VERTICAL"
	frame_18_55.counterAxisSizingMode = "AUTO"


	// Create TEXT
	var text_18_56 = figma.createText()
	frame_18_55.appendChild(text_18_56)
	text_18_56.resize(122.0000000000, 22.0000000000)
	text_18_56.name = "Last updated on"
	text_18_56.fills = [{"type":"SOLID","visible":true,"opacity":0.800000011920929,"blendMode":"NORMAL","color":{"r":0,"g":0,"b":0}}]

	// Font properties
	text_18_56.fontName = {
		family: "Open Sans",
		style: "Regular"
	}
		text_18_56.listSpacing = 0
	text_18_56.characters = "Last updated on"
	text_18_56.fontSize = 16
	text_18_56.fontName = {"family":"Open Sans","style":"Regular"}
	text_18_56.textAutoResize = "WIDTH_AND_HEIGHT"


	// Create TEXT
	var text_18_57 = figma.createText()
	frame_18_55.appendChild(text_18_57)
	text_18_57.resize(120.0000000000, 22.0000000000)
	text_18_57.name = "Last updated by"
	text_18_57.fills = [{"type":"SOLID","visible":true,"opacity":0.800000011920929,"blendMode":"NORMAL","color":{"r":0,"g":0,"b":0}}]
	text_18_57.relativeTransform = [[1,0,0],[0,1,22]]
	text_18_57.y = 22

	// Font properties
	text_18_57.fontName = {
		family: "Open Sans",
		style: "Regular"
	}
		text_18_57.listSpacing = 0
	text_18_57.characters = "Last updated by"
	text_18_57.fontSize = 16
	text_18_57.fontName = {"family":"Open Sans","style":"Regular"}
	text_18_57.textAutoResize = "WIDTH_AND_HEIGHT"


	// Create TEXT
	var text_18_58 = figma.createText()
	component_18_51.appendChild(text_18_58)
	text_18_58.resize(520.0000000000, 272.0000000000)
	text_18_58.name = "Content 1"
	text_18_58.relativeTransform = [[1,0,40],[0,1,212]]
	text_18_58.x = 40
	text_18_58.y = 212
	text_18_58.layoutAlign = "STRETCH"
	text_18_58.autoRename = false

	// Font properties
	text_18_58.fontName = {
		family: "Open Sans",
		style: "Regular"
	}
		text_18_58.listSpacing = 0
	text_18_58.characters = "Suspendisse eu luctus elit. Maecenas lobortis at est vitae bibendum. Nunc mattis posuere urna, eu ullamcorper quam condimentum quis. Sed efficitur blandit condimentum. Aliquam nec rutrum lorem, ut suscipit lorem. Suspendisse at nulla vel ligula congue ornare. Aenean non quam a urna luctus ullamcorper."
	text_18_58.fontSize = 25
	text_18_58.fontName = {"family":"Open Sans","style":"Regular"}
	text_18_58.textAutoResize = "HEIGHT"


	// Create TEXT
	var text_18_59 = figma.createText()
	component_18_51.appendChild(text_18_59)
	text_18_59.resize(520.0000000000, 272.0000000000)
	text_18_59.name = "Content 2"
	text_18_59.relativeTransform = [[1,0,40],[0,1,494]]
	text_18_59.x = 40
	text_18_59.y = 494
	text_18_59.layoutAlign = "STRETCH"
	text_18_59.autoRename = false

	// Font properties
	text_18_59.fontName = {
		family: "Open Sans",
		style: "Regular"
	}
		text_18_59.listSpacing = 0
	text_18_59.characters = "Suspendisse eu luctus elit. Maecenas lobortis at est vitae bibendum. Nunc mattis posuere urna, eu ullamcorper quam condimentum quis. Sed efficitur blandit condimentum. Aliquam nec rutrum lorem, ut suscipit lorem. Suspendisse at nulla vel ligula congue ornare. Aenean non quam a urna luctus ullamcorper."
	text_18_59.fontSize = 25
	text_18_59.fontName = {"family":"Open Sans","style":"Regular"}
	text_18_59.textAutoResize = "HEIGHT"


	// Create COMPONENT
	var component_18_27 = figma.createComponent()
	component_18_27.resize(600.0000000000, 806.0000000000)
	component_18_27.primaryAxisSizingMode = "AUTO"
	component_18_27.name = "Type=In Process"
	component_18_27.relativeTransform = [[1,0,20],[0,1,868]]
	component_18_27.x = 20
	component_18_27.y = 868
	component_18_27.fills = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":1,"g":1,"b":1}}]
	component_18_27.strokes = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":1,"g":0,"b":0}}]
	component_18_27.strokeWeight = 7.5
	component_18_27.strokeAlign = "CENTER"
	component_18_27.cornerRadius = 4
	component_18_27.paddingLeft = 40
	component_18_27.paddingRight = 40
	component_18_27.paddingTop = 40
	component_18_27.paddingBottom = 40
	component_18_27.strokeTopWeight = 7.5
	component_18_27.strokeBottomWeight = 7.5
	component_18_27.strokeLeftWeight = 7.5
	component_18_27.strokeRightWeight = 7.5
	component_18_27.backgrounds = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":1,"g":1,"b":1}}]
	component_18_27.clipsContent = true
	component_18_27.expanded = false
	component_18_27.layoutMode = "VERTICAL"
	component_18_27.itemSpacing = 10
	component_18_27.description = "For use when annotating a design file"


	// Create FRAME
	var frame_18_28 = figma.createFrame()
	component_18_27.appendChild(frame_18_28)
	frame_18_28.resize(157.0000000000, 44.0000000000)
	frame_18_28.primaryAxisSizingMode = "AUTO"
	frame_18_28.counterAxisSizingMode = "AUTO"
	frame_18_28.name = "Label"
	frame_18_28.relativeTransform = [[1,0,40],[0,1,40]]
	frame_18_28.x = 40
	frame_18_28.y = 40
	frame_18_28.fills = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":1,"g":0,"b":0}}]
	frame_18_28.cornerRadius = 100
	frame_18_28.paddingLeft = 15
	frame_18_28.paddingRight = 15
	frame_18_28.paddingTop = 5
	frame_18_28.paddingBottom = 5
	frame_18_28.strokeTopWeight = 1
	frame_18_28.strokeBottomWeight = 1
	frame_18_28.strokeLeftWeight = 1
	frame_18_28.strokeRightWeight = 1
	frame_18_28.backgrounds = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":1,"g":0,"b":0}}]
	frame_18_28.clipsContent = false
	frame_18_28.expanded = false
	frame_18_28.layoutMode = "HORIZONTAL"
	frame_18_28.counterAxisSizingMode = "AUTO"
	frame_18_28.itemSpacing = 10


	// Create TEXT
	var text_18_29 = figma.createText()
	frame_18_28.appendChild(text_18_29)
	text_18_29.resize(127.0000000000, 34.0000000000)
	text_18_29.name = "chip text"
	text_18_29.fills = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":1,"g":1,"b":1}}]
	text_18_29.relativeTransform = [[1,0,15],[0,1,5]]
	text_18_29.x = 15
	text_18_29.y = 5
	text_18_29.autoRename = false

	// Font properties
	text_18_29.fontName = {
		family: "Open Sans",
		style: "Bold"
	}
		text_18_29.listSpacing = 0
	text_18_29.characters = "In Process"
	text_18_29.fontSize = 25
	text_18_29.fontName = {"family":"Open Sans","style":"Bold"}
	text_18_29.textAutoResize = "WIDTH_AND_HEIGHT"


	// Create TEXT
	var text_18_30 = figma.createText()
	component_18_27.appendChild(text_18_30)
	text_18_30.resize(520.0000000000, 54.0000000000)
	text_18_30.name = "Title"
	text_18_30.relativeTransform = [[1,0,40],[0,1,94]]
	text_18_30.x = 40
	text_18_30.y = 94
	text_18_30.layoutAlign = "STRETCH"

	// Font properties
	text_18_30.fontName = {
		family: "Open Sans",
		style: "SemiBold"
	}
		text_18_30.listSpacing = 0
	text_18_30.characters = "Title"
	text_18_30.fontSize = 40
	text_18_30.fontName = {"family":"Open Sans","style":"SemiBold"}
	text_18_30.textAutoResize = "HEIGHT"


	// Create FRAME
	var frame_18_31 = figma.createFrame()
	component_18_27.appendChild(frame_18_31)
	frame_18_31.resize(122.0000000000, 44.0000000000)
	frame_18_31.primaryAxisSizingMode = "AUTO"
	frame_18_31.counterAxisSizingMode = "AUTO"
	frame_18_31.name = "metadata"
	frame_18_31.relativeTransform = [[1,0,40],[0,1,158]]
	frame_18_31.x = 40
	frame_18_31.y = 158
	frame_18_31.fills = [{"type":"SOLID","visible":false,"opacity":1,"blendMode":"NORMAL","color":{"r":1,"g":1,"b":1}}]
	frame_18_31.strokeTopWeight = 1
	frame_18_31.strokeBottomWeight = 1
	frame_18_31.strokeLeftWeight = 1
	frame_18_31.strokeRightWeight = 1
	frame_18_31.backgrounds = [{"type":"SOLID","visible":false,"opacity":1,"blendMode":"NORMAL","color":{"r":1,"g":1,"b":1}}]
	frame_18_31.clipsContent = false
	frame_18_31.expanded = false
	frame_18_31.layoutMode = "VERTICAL"
	frame_18_31.counterAxisSizingMode = "AUTO"


	// Create TEXT
	var text_18_32 = figma.createText()
	frame_18_31.appendChild(text_18_32)
	text_18_32.resize(122.0000000000, 22.0000000000)
	text_18_32.name = "Last updated on"
	text_18_32.fills = [{"type":"SOLID","visible":true,"opacity":0.800000011920929,"blendMode":"NORMAL","color":{"r":0,"g":0,"b":0}}]

	// Font properties
	text_18_32.fontName = {
		family: "Open Sans",
		style: "Regular"
	}
		text_18_32.listSpacing = 0
	text_18_32.characters = "Last updated on"
	text_18_32.fontSize = 16
	text_18_32.fontName = {"family":"Open Sans","style":"Regular"}
	text_18_32.textAutoResize = "WIDTH_AND_HEIGHT"


	// Create TEXT
	var text_18_33 = figma.createText()
	frame_18_31.appendChild(text_18_33)
	text_18_33.resize(120.0000000000, 22.0000000000)
	text_18_33.name = "Last updated by"
	text_18_33.fills = [{"type":"SOLID","visible":true,"opacity":0.800000011920929,"blendMode":"NORMAL","color":{"r":0,"g":0,"b":0}}]
	text_18_33.relativeTransform = [[1,0,0],[0,1,22]]
	text_18_33.y = 22

	// Font properties
	text_18_33.fontName = {
		family: "Open Sans",
		style: "Regular"
	}
		text_18_33.listSpacing = 0
	text_18_33.characters = "Last updated by"
	text_18_33.fontSize = 16
	text_18_33.fontName = {"family":"Open Sans","style":"Regular"}
	text_18_33.textAutoResize = "WIDTH_AND_HEIGHT"


	// Create TEXT
	var text_18_34 = figma.createText()
	component_18_27.appendChild(text_18_34)
	text_18_34.resize(520.0000000000, 272.0000000000)
	text_18_34.name = "Content 1"
	text_18_34.relativeTransform = [[1,0,40],[0,1,212]]
	text_18_34.x = 40
	text_18_34.y = 212
	text_18_34.layoutAlign = "STRETCH"
	text_18_34.autoRename = false

	// Font properties
	text_18_34.fontName = {
		family: "Open Sans",
		style: "Regular"
	}
		text_18_34.listSpacing = 0
	text_18_34.characters = "Suspendisse eu luctus elit. Maecenas lobortis at est vitae bibendum. Nunc mattis posuere urna, eu ullamcorper quam condimentum quis. Sed efficitur blandit condimentum. Aliquam nec rutrum lorem, ut suscipit lorem. Suspendisse at nulla vel ligula congue ornare. Aenean non quam a urna luctus ullamcorper."
	text_18_34.fontSize = 25
	text_18_34.fontName = {"family":"Open Sans","style":"Regular"}
	text_18_34.textAutoResize = "HEIGHT"


	// Create TEXT
	var text_18_35 = figma.createText()
	component_18_27.appendChild(text_18_35)
	text_18_35.resize(520.0000000000, 272.0000000000)
	text_18_35.name = "Content 2"
	text_18_35.relativeTransform = [[1,0,40],[0,1,494]]
	text_18_35.x = 40
	text_18_35.y = 494
	text_18_35.layoutAlign = "STRETCH"
	text_18_35.autoRename = false

	// Font properties
	text_18_35.fontName = {
		family: "Open Sans",
		style: "Regular"
	}
		text_18_35.listSpacing = 0
	text_18_35.characters = "Suspendisse eu luctus elit. Maecenas lobortis at est vitae bibendum. Nunc mattis posuere urna, eu ullamcorper quam condimentum quis. Sed efficitur blandit condimentum. Aliquam nec rutrum lorem, ut suscipit lorem. Suspendisse at nulla vel ligula congue ornare. Aenean non quam a urna luctus ullamcorper."
	text_18_35.fontSize = 25
	text_18_35.fontName = {"family":"Open Sans","style":"Regular"}
	text_18_35.textAutoResize = "HEIGHT"


	// Create COMPONENT
	var component_18_39 = figma.createComponent()
	component_18_39.resize(600.0000000000, 806.0000000000)
	component_18_39.primaryAxisSizingMode = "AUTO"
	component_18_39.name = "Type=General"
	component_18_39.relativeTransform = [[1,0,20],[0,1,1741]]
	component_18_39.x = 20
	component_18_39.y = 1741
	component_18_39.fills = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":1,"g":1,"b":1}}]
	component_18_39.strokes = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0,"g":0,"b":0}}]
	component_18_39.strokeWeight = 7.5
	component_18_39.strokeAlign = "CENTER"
	component_18_39.cornerRadius = 4
	component_18_39.paddingLeft = 40
	component_18_39.paddingRight = 40
	component_18_39.paddingTop = 40
	component_18_39.paddingBottom = 40
	component_18_39.strokeTopWeight = 7.5
	component_18_39.strokeBottomWeight = 7.5
	component_18_39.strokeLeftWeight = 7.5
	component_18_39.strokeRightWeight = 7.5
	component_18_39.backgrounds = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":1,"g":1,"b":1}}]
	component_18_39.clipsContent = true
	component_18_39.expanded = false
	component_18_39.layoutMode = "VERTICAL"
	component_18_39.itemSpacing = 10
	component_18_39.description = "For use when annotating a design file"


	// Create FRAME
	var frame_18_40 = figma.createFrame()
	component_18_39.appendChild(frame_18_40)
	frame_18_40.resize(197.0000000000, 44.0000000000)
	frame_18_40.primaryAxisSizingMode = "AUTO"
	frame_18_40.counterAxisSizingMode = "AUTO"
	frame_18_40.name = "Label"
	frame_18_40.relativeTransform = [[1,0,40],[0,1,40]]
	frame_18_40.x = 40
	frame_18_40.y = 40
	frame_18_40.fills = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0,"g":0,"b":0}}]
	frame_18_40.cornerRadius = 100
	frame_18_40.paddingLeft = 15
	frame_18_40.paddingRight = 15
	frame_18_40.paddingTop = 5
	frame_18_40.paddingBottom = 5
	frame_18_40.strokeTopWeight = 1
	frame_18_40.strokeBottomWeight = 1
	frame_18_40.strokeLeftWeight = 1
	frame_18_40.strokeRightWeight = 1
	frame_18_40.backgrounds = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0,"g":0,"b":0}}]
	frame_18_40.clipsContent = false
	frame_18_40.expanded = false
	frame_18_40.layoutMode = "HORIZONTAL"
	frame_18_40.counterAxisSizingMode = "AUTO"
	frame_18_40.itemSpacing = 10


	// Create TEXT
	var text_18_41 = figma.createText()
	frame_18_40.appendChild(text_18_41)
	text_18_41.resize(167.0000000000, 34.0000000000)
	text_18_41.name = "chip text"
	text_18_41.fills = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":1,"g":1,"b":1}}]
	text_18_41.relativeTransform = [[1,0,15],[0,1,5]]
	text_18_41.x = 15
	text_18_41.y = 5
	text_18_41.autoRename = false

	// Font properties
	text_18_41.fontName = {
		family: "Open Sans",
		style: "Bold"
	}
		text_18_41.listSpacing = 0
	text_18_41.characters = "General Note"
	text_18_41.fontSize = 25
	text_18_41.fontName = {"family":"Open Sans","style":"Bold"}
	text_18_41.textAutoResize = "WIDTH_AND_HEIGHT"


	// Create TEXT
	var text_18_42 = figma.createText()
	component_18_39.appendChild(text_18_42)
	text_18_42.resize(520.0000000000, 54.0000000000)
	text_18_42.name = "Title"
	text_18_42.relativeTransform = [[1,0,40],[0,1,94]]
	text_18_42.x = 40
	text_18_42.y = 94
	text_18_42.layoutAlign = "STRETCH"

	// Font properties
	text_18_42.fontName = {
		family: "Open Sans",
		style: "SemiBold"
	}
		text_18_42.listSpacing = 0
	text_18_42.characters = "Title"
	text_18_42.fontSize = 40
	text_18_42.fontName = {"family":"Open Sans","style":"SemiBold"}
	text_18_42.textAutoResize = "HEIGHT"


	// Create FRAME
	var frame_18_43 = figma.createFrame()
	component_18_39.appendChild(frame_18_43)
	frame_18_43.resize(122.0000000000, 44.0000000000)
	frame_18_43.primaryAxisSizingMode = "AUTO"
	frame_18_43.counterAxisSizingMode = "AUTO"
	frame_18_43.name = "metadata"
	frame_18_43.relativeTransform = [[1,0,40],[0,1,158]]
	frame_18_43.x = 40
	frame_18_43.y = 158
	frame_18_43.fills = [{"type":"SOLID","visible":false,"opacity":1,"blendMode":"NORMAL","color":{"r":1,"g":1,"b":1}}]
	frame_18_43.strokeTopWeight = 1
	frame_18_43.strokeBottomWeight = 1
	frame_18_43.strokeLeftWeight = 1
	frame_18_43.strokeRightWeight = 1
	frame_18_43.backgrounds = [{"type":"SOLID","visible":false,"opacity":1,"blendMode":"NORMAL","color":{"r":1,"g":1,"b":1}}]
	frame_18_43.clipsContent = false
	frame_18_43.expanded = false
	frame_18_43.layoutMode = "VERTICAL"
	frame_18_43.counterAxisSizingMode = "AUTO"


	// Create TEXT
	var text_18_44 = figma.createText()
	frame_18_43.appendChild(text_18_44)
	text_18_44.resize(122.0000000000, 22.0000000000)
	text_18_44.name = "Last updated on"
	text_18_44.fills = [{"type":"SOLID","visible":true,"opacity":0.800000011920929,"blendMode":"NORMAL","color":{"r":0,"g":0,"b":0}}]

	// Font properties
	text_18_44.fontName = {
		family: "Open Sans",
		style: "Regular"
	}
		text_18_44.listSpacing = 0
	text_18_44.characters = "Last updated on"
	text_18_44.fontSize = 16
	text_18_44.fontName = {"family":"Open Sans","style":"Regular"}
	text_18_44.textAutoResize = "WIDTH_AND_HEIGHT"


	// Create TEXT
	var text_18_45 = figma.createText()
	frame_18_43.appendChild(text_18_45)
	text_18_45.resize(120.0000000000, 22.0000000000)
	text_18_45.name = "Last updated by"
	text_18_45.fills = [{"type":"SOLID","visible":true,"opacity":0.800000011920929,"blendMode":"NORMAL","color":{"r":0,"g":0,"b":0}}]
	text_18_45.relativeTransform = [[1,0,0],[0,1,22]]
	text_18_45.y = 22

	// Font properties
	text_18_45.fontName = {
		family: "Open Sans",
		style: "Regular"
	}
		text_18_45.listSpacing = 0
	text_18_45.characters = "Last updated by"
	text_18_45.fontSize = 16
	text_18_45.fontName = {"family":"Open Sans","style":"Regular"}
	text_18_45.textAutoResize = "WIDTH_AND_HEIGHT"


	// Create TEXT
	var text_18_46 = figma.createText()
	component_18_39.appendChild(text_18_46)
	text_18_46.resize(520.0000000000, 272.0000000000)
	text_18_46.name = "Content 1"
	text_18_46.relativeTransform = [[1,0,40],[0,1,212]]
	text_18_46.x = 40
	text_18_46.y = 212
	text_18_46.layoutAlign = "STRETCH"
	text_18_46.autoRename = false

	// Font properties
	text_18_46.fontName = {
		family: "Open Sans",
		style: "Regular"
	}
		text_18_46.listSpacing = 0
	text_18_46.characters = "Suspendisse eu luctus elit. Maecenas lobortis at est vitae bibendum. Nunc mattis posuere urna, eu ullamcorper quam condimentum quis. Sed efficitur blandit condimentum. Aliquam nec rutrum lorem, ut suscipit lorem. Suspendisse at nulla vel ligula congue ornare. Aenean non quam a urna luctus ullamcorper."
	text_18_46.fontSize = 25
	text_18_46.fontName = {"family":"Open Sans","style":"Regular"}
	text_18_46.textAutoResize = "HEIGHT"


	// Create TEXT
	var text_18_47 = figma.createText()
	component_18_39.appendChild(text_18_47)
	text_18_47.resize(520.0000000000, 272.0000000000)
	text_18_47.name = "Content 2"
	text_18_47.relativeTransform = [[1,0,40],[0,1,494]]
	text_18_47.x = 40
	text_18_47.y = 494
	text_18_47.layoutAlign = "STRETCH"
	text_18_47.autoRename = false

	// Font properties
	text_18_47.fontName = {
		family: "Open Sans",
		style: "Regular"
	}
		text_18_47.listSpacing = 0
	text_18_47.characters = "Suspendisse eu luctus elit. Maecenas lobortis at est vitae bibendum. Nunc mattis posuere urna, eu ullamcorper quam condimentum quis. Sed efficitur blandit condimentum. Aliquam nec rutrum lorem, ut suscipit lorem. Suspendisse at nulla vel ligula congue ornare. Aenean non quam a urna luctus ullamcorper."
	text_18_47.fontSize = 25
	text_18_47.fontName = {"family":"Open Sans","style":"Regular"}
	text_18_47.textAutoResize = "HEIGHT"


	// Create COMPONENT_SET
	var componentSet_18_2 = figma.combineAsVariants([component_18_3, component_18_12, component_18_51, component_18_27, component_18_39], figma.currentPage)
	componentSet_18_2.resize(1737.0000000000, 3603.0000000000)
	componentSet_18_2.primaryAxisSizingMode = "AUTO"
	componentSet_18_2.name = "Document Notes"
	componentSet_18_2.visible = true
	componentSet_18_2.locked = false
	componentSet_18_2.opacity = 1
	componentSet_18_2.blendMode = "PASS_THROUGH"
	componentSet_18_2.isMask = false
	componentSet_18_2.effects = []
	componentSet_18_2.relativeTransform = [[1,0,-3176],[0,1,-235]]
	componentSet_18_2.x = -3176
	componentSet_18_2.y = -235
	componentSet_18_2.rotation = 0
	componentSet_18_2.layoutAlign = "INHERIT"
	componentSet_18_2.constrainProportions = false
	componentSet_18_2.layoutGrow = 0
	componentSet_18_2.layoutPositioning = "AUTO"
	componentSet_18_2.exportSettings = []
	componentSet_18_2.fills = []
	componentSet_18_2.strokes = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.48235294222831726,"g":0.3803921639919281,"b":1}}]
	componentSet_18_2.strokeWeight = 1
	componentSet_18_2.strokeAlign = "INSIDE"
	componentSet_18_2.strokeJoin = "MITER"
	componentSet_18_2.dashPattern = [10,5]
	componentSet_18_2.strokeCap = "NONE"
	componentSet_18_2.strokeMiterLimit = 4
	componentSet_18_2.cornerRadius = 5
	componentSet_18_2.cornerSmoothing = 0
	componentSet_18_2.paddingLeft = 0
	componentSet_18_2.paddingRight = 0
	componentSet_18_2.paddingTop = 0
	componentSet_18_2.paddingBottom = 0
	componentSet_18_2.primaryAxisAlignItems = "MIN"
	componentSet_18_2.counterAxisAlignItems = "MIN"
	componentSet_18_2.primaryAxisSizingMode = "AUTO"
	componentSet_18_2.strokeTopWeight = 1
	componentSet_18_2.strokeBottomWeight = 1
	componentSet_18_2.strokeLeftWeight = 1
	componentSet_18_2.strokeRightWeight = 1
	componentSet_18_2.layoutGrids = []
	componentSet_18_2.backgrounds = []
	componentSet_18_2.clipsContent = true
	componentSet_18_2.guides = []
	componentSet_18_2.expanded = true
	componentSet_18_2.constraints = {"horizontal":"MIN","vertical":"MIN"}
	componentSet_18_2.layoutMode = "NONE"
	componentSet_18_2.counterAxisSizingMode = "FIXED"
	componentSet_18_2.itemSpacing = 0
	componentSet_18_2.overflowDirection = "NONE"
	componentSet_18_2.numberOfFixedChildren = 0
	componentSet_18_2.overlayPositionType = "CENTER"
	componentSet_18_2.overlayBackground = {"type":"NONE"}
	componentSet_18_2.overlayBackgroundInteraction = "NONE"
	componentSet_18_2.itemReverseZIndex = false
	componentSet_18_2.strokesIncludedInLayout = false
	componentSet_18_2.description = ""
	componentSet_18_2.documentationLinks = []

}

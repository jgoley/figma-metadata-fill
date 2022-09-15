// let node: SceneNode = null;
// const height = 55;
// const gutter = 50;
// const font = { family: "Inter", style: "Regular" };
// const loadFont = async () => {
//   await figma.loadFontAsync(font);
// };
// const addTimestamp = (rect) => {
//   const text = figma.createText();
//   text.characters = new Date().toString();
//   text.fontName = font;
//   text.fontSize = 24;
//   text.fills = [{ type: "SOLID", color: { r: 1, g: 0, b: 0 } }];
//   text.x = rect.x + 20;
//   text.y = rect.y + text.height / 2;
//   figma.currentPage.appendChild(text);
//   if (text.width > rect.width) {
//     rect.resize(text.width + gutter, rect.height);
//   }
//   return text;
// };
// if (selectedFrame) {
//   const rect = figma.createRectangle();
//   rect.x = selectedFrame.x - height;
//   rect.y = selectedFrame.y;
//   rect.strokeWeight = 2;
//   rect.cornerRadius = 5;
//   rect.resize(selectedFrame.height / 2, height);
//   rect.fills = [{ type: "SOLID", color: { r: 1, g: 1, b: 1 } }];
//   rect.strokes = [{ type: "SOLID", color: { r: 1, g: 0, b: 0 } }];
//   figma.currentPage.appendChild(rect);
//   loadFont()
//     .then((r) => {
//       const text = addTimestamp(rect);
//       const group = figma.group([text, rect], figma.currentPage);
//       group.rotation = -90;
//       figma.closePlugin();
//     })
//     .catch((e) => {
//       console.error(e);
//       figma.closePlugin();
//     });

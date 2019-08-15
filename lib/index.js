"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const parser_1 = __importDefault(require("./parser"));
function createSvg(svgInfo, glyph) {
    return `<?xml version="1.0" encoding="UTF-8"?>
<svg viewBox="0 0 ${svgInfo.width} ${svgInfo.height}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <path d="${glyph.attributes.d}"></path>
</svg>`;
}
module.exports = function toPath(source) {
    const iconfont = parser_1.default(source);
    var { elements: [svg, ...rest] } = iconfont;
    var { elements: [rest, defs, ...rest] } = svg;
    var { elements: [font, ...rest] } = defs;
    var { elements: [fontFace, ...rest] } = font;
    const glyphs = rest.filter((ele) => (ele.name === 'glyph' && ele.attributes && ele.attributes.d));
    const svgInfo = {
        width: font.attributes['horiz-adv-x'],
        height: Math.abs(fontFace.attributes['ascent']) + Math.abs(fontFace.attributes['descent']),
        y: 0,
        x: 0,
    };
    const result = [];
    for (let i = 0; i < glyphs.length; i++) {
        const glyph = glyphs[i];
        const info = Object.assign({}, svgInfo);
        if (glyph.attributes['horiz-adv-x']) {
            info.width = glyph.attributes['horiz-adv-x'];
        }
        result.push({
            name: glyph.attributes['glyph-name'],
            source: createSvg(info, glyph)
        });
    }
    return result;
};

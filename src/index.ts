import parser from './parser';

function createSvg(svgInfo: any, glyph: any) {
    return `<?xml version="1.0" encoding="UTF-8"?>
<svg viewBox="0 0 ${svgInfo.width} ${svgInfo.height}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <path d="${glyph.attributes.d}"></path>
</svg>`;
}

export = function toPath(source: string): any {
    const iconfont = parser(source);
    var {
        elements: [
            svg,
            ...rest
        ]
    } = iconfont;
    var {
        elements: [
            rest,
            defs,
            ...rest
        ]
    } = svg;
    var {
        elements: [
            font,
            ...rest
        ]
    } = defs;

    var {
        elements: [
            fontFace,
            ...rest
        ]
    } = font;

    const glyphs = rest.filter((ele: any) => (ele.name === 'glyph' && ele.attributes && ele.attributes.d));

    const svgInfo = {
        width: font.attributes['horiz-adv-x'],
        height: Math.abs(fontFace.attributes['ascent']) + Math.abs(fontFace.attributes['descent']),
        y: 0,
        x: 0,
    };

    const result = [];

    for (let i = 0; i < glyphs.length; i++) {
        const glyph = glyphs[i];
        const info = {...svgInfo};
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

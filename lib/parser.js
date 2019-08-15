"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const xml_js_1 = require("xml-js");
function parser(source) {
    return xml_js_1.xml2js(source, {
        ignoreDeclaration: true,
        ignoreComment: true,
        ignoreCdata: true,
        ignoreDoctype: true,
        ignoreInstruction: true,
    });
}
exports.default = parser;
;

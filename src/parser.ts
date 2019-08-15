import { xml2js } from 'xml-js';

export default function parser(source: string): any {
    return xml2js(source, {
        ignoreDeclaration: true,
        ignoreComment: true,
        ignoreCdata: true,
        ignoreDoctype: true,
        ignoreInstruction: true,
    });
};

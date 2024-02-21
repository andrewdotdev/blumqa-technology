const en = require('../questions/en.json');
const es = require('../questions/es.json');

/** 
 * @param lang Options: 'en' or 'es'
*/

export default function getRandom (lang: string) {
    if (!['es', 'en'].includes(lang)) throw new Error("Options of lang: 'en' or 'es'");
    return lang[select(lang)]
}

function select (lang: string) {
    return Math.floor(Math.random() * (lang === "en" ? en.length : es.length));
}
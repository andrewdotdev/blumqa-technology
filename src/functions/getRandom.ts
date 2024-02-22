const en = require('../../questions/en.json');
const es = require('../../questions/es.json');

/** 
 * Get a random q&a
 * @param lang Options are 'en' or 'es'
*/

export function getRandom (lang: string) {
    if (!['es', 'en'].includes(lang)) throw new Error("Options of lang: 'en' or 'es'");
    let language: [] = (lang === 'en' ? en : es);
    return language[select(lang)]
}

function select (lang: string) {
    return Math.floor(Math.random() * (lang === "en" ? en.length : es.length));
}
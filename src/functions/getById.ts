const en = require('../../questions/en.json');
const es = require('../../questions/es.json');

/**
 * Get a q&a by the id
 * @param lang Options are 'en' or 'es'
 * @param id The id of the q&a
 */

export function getById(lang: string, id: number) {
    if (!['es', 'en'].includes(lang)) throw new Error("Options of lang: 'en' or 'es'");
    let language: [] = (lang === 'en' ? en : es);
    if(id < 1) id = 1
    if(language.length < id) id = language.length
    return language[id-1]
}
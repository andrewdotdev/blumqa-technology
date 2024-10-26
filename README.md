# @blumqa/astronomy

## What is it?

It's' a package to use dynamic q&a (questions and answers) of astronomy

## How to install

```bash
pnpm install @blumqa/astronomy
```
<span style="color:rgba(128,128,128,0.5)">You can use any package manager you want, as long as <code>blumqa</code> is added.</span>

## How to use

```ts
/**
 * @param lang Options are 'en' and 'es'
 * @param id The id of the q&a
*/
getRandom(lang: string) // Output: {id: number, question: string, answer: string, options: string[]}
getById(lang: string, id: number) // Output: {id: number, question: string, answer: string, options: string[]}
```
## Example
```ts
import { getRandom, getById } from '@blumqa/astronomy'

console.log(getRandom('en')) // Output: {id: number, question: string, answer: string, options: string[]}
console.log(getById('es', 5)) // Output: {id: 5, question: "¿Quién fue el primer cosmonauta en viajar al espacio?", answer: "Yuri Gagarin", options: ["Neil Armstrong", "Buzz Aldrin", "Yuri Gagarin", "Alan Shepard"]}
```

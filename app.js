import { ati } from './db.js'

const Ati = ati()
const db = Ati.createDataBase(2)
Ati.addData(db, 'l0', 'test text')
Ati.addData(db, 'l0', ['test'])
Ati.replaceData(db, 'l0', 1, 'hakonun annesi')

console.log(db)
// import { db } from 'db'

// const db = db()
// const dataBase = db.createDataBase({
//     l1: [  ],
//     l2: [  ],
//     l3: [  ]
// })

// db.addData('l1', '')
// db.removeData('l1', 0)
// db.getData('l3', 5)
// db.cloneData('l1')
// db.createLine('l4', [])
// db.replace('l1', 2, {  })

const content = {
    createDataBase(layerCount) {
        // boş bir obje
        const dbObject = {}

        // veirlen sayı kadar for döndür
        for (let i = 0; i < layerCount; i++) {
            // db object e l1, l2, l3 gibi değerler ekle
            dbObject['l' + i] = []
        }

        // sonuç da çıkan objeyi geri döndür
        return dbObject
    },
    addData(db, l, item) {
        db[l].push(item)
    },
    getData(db, l, index) {
        return db[l][index]
    },
    removeData(db, l, index) {
        db[l].splice(index, 1)
    },
    cloneData(db, l) {
        return { ...db[l] }
    },
    createLine(db, lineName, lineData = []) {
        if (Array.isArray(lineData) === false) {
            console.error('sikerim belanı görmüyonmu amk satırlar array')

            //return sonrası çalışmaz
            return
        }

        if (db[lineName] === undefined) {
            db[lineName] = lineData
        } else {
            console.error('emuüa godumun sakatı bu satır zaten var')
        }
    },
    replaceData(db, l, index, item) {
        db[l][index] = item
    }
}

export function ati() {
    return content
}

// function x(mode) {
// }

// x()
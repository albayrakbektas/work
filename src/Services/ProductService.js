import 'firebase/app'
import '../../firebaseConfig'
import 'firebase/database'
import 'firebase/storage'
import { db } from '../../firebaseConfig'

export class ProductService {
    static async getBuildingProduct() {
        return new  Promise((resolve, reject) => {
            db.ref('product/building/').on('value', (snap) => {
                const data = snap.val()

                if(data !== null){
                    return resolve(Object.keys(data).map(key => {
                        return {
                            id: key,
                            brand: data[key].brand,
                            code: data[key].code,
                            url: ''
                        }
                    }))
                } else {
                    reject('error')
                }
            })
        })

    }




















    // static async getBuildingProduct() {
    //     return new  Promise((resolve, reject) => {
    //         db.ref('product/building/').once('value', (snap) => {
    //             const data = snap.val()
    //             if(data !== null){
    //                 return Object.keys(data).map(key => {
    //                     resolve(data)
    //                     return {
    //                         id: key,
    //                         brand: data[key].brand,
    //                         code: data[key].code,
    //                         // url: data[key].url,
    //                     }
    //                 })
    //             } else {
    //                 reject('error')
    //             }
    //         })
    //             .then(() => {
    //                 let myRef = fs.ref('/building/1')
    //                 myRef.getDownloadURL()
    //                     .then((url) => {
    //                         this.url = url
    //                         console.log(myRef);
    //                         console.log(url);
    //                     })
    //             })
    //     })
    //
    // }
}

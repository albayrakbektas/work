import 'firebase/app'
import '../../firebaseConfig'
import 'firebase/database'
import 'firebase/storage'
import { db } from '../../firebaseConfig'

export class ProductService {
    static async readSectors(){
        return await new Promise(resolve => {
            db.ref("sector").once("value").then(s=>{
                let data = s.val();
                if(data !== null){
                    resolve(Object.keys(data).map(s=> {
                        let obj = data[s]
                        obj.sectorID = s
                        return obj
                    }));
                }
                else {
                    resolve([])
                }
            })
        });
    }

    static async getListAsDictionary(){
        let data = await ProductService.readSectors()
        let dict = {};
        for(let sector of data){
            dict[sector.path.replace("/","")] = sector.name
        }
        return dict
    }

    static async getProduct(sector) {
        return new  Promise((resolve, reject) => {
            db.ref(`product/${sector}/`).on('value', (snap) => {
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

    static async getMiningProduct() {
        return new  Promise((resolve, reject) => {
            db.ref('product/mining/').on('value', (snap) => {
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
    static async getIndustrialProduct() {
        return new  Promise((resolve, reject) => {
            db.ref('product/industrial/').on('value', (snap) => {
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

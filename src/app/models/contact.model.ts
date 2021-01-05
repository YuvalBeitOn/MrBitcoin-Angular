import {utilService} from '../services/util-service.js'

export class Contact {

    constructor(public _id?: string, public name: string = '', public email: string = '', public phone: string = '', public imgUrl: string = '') {

    }

    setContactImg?() {
        this.imgUrl = `https://robohash.org/${this.name}?set=set5`
    }

    setId?() {
        this._id = utilService.makeId()
    }


}
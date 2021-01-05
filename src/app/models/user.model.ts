import { Move } from './move.model';


export class User {

    constructor(public _id?: string, public name: string = '', public coins: number = 100, public moves: Move[] = [], public imgUrl: string = '') {

    }

    setUserImg?() {
        this.imgUrl = `https://robohash.org/${this.name}?set=set5`
    }

    setId?() {
        // Implement your own set Id
        this._id = this.makeId()
    }

    makeId(length = 10) {
        let txt = '';
        let possible =
          'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        for (let i = 0; i < length; i++) {
          txt += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        return txt;
      }
}
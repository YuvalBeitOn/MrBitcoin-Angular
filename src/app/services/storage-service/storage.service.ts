import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  setToStore(key: string, value: any): void {
    localStorage.setItem(key, JSON.stringify(value))
  }
  getFromStore(key: string): Array<any> {
    return JSON.parse(localStorage.getItem(key))
  }

}

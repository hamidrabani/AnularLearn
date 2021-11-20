//import { Injectable } from "@angular/core";

import { Output, EventEmitter } from '@angular/core';

export class personal{
  IsAscSort: boolean = true;
  ItemForEdit: EventEmitter<number> = new EventEmitter();
  sort(index: number){
        this.IsAscSort = !this.IsAscSort;
        this.listP.sort((obj1:any, obj2:any) =>{
            switch (index) {
                case 1:
                    return (obj1.id > obj2.id && this.IsAscSort ? 1 : -1)
                case 2:
                    return (obj1.Name > obj2.Name && this.IsAscSort ? 1 : -1)
                case 3:
                    return (obj1.Family > obj2.Family && this.IsAscSort ? 1 : -1)
                case 4:
                return (obj1.City > obj2.City && this.IsAscSort ? 1 : -1)
                default:
                break;
            }
            return 0;
        });
    }
    

    listP : PersonalName[] = [
        {id:"1111", Name: "علی", Family: "عباسی" , City: "مشهد"},
        {id:"2222", Name: "فاطمه", Family: "غلامی" , City: "تهران"}
    ];
    getList(){
        return this.listP;
  }

  GetItemForEdit(index: number) {
    console.log('Edit');
    this.ItemForEdit.emit(index);
  }

  getNavChangeEmitter() {
    return this.ItemForEdit;
  }

  AddToList(id: any, Name: any, Family: any, city: any){
      //console.log('Push');
      this.listP.push({id: id, Name: Name, Family: Family, City: city});
  }

  UpdateToList(index: number, id: any, Name: any, Family: any, city: any){
      //console.log('Push');
      this.RemoveFromList(index);
      this.AddToList(id, Name, Family, city);
  }

    
  RemoveFromList(index: number){
      this.listP.splice(index, 1);
      //console.log(this.listP);
  }
}
interface PersonalName {
    id: string;
    Name: string;
    Family: string;
    City: string;
}

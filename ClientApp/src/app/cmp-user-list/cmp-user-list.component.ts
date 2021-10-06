import {  Component, EventEmitter, OnInit, Output } from '@angular/core';
import { personal } from '../Services/personal.service';

@Component({
  selector: 'app-cmp-user-list',
  templateUrl: './cmp-user-list.component.html',
  styleUrls: ['./cmp-user-list.component.scss']
})
export class CmpUserListComponent implements OnInit {
  //serv: personal | undefined;
  constructor(public service: personal) { 
    console.log(this.service);
    
  }
  @Output()ItemForEdit = new EventEmitter<number>();
  
  headElements = ['کد ملی', 'نام', 'نام خانوادگی', 'شهر محل تولد'];
  booleanValue: any = false;
  IsAscSort : boolean = true;

  public OnclickSort(index: number){
    this.service.sort(index);
    this.service.listP
  }

  ngOnInit(): void {
  }

  public OnClickRemove(Index: number){
    //console.log('Test', Index);
    //this.service.splice(no, 1);
    this.service.RemoveFromList(Index);

  }

  public OnClickEdit(Index: number){
    //console.log('Test', Index);
    this.ItemForEdit.emit(Index);
  }

 
}

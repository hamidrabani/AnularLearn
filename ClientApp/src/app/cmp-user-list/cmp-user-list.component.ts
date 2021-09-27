import {  Component, Input, OnInit } from '@angular/core';
import { personal } from '../Services/personal.service';

@Component({
  selector: 'app-cmp-user-list',
  templateUrl: './cmp-user-list.component.html',
  styleUrls: ['./cmp-user-list.component.scss']
})
export class CmpUserListComponent implements OnInit {
  @Input() elements: any = []
  constructor() { 
    console.log(this.elements);
  }
  
  headElements = ['کد ملی', 'نام', 'نام خانوادگی', 'شهر محل تولد'];
  booleanValue: any = false;

  public sort(item:any){
    console.log("item: " + item);
    
  }

  ngOnInit(): void {
  }
}

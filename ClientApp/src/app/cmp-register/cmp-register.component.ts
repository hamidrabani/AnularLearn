import { Component, OnInit } from '@angular/core';
import { personal } from '../Services/personal.service';

@Component({
  selector: 'app-cmp-register',
  templateUrl: './cmp-register.component.html',
  styleUrls: ['./cmp-register.component.scss']
})
export class CmpRegisterComponent implements OnInit {
  serv: personal | undefined;
  elements: any = []
  
  id: string = "";
  Name: string = "";
  Family: string = "";
  City: string = "";

  constructor(service: personal) { 
    this.serv = service;
  }

  ngOnInit(): void {
  }

  register(){
    //id: any, Name: any, Family: any, City: any
    console.log('Push');
    //this.serv?.AddToList(this.id, this.Name, this.Family, this.City);
    this.elements.push({id: this.id, Name: this.Name, Family: this.Family, City: this.City});
    //= this.serv?.getList();
    this.id = this.Name = this.City = this.Family =""
  }

}

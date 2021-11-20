import { Component, OnInit } from '@angular/core';
import { personal } from '../Services/personal.service';

@Component({
  selector: 'app-cmp-register',
  templateUrl: './cmp-register.component.html',
  styleUrls: ['./cmp-register.component.scss']
})
export class CmpRegisterComponent implements OnInit {
  Cities: any = ["مشهد", "تهران", "اهواز", "شیراز", "اصفهان"];
  id: string = "";
  Name: string = "";
  Family: string = "";
  City: string = "";
  isEdit: boolean = false;
  indexForEdit: number = -1;
  subscription: any;
  constructor(private service: personal) { 
    /*new this.service.change().subscribe(data => {
      console.log("ChangeEmitt");
      
    });*/
    this.subscription = this.service.getNavChangeEmitter()
      .subscribe(item => this.selectedNavItem(item));
  }

  selectedNavItem(item: any) {
    //this._cdr.detectChanges();

  }

  ngOnInit(): void {
  }

  register(){
    if (this.isEdit)
      this.service.UpdateToList(this.indexForEdit, this.id, this.Name, this.Family, this.City);
    else
      this.service.AddToList(this.id, this.Name, this.Family, this.Name);
    this.id = this.Name = this.City = this.Family = "";
    this.isEdit = false;
    this.indexForEdit = -1;
  }

  EditItem(Index: number){
    if(Index == -1)
    {
      this.id = this.Name = this.City = this.Family =""
      this.indexForEdit = Index;
      this.isEdit = false;
      return;
    }
    this.id = this.service.listP[Index].id;
    this.Name = this.service.listP[Index].Name;
    this.City = this.service.listP[Index].City;
    this.Family = this.service.listP[Index].Family;
    this.indexForEdit = Index;
    this.isEdit = true;
  }

  refresh(){
    this.id = this.Name = this.City = this.Family =""
    this.isEdit = false;
  }
}

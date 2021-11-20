import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }
  isRegisterShow: boolean = true;
  isListShow: boolean = true;
  ngOnInit(): void {
  }

  RegisterClick() {
    this.isRegisterShow = !this.isRegisterShow;
  }
  ListClick() {
    this.isListShow = !this.isListShow;
  }

  RefreshClick(){
    this.isListShow = true;
    this.isRegisterShow = true;
  }
}

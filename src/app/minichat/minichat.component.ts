import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-minichat',
  templateUrl: './minichat.component.html',
  styleUrls: ['./minichat.component.css']
})
export class MinichatComponent implements OnInit {
  display: boolean
  lists: Array<Object>

  @ViewChild('username')
  username: ElementRef

  @ViewChild('usermessage')
  usermessage: ElementRef

  constructor() {
    this.display = false;
    this.lists = [];
   }

  ngOnInit() {
  }
  compose() {
    this.display = true; 
  }
  goback() {
    this.display = false;
  }

  send() {
    var message = {};
    message['username'] = this.username.nativeElement.value;
    message['usermessage'] = this.usermessage.nativeElement.value;

    this.lists.push(message);
    console.log(this.lists);
    this.compose();
    
  }

}

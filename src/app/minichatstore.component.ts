import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-minichatstore',
  templateUrl: './minichatstore.component.html',
  styleUrls: ['./minichatstore.component.css']
})
export class MinichatstoreComponent implements OnInit {

  message: Array<Object>;
  constructor() { }

  ngOnInit() {
  }
  
  addmsg(tweetmsg: Object) {
    this.message.push(tweetmsg);
  }

}

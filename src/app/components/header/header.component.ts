import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  schoolName=[
    {
      name:'school1',
      url:'school1'
    },
    {
      name:'school2',
      url:'school2'
    },
    {
      name:'school3',
      url:'school3'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}

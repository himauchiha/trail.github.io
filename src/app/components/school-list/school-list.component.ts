import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-school-list',
  templateUrl: './school-list.component.html',
  styleUrls: ['./school-list.component.scss']
})
export class SchoolListComponent implements OnInit {

  schools=[
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
  ];

  searchText: string ="";
  constructor() { }

  ngOnInit(): void {
  }

}

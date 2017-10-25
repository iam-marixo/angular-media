import { Component, OnInit } from '@angular/core';

@Component({
 selector: 'homepage',
 templateUrl: './homepage.component.html',
 styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  public searchText;
 title = 'Movie Lovers';
 constructor() {}

 ngOnInit(){}
 }
 this.movieList = [
      {
      id: 0 ,
	  title: "Toy Story",
	  }
	]

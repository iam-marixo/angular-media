import { Component, OnInit } from '@angular/core';

@Component({
 templateUrl: './homepage.component.html',
 styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
 title = 'Movie Lovers!';

 ngOnInit() {}
}

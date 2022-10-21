import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-component',
  templateUrl: './about-component.component.html',
  styleUrls: ['./about-component.component.css']
})
export class AboutComponentComponent implements OnInit {

  users = ['Sidney', 'Silva', 'Braz de Oliveira']

  constructor() { }

  ngOnInit(): void {
  }

}

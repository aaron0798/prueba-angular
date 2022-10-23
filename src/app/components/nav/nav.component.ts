import { Component, OnInit } from '@angular/core';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  titulo = 'WALLET';
  faChevronLeft = faChevronLeft;
  constructor() { }

  ngOnInit(): void {
  }

}

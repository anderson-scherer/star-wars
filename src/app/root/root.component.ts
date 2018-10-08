import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.scss']
})
export class RootComponent implements OnInit {
  title = 'Star Wars - The Saga';
  support = 'The force wil br with you';
  start = false;
  modulesOff = true;

  constructor() { }

  ngOnInit() {
    setTimeout(() => { this.start = true; }, 3000);
    setTimeout(() => { this.modulesOff = false; }, 6000);
  }

  StartModeOn() {
    return this.start ? 'moviment' : null;
  }
}

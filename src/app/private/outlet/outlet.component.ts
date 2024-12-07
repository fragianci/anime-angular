import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'anime-outlet',
  templateUrl: './outlet.component.html',
  styleUrl: './outlet.component.scss',
})
export class OutletComponent implements OnInit {
  ngOnInit(): void {
    console.log('ONINIT');
  }
}

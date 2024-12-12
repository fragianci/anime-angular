import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { AnimeService } from '../../shared/services/anime.service';

@Component({
  selector: 'anime-esercizi',
  templateUrl: './esercizi.component.html',
  styleUrl: './esercizi.component.scss',
})
export class EserciziComponent implements OnInit, OnChanges, OnDestroy {
  nomeComponent: string = 'EserciziComponent';
  imagePath: string = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF1IwK6-SxM83UpFVY6WtUZxXx-phss_gAUfdKbkTfau6VWVkt';
  commento: string = 'Inizializzato';
  // Custom property binding
  @Input() titleFiglio = '';
  // Custom event binding
  @Output() commentEmitter: EventEmitter<string> = new EventEmitter<string>();
  // Custom property binding
  @Input() listNumber: number[] = [];
  @Input() listNumber2: number[] = [];

  // Custom event binding
  @Output() listNumberEmitter: EventEmitter<number[]> = new EventEmitter<number[]>();
  showing: boolean = true;
  students: string[] = ['Lorenzo', 'Matteo', 'Pietro'];
  studentsSaved: string[] = [];

  constructor(private readonly animeService: AnimeService) {}

  ngOnInit(): void {
    console.log('On init');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('On changes: ', changes);
  }

  ngOnDestroy(): void {
    console.log('Componente distrutto');
  }

  like() {
    console.log('Mi piace: ', this.commento);
    this.commentEmitter.emit(this.commento);
  }

  show() {
    this.showing = !this.showing;
  }

  save(s: string) {
    // this.animeService.additem(s);
  }

  getList() {
    // this.studentsSaved = this.animeService.getList();
  }

  addNumber() {
    this.listNumber.push(3);
    this.listNumberEmitter.emit(this.listNumber);
  }
}

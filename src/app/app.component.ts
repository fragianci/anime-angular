import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from './shared/services/auth.service';
import { User } from './shared/models/user.model';
import { tap } from 'rxjs';
import { AnimeService } from './shared/services/anime.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  // L'architettura a moduli è tipica di un'applicazione enterprise. Angular supporta anche un architettura di componenti standalone, utile perche diventerà piu semplice e diretto creare dei componenti che usano il concetto di lazy loading che vedremo piu avanti.
  // ng new nomeProgetto --standalone false per creare un progetto senza i componenti standalone
  // ? differenza tra dependencies e devdependencies

  titlePadre = 'anime-gpi';
  list: number[] = [2, 4];
  showing: boolean = true;

  getComment(commento: string) {
    console.log('Commento nel componente padre: ', commento);
  }

  constructor(private readonly authService: AuthService, private readonly animeService: AnimeService) {
    let t = { x: 2, y: 4 };
    /** Destrutturazione */
    let { x, y } = t;
    // console.log(x + y);
    this.test(this.list);
    /** let e const > var vede il cambiamento fuori dal blocco let rimane nel blocco */
    let a = 1;
    if (true) {
      let a = 2;
    }
    console.log(a);
    // console.log(this.fibonacci(7));
    this.getRandomCharacter();
  }

  ngOnInit(): void {
    // ? come mai sul temp driven form il form control con type email non dava errore?
    // ? inventati un esercizio per il pomeriggio
    // ! il mattino inizia dal template driven form
    // todo > quando si apre il dettaglio dell'anime, rendere la home una sidebar e visualizzare il dettaglio dell'anime al centro
  }

  test([a, b]: number[]) {
    console.log(a, b);
  }

  changeTitle() {
    this.titlePadre = 'Nuovo titolo';
  }

  show() {
    this.showing = !this.showing;
  }

  /**
   * Calcola il numero di fibonacci
   * @param n numero da calcolare
   * @returns numero di fibonacci
   */
  fibonacci(n: number): number {
    console.log('n: ', n);

    if (n <= 1) return n;
    return this.fibonacci(n - 1) + this.fibonacci(n - 2);
  }
  getListNumber(list: number[]) {
    console.log('list: ', list);
    this.list = list;
  }

  getRandomCharacter() {
    this.animeService.getRandomCharacters().subscribe({
      next: res => {
        console.log(res);
      },
      error: error => {
        console.error(error);
      },
    });
  }

  get character() {
    return this.animeService.getCharacterSignal();
  }
}

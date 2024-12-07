import { Component, effect, OnInit } from '@angular/core';
import { ICharacter } from '../../models/character.model';
import { AnimeService } from '../../services/anime.service';

@Component({
  selector: 'anime-random-character',
  templateUrl: './random-character.component.html',
  styleUrl: './random-character.component.scss',
})
export class RandomCharacterComponent implements OnInit {
  character: ICharacter = {};
  showAll: boolean = false;
  enableTruncate: boolean = false;

  get characterSignal() {
    return this.animeService.getCharacterSignal();
  }

  constructor(private animeService: AnimeService) {
    effect(() => {
      // This will run whenever the signal value changes
      console.log('Character changed:', this.characterSignal());
      this.character = this.characterSignal();
      if (this.character.about) this.enableTruncate = this.character.about.length > 100;
      else this.enableTruncate = false;
      console.log('enableTruncate', this.enableTruncate);
    });
  }

  ngOnInit(): void {
    this.getRandomCharacter();
  }

  getRandomCharacter() {
    this.animeService.getRandomCharacters().subscribe({
      next: res => {
        // console.log(res);
      },
      error: error => {
        console.error(error);
      },
    });
  }
}

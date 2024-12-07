import { Component, effect, OnDestroy, OnInit } from '@angular/core';
import { AnimeService } from '../../shared/services/anime.service';
import { Anime, IShadowSettings } from '../../shared/models/anime';
import { Subscription, tap } from 'rxjs';
import { ICharacter } from '../../shared/models/character.model';

@Component({
  selector: 'anime-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit, OnDestroy {
  filteredAnimeList: Anime[] = [];
  isLoading: boolean = true;
  animeList: Anime[] = [];
  shadowSettings: IShadowSettings = {
    offsetX: 10,
    offsetY: 10,
    blur: 10,
  };
  subscription: Subscription = new Subscription();

  character: ICharacter = {};

  get characterSignal() {
    return this.animeService.getCharacterSignal();
  }

  constructor(private readonly animeService: AnimeService) {
    console.log('HomeComponent');
    this.getCharacter();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {
    // this.getPromiseAnimeList();
    // this.getObservableFakeList();
    // this.getAnimeHttpPromise();
    this.getAnimeListHttp();
  }

  getAnimeListHttp() {
    this.animeService
      .getAnimeListHttp$()
      .pipe(
        tap(animeList => {
          this.animeList = animeList;
          this.filteredAnimeList = this.animeList;
          this.isLoading = false;
        })
      )
      .subscribe({
        // next: (anime) => {
        //   console.log(anime);
        // }
        error: e => {
          console.error(e);
        },
      });
  }

  getPromiseAnimeList() {
    this.animeService
      .getListPromise()
      .then(res => {
        console.log(res);
        this.animeList = res;
        this.filteredAnimeList = this.animeList;
      })
      .catch(error => {
        console.error(error);
      })
      .finally(() => {
        console.log('Operazione completata!');
      });
  }

  getObservableFakeList() {
    this.animeService.getFakeListObservable().subscribe({
      next: res => {
        this.animeList = res;
        this.filteredAnimeList = this.animeList;
      },
      error: e => {
        console.error(e);
      },
      complete: () => {
        console.log('Completato');
      },
    });
  }

  getAnimeHttpPromise() {
    this.animeService
      .getAnimeListAjax()
      .then(res => {
        console.log(res);
        this.animeList = res;
        this.filteredAnimeList = this.animeList;
      })
      .catch(error => {
        console.error(error);
      });
  }

  getSearch(searchText: any) {
    console.log(searchText);
    this.filteredAnimeList = this.animeService.filterAnimeList(this.animeList, searchText);
  }

  getShadowSettings(newShadowSettings: IShadowSettings) {
    this.shadowSettings = newShadowSettings;
  }

  getCharacter() {
    effect(() => {
      this.character = this.characterSignal();
      console.log('character', this.character);
    });
  }
}

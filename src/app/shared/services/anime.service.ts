import { Injectable, Signal, signal, WritableSignal } from '@angular/core';
import { map, Observable, Observer, tap } from 'rxjs';
import { Anime, IAnime, IAnimeDetailResponse, IAnimeResponse, IRecommendedAnimeResponse, RecommendedAnime } from '../models/anime';
import { ApiService } from './api.service';
import { ICharacter } from '../models/character.model';

@Injectable({
  providedIn: 'root',
})
export class AnimeService {
  private animeLiked: Anime[] = [];
  private fakeAnimeList: IAnime[] = [
    //   {
    //     id: 1,
    //     title_anime: 'Primo elemento',
    //     duration_anime: '12',
    //     score_anime: 10
    //   },
    //   {
    //     id: 2,
    //     title_anime: 'Secondo elemento',
    //     duration_anime: '12',
    //     score_anime: 8
    //   },
    //   {
    //     id: 3,
    //     title_anime: 'Terzo elemento',
    //     duration_anime: '12',
    //     score_anime: 9
    //   },
  ];
  private character: WritableSignal<ICharacter> = signal<ICharacter>({});
  private animeListSignal: WritableSignal<Anime[]> = signal<Anime[]>([]);

  constructor(private readonly apiService: ApiService) {}

  getAnimeListHttp$() {
    return this.apiService.get<IAnimeResponse>('anime').pipe(
      map(iAnimeRes => {
        const animeList = this.mappingAnimeListHttp(iAnimeRes);
        this.animeListSignal.set(animeList);
        return animeList;
      })
      // delay(2000)
    );
  }

  getAnimeDetail$(id: number) {
    return this.apiService.get<IAnimeDetailResponse>(`anime/${id}`).pipe(
      map(animeRes => {
        return new Anime(animeRes.data);
      })
    );
  }

  /**
   * Promessa fittizia
   * @returns
   */
  getListPromise(): Promise<Anime[]> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.mappingAnimeList(this.fakeAnimeList));
        reject('Errore: ricontrollare!');
      }, 500);
    });
  }

  getFakeListObservable() {
    return new Observable((observer: Observer<Anime[]>) => {
      observer.next([]);
      setTimeout(() => {
        observer.next(this.mappingAnimeList(this.fakeAnimeList));
        observer.complete();
        // observer.error('Errore: ricontrollare');
      }, 2000);
    });
  }

  mappingAnimeListHttp(animeRes: IAnimeResponse) {
    return animeRes.data.map(ianime => {
      return new Anime(ianime);
    });
  }

  mappingAnimeList(animeList: IAnime[]) {
    return animeList.map(ianime => {
      return new Anime(ianime);
    });
  }

  addAnimeLiked(anime: Anime) {
    this.animeLiked.push(anime);
  }

  getAnimeLiked() {
    return this.animeLiked;
  }

  filterAnimeList(animeList: Anime[], searchText: string): Anime[] {
    return animeList.filter(anime => {
      return anime.titleEnglish && anime.titleEnglish.length && anime.titleEnglish.toLowerCase().includes(searchText);
    });
  }

  /**
   * Get random characters
   * @returns
   */
  getRandomCharacters() {
    return this.apiService.get<any>('random/characters').pipe(
      tap(res => {
        this.character.set(res.data);
      })
    );
  }

  getCharacterSignal(): Signal<ICharacter> {
    return this.character;
  }

  getAnimeListSignal(): Signal<Anime[]> {
    return this.animeListSignal;
  }

  /**
   * Get recommended anime
   * @returns
   */
  getRecommendedAnime() {
    return this.apiService.get<IRecommendedAnimeResponse>('recommendations/anime').pipe(
      map(res => {
        return res.data.map(anime => new RecommendedAnime(anime));
      })
    );
  }

  /**
   * Get anime list using Ajax Promise
   * @returns Promise<Anime[]>
   */
  getAnimeListAjax(): Promise<Anime[]> {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open('GET', `${this.apiService.baseUrl}/anime`);

      xhr.onload = () => {
        if (xhr.status >= 200 && xhr.status < 300) {
          const response: IAnimeResponse = JSON.parse(xhr.response);
          resolve(this.mappingAnimeListHttp(response));
        } else {
          reject(new Error(`HTTP Error: ${xhr.status}`));
        }
      };

      xhr.onerror = () => {
        reject(new Error('Network Error'));
      };

      xhr.send();
    });
  }
}

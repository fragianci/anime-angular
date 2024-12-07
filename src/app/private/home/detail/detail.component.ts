import { Component, OnInit } from '@angular/core';
import { AnimeService } from '../../../shared/services/anime.service';
import { ActivatedRoute, Router } from '@angular/router';
import { concatMap, tap } from 'rxjs';
import { Anime, EntryAnime, RecommendedAnime } from '../../../shared/models/anime';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'anime-detail',
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.scss',
})
export class DetailComponent implements OnInit {
  id: number = 0;
  anime: Anime = new Anime();
  videoUrl?: SafeResourceUrl;
  recommendedAnime: RecommendedAnime[] = [];
  animeEntries: EntryAnime[] = [];

  constructor(
    private readonly animeService: AnimeService,
    private readonly route: ActivatedRoute,
    private readonly sanitizer: DomSanitizer,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    this.getAnimeDetail();
    this.getRecommendedAnime();
  }

  getAnimeDetailNoObservable() {
    console.log(this.route.snapshot.queryParamMap.get('id'));
  }

  getAnimeDetail() {
    this.getParams()
      .pipe(
        concatMap(() => {
          return this.animeService.getAnimeDetail$(this.id);
        }),
        tap(anime => {
          this.anime = anime;
          if (anime.trailer.embedUrl) this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(anime.trailer.embedUrl);
          else this.videoUrl = undefined;
        })
      )
      .subscribe({
        error: e => {
          console.error(e);
        },
      });
    // this.id = Number(this.route.snapshot.queryParamMap.get('id'));
  }

  getParams() {
    //! PARAM MAP
    // console.log(this.route.snapshot.paramMap.get('id'));

    //! PARAM MAP OBSERVABLE
    // this.route.paramMap.subscribe({
    //   next: (res) => {
    //     console.log(res.get('id'));
    //   }
    // });

    //! QUERY PARAMS MAP
    // console.log(this.route.snapshot.queryParamMap.get('id'));

    //! QUERY PARAMS MAP OBSERVABLE

    //! 1. Params - Usati per dati essenziali/obbligatori
    // - URL: /detail/123
    // - Più pulito e SEO friendly
    // - Esempio con params:
    // return this.route.paramMap.pipe(tap(res => {
    //   this.id = Number(res.get('id'));
    // }));

    //! 2. Query Params - Usati per dati opzionali/filtri
    // - URL: /detail?id=123&category=action&sort=rating&page=2
    // - Più flessibile per parametri multipli come:
    //   * category: filtra per categoria
    //   * sort: ordina risultati
    //   * page: paginazione
    // - Meglio per filtri e parametri opzionali
    // this.route.queryParamMap

    return this.route.paramMap.pipe(
      tap(res => {
        console.log(res);
        this.id = Number(res.get('id'));
      })
    );
  }

  getRecommendedAnime() {
    this.animeService.getRecommendedAnime().subscribe({
      next: res => {
        this.recommendedAnime = res;
        this.animeEntries = this.recommendedAnime.flatMap(anime => anime.entries);
        // console.log(this.recommendedAnime.map(anime => anime.content));
      },
      error: e => {
        console.error(e);
      },
    });
  }

  openAnimeRecommendation(entry: EntryAnime) {
    // window.location.href = entry.url;
    console.log(entry);
    // this.router.navigate([`private/detail`], {
    //   queryParams: {
    //     id: entry.id,
    //   },
    // });
    this.router.navigate(['private/home', { outlets: { details: ['anime', entry.id] } }]);
  }

  close() {
    this.router.navigate(['private']);
  }
}

import { Component, Input, OnInit } from '@angular/core';
import { Anime } from '../../../shared/models/anime';
import { AnimeService } from '../../../shared/services/anime.service';
import { Router } from '@angular/router';
import { delay } from 'rxjs';

@Component({
  selector: 'anime-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
})
export class ListComponent implements OnInit {
  @Input() animeList: Anime[] = [];
  @Input() shadowOffsetX: number = 20;
  @Input() shadowOffsetY: number = 20;
  @Input() shadowBlur: number = 20;
  data: Date = new Date();
  constructor(private readonly animeService: AnimeService, private readonly router: Router) {}

  ngOnInit(): void {
    this.animeList.forEach(anime => {
      this.animeService
        .getAnimeDetail$(anime.id)
        .pipe(delay(500))
        .subscribe(anime => {
          console.log('anime: ', anime);
        });
    });
  }

  openAnime(anime: Anime) {
    // TRAMITE PARAMS
    // this.router.navigate([`private/detail/${anime.id}`]);

    // TRAMITE QUERY PARAMS
    // this.router.navigate([`private/detail`], {
    //   queryParams: {
    //     id: anime.id,
    //     // category: 'action'
    //   },
    // });

    this.router.navigate(['private/home', { outlets: { details: ['anime', anime.id] } }]);
  }

  like(anime: Anime) {
    this.animeService.addAnimeLiked(anime);
    console.log(this.animeService.getAnimeLiked());
  }
}

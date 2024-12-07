import { Component, Input } from '@angular/core';
import { Anime } from '../../../shared/models/anime';
import { AnimeService } from '../../../shared/services/anime.service';
import { Router } from '@angular/router';

@Component({
  selector: 'anime-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
})
export class ListComponent {
  @Input() animeList: Anime[] = [];
  @Input() shadowOffsetX: number = 20;
  @Input() shadowOffsetY: number = 20;
  @Input() shadowBlur: number = 20;
  data: Date = new Date();
  constructor(private readonly animeService: AnimeService, private readonly router: Router) {}

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

    this.router.navigate(['private', { outlets: { details: ['anime', anime.id] } }]);
  }

  like(anime: Anime) {
    this.animeService.addAnimeLiked(anime);
    console.log(this.animeService.getAnimeLiked());
  }
}

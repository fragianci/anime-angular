import { Component, effect, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { AnimeService } from '../../services/anime.service';
import packageJson from '../../../../../package.json';

@Component({
  selector: 'anime-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  isLogged: boolean = true;

  get character() {
    return this.animeService.getCharacterSignal();
  }

  get animeList() {
    return this.animeService.getAnimeListSignal();
  }

  get appVersion() {
    return packageJson.version;
  }

  constructor(private readonly router: Router, private readonly authService: AuthService, private readonly animeService: AnimeService) {
    this.effectCharacter();
    this.effectAnimeList();
  }

  ngOnInit(): void {
    this.getUser();
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/public/login']);
  }

  getUser() {
    this.authService.getProfile$().subscribe({
      next: (user) => {
        console.log(user);
        this.isLogged = user.isLogged;
        // setTimeout(() => {
        //   this.authService.logout(true);
        // }, 3000);
      },
    });
  }

  effectCharacter() {
    effect(() => {
      console.log('Character changed in the header as well:', this.character());
      const character = this.character();
      if (character && character?.favorites !== undefined) console.log(character.favorites > 0);
    });
  }

  effectAnimeList() {
    effect(() => {
      console.log(this.animeList());
    });
  }
}

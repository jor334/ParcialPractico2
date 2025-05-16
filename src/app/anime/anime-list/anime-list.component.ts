import { Component, OnInit } from '@angular/core';
import { Anime } from '../anime';
import { AnimeService } from '../anime.service';

@Component({
  selector: 'app-anime-list',
  templateUrl: './anime-list.component.html',
  styleUrls: ['./anime-list.component.css'],
  standalone: false
})
export class AnimeListComponent implements OnInit {

  promedio!: number;
  numberSeaons!: number;

  selectedBAnime!: Anime;
  selected = false;
  animes: Array<Anime> = [];
  constructor(private animeService: AnimeService) { }

  getAnimes(): void {
    this.animeService.getAnimes().subscribe((animes) => {
      this.animes = animes;
      this.calcularPromedio();
    });
  }

  onSelected(anime: Anime): void {
    this.selected = true;
    this.selectedBAnime = anime;
  }

  calcularPromedio():void {
    let x = 0
    let y = 0
    for (var anime of this.animes){
      x += parseInt(anime.Rating);
      y +=1
    }
    this.promedio = x/y
  }

  ngOnInit() {
    this.getAnimes();
  }

}

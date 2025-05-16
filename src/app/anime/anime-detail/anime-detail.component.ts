import { Component, Input, OnInit } from '@angular/core';
import { Anime } from '../anime';
import { ActivatedRoute } from '@angular/router';
import { AnimeService } from '../anime.service';

@Component({
  selector: 'app-anime-detail',
  templateUrl: './anime-detail.component.html',
  styleUrls: ['./anime-detail.component.css'],
  standalone: false
})
export class AnimeDetailComponent implements OnInit {

  animeId!: string;
  @Input() animeDetail!: Anime;

  getAnime(){
    this.animeService.getAnime(this.animeId).subscribe(apiData => {
      this.animeDetail = apiData;
    })
  }


  constructor(private route:ActivatedRoute, private animeService: AnimeService) { }

  ngOnInit() {
    if (this.animeDetail === undefined){
      this.animeId = this.route.snapshot.paramMap.get("name")!
      if (this.animeId){
        this.getAnime
      }
    }
  }


}

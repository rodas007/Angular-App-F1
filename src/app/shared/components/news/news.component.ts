import { Component, OnInit,Input } from '@angular/core';


@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  @Input() blockNews!: any;



  NewsList = [{
 
  
    image: "https://www.formula1.com/content/dam/fom-website/manual/Misc/2022manual/2022Races/SaudiArabainGP/Sunday/1388029912.jpg.transform/9col/image.jpg",
    name: "Toto Wolff",
    text: "Verstappen beats Leclerc by just 0.5s in epic Saudi Arabian Grand Prix ’",
  },
  
  {
    image: "https://www.formula1.com/content/dam/fom-website/manual/Misc/2022manual/2022Races/SaudiArabainGP/Sunday/GettyImages-1388031217.jpg.transform/9col/image.jpg",
    name: "Toto Wolff",
    text: "Leclerc says ‘every race should be like this’ despite losing stunning Saudi Arabian GP to Verstappen",
  
  },
  {
    image: "https://www.formula1.com/content/dam/fom-website/manual/Misc/2022manual/2022Races/SaudiArabainGP/GettyImages-1388034074.jpg.transform/9col/image.jpg",
    name: "Toto Wolff",
    text: "‘We’ve got a lot work to do’ says Hamilton after scraping solitary point in Saudi Arabian Grand Prix",
  
  },
  {
    image: "https://www.formula1.com/content/dam/fom-website/manual/Misc/2022manual/2022Races/SaudiArabainGP/GettyImages-1388033468.jpg.transform/9col/image.jpg",
    name: "Toto Wolff",
    text: "Verstappen ‘really happy to kickstart the season’ after winning out over Leclerc in sensational Saudi race",
  
  },
  {
    image: "https://d2n9h2wits23hf.cloudfront.net/image/v1/static/6057949432001/06fe818f-e69a-48a7-ae66-75b90862bb11/6a6f8939-577d-43d8-bd44-8216ff59a6e8/864x486/match/image.jpg",
    name: "Toto Wolff",
    text: "MUST-SEE: The Alpine drivers enjoy heart-in-mouth battle in Jeddah",
  
  },
  {
    image: "https://www.formula1.com/content/dam/fom-website/sutton/2022/SaudiArabia/Sunday/1388039782.jpg.transform/9col/image.jpg",
    name: "Toto Wolff",
    text: "FACTS AND STATS: Zero to hero for Red Bull, and a rare achievement for Hamilton",
  
  },
  {
    image: "https://www.formula1.com/content/dam/fom-website/manual/Misc/2022manual/2022Races/SaudiArabainGP/GettyImages-1388001356.jpg.transform/9col/image.jpg",
    name: "Toto Wolff",
    text: "F2: Drugovich dominates to win Saudi Arabia Feature Race from pole",
  
  },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}

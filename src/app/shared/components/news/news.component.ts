import { Component, OnInit,Input } from '@angular/core';


@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  @Input() blockNews!: any;



  NewsList = [{
 
  
    image: "https://www.formula1.com/content/dam/fom-website/manual/Misc/2022manual/2022Races/SaudiArabainGP/GettyImages-1239355682.jpg.transform/9col/image.jpghttps://www.formula1.com/content/dam/fom-website/manual/Misc/2022manual/2022Races/SaudiArabainGP/GettyImages-1239355682.jpg.transform/9col/image.jpg",
    name: "Toto Wolff",
    text: "Wolff admits Mercedes were ‘punching above our weight’ in Bahrain, as he calls 2022 title chances ‘a long shot’",
  },
  
  {
    image: "https://www.formula1.com/content/dam/fom-website/manual/Misc/2022manual/2022Races/SaudiArabainGP/GettyImages-1239355682.jpg.transform/9col/image.jpghttps://www.formula1.com/content/dam/fom-website/manual/Misc/2022manual/2022Races/SaudiArabainGP/GettyImages-1239355682.jpg.transform/9col/image.jpg",
    name: "Toto Wolff",
    text: "Wolff admits Mercedes were ‘punching above our weight’ in Bahrain, as he calls 2022 title chances ‘a long shot’",
  
  },
  {
    image: "https://www.formula1.com/content/dam/fom-website/manual/Misc/2022manual/2022Races/SaudiArabainGP/GettyImages-1239355682.jpg.transform/9col/image.jpghttps://www.formula1.com/content/dam/fom-website/manual/Misc/2022manual/2022Races/SaudiArabainGP/GettyImages-1239355682.jpg.transform/9col/image.jpg",
    name: "Toto Wolff",
    text: "Wolff admits Mercedes were ‘punching above our weight’ in Bahrain, as he calls 2022 title chances ‘a long shot’",
  
  },
  {
    image: "https://www.formula1.com/content/dam/fom-website/manual/Misc/2022manual/2022Races/SaudiArabainGP/GettyImages-1239355682.jpg.transform/9col/image.jpghttps://www.formula1.com/content/dam/fom-website/manual/Misc/2022manual/2022Races/SaudiArabainGP/GettyImages-1239355682.jpg.transform/9col/image.jpg",
    name: "Toto Wolff",
    text: "Wolff admits Mercedes were ‘punching above our weight’ in Bahrain, as he calls 2022 title chances ‘a long shot’",
  
  },
  {
    image: "https://www.formula1.com/content/dam/fom-website/manual/Misc/2022manual/2022Races/SaudiArabainGP/GettyImages-1239355682.jpg.transform/9col/image.jpghttps://www.formula1.com/content/dam/fom-website/manual/Misc/2022manual/2022Races/SaudiArabainGP/GettyImages-1239355682.jpg.transform/9col/image.jpg",
    name: "Toto Wolff",
    text: "Wolff admits Mercedes were ‘punching above our weight’ in Bahrain, as he calls 2022 title chances ‘a long shot’",
  
  },
  {
    image: "https://www.formula1.com/content/dam/fom-website/manual/Misc/2022manual/2022Races/SaudiArabainGP/GettyImages-1239355682.jpg.transform/9col/image.jpghttps://www.formula1.com/content/dam/fom-website/manual/Misc/2022manual/2022Races/SaudiArabainGP/GettyImages-1239355682.jpg.transform/9col/image.jpg",
    name: "Toto Wolff",
    text: "Wolff admits Mercedes were ‘punching above our weight’ in Bahrain, as he calls 2022 title chances ‘a long shot’",
  
  },
  {
    image: "https://www.formula1.com/content/dam/fom-website/manual/Misc/2022manual/2022Races/SaudiArabainGP/GettyImages-1239355682.jpg.transform/9col/image.jpghttps://www.formula1.com/content/dam/fom-website/manual/Misc/2022manual/2022Races/SaudiArabainGP/GettyImages-1239355682.jpg.transform/9col/image.jpg",
    name: "Toto Wolff",
    text: "Wolff admits Mercedes were ‘punching above our weight’ in Bahrain, as he calls 2022 title chances ‘a long shot’",
  
  },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}

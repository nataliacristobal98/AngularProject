import { Component } from '@angular/core';
import { ArticleService } from '../../services/article.service';
import { Article } from '../../models/article';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  providers: [ArticleService]
})
export class HomeComponent {

  public title!: string;
  public articles!: Article[];

  constructor(
    private _articleService: ArticleService
  ){
    this.title = "Últimos artículos"
  }

  ngOnInit(): void {
    this._articleService.getArticles(true).subscribe({  
        next: response => {
          
          if(response.articulos){
            this.articles = response.articulos;
            console.log(this.articles)
          }else{
            
          }
        },
        error: error => console.log("error", error),
        });
      }  
    

}

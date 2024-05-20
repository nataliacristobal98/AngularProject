import { Component, OnInit } from '@angular/core';
import {ArticleService} from '../../services/article.service'
import { Article } from '../../models/article';
import { Global } from '../../services/global';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css',
  providers: [ArticleService]
})
export class BlogComponent implements OnInit{

  public articles!: Article[];
  public url: string;

  constructor(
    private _articleService: ArticleService
  ){
    this.url = Global.url;
  }

  ngOnInit(): void {
    this._articleService.getArticles().subscribe({  
        next: response => {
          console.log(response.articulos)
          if(response.articulos){
            this.articles = response.articulos;
          }else{
            
          }
        },
        error: error => console.log("error", error),
        });
      }  
    

  /*ngOnInit(): void{
    this._articleService.getArticles().subscribe(
      response => {
        if(response.articles){
          this.articles = response.articles;
        }else{
          
        }
      },
      error =>{
        console.log(error);
      }
    );
  }*/

}

import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ArticleService } from '../../services/article.service';
import { Article } from '../../models/article';
import { Global } from '../../services/global';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrl: './article.component.css',
  providers: [ArticleService]
})
export class ArticleComponent implements OnInit {
  public article!: Article;
  public url: string;

  constructor(
    private _articleService: ArticleService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    this.url = Global.url;
  }

  ngOnInit() {
    this._route.params.subscribe((params) => {
      let id = params['id'];

      this._articleService.getArticle(id).subscribe(
        response =>{
          if(response.articulo){
            this.article = response.articulo;  
          }else{
            this._router.navigate(['/home']);
          }
        },
        error =>{
          console.log(error); 
          this._router.navigate(['/home']);
        }
      );

      /*this._articleService.getArticle(id).subscribe({
        next: response => {
          if(response.articulo){
            this.article = response.articulo;  
            console.log(response.articulo)
            console.log(response.articulo.content)
          }else{
            this._router.navigate(['/home']);
          }
        },
        error: error =>{
        console.log(error); 
        this._router.navigate(['/home']);
        }
      });*/
    });
  }

  delete(id: any){
    this._articleService.delete(id).subscribe(
      response =>{
        this._router.navigate(['/blog']);
      },
      error =>{
        console.log(error)
      }
    );
  }
}

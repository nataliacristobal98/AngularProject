import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Article } from '../../models/article';
import { ArticleService } from '../../services/article.service';
import { Global } from '../../services/global';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
  providers: [ArticleService]
})
export class SearchComponent implements OnInit{

  public articles!: Article[];
  public search!: string;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _articleService: ArticleService
  ){

  }

  ngOnInit(){
    this._route.params.subscribe(params =>{
      var search = params['search'];
      this.search = search;

      this._articleService.search(search).subscribe(
        response =>{
          //console.log(response)
          if(response.articles){
            this.articles = response.articles;
            //console.log(this.articles);
          }else{
            this.articles = [];
          }
        },
        error =>{
          console.log(error);
          this.articles = [];
          //this._router.navigate(['/home']);
        }
      );
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Article } from '../../models/article';
import { ArticleService } from '../../services/article.service';
import { Global } from '../../services/global';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
  providers: [ArticleService]
})
export class SidebarComponent implements OnInit{

  public searchString!: string;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _articleService: ArticleService
  ){

  }

  ngOnInit(){
    
  }

  goSearch(){
    this._router.navigate(['/buscar', this.searchString]);
    //alert(this.searchString);
  }
}

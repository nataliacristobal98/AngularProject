import { Component, OnInit } from '@angular/core';
import { Article } from '../../models/article';
import { ArticleService } from '../../services/article.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: '../article-new/article-new.component.html',
  styleUrl: './edit.component.css',
  providers: [ArticleService],
})
export class EditComponent implements OnInit{

  public article!: Article;
  public status!: string;
  public is_edit!: boolean;
  public page_title!: string;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _articleService: ArticleService
  ) {
    this.article = new Article('', '', '', null, '');
    this.is_edit = true;
    this.page_title = 'Editar artículo';
  }


  ngOnInit() {
    this.getArticle();
  }

  onSubmit() {
    this._articleService.update(this.article._id, this.article).subscribe({
      next: (response) => {
        if (response.status == 'success') {
          console.log('salvando');
          this.status = 'success';
          this.article = response.article;

          this._router.navigate(['/blog']);

          //console.log(response)
        } else {
          console.log(response.status);
          this.status = 'error';
        }
      },
      error: (error) => {
        this.status = 'error';
        console.log(error);
      },
    });
    console.log(this.article);
  }

  getArticle(){
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
    });
  }



}

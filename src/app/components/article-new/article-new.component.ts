import { Component, OnInit } from '@angular/core';
import { Article } from '../../models/article';
import { ArticleService } from '../../services/article.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ImageUploaderOptions, FileQueueObject } from 'ngx-image-uploader-next';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-article-new',
  templateUrl: './article-new.component.html',
  template:
    '<ngx-image-uploader [options]="options" (upload)="onUpload($event)"></ngx-image-uploader>',
  styleUrl: './article-new.component.css',
  providers: [ArticleService],
})
export class ArticleNewComponent implements OnInit {
  public options: ImageUploaderOptions = {
    thumbnailHeight: 215,
    thumbnailWidth: 645,
    uploadUrl: 'http://some-server.com/upload',
    allowedImageTypes: ['image/png', 'image/jpeg'],
    maxImageSize: 3,
    autoUpload: false,
    cropAspectRatio: 1,
    fieldName: 'image',
  };

  public article!: Article;
  public status!: string;
  public page_title!: string;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _articleService: ArticleService
  ) {
    this.article = new Article('', '', '', null, '');
    this.page_title = 'Crear artículo';
  }

  ngOnInit() {}

  onSubmit() {
    this._articleService.create(this.article).subscribe({
      next: (response) => {
        if (response.status == 'success') {
          console.log('salvando');
          this.status = 'success';
          this.article = response.article;

          //ALERTA
          Swal.fire('Articulo creado','El artículo se ha creado correctamente');

          this._router.navigate(['/blog']);

          //console.log(response)
        } else {
          console.log(response.status);
          this.status = 'error';
        }
      },
      error: (error) => {
        this.status = 'error';
        Swal.fire('FALLO','El artículo no se ha creado correctamente');

        console.log(error);
      },
    });
    console.log(this.article);
  }

  imageUpload(file: string) {
    /*this._articleService.create(this.article).subscribe({
      next: (response) => {
        if (response.status == 'success') {
          console.log('salvando');
          this.status = 'success';
          this.article.image = file;

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
    console.log('Se ha obtenido tu imagen de manera exitosa');*/
  }
}

import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../../services/articles/article.services'
import { response } from 'express';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css',
  providers: [ArticleService]

})

export class BlogComponent implements OnInit {
  public homeText = "Blog"
  public articles : any ;
  public isLoading = false;

 constructor(
  private _articleService : ArticleService 
 ){
 }

  getArticles() {
    this._articleService.getArticles().then(response => {
      response = response.data;
      if (response.status) {
        this.isLoading = true;
        console.log('ok--->');
        this.articles = response.articles;
        console.log(this.articles)
      }
    });
  }


  ngOnInit(){
    this.getArticles();
  }

}





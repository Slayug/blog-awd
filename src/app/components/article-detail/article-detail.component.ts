import 'rxjs/add/operator/switchMap';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import { AppRoutingModule } from '../../app-routing.module';


import { ArticlesService } from '../../services/articles.service';
import { Article } from '../../entity/Article';


@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.scss']
})
export class ArticleDetailComponent implements OnInit {
    article: Article;
    constructor(
        private articlesService: ArticlesService,
        private route: ActivatedRoute,
        private location: Location
    ) {
    }

    ngOnInit(): void {
        // console.log(this.route.params);
      this.route.params
        .switchMap((params: Params) => this.articlesService.getArticle(+params['id']))
        .subscribe(article => {
            this.article = article;
        });
    }

    goBack(): void {
      this.location.back();
    }
}

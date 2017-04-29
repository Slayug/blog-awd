import { Component, OnInit } from '@angular/core';

import { ArticlesService } from '../../services/articles.service';
import { Article } from '../../entity/Article';
@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {

    public articles: Article[];

    constructor(
        private articleService: ArticlesService
    ) { }

    ngOnInit(): void{
        this.articleService
        .getArticles()
        .then(articles => {
            this.articles = articles;
        });
    }

    public resumeArticle(content: string): string{
        let contentSplitted = content.split(" ");
        if( contentSplitted.length >= 20 ){
            content = contentSplitted.slice(0, 244).join(" ");
        }
        return content;
    }

}

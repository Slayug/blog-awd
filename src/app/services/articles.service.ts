import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Article } from '../entity/Article';


@Injectable()
export class ArticlesService {
    private headers = new Headers({'Content-Type': 'application/json'});
    private articlesUrl = 'api/articles';  // URL to web api

    constructor(private http: Http) { }

    getArticles(): Promise<Article[]> {
        return this.http.get(this.articlesUrl)
        .toPromise()
        .then(response => response.json().data as Article[])
        .catch(this.handleError);
    }


    getArticle(id: number): Promise<Article> {
        const url = `${this.articlesUrl}/${id}`;
        return this.http.get(url)
        .toPromise()
        .then(response => response.json().data as Article)
        .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
      console.error('An error occurred', error); // for demo purposes only
      return Promise.reject(error.message || error);
    }


}

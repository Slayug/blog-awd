import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Project } from '../entity/Project';

@Injectable()
export class ProjectsService {
    private headers = new Headers({'Content-Type': 'application/json'});
    private projectsUrl = 'api/projects';  // URL to web api

    constructor(private http: Http) { }

    getArticles(): Promise<Project[]> {
        return this.http.get(this.projectsUrl)
        .toPromise()
        .then(response => response.json().data as Project[])
        .catch(this.handleError);
    }


    getArticle(id: number): Promise<Project> {
        const url = `${this.projectsUrl}/${id}`;
        return this.http.get(url)
        .toPromise()
        .then(response => response.json().data as Project)
        .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
      console.error('An error occurred', error); // for demo purposes only
      return Promise.reject(error.message || error);
    }

}

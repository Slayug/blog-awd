import { Component, OnInit } from '@angular/core';


import { ProjectsService } from '../../services/projects.service';
import { Project } from '../../entity/Project';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

    public projects: Project[];

    constructor(
        private projectsService: ProjectsService
    ) { }

    ngOnInit(): void{
        this.projectsService
        .getProjects()
        .then(projects => {
            this.projects = projects;
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

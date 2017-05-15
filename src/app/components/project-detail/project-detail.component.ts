import 'rxjs/add/operator/switchMap';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import { AppRoutingModule } from '../../app-routing.module';


import { ProjectsService } from '../../services/projects.service';
import { Project } from '../../entity/Project';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss']
})
export class ProjectDetailComponent implements OnInit {
    project: Project;
    constructor(
        private projectsService: ProjectsService,
        private route: ActivatedRoute,
        private location: Location
    ) {
    }

    ngOnInit(): void {
        // console.log(this.route.params);
      this.route.params
        .switchMap((params: Params) => this.projectsService.getProject(+params['id']))
        .subscribe(project => {
            this.project = project;
        });
    }

    goBack(): void {
      this.location.back();
    }
}

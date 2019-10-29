import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {FormControl, FormGroup} from '@angular/forms';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-pilot-form',
  templateUrl: './pilot-form.component.html',
  styleUrls: ['./pilot-form.component.css']
})
export class PilotFormComponent implements OnInit {

  form: FormGroup;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data
      .pipe(map((data) => data.pilot))
      .subscribe((pilot) => {
        this.form = new FormGroup({
          id: new FormControl(pilot.id),
          firstName: new FormControl(pilot.firstName),
          lastName: new FormControl(pilot.lastName),
          imageUrl: new FormControl(pilot.imageUrl)
        });
      });
  }

}

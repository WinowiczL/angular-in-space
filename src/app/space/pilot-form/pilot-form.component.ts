import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {map} from 'rxjs/operators';
import {PilotService} from '../pilot.service';
import {PilotAttrs} from '../model/pilot-attrs';
import {PilotValidators} from '../pilot-validators';

@Component({
  selector: 'app-pilot-form',
  templateUrl: './pilot-form.component.html',
  styleUrls: ['./pilot-form.component.css']
})
export class PilotFormComponent implements OnInit {

  form: FormGroup;

  constructor(private route: ActivatedRoute, private router: Router, private pilotService: PilotService) {
  }

  ngOnInit() {
    this.route.data
      .pipe(map((data) => data.pilot))
      .subscribe((pilot) => {
        this.form = new FormGroup({
          id: new FormControl(pilot.id),
          lastName: new FormControl(pilot.firstName, {validators: [Validators.required], asyncValidators: [PilotValidators.pilotForbidden]}),
          firstName: new FormControl(pilot.lastName, {validators: [Validators.required, PilotValidators.pilotName]}),
          imageUrl: new FormControl(pilot.imageUrl)
        }, {updateOn: 'blur'});
      });
  }

  save() {
    const pilotAttrs = this.form.value;
    this.pilotService.savePilot(pilotAttrs).subscribe(
      () => this.router.navigate(['../..'], {relativeTo: this.route}),
      () => alert('Nie udalo się zapisać pilota')
    );
  }

}

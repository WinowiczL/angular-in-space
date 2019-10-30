import {PilotRoomComponent} from './pilot-room.component';
import {Component, Injectable, Input} from '@angular/core';
import {Pilot} from '../pilot';
import {PilotService} from '../pilot.service';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {of, throwError} from 'rxjs';
import {By} from '@angular/platform-browser';

@Component({
  selector: 'app-pilot',
  template: 'pilot {{pilot.firstName}} <ng-content></ng-content>'
})
class PilotMockComponent {
  @Input() pilot: Pilot;
}

@Injectable()
class PilotMockService extends PilotService {
  constructor() {
    super(null);
  }
}

fdescribe('PilotRoomComponent', () => {
  let component: PilotRoomComponent;
  let fixutre: ComponentFixture<PilotRoomComponent>;
  let pilotService: PilotService;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [PilotRoomComponent, PilotMockComponent],
      providers: [{
        provide: PilotService,
        useClass: PilotMockService
      }]
    }).compileComponents();
  });

  beforeEach(() => {
    pilotService = TestBed.get(PilotService);
    fixutre = TestBed.createComponent(PilotRoomComponent);
    component = fixutre.componentInstance;
  });

  describe('when pilots fetched successfully', () => {
    let pilot: Pilot;

    beforeEach(() => {
      pilot = new Pilot({id: 1, firstName: 'firstName', lastName: 'lastName'});
      spyOn(pilotService, 'getPilots').and.returnValue(of([pilot]));
      spyOn(component.selected, 'emit');
      fixutre.detectChanges();
    });

    it('should display pilots', () => {
      expect(fixutre.nativeElement.textContent).toContain('firstName');
    });

    describe('when pilot is being selected', () => {
      beforeEach(() => {
        const selectButton = fixutre.debugElement.query(By.css('.select-button'));
        selectButton.nativeElement.click();
        fixutre.detectChanges();
      });

      it('should store selected pilot', () => {
        expect(component.selectedPilot).toBe(pilot);
      });

      it('should emit pilot', () => {
        expect(component.selected.emit).toHaveBeenCalledWith(pilot);
      });
    });

    describe('when pilot is being deselected', () => {
      beforeEach(() => {
        component.selectedPilot = pilot;
        fixutre.detectChanges();
        const deselectButton = fixutre.debugElement.query(By.css('.deselect-button'));
        deselectButton.nativeElement.click();
      });

      it('should clear selection', () => {
        expect(component.selectedPilot).toBeNull();
      });

      it('should emit null', () => {
        expect(component.selected.emit).toHaveBeenCalledWith(null);
      });
    });
  });
  describe('when pilots fetch failed', () => {
    beforeEach(() => {
      spyOn(pilotService, 'getPilots').and.returnValue(throwError('error'));
      spyOn(window, 'alert');
      fixutre.detectChanges();
    });

    it('should display alert with warning', () => {
      expect(window.alert).toHaveBeenCalledWith(jasmine.any(String));
    });
  });
});

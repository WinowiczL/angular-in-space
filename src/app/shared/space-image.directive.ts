import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appSpaceImage]'
})
export class SpaceImageDirective {

  zoom = 1.0;

  @HostBinding('style.transform')
  get scale() {
    return `scale(${this.zoom})`;
  }

  @HostListener('mousemove')
  zoomIn() {
    if (this.zoom < 1.5) {
      this.zoom += 0.05;

    }
  }

  @HostListener('mouseout')
  resetZoom() {
    this.zoom = 1.0;
  }

  constructor() {
  }

}

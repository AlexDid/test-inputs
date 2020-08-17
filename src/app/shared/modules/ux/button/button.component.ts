import { Component } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {

  animated = false;

  onButtonClick(): void {
    this.animated = true;
    setTimeout(() => this.animated = false, 300);
  }
}

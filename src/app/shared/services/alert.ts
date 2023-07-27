import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-alert',
  template: `
    <div class="bg-{{type}} p-5 rounded" style="color: whitesmoke;">
        <h3>Koursera Notification</h3>
        <hr>
        <h5>{{ message }}</h5>
    </div>
  `,
})
export class AlertComponent {
  @Input() type: string='';
  @Input() message: string='';
}
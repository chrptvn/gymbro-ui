import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-ad-placeholder',
    imports: [CommonModule],
    template: `
    <div class="ad-placeholder" [style.width.px]="width" [style.height.px]="height">
      <div class="ad-title">Advertisement</div>
      <div class="ad-size">{{ width }}x{{ height }}</div>
    </div>
  `,
    styleUrls: ['./ad-placeholder.component.scss']
})
export class AdPlaceholderComponent {
  @Input() width = 0;
  @Input() height = 0;
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AdPlaceholderComponent} from "../ad-placeholder/ad-placeholder.component";

@Component({
    selector: 'app-leader-board-ad',
    imports: [CommonModule, AdPlaceholderComponent],
    templateUrl: './leader-board-ad.component.html',
    styleUrl: './leader-board-ad.component.scss'
})
export class LeaderBoardAdComponent {
}

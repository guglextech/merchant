import { Component } from '@angular/core';
import { DashboardLayoutComponent } from 'src/app/shared/components/dashboard-layout/dashboard-layout.component';
import { FLASHSCORE_MENU } from './constant/sidebar-routes';

@Component({
  selector: 'app-flashscore',
  standalone: true,
  imports: [DashboardLayoutComponent],
  templateUrl: './flashscore.component.html',
  styleUrl: './flashscore.component.scss'
})
export class FlashscoreComponent {
  FLASHSCORE_MENU = FLASHSCORE_MENU;
}


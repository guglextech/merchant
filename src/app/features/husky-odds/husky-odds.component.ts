import { Component } from '@angular/core';
import { DashboardLayoutComponent } from 'src/app/shared/components/dashboard-layout/dashboard-layout.component';
import { HUSKY_ODDS_MENU } from './constant/sidebar-routes';

@Component({
  selector: 'app-husky-odds',
  standalone: true,
  imports: [DashboardLayoutComponent],
  templateUrl: './husky-odds.component.html',
  styleUrl: './husky-odds.component.scss'
})
export class HuskyOddsComponent {
  HUSKY_ODDS_MENU = HUSKY_ODDS_MENU;
}


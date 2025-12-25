import { Component } from '@angular/core';
import { DashboardLayoutComponent } from 'src/app/shared/components/dashboard-layout/dashboard-layout.component';
import { BET_LORD_MENU } from './constant/sidebar-routes';

@Component({
  selector: 'app-bet-lord',
  standalone: true,
  imports: [DashboardLayoutComponent],
  templateUrl: './bet-lord.component.html',
  styleUrl: './bet-lord.component.scss'
})
export class BetLordComponent {
  BET_LORD_MENU = BET_LORD_MENU;
}


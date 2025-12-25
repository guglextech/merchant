import { Component } from '@angular/core';
import { DashboardLayoutComponent } from 'src/app/shared/components/dashboard-layout/dashboard-layout.component';
import { ODDS_ORACLE_MENU } from './constant/sidebar-routes';

@Component({
  selector: 'app-odds-oracle',
  standalone: true,
  imports: [DashboardLayoutComponent],
  templateUrl: './odds-oracle.component.html',
  styleUrl: './odds-oracle.component.scss'
})
export class OddsOracleComponent {
  ODDS_ORACLE_MENU = ODDS_ORACLE_MENU;
}


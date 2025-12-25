import { Component } from '@angular/core';
import { DashboardLayoutComponent } from 'src/app/shared/components/dashboard-layout/dashboard-layout.component';
import { TOPMATCHES_MENU } from './constant/sidebar-routes';

@Component({
  selector: 'app-topmatches',
  standalone: true,
  imports: [DashboardLayoutComponent],
  templateUrl: './topmatches.component.html',
  styleUrl: './topmatches.component.scss'
})
export class TopmatchesComponent {
  TOPMATCHES_MENU = TOPMATCHES_MENU;
}


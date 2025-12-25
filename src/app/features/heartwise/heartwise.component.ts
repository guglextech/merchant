import { Component } from '@angular/core';
import { DashboardLayoutComponent } from 'src/app/shared/components/dashboard-layout/dashboard-layout.component';
import { HEARTWISE_MENU } from './constant/sidebar-routes';

@Component({
  selector: 'app-heartwise',
  standalone: true,
  imports: [DashboardLayoutComponent],
  templateUrl: './heartwise.component.html',
  styleUrl: './heartwise.component.scss'
})
export class HeartwiseComponent {
  HEARTWISE_MENU = HEARTWISE_MENU;
}


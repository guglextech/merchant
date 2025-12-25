import { Component } from '@angular/core';
import { DashboardLayoutComponent } from 'src/app/shared/components/dashboard-layout/dashboard-layout.component';
import { JOBSALERT_MENU } from './constant/sidebar-routes';

@Component({
  selector: 'app-jobsalert',
  standalone: true,
  imports: [DashboardLayoutComponent],
  templateUrl: './jobsalert.component.html',
  styleUrl: './jobsalert.component.scss'
})
export class JobsalertComponent {
  JOBSALERT_MENU = JOBSALERT_MENU;
}


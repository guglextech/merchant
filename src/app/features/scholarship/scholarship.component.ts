import { Component } from '@angular/core';
import { DashboardLayoutComponent } from 'src/app/shared/components/dashboard-layout/dashboard-layout.component';
import { SCHOLARSHIP_MENU } from './constant/sidebar-routes';

@Component({
  selector: 'app-scholarship',
  standalone: true,
  imports: [DashboardLayoutComponent],
  templateUrl: './scholarship.component.html',
  styleUrl: './scholarship.component.scss'
})
export class ScholarshipComponent {
  SCHOLARSHIP_MENU = SCHOLARSHIP_MENU;
}


import { Component } from '@angular/core';
import { DashboardLayoutComponent } from 'src/app/shared/components/dashboard-layout/dashboard-layout.component';
import { SPORTAGA_MENU } from './constant/sidebar-routes';

@Component({
  selector: 'app-sportaga',
  standalone: true,
  imports: [DashboardLayoutComponent],
  templateUrl: './sportaga.component.html',
  styleUrl: './sportaga.component.scss'
})
export class SportagaComponent {
  SPORTAGA_MENU = SPORTAGA_MENU;
}


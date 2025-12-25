import { Component } from '@angular/core';
import { DashboardLayoutComponent } from 'src/app/shared/components/dashboard-layout/dashboard-layout.component';
import { BUSINESSKEY_MENU } from './constant/sidebar-routes';

@Component({
  selector: 'app-businesskey',
  standalone: true,
  imports: [DashboardLayoutComponent],
  templateUrl: './businesskey.component.html',
  styleUrl: './businesskey.component.scss'
})
export class BusinesskeyComponent {
  BUSINESSKEY_MENU = BUSINESSKEY_MENU;
}


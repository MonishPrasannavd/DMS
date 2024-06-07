import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { InputOtpModule } from 'primeng/inputotp';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-otp-page',
  standalone: true,
  imports: [InputOtpModule, RouterLink,
     RouterOutlet, FormsModule],
  templateUrl: './otp-page.component.html',
  styleUrl: './otp-page.component.css'
})
export class OtpPageComponent {
 value:any
}

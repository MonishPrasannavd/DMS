import { Component } from '@angular/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-headernav',
  standalone: true,
  imports: [NgbDropdownModule],
  templateUrl: './headernav.component.html',
  styleUrl: './headernav.component.css'
})
export class HeadernavComponent {

}

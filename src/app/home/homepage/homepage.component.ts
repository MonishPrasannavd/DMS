import { Component, OnInit, TemplateRef, inject } from '@angular/core';
import { HeadernavComponent } from "../../nav-component/headernav/headernav.component";
import { SidenavComponent } from "../../nav-component/sidenav/sidenav.component";
import { HomemenuComponent } from "../homemenu/homemenu.component";
import { NgbDropdownModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { FileUploadModule } from 'primeng/fileupload';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
interface UploadEvent {
    originalEvent: Event;
    files: File[];
}

@Component({
    selector: 'app-homepage',
    standalone: true,
    templateUrl: './homepage.component.html',
    styleUrl: './homepage.component.css',
    imports: [HeadernavComponent, SidenavComponent, 
        HomemenuComponent,
        NgbDropdownModule,
        FormsModule, 
        CommonModule,
        NgbNavModule,
        FileUploadModule,
        ToastModule],
    providers: [MessageService]
})
export class HomepageComponent  implements OnInit{
    active = 'top';
    defaultOption = 'Owned by me';
    selectedOption = this.defaultOption;
    options = [this.defaultOption, 'Sort by name', 'Sort by Date', 'Shared With Me'];
    private modalService = inject(NgbModal);
    get filteredOptions() {
      return this.options.filter(option => option !== this.selectedOption);
    }
  
    selectOption(option: string) {
      this.selectedOption = option;
    }
    ngOnInit() {
    }

    // modal box
    openSm(content: TemplateRef<any>) {
		this.modalService.open(content, { centered: true, size: 'sm'  });
	}
  open(content: TemplateRef<any>) {
		this.modalService.open(content, { centered: true});
	}
}

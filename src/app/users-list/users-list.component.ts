import { Component, inject } from '@angular/core';
import { SideNavComponent } from "../nav/side-nav/side-nav.component";
import { HeaderComponent } from "../nav/header/header.component";
import { NgbActiveModal, NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-users-list',
  standalone: true,
  imports: [SideNavComponent, HeaderComponent],
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.css'
})
export class UsersListComponent {
  constructor(
		config: NgbModalConfig,
		private modalService: NgbModal,
	) {
		// customize default values of modals used by this component tree
		config.backdrop = 'static';
		config.keyboard = false;
	}

	open(content: any) {
		this.modalService.open(content, { size: 'lg', centered: true });
	}
}

import { Component } from '@angular/core';
import { SideNavComponent } from "../nav/side-nav/side-nav.component";
import { HeaderComponent } from "../nav/header/header.component";
import { NgbProgressbarModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-jobseakers',
  standalone: true,
  imports: [SideNavComponent, HeaderComponent, NgbProgressbarModule],
  templateUrl: './jobseakers.component.html',
  styleUrl: './jobseakers.component.css',

})
export class JobseakersComponent {

}

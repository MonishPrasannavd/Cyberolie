import { Component } from '@angular/core';
import { SideNavComponent } from "../nav/side-nav/side-nav.component";
import { HeaderComponent } from "../nav/header/header.component";

@Component({
  selector: 'app-recrutier',
  standalone: true,
  imports: [SideNavComponent, HeaderComponent],
  templateUrl: './recrutier.component.html',
  styleUrl: './recrutier.component.css'
})
export class RecrutierComponent {

}

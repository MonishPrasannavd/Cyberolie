import { Component, NgModule } from '@angular/core';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { SideNavComponent } from "../../nav/side-nav/side-nav.component";
import { HeaderComponent } from "../../nav/header/header.component";

@Component({
  selector: 'app-jobmaster',
  standalone: true,
  imports: [RouterLink, RouterOutlet, RouterModule, SideNavComponent, HeaderComponent],
  templateUrl: './jobmaster.component.html',
  styleUrl: './jobmaster.component.css'
})
export class JobmasterComponent {

}

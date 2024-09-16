import { AfterViewInit, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SideNavComponent } from "../../nav/side-nav/side-nav.component";
import { HeaderComponent } from "../../nav/header/header.component";
import Quill from 'quill';

@Component({
  selector: 'app-addjobs',
  standalone: true,
  imports: [RouterLink, SideNavComponent, FormsModule, HeaderComponent,CommonModule],
  templateUrl: './addjobs.component.html',
  styleUrl: './addjobs.component.css'
})
export class AddjobsComponent implements AfterViewInit  {
  ngAfterViewInit() {
    const quill = new Quill('#editor-container', {
      theme: 'snow',
      modules: {
        toolbar: [
          
          [{ 'header': [1, 2, 3, 4, 5, 6, false] }], 
          [{ 'size': ['small', false, 'large', 'huge'] }],
          [{ 'list': 'ordered'}, { 'list': 'bullet' }],
          [{ 'color': [] }, { 'background': [] }],
          ['bold', 'italic', 'underline', 'strike'],
          [{ 'align': [] }], 
          ['blockquote', 'code-block'],
          [{ 'script': 'sub'}, { 'script': 'super' }],
          [{ 'indent': '-1'}, { 'indent': '+1' }],
          ['clean'],
          ['image', 'link']
        ]
      }
    });
  }
  
}

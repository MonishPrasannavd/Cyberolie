import { Component } from '@angular/core';
import { SideNavComponent } from "../nav/side-nav/side-nav.component";
import { HeaderComponent } from "../nav/header/header.component";
import { NgbProgressbarModule } from '@ng-bootstrap/ng-bootstrap';
import * as XLSX from 'xlsx';
@Component({
  selector: 'app-jobseakers',
  standalone: true,
  imports: [SideNavComponent, HeaderComponent, NgbProgressbarModule],
  templateUrl: './jobseakers.component.html',
  styleUrl: './jobseakers.component.css',

})
export class JobseakersComponent {
  
  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      const fileReader = new FileReader();
      fileReader.onload = (e: any) => {
        const binaryData = e.target.result;
        const workbook = XLSX.read(binaryData, { type: 'binary' });

        // Read the first sheet of the Excel file
        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];

        // Convert sheet to JSON
        const data = XLSX.utils.sheet_to_json(sheet, { header: 1 });
        console.log('Parsed Data:', data);

        // Further processing of data as per your requirements
      };

      fileReader.readAsBinaryString(file);
    }
  }
}

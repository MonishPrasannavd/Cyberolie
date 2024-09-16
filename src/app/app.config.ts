import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { NgbModal, NgbModalConfig, NgbProgressbarConfig } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideAnimations } from '@angular/platform-browser/animations';
import { QuillModule } from 'ngx-quill';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), 
    NgbProgressbarConfig,
    provideAnimations(),
    NgbModalConfig, 
    NgbModal,
    importProvidersFrom([BrowserAnimationsModule,QuillModule.forRoot()])
  ],
};

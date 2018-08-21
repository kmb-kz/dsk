import { Component } from '@angular/core';


import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {

  page_without_header = false;
  page_without_sidebar = false;
  page_with_mega_menu = false;
  page_with_two_sidebar = false;
  page_sidebar_transparent = false;
  title = 'app';


  setPageWithoutHeader(setting: boolean) {
    this.page_without_header = setting;

    if (this.page_without_header) {
      window.dispatchEvent(new CustomEvent('page-without-header'));
    } else {
      window.dispatchEvent(new CustomEvent('clear-without-header'));
    }
  }

  setPageWithoutSidebar(setting: boolean) {
    this.page_without_sidebar = setting;
  }
  setPageTwoSidebar(setting: boolean) {
    this.page_with_two_sidebar = setting;
  }


}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CloukitThemeModule } from '@cloukit/theme';
import { CloukitStoryModule, CloukitStoryService } from '@cloukit/story';
import { DemoComponent } from './demo.component';
import { CloukitPaginationModule } from '../index';
import { Story00Component } from './stories/story-00-basic';
import { Story01Component } from './stories/story-01-disabled';
import { Story02Component } from './stories/story-02-small';

@NgModule({
  declarations: [
    DemoComponent,
    Story00Component,
    Story01Component,
    Story02Component,
  ],
  exports: [ DemoComponent ],
  imports: [
    CommonModule,
    CloukitThemeModule,
    CloukitPaginationModule,
    CloukitStoryModule,
  ],
  providers: [ ],
  bootstrap: [ ],
})
export class DemoModule {
  constructor(private cloukitStoryService: CloukitStoryService) {
    //
    // INITIALIZE STORY SOURCES
    //
    const baseUrl = document.getElementsByTagName('base')[0].href;
    const storySourceJsonUrl = `${baseUrl}assets/demoStoriesSource.json`; // File is auto generated by build chain!
    this.cloukitStoryService.loadStoryJson(storySourceJsonUrl);
  }
}
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CeuiAlertModule, CeuiTabsModule } from '@ceui/core/components';
import { AlertComponent } from './components/alert/alert.component';
import { TabGroupComponent } from './components/tab-group/tab-group.component';

@NgModule({
  declarations: [
    AppComponent,
    AlertComponent,
    TabGroupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CeuiAlertModule,
    CeuiTabsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CeuiManagerPluginProvider } from '@ceui/cdk/services';
import { CeuiAccordionModule } from '@ceui/core/components';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CeuiAccordionModule,
  ],
  providers: [
    CeuiManagerPluginProvider,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AgmCoreModule } from "@agm/core";

import { AppComponent } from "./app.component";

@NgModule({
  imports: [
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyCBf9OKxvb3GjIhVBltVYCq9ryIkiXDSyI",
      libraries: ["places"]
    }),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}

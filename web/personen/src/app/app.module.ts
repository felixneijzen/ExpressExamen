import { BrowserModule } from "@angular/platform-browser";
import { ReactiveFormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from "./app.component";
import { ToevoegenComponent } from "./toevoegen/toevoegen.component";
import { LijstComponent } from "./lijst/lijst.component";
import { ZoekenComponent } from "./zoeken/zoeken.component";
import { VerwijderenComponent } from "./verwijderen/verwijderen.component";

const appRoutes: Routes = [
  { path: "toevoegen", component: ToevoegenComponent },
  { path: "lijst", component: LijstComponent },
  { path: "zoeken", component: ZoekenComponent },
  { path: "verwijderen", component: VerwijderenComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ToevoegenComponent,
    LijstComponent,
    ZoekenComponent,
    VerwijderenComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

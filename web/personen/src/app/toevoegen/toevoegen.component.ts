import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { PersonenService } from "../personen.service";

@Component({
  selector: "app-toevoegen",
  templateUrl: "./toevoegen.component.html",
  styleUrls: ["./toevoegen.component.css"]
})
export class ToevoegenComponent implements OnInit {
  profileForm = new FormGroup({
    naam: new FormControl(""),
    geboortedatum: new FormControl(""),
    studierichting: new FormControl("")
  });

  personen;
  constructor(private ps: PersonenService) {}

  ngOnInit() {}

  addPersonen() {
    /*this.ps
      .zoek(this.profileForm.value).then(result => {
        if (!result) {
          this.ps.addPersonen(this.profileForm.value);
          console.log("toegevoegd!");
        }
      });*/
    this.ps.addPersonen(this.profileForm.value);
    console.log(this.personen);
  }
}

import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { PersonenService } from "../personen.service";

@Component({
  selector: "app-verwijderen",
  templateUrl: "./verwijderen.component.html",
  styleUrls: ["./verwijderen.component.css"]
})
export class VerwijderenComponent implements OnInit {
  naam = new FormControl("");
  constructor(private ps: PersonenService) {}

  ngOnInit() {}

  verwijderen() {
    this.ps.verwijderen(this.naam.value);
  }
}

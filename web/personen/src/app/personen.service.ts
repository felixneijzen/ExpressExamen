import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class PersonenService {
  url: string = "http://localhost:3000/";
  constructor() {}

  getPersonen(): Promise<string> {
    return fetch(`${this.url}users`, {
      method: "GET"
    }).then(response => response.json());
  }

  addPersonen(data): Promise<string> {
    return fetch(`${this.url}users/toevoegen`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    }).then(response => response.json());
  }

  zoek(data): Promise<string> {
    return fetch(`${this.url}users/${data}`, {
      method: "GET"
    }).then(response => response.json());
  }

  verwijderen(data): void {
    console.log(data);
    fetch(`${this.url}users/${data}`, {
      method: "DELETE"
    });
  }
}

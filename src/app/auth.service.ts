import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  private apiUrl = "https://reqres.in/api";

  constructor() {}

  register(email: string, password: string): Promise<any> {
    const url = `${this.apiUrl}/register`;
    const data = {
      email: email,
      password: password,
    };

    return fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .catch((error) => {
        console.error("Error during registration:", error);
        throw error;
      });
  }

  login(email: string, password: string): Promise<any> {
    const url = `${this.apiUrl}/login`;
    const data = {
      email: email,
      password: password,
    };

    return fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .catch((error) => {
        console.error("Error during login:", error);
        throw error;
      });
  }
}

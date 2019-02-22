export class Utilisateur {
  Id: number;
  Username: string;
  Password: string;
  Nom: string;
  Prenom: string;
  Telephone: string;
  Email: string;

  public getUsername(): string {
    return this.Username;
}
}

export class User {
  id: number = 0;
  name: string = '';
  surname: string = '';
  email: string = '';
  password: string = '';
  isLogged: boolean = false;
  isAdmin: boolean = false;

  constructor(res?: any) {
    if (res) {
      this.id = res.id;
      this.name = res.name;
      this.surname = res.surname;
      this.email = res.email;
      this.password = res.password;
      this.isLogged = res.isLogged;
      this.isAdmin = res.isAdmin;
    }
  }
}



class User {
  id: string;
  name: string;
  email: string;
  age: number;

  constructor(id: string, name: string, email: string, age: number) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.age = age;
  }
}

export default User;
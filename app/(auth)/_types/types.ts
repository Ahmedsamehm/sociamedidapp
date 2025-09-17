export interface signupBody {
  name: string;
  email: string;
  password: string;
  rePassword: string;
  dateOfBirth: string;
  gender: string;
}

export interface Login {
  email: string;
  password: string;
}

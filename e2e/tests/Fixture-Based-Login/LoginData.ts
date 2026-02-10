interface LoginData {
  username: string;
  password: string;
}

export const loginData: LoginData = {
  username: process.env.USERNAME || '',
  password: process.env.PASSWORD || '',
}
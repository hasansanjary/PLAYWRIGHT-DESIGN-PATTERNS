// interface LoginData {
//   username: string;
//   password: string;
// }

// export const loginData: LoginData = {
//   username: process.env.USERNAME || "domainlogin",
//   password: process.env.PASSWORD || "domainpass",
// }


interface LoginData {
  username: string;
  password: string;
}

export const loginData: LoginData = {
  username: "demologin",
  password: "demopass",

}

export const invalidLoginData: LoginData = {
  username: "login",
  password: "pass",

}
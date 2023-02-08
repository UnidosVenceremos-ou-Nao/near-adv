export interface FirebaseUser {
  uid: string;
  email: string;
  displayName: string;
  photoURL: string;
  emailVerified: boolean;
}

export class Usuario {
  uid: string = '';
  id!: number;
  perfil: string = '';
  nome: string = '';
  email: string = '';
  senha: string = '';
}

export class NovoUsuario {
  nome!: string;
  email!: string;
  senha!: string;
  uid!: string;
  celular!: string;
}

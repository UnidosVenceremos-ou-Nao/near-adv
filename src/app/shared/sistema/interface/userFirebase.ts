import { TokenManager } from './tokenmanager';

export class UserFirebase {
  apiKey: string = '';
  appName: string = '';
  createdAt: string = '';
  email: string = '';
  emailVerified: boolean = false;
  isAnonymous: boolean = false;
  lastLoginAt: string = '';
  providerData: any[] = [];
  stsTokenManager: TokenManager = new TokenManager();

  constructor(
    keyApp?: any,
    nameApp?: any,
    atCreated?: any,
    userEmail?: any,
    verifiedEmail?: any,
    anonymous?: any,
    lastLogin?: any,
    provider?: any,
    sts?: TokenManager
  ) {
    this.apiKey = keyApp;
    this.appName = nameApp;
    this.createdAt = atCreated;
    this.email = userEmail;
    this.emailVerified = verifiedEmail;
    this.isAnonymous = anonymous;
    lastLogin = lastLogin;
    this.providerData = provider;
    this.stsTokenManager = sts!;
  }
}

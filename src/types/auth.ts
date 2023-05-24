export enum SignUpStep {
  BaseStep,
  VerifyStep,
  VerificationSuccessful,
}

export type UserAttributes = {
  email: string;
  email_verified: boolean;
  name: string;
  sub: string;
};

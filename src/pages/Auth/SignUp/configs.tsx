import { SignUpStep } from '@type/auth';

import { Base } from './Base';
import { Verify } from './Verify';
import { VerificationCompleted } from './VerifyCompleted';

export const signUpSteps = {
  [SignUpStep.BaseStep]: {
    Component: Base,
  },
  [SignUpStep.VerifyStep]: {
    Component: Verify,
  },
  [SignUpStep.VerificationSuccessful]: {
    Component: VerificationCompleted,
  },
};

// @flow
import * as React from 'react';
import { action } from '@storybook/addon-actions';

import muiDecorator from '../../../ThemeDecorator';
import paperDecorator from '../../../PaperDecorator';
import {
  fakeSilverAuthenticatedUser,
  fakeAuthenticatedUserWithNoSubscription,
} from '../../../../fixtures/GDevelopServicesTestData';
import SubscriptionPendingDialog from '../../../../Profile/Subscription/SubscriptionPendingDialog';

export default {
  title: 'Subscription/SubscriptionPendingDialog',
  component: SubscriptionPendingDialog,
  decorators: [paperDecorator, muiDecorator],
};

export const DefaultNoSubscription = () => (
  <SubscriptionPendingDialog
    authenticatedUser={fakeAuthenticatedUserWithNoSubscription}
    onClose={action('on close')}
  />
);
export const AuthenticatedUserWithSubscription = () => (
  <SubscriptionPendingDialog
    authenticatedUser={fakeSilverAuthenticatedUser}
    onClose={action('on close')}
  />
);

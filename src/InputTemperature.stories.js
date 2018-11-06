import React from 'react';
import { storiesOf } from '@storybook/react';

import InputTemperature from './InputTemperature';

storiesOf('InputTemperature basic test', module)
  .add('default', () => <InputTemperature  />)
 
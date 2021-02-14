import {action} from '@storybook/addon-actions';
import {text, withKnobs} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react-native';
import React from 'react';
import {Text} from 'react-native';
import {Button} from '@enoveh/uikit';
import GeneralDecorator from '../decorators';

storiesOf('Button', module)
  .addDecorator(withKnobs)
  .addDecorator(GeneralDecorator)
  .add('with text', () => (
    <Button onPress={action('clicked-text')}>
      <Text>{text('Button text', 'Hello Button')}</Text>
    </Button>
  ))
  .add('with some emoji', () => (
    <Button onPress={action('clicked-emoji')}>
      <Text>😀 😎 👍 💯</Text>
    </Button>
  ));

import type { Meta, StoryObj } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { LoginForm } from './LoginForm';

const meta = {
  title: 'feature/LoginForm',
  component: LoginForm,
} satisfies Meta<typeof LoginForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
  decorators: [StoreDecorator({
    loginForm: { username: '123', password: 'abc' },
  })],
};

export const withError: Story = {
  args: {},
  decorators: [StoreDecorator({
    loginForm: { username: '123', password: 'abc', error: 'ERROR' },
  })],
};

export const Loading: Story = {
  args: {},
  decorators: [StoreDecorator({
    loginForm: { isLoading: true },
  })],
};

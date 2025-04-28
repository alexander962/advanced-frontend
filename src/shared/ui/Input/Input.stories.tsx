import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Input } from 'shared/ui/Input/Input';

const meta = {
  title: 'shared/Input',
  component: Input,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  args: { onClick: fn() },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    placeholder: 'Type text',
    value: '123123',
  },
};

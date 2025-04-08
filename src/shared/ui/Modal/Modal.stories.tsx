import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Modal } from 'shared/ui/Modal/Modal';

const meta = {
  title: 'shared/Modal',
  component: Modal,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  // args: { onClick: fn() },
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    isOpen: true,
    children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto assumenda dolorem dolorum ducimus earum eius, iste, iusto labore, laboriosam minima molestias odit omnis perferendis possimus quam quas reiciendis sapiente sint.',
  },
};

export const Dark: Story = {
  args: {
    isOpen: true,
    children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto assumenda dolorem dolorum ducimus earum eius, iste, iusto labore, laboriosam minima molestias odit omnis perferendis possimus quam quas reiciendis sapiente sint.',
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

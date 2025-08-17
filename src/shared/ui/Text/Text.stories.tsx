import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Text, TextTheme } from './Text';

const meta = {
  title: 'shared/Text',
  component: Text,
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    title: 'Title lorem ipsun',
    text: 'Description Description Description Description',
  },
};

export const Error: Story = {
  args: {
    title: 'Title lorem ipsun',
    text: 'Description Description Description Description',
    theme: TextTheme.ERROR,
  },
};

export const onlyTitle: Story = {
  args: {
    title: 'Title lorem ipsun',
  },
};

export const onlyText: Story = {
  args: {
    text: 'Description Description Description Description',
  },
};

export const PrimaryDark: Story = {
  args: {
    title: 'Title lorem ipsun',
    text: 'Description Description Description Description',
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const onlyTitleDark: Story = {
  args: {
    title: 'Title lorem ipsun',
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const onlyTextDark: Story = {
  args: {
    text: 'Description Description Description Description',
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

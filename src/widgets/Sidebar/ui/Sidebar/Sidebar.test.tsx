import { fireEvent, screen } from '@testing-library/react';
import { componentRender } from 'shared/lib/tests/componentRender/componentRender';
import { Sidebar } from './Sidebar';

describe('Sidebar', () => {
  test('to be in the document', () => {
    componentRender(<Sidebar />);
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });

  test('test toggle', () => {
    // рендерим компонент
    componentRender(<Sidebar />);
    // получаем кнопку, с помощью которой мы Sidebar сворачиваем и разворачиваем
    const toggleBtn = screen.getByTestId('sidebar-toggle');
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    // fireEvent - с помощью него можно генерировать события(например нажатие на кнопку)
    fireEvent.click(toggleBtn);
    // после этого проверяем что на Sidebar навесился класс collapsed, который отвечает за то
    // что Sidebar визуально свернут
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
  });
});

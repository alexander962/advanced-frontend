// render - позволяет изолированно отрендерить какой то компонент
// и только его протестировать
// screen - объект, который позволяет проверить отрисовку компонента

import { render, screen } from '@testing-library/react';
import { Button } from 'shared/ui/Button/Button';
import { ThemeButton } from './Button';

describe('Button', () => {
  test('Test render', () => {
    render(<Button>TEST</Button>);
    expect(screen.getByText('TEST')).toBeInTheDocument();
  });

  // проверяем что кнопка имеет соответствующий класс
  test('Test clear theme', () => {
    render(<Button theme={ThemeButton.CLEAR}>TEST</Button>);
    expect(screen.getByText('TEST')).toHaveClass('clear');
    // смотрим что у нас отрендерилось, какая разметка
    screen.debug();
  });
});

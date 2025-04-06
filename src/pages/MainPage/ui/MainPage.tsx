import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { BugButton } from 'app/providers/ErrorBoundary';

interface Props {
  className?: string;
}

const MainPage: FC<Props> = ({ className }) => {
  const { t } = useTranslation();

  return (
    <div className={className}>
      {t('Главная страница')}
    </div>
  );
};

export default MainPage;

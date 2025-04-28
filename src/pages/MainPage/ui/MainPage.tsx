import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input/Input';

interface Props {
  className?: string;
}

const MainPage: FC<Props> = ({ className }) => {
  const { t } = useTranslation();
  const [value, setValue] = useState('');

  const onChange = (val: string) => {
    setValue(val);
  };

  return (
    <div className={className}>
      {t('Главная страница')}
    </div>
  );
};

export default MainPage;

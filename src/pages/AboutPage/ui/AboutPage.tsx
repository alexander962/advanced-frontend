import { FC } from 'react';
import { useTranslation } from 'react-i18next';

interface Props {
  className?: string;
}

const AboutPage: FC<Props> = ({ className }) => {
  const { t } = useTranslation('about');
  return (
    <div className={className}>
      {t('О сайте')}
    </div>
  );
};

export default AboutPage;

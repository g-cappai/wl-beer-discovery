import { useNavigate, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { getCharacteristic } from './decisionTree';
import Header from '../common/Header';
import Footer from '../common/Footer';
import ScreenContainer from '../common/ScreenContainer';
import ScreenBody from '../common/ScreenBody';
import ChoiceList from '../common/ChoiceList';
import Fact from '../common/Fact';

export default function Step3() {
  const { t } = useTranslation('discovery');
  const { event, taste } = useParams();
  const navigate = useNavigate();

  const characteristics = getCharacteristic(event, taste);

  if (characteristics.length === 0) {
    navigate('/');
    return null;
  }

  return (
    <ScreenContainer>
      <Header />

      <ScreenBody title={t('step3.title')}>
        <ChoiceList type="characteristic" data={characteristics} />
      </ScreenBody>

      <Footer>
        <Fact
          title={t('step3.fact.title')}
          description={t('step3.fact.description')}
        />
      </Footer>
    </ScreenContainer>
  );
}

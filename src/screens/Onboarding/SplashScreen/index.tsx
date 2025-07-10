import * as S from './style';
import { LOGO_3D } from '../../../constants/icons';

const SplashScreen = () => {
  return (
    <S.Container>
        <S.Logo source={LOGO_3D} />
    </S.Container>
  );
}

export default SplashScreen;
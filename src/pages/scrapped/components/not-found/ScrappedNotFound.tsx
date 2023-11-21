import {
  StyledScrappedNotFoundBox,
  StyledScrappedNotFoundLayout,
  StyledScrappedNotFoundText,
} from './ScrappedNotFound.styles.ts';
import FileTextIcon from './FileTextIcon.tsx';
import Button from '@components/common/button/Button.tsx';
import { useNavigate } from 'react-router-dom';

function ScrappedNotFound() {
  const navigate = useNavigate();
  const handleGoToHomeButton = () => {
    navigate('/');
  };

  return (
    <StyledScrappedNotFoundLayout>
      <StyledScrappedNotFoundBox>
        <FileTextIcon />
        <StyledScrappedNotFoundText>저장된 스크랩이 없습니다.</StyledScrappedNotFoundText>
        <Button fullWidth onClick={handleGoToHomeButton}>
          스크랩 하러 가기
        </Button>
      </StyledScrappedNotFoundBox>
    </StyledScrappedNotFoundLayout>
  );
}

export default ScrappedNotFound;

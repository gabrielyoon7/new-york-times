import Button from '@components/common/button/Button.tsx';
import {
  StyledErrorMessageBox,
  StyledErrorMessageLayout,
  StyledErrorMessageText,
} from '@pages/home/components/error/ErrorMessage.styles.ts';

interface ErrorMessageProps {
  isFetching: boolean;
  handleRetryButton: () => void;
}

function ErrorMessage({ isFetching, handleRetryButton }: ErrorMessageProps) {
  return (
    <StyledErrorMessageLayout>
      <StyledErrorMessageBox>
        <StyledErrorMessageText>에러가 발생했습니다.</StyledErrorMessageText>
        <Button onClick={handleRetryButton} disabled={isFetching}>
          {isFetching ? '로딩중...' : '다시 시도하기'}
        </Button>
      </StyledErrorMessageBox>
    </StyledErrorMessageLayout>
  );
}

export default ErrorMessage;

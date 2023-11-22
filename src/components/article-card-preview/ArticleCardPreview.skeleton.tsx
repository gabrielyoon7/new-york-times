import {
  StyledArticleCardPreviewAuthorWrapper,
  StyledArticleCardPreviewFooter,
  StyledArticleCardPreviewHeader,
  StyledArticleCardPreviewWrapper,
} from './ArticleCardPreview.styles.ts';
import Skeleton from '@components/common/skeleton/Skeleton.tsx';

function ArticleCardPreviewSkeleton() {
  return (
    <StyledArticleCardPreviewWrapper>
      <StyledArticleCardPreviewHeader>
        <div style={{ height: '56px', display: 'flex', gap: '10px', flexDirection: 'column' }}>
          <Skeleton width="250px" height="18px" />
          <Skeleton width="60px" height="18px" />
        </div>
        <button style={{ margin: '4px 0 0 16px' }}>
          <Skeleton width="16px" height="16px" />
        </button>
      </StyledArticleCardPreviewHeader>
      <StyledArticleCardPreviewFooter>
        <StyledArticleCardPreviewAuthorWrapper>
          <Skeleton width="100px" height="20px" />
          <Skeleton width="100px" height="20px" />
        </StyledArticleCardPreviewAuthorWrapper>
        <Skeleton width="80px" height="20px" />
      </StyledArticleCardPreviewFooter>
    </StyledArticleCardPreviewWrapper>
  );
}

export default ArticleCardPreviewSkeleton;

import styled from 'styled-components';

interface BackgroundProps {
  isOpen: Boolean;
}
const Background = styled.div<BackgroundProps>`
  background-color: ${(props) => props.theme.color.grey_00};
  display: ${(props) => (props.isOpen ? 'block' : 'none')};
  opacity: 0.3;
  z-index: 2;
  width: 100vw;
  height: calc(100vh - 48px);
  position: fixed;
`;

const Layout = styled.div`
  width: 100%;
  svg {
    width: 24px;
    height: 24px;
  }
  border-bottom: 1px solid ${(props) => props.theme.color.grey_95};
`;

const PostingTop = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  padding: 10px 20px;

  .userImage {
    width: 32px;
    height: 32px;
    border-radius: 50%;
  }

  .userName {
    flex-grow: 1;
  }

  .follow {
    background-color: ${(props) => props.theme.color.grey_00};
    border-radius: 2px;
    color: white;
  }
  p {
    padding: 2px 6px;
  }
`;

const PostingImage = styled.div`
  position: relative;
  width: 100%;
  .tag {
    position: absolute;
    z-index: 999;
    left: 16px;
    bottom: 16px;
    color: white;
    background-color: #0000004d;
    border-radius: 50%;
    padding: 4px;
  }

  .postingImage {
    width: 100%;
    max-height: 390px;
    object-fit: cover;
  }
`;

const ImageWithTag = styled.div`
  position: relative;
`;
interface ClothTagProps {
  xrate: string;
  yrate: string;
  clothTagOpen: Boolean;
}
const PostingClothTag = styled.div<ClothTagProps>`
  position: absolute;
  left: ${(props) => props.xrate}px;
  top: ${(props) => props.yrate}px;
  display: ${(props) => (props.clothTagOpen ? 'block' : 'none')};
  @keyframes fadeIns {
    from {
      opacity: 0;
    }
    to {
      opacity: 100;
    }
  }
  animation: ${(props) => (props.clothTagOpen ? 'fadeIns 1s ease-in-out' : '')};
`;
const PostingCommunication = styled.div`
  position: relative;
  padding: 16px 20px;
  width: 100%;
  display: flex;
  gap: 16px;

  .likedHeart {
    color: red;
  }
  .unLikedHeart {
  }
  .bookmark {
    flex-grow: 1;
    position: absolute;
    right: 20px;
    color: black;
  }
`;
const PostingExplanation = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px 20px;
  .date {
    color: ${(props) => props.theme.color.grey_40};
  }
`;
const PostingStyleTag = styled.div`
  .styletag {
    color: ${(props) => props.theme.color.grey_70};
    margin-bottom: 18px;
  }
  padding: 16px 20px 32px 20px;
`;

const PostingStyleTagSpan = styled.div`
  display: inline;
  margin-right: 4px;
  p {
    padding: 6px 8px;
    background-color: ${(props) => props.theme.color.grey_90};
    display: inline;
    border-radius: 2px;
  }
`;

const S = {
  Background,
  Layout,
  PostingTop,
  PostingImage,
  ImageWithTag,
  PostingClothTag,
  PostingCommunication,
  PostingExplanation,
  PostingStyleTag,
  PostingStyleTagSpan,
};

export default S;

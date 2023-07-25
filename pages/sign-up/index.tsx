import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components'
// import AiOutlineClose from '@react-'
export default function SignupPage() {
  return (
    <PageLayout>
      <Box as="h1">
        <CloseButton>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.2143 12L19.3666 4.66641C19.4697 4.54453 19.383 4.35938 19.2236 4.35938H17.3533C17.2432 4.35938 17.1377 4.40859 17.065 4.49297L11.9908 10.5422L6.91659 4.49297C6.84628 4.40859 6.74081 4.35938 6.62831 4.35938H4.758C4.59863 4.35938 4.51191 4.54453 4.61503 4.66641L10.7674 12L4.61503 19.3336C4.59193 19.3608 4.57711 19.394 4.57233 19.4293C4.56755 19.4647 4.57301 19.5006 4.58806 19.533C4.60312 19.5653 4.62713 19.5926 4.65725 19.6117C4.68737 19.6308 4.72234 19.6408 4.758 19.6406H6.62831C6.73847 19.6406 6.84394 19.5914 6.91659 19.507L11.9908 13.4578L17.065 19.507C17.1353 19.5914 17.2408 19.6406 17.3533 19.6406H19.2236C19.383 19.6406 19.4697 19.4555 19.3666 19.3336L13.2143 12Z"
              fill="#030303"
            />
          </svg>
        </CloseButton>
      </Box>
      <Box padding="72px 0 32px 0"></Box>
      <Section gap={27} marginTop={0}>
        <Header>
          <Heading1>Type something</Heading1>
          <Text>
            Lorem ipsum dolor sit amet consectetur. Iaculis lorem viverra
            pellentesque etiam.
          </Text>
        </Header>
        <ButtonGroup>
          <Button href="/sign-up/callback" variant="text">
            카카오
          </Button>
          <Button href="/sign-up/callback" variant="text">
            애플
          </Button>
          <Button href="/sign-up/callback" variant="text">
            구글
          </Button>
          <Text>
            이미 아이디가 있다면?
            <StyledLink href="/sign-in" color="red">
              로그인
            </StyledLink>
          </Text>
        </ButtonGroup>
      </Section>
    </PageLayout>
  )
}

// WILL_REMOVE
const Button = styled(Link)<{ variant: 'primary' | 'text' }>`
  display: block;
  width: 100%;
  border: none;
  border-radius: 2px;
  font-size: 14px;
  line-height: 20px;
  padding: 14px;
  text-align: center;
  text-decoration: none;
  box-sizing: border-box;
  background: ${({ variant }) => {
    if (variant === 'text') {
      return '#eee'
    } else if (variant === 'primary') {
      return '#2c2c2c'
    }
  }};
  color: ${({ variant }) => {
    if (variant === 'text') return '#2c2c2c'
    else if (variant === 'primary') return '#eee'
  }};
`
// WILL_REMOVE
const ButtonGroup = styled.div`
  font-family: pretendard;
  display: flex;
  flex-direction: column;
  gap: 8px;
`
// WILL_REMOVE
const PageLayout = styled.div`
  font-family: pretendard;
  max-width: 650px;
  width: 100%;
  padding: 0 20px;
  margin: 0 auto;
  height: 100dvh;
  box-sizing: border-box;
`
// WILL_REMOVE
const Section = styled.div<{ gap: number; marginTop: number }>`
  margin-top: ${({ marginTop }) => `${marginTop}px`};
  font-family: pretendard;
  display: flex;
  flex-direction: column;
  gap: ${({ gap }) => `${gap}px`};
  box-sizing: border-box;
`
// WILL_REMOVE
const Text = styled.p`
  color: #938d8d;
  text-align: center;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
`

const StyledLink = styled(Link)`
  color: #f00;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  text-decoration-line: underline;
  margin-left: 8px;
`
// WILL_REMOVE
const Heading1 = styled.h1`
  font-family: pretendard;
  text-align: center;
  color: #030303;
  font-family: Pretendard;
  font-size: 31.756px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  padding: 0;
  margin: 0;
`

const Header = styled.header`
  font-family: pretendard;
  display: flex;
  gap: 8px;
  flex-direction: column;
  justify-content: flex-start;
`

const SImage = styled(Image)`
  border-radius: 50%;
  margin: 0 auto;
  display: block;
  background: #eee;
  flex-shrink: 0;
`

const Box = styled.div<{ padding?: string; margin?: string }>`
  display: flex;
  padding: ${(props) => props.padding || 0};
  margin: ${({ margin }) => margin || 'auto'};
`

const CloseButton = styled.button`
  background: transparent;
  border: none;
  width: 44px;
  height: 44px;
  flex-shrink: 0;
`

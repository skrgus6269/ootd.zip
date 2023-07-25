import useNewbie from '@/hooks/useNewUser'
import Link from 'next/link'
import styled from 'styled-components'

export default function OnboardingPage() {
  const [_, setNewbie] = useNewbie()

  const handleOtherLinks = () => {
    setNewbie(false)
  }
  return (
    <PageLayout>
      <Section>
        <Header>
          <Heading1>내 손안의 옷장</Heading1>
          <Text>
            Lorem ipsum dolor sit amet consectetur. Iaculis lorem viverra
            pellentesque etiam.
          </Text>
        </Header>
        <ButtonGroup>
          <Button href="/sign-up" variant="primary" onClick={handleOtherLinks}>
            가입하기
          </Button>
          <Button href="/" variant="text" onClick={handleOtherLinks}>
            둘러보기
          </Button>
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
  gap: 2px;
`
// WILL_REMOVE
const PageLayout = styled.div`
  font-family: pretendard;
  max-width: 650px;

  width: 100%;
  padding: 0 4%;
  margin: 0 auto;
  height: 100dvh;
  box-sizing: border-box;
`
// WILL_REMOVE
const Section = styled.div`
  font-family: pretendard;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  flex: flex-end;
  gap: 40px;
  height: 100dvh;
  padding-bottom: 20px;
  box-sizing: border-box;
`
// WILL_REMOVE
const Text = styled.p`
  font-family: pretendard;
  color: #030303;
  font-family: Pretendard;
  font-size: 15.878px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  padding: 0;
  margin: 0;
`
// WILL_REMOVE
const Heading1 = styled.h1`
  font-family: pretendard;
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

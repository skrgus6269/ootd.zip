import styled from 'styled-components';

const Layout = styled.div`
  display: flex;
  border-bottom: 1px solid ${(props) => props.theme.color.grey_90};
`;
const Follower = styled.div`
  text-align: center;
  width: 50%;
  padding: 13px 0;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Following = styled(Follower)`
  text-align: center;
  width: 50%;
  padding: 13px 0;
`;

const Hr = styled.hr`
  width: 34px;
  position: absolute;
  bottom: 0;
  margin: 0;
  background-color: black;
  border: 1px solid black;
`;

const S = { Layout, Follower, Following, Hr };

export default S;

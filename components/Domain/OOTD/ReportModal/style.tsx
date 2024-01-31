import styled from 'styled-components';

const Layout = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  .modal {
    border-radius: 0;
    border-top: 2px solid ${(props) => props.theme.color.grey_00};
  }
`;

const Report = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-grow: 1;

  .report {
    color: red;
  }
`;

const S = { Layout, Report };

export default S;

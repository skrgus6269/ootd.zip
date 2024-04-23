import S from './style';
import { AiOutlineEdit, AiOutlineSearch } from 'react-icons/ai';
import { Dispatch, SetStateAction } from 'react';
import ReadOnly from '../ReadOnly';

interface ModalProps {
  result: React.ReactNode;
  setModalOpen: Dispatch<SetStateAction<Boolean>>;
  state: Boolean;
  type?: 'Link' | 'Write';
  action?: 'write';
}

export default function Modal({
  result,
  setModalOpen,
  state,
  type,
  action,
}: ModalProps) {
  const onClickSearchIcon = () => {
    setModalOpen(true);
  };

  return (
    <S.Layout onClick={onClickSearchIcon}>
      <ReadOnly state={state} result={result} type={type}></ReadOnly>
      <S.SearchIcon>
        {action === 'write' ? <AiOutlineEdit /> : <AiOutlineSearch />}
      </S.SearchIcon>
    </S.Layout>
  );
}

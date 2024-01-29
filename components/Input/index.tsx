import TrueFalse from './TrueFalse';
import PrevNext from './PrevNext';
import HelperText from './HelperText';
import Label from './Label';
import Text from './Text';
import TextArea from './TextArea';
import CheckBox from './CheckBox';
import Modal from './Modal';
import ReadOnly from './ReadOnly';

interface InputProps {
  children: React.ReactNode;
}

export default function Input({ children }: InputProps) {
  return <div>{children}</div>;
}

Input.Label = Label;
Input.Text = Text;
Input.HelperText = HelperText;
Input.TrueFalse = TrueFalse;
Input.PrevNext = PrevNext;
Input.TextArea = TextArea;
Input.CheckBox = CheckBox;
Input.Modal = Modal;
Input.ReadOnly = ReadOnly;

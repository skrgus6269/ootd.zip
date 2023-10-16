import TrueFalse from './TrueFalse';
import HelperText from './HelperText';
import Label from './Label';
import Text from './Text';

interface InputProps {
  children: React.ReactNode;
}

export default function Input({ children }: InputProps) {
  return <>{children}</>;
}

Input.Label = Label;
Input.Text = Text;
Input.HelperText = HelperText;
Input.TrueFalse = TrueFalse;

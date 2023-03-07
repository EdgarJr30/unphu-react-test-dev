import { IMaskInput } from 'react-imask';
import { forwardRef } from 'react';

type PhoneInputTypes = {
  name: string
  onChange: any
  type: any
  className: any
}

const PhoneInput = forwardRef(function TextMaskCustom(props: PhoneInputTypes, ref: any) {
  const { onChange, ...other } = props;

  return (
    <IMaskInput
      {...other}
      mask="000-000-0000"
      definitions={{
        '#': /[0-9]/,
      }}
      inputRef={ref}
      onAccept={(value) => onChange({ target: { name: props.name, value } })}
      overwrite
    />
  );
});

export default PhoneInput;

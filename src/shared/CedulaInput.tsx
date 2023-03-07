import { IMaskInput } from 'react-imask';
import { forwardRef } from 'react';

type CedulaInputTypes = {
  name: string
  onChange: any
  type: any
  className: any
}

const CedulaInput = forwardRef(function TextMaskCustom(props: CedulaInputTypes, ref: any) {
  const { onChange, ...other } = props;

  return (
    <IMaskInput
      {...other}
      mask="000-0000000-0"
      definitions={{
        '#': /[0-9]/,
      }}
      inputRef={ref}
      onAccept={(value) => onChange({ target: { name: props.name, value } })}
      overwrite
    />
  );
});

export default CedulaInput;

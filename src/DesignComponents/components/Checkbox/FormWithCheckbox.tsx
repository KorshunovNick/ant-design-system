import { Form, Button, Checkbox } from 'antd';
import stl from './CheckboxContainer.module.scss';
import { useForm } from 'react-hook-form';
import { FlexCol } from '../shared/FlexContainers/FlexContainers';

type TestForm = {
  checkbox: boolean;
};

export default function CheckBoxForm() {
  const {
    register,
    watch,
    formState: { submitCount },
    handleSubmit,
    setValue,
  } = useForm<TestForm>();

  const checked = watch('checkbox');
  const submit = handleSubmit(data => {
    console.log('data', data);
  });

  const isChecked = !checked && !!submitCount;

  return (
    <Form name="checkbox-validation" className={stl.form}>
      <FlexCol>
        <FlexCol gap={0}>
          <Checkbox
            {...register('checkbox', { required: true })}
            onChange={e => setValue('checkbox', e.target.checked)}
            className={isChecked ? stl.error : ''}
          >
            Подтвердите согласие
          </Checkbox>
          <span className={stl.error_message}>
            {isChecked && 'Нужно потвердить свое согласие'}
          </span>
        </FlexCol>
        <Button
          type="primary"
          onClick={submit}
          style={{ maxWidth: 'fit-content' }}
        >
          Check
        </Button>
      </FlexCol>
    </Form>
  );
}

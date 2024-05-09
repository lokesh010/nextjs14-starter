import { Button, ButtonProps } from 'antd';
import { ReactElement } from 'react';

interface IProps {
  children?: string | ReactElement;
}

function PrimaryButton(props: IProps & ButtonProps) {
  const { children = 'Submit', ...restProps } = props;

  return (
    <Button type="primary" htmlType="submit" size="middle" {...restProps}>
      {children}
    </Button>
  );
}

export default PrimaryButton;

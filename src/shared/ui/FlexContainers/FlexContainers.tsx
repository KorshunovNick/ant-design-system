import { Flex, FlexProps } from 'antd';
import { forwardRef, PropsWithChildren } from 'react';

export const FlexContainer = ({
  children,
  ...props
}: PropsWithChildren & FlexProps) => {
  return (
    <Flex gap={props.gap ?? 62} vertical {...props}>
      {children}
    </Flex>
  );
};

export const FlexCol = forwardRef<HTMLDivElement, PropsWithChildren<FlexProps>>(
  ({ children, ...props }, ref) => {
    return (
      <Flex ref={ref} gap={props.gap ?? 20} vertical {...props}>
        {children}
      </Flex>
    );
  },
);

export const FlexRow = ({
  children,
  ...props
}: PropsWithChildren & FlexProps) => {
  return (
    <Flex
      gap={props.gap ?? 37}
      justify="space-between"
      style={props.style ?? { width: 'fit-content' }}
      {...props}
    >
      {children}
    </Flex>
  );
};

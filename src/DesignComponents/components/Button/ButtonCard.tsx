import { PropsWithChildren, useState } from 'react';
import { Button, ButtonProps, Flex, FlexProps, Tag } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { DeleteOutlined } from '@ant-design/icons';
import stl from './ButtonCard.module.scss';

const ButtonFlexContainer = ({
  children,
  ...props
}: PropsWithChildren & FlexProps) => {
  return (
    <Flex gap={props.gap ?? 62} vertical>
      {children}
    </Flex>
  );
};

const ButtonFlexCol = ({
  children,
  ...props
}: PropsWithChildren & FlexProps) => {
  return (
    <Flex gap={props.gap ?? 20} vertical>
      {children}
    </Flex>
  );
};

const ButtonFlexRow = ({
  children,
  ...props
}: PropsWithChildren & FlexProps) => {
  return (
    <Flex
      gap={props.gap ?? 37}
      justify="space-between"
      style={props.style ?? { width: 'fit-content' }}
    >
      {children}
    </Flex>
  );
};

const ButtonCard = () => {
  const [iconPosition, setIconPosition] = useState<
    'none' | 'right' | 'left' | 'both'
  >('none');

  const LargeButton = (props?: ButtonProps, isMax?: boolean) => (
    <Button {...props} size="large">
      {(iconPosition === 'left' || iconPosition === 'both') && isMax && (
        <SearchOutlined />
      )}
      {props?.children ?? 'Кнопка'}
      {(iconPosition === 'right' || iconPosition === 'both') && isMax && (
        <SearchOutlined />
      )}
    </Button>
  );
  const SmallButton = (props?: ButtonProps, isMax?: boolean) => (
    <Button {...props} size="small">
      {(iconPosition === 'left' || iconPosition === 'both') && isMax && (
        <SearchOutlined />
      )}
      {props?.children ?? 'Кнопка'}
      {(iconPosition === 'right' || iconPosition === 'both') && isMax && (
        <SearchOutlined />
      )}
    </Button>
  );

  return (
    <div className={stl.container}>
      <ButtonFlexContainer className={stl.default}>
        <ButtonFlexCol>
          <h2 style={{ textAlign: 'start' }}>Default</h2>
          <ButtonFlexRow>
            {LargeButton()}
            {LargeButton({ disabled: true })}
          </ButtonFlexRow>
          <ButtonFlexRow gap={44}>
            {SmallButton()}
            {SmallButton({ disabled: true })}
          </ButtonFlexRow>
        </ButtonFlexCol>

        <ButtonFlexCol>
          <ButtonFlexRow>
            {LargeButton({ type: 'primary' })}
            {LargeButton({ disabled: true, type: 'primary' })}
          </ButtonFlexRow>
          <ButtonFlexRow gap={44}>
            {SmallButton({ type: 'primary' })}
            {SmallButton({ disabled: true, type: 'primary' })}
          </ButtonFlexRow>
        </ButtonFlexCol>

        <ButtonFlexCol>
          <ButtonFlexRow>
            {LargeButton({ type: 'link' })}
            {LargeButton({ disabled: true, type: 'link' })}
          </ButtonFlexRow>
          <ButtonFlexRow gap={44}>
            {SmallButton({ type: 'link' })}
            {SmallButton({ disabled: true, type: 'link' })}
          </ButtonFlexRow>
        </ButtonFlexCol>
      </ButtonFlexContainer>

      <ButtonFlexContainer className={stl.max}>
        <ButtonFlexCol>
          <h2 style={{ textAlign: 'start' }}>Max</h2>
          <ButtonFlexRow>
            <Tag
              onClick={() => setIconPosition('none')}
              style={{
                cursor: 'pointer',
                backgroundColor:
                  iconPosition === 'none' ? 'lightgreen' : 'white',
                color: iconPosition === 'none' ? 'white' : 'black',
              }}
            >
              NONE
            </Tag>
            <Tag
              onClick={() => setIconPosition('left')}
              style={{
                cursor: 'pointer',
                backgroundColor:
                  iconPosition === 'left' ? 'lightgreen' : 'white',
                color: iconPosition === 'left' ? 'white' : 'black',
              }}
            >
              LEFT
            </Tag>
            <Tag
              onClick={() => setIconPosition('right')}
              style={{
                cursor: 'pointer',
                backgroundColor:
                  iconPosition === 'right' ? 'lightgreen' : 'white',
                color: iconPosition === 'right' ? 'white' : 'black',
              }}
            >
              RIGHT
            </Tag>
            <Tag
              onClick={() => setIconPosition('both')}
              style={{
                cursor: 'pointer',
                backgroundColor:
                  iconPosition === 'both' ? 'lightgreen' : 'white',
                color: iconPosition === 'both' ? 'white' : 'black',
              }}
            >
              BOTH
            </Tag>
          </ButtonFlexRow>
          <ButtonFlexRow gap={21}>
            {LargeButton({}, true)}
            {LargeButton({ disabled: true }, true)}
          </ButtonFlexRow>
          <ButtonFlexRow gap={36}>
            {SmallButton({}, true)}
            {SmallButton({ disabled: true }, true)}
          </ButtonFlexRow>
        </ButtonFlexCol>

        <ButtonFlexCol>
          <ButtonFlexRow gap={21}>
            {LargeButton({ type: 'primary' }, true)}
            {LargeButton({ disabled: true, type: 'primary' }, true)}
          </ButtonFlexRow>
          <ButtonFlexRow gap={36}>
            {SmallButton({ type: 'primary' }, true)}
            {SmallButton({ disabled: true, type: 'primary' }, true)}
          </ButtonFlexRow>
        </ButtonFlexCol>

        <ButtonFlexCol>
          <ButtonFlexRow gap={21}>
            {LargeButton({ type: 'link' }, true)}
            {LargeButton({ disabled: true, type: 'link' }, true)}
          </ButtonFlexRow>
          <ButtonFlexRow gap={36}>
            {SmallButton({ type: 'link' }, true)}
            {SmallButton({ disabled: true, type: 'link' }, true)}
          </ButtonFlexRow>
        </ButtonFlexCol>
      </ButtonFlexContainer>

      <ButtonFlexContainer gap={30} className={stl.links}>
        <h2 style={{ textAlign: 'start' }}>Link</h2>
        <ButtonFlexRow gap={30}>
          {SmallButton({ type: 'link', href: '/', style: { padding: 0 } })}
          {SmallButton({ disabled: true, type: 'link', style: { padding: 0 } })}
        </ButtonFlexRow>
      </ButtonFlexContainer>

      <ButtonFlexContainer>
        <> </>
      </ButtonFlexContainer>

      <ButtonFlexContainer gap={30} className={stl.icons}>
        <h2 style={{ textAlign: 'start' }}>Icon Button</h2>
        <ButtonFlexCol gap={22}>
          <ButtonFlexRow gap={26}>
            {LargeButton({
              type: 'link',
              icon: <DeleteOutlined size={24} />,
              children: '',
              style: { fontSize: 24 },
            })}
            {LargeButton({
              disabled: true,
              type: 'link',
              icon: <DeleteOutlined size={24} />,
              children: '',
              style: { fontSize: 24 },
            })}
          </ButtonFlexRow>
          <ButtonFlexRow gap={30}>
            {SmallButton({
              type: 'link',
              icon: <DeleteOutlined size={20} />,
              children: '',
              style: { fontSize: 20 },
            })}
            {SmallButton({
              type: 'link',
              icon: <DeleteOutlined size={20} />,
              children: '',
              style: { fontSize: 20 },
              disabled: true,
            })}
          </ButtonFlexRow>
        </ButtonFlexCol>
      </ButtonFlexContainer>
    </div>
  );
};

export default ButtonCard;

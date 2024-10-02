import { PropsWithChildren, useState } from 'react';
import { Button, ButtonProps, Flex, FlexProps, Tag } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { DeleteOutlined } from '@ant-design/icons';
import stl from './ButtonCard.module.scss';
import {
  FlexCol,
  FlexContainer,
  FlexRow,
} from '../../../../shared/ui/FlexContainers/FlexContainers';

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
      <FlexContainer className={stl.default}>
        <FlexCol>
          <h2 style={{ textAlign: 'start' }}>Default</h2>
          <FlexRow>
            {LargeButton()}
            {LargeButton({ disabled: true })}
          </FlexRow>
          <FlexRow gap={44}>
            {SmallButton()}
            {SmallButton({ disabled: true })}
          </FlexRow>
        </FlexCol>

        <FlexCol>
          <FlexRow>
            {LargeButton({ type: 'primary' })}
            {LargeButton({ disabled: true, type: 'primary' })}
          </FlexRow>
          <FlexRow gap={44}>
            {SmallButton({ type: 'primary' })}
            {SmallButton({ disabled: true, type: 'primary' })}
          </FlexRow>
        </FlexCol>

        <FlexCol>
          <FlexRow>
            {LargeButton({ type: 'link' })}
            {LargeButton({ disabled: true, type: 'link' })}
          </FlexRow>
          <FlexRow gap={44}>
            {SmallButton({ type: 'link' })}
            {SmallButton({ disabled: true, type: 'link' })}
          </FlexRow>
        </FlexCol>
      </FlexContainer>

      <FlexContainer className={stl.max}>
        <FlexCol>
          <h2 style={{ textAlign: 'start' }}>Max</h2>
          <FlexRow>
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
          </FlexRow>
          <FlexRow gap={21}>
            {LargeButton({}, true)}
            {LargeButton({ disabled: true }, true)}
          </FlexRow>
          <FlexRow gap={36}>
            {SmallButton({}, true)}
            {SmallButton({ disabled: true }, true)}
          </FlexRow>
        </FlexCol>

        <FlexCol>
          <FlexRow gap={21}>
            {LargeButton({ type: 'primary' }, true)}
            {LargeButton({ disabled: true, type: 'primary' }, true)}
          </FlexRow>
          <FlexRow gap={36}>
            {SmallButton({ type: 'primary' }, true)}
            {SmallButton({ disabled: true, type: 'primary' }, true)}
          </FlexRow>
        </FlexCol>

        <FlexCol>
          <FlexRow gap={21}>
            {LargeButton({ type: 'link' }, true)}
            {LargeButton({ disabled: true, type: 'link' }, true)}
          </FlexRow>
          <FlexRow gap={36}>
            {SmallButton({ type: 'link' }, true)}
            {SmallButton({ disabled: true, type: 'link' }, true)}
          </FlexRow>
        </FlexCol>
      </FlexContainer>

      <FlexContainer gap={30} className={stl.links}>
        <h2 style={{ textAlign: 'start' }}>Link</h2>
        <FlexRow gap={30}>
          {SmallButton({ type: 'link', href: '/', style: { padding: 0 } })}
          {SmallButton({ disabled: true, type: 'link', style: { padding: 0 } })}
        </FlexRow>
      </FlexContainer>

      <FlexContainer>
        <> </>
      </FlexContainer>

      <FlexContainer gap={30} className={stl.icons}>
        <h2 style={{ textAlign: 'start' }}>Icon Button</h2>
        <FlexCol gap={22}>
          <FlexRow gap={26}>
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
          </FlexRow>
          <FlexRow gap={30}>
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
          </FlexRow>
        </FlexCol>
      </FlexContainer>
    </div>
  );
};

export default ButtonCard;

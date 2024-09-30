import { Tokens } from '../Tokens.types';

export const crmTokens: Tokens = {
  surface: {
    layoutBodyBg: {
      $type: 'color',
      $value: '{gray.gray-3}',
    },
    colorSurfaceBg: {
      $type: 'color',
      $value: '{gray.gray-4}',
    },
    colorBgElevated: {
      $type: 'color',
      $value: '{gray.gray-4}',
    },
  },
  text: {
    textPrimary: {
      $type: 'color',
      $value: '{navy.navy-10}',
    },
    textSecondary: {
      $type: 'color',
      $value: '{gray.gray-7}',
    },
    textTertiary: {
      $type: 'color',
      $value: '{gray.gray-6}',
    },
    textInverse: {
      $type: 'color',
      $value: '{static.white}',
    },
  },
  icon: {
    colorIcon: {
      $type: 'color',
      $value: '{navy.navy-10}',
    },
  },
  brand: {
    colorPrimary: {
      $type: 'color',
      $value: '{navy.navy-8}',
    },
  },
  status: {
    colorInfo: {
      $type: 'color',
      $value: '{azure.azure-6}',
    },
    colorSuccess: {
      $type: 'color',
      $value: '{green.green-5}',
    },
    colorWarning: {
      $type: 'color',
      $value: '{orange.orange-5}',
    },
    colorError: {
      $type: 'color',
      $value: '{volcano.volcano-5}',
    },
  },
  button: {
    fontWeight: {
      $type: 'string',
      $value: '600',
    },
    onlyIconSizeLG: {
      $type: 'dimension',
      $value: '24px',
      $description: 'Размер иконки в кнопке ($number)',
    },
    onlyIconSizeSM: {
      $type: 'dimension',
      $value: '20px',
      $description: 'Размер иконки в кнопке ($number)',
    },
    contentFontSizeLG: {
      $type: 'dimension',
      $value: '16px',
      $description: '$number',
    },
    contentFontSizeSM: {
      $type: 'dimension',
      $value: '14px',
      $description: '$number',
    },
    contentLineHeightLG: {
      $type: 'dimension',
      $value: '24px',
      $description: '$number',
    },
    contentLineHeightSM: {
      $type: 'dimension',
      $value: '20px',
      $description: '$number',
    },
    paddingBlockLG: {
      $type: 'dimension',
      $value: '12px',
      $description: 'вертикальные паддинги ($number)',
    },
    paddingBlockSM: {
      $type: 'dimension',
      $value: '8px',
      $description: 'вертикальные паддинги ($number)',
    },
    paddingInlineLG: {
      $type: 'dimension',
      $value: '20px',
      $description: 'Горизонтальные паддинги ($number)',
    },
    paddingInlineSM: {
      $type: 'dimension',
      $value: '20px',
      $description: 'Горизонтальные паддинги ($number)',
    },
    paddingXS: {
      $type: 'dimension',
      $value: '8px',
      $description: '$number',
    },
    borderRadiusLG: {
      $type: 'dimension',
      $value: '4px',
      $description: '$number',
    },
    borderRadiusSM: {
      $type: 'dimension',
      $value: '4px',
      $description: '$number',
    },
    defaultBg: {
      $type: 'color',
      $value: '{navy.navy-2}',
    },
    defaultBorderColor: {
      $type: 'color',
      $value: '{navy.navy-2}',
    },
    defaultColor: {
      $type: 'color',
      $value: '{navy.navy-10}',
    },
    defaultHoverBg: {
      $type: 'color',
      $value: '{navy.navy-3}',
    },
    defaultHoverBorderColor: {
      $type: 'color',
      $value: '{navy.navy-3}',
    },
    defaultHoverColor: {
      $type: 'color',
      $value: '{navy.navy-10}',
    },
    defaultActiveBg: {
      $type: 'color',
      $value: '{navy.navy-4}',
    },
    defaultActiveBorderColor: {
      $type: 'color',
      $value: '{navy.navy-4}',
    },
    defaultActiveColor: {
      $type: 'color',
      $value: '{navy.navy-10}',
    },
    colorPrimary: {
      $type: 'color',
      $value: '{orange.orange-3}',
    },
    primaryColor: {
      $type: 'color',
      $value: '{navy.navy-10}',
    },
    colorPrimaryHover: {
      $type: 'color',
      $value: '{orange.orange-4}',
    },
    colorPrimaryActive: {
      $type: 'color',
      $value: '{orange.orange-5}',
    },
    colorPrimaryBorder: {
      $type: 'color',
      $value: '{orange.orange-3}',
    },
    textHoverBG: {
      $type: 'color',
      $value: '{gray.gray-3}',
    },
    colorText: {
      $type: 'color',
      $value: '{navy.navy-10}',
    },
    colorTextDisabled: {
      $type: 'color',
      $value: '{gray.gray-7}',
    },
    borderColorDisabled: {
      $type: 'color',
      $value: '{gray.gray-5}',
    },
    colorLink: {
      $type: 'color',
      $value: '{navy.navy-8}',
    },
    colorLinkActive: {
      $type: 'color',
      $value: '{navy.navy-7}',
    },
    colorLinkHover: {
      $type: 'color',
      $value: '{navy.navy-6}',
    },
    colorBgContainerDisabled: {
      $type: 'color',
      $value: '{gray.gray-5}',
    },
    controlHeightLG: {
      $type: 'dimension',
      $value: '48px',
      $description: '$number',
    },
    controlHeightSM: {
      $type: 'dimension',
      $value: '36px',
      $description: '$number',
    },
    fontSize: {
      $type: 'dimension',
      $value: '14px',
      $description: '$number',
    },
    fontSizeLG: {
      $type: 'dimension',
      $value: '16px',
      $description: '$number',
    },
    lineType: {
      $type: 'string',
      $value: 'solid',
    },
    lineWidth: {
      $type: 'dimension',
      $value: '2px',
      $description: '$number',
    },
    lineWidthFocus: {
      $type: 'dimension',
      $value: '0px',
      $description: '$number',
    },
    colorTextLightSolid: {
      $type: 'color',
      $value: '{navy.navy-10}',
    },
    defaultShadow: {
      $type: 'string',
      $value: '0 0 0 rgba(0, 0, 0, 0)',
    },
    primaryShadow: {
      $type: 'string',
      $value: '0 0 0 rgba(0, 0, 0, 0)',
    },
  },
  input: {
    activeBg: {
      $type: 'color',
      $value: '{gray.gray-1}',
    },
    colorBgContainer: {
      $type: 'color',
      $value: '{gray.gray-1}',
    },
    lineWidth: {
      $type: 'dimension',
      $value: '2px',
      $description: '$number',
    },
    colorBorder: {
      $type: 'color',
      $value: '{gray.gray-4}',
    },
    colorErrorBgHover: {
      $type: 'color',
      $value: '{gray.gray-1}',
    },
    inputFontSize: {
      $type: 'dimension',
      $value: '16px',
      $description: '$number',
    },
    lineHeight: {
      $type: 'dimension',
      $value: '24px',
      $description: '$string',
    },
    paddingBlock: {
      $type: 'dimension',
      $value: '12px',
      $description: '$number',
    },
    paddingInline: {
      $type: 'dimension',
      $value: '12px',
      $description: '$number',
    },
    borderRadius: {
      $type: 'dimension',
      $value: '4px',
      $description: '$number',
    },
    paddingXXS: {
      $type: 'dimension',
      $value: '8px',
      $description: '$number',
    },
    fontSize: {
      $type: 'dimension',
      $value: '16px',
      $description: '$number',
    },
    colorIcon: {
      $type: 'color',
      $value: '{navy.navy-10}',
    },
    colorTextPlaceholder: {
      $type: 'color',
      $value: '{gray.gray-6}',
    },
    hoverBg: {
      $type: 'color',
      $value: '{gray.gray-1}',
    },
    hoverBorderColor: {
      $type: 'color',
      $value: '{gray.gray-3}',
    },
    activeBorderColor: {
      $type: 'color',
      $value: '{navy.navy-10}',
    },
    colorText: {
      $type: 'color',
      $value: '{navy.navy-10}',
    },
    colorError: {
      $type: 'color',
      $value: '{volcano.volcano-5}',
    },
    colorErrorText: {
      $type: 'color',
      $value: '{volcano.volcano-5}',
    },
    colorErrorBorderHover: {
      $type: 'color',
      $value: '{volcano.volcano-6}',
    },
    colorErrorBg: {
      $type: 'color',
      $value: '{gray.gray-1}',
    },
    colorBgContainerDisabled: {
      $type: 'color',
      $value: '{gray.gray-3}',
    },
    colorTextDisabled: {
      $type: 'color',
      $value: '{gray.gray-6}',
    },
    activeShadow: {
      $type: 'string',
      $value: '0 0 0 0 rgba(0, 0, 0, 0)',
    },
    fontWeight: {
      $type: 'dimension',
      $value: '500',
      $description: '$number',
    },
  },
  description: {
    fontSize: {
      $type: 'dimension',
      $value: '12px',
      $description: '$number',
    },
    colorTextDescription: {
      $type: 'color',
      $value: '{gray.gray-7}',
    },
    lineHeight: {
      $type: 'dimension',
      $value: '16px',
      $description: '$string',
    },
    fontWeight: {
      $type: 'dimension',
      $value: '500',
      $description: '$number',
    },
  },
  label: {
    labelFontSize: {
      $type: 'dimension',
      $value: '12px',
      $description: '$number',
    },
    labelColor: {
      $type: 'color',
      $value: '{navy.navy-10}',
    },
    labelRequiredMarkColor: {
      $type: 'color',
      $value: '{volcano.volcano-5}',
    },
    marginXXS: {
      $type: 'dimension',
      $value: '4px',
      $description: '$number',
    },
    fontSize: {
      $type: 'dimension',
      $value: '12px',
      $description: '$number',
    },
    fontWeight: {
      $type: 'dimension',
      $value: '500',
      $description: '$number',
    },
    lineHeight: {
      $type: 'dimension',
      $value: '16px',
      $description: '$string',
    },
  },
  select: {
    multipleItemHeight: {
      $type: 'dimension',
      $value: '24px',
      $description: '$number',
    },
    selectorBg: {
      $type: 'color',
      $value: '{gray.gray-1}',
    },
    colorBorder: {
      $type: 'color',
      $value: '{gray.gray-4}',
    },
    colorErrorBg: {
      $type: 'color',
      $value: '{gray.gray-1}',
    },
    colorErrorBgHover: {
      $type: 'color',
      $value: '{gray.gray-1}',
    },
    colorErrorHover: {
      $type: 'color',
      $value: '{volcano.volcano-6}',
    },
    lineWidth: {
      $type: 'dimension',
      $value: '2px',
      $description: '$number',
    },
    colorTextPlaceholder: {
      $type: 'color',
      $value: '{gray.gray-6}',
    },
    borderRadius: {
      $type: 'dimension',
      $value: '4px',
      $description: '$number',
    },
    fontSize: {
      $type: 'dimension',
      $value: '16px',
      $description: '$number',
    },
    colorIcon: {
      $type: 'color',
      $value: '{navy.navy-10}',
    },
    controlHeight: {
      $type: 'dimension',
      $value: '48px',
      $description: '$number',
    },
    controlPaddingHorizontal: {
      $type: 'dimension',
      $value: '12px',
      $description: '$number',
    },
    showArrowPaddingInlineEnd: {
      $type: 'dimension',
      $value: '20px',
      $description: '$number',
    },
    fontSizeIcon: {
      $type: 'dimension',
      $value: '16px',
      $description: '$number',
    },
    colorPrimaryHover: {
      $type: 'color',
      $value: '{gray.gray-2}',
    },
    colorText: {
      $type: 'color',
      $value: '{navy.navy-10}',
    },
    colorErrorOutline: {
      $type: 'color',
      $value: '{volcano.volcano-5}',
    },
    colorError: {
      $type: 'color',
      $value: '{volcano.volcano-5}',
    },
    colorBgContainerDisabled: {
      $type: 'color',
      $value: '{gray.gray-3}',
    },
    colorTextDisabled: {
      $type: 'color',
      $value: '{gray.gray-6}',
    },
    optionFontSize: {
      $type: 'dimension',
      $value: '16px',
      $description: '$number',
    },
    optionPadding: {
      $type: 'dimension',
      $value: '12px',
      $description: '$number',
    },
    optionSelectedFontWeight: {
      $type: 'string',
      $value: '400',
      $description: '$number',
    },
    colorBgElevated: {
      $type: 'color',
      $value: '{gray.gray-1}',
    },
    optionSelectedBg: {
      $type: 'color',
      $value: '{navy.navy-8}',
    },
    optionHeight: {
      $type: 'dimension',
      $value: '48px',
      $description: '$number',
    },
    optionSelectedColor: {
      $type: 'color',
      $value: '{static.white}',
    },
    optionActiveBg: {
      $type: 'color',
      $value: '{gray.gray-2}',
    },
    multipleltemBg: {
      $type: 'color',
      $value: '{gray.gray-3}',
    },
    multipleltemColorDisabled: {
      $type: 'color',
      $value: '{gray.gray-4}',
    },
    fontWeight: {
      $type: 'dimension',
      $value: '500',
      $description: '$number',
    },
    colorPrimary: {
      $type: 'color',
      $value: '{navy.navy-10}',
    },
    lineHeight: {
      $type: 'string',
      $value: '24px',
    },
    optionLineHeight: {
      $type: 'string',
      $value: '24px',
    },
    controlOutlineWidth: {
      $type: 'dimension',
      $value: '0px',
      $description: '$number',
    },
    paddingXXS: {
      $type: 'dimension',
      $value: '12px',
      $description: '$number',
    },
  },
  datepicker: {
    cellHeight: {
      $type: 'dimension',
      $value: '40px',
      $description: '$number',
    },
    cellWidth: {
      $type: 'dimension',
      $value: '40px',
      $description: '$number',
    },
    cellActiveWithRangeBg: {
      $type: 'color',
      $value: '{navy.navy-1}',
    },
    cellHoverBg: {
      $type: 'color',
      $value: '{navy.navy-1}',
    },
    activeBorderColor: {
      $type: 'color',
      $value: '{navy.navy-10}',
    },
    cellRangeBorderColor: {
      $type: 'color',
      $value: '{navy.navy-8}',
    },
    activeBg: {
      $type: 'color',
      $value: '{gray.gray-1}',
    },
    hoverBorderColor: {
      $type: 'color',
      $value: '{gray.gray-3}',
    },
    inputFontSize: {
      $type: 'dimension',
      $value: '16px',
      $description: '$number',
    },
    colorBorder: {
      $type: 'color',
      $value: '{gray.gray-4}',
    },
    borderRadius: {
      $type: 'dimension',
      $value: '4px',
      $description: '$number',
    },
    lineWidth: {
      $type: 'dimension',
      $value: '2px',
      $description: '$number',
    },
    colorBgContainer: {
      $type: 'color',
      $value: '{gray.gray-1}',
    },
    colorBgContainerDisabled: {
      $type: 'color',
      $value: '{gray.gray-3}',
    },
    colorBgElevated: {
      $type: 'color',
      $value: '{gray.gray-1}',
    },
    colorError: {
      $type: 'color',
      $value: '{volcano.volcano-5}',
    },
    colorErrorBorderHover: {
      $type: 'color',
      $value: '{volcano.volcano-6}',
    },
    colorErrorBg: {
      $type: 'color',
      $value: '{gray.gray-1}',
    },
    colorErrorBgHover: {
      $type: 'color',
      $value: '{gray.gray-1}',
    },
    colorTextDisabled: {
      $type: 'color',
      $value: '{gray.gray-6}',
    },
    lineHeight: {
      $type: 'dimension',
      $value: '24px',
      $description: '$string',
    },
    paddingInline: {
      $type: 'dimension',
      $value: '12px',
      $description: '$number',
    },
    paddingBlock: {
      $type: 'dimension',
      $value: '12px',
      $description: '$number',
    },
    cellHoverWithRangeBg: {
      $type: 'color',
      $value: '{navy.navy-1}',
    },
    cellBgDisabled: {
      $type: 'color',
      $value: '{gray.gray-1}',
    },
    colorPrimary: {
      $type: 'color',
      $value: '{navy.navy-8}',
    },
    colorText: {
      $type: 'color',
      $value: '{navy.navy-10}',
    },
    colorTextHeading: {
      $type: 'color',
      $value: '{navy.navy-10}',
    },
    colorIcon: {
      $type: 'color',
      $value: '{navy.navy-10}',
    },
    colorTextLightSolid: {
      $type: 'color',
      $value: '{static.white}',
    },
    colorTextPlaceholder: {
      $type: 'color',
      $value: '{gray.gray-6}',
    },
    controlHeight: {
      $type: 'dimension',
      $value: '48px',
      $description: '$number',
    },
    paddingXXS: {
      $type: 'dimension',
      $value: '4px',
      $description: '$number',
    },
    fontWeight: {
      $type: 'dimension',
      $value: '400',
      $description: '$number',
    },
    controlInteractiveSize: {
      $type: 'dimension',
      $value: '16px',
      $description: '$number',
    },
    fontSize: {
      $type: 'dimension',
      $value: '14px',
      $description: '$number',
    },
    paddingXS: {
      $type: 'dimension',
      $value: '8px',
      $description: '$number',
    },
    paddingSM: {
      $type: 'dimension',
      $value: '12px',
      $description: '$number',
    },
  },
  checkbox: {
    colorText: {
      $type: 'color',
      $value: '{navy.navy-10}',
    },
    colorTextDisabled: {
      $type: 'color',
      $value: '{gray.gray-7}',
    },
    colorWhite: {
      $type: 'color',
      $value: '{static.white}',
    },
    borderRadius: {
      $type: 'dimension',
      $value: '4px',
      $description: '$number',
    },
    controlInteractiveSize: {
      $type: 'dimension',
      $value: '16px',
      $description: '$number',
    },
    lineHeight: {
      $type: 'dimension',
      $value: '24px',
      $description: '$string',
    },
    lineType: {
      $type: 'string',
      $value: 'solid',
    },
    lineWidth: {
      $type: 'dimension',
      $value: '2px',
      $description: '$number',
    },
    lineWidthBold: {
      $type: 'dimension',
      $value: '2px',
      $description: '$number',
    },
    lineWidthFocus: {
      $type: 'dimension',
      $value: '2px',
      $description: '$number',
    },
    colorBgContainer: {
      $type: 'color',
      $value: '{gray.gray-1}',
    },
    colorBgContainerDisabled: {
      $type: 'color',
      $value: '{gray.gray-3}',
    },
    colorBorder: {
      $type: 'color',
      $value: '{gray.gray-5}',
    },
    colorPrimary: {
      $type: 'color',
      $value: '{navy.navy-10}',
    },
    colorPrimaryBorder: {
      $type: 'color',
      $value: '{navy.navy-10}',
    },
    colorPrimaryHover: {
      $type: 'color',
      $value: '{navy.navy-8}',
    },
    fontSize: {
      $type: 'dimension',
      $value: '16px',
      $description: '$number',
    },
    marginXS: {
      $type: 'dimension',
      $value: '8px',
      $description: '$number',
    },
    paddingXS: {
      $type: 'dimension',
      $value: '8px',
      $description: '$number',
    },
    colorError: {
      $type: 'color',
      $value: '{volcano.volcano-5}',
    },
    fontWeight: {
      $type: 'dimension',
      $value: '600',
      $description: '$number',
    },
  },
  radio: {
    dotColorDisabled: {
      $type: 'color',
      $value: '{gray.gray-7}',
    },
    dotSize: {
      $type: 'dimension',
      $value: '8px',
      $description: '$number',
    },
    radioSize: {
      $type: 'dimension',
      $value: '16px',
      $description: '$number',
    },
    colorBgContainer: {
      $type: 'color',
      $value: '{gray.gray-1}',
    },
    colorBgContainerDisabled: {
      $type: 'color',
      $value: '{gray.gray-5}',
    },
    wrapperMarginInlineEnd: {
      $type: 'dimension',
      $value: '24px',
      $description: '$number',
    },
    colorPrimary: {
      $type: 'color',
      $value: '{navy.navy-10}',
    },
    colorPrimaryBorder: {
      $type: 'color',
      $value: '{navy.navy-10}',
    },
    colorPrimaryActive: {
      $type: 'color',
      $value: '{navy.navy-10}',
    },
    colorPrimaryHover: {
      $type: 'color',
      $value: '{navy.navy-8}',
    },
    colorTextDisabled: {
      $type: 'color',
      $value: '{gray.gray-7}',
    },
    fontSize: {
      $type: 'dimension',
      $value: '16px',
      $description: '$number',
    },
    lineHeight: {
      $type: 'dimension',
      $value: '24px',
      $description: '$string',
    },
    lineType: {
      $type: 'string',
      $value: 'solid',
    },
    lineWidth: {
      $type: 'dimension',
      $value: '2px',
      $description: '$number',
    },
    lineWidthFocus: {
      $type: 'dimension',
      $value: '2px',
      $description: '$number',
    },
    paddingXS: {
      $type: 'dimension',
      $value: '8px',
      $description: '$number',
    },
    colorText: {
      $type: 'color',
      $value: '{navy.navy-10}',
    },
    colorError: {
      $type: 'color',
      $value: '{volcano.volcano-5}',
    },
    fontWeight: {
      $type: 'dimension',
      $value: '600',
      $description: '$number',
    },
  },
  switch: {
    handleBg: {
      $type: 'color',
      $value: '{static.white}',
    },
    handleSize: {
      $type: 'dimension',
      $value: '18px',
      $description: '$number',
    },
    trackHeight: {
      $type: 'dimension',
      $value: '22px',
      $description: '$number',
    },
    trackMinWidth: {
      $type: 'dimension',
      $value: '44px',
      $description: '$number',
    },
    trackPadding: {
      $type: 'dimension',
      $value: '2px',
      $description: '$number',
    },
    colorPrimary: {
      $type: 'color',
      $value: '{navy.navy-10}',
    },
    colorPrimaryHover: {
      $type: 'color',
      $value: '{navy.navy-8}',
    },
    innerMaxMargin: {
      $type: 'dimension',
      $value: '24px',
      $description: '$number',
    },
  },
  tag: {
    defaultBg: {
      $type: 'color',
      $value: '{gray.gray-4}',
    },
    defaultColor: {
      $type: 'color',
      $value: '{gray.gray-10}',
    },
    colorBorder: {
      $type: 'color',
      $value: '{gray.gray-5}',
    },
    borderRadius: {
      $type: 'dimension',
      $value: '4px',
      $description: '$number',
    },
    borderRadiusSM: {
      $type: 'dimension',
      $value: '4px',
      $description: '$number',
    },
    fontSize: {
      $type: 'dimension',
      $value: '14px',
      $description: '$number',
    },
    fontSizeSM: {
      $type: 'dimension',
      $value: '14px',
      $description: '$number',
    },
    fontSizeIcon: {
      $type: 'dimension',
      $value: '12px',
      $description: '$number',
    },
    lineHeight: {
      $type: 'dimension',
      $value: '14px',
      $description: '$string',
    },
    lineHeightSM: {
      $type: 'dimension',
      $value: '14px',
      $description: '$string',
    },
    lineType: {
      $type: 'string',
      $value: 'solid',
    },
    lineWidth: {
      $type: 'dimension',
      $value: '1px',
      $description: '$number',
    },
    marginXS: {
      $type: 'dimension',
      $value: '8px',
      $description: '$number',
    },
    paddingXS: {
      $type: 'dimension',
      $value: '8px',
      $description: '$number',
    },
    paddingXXS: {
      $type: 'dimension',
      $value: '4px',
      $description: '$number',
    },
    colorFillSecondary: {
      $type: 'color',
      $value: '{gray.gray-7}',
    },
    fontWeight: {
      $type: 'dimension',
      $value: '600',
      $description: '$number',
    },
    controlInteractiveSize: {
      $type: 'dimension',
      $value: '12px',
      $description: '$number',
    },
  },
  popover: {
    titleMinWidth: {
      $type: 'dimension',
      $value: '140px',
      $description: '$number',
    },
    colorBgElevated: {
      $type: 'color',
      $value: '{gray.gray-1}',
    },
    colorText: {
      $type: 'color',
      $value: '{gray.gray-7}',
    },
    colorTextHeading: {
      $type: 'color',
      $value: '{navy.navy-10}',
    },
    borderRadius: {
      $type: 'dimension',
      $value: '4px',
      $description: '$number',
    },
    fontSize: {
      $type: 'dimension',
      $value: '14px',
      $description: '$number',
    },
    fontWeight: {
      $type: 'dimension',
      $value: '500',
      $description: '$number',
    },
    lineHeight: {
      $type: 'dimension',
      $value: '22px',
      $description: '$number',
    },
    sizePopupArrow: {
      $type: 'dimension',
      $value: '16px',
      $description: '$number',
    },
    paddingXS: {
      $type: 'dimension',
      $value: '4px',
      $description: '$number',
    },
    marginSM: {
      $type: 'dimension',
      $value: '12px',
      $description: '$number',
    },
    paddingXXS: {
      $type: 'dimension',
      $value: '4px',
      $description: '$number',
    },
    borderRadiusXS: {
      $type: 'dimension',
      $value: '2px',
      $description: '$number',
    },
  },
  timeline: {
    dotBg: {
      $type: 'color',
      $value: '{static.white}',
    },
    dotBorderWidth: {
      $type: 'dimension',
      $value: '2px',
      $description: '$number',
    },
    tailColor: {
      $type: 'color',
      $value: '{gray.gray-6}',
    },
    itemPaddingBottom: {
      $type: 'dimension',
      $value: '0px',
      $description: '$number',
    },
    tailWidth: {
      $type: 'dimension',
      $value: '2px',
      $description: '$number',
    },
  },
  pagination: {
    itemSize: {
      $type: 'dimension',
      $value: '24px',
      $description: '$number',
    },
    fontSize: {
      $type: 'dimension',
      $value: '14px',
      $description: '$number',
    },
    lineHeight: {
      $type: 'dimension',
      $value: '22px',
      $description: '$string',
    },
    marginXS: {
      $type: 'dimension',
      $value: '8px',
      $description: '$number',
    },
    marginXXS: {
      $type: 'dimension',
      $value: '4px',
      $description: '$number',
    },
    fontWeight: {
      $type: 'dimension',
      $value: '600',
      $description: '$number',
    },
    itemActiveBg: {
      $type: 'color',
      $value: '{gray.gray-4}',
    },
    itemBg: {
      $type: 'color',
      $value: '{gray.gray-4}',
    },
    itemInputBg: {
      $type: 'color',
      $value: '{gray.gray-1}',
    },
    colorText: {
      $type: 'color',
      $value: '{navy.navy-10}',
    },
    borderRadius: {
      $type: 'dimension',
      $value: '4px',
      $description: '$number',
    },
    lineWidth: {
      $type: 'dimension',
      $value: '2px',
      $description: '$number',
    },
    lineWidthFocus: {
      $type: 'dimension',
      $value: '2px',
      $description: '$number',
    },
    colorBorder: {
      $type: 'color',
      $value: '{navy.navy-10}',
    },
    paddingXS: {
      $type: 'dimension',
      $value: '8px',
      $description: '$number',
    },
    paddingXXS: {
      $type: 'dimension',
      $value: '4px',
      $description: '$number',
    },
  },
  table: {
    'theader-th-font-size': {
      $type: 'dimension',
      $value: '14px',
      $description: '$number',
    },
    'theader-th-font-weight': {
      $type: 'dimension',
      $value: '600',
      $description: '$number',
    },
    'theader-th-line-height': {
      $type: 'dimension',
      $value: '22px',
      $description: '$number',
    },
    'tbody-tr-color': {
      $type: 'color',
      $value: '{navy.navy-10}',
    },
    'tbody-tr-hover-color': {
      $type: 'color',
      $value: '{navy.navy-10}',
    },
    'tbody-tr-hover-color-background-color': {
      $type: 'color',
      $value: '{navy.navy-1}',
    },
    'theader-tr-background-color': {
      $type: 'color',
      $value: '{gray.gray-3}',
    },
    'theader-th-padding': {
      $type: 'string',
      $value: '16px 20px',
      $description: '$string',
    },
    'tbody-td-font-size': {
      $type: 'dimension',
      $value: '14px',
      $description: '$number',
    },
    'tbody-td-padding': {
      $type: 'string',
      $value: '16px 20px',
      $description: '$string',
    },
    'tbody-tr-border-bottom': {
      $type: 'string',
      $value: '1px solid',
      $description: '$string',
    },
    'tbody-td-font-weight': {
      $type: 'dimension',
      $value: '500',
      $description: '$number',
    },
    'table-builder-icon-padding': {
      $type: 'dimension',
      $value: '4px',
      $description: '$number',
    },
    'container-border-color': {
      $type: 'color',
      $value: '{gray.gray-5}',
    },
    'tbody-td-line-height': {
      $type: 'dimension',
      $value: '22px',
      $description: '$number',
    },
    'table-builder-icon-height': {
      $type: 'dimension',
      $value: '16px',
      $description: '$number',
    },
    'table-builder-icon-width': {
      $type: 'dimension',
      $value: '16px',
      $description: '$number',
    },
  },
  notification: {
    width: {
      $type: 'dimension',
      $value: '420px',
      $description: '$number',
    },
    fontSize: {
      $type: 'dimension',
      $value: '14px',
      $description: '$number',
    },
    fontSizeLG: {
      $type: 'dimension',
      $value: '16px',
      $description: '$number',
    },
    lineHeight: {
      $type: 'dimension',
      $value: '22px',
      $description: '$string',
    },
    colorText: {
      $type: 'color',
      $value: '{navy.navy-10}',
    },
    colorTextHeading: {
      $type: 'color',
      $value: '{navy.navy-10}',
    },
    colorIcon: {
      $type: 'color',
      $value: '{navy.navy-10}',
    },
    colorIconHover: {
      $type: 'color',
      $value: '{navy.navy-8}',
    },
    colorBgElevated: {
      $type: 'color',
      $value: '{gray.gray-1}',
    },
    borderRadius: {
      $type: 'dimension',
      $value: '4px',
      $description: '$number',
    },
    marginXXS: {
      $type: 'dimension',
      $value: '4px',
      $description: '$number',
    },
    controlInteractiveSize: {
      $type: 'dimension',
      $value: '16px',
      $description: '$number',
    },
    boxShadow: {
      $type: 'string',
      $value:
        '0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 9px 28px 8px rgba(0, 0, 0, 0.05)',
    },
    colorPrimary: {
      $type: 'color',
      $value: '{navy.navy-10}',
    },
    colorPrimaryBorderHover: {
      $type: 'color',
      $value: '{navy.navy-10}',
    },
  },
  upload: {
    colorFillAlter: {
      $type: 'color',
      $value: '{gray.gray-1}',
    },
    lineWidth: {
      $type: 'dimension',
      $value: '2px',
      $description: '$number',
    },
    colorBorder: {
      $type: 'color',
      $value: '{gray.gray-1}',
    },
    borderRadius: {
      $type: 'dimension',
      $value: '4px',
      $description: '$number',
    },
    paddingMD: {
      $type: 'dimension',
      $value: '16px',
      $description: '$number',
    },
    marginMD: {
      $type: 'dimension',
      $value: '16px',
      $description: '$number',
    },
    marginXXS: {
      $type: 'dimension',
      $value: '4px',
      $description: '$number',
    },
    fontSizeLG: {
      $type: 'dimension',
      $value: '16px',
      $description: '$number',
    },
    colorTextHeading: {
      $type: 'color',
      $value: '{navy.navy-10}',
    },
    colorTextDescription: {
      $type: 'color',
      $value: '{gray.gray-7}',
    },
    fontSize: {
      $type: 'dimension',
      $value: '14px',
      $description: '$number',
    },
    colorPrimary_Hover: {
      $type: 'color',
      $value: '{gray.gray-4}',
    },
    colorPrimary: {
      $type: 'color',
      $value: '{navy.navy-10}',
    },
    colorError: {
      $type: 'color',
      $value: '{volcano.volcano-5}',
    },
    paddingXS: {
      $type: 'dimension',
      $value: '4px',
      $description: '$number',
    },
    colorLink: {
      $type: 'color',
      $value: '{navy.navy-10}',
    },
    marginXS: {
      $type: 'dimension',
      $value: '8px',
      $description: '$number',
    },
    lineHeight: {
      $type: 'dimension',
      $value: '22px',
      $description: '$string',
    },
    controlltemBgHover: {
      $type: 'color',
      $value: '{gray.gray-1}',
    },
    actionsColor: {
      $type: 'color',
      $value: '{navy.navy-10}',
    },
    fontWeight: {
      $type: 'dimension',
      $value: '500',
      $description: '$number',
    },
    hoverBorderColor: {
      $type: 'color',
      $value: '{gray.gray-1}',
    },
    controlInteractiveSize: {
      $type: 'dimension',
      $value: '16px',
      $description: '$number',
    },
  },
  progress: {
    remainingColor: {
      $type: 'color',
      $value: '{gray.gray-3}',
    },
    defaultColor: {
      $type: 'color',
      $value: '{navy.navy-10}',
    },
  },
  tabs: {
    inkBarColor: {
      $type: 'color',
      $value: '{navy.navy-6}',
    },
    itemActiveColor: {
      $type: 'color',
      $value: '{navy.navy-6}',
    },
    itemColor: {
      $type: 'color',
      $value: '{navy.navy-10}',
    },
    horizontalItemGutter: {
      $type: 'dimension',
      $value: '20px',
      $description: '$number',
    },
    horizontalItemPadding: {
      $type: 'dimension',
      $value: '12px',
      $description: '$number',
    },
    itemHoverColor: {
      $type: 'color',
      $value: '{navy.navy-7}',
    },
    itemSelectedColor: {
      $type: 'color',
      $value: '{navy.navy-10}',
    },
    colorTextDisabled: {
      $type: 'color',
      $value: '{gray.gray-7}',
    },
    lineHeight: {
      $type: 'dimension',
      $value: '22px',
      $description: '$string',
    },
    controlItemBgHover: {
      $type: 'color',
      $value: '{navy.navy-2}',
    },
    lineWidthFocus: {
      $type: 'dimension',
      $value: '2px',
      $description: '$number',
    },
    cardBg: {
      $type: 'color',
      $value: '{gray.gray-4}',
    },
    cardGutter: {
      $type: 'dimension',
      $value: '8px',
      $description: '$number',
    },
    cardHeight: {
      $type: 'dimension',
      $value: '40px',
      $description: '$number',
    },
    cardPadding: {
      $type: 'dimension',
      $value: '16px',
      $description: '$number',
    },
    borderRadius: {
      $type: 'dimension',
      $value: '4px',
      $description: '$number',
    },
    fontSize: {
      $type: 'dimension',
      $value: '16px',
      $description: '$number',
    },
    lineType: {
      $type: 'string',
      $value: 'solid',
    },
    lineWidth: {
      $type: 'dimension',
      $value: '1px',
      $description: '$number',
    },
    lineWidthBold: {
      $type: 'dimension',
      $value: '2px',
      $description: '$number',
    },
    fontWeight: {
      $type: 'dimension',
      $value: '600',
      $description: '$number',
    },
    colorBorder: {
      $type: 'color',
      $value: '{gray.gray-5}',
    },
    margin: {
      $type: 'dimension',
      $value: '2px',
      $description: '$number',
    },
  },
  card: {
    actionsBg: {
      $type: 'color',
      $value: '{gray.gray-1}',
    },
    actionsLiMargin: {
      $type: 'dimension',
      $value: '8px',
      $description: '$string',
    },
    headerBg: {
      $type: 'string',
      $value: 'transparent',
    },
    headerFontSize: {
      $type: 'dimension',
      $value: '22px',
      $description: '$number',
    },
    headerFontSizeSM: {
      $type: 'dimension',
      $value: '12px',
      $description: '$number',
    },
    colorBgContainer: {
      $type: 'color',
      $value: '{gray.gray-1}',
    },
    colorText: {
      $type: 'color',
      $value: '{navy.navy-10}',
    },
    colorTextDescription: {
      $type: 'color',
      $value: '{gray.gray-7}',
    },
    colorTextHeading: {
      $type: 'color',
      $value: '{navy.navy-10}',
    },
    borderRadius: {
      $type: 'dimension',
      $value: '4px',
      $description: '$number',
    },
    boxShadowTertiary: {
      $type: 'string',
      $value:
        '0 1px 2px 0 rgba(0, 0, 0, 0.03), 0 1px 6px -1px rgba(0, 0, 0, 0.02), 0 2px 4px 0 rgba(0, 0, 0, 0.02)',
    },
    fontSize: {
      $type: 'dimension',
      $value: '14px',
      $description: '$number',
    },
    fontWeightStrong: {
      $type: 'dimension',
      $value: '700',
      $description: '$number',
    },
    lineHeight: {
      $type: 'dimension',
      $value: '22px',
      $description: '$string',
    },
    margin: {
      $type: 'dimension',
      $value: '12px',
      $description: '$number',
    },
    padding: {
      $type: 'dimension',
      $value: '20px',
      $description: '$number',
    },
    marginXXS: {
      $type: 'dimension',
      $value: '4px',
      $description: '$number',
    },
    colorIcon: {
      $type: 'color',
      $value: '{navy.navy-10}',
    },
    controlInteractiveSize: {
      $type: 'dimension',
      $value: '16px',
      $description: '$number',
    },
    paddingLG: {
      $type: 'dimension',
      $value: '0px',
      $description: '$number',
    },
    colorBorderSecondary: {
      $type: 'color',
      $value: '{gray.gray-1}',
    },
    fontWeight: {
      $type: 'dimension',
      $value: '500',
      $description: '$number',
    },
  },
  drawer: {
    colorBgElevated: {
      $type: 'color',
      $value: '{gray.gray-4}',
    },
    colorBgMask: {
      $type: 'color',
      $value: '#13153580',
    },
    colorSplit: {
      $type: 'color',
      $value: '{gray.gray-5}',
    },
    colorText: {
      $type: 'color',
      $value: '{navy.navy-10}',
    },
    borderRadius: {
      $type: 'dimension',
      $value: '4px',
      $description: '$number',
    },
    fontWeightStrong: {
      $type: 'dimension',
      $value: '600',
      $description: '$number',
    },
    fontSizeLG: {
      $type: 'dimension',
      $value: '22px',
      $description: '$number',
    },
    lineHeight: {
      $type: 'dimension',
      $value: '24px',
      $description: '$string',
    },
    lineType: {
      $type: 'string',
      $value: 'solid',
    },
    lineWidth: {
      $type: 'dimension',
      $value: '2px',
      $description: '$number',
    },
    marginXS: {
      $type: 'dimension',
      $value: '8px',
      $description: '$number',
    },
    padding: {
      $type: 'dimension',
      $value: '16px',
      $description: '$number',
    },
    paddingLG: {
      $type: 'dimension',
      $value: '60px',
      $description: '$number',
    },
    paddingXS: {
      $type: 'dimension',
      $value: '8px',
      $description: '$number',
    },
    controlInteractiveSize: {
      $type: 'dimension',
      $value: '24px',
      $description: '$number',
    },
    colorIcon: {
      $type: 'color',
      $value: '{navy.navy-10}',
    },
  },
  modal: {
    contentBg: {
      $type: 'color',
      $value: '{gray.gray-4}',
    },
    headerBg: {
      $type: 'color',
      $value: '{gray.gray-4}',
    },
    titleFontSize: {
      $type: 'dimension',
      $value: '24px',
      $description: '$number',
    },
    titleColor: {
      $type: 'color',
      $value: '{navy.navy-10}',
    },
    titleLineHeight: {
      $type: 'dimension',
      $value: '32px',
      $description: '$string',
    },
    colorBgMask: {
      $type: 'color',
      $value: '#13153580',
    },
    colorIcon: {
      $type: 'color',
      $value: '{navy.navy-10}',
    },
    controlInteractiveSize: {
      $type: 'dimension',
      $value: '24px',
      $description: '$number',
    },
    colorSplit: {
      $type: 'color',
      $value: '{gray.gray-5}',
    },
    colorText: {
      $type: 'color',
      $value: '{navy.navy-10}',
    },
    borderRadius: {
      $type: 'dimension',
      $value: '4px',
      $description: '$number',
    },
    boxShadow: {
      $type: 'string',
      $value:
        '0 6px 16px 0 rgba(0, 0, 0 , 0.08), 0 3px 6px -4px rgba (0, 0, 0, 0.12), 0 9px 28px 8 px rgba(0, 0, 0, 0.05)',
    },
    fontSize: {
      $type: 'dimension',
      $value: '16px',
      $description: '$number',
    },
    fontSizeLG: {
      $type: 'dimension',
      $value: '20px',
      $description: '$number',
    },
    fontWeightStrong: {
      $type: 'dimension',
      $value: '600',
      $description: '$number',
    },
    lineHeight: {
      $type: 'dimension',
      $value: '24px',
      $description: '$string',
    },
    lineWidth: {
      $type: 'dimension',
      $value: '2px',
      $description: '$number',
    },
    lineType: {
      $type: 'string',
      $value: 'solid',
    },
    margin: {
      $type: 'dimension',
      $value: '16px',
      $description: '$number',
    },
    marginXS: {
      $type: 'dimension',
      $value: '8px',
      $description: '$number',
    },
    padding: {
      $type: 'dimension',
      $value: '30px',
      $description: '$number',
    },
    paddingLG: {
      $type: 'dimension',
      $value: '60px',
      $description: '$number',
    },
    screenSMMax: {
      $type: 'dimension',
      $value: '767px',
      $description: '$number',
    },
    fontWeight: {
      $type: 'dimension',
      $value: '500',
      $description: '$number',
    },
  },
  horizontal_navigation: {
    paddingInline: {
      $type: 'dimension',
      $value: '30px',
      $description: '$number',
    },
    paddingBlock: {
      $type: 'dimension',
      $value: '10px',
      $description: '$number',
    },
    margin: {
      $type: 'dimension',
      $value: '15px',
      $description: '$number',
    },
    iconSize: {
      $type: 'dimension',
      $value: '32px',
      $description: '$number',
    },
    controlInteractiveSize: {
      $type: 'dimension',
      $value: '24px',
      $description: '$number',
    },
    bgColor: {
      $type: 'color',
      $value: '{navy.navy-9}',
    },
    colorText: {
      $type: 'color',
      $value: '{static.white}',
    },
    marginSM: {
      $type: 'dimension',
      $value: '8px',
      $description: '$number',
    },
    itemMargin: {
      $type: 'dimension',
      $value: '10px',
      $description: '$number',
    },
    itemPaddingBlock: {
      $type: 'dimension',
      $value: '15px',
      $description: '$number',
    },
    itemPaddingInline: {
      $type: 'dimension',
      $value: '20px',
      $description: '$number',
    },
    colorIcon: {
      $type: 'color',
      $value: '{static.white}',
    },
    itemBgHover: {
      $type: 'color',
      $value: '{navy.navy-7}',
    },
    itemBgActive: {
      $type: 'color',
      $value: '{navy.navy-8}',
    },
    fontSize: {
      $type: 'dimension',
      $value: '16px',
      $description: '$number',
    },
    lineHeight: {
      $type: 'dimension',
      $value: '24px',
      $description: '$string',
    },
    fontWeight: {
      $type: 'dimension',
      $value: '500',
      $description: '$number',
    },
    borderRadius: {
      $type: 'dimension',
      $value: '4px',
      $description: '$number',
    },
    fontSizeSM: {
      $type: 'dimension',
      $value: '14px',
      $description: '$number',
    },
    paddingBlockSM: {
      $type: 'dimension',
      $value: '0px',
      $description: '$number',
    },
  },
  vertical_navigation: {
    itemPaddingBlock: {
      $type: 'dimension',
      $value: '4px',
      $description: '$number',
    },
    itemPaddingInline: {
      $type: 'dimension',
      $value: '20px',
      $description: '$number',
    },
    fontSize: {
      $type: 'dimension',
      $value: '16px',
      $description: '$number',
    },
    lineHeight: {
      $type: 'dimension',
      $value: '24px',
      $description: '$string',
    },
    itemBgHover: {
      $type: 'color',
      $value: '{navy.navy-7}',
    },
    itemBgActive: {
      $type: 'color',
      $value: '{navy.navy-8}',
    },
    bgColor: {
      $type: 'color',
      $value: '{navy.navy-9}',
    },
    fontWeight: {
      $type: 'dimension',
      $value: '500',
      $description: '$number',
    },
    fontSizeSM: {
      $type: 'dimension',
      $value: '14px',
      $description: '$number',
    },
    iconColor: {
      $type: 'color',
      $value: '{static.white}',
    },
    textColor: {
      $type: 'color',
      $value: '{static.white}',
    },
    borderRadius: {
      $type: 'dimension',
      $value: '4px',
      $description: '$number',
    },
    padding: {
      $type: 'dimension',
      $value: '40px',
      $description: '$number',
    },
    paddingInline: {
      $type: 'dimension',
      $value: '20px',
      $description: '$number',
    },
    paddingBlockSM: {
      $type: 'dimension',
      $value: '10px',
      $description: '$number',
    },
    paddingBlock: {
      $type: 'dimension',
      $value: '30px',
      $description: '$number',
    },
    controlInteractiveSize: {
      $type: 'dimension',
      $value: '24px',
      $description: '$number',
    },
  },
};

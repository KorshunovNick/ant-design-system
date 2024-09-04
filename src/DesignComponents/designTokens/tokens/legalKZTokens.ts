import { Tokens } from '../Tokens.types';

export const legalKZTokens: Tokens = {
  button: {
    fontWeight: {
      $type: 'string',
      $value: '600',
    },
    onlyIconSizeLG: {
      $type: 'dimension',
      $value: '24px',
      $description: 'Размер иконки в кнопке',
    },
    onlyIconSizeSM: {
      $type: 'dimension',
      $value: '20px',
      $description: 'Размер иконки в кнопке',
    },
    contentFontSizeLG: {
      $type: 'dimension',
      $value: '16px',
    },
    contentFontSizeSM: {
      $type: 'dimension',
      $value: '14px',
    },
    contentLineHeightLG: {
      $type: 'dimension',
      $value: '24px',
    },
    contentLineHeightSM: {
      $type: 'dimension',
      $value: '20px',
    },
    paddingBlockLG: {
      $type: 'dimension',
      $value: '12px',
      $description: 'вертикальные паддинги',
    },
    paddingBlockSM: {
      $type: 'dimension',
      $value: '8px',
      $description: 'вертикальные паддинги',
    },
    paddingInlineLG: {
      $type: 'dimension',
      $value: '20px',
      $description: 'Горизонтальные паддинги',
    },
    paddingInlineSM: {
      $type: 'dimension',
      $value: '20px',
      $description: 'Горизонтальные паддинги',
    },
    paddingXS: {
      $type: 'dimension',
      $value: '8px',
    },
    borderRadiusLG: {
      $type: 'dimension',
      $value: '8px',
    },
    borderRadiusSM: {
      $type: 'dimension',
      $value: '8px',
    },
    defaultBg: {
      $type: 'color',
      $value: '{base.azure.azure-1}',
    },
    defaultBorderColor: {
      $type: 'color',
      $value: '{base.azure.azure-1}',
    },
    defaultColor: {
      $type: 'color',
      $value: '{base.azure.azure-8}',
    },
    defaultHoverBg: {
      $type: 'color',
      $value: '{base.azure.azure-1}',
    },
    defaultHoverBorderColor: {
      $type: 'color',
      $value: '{base.azure.azure-1}',
    },
    defaultHoverColor: {
      $type: 'color',
      $value: '{base.azure.azure-7}',
    },
    defaultActiveBg: {
      $type: 'color',
      $value: '{base.azure.azure-1}',
    },
    defaultActiveBorderColor: {
      $type: 'color',
      $value: '{base.azure.azure-1}',
    },
    defaultActiveColor: {
      $type: 'color',
      $value: '{base.azure.azure-9}',
    },
    colorPrimary: {
      $type: 'color',
      $value: '{base.azure.azure-6}',
    },
    primaryColor: {
      $type: 'color',
      $value: '{base.static.white}',
    },
    colorPrimaryHover: {
      $type: 'color',
      $value: '{base.azure.azure-5}',
    },
    colorPrimaryActive: {
      $type: 'color',
      $value: '{base.azure.azure-7}',
    },
    colorPrimaryBorder: {
      $type: 'color',
      $value: '{base.azure.azure-6}',
    },
    textHoverBG: {
      $type: 'color',
      $value: '{base.gray.gray-2}',
    },
    colorText: {
      $type: 'color',
      $value: '{base.azure.azure-10}',
    },
    colorTextDisabled: {
      $type: 'color',
      $value: '{base.gray.gray-5}',
    },
    borderColorDisabled: {
      $type: 'color',
      $value: '{base.gray.gray-2}',
    },
    colorLink: {
      $type: 'color',
      $value: '{base.azure.azure-7}',
    },
    colorLinkActive: {
      $type: 'color',
      $value: '{base.azure.azure-6}',
    },
    colorLinkHover: {
      $type: 'color',
      $value: '{base.azure.azure-5}',
    },
    colorBgContainerDisabled: {
      $type: 'color',
      $value: '{base.gray.gray-2}',
    },
    controlHeightLG: {
      $type: 'dimension',
      $value: '48px',
    },
    controlHeightSM: {
      $type: 'dimension',
      $value: '36px',
    },
    fontSize: {
      $type: 'dimension',
      $value: '14px',
    },
    fontSizeLG: {
      $type: 'dimension',
      $value: '16px',
    },
    lineType: {
      $type: 'string',
      $value: 'solid',
    },
    lineWidth: {
      $type: 'dimension',
      $value: '2px',
    },
    lineWidthFocus: {
      $type: 'dimension',
      $value: '2px',
    },
    marginXS: {
      $type: 'dimension',
      $value: '8px',
    },
    fontFamily: {
      $type: 'string',
      $value: 'Inter',
    },
    colorTextLightSolid: {
      $type: 'color',
      $value: '{base.static.white}',
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
      $value: '{base.static.white}',
    },
    colorBgContainer: {
      $type: 'color',
      $value: '{base.static.white}',
    },
    lineWidth: {
      $type: 'dimension',
      $value: '2px',
      $description: 'number',
    },
    colorBorder: {
      $type: 'color',
      $value: '{base.gray.gray-2}',
    },
    colorErrorBgHover: {
      $type: 'color',
      $value: '{base.static.white}',
    },
    inputFontSize: {
      $type: 'dimension',
      $value: '16px',
      $description: 'number',
    },
    lineHeight: {
      $type: 'dimension',
      $value: '24px',
      $description: 'value in EM, string is better',
    },
    paddingBlock: {
      $type: 'dimension',
      $value: '12px',
      $description: 'number',
    },
    paddingInline: {
      $type: 'dimension',
      $value: '12px',
      $description: 'number',
    },
    borderRadius: {
      $type: 'dimension',
      $value: '4px',
      $description: 'number',
    },
    paddingXXS: {
      $type: 'dimension',
      $value: '8px',
      $description: 'number',
    },
    fontSize: {
      $type: 'dimension',
      $value: '16px',
      $description: 'number',
    },
    colorIcon: {
      $type: 'color',
      $value: '{base.azure.azure-10}',
    },
    colorTextPlaceholder: {
      $type: 'color',
      $value: '{base.gray.gray-5}',
    },
    hoverBg: {
      $type: 'color',
      $value: '{base.static.white}',
    },
    hoverBorderColor: {
      $type: 'color',
      $value: '{base.gray.gray-3}',
    },
    activeBorderColor: {
      $type: 'color',
      $value: '{base.azure.azure-2}',
    },
    colorText: {
      $type: 'color',
      $value: '{base.azure.azure-10}',
    },
    colorError: {
      $type: 'color',
      $value: '{base.red.red-5}',
    },
    colorErrorText: {
      $type: 'color',
      $value: '{base.red.red-5}',
    },
    colorErrorBorderHover: {
      $type: 'color',
      $value: '{base.red.red-6}',
    },
    colorErrorBg: {
      $type: 'color',
      $value: '{base.static.white}',
    },
    colorBgContainerDisabled: {
      $type: 'color',
      $value: '{base.gray.gray-2}',
    },
    colorTextDisabled: {
      $type: 'color',
      $value: '{base.gray.gray-5}',
    },
    activeShadow: {
      $type: 'string',
      $value: '0 0 0 0 rgba(0, 0, 0, 0)',
    },
    fontFamily: {
      $type: 'string',
      $value: 'Inter',
    },
    fontWeight: {
      $type: 'dimension',
      $value: '400',
    },
  },
  description: {
    fontSize: {
      $type: 'dimension',
      $value: '12px',
    },
    colorTextDescription: {
      $type: 'color',
      $value: '{base.gray.gray-6}',
    },
    lineHeight: {
      $type: 'dimension',
      $value: '16px',
    },
    fontFamily: {
      $type: 'string',
      $value: 'Inter',
    },
    fontWeight: {
      $type: 'dimension',
      $value: '500',
    },
  },
  label: {
    labelFontSize: {
      $type: 'dimension',
      $value: '12px',
    },
    labelColor: {
      $type: 'color',
      $value: '{base.azure.azure-10}',
    },
    labelRequiredMarkColor: {
      $type: 'color',
      $value: '{base.red.red-5}',
    },
    marginXXS: {
      $type: 'dimension',
      $value: '4px',
    },
    fontSize: {
      $type: 'dimension',
      $value: '12px',
    },
    fontWeight: {
      $type: 'dimension',
      $value: '500',
    },
    lineHeight: {
      $type: 'dimension',
      $value: '16px',
    },
    fontFamily: {
      $type: 'string',
      $value: 'Inter',
    },
  },
  select: {
    multipleItemHeight: {
      $type: 'dimension',
      $value: '24px',
    },
    selectorBg: {
      $type: 'color',
      $value: '{base.static.white}',
    },
    colorBorder: {
      $type: 'color',
      $value: '{base.gray.gray-2}',
    },
    colorErrorBg: {
      $type: 'color',
      $value: '{base.static.white}',
    },
    colorErrorBgHover: {
      $type: 'color',
      $value: '{base.static.white}',
    },
    colorErrorHover: {
      $type: 'color',
      $value: '{base.red.red-6}',
    },
    lineWidth: {
      $type: 'dimension',
      $value: '2px',
    },
    colorTextPlaceholder: {
      $type: 'color',
      $value: '{base.gray.gray-5}',
    },
    borderRadius: {
      $type: 'dimension',
      $value: '4px',
    },
    fontSize: {
      $type: 'dimension',
      $value: '14px',
    },
    lineHeight: {
      $type: 'dimension',
      $value: '22px',
    },
    colorIcon: {
      $type: 'color',
      $value: '{base.azure.azure-10}',
    },
    controlHeight: {
      $type: 'dimension',
      $value: '48px',
    },
    controlPaddingHorizontal: {
      $type: 'dimension',
      $value: '12px',
    },
    showArrowPaddingInlineEnd: {
      $type: 'dimension',
      $value: '20px',
    },
    fontSizeIcon: {
      $type: 'dimension',
      $value: '12px',
    },
    colorPrimaryHover: {
      $type: 'color',
      $value: '{base.gray.gray-3}',
    },
    colorText: {
      $type: 'color',
      $value: '{base.azure.azure-10}',
    },
    colorErrorOutline: {
      $type: 'color',
      $value: '{base.red.red-5}',
    },
    colorError: {
      $type: 'color',
      $value: '{base.red.red-5}',
    },
    colorBgContainerDisabled: {
      $type: 'color',
      $value: '{base.gray.gray-2}',
    },
    colorTextDisabled: {
      $type: 'color',
      $value: '{base.gray.gray-5}',
    },
    optionFontSize: {
      $type: 'dimension',
      $value: '14px',
    },
    optionLineHeight: {
      $type: 'dimension',
      $value: '20px',
    },
    optionPadding: {
      $type: 'dimension',
      $value: '8px',
    },
    optionSelectedFontWeight: {
      $type: 'string',
      $value: '400',
    },
    colorBgElevated: {
      $type: 'color',
      $value: '{base.static.white}',
    },
    optionSelectedBg: {
      $type: 'color',
      $value: '{base.azure.azure-1}',
    },
    optionHeight: {
      $type: 'dimension',
      $value: '36px',
    },
    optionSelectedColor: {
      $type: 'color',
      $value: '{base.azure.azure-10}',
    },
    optionActiveBg: {
      $type: 'color',
      $value: '{base.gray.gray-1}',
    },
    multipleltemBg: {
      $type: 'color',
      $value: '{base.azure.azure-1}',
    },
    multipleltemColorDisabled: {
      $type: 'color',
      $value: '{base.gray.gray-2}',
    },
    fontFamily: {
      $type: 'string',
      $value: 'Inter',
    },
    fontWeight: {
      $type: 'dimension',
      $value: '400',
    },
  },
  datepicker: {
    cellHeight: {
      $type: 'dimension',
      $value: '40px',
      $description: 'number',
    },
    cellWidth: {
      $type: 'dimension',
      $value: '40px',
      $description: 'number',
    },
    cellActiveWithRangeBg: {
      $type: 'color',
      $value: '{base.azure.azure-1}',
    },
    cellHoverBg: {
      $type: 'color',
      $value: '{base.azure.azure-1}',
    },
    activeBorderColor: {
      $type: 'color',
      $value: '{base.azure.azure-2}',
    },
    cellRangeBorderColor: {
      $type: 'color',
      $value: '{base.azure.azure-6}',
    },
    activeBg: {
      $type: 'color',
      $value: '{base.static.white}',
    },
    hoverBorderColor: {
      $type: 'color',
      $value: '{base.gray.gray-3}',
    },
    inputFontSize: {
      $type: 'dimension',
      $value: '16px',
      $description: 'number',
    },
    colorBorder: {
      $type: 'color',
      $value: '{base.gray.gray-2}',
    },
    borderRadius: {
      $type: 'dimension',
      $value: '4px',
      $description: 'number',
    },
    lineWidth: {
      $type: 'dimension',
      $value: '1px',
      $description: 'number',
    },
    colorBgContainer: {
      $type: 'color',
      $value: '{base.static.white}',
    },
    colorBgContainerDisabled: {
      $type: 'color',
      $value: '{base.gray.gray-2}',
    },
    colorBgElevated: {
      $type: 'color',
      $value: '{base.static.white}',
    },
    colorError: {
      $type: 'color',
      $value: '{base.red.red-5}',
    },
    colorErrorBorderHover: {
      $type: 'color',
      $value: '{base.red.red-6}',
    },
    colorErrorBg: {
      $type: 'color',
      $value: '{base.static.white}',
    },
    colorErrorBgHover: {
      $type: 'color',
      $value: '{base.static.white}',
    },
    colorTextDisabled: {
      $type: 'color',
      $value: '{base.gray.gray-5}',
    },
    lineHeight: {
      $type: 'dimension',
      $value: '24px',
      $description: 'EM value, string is better',
    },
    paddingInline: {
      $type: 'dimension',
      $value: '12px',
      $description: 'number',
    },
    paddingBlock: {
      $type: 'dimension',
      $value: '12px',
      $description: 'number',
    },
    cellHoverWithRangeBg: {
      $type: 'color',
      $value: '{base.azure.azure-1}',
    },
    cellBgDisabled: {
      $type: 'color',
      $value: '{base.static.white}',
    },
    colorPrimary: {
      $type: 'color',
      $value: '{base.azure.azure-6}',
    },
    colorText: {
      $type: 'color',
      $value: '{base.azure.azure-10}',
    },
    colorTextHeading: {
      $type: 'color',
      $value: '{base.azure.azure-10}',
    },
    colorIcon: {
      $type: 'color',
      $value: '{base.azure.azure-10}',
    },
    colorTextLightSolid: {
      $type: 'color',
      $value: '{base.static.white}',
    },
    colorTextPlaceholder: {
      $type: 'color',
      $value: '{base.gray.gray-5}',
    },
    fontFamily: {
      $type: 'string',
      $value: 'Inter',
    },
    controlHeight: {
      $type: 'dimension',
      $value: '48px',
      $description: 'number',
    },
    paddingXXS: {
      $type: 'dimension',
      $value: '4px',
      $description: 'number',
    },
    fontWeight: {
      $type: 'dimension',
      $value: '400',
    },
    controlInteractiveSize: {
      $type: 'dimension',
      $value: '16px',
      $description: 'number',
    },
    fontSize: {
      $type: 'dimension',
      $value: '14px',
      $description: 'number',
    },
    paddingXS: {
      $type: 'dimension',
      $value: '8px',
      $description: 'number',
    },
    paddingSM: {
      $type: 'dimension',
      $value: '12px',
      $description: 'number',
    },
  },
  checkbox: {
    colorText: {
      $type: 'color',
      $value: '{base.azure.azure-10}',
    },
    colorTextDisabled: {
      $type: 'color',
      $value: '{base.gray.gray-5}',
    },
    colorWhite: {
      $type: 'color',
      $value: '{base.static.white}',
    },
    borderRadius: {
      $type: 'dimension',
      $value: '4px',
      $description: 'number',
    },
    controlInteractiveSize: {
      $type: 'dimension',
      $value: '16px',
      $description: 'number',
    },
    lineHeight: {
      $type: 'dimension',
      $value: '24px',
      $description: 'EM value, string is better',
    },
    lineType: {
      $type: 'string',
      $value: 'solid',
    },
    lineWidth: {
      $type: 'dimension',
      $value: '2px',
      $description: 'number',
    },
    lineWidthBold: {
      $type: 'dimension',
      $value: '2px',
      $description: 'number',
    },
    lineWidthFocus: {
      $type: 'dimension',
      $value: '2px',
      $description: 'number',
    },
    colorBgContainer: {
      $type: 'color',
      $value: '{base.static.white}',
    },
    colorBgContainerDisabled: {
      $type: 'color',
      $value: '{base.gray.gray-3}',
    },
    colorBorder: {
      $type: 'color',
      $value: '{base.gray.gray-3}',
    },
    colorPrimary: {
      $type: 'color',
      $value: '{base.azure.azure-6}',
    },
    colorPrimaryBorder: {
      $type: 'color',
      $value: '{base.gray.gray-5}',
    },
    colorPrimaryHover: {
      $type: 'color',
      $value: '{base.azure.azure-5}',
    },
    fontFamily: {
      $type: 'string',
      $value: 'Inter',
    },
    fontSize: {
      $type: 'dimension',
      $value: '16px',
      $description: 'number',
    },
    marginXS: {
      $type: 'dimension',
      $value: '8px',
      $description: 'number',
    },
    paddingXS: {
      $type: 'dimension',
      $value: '8px',
      $description: 'number',
    },
    colorError: {
      $type: 'color',
      $value: '{base.red.red-5}',
    },
    fontWeight: {
      $type: 'dimension',
      $value: '400',
    },
  },
  radiobutton: {
    dotColorDisabled: {
      $type: 'color',
      $value: '{base.gray.gray-5}',
    },
    dotSize: {
      $type: 'dimension',
      $value: '8px',
      $description: 'number',
    },
    radioSize: {
      $type: 'dimension',
      $value: '16px',
      $description: 'number',
    },
    colorBgContainer: {
      $type: 'color',
      $value: '{base.static.white}',
    },
    colorBgContainerDisabled: {
      $type: 'color',
      $value: '{base.gray.gray-2}',
    },
    wrapperMarginInlineEnd: {
      $type: 'dimension',
      $value: '16px',
      $description: 'number',
    },
    colorPrimary: {
      $type: 'color',
      $value: '{base.azure.azure-6}',
    },
    colorPrimaryBorder: {
      $type: 'color',
      $value: '{base.gray.gray-4}',
    },
    colorPrimaryActive: {
      $type: 'color',
      $value: '{base.azure.azure-6}',
    },
    colorPrimaryHover: {
      $type: 'color',
      $value: '{base.azure.azure-5}',
    },
    colorTextDisabled: {
      $type: 'color',
      $value: '{base.gray.gray-5}',
    },
    fontFamily: {
      $type: 'string',
      $value: 'Inter',
    },
    fontSize: {
      $type: 'dimension',
      $value: '16px',
      $description: 'number',
    },
    lineHeight: {
      $type: 'dimension',
      $value: '24px',
      $description: 'EM value, string is better',
    },
    lineType: {
      $type: 'string',
      $value: 'solid',
    },
    lineWidth: {
      $type: 'dimension',
      $value: '2px',
      $description: 'number',
    },
    lineWidthFocus: {
      $type: 'dimension',
      $value: '2px',
      $description: 'number',
    },
    paddingXS: {
      $type: 'dimension',
      $value: '8px',
      $description: 'number',
    },
    colorText: {
      $type: 'color',
      $value: '{base.azure.azure-10}',
    },
    colorError: {
      $type: 'color',
      $value: '{base.red.red-5}',
    },
    fontWeight: {
      $type: 'dimension',
      $value: '400',
    },
  },
  switch: {
    handleBg: {
      $type: 'color',
      $value: '{base.static.white}',
    },
    handleSize: {
      $type: 'dimension',
      $value: '18px',
      $description: 'number',
    },
    trackHeight: {
      $type: 'dimension',
      $value: '22px',
      $description: 'number',
    },
    trackMinWidth: {
      $type: 'dimension',
      $value: '44px',
      $description: 'number',
    },
    trackPadding: {
      $type: 'dimension',
      $value: '2px',
      $description: 'number',
    },
    colorPrimary: {
      $type: 'color',
      $value: '{base.azure.azure-6}',
    },
    colorPrimaryHover: {
      $type: 'color',
      $value: '{base.azure.azure-5}',
    },
    innerMaxMargin: {
      $type: 'dimension',
      $value: '24px',
      $description: 'number',
    },
  },
  tags: {
    defaultBg: {
      $type: 'color',
      $value: '{base.azure.azure-1}',
    },
    defaultColor: {
      $type: 'color',
      $value: '{base.azure.azure-10}',
    },
    colorBorder: {
      $type: 'color',
      $value: '{base.azure.azure-6}',
    },
    borderRadius: {
      $type: 'dimension',
      $value: '4px',
    },
    borderRadiusSM: {
      $type: 'dimension',
      $value: '4px',
    },
    fontFamily: {
      $type: 'string',
      $value: 'Inter',
    },
    fontSize: {
      $type: 'dimension',
      $value: '14px',
    },
    fontSizeSM: {
      $type: 'dimension',
      $value: '14px',
    },
    fontSizeIcon: {
      $type: 'dimension',
      $value: '12px',
    },
    lineHeight: {
      $type: 'dimension',
      $value: '14px',
    },
    lineHeightSM: {
      $type: 'dimension',
      $value: '14px',
    },
    lineType: {
      $type: 'string',
      $value: 'solid',
    },
    lineWidth: {
      $type: 'dimension',
      $value: '1px',
    },
    marginXS: {
      $type: 'dimension',
      $value: '8px',
    },
    paddingXS: {
      $type: 'dimension',
      $value: '8px',
    },
    paddingXXS: {
      $type: 'dimension',
      $value: '4px',
    },
    colorFillSecondary: {
      $type: 'color',
      $value: '{base.gray.gray-5}',
    },
    fontWeight: {
      $type: 'dimension',
      $value: '500',
    },
    controlInteractiveSize: {
      $type: 'dimension',
      $value: '12px',
    },
  },
  popover: {
    titleMinWidth: {
      $type: 'dimension',
      $value: '140px',
    },
    colorBgElevated: {
      $type: 'color',
      $value: '{surface.cardBg}',
    },
    colorText: {
      $type: 'color',
      $value: '{elements.textSecondary}',
    },
    colorTextHeading: {
      $type: 'color',
      $value: '{elements.textPrimary}',
    },
    borderRadius: {
      $type: 'dimension',
      $value: '4px',
    },
    fontFamily: {
      $type: 'string',
      $value: 'Nunito',
    },
    fontSize: {
      $type: 'dimension',
      $value: '14px',
    },
    fontWeightStrong: {
      $type: 'dimension',
      $value: '700',
    },
    lineHeight: {
      $type: 'dimension',
      $value: '20px',
    },
    sizePopupArrow: {
      $type: 'dimension',
      $value: '16px',
    },
    paddingXS: {
      $type: 'dimension',
      $value: '8px',
    },
    marginSM: {
      $type: 'dimension',
      $value: '12px',
    },
    paddingXXS: {
      $type: 'dimension',
      $value: '4px',
    },
    borderRadiusXS: {
      $type: 'dimension',
      $value: '2px',
    },
  },
  breadcrumbs: {
    itemColor: {
      $type: 'color',
      $value: '{base.gray.gray-5}',
    },
    lastItemColor: {
      $type: 'color',
      $value: '{base.azure.azure-10}',
    },
    separatorColor: {
      $type: 'color',
      $value: '{base.gray.gray-3}',
    },
    separatorMargin: {
      $type: 'dimension',
      $value: '8px',
    },
    colorBgTextHover: {
      $type: 'color',
      $value: '{base.gray.gray-3}',
    },
    borderRadiusXS: {
      $type: 'dimension',
      $value: '2px',
    },
    fontFamily: {
      $type: 'string',
      $value: 'Inter',
    },
    fontSize: {
      $type: 'dimension',
      $value: '14px',
    },
    lineHeight: {
      $type: 'dimension',
      $value: '22px',
    },
    paddingXXS: {
      $type: 'dimension',
      $value: '4px',
    },
    fontWeight: {
      $type: 'dimension',
      $value: '400',
    },
  },
  timeline: {
    dotBg: {
      $type: 'color',
      $value: '#ffffff',
    },
    dotBorderWidth: {
      $type: 'dimension',
      $value: '2px',
    },
    tailColor: {
      $type: 'color',
      $value: '#e3e3e5',
    },
    itemPaddingBottom: {
      $type: 'dimension',
      $value: '0px',
    },
    tailWidth: {
      $type: 'dimension',
      $value: '1px',
    },
  },
  pagination: {
    itemSize: {
      $type: 'dimension',
      $value: '24px',
    },
    itemActiveColorDisabled: {
      $type: 'color',
      $value: '#131535',
    },
  },
  table: {
    'theader-th-font-size': {
      $type: 'dimension',
      $value: '14px',
    },
    cellFontSize: {
      $type: 'dimension',
      $value: '14px',
    },
    cellPaddingBlock: {
      $type: 'dimension',
      $value: '20px',
    },
    cellPaddingInline: {
      $type: 'dimension',
      $value: '20px',
    },
    selectionColumnWidth: {
      $type: 'dimension',
      $value: '32px',
    },
    footerBg: {
      $type: 'color',
      $value: '#ffffff',
    },
    footerColor: {
      $type: 'color',
      $value: '#ffffff',
    },
    headerBg: {
      $type: 'color',
      $value: '#e3e3e5',
    },
    headerColor: {
      $type: 'color',
      $value: '#131535',
    },
    rowSelectedBg: {
      $type: 'color',
      $value: '#eff1f8',
    },
    borderColor: {
      $type: 'color',
      $value: '#e3e3e5',
    },
    rowHoverBg: {
      $type: 'color',
      $value: '#eff1f8',
    },
  },
  notification: {
    width: {
      $type: 'dimension',
      $value: '420px',
    },
    fontSize: {
      $type: 'dimension',
      $value: '14px',
    },
    fontSizeLG: {
      $type: 'dimension',
      $value: '16px',
    },
    lineHeight: {
      $type: 'dimension',
      $value: '20px',
    },
    lineHeightLG: {
      $type: 'dimension',
      $value: '22px',
    },
    colorError: {
      $type: 'color',
      $value: '{base.red.red-5}',
    },
    colorinfo: {
      $type: 'color',
      $value: '{base.azure.azure-5}',
    },
    colorSuccess: {
      $type: 'color',
      $value: '{base.green.green-5}',
    },
    colorWarning: {
      $type: 'color',
      $value: '{base.yellow.yellow-5}',
    },
    colorText: {
      $type: 'color',
      $value: '{base.azure.azure-10}',
    },
    colorTextHeading: {
      $type: 'color',
      $value: '{base.azure.azure-10}',
    },
    colorIcon: {
      $type: 'color',
      $value: '{base.azure.azure-10}',
    },
    colorIconHover: {
      $type: 'color',
      $value: '{base.azure.azure-8}',
    },
    paddingMD: {
      $type: 'dimension',
      $value: '16px',
    },
    paddingContentHorizontalLG: {
      $type: 'dimension',
      $value: '16px',
    },
    colorBgElevated: {
      $type: 'color',
      $value: '{base.static.white}',
    },
    borderRadius: {
      $type: 'dimension',
      $value: '4px',
    },
    marginXXS: {
      $type: 'dimension',
      $value: '4px',
    },
    fontFamily: {
      $type: 'string',
      $value: 'Inter',
    },
    fontWeight: {
      $type: 'dimension',
      $value: '400',
    },
    controlInteractiveSize: {
      $type: 'dimension',
      $value: '16px',
    },
    boxShadow: {
      $type: 'string',
      $value:
        '0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 9px 28px 8px rgba(0, 0, 0, 0.05)',
    },
  },
  upload: {
    colorFillAlter: {
      $type: 'color',
      $value: '{base.static.white}',
    },
    lineWidth: {
      $type: 'dimension',
      $value: '2px',
    },
    colorBorder: {
      $type: 'color',
      $value: '{base.gray.gray-2}',
    },
    borderRadius: {
      $type: 'dimension',
      $value: '4px',
    },
    paddingMD: {
      $type: 'dimension',
      $value: '16px',
    },
    marginMD: {
      $type: 'dimension',
      $value: '16px',
    },
    marginXXS: {
      $type: 'dimension',
      $value: '4px',
    },
    fontSizeLG: {
      $type: 'dimension',
      $value: '16px',
    },
    colorTextHeading: {
      $type: 'color',
      $value: '{base.azure.azure-10}',
    },
    colorTextDescription: {
      $type: 'color',
      $value: '{base.gray.gray-6}',
    },
    fontSize: {
      $type: 'dimension',
      $value: '14px',
    },
    colorPrimary_Hover: {
      $type: 'color',
      $value: '{base.gray.gray-3}',
    },
    colorPrimary: {
      $type: 'color',
      $value: '{base.azure.azure-10}',
    },
    colorError: {
      $type: 'color',
      $value: '{base.red.red-5}',
    },
    paddingXS: {
      $type: 'dimension',
      $value: '4px',
    },
    colorLink: {
      $type: 'color',
      $value: '{base.azure.azure-10}',
    },
    marginXS: {
      $type: 'dimension',
      $value: '8px',
    },
    lineHeight: {
      $type: 'dimension',
      $value: '22px',
    },
    controlltemBgHover: {
      $type: 'color',
      $value: '#ffffff00',
    },
    actionsColor: {
      $type: 'color',
      $value: '{base.azure.azure-10}',
    },
    fontFamily: {
      $type: 'string',
      $value: 'Inter',
    },
    fontWeight: {
      $type: 'dimension',
      $value: '500',
    },
    hoverBorderColor: {
      $type: 'color',
      $value: '{base.gray.gray-2}',
    },
    controlInteractiveSize: {
      $type: 'dimension',
      $value: '16px',
    },
  },
  progress: {
    remainingColor: {
      $type: 'color',
      $value: '#e3e3e5',
    },
    defaultColor: {
      $type: 'color',
      $value: '#131535',
    },
  },
  tabs: {
    inkBarColor: {
      $type: 'color',
      $value: '{base.azure.azure-6}',
    },
    itemActiveColor: {
      $type: 'color',
      $value: '{base.azure.azure-10}',
    },
    itemColor: {
      $type: 'color',
      $value: '{base.azure.azure-10}',
    },
    cardBg: {
      $type: 'color',
      $value: '{base.gray.gray-2}',
    },
    cardGutter: {
      $type: 'dimension',
      $value: '8px',
    },
    cardHeight: {
      $type: 'dimension',
      $value: '32px',
    },
    cardPadding: {
      $type: 'dimension',
      $value: '12px',
    },
    horizontalItemGutter: {
      $type: 'dimension',
      $value: '20px',
    },
    horizontalItemPadding: {
      $type: 'dimension',
      $value: '12px',
    },
    horizontalMargin: {
      $type: 'dimension',
      $value: '16px',
    },
    itemHoverColor: {
      $type: 'color',
      $value: '{base.azure.azure-8}',
    },
    itemSelectedColor: {
      $type: 'color',
      $value: '{base.azure.azure-10}',
    },
    titleFontSize: {
      $type: 'dimension',
      $value: '14px',
    },
    titleFontSizeLG: {
      $type: 'dimension',
      $value: '16px',
    },
    colorTextDisabled: {
      $type: 'color',
      $value: '{base.gray.gray-5}',
    },
    lineHeight: {
      $type: 'dimension',
      $value: '22px',
    },
    fontFamily: {
      $type: 'string',
      $value: 'Inter',
    },
    controlItemBgHover: {
      $type: 'color',
      $value: '{base.azure.azure-5}',
    },
    paddingXS: {
      $type: 'dimension',
      $value: '4px',
    },
    borderRadius: {
      $type: 'dimension',
      $value: '4px',
    },
    fontWeight: {
      $type: 'dimension',
      $value: '600',
    },
    lineWidthFocus: {
      $type: 'dimension',
      $value: '2px',
    },
  },
  card: {
    actionsBg: {
      $type: 'color',
      $value: '{base.static.white}',
    },
    actionsLiMargin: {
      $type: 'dimension',
      $value: '8px',
      $description: 'string',
    },
    headerBg: {
      $type: 'string',
      $value: 'transparent',
    },
    headerFontSize: {
      $type: 'dimension',
      $value: '22px',
      $description: 'number',
    },
    headerFontSizeSM: {
      $type: 'dimension',
      $value: '12px',
      $description: 'number',
    },
    colorBgContainer: {
      $type: 'color',
      $value: '{base.static.white}',
    },
    colorText: {
      $type: 'color',
      $value: '{base.azure.azure-10}',
    },
    colorTextDescription: {
      $type: 'color',
      $value: '{base.gray.gray-6}',
    },
    colorTextHeading: {
      $type: 'color',
      $value: '{base.azure.azure-10}',
    },
    borderRadius: {
      $type: 'dimension',
      $value: '4px',
      $description: 'number',
    },
    boxShadowTertiary: {
      $type: 'string',
      $value:
        '0 1px 2px 0 rgba(0, 0, 0, 0.03), 0 1px 6px -1px rgba(0, 0, 0, 0.02), 0 2px 4px 0 rgba(0, 0, 0, 0.02)',
    },
    fontFamily: {
      $type: 'string',
      $value: 'Inter',
    },
    fontSize: {
      $type: 'dimension',
      $value: '14px',
      $description: 'number',
    },
    fontWeightStrong: {
      $type: 'dimension',
      $value: '600',
      $description: 'number',
    },
    lineHeight: {
      $type: 'dimension',
      $value: '22px',
      $description: 'value in EM, string is better',
    },
    margin: {
      $type: 'dimension',
      $value: '12px',
      $description: 'number',
    },
    padding: {
      $type: 'dimension',
      $value: '20px',
      $description: 'number',
    },
    marginXXS: {
      $type: 'dimension',
      $value: '4px',
      $description: 'number',
    },
    colorIcon: {
      $type: 'color',
      $value: '{base.azure.azure-10}',
    },
    controlInteractiveSize: {
      $type: 'dimension',
      $value: '16px',
      $description: 'number',
    },
    paddingLG: {
      $type: 'dimension',
      $value: '0px',
      $description: 'number',
    },
    colorBorderSecondary: {
      $type: 'color',
      $value: '{base.static.white}',
    },
  },
  drawer: {
    colorBgElevated: {
      $type: 'color',
      $value: '{base.static.white}',
    },
    colorBgMask: {
      $type: 'color',
      $value: '#0a2f5080',
    },
    colorSplit: {
      $type: 'color',
      $value: '{base.gray.gray-2}',
    },
    colorText: {
      $type: 'color',
      $value: '{base.azure.azure-10}',
    },
    borderRadius: {
      $type: 'dimension',
      $value: '4px',
      $description: 'number',
    },
    fontWeightStrong: {
      $type: 'dimension',
      $value: '500',
      $description: 'number',
    },
    fontSizeLG: {
      $type: 'dimension',
      $value: '22px',
      $description: 'number',
    },
    lineHeightLG: {
      $type: 'dimension',
      $value: '24px',
    },
    lineType: {
      $type: 'string',
      $value: 'solid',
    },
    lineWidth: {
      $type: 'dimension',
      $value: '2px',
      $description: 'number',
    },
    marginXS: {
      $type: 'dimension',
      $value: '8px',
      $description: 'number',
    },
    padding: {
      $type: 'dimension',
      $value: '20px',
      $description: 'number',
    },
    paddingLG: {
      $type: 'dimension',
      $value: '60px',
      $description: 'number',
    },
    paddingXS: {
      $type: 'dimension',
      $value: '8px',
      $description: 'number',
    },
    fontFamily: {
      $type: 'string',
      $value: 'Inter',
    },
    controlInteractiveSize: {
      $type: 'dimension',
      $value: '24px',
      $description: 'number',
    },
    colorIcon: {
      $type: 'color',
      $value: '{base.azure.azure-10}',
    },
  },
  modal: {
    contentBg: {
      $type: 'color',
      $value: '{base.static.white}',
    },
    headerBg: {
      $type: 'color',
      $value: '{base.static.white}',
    },
    titleFontSize: {
      $type: 'dimension',
      $value: '24px',
      $description: 'number',
    },
    titleColor: {
      $type: 'color',
      $value: '{base.azure.azure-10}',
    },
    titleLineHeight: {
      $type: 'dimension',
      $value: '32px',
    },
    colorBgMask: {
      $type: 'color',
      $value: '#0a2f5080',
    },
    colorIcon: {
      $type: 'color',
      $value: '{base.azure.azure-10}',
    },
    controlInteractiveSize: {
      $type: 'dimension',
      $value: '24px',
      $description: 'number',
    },
    colorSplit: {
      $type: 'color',
      $value: '{base.gray.gray-3}',
    },
    colorText: {
      $type: 'color',
      $value: '{base.azure.azure-10}',
    },
    borderRadius: {
      $type: 'dimension',
      $value: '4px',
      $description: 'number',
    },
    boxShadow: {
      $type: 'string',
      $value:
        '0 6px 16px 0 rgba(0, 0, 0 , 0.08), 0 3px 6px -4px rgba (0, 0, 0, 0.12), 0 9px 28px 8 px rgba(0, 0, 0, 0.05)',
    },
    fontFamily: {
      $type: 'string',
      $value: 'Inter',
    },
    fontSize: {
      $type: 'dimension',
      $value: '14px',
      $description: 'number',
    },
    fontSizeLG: {
      $type: 'dimension',
      $value: '16px',
      $description: 'number',
    },
    fontWeightStrong: {
      $type: 'dimension',
      $value: '500',
      $description: 'number',
    },
    lineHeight: {
      $type: 'dimension',
      $value: '24px',
    },
    lineWidth: {
      $type: 'dimension',
      $value: '2px',
      $description: 'number',
    },
    lineType: {
      $type: 'string',
      $value: 'solid',
    },
    margin: {
      $type: 'dimension',
      $value: '16px',
      $description: 'number',
    },
    marginXS: {
      $type: 'dimension',
      $value: '8px',
      $description: 'number',
    },
    padding: {
      $type: 'dimension',
      $value: '30px',
      $description: 'number',
    },
    paddingLG: {
      $type: 'dimension',
      $value: '60px',
      $description: 'number',
    },
    screenSMMax: {
      $type: 'dimension',
      $value: '767px',
      $description: 'number',
    },
    fontWeight: {
      $type: 'dimension',
      $value: '400',
      $description: 'number',
    },
  },
  horizontal_navigation: {
    paddingInline: {
      $type: 'dimension',
      $value: '30px',
    },
    paddingBlock: {
      $type: 'dimension',
      $value: '10px',
    },
    margin: {
      $type: 'dimension',
      $value: '15px',
    },
    iconSize: {
      $type: 'dimension',
      $value: '32px',
    },
    controlInteractiveSize: {
      $type: 'dimension',
      $value: '24px',
    },
    bgColor: {
      $type: 'color',
      $value: '{base.static.white}',
    },
    colorText: {
      $type: 'color',
      $value: '{base.azure.azure-10}',
    },
    marginSM: {
      $type: 'dimension',
      $value: '8px',
    },
    itemMargin: {
      $type: 'dimension',
      $value: '10px',
    },
    itemPaddingBlock: {
      $type: 'dimension',
      $value: '15px',
    },
    itemPaddingInline: {
      $type: 'dimension',
      $value: '20px',
    },
    colorIcon: {
      $type: 'color',
      $value: '{base.azure.azure-10}',
    },
    itemBgHover: {
      $type: 'color',
      $value: '{base.static.white}',
    },
    itemBgActive: {
      $type: 'color',
      $value: '{base.static.white}',
    },
    fontSize: {
      $type: 'dimension',
      $value: '16px',
    },
    lineHeight: {
      $type: 'dimension',
      $value: '24px',
    },
    fontFamily: {
      $type: 'string',
      $value: 'Inter',
    },
    fontWeight: {
      $type: 'dimension',
      $value: '500',
    },
    borderRadius: {
      $type: 'dimension',
      $value: '4px',
    },
    fontSizeSM: {
      $type: 'dimension',
      $value: '14px',
    },
  },
  vertical_navigation: {
    itemPaddingBlock: {
      $type: 'dimension',
      $value: '0px',
    },
    itemPaddingInline: {
      $type: 'dimension',
      $value: '0px',
    },
    fontSize: {
      $type: 'dimension',
      $value: '0px',
    },
    lineHeight: {
      $type: 'dimension',
      $value: '0px',
    },
    itemBgHover: {
      $type: 'color',
      $value: '#ffffff',
    },
    itemBgActive: {
      $type: 'color',
      $value: '#ffffff',
    },
    bgColor: {
      $type: 'color',
      $value: '#ffffff',
    },
    fontWeight: {
      $type: 'dimension',
      $value: '0',
    },
    fontFamily: {
      $type: 'string',
      $value: 'String value',
    },
    fontSizeSM: {
      $type: 'dimension',
      $value: '0px',
    },
    iconColor: {
      $type: 'color',
      $value: '#ffffff',
    },
    textColor: {
      $type: 'color',
      $value: '#ffffff',
    },
  },
};

import { InjectionToken } from '@angular/core';
import { ThemePalette } from '@ceui/core/types';

/**
 * toast 配置
 */
export class CeuiToastConfig {
  theme?: ThemePalette;

  /**
   * 持续时间，单位 ms
   */
  duration?: number;

  /**
   * 固定
   */
  sticky?: boolean;

  closable?: boolean;
}

export const CEUI_TOAST_CONFIG_DEFAULT: CeuiToastConfig = {
  theme: 'primary',

  duration: 3000,

  sticky: false,

  closable: true,
};

/**
 * toast 数据令牌
 */
export const CEUI_TOAST_DATA = new InjectionToken<string>('ceui-toast-data');

/**
 * toast config 令牌
 */
export const CEUI_TOAST_CONFIG = new InjectionToken<CeuiToastConfig>(
  'ceui-toast-config'
);

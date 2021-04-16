import { InjectionToken } from '@angular/core';
import { Direction, ThemePalette } from '@ceui/core/types';

/**
 * toast 配置
 */
export class CeuiToastConfig {
  theme?: ThemePalette;

  /**
   * 持续时间，单位 ms
   */
  duration?: number;

  sticky?: boolean;

  closable?: boolean;

  direction?: Direction;
}

export const CEUI_TOAST_CONFIG_DEFAULT: CeuiToastConfig = {
  theme: 'primary',

  duration: 3000,

  sticky: false,

  closable: true,

  direction: 'topRight',
};

/**
 * toast 数据令牌
 */
export const CEUI_TOAST_DATA = new InjectionToken<string>('CEUI_TOAST_DATA');

/**
 * toast config 令牌
 */
export const CEUI_TOAST_CONFIG = new InjectionToken<CeuiToastConfig>('CEUI_TOAST_CONFIG');

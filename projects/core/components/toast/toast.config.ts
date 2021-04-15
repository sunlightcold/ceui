import { InjectionToken } from '@angular/core';
import { ThemePalette } from '@ceui/core/types';

/**
 * toast 配置
 */
export class CeuiToastConfig {
  theme!: ThemePalette;
}

/**
 * toast 数据令牌
 */
export const CEUI_TOAST_DATA = new InjectionToken<string>('ceui-toast-data');

/**
 * toast config 令牌
 */
export const CEUI_TOAST_CONFIG = new InjectionToken<CeuiToastConfig>('ceui-toast-config');

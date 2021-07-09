import { InjectionToken } from '@angular/core';

/**
 * toast 配置
 */
export class CeuiDialogConfig<T = any> {
  height?: number | string;

  width?: number | string;

  minWidth?: number | string;

  minHeight?: number | string;

  maxWidth?: number | string;

  maxHeight?: number | string;

  hasBackdrop? = true;

  backdropClickClose? = true;

  data?: T;
}

/**
 * dialog 数据令牌
 */
export const CEUI_DIALOG_DATA = new InjectionToken<any>('CEUI_DIALOG_DATA');

/**
 * dialog config 令牌
 */
export const CEUI_DIALOG_CONFIG = new InjectionToken<CeuiDialogConfig>(
  'CEUI_DIALOG_CONFIG'
);

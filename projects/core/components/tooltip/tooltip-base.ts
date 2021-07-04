import { CanDirectionCtor, mixinDirection } from '@ceui/core/common';

export class TooltipBase {}

export const MixinTooltipBase: CanDirectionCtor & typeof TooltipBase =
  mixinDirection(TooltipBase);

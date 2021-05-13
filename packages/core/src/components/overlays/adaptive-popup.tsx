import cx from 'classnames';
import React, { useState } from 'react';
import { useDevice } from '../../providers';
import { composeHandlers, composeState, pick } from '../../utils';
import { Dialog, DialogProps } from './dialog';
import { Popup, PopupProps, PopupTargetRenderArgs } from './popup';

export interface FullscreenPopupProps
  extends Omit<
      PopupProps,
      | 'renderTarget'
      | 'renderChildren'
      | 'placement'
      | 'interactionKind'
      | 'hoverDelay'
      | 'flip'
      | 'offset'
      | 'autoHeight'
      | 'autoWidth'
      | 'hasArrow'
    >,
    Pick<DialogProps, 'placement'> {
  renderTarget?(arg0: Partial<PopupTargetRenderArgs[0]>, arg1: PopupTargetRenderArgs[1]): React.ReactNode;
  renderChildren?(arg: { ref: React.Ref<Element>; children?: React.ReactNode }): React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
}

/**
 * 全屏弹层组件；表现与 PC Dialog 类似，用法参考 PC Popup.
 *
 * `<FullscreenPopup />` 包含以下限制：
 * - 无法指定 placement，目前总是居中对齐
 * - 无法指定弹层的高级参数（例如 flip/offset/autoHeight/autoWidth...）
 * - 弹层触发类型只支持 click
 * */
export function FullscreenPopup(props: FullscreenPopupProps) {
  const [_visible, _setVisible] = useState(Boolean(props.defaultVisible));
  const visible = composeState(props.visible, _visible);
  const onRequestClose = composeHandlers(props.onRequestClose, () => _setVisible(false));
  const onRequestOpen = composeHandlers(props.onRequestOpen, () => _setVisible(true));

  const {
    target,
    targetTagName = 'div',
    targetStyle,
    renderTarget = Popup.defaultRenderTarget as never /* never 用于推断 TS 类型 */,
    renderChildren,
    children,
    canCloseByOutSideClick = true,
    canCloseByEsc = true,
    animation,
    portalContainer,
    usePortal,
    hasBackdrop = true,
    backdropStyle,
    backdropClassName,
    placement,
  } = props;

  const overlayLifecycles = pick(props, ['beforeOpen', 'onOpen', 'afterOpen', 'beforeClose', 'onClose', 'afterClose']);

  const renderedTarget = renderTarget({ onClick: onRequestOpen }, { target, targetTagName, targetStyle });

  return (
    <>
      {renderedTarget}
      <Dialog
        placement={placement}
        className={cx('rex-fullscreen-popup', props.className)}
        style={{
          minWidth: '30%',
          maxWidth: '90%',
          ...props.style,
        }}
        minimal
        visible={visible}
        footer={null}
        onRequestClose={onRequestClose}
        canCloseByOutSideClick={canCloseByOutSideClick}
        canCloseByEsc={canCloseByEsc}
        canCloseByIcon={false}
        animation={animation}
        portalContainer={portalContainer}
        usePortal={usePortal}
        backdropStyle={backdropStyle}
        backdropClassName={backdropClassName}
        hasBackdrop={hasBackdrop}
        {...overlayLifecycles}
        // TODO 检查 props 透传是否有遗漏……
        renderChildren={renderChildren}
        children={children}
      />
    </>
  );
}

export function AdaptivePopup({
  fullscreenProps,
  ...others
}: (PopupProps | FullscreenPopupProps) & {
  fullscreenProps?: Partial<FullscreenPopupProps>;
  children?: never; // AdaptivePopup 不支持 children，这里显式的用 TS 声明
}) {
  const { device } = useDevice();
  const isFullscreen = ['tablet', 'phone'].includes(device.name);
  const PopupComponent = isFullscreen ? FullscreenPopup : Popup;
  const props: any = {
    ...others,
    ...(isFullscreen ? fullscreenProps : null),
  };
  return <PopupComponent {...props} />;
}

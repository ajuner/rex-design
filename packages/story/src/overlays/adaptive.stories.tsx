import { AdaptivePopup, Button, FullscreenPopup, Overlay } from '@rexd/core';
import React, { useState } from 'react';
import styled from 'styled-components';
import { AdaptiveDialog } from '../../../core/src/components/overlays/adaptive-dialog';

export default { title: 'overlays / Adaptive' };

const StyledDiv = styled.div`
  min-width: 300px;
  min-height: 100px;
  padding: 10px;
  background: var(--rex-colors-emphasis-10);
  box-shadow: var(--rex-shadows-lowDown);
`;

function BalaBala() {
  return (
    <>
      最近工作：高级经理｜招商银行丨杭州分行｜2009-07-01 至今
      <br />
      工作职责：巴拉巴拉小魔仙
      <br />
      联系方式：67676767｜1212121@163.con
      <br />
      教育经理：北京大学｜工商管理｜2007-09-01 至 2006-06-01
      <br />
      中央财经大学｜2004-09-01 至 2007-06-01
    </>
  );
}

export function BasicAdaptivePopup() {
  return (
    <AdaptivePopup trigger={<Button>尝试在不同端打开试试</Button>} style={{ maxWidth: '92%' }}>
      <StyledDiv>
        <BalaBala />
      </StyledDiv>
    </AdaptivePopup>
  );
}

export function NestedAdaptivePopup() {
  return (
    <AdaptivePopup trigger={<Button>查看详情</Button>} style={{ maxWidth: '92%' }}>
      <StyledDiv>
        <BalaBala />

        <AdaptivePopup trigger={<Button>查看教育经历</Button>} style={{ maxWidth: '92%' }}>
          <StyledDiv>
            1. 北京大学｜工商管理｜2007-09-01 至 2006-06-01
            <br />
            2. 中央财经大学｜2004-09-01 至 2007-06-01
          </StyledDiv>
        </AdaptivePopup>
      </StyledDiv>
    </AdaptivePopup>
  );
}

export function BasicAdaptiveDialog() {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <Button onClick={() => setVisible(true)}>尝试在不同端打开试试</Button>
      <AdaptiveDialog title="芭芭拉简历" visible={visible} onRequestClose={() => setVisible(false)}>
        <BalaBala />
      </AdaptiveDialog>
    </div>
  );
}

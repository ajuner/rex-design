import React, { useEffect, useState } from 'react';
import OriginalLayout from '@theme-original/Layout';
import useThemeContext from '@theme/hooks/useThemeContext';
import { AppProvider } from '@rexd/core';
import constate from 'constate';
import { PHONE_DEVICE, DESKTOP_DEVICE, theme, darkTheme, phoneTheme, phoneDarkTheme } from '@rexd/core/src';

export const [PlaygroundConfigProvider, usePlaygroundConfig] = constate(() => {
  const { isDarkTheme, setLightTheme, setDarkTheme } = useThemeContext();

  return {
    colorMode: isDarkTheme ? 'dark' : 'light',
    setLightMode: setLightTheme,
    setDarkMode: setDarkTheme,
  };
});

theme;
darkTheme;
phoneTheme;
phoneDarkTheme;

function LayoutInner({ children }) {
  const config = usePlaygroundConfig();

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // TODO 需要换成更加合理的判断方式
    setIsMobile(window.innerWidth < 415);
  }, []);

  return (
    <AppProvider
      colorMode={config.colorMode}
      device={isMobile ? PHONE_DEVICE : DESKTOP_DEVICE}
      theme={config.colorMode === 'dark' ? (isMobile ? phoneDarkTheme : darkTheme) : isMobile ? phoneTheme : theme}
    >
      {children}
    </AppProvider>
  );
}

export default function Layout({ children, ...props }) {
  return (
    <OriginalLayout {...props}>
      <PlaygroundConfigProvider>
        <LayoutInner>{children}</LayoutInner>
      </PlaygroundConfigProvider>
    </OriginalLayout>
  );
}

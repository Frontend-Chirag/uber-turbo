'use client';

import * as React from 'react';
import { BaseProvider, LightTheme } from 'baseui';
import { Provider as StyletronProvider } from 'styletron-react';
import { styletron } from './styletron';


type Props = {
    children: React.ReactNode;
};

export const UIProvider = ({ children }: Props) => (
    <StyletronProvider value={styletron}>
        <BaseProvider theme={LightTheme}>
            {children}
        </BaseProvider>
    </StyletronProvider>
);

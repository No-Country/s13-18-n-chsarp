"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import type { ThemeProviderProps } from "next-themes/dist/types";
import type { FC, ReactElement } from "react";

export const ThemeProvider: FC<ThemeProviderProps> = ({
    children,
    ...props
}: ThemeProviderProps): ReactElement => {
    return (
        <NextThemesProvider {...props}>
            { children }
        </NextThemesProvider>
    );
};
import type { FC, ReactElement, PropsWithChildren } from "react";

import { ThemeProvider } from "./theme-provider";

export const GlobalProviders: FC<PropsWithChildren> = ({
    children
}: PropsWithChildren): ReactElement => {
    return (
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem={false}
            storageKey="app-theme"
        >
            {children}
        </ThemeProvider>
    );
}
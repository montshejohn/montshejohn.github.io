"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"

// Relaxed typing to avoid issues with next-themes types during static export/build
// You can refine these types later if you install proper @types
export type ThemeProviderProps = any;

export function ThemeProvider({ children, ...props }: any) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}

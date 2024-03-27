/// <reference types="react-scripts" />

interface Window {
  ethereum: any;
}

class ProviderRpcError extends Error {
  message: string;
  code: number;
  data?: unknown;
}

declare module "@mui/material/styles" {
  interface Theme {
    status: {
      danger: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    status?: {
      danger?: string;
    };
  }
}

// All packages except `@mantine/hooks` require styles imports
import '@mantine/core/styles.css';
import { cssBundleHref } from '@remix-run/css-bundle';
import type { LinksFunction } from '@remix-run/node';

import {
  Links,
  Meta,
  LiveReload,
  ScrollRestoration,
  Outlet,
  Scripts,
} from "@remix-run/react";
import { Title } from './root/Title';
import { ColorSchemeScript, MantineProvider } from '@mantine/core';

export const links: LinksFunction = () => [
  ...(cssBundleHref
    ? [{ rel: 'stylesheet', href: cssBundleHref }]
    : []),
];

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1"
        />
        <link
          rel="icon"
          href="data:image/x-icon;base64,AA"
        />
        <Meta />
        <Links />
        <Title />
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider>
          <Outlet />
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
        </MantineProvider>
      </body>
    </html>
  );
}
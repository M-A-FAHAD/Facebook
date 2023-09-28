import ReduxStoreProvider from "@/RTK/provider"
export const metadata = {
  title: 'Facebook',
  description: 'Created by FAHAD',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ReduxStoreProvider>
          {children}
        </ReduxStoreProvider>
      </body>
    </html >
  )
}

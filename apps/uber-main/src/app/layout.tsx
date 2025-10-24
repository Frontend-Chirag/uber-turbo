
import { ApolloProvider } from "@/lib/apollo/apollo-provider";
import "./globals.css";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`h-full  antialiased `}
      >
        <ApolloProvider>
          {children}
        </ApolloProvider>
      </body>
    </html>
  );
}

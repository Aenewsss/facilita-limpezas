import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ReduxProvider from "@/providers/redux.provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Facilita Limpezas | Admin',
  description: 'Descubra a excelência em limpezas residenciais. Oferecemos uma variedade de serviços de alta qualidade para garantir que seu espaço esteja impecável e higienizado.',
  authors: {
    name: "Aenã Martinelli",
    url: "https://aenamartinelli.com.br"
  },
  creator: "Aenã Martinelli",
  category: "Limpeza Residencial,Limpeza de Carpetes e Estofados,Limpeza de Vidros,Tratamento de Pisos,Serviços Especiais de Limpeza"
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <ReduxProvider>
      <html lang="pt-BR">
        <head>
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" />
          <script crossOrigin="anonymous" src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" />
          <link rel="icon" href="favicon-192x192.png" type="image/png" />
        </head>

        <body className={inter.className}>
          {children}
          {/* <ToastContainer
          position="top-left"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        /> */}
        </body>
      </html>
    </ReduxProvider>
  );
}

import type {Metadata} from 'next';
import { Jost } from 'next/font/google';
import Script from 'next/script';
import './globals.css'; // Global styles

const jost = Jost({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-jost',
});

export const metadata: Metadata = {
  title: 'BMsoft Sistemas | Software de Gestão ERP, PDV e Força de Vendas',
  description: 'Líder em sistemas de gestão empresarial práticos e modernos. Otimize seu controle de estoque, faturamento, força de vendas mobile e frente de caixa PDV.',
  openGraph: {
    title: 'BMsoft Sistemas | Software de Gestão ERP, PDV e Força de Vendas',
    description: 'Simplifique a gestão da sua empresa com as soluções inteligentes da BMsoft. Mais de 20 anos desenvolvendo o futuro do seu negócio.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BMsoft Sistemas | Software de Gestão ERP, PDV e Força de Vendas',
    description: 'Simplifique a gestão da sua empresa com as soluções inteligentes da BMsoft.',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="pt-BR" className={`${jost.variable}`}>
      <body className={`${jost.className} antialiased bg-slate-50 text-slate-900 scroll-smooth`} suppressHydrationWarning>
        {children}
        {/* Widget de suporte do CRM Web (botão flutuante no canto inferior direito) */}
        <Script src="https://crm.bmsoft.com.br/widget.js" data-empresa="1" strategy="afterInteractive" />
      </body>
    </html>
  );
}


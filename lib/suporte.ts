/** Página de suporte do CRM (usada quando o widget não carregou) */
export const URL_SUPORTE = 'https://crm.bmsoft.com.br/suporte?e=1';

/**
 * Abre o painel do widget de suporte do CRM (widget.js), clicando no botão flutuante dele.
 * O widget não tem função pública para abrir: o botão alterna aberto/fechado, então só clica com o
 * painel (irmão anterior do botão) fechado. Devolve false se o widget não está na página.
 */
export function abrirWidgetSuporte(): boolean {
  const botao = document.querySelector<HTMLButtonElement>('button[aria-label="Suporte"]');
  if (!botao) return false;
  const painel = botao.previousElementSibling as HTMLElement | null;
  if (!painel || painel.style.display === 'none') botao.click();
  return true;
}

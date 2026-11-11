/* Aplica Digital - partes comuns do site (topo, rodape, contatos e downloads). */

/* ==== CONTATOS: preencha aqui (aparecem no site inteiro). Deixe "" para esconder. ==== */
const CONTATO = {
  whatsapp: "5519983126696",          // so numeros, com DDI e DDD. Ex.: "5519999999999"
  email: "a.demar1969@hotmail.com",   // ex.: "contato@aplicadigital.app.br"
  instagram: "",         // ex.: "aplicadigital" (sem @)
  cidade: "Campinas - SP",
  github: "https://github.com/ademar1969"
};

/* ==== CLIENTES: logos do carrossel da pagina inicial.
   Coloque a imagem em assets/clientes/ e acrescente uma linha. "site" e opcional (deixe ""). ==== */
const CLIENTES = [
  { nome: "Chopp Kremer Express", logo: "assets/clientes/chopp-kremer-express.png", site: "" },
  { nome: "CW Parafusos &amp; Ferramentas", logo: "assets/clientes/cw-parafusos-ferramentas.jpg", site: "" },
  { nome: "Center Ball Society Valinhos", logo: "assets/clientes/center-ball-society.jpg", site: "" }
];

const BASE = document.documentElement.dataset.base || "";   // "" na raiz, "../" nas paginas de produto

const ICONE = {
  menu: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 7h16M4 12h16M4 17h16"/></svg>',
  whats: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8s-.4-.1-.6.1-.7.8-.8 1-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.2-.4.2-.4.7-1.3.1-.1 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.8 11.8 0 0 0 4.5 4c1.7.7 2.3.8 3.2.7a2.7 2.7 0 0 0 1.8-1.3 2.2 2.2 0 0 0 .2-1.3c-.1-.1-.3-.2-.5-.3Z"/></svg>',
  email: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>',
  github: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 0 0-3.2 19.5c.5.1.7-.2.7-.5v-1.7c-2.8.6-3.4-1.3-3.4-1.3-.4-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.6 2.4 1.1 3 .9.1-.7.4-1.1.7-1.4-2.2-.3-4.6-1.1-4.6-5a3.9 3.9 0 0 1 1-2.7 3.6 3.6 0 0 1 .1-2.7s.8-.3 2.7 1a9.4 9.4 0 0 1 5 0c1.9-1.3 2.7-1 2.7-1a3.6 3.6 0 0 1 .1 2.7 3.9 3.9 0 0 1 1 2.7c0 3.9-2.4 4.7-4.6 5 .4.3.7.9.7 1.9V21c0 .3.2.6.7.5A10 10 0 0 0 12 2Z"/></svg>',
  instagram: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg>'
};

const MARCA = `<img class="marca-icone" src="${BASE}assets/logo-icone.png" alt="" width="86" height="86">`;

const PRODUTOS = [
  ["vendasnfe", "VendasNFe"],
  ["suporte-remoto", "Suporte Remoto"],
  ["aviso-de-agua", "Aviso de Água"],
  ["lembre-remedio", "LembreRemédio"],
  ["scanmail", "ScanMail"]
];

function linkWhats(texto) {
  return "https://wa.me/" + CONTATO.whatsapp + (texto ? "?text=" + encodeURIComponent(texto) : "");
}

function montarTopo() {
  const pagina = document.body.dataset.pagina || "";
  const item = (href, nome, chave) => `<a href="${BASE}${href}"${pagina === chave ? ' class="ativo"' : ""}>${nome}</a>`;
  const topo = document.createElement("header");
  topo.className = "topo";
  topo.innerHTML = `<div class="container">
      <a class="marca" href="${BASE}index.html" aria-label="Aplica Digital - início">${MARCA}<span>Aplica<b>Digital</b></span></a>
      <button class="abrir-menu" aria-label="Abrir menu" aria-expanded="false">${ICONE.menu}</button>
      <nav class="menu" aria-label="Principal">
        ${item("index.html", "Início", "inicio")}
        ${item("index.html#produtos", "Produtos", "produtos")}
        ${item("index.html#downloads", "Downloads", "downloads")}
        ${item("index.html#duvidas", "Dúvidas", "duvidas")}
        <a class="botao pequeno" href="${BASE}index.html#contato">Fale conosco</a>
      </nav></div>`;
  document.body.prepend(topo);
  const botao = topo.querySelector(".abrir-menu"), menu = topo.querySelector(".menu");
  botao.addEventListener("click", () => {
    const aberto = menu.classList.toggle("aberto");
    botao.setAttribute("aria-expanded", aberto);
  });
  menu.addEventListener("click", e => { if (e.target.tagName === "A") menu.classList.remove("aberto"); });
}

function montarRodape() {
  const r = document.createElement("footer");
  r.className = "rodape";
  const contatos = [];
  if (CONTATO.whatsapp) contatos.push(`<li><a href="${linkWhats("Olá! Vim pelo site da Aplica Digital.")}" target="_blank" rel="noopener">WhatsApp</a></li>`);
  if (CONTATO.email) contatos.push(`<li><a href="mailto:${CONTATO.email}">${CONTATO.email}</a></li>`);
  if (CONTATO.instagram) contatos.push(`<li><a href="https://instagram.com/${CONTATO.instagram}" target="_blank" rel="noopener">Instagram</a></li>`);
  contatos.push(`<li><a href="${CONTATO.github}" target="_blank" rel="noopener">GitHub</a></li>`);
  if (CONTATO.cidade) contatos.push(`<li>${CONTATO.cidade}</li>`);
  r.innerHTML = `<div class="container"><div class="colunas">
      <div><a class="marca" href="${BASE}index.html">${MARCA}<span>Aplica<b>Digital</b></span></a>
        <p>Sistemas e aplicativos que resolvem o dia a dia: vendas e nota fiscal, suporte remoto e apps para a saúde e a rotina.</p></div>
      <div><h3>Produtos</h3><ul>${PRODUTOS.map(([p, n]) => `<li><a href="${BASE}produtos/${p}.html">${n}</a></li>`).join("")}</ul></div>
      <div><h3>Contato</h3><ul>${contatos.join("")}</ul></div>
    </div>
    <div class="copyright"><span>© ${new Date().getFullYear()} Aplica Digital. Todos os direitos reservados.</span>
      <span>aplicadigital.app.br</span></div></div>`;
  document.body.append(r);
}

function montarContatos() {
  const area = document.getElementById("lista-contatos");
  if (!area) return;
  const cartoes = [];
  if (CONTATO.whatsapp) cartoes.push(`<a class="contato" href="${linkWhats("Olá! Vim pelo site da Aplica Digital e gostaria de mais informações.")}" target="_blank" rel="noopener">
      <div class="icone c-verde">${ICONE.whats}</div><b>WhatsApp</b><span>Resposta rápida em horário comercial</span></a>`);
  if (CONTATO.email) cartoes.push(`<a class="contato" href="mailto:${CONTATO.email}">
      <div class="icone c-azul">${ICONE.email}</div><b>E-mail</b><span>${CONTATO.email}</span></a>`);
  if (CONTATO.instagram) cartoes.push(`<a class="contato" href="https://instagram.com/${CONTATO.instagram}" target="_blank" rel="noopener">
      <div class="icone c-roxo">${ICONE.instagram}</div><b>Instagram</b><span>@${CONTATO.instagram}</span></a>`);
  cartoes.push(`<a class="contato" href="${CONTATO.github}" target="_blank" rel="noopener">
      <div class="icone c-laranja">${ICONE.github}</div><b>GitHub</b><span>Downloads e versões publicadas</span></a>`);
  area.innerHTML = cartoes.join("");
  if (CONTATO.whatsapp) {
    document.querySelectorAll("[data-whats]").forEach(a => { a.href = linkWhats(a.dataset.whats); a.target = "_blank"; a.rel = "noopener"; });
    const f = document.createElement("a");
    f.className = "whats-flutuante"; f.href = linkWhats("Olá! Vim pelo site da Aplica Digital."); f.target = "_blank"; f.rel = "noopener";
    f.setAttribute("aria-label", "Conversar pelo WhatsApp"); f.innerHTML = ICONE.whats;
    document.body.append(f);
  } else {
    document.querySelectorAll("[data-whats]").forEach(a => { a.href = BASE + "index.html#contato"; });
  }
}

/* Carrossel de logos que passa sozinho em loop (para ao passar o mouse). */
function montarClientes() {
  const secao = document.getElementById("clientes");
  const trilho = secao && secao.querySelector(".clientes-trilho");
  if (!trilho) return;
  if (!CLIENTES.length) { secao.hidden = true; return; }
  const item = c => {
    const conteudo = `<img src="${BASE}${c.logo}" alt="" loading="lazy"><span>${c.nome}</span>`;
    return `<li>${c.site
      ? `<a class="cliente" href="${c.site}" target="_blank" rel="noopener">${conteudo}</a>`
      : `<div class="cliente">${conteudo}</div>`}</li>`;
  };
  // com poucos clientes os logos ficam parados e centralizados (repetir o mesmo logo fica feio)
  if (CLIENTES.length < 5) {
    trilho.classList.add("parado");
    trilho.innerHTML = `<ul>${CLIENTES.map(item).join("")}</ul>`;
    return;
  }
  // com 5 ou mais: passa em loop; a lista vai duas vezes para o loop nao ter emenda
  const html = CLIENTES.map(item).join("");
  trilho.innerHTML = `<ul>${html}</ul><ul aria-hidden="true">${html}</ul>`;
  trilho.querySelectorAll('ul[aria-hidden] a').forEach(a => a.tabIndex = -1);
  trilho.style.setProperty("--duracao", CLIENTES.length * 4 + "s");
}

/* Botoes de download sempre na versao mais nova publicada no GitHub.
   <a data-release="dono/repositorio" data-arquivo="Setup-.*\.exe" href="(link de reserva)"> */
async function atualizarDownloads() {
  const botoes = document.querySelectorAll("[data-release]");
  const cache = {};
  for (const b of botoes) {
    const repo = b.dataset.release;
    try {
      cache[repo] = cache[repo] || fetch(`https://api.github.com/repos/${repo}/releases/latest`).then(r => r.ok ? r.json() : null);
      const rel = await cache[repo];
      if (!rel) continue;
      const re = new RegExp(b.dataset.arquivo, "i");
      const arq = (rel.assets || []).find(a => re.test(a.name));
      if (!arq) continue;
      b.href = arq.browser_download_url;
      const alvo = b.dataset.versaoEm && document.getElementById(b.dataset.versaoEm);
      if (alvo) alvo.textContent = `Versão ${rel.tag_name.replace(/^v/, "")} · ${(arq.size / 1048576).toFixed(arq.size > 1048576 ? 0 : 1).replace(".", ",")} MB`;
    } catch (e) { /* fica o link de reserva */ }
  }
}

montarTopo();
montarRodape();
montarContatos();
montarClientes();
atualizarDownloads();

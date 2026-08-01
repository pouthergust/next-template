export default function Home() {
  const stats = [
    {
      value: "+1800",
      label: "projetos entregues",
      detail: "Solucoes construidas em diferentes desafios de negocio.",
    },
    {
      value: "+380",
      label: "empresas atendidas",
      detail: "Relacoes de longo prazo em setores e portes distintos.",
    },
    {
      value: "+15",
      label: "setores atendidos",
      detail: "Visao ampla para desenhar software com contexto real.",
    },
    {
      value: "+250",
      label: "talentos alocados",
      detail: "Especialistas integrados para acelerar entregas.",
    },
  ];

  const pillars = [
    {
      title: "Software sob medida",
      description:
        "Projetos desenhados para medias e grandes empresas que precisam escalar com clareza, ownership e robustez.",
    },
    {
      title: "IA aplicada com criterio",
      description:
        "IA generativa e preditiva entram como alavanca estrategica, nao como promessa vaga ou efeito visual.",
    },
    {
      title: "Squads sob demanda",
      description:
        "Times completos de tecnologia com o perfil certo para evoluir produto, plataforma e operacao.",
    },
  ];

  const framework = [
    {
      step: "01",
      title: "Assessment",
      description:
        "Entendemos o contexto e o problema antes de decidir o que construir.",
    },
    {
      step: "02",
      title: "Prototipacao",
      description:
        "Validamos a ideia cedo para reduzir risco e acelerar as proximas decisoes.",
    },
    {
      step: "03",
      title: "Execucao",
      description:
        "Entregas incrementais, seguras e preparadas para crescer com o negocio.",
    },
    {
      step: "04",
      title: "QA e validacao",
      description:
        "Testes, acompanhamento e refinamento continuo para garantir consistencia.",
    },
  ];

  return (
    <main className="bg-[var(--color-page)] text-[var(--color-ink)]">
      <section className="bg-[var(--color-hero)] text-[var(--color-hero-ink)]">
        <div className="mx-auto flex max-w-7xl flex-col gap-16 px-6 pb-14 pt-6 sm:px-10 lg:px-12 lg:pb-20">
          <header className="flex flex-wrap items-center justify-between gap-4 border-b border-[var(--color-hero-line)] pb-5">
            <div className="flex flex-col">
              <span className="font-[family:var(--font-display)] text-2xl font-semibold tracking-[-0.05em]">
                Tegra
              </span>
              <span className="font-mono text-xs uppercase tracking-[0.16em] text-[var(--color-hero-muted)]">
                template inicial
              </span>
            </div>
            <a
              className="whitespace-nowrap rounded-full border border-[var(--color-hero-line)] px-4 py-2 text-sm font-medium text-[var(--color-hero-ink)] hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-accent)]"
              href="https://wa.me/558001151772"
              target="_blank"
              rel="noopener noreferrer"
            >
              Fale conosco
            </a>
          </header>

          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.45fr)_minmax(18rem,0.65fr)] lg:items-end">
            <div className="space-y-6">
              <p className="max-w-md font-mono text-xs uppercase tracking-[0.18em] text-[var(--color-hero-muted)]">
                IA First + Software House + Squads sob Demanda
              </p>
              <h1 className="max-w-5xl font-[family:var(--font-display)] text-[clamp(3.75rem,11vw,8.5rem)] font-semibold leading-[0.9] tracking-[-0.08em]">
                Tecnologia que simplifica o complexo.
              </h1>
            </div>

            <div className="space-y-4 border-t border-[var(--color-hero-line)] pt-5 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
              <p className="max-w-sm text-sm leading-6 text-[var(--color-hero-soft)] sm:text-base">
                Uma home inicial enxuta, inspirada na linguagem da Tegra e
                pronta para evoluir sem pesar no projeto.
              </p>
              <div className="flex flex-wrap gap-3 font-mono text-xs uppercase tracking-[0.14em] text-[var(--color-hero-muted)]">
                <a className="hover:text-white" href="#visao">
                  visao
                </a>
                <a className="hover:text-white" href="#impacto">
                  impacto
                </a>
                <a className="hover:text-white" href="#framework">
                  framework
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="h-2 w-full bg-[var(--color-accent)]" />

      <section
        id="visao"
        className="mx-auto max-w-7xl px-6 py-14 sm:px-10 lg:px-12 lg:py-20"
      >
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(18rem,0.8fr)]">
          <div className="space-y-6">
            <p className="font-mono text-xs uppercase tracking-[0.16em] text-[var(--color-muted)]">
              leitura inicial
            </p>
            <h2 className="max-w-3xl font-[family:var(--font-display)] text-4xl font-semibold tracking-[-0.06em] sm:text-5xl">
              Uma base institucional clara, direta e pronta para escalar.
            </h2>
            <p className="max-w-2xl text-base leading-7 text-[var(--color-muted)] sm:text-lg">
              O layout resume a proposta central da Tegra em poucos blocos:
              posicionamento forte, prova de confianca, pilares de atuacao e um
              CTA simples para seguir a conversa.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                className="whitespace-nowrap rounded-full bg-[var(--color-ink)] px-5 py-3 text-sm font-medium text-[var(--color-surface)] hover:-translate-y-0.5 hover:bg-[var(--color-hero)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-accent-strong)]"
                href="https://tegra.com.br/servicos/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Como fazemos
              </a>
              <a
                className="whitespace-nowrap rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-5 py-3 text-sm font-medium text-[var(--color-ink)] hover:-translate-y-0.5 hover:border-[var(--color-ink)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-accent-strong)]"
                href="https://tegra.com.br/cases/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ver cases
              </a>
            </div>
          </div>

          <aside className="rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-surface)] p-6 sm:p-8">
            <p className="font-mono text-xs uppercase tracking-[0.16em] text-[var(--color-muted)]">
              confianca de longo prazo
            </p>
            <blockquote className="mt-6 font-[family:var(--font-display)] text-2xl font-medium leading-tight tracking-[-0.05em]">
              &ldquo;A Tegra e a minha parceria estrategica de tecnologia ha
              mais de 6 anos.&rdquo;
            </blockquote>
            <p className="mt-6 text-sm text-[var(--color-muted)]">
              Sergio Mena Barreto
              <span className="block">CEO • Abrafarma</span>
            </p>
          </aside>
        </div>
      </section>

      <section
        id="impacto"
        aria-labelledby="impacto-heading"
        className="border-y border-[var(--color-border)] bg-[var(--color-surface)]"
      >
        <div className="mx-auto grid max-w-7xl gap-0 px-6 sm:px-10 lg:grid-cols-[minmax(15rem,0.9fr)_minmax(0,1.1fr)] lg:px-12">
          <div className="border-b border-[var(--color-border)] py-10 lg:border-b-0 lg:border-r lg:pr-10">
            <p className="font-mono text-xs uppercase tracking-[0.16em] text-[var(--color-muted)]">
              impacto real
            </p>
            <h2
              id="impacto-heading"
              className="mt-4 max-w-sm font-[family:var(--font-display)] text-3xl font-semibold tracking-[-0.05em] sm:text-4xl"
            >
              Numeros que sustentam a primeira impressao.
            </h2>
          </div>
          <dl className="grid grid-cols-1 sm:grid-cols-2">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="border-b border-[var(--color-border)] px-0 py-8 sm:px-8 sm:[&:nth-last-child(-n+2)]:border-b-0 lg:px-10"
              >
                <dt className="font-mono text-xs uppercase tracking-[0.16em] text-[var(--color-muted)]">
                  {stat.label}
                </dt>
                <dd className="mt-4 font-[family:var(--font-display)] text-5xl font-semibold tracking-[-0.08em] sm:text-6xl">
                  {stat.value}
                </dd>
                <p className="mt-4 max-w-xs text-sm leading-6 text-[var(--color-muted)]">
                  {stat.detail}
                </p>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14 sm:px-10 lg:px-12 lg:py-20">
        <div className="grid gap-8 lg:grid-cols-[minmax(15rem,0.75fr)_minmax(0,1.25fr)]">
          <div className="space-y-4">
            <p className="font-mono text-xs uppercase tracking-[0.16em] text-[var(--color-muted)]">
              capacidades
            </p>
            <h2 className="max-w-sm font-[family:var(--font-display)] text-3xl font-semibold tracking-[-0.05em] sm:text-4xl">
              O essencial da proposta Tegra, sem ruido.
            </h2>
          </div>

          <div className="space-y-4">
            {pillars.map((pillar, index) => (
              <article
                key={pillar.title}
                className={`rounded-[var(--radius-md)] border border-[var(--color-border)] p-6 sm:p-8 ${
                  index === 1 ? "bg-[var(--color-surface)]" : "bg-transparent"
                }`}
              >
                <div className="grid gap-4 sm:grid-cols-[5rem_minmax(0,1fr)] sm:items-start">
                  <p className="font-mono text-xs uppercase tracking-[0.16em] text-[var(--color-muted)]">
                    0{index + 1}
                  </p>
                  <div className="space-y-3">
                    <h3 className="font-[family:var(--font-display)] text-2xl font-semibold tracking-[-0.05em]">
                      {pillar.title}
                    </h3>
                    <p className="max-w-2xl text-sm leading-6 text-[var(--color-muted)] sm:text-base">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="framework"
        className="bg-[var(--color-hero)] text-[var(--color-hero-ink)]"
      >
        <div className="mx-auto max-w-7xl px-6 py-14 sm:px-10 lg:px-12 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-[minmax(15rem,0.75fr)_minmax(0,1.25fr)]">
            <div className="space-y-4">
              <p className="font-mono text-xs uppercase tracking-[0.16em] text-[var(--color-hero-muted)]">
                framework tegra
              </p>
              <h2 className="max-w-sm font-[family:var(--font-display)] text-3xl font-semibold tracking-[-0.05em] sm:text-4xl">
                Um fluxo curto para sair do template e virar produto.
              </h2>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {framework.map((item) => (
                <article
                  key={item.step}
                  className="rounded-[var(--radius-md)] border border-[var(--color-hero-line)] bg-white/5 p-6"
                >
                  <p className="font-mono text-xs uppercase tracking-[0.16em] text-[var(--color-hero-muted)]">
                    {item.step}
                  </p>
                  <h3 className="mt-5 font-[family:var(--font-display)] text-2xl font-semibold tracking-[-0.05em]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-[var(--color-hero-soft)] sm:text-base">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14 sm:px-10 lg:px-12 lg:py-20">
        <div className="rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-surface)] p-6 sm:p-8 lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_auto] lg:items-end">
            <div className="space-y-4">
              <p className="font-mono text-xs uppercase tracking-[0.16em] text-[var(--color-muted)]">
                pronto para evoluir
              </p>
              <h2 className="max-w-3xl font-[family:var(--font-display)] text-3xl font-semibold tracking-[-0.05em] sm:text-4xl">
                Uma primeira tela forte, leve e alinhada com a marca.
              </h2>
              <p className="max-w-2xl text-sm leading-6 text-[var(--color-muted)] sm:text-base">
                A partir daqui, o template pode crescer para jornadas completas,
                portfolio, paginas institucionais ou catalogo de servicos.
              </p>
            </div>
            <a
              className="inline-flex whitespace-nowrap rounded-full bg-[var(--color-accent)] px-5 py-3 text-sm font-medium text-[var(--color-ink)] hover:-translate-y-0.5 hover:bg-[var(--color-accent-strong)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-hero)]"
              href="https://tegra.com.br/contato/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Vamos definir o proximo passo
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-[var(--color-border)]">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-8 text-sm text-[var(--color-muted)] sm:px-10 lg:flex-row lg:items-center lg:justify-between lg:px-12">
          <div>
            <p className="font-[family:var(--font-display)] text-xl font-semibold tracking-[-0.04em] text-[var(--color-ink)]">
              Tegra
            </p>
            <p className="mt-1">Inteligencia que transforma negocios.</p>
          </div>

          <div className="flex flex-wrap gap-4">
            <a
              className="whitespace-nowrap hover:text-[var(--color-ink)]"
              href="https://tegra.com.br/sobre/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Sobre a Tegra
            </a>
            <a
              className="whitespace-nowrap hover:text-[var(--color-ink)]"
              href="https://tegra.com.br/cases/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Cases
            </a>
            <a
              className="whitespace-nowrap hover:text-[var(--color-ink)]"
              href="https://tegra.com.br/contato/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Contato
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}

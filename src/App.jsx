import {
  DemoBar,
  Header,
  Section,
  Faq,
  ZayavkaForm,
  Footer,
  btnPrimary,
  btnGhost,
} from "./ui.jsx";

const Logo = () => (
  <span className="flex items-center gap-2.5">
    <svg viewBox="0 0 64 64" className="size-8" aria-hidden="true">
      <rect width="64" height="64" rx="16" fill="#3d6a56" />
      <path
        d="M32 50C20 42 16 32 20 22c6 2 10 8 12 16 2-8 6-14 12-16 4 10 0 20-12 28z"
        fill="#f6f4ee"
      />
    </svg>
    <span className="leading-tight">
      <span className="block font-display text-lg font-bold">
        Ольга Лаврентьева
      </span>
      <span className="block text-xs text-muted">психолог, КПТ-терапевт</span>
    </span>
  </span>
);

const LINKS = {
  items: [
    { href: "#zaprosy", label: "С чем работаю" },
    { href: "#kak", label: "Как проходит" },
    { href: "#obo-mne", label: "Обо мне" },
    { href: "#tseny", label: "Стоимость" },
    { href: "#voprosy", label: "Вопросы" },
  ],
};

const ZAPROSY = [
  [
    "Тревога",
    "Постоянно прокручиваете в голове худшие сценарии и не можете расслабиться даже в отпуске.",
  ],
  [
    "Выгорание",
    "Работа перестала радовать, утром нет сил, а выходных не хватает, чтобы восстановиться.",
  ],
  [
    "Панические атаки",
    "Внезапный страх, сердцебиение, нехватка воздуха — и желание избегать мест, где это случилось.",
  ],
  [
    "Самооценка",
    "Сравниваете себя с другими, боитесь ошибиться и откладываете важные дела.",
  ],
  [
    "Отношения",
    "Повторяются одни и те же ссоры, трудно говорить о своих потребностях.",
  ],
  [
    "Перемены",
    "Переезд, новая работа, расставание — прежние опоры не работают, а новых ещё нет.",
  ],
];

const SHAGI = [
  [
    "Бесплатная встреча",
    "20 минут онлайн. Рассказываете, что беспокоит, я объясняю, как могу помочь. Решаете без давления.",
  ],
  [
    "Первая сессия",
    "Разбираем ситуацию подробно и формулируем цель: что должно измениться, чтобы стало легче.",
  ],
  [
    "Регулярная работа",
    "Встречи раз в неделю по 50 минут. Между ними — небольшие упражнения, которые занимают 10–15 минут в день.",
  ],
  [
    "Завершение",
    "Когда цель достигнута, закрепляем навыки, чтобы вы справлялись самостоятельно.",
  ],
];

const FAQ = [
  {
    q: "Онлайн-встреча помогает так же, как очная?",
    a: "Для работы с тревогой и выгоранием — да, исследования КПТ показывают сопоставимый результат. Важно, чтобы у вас было тихое место, где никто не слышит разговор.",
  },
  {
    q: "Сколько встреч понадобится?",
    a: "Зависит от запроса. Обычно первые изменения люди замечают через 4–6 встреч, а работа с одной темой занимает 10–15 встреч. Точнее скажу после первой сессии.",
  },
  {
    q: "Как понять, что психолог мне подходит?",
    a: "После встречи вам должно быть понятно, что происходило и зачем. Если некомфортно — скажите об этом, это нормальная часть работы. Если не сработаемся, порекомендую коллегу.",
  },
  {
    q: "Можно перенести встречу?",
    a: "Да, бесплатно, если предупредить за 24 часа. При более поздней отмене встреча оплачивается.",
  },
  {
    q: "Кто узнает о том, что я говорю?",
    a: "Никто. Всё, что происходит на встрече, конфиденциально. Исключение одно, и оно установлено законом: прямая угроза жизни.",
  },
];

function HeroArt() {
  return (
    <svg
      viewBox="0 0 440 480"
      className="h-auto w-full"
      role="img"
      aria-labelledby="art-t"
    >
      <title id="art-t">Абстрактная спокойная композиция из мягких форм</title>
      <rect x="20" y="20" width="400" height="440" rx="200" fill="#e5ece4" />
      <circle cx="300" cy="150" r="70" fill="#e9dcc6" />
      <path
        d="M60 360c60-70 140-90 220-60s110 10 140-20v160H60z"
        fill="#c9d7c6"
      />
      <path
        d="M40 400c70-40 150-50 230-20s120 20 150 0v80H40z"
        fill="#3d6a56"
        opacity="0.9"
      />
      <g fill="none" stroke="#1f2b25" strokeWidth="3" strokeLinecap="round">
        <path d="M150 330c-6-60 10-120 44-170" />
        <path
          d="M168 250c-22-6-40-24-46-48 24 2 42 18 46 48z"
          fill="#3d6a56"
          stroke="none"
        />
        <path
          d="M180 200c18-14 40-18 60-12-10 20-32 30-60 12z"
          fill="#3d6a56"
          stroke="none"
        />
        <path
          d="M162 290c20-12 44-14 62-4-12 18-36 24-62 4z"
          fill="#56826d"
          stroke="none"
        />
      </g>
    </svg>
  );
}

export default function App() {
  return (
    <>
      <DemoBar />
      <Header
        brand={<Logo />}
        links={LINKS}
        cta={{ href: "#zapis", label: "Записаться" }}
      />

      <main>
        <section>
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 pb-16 pt-12 md:grid-cols-[1.2fr_0.8fr] md:pb-24 md:pt-20">
            <div>
              <p className="mb-5 text-sm font-semibold uppercase tracking-[0.12em] text-accent-text">
                Психолог · онлайн и очно в Москве
              </p>
              <h1 className="font-display text-[clamp(2.2rem,1.3rem+3.6vw,3.9rem)] font-bold leading-[1.08] tracking-[-0.01em]">
                Помогу справиться с тревогой и выгоранием, чтобы снова появились
                силы
              </h1>
              <p className="mt-6 max-w-[54ch] text-[18px] leading-relaxed text-muted">
                Работаю в когнитивно-поведенческой терапии: это короткий и
                понятный подход с измеримым результатом. Первая встреча — 20
                минут бесплатно.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#zapis" className={btnPrimary}>
                  Записаться на бесплатную встречу
                </a>
                <a href="#kak" className={btnGhost}>
                  Как проходит работа
                </a>
              </div>
              <p className="mt-4 text-sm text-muted">
                Отвечу в течение дня. Ни к чему не обязывает.
              </p>
            </div>
            <div className="mx-auto w-full max-w-[380px]">
              <HeroArt />
            </div>
          </div>
        </section>

        <div className="border-y border-line bg-surface">
          <ul className="mx-auto grid max-w-6xl gap-x-8 gap-y-3 px-5 py-6 text-[15px] sm:grid-cols-2 lg:grid-cols-4">
            {[
              "Диплом психолога и переподготовка по КПТ",
              "Регулярная супервизия",
              "Работаю по этическому кодексу",
              "Полная конфиденциальность",
            ].map((t) => (
              <li key={t} className="flex items-center gap-3">
                <span
                  aria-hidden="true"
                  className="size-2 shrink-0 rounded-full bg-accent"
                />
                {t}
              </li>
            ))}
          </ul>
        </div>

        <Section
          id="zaprosy"
          eyebrow="С чем работаю"
          title="Узнаёте себя хотя бы в одном пункте?"
          lead="Это не «слабость характера» и не то, что надо просто перетерпеть. С каждым из этих состояний можно работать."
        >
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {ZAPROSY.map(([h, t]) => (
              <article
                key={h}
                className="rounded-[var(--radius-card)] border border-line bg-surface p-6"
              >
                <h3 className="font-display text-xl font-bold">{h}</h3>
                <p className="mt-2 leading-relaxed text-muted">{t}</p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          id="kak"
          tone="bg-soft"
          eyebrow="Как проходит работа"
          title="Понятно с первой встречи, что и зачем мы делаем"
        >
          <ol className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {SHAGI.map(([h, t], i) => (
              <li
                key={h}
                className="rounded-[var(--radius-card)] bg-surface p-6 shadow-[var(--shadow-card)]"
              >
                <span className="font-display text-4xl font-bold text-accent-text">
                  0{i + 1}
                </span>
                <h3 className="mt-4 text-lg font-bold">{h}</h3>
                <p className="mt-2 leading-relaxed text-muted">{t}</p>
              </li>
            ))}
          </ol>
        </Section>

        <Section id="obo-mne">
          <div className="grid items-start gap-12 md:grid-cols-[0.8fr_1.2fr]">
            <div className="grid aspect-[4/5] place-items-center rounded-[var(--radius-card)] bg-sand p-8 text-center">
              <div>
                <span
                  aria-hidden="true"
                  className="mx-auto grid size-28 place-items-center rounded-full bg-accent font-display text-4xl font-bold text-on-accent"
                >
                  ОЛ
                </span>
                <p className="mt-5 text-sm text-muted">
                  Место для фотографии специалиста
                </p>
              </div>
            </div>
            <div>
              <p className="mb-3 text-[13px] font-semibold uppercase tracking-[0.12em] text-accent-text">
                Обо мне
              </p>
              <h2 className="font-display text-[clamp(1.9rem,1.2rem+2.6vw,3rem)] font-bold leading-[1.1]">
                Ольга Лаврентьева
              </h2>
              <p className="mt-5 max-w-[58ch] text-[17px] leading-relaxed text-muted">
                Пришла в психологию после десяти лет в продажах, поэтому хорошо
                знаю, как выглядит выгорание изнутри. В работе опираюсь на
                методы с доказанной эффективностью и объясняю, почему делаем
                именно так.
              </p>
              <dl className="mt-8 grid gap-5 sm:grid-cols-2">
                {[
                  [
                    "Образование",
                    "Высшее психологическое, переподготовка по КПТ",
                  ],
                  ["Опыт", "6 лет частной практики"],
                  ["Формат", "Онлайн и очно, м. Чистые пруды"],
                  [
                    "Не работаю",
                    "С зависимостями и острыми психиатрическими состояниями",
                  ],
                ].map(([k, v]) => (
                  <div key={k} className="border-t border-line pt-4">
                    <dt className="text-sm font-semibold">{k}</dt>
                    <dd className="mt-1 text-muted">{v}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </Section>

        <Section
          id="tseny"
          tone="bg-surface border-y border-line"
          eyebrow="Стоимость"
          title="Оплата за встречу, без предоплаты за курс"
        >
          <div className="grid gap-5 lg:grid-cols-3">
            {[
              {
                n: "Онлайн-встреча",
                p: "4 000 ₽",
                d: "50 минут, видеосвязь",
                l: [
                  "Zoom, Телемост или Telegram",
                  "Упражнения между встречами",
                ],
              },
              {
                n: "Пакет из 5 встреч",
                p: "18 000 ₽",
                d: "3 600 ₽ за встречу",
                l: [
                  "Действует 2 месяца",
                  "Перенос без потери встречи",
                  "Онлайн или очно",
                ],
                hit: true,
              },
              {
                n: "Очная встреча",
                p: "5 000 ₽",
                d: "50 минут, кабинет у м. Чистые пруды",
                l: ["Отдельный вход, без очереди", "Чай и тишина"],
              },
            ].map((t) => (
              <article
                key={t.n}
                className={`flex flex-col rounded-[var(--radius-card)] border p-7 ${t.hit ? "border-accent bg-accent text-on-accent shadow-[var(--shadow-card)]" : "border-line bg-bg"}`}
              >
                {t.hit && (
                  <p className="mb-3 text-xs font-bold uppercase tracking-[0.1em] text-white/85">
                    Чаще выбирают
                  </p>
                )}
                <h3 className="text-xl font-bold">{t.n}</h3>
                <p className="mt-4 font-display text-4xl font-bold">{t.p}</p>
                <p
                  className={`mt-1 text-sm ${t.hit ? "text-white/85" : "text-muted"}`}
                >
                  {t.d}
                </p>
                <ul
                  className={`mt-6 flex-1 space-y-2 ${t.hit ? "text-white/90" : "text-muted"}`}
                >
                  {t.l.map((x) => (
                    <li key={x} className="flex gap-2">
                      <span aria-hidden="true">—</span>
                      {x}
                    </li>
                  ))}
                </ul>
                <a
                  href="#zapis"
                  className={`mt-7 inline-flex min-h-12 items-center justify-center rounded-[var(--radius-btn)] px-5 font-semibold transition hover:-translate-y-0.5 ${t.hit ? "bg-bg text-ink" : "border border-line-strong text-ink hover:border-ink"}`}
                >
                  Записаться
                </a>
              </article>
            ))}
          </div>
          <p className="mt-8 max-w-[62ch] rounded-[var(--radius-field)] border border-line-strong bg-bg px-5 py-4 text-[15px] leading-relaxed text-muted">
            Психолог не ставит диагнозы и не назначает лекарства. Если состояние
            резко ухудшилось или есть угроза жизни, звоните 112 или обращайтесь
            к психиатру.
          </p>
        </Section>

        <Section
          id="voprosy"
          eyebrow="Вопросы"
          title="Частые сомнения перед первой встречей"
        >
          <div className="max-w-3xl">
            <Faq items={FAQ} />
          </div>
        </Section>

        <Section id="zapis" tone="bg-soft">
          <div className="grid gap-12 md:grid-cols-[1fr_1.1fr]">
            <div>
              <p className="mb-3 text-[13px] font-semibold uppercase tracking-[0.12em] text-accent-text">
                Запись
              </p>
              <h2 className="font-display text-[clamp(1.9rem,1.2rem+2.6vw,3rem)] font-bold leading-[1.1]">
                Бесплатная встреча на 20 минут
              </h2>
              <p className="mt-4 max-w-[46ch] text-[17px] leading-relaxed text-muted">
                Напишите, как удобнее связаться. Подробности о запросе можно не
                указывать — обсудим на встрече.
              </p>
            </div>
            <div className="rounded-[var(--radius-card)] bg-surface p-[clamp(20px,4vw,40px)] shadow-[var(--shadow-card)]">
              <ZayavkaForm
                button="Записаться на встречу"
                note="Отвечу в течение дня, в выходные — до 18:00"
                fields={[
                  {
                    name: "imya",
                    label: "Имя",
                    required: true,
                    autoComplete: "given-name",
                    placeholder: "Можно не настоящее",
                  },
                  {
                    name: "svyaz",
                    label: "Как с вами связаться",
                    type: "choice",
                    options: ["Telegram", "WhatsApp", "Звонок"],
                  },
                  {
                    name: "telefon",
                    label: "Телефон",
                    type: "tel",
                    required: true,
                    autoComplete: "tel",
                    placeholder: "+7 900 000-00-00",
                  },
                  {
                    name: "zapros",
                    label: "Коротко о запросе",
                    type: "textarea",
                    placeholder: "Необязательно",
                  },
                ]}
              />
            </div>
          </div>
        </Section>
      </main>

      <Footer
        brand={<Logo />}
        about="Частная практика. Когнитивно-поведенческая терапия тревоги, выгорания и панических атак."
        contacts={[
          "+7 900 000-00-00 (демо)",
          "Пн–Сб, 10:00–20:00",
          "Онлайн и м. Чистые пруды",
        ]}
      />
    </>
  );
}

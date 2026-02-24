import { useRef, useEffect } from 'react'

const OFFER_ID = 'oferta'

function StarIcon({ fill = '#FABB05' }: { fill?: string }) {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill={fill} xmlns="http://www.w3.org/2000/svg" className="testi-star-svg">
      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
    </svg>
  )
}

function GoogleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="testi-google-icon" aria-hidden>
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
    </svg>
  )
}

function VerifiedBadge() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="#1A73E8" xmlns="http://www.w3.org/2000/svg" className="testi-verified-icon" aria-hidden>
      <path d="M12 2L15.5 5H20V9.5L23 13L20 16.5V21H15.5L12 24L8.5 21H4V16.5L1 13L4 9.5V5H8.5L12 2Z" />
      <path d="M9 13L11 15L15 11" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

function scrollToOffer() {
  document.getElementById(OFFER_ID)?.scrollIntoView({ behavior: 'smooth' })
}

export default function App() {
  const starsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const starsEl = starsRef.current
    if (!starsEl) return
    for (let i = 0; i < 70; i++) {
      const s = document.createElement('div')
      s.className = 'star'
      const size = Math.random() > 0.85 ? 3 : 2
      s.style.cssText = `
        left:${Math.random() * 100}%;
        top:${Math.random() * 100}%;
        width:${size}px;
        height:${size}px;
        --d:${2 + Math.random() * 3}s;
        --delay:${Math.random() * 3}s;
        --min:${0.1 + Math.random() * 0.15};
        --max:${0.4 + Math.random() * 0.5};
      `
      starsEl.appendChild(s)
    }
  }, [])

  return (
    <>
      <section className="hero">
        <div className="hero-bg" />
        <div className="hero-stars" ref={starsRef} />
        <div className="hero-inner">
          <div className="hero-from">
            <div className="hero-avatar">
              <img src="/1.jpg" alt="Sofia Martins" />
            </div>
            <div className="hero-from-text">
              <strong>Sofia Martins</strong>
              Consultora de sono infantil · mãe da Lia e do Rafael
            </div>
          </div>

          <h1>A técnica dos 3 toques que faz qualquer bebê dormir em <em>menos de 30 segundos.</em></h1>

          <p className="hero-sub">Sem choro. Sem birra. Sem método complicado. <strong>Só 3 movimentos simples</strong> que qualquer mãe pode aprender hoje.</p>

          <div className="hero-cta-wrap">
            <button className="btn-main" type="button" onClick={scrollToOffer}>
              Quero aprender os 3 toques
              <span>Acesso imediato por apenas $27</span>
            </button>
            <p className="hero-reassure">🔒 Garantia de 7 dias · sem perguntas</p>
          </div>
        </div>
      </section>

      <section className="pain">
        <div className="pain-wrap">
          <h2>Se você está lendo isso, provavelmente está exausta.</h2>

          <p>Não o tipo de cansaço que uma boa noite de sono resolve. É aquele cansaço que vai se acumulando dia após dia, noite após noite, até você chegar num ponto em que mal se lembra do próprio nome.</p>

          <p>Você ama seu bebê mais do que qualquer coisa. Mas tem noites que você está no chão, literalmente, sem saber mais o que tentar. Já fez música, amamentação, horas de colo, transferência no modo ninja. <strong>Às vezes funciona. Às vezes não.</strong> E essa incerteza é o que mais cansa de verdade.</p>

          <ul className="pain-list">
            <li>Acorda com o bebê toda hora da noite</li>
            <li>Passa horas tentando fazer ele dormir</li>
            <li>Já leu tudo e cada um fala uma coisa diferente</li>
            <li>Sente culpa quando chora junto com o bebê</li>
            <li>Está exausta, mas com medo de tentar algo novo</li>
          </ul>

          <p className="pain-close">Você não está fazendo nada errado. Simplesmente ninguém te ensinou o que funciona de verdade.</p>
        </div>
      </section>

      <section className="about">
        <div className="about-wrap">
          <span className="about-label">Quem eu sou e por que você deveria me ouvir</span>
          <div className="about-inner">
            <div className="about-avatar">
              <img src="/2.webp" alt="Sofia Martins" />
            </div>
            <div className="about-content">
              <h2>Oi, eu sou a Sofia.</h2>

              <p>Sou consultora de sono infantil há mais de 8 anos. Já acompanhei mais de 2.000 famílias, de recém-nascidos a crianças de 2 anos, em diferentes situações e contextos.</p>

              <p>Não sou médica. Não sou pediatra. E isso, na minha opinião, é exatamente o que me dá uma perspectiva diferente. Eu vejo o que acontece <strong>depois que a consulta acaba</strong>, dentro das casas, nas madrugadas reais, com mães reais que estão no limite.</p>

              <div className="about-highlight">
                &quot;A técnica dos 3 toques eu aprendi com mulheres mais velhas da minha família. Era um gesto natural, sem nome, sem protocolo. Algo que elas faziam sem pensar.&quot;
              </div>

              <p>Esse tipo de conhecimento não passa por consultório. Passa de mão em mão, de mãe para filha. Levei anos para entender o mecanismo por trás disso, estudar a fisiologia do sono infantil, testar com centenas de famílias reais e aperfeiçoar cada detalhe da sequência.</p>

              <p>O que você vai aprender aqui não é teoria. É uma técnica refinada ao longo de anos de prática, com resultados que acompanhei de perto.</p>
            </div>
          </div>
        </div>
      </section>

      <div className="divider">O método</div>

      <section className="method">
        <div className="method-wrap">
          <h2>A massagem dos 3 toques</h2>

          <p>Não é mágica. É fisiologia. O sistema nervoso do bebê responde de forma muito previsível a estímulos táteis específicos. Os 3 toques foram desenvolvidos para ativar exatamente essa resposta, em sequência, levando o bebê ao relaxamento profundo em segundos.</p>

          <p>O que diferencia essa técnica de uma massagem comum é a combinação de <strong>localização, pressão e ritmo</strong>. Cada detalhe importa, e é exatamente isso que o guia ensina.</p>

          <div className="touches">
            <div className="touch">
              <div className="touch-num">1</div>
              <div>
                <h3>O Toque da Cabeça</h3>
                <p>Movimento suave no couro cabeludo que ativa os receptores de relaxamento e desacelera o sistema nervoso do bebê. É o primeiro passo, e o que prepara tudo que vem depois.</p>
              </div>
            </div>
            <div className="touch">
              <div className="touch-num">2</div>
              <div>
                <h3>O Toque do Peito</h3>
                <p>Pressão leve e ritmada sobre o esterno que sincroniza a respiração do bebê. Recria a sensação de segurança que ele sentiu dentro do útero.</p>
              </div>
            </div>
            <div className="touch">
              <div className="touch-num">3</div>
              <div>
                <h3>O Toque do Pé</h3>
                <p>Estimulação de um ponto específico na planta do pé que libera tensão acumulada e sinaliza ao cérebro que é hora de descansar. É o toque que fecha o ciclo.</p>
              </div>
            </div>
          </div>

          <p>No guia eu mostro exatamente onde tocar, com qual pressão, por quanto tempo e na ordem certa. Tem vídeo para cada toque e variações por faixa etária.</p>
        </div>
      </section>

      <section className="testi-single">
        <div className="testi-single-wrap">
          <div className="testi-google-card testi-google-card--single">
            <div className="testi-google-header">
              <div className="testi-google-author">
                <div className="testi-google-avatar testi-google-avatar--initials">CR</div>
                <div className="testi-google-meta">
                  <strong className="testi-google-name">Camila R.</strong>
                  <span className="testi-google-sub">Mãe do Miguel, 4 meses</span>
                </div>
              </div>
              <GoogleIcon />
            </div>
            <div className="testi-google-stars-row">
              <div className="testi-google-stars">
                <StarIcon /><StarIcon /><StarIcon /><StarIcon /><StarIcon />
              </div>
              <div className="testi-google-verified">
                <VerifiedBadge />
                <span>Verificado</span>
              </div>
            </div>
            <p className="testi-google-quote">&quot;Não acreditei quando vi. Eram 2h da manhã, meu filho acordado há mais de uma hora. Fiz os 3 toques pela primeira vez e ele dormiu em menos de um minuto. Chorei de alívio.&quot;</p>
          </div>
        </div>
      </section>

      <section className="get">
        <div className="get-wrap">
          <h2>O que você recebe</h2>
          <p>Tudo em um app, disponível no celular 24 horas. Para acessar no escuro, com o bebê no colo.</p>
          <div className="get-items">
            <div className="get-item">
              <div className="get-item-icon">🎬</div>
              <h3>Vídeo demonstrativo</h3>
              <p>Cada toque mostrado visualmente, no ritmo certo, para você aplicar com confiança já na primeira tentativa.</p>
            </div>
            <div className="get-item">
              <div className="get-item-icon">📖</div>
              <h3>Ebook completo</h3>
              <p>Guia detalhado com explicações, variações por faixa etária e respostas para as dúvidas mais comuns.</p>
            </div>
            <div className="get-item">
              <div className="get-item-icon">📱</div>
              <h3>Acesso pelo app</h3>
              <p>Sempre disponível. Sem precisar procurar e-mail, link ou PDF. Um toque e está lá.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="testimonials">
        <div className="testi-wrap">
          <h2>O que as mães estão dizendo</h2>
          <p>Mais de 2.000 famílias já usam o método.</p>
          <div className="testi-grid">
            <div className="testi-google-card">
              <div className="testi-google-header">
                <div className="testi-google-author">
                  <div className="testi-google-avatar testi-google-avatar--initials">FL</div>
                  <div className="testi-google-meta">
                    <strong className="testi-google-name">Fernanda L.</strong>
                    <span className="testi-google-sub">Mãe da Sofia, 7 meses</span>
                  </div>
                </div>
                <GoogleIcon />
              </div>
              <div className="testi-google-stars-row">
                <div className="testi-google-stars">
                  <StarIcon /><StarIcon /><StarIcon /><StarIcon /><StarIcon />
                </div>
                <div className="testi-google-verified testi-google-verified--dark">
                  <VerifiedBadge />
                  <span>Verificado</span>
                </div>
              </div>
              <p className="testi-google-quote testi-google-quote--dark">&quot;Já tinha comprado dois cursos de sono antes. Esse é o único que funcionou. É simples, prático e dá pra usar no mesmo dia.&quot;</p>
            </div>

            <div className="testi-google-card">
              <div className="testi-google-header">
                <div className="testi-google-author">
                  <div className="testi-google-avatar testi-google-avatar--initials">AM</div>
                  <div className="testi-google-meta">
                    <strong className="testi-google-name">Ana Paula M.</strong>
                    <span className="testi-google-sub">Mãe do Pedro e da Luísa</span>
                  </div>
                </div>
                <GoogleIcon />
              </div>
              <div className="testi-google-stars-row">
                <div className="testi-google-stars">
                  <StarIcon /><StarIcon /><StarIcon /><StarIcon /><StarIcon />
                </div>
                <div className="testi-google-verified testi-google-verified--dark">
                  <VerifiedBadge />
                  <span>Verificado</span>
                </div>
              </div>
              <p className="testi-google-quote testi-google-quote--dark">&quot;Meu marido era cético. Agora ele é o que mais usa. Funcionou com nossos dois filhos em idades diferentes. Virou parte da nossa rotina.&quot;</p>
            </div>

            <div className="testi-google-card">
              <div className="testi-google-header">
                <div className="testi-google-author">
                  <div className="testi-google-avatar testi-google-avatar--initials">MS</div>
                  <div className="testi-google-meta">
                    <strong className="testi-google-name">Mariana S.</strong>
                    <span className="testi-google-sub">Mãe da Helena, 5 meses</span>
                  </div>
                </div>
                <GoogleIcon />
              </div>
              <div className="testi-google-stars-row">
                <div className="testi-google-stars">
                  <StarIcon /><StarIcon /><StarIcon /><StarIcon /><StarIcon />
                </div>
                <div className="testi-google-verified testi-google-verified--dark">
                  <VerifiedBadge />
                  <span>Verificado</span>
                </div>
              </div>
              <p className="testi-google-quote testi-google-quote--dark">&quot;Fui cética no começo mas a garantia me deu coragem de tentar. Em três dias minha filha já estava dormindo muito melhor.&quot;</p>
            </div>
          </div>
        </div>
      </section>

      <section className="transition">
        <div className="transition-wrap">
          <h2>E se essa fosse a última noite <em>sem dormir?</em></h2>
          <p>Você já tentou muita coisa. Dessa vez é diferente. É simples, é rápido, e funciona já na primeira tentativa. E se não funcionar, você tem 7 dias para pedir seu dinheiro de volta.</p>
        </div>
      </section>

      <section className="offer" id={OFFER_ID}>
        <div className="offer-wrap">
          <div className="offer-box">
            <div className="offer-box-top">
              <p className="price-from">De $97</p>
              <div className="price"><sup>$</sup>27</div>
              <p className="price-note">pagamento único · acesso vitalício</p>
            </div>

            <ul className="offer-includes">
              <li>Vídeo demonstrativo dos 3 toques</li>
              <li>Ebook completo com guia detalhado</li>
              <li>Variações por faixa etária (0 a 18 meses)</li>
              <li>Acesso pelo app 24 horas</li>
              <li>Atualizações gratuitas para sempre</li>
            </ul>

            <button className="btn-offer" type="button" onClick={() => alert('Integração com checkout aqui')}>
              Quero minha cópia agora
              <span>Acesso liberado em instantes</span>
            </button>

            <div className="guarantee">
              <strong>🛡️ Garantia de 7 dias</strong>
              Se não funcionar ou você não ficar satisfeita por qualquer motivo, devolvemos 100% do valor. Sem perguntas.
            </div>
          </div>
        </div>
      </section>

      <section className="faq">
        <div className="faq-wrap">
          <h2>Dúvidas frequentes</h2>

          <div className="faq-item">
            <div className="faq-q">A partir de qual idade funciona?</div>
            <div className="faq-a">O método foi desenvolvido para bebês de 0 a 18 meses. O guia traz variações específicas por faixa etária para você aplicar da forma certa em cada fase.</div>
          </div>

          <div className="faq-item">
            <div className="faq-q">E se não funcionar com o meu bebê?</div>
            <div className="faq-a">Você tem 7 dias de garantia total. Se não funcionar ou se não ficar satisfeita por qualquer motivo, basta pedir o reembolso e devolvemos 100% do valor pago. Sem questionamentos.</div>
          </div>

          <div className="faq-item">
            <div className="faq-q">Como acesso o conteúdo?</div>
            <div className="faq-a">Imediatamente após o pagamento você recebe acesso ao app com o vídeo e o ebook. Disponível no celular a qualquer hora do dia ou da noite.</div>
          </div>

          <div className="faq-item">
            <div className="faq-q">Precisa ter algum conhecimento especial?</div>
            <div className="faq-a">Nenhum. Se você consegue segurar seu bebê, consegue fazer os 3 toques. O vídeo mostra tudo com calma e detalhe.</div>
          </div>

          <div className="faq-item">
            <div className="faq-q">Funciona para bebês que já têm vício de colo?</div>
            <div className="faq-a">Sim. Você pode fazer os 3 toques com o bebê no colo e transferi-lo para o berço já dormindo. Muitas mães começam assim e aos poucos o bebê aprende a adormecer sozinho.</div>
          </div>

          <div className="faq-item">
            <div className="faq-q">Funciona para bebês amamentados?</div>
            <div className="faq-a">Sim. O método é independente de como você alimenta seu bebê. Funciona com amamentação, fórmula ou qualquer combinação.</div>
          </div>
        </div>
      </section>

      <footer>
        <p>© 2025 Baby Sleep Method · Sofia Martins</p>
        <p><a href="#">Política de Privacidade</a> · <a href="#">Termos de Uso</a></p>
        <p style={{ marginTop: 8, fontSize: 12 }}>Este conteúdo é educacional e não substitui orientação médica ou pediátrica.</p>
      </footer>

    </>
  )
}

import { useRef, useEffect } from 'react'

const OFFER_ID = 'offer'

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
              Infant sleep consultant · mom of Lia and Rafael
            </div>
          </div>

          <h1>The Danish method that will get your baby sleeping <em>12 hours straight in up to 3 days.</em></h1>

          <p className="hero-sub">Or your money back — no questions asked.</p>

          <div className="hero-cta-wrap">
            <button className="btn-main" type="button" onClick={scrollToOffer}>
              Get instant access now
              <span>Instant access for just $15</span>
            </button>
            <p className="hero-reassure">🔒 30-day money-back guarantee · no questions asked</p>
          </div>
        </div>
      </section>

      <section className="pain">
        <div className="pain-wrap">
          <h2>If you&apos;re reading this, you&apos;re probably exhausted.</h2>

          <p>If you&apos;re reading this, you&apos;re probably exhausted.</p>

          <p>You&apos;ve likely tried everything: rocking, white noise, relaxing music, baby massage... and nothing has truly worked.</p>

          <p>Your baby still wakes up multiple times during the night.</p>

          <p>And you&apos;re drained, with no energy, irritable, and feeling guilty for not being able to help your child sleep.</p>

          <p>I know exactly how you feel because I&apos;ve been there.</p>

          <p>And after months of research and desperation, I discovered the Danish infant sleep method — used for decades in Denmark, where babies naturally sleep 12 hours straight.</p>

          <p>I adapted this method to modern parenting and created a simple protocol that works in up to 3 days.</p>

          <p className="pain-close">Your baby sleeping 12 hours straight in up to 3 days or your money back.</p>
        </div>
      </section>

      <section className="about">
        <div className="about-wrap">
          <span className="about-label">Who I am and why you should listen</span>
          <div className="about-inner">
            <div className="about-avatar">
              <img src="/2.webp" alt="Sofia Martins" />
            </div>
            <div className="about-content">
              <h2>Hi, I&apos;m Sofia.</h2>

              <p>I&apos;m a mother, just like you, and I spent months without sleeping a full night.</p>

              <p>I tried absolutely everything I found online, listened to all the advice (much of it contradictory), and nothing worked.</p>

              <p>Until I discovered the Danish method.</p>

              <p>Denmark has the best-sleeping babies in the world. And it&apos;s not by chance.</p>

              <p>They developed a method based on science, routine, and respect for the baby&apos;s natural rhythm — no crying, no stress, no guilt.</p>

              <p>When I applied it with my daughter, in 2 days she was already sleeping 8 hours straight. On the third day, it was 12 uninterrupted hours.</p>

              <p>Since then, I&apos;ve helped over 2,700 mothers transform their nights and recover their sanity, energy, and connection with their babies.</p>
            </div>
          </div>
        </div>
      </section>

      <div className="divider">The method</div>

      <section className="method">
        <div className="method-wrap">
          <h2>The Danish Method</h2>
          <p className="method-subtitle">The Scandinavian secret to babies who sleep through the night</p>

          <p>In Denmark, babies sleeping 12 hours straight isn&apos;t the exception — it&apos;s the rule.</p>

          <p>The Danish method is based on three scientific pillars:</p>

          <div className="touches">
            <div className="touch">
              <div className="touch-num">1</div>
              <div>
                <h3>Natural circadian regulation</h3>
                <p>Alignment of the baby&apos;s biological rhythm through sun exposure, predictable routines, and controlled environment.</p>
              </div>
            </div>
            <div className="touch">
              <div className="touch-num">2</div>
              <div>
                <h3>Progressive sleep autonomy</h3>
                <p>The baby learns to fall asleep independently in a gradual and respectful way — no controlled crying, no abandonment.</p>
              </div>
            </div>
            <div className="touch">
              <div className="touch-num">3</div>
              <div>
                <h3>Constant emotional security</h3>
                <p>Consistent maternal presence during the process, creating an environment of absolute trust.</p>
              </div>
            </div>
          </div>

          <p>Unlike American methods based on &quot;cry it out,&quot; the Danish method respects the baby&apos;s emotional needs while establishing clear and healthy boundaries.</p>
        </div>
      </section>

      <section className="plan">
        <div className="plan-wrap">
          <h2>A simple, nurturing plan</h2>
          <p className="plan-subtitle">No crying, no guilt, no stress — just science applied with love</p>
          <div className="plan-days">
            <div className="plan-day">
              <h3>Day 1: Foundation Reset</h3>
              <p>Environment adjustment and circadian routine creation — complete preparation of the baby&apos;s nervous system for deep sleep.</p>
            </div>
            <div className="plan-day">
              <h3>Day 2: Sleep Association Building</h3>
              <p>Implementation of Danish techniques for progressive autonomy — your baby begins to fall asleep independently naturally.</p>
            </div>
            <div className="plan-day">
              <h3>Day 3: 12-Hour Consolidation</h3>
              <p>Sleep pattern consolidation — the first complete 12-hour night (and all the following ones).</p>
            </div>
          </div>
        </div>
      </section>

      <section className="keys">
        <div className="keys-wrap">
          <h2>3 keys unlock peace</h2>
          <p className="keys-intro">You don&apos;t need 15 different methods. You need a scientific protocol that works.</p>
          <p>The Baby Sleep Method is based on the Danish method adapted for modern parenting:</p>
          <ul className="keys-list">
            <li>Complete 3-day day-by-day protocol</li>
            <li>Adjustments by age range (0-3 months, 3-6 months, 6-12 months, 12-24 months)</li>
            <li>Environment optimized for deep sleep</li>
            <li>Emotional regulation techniques without crying</li>
            <li>Complete troubleshooting for specific situations</li>
          </ul>
        </div>
      </section>

      <section className="testi-single">
        <div className="testi-single-wrap">
          <div className="testi-google-card testi-google-card--single">
            <div className="testi-google-header">
              <div className="testi-google-author">
                <div className="testi-google-avatar testi-google-avatar--initials">JM</div>
                <div className="testi-google-meta">
                  <strong className="testi-google-name">Jessica M.</strong>
                  <span className="testi-google-sub">Mother of 8-month-old Emma</span>
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
                <span>Verified</span>
              </div>
            </div>
            <p className="testi-google-quote">&quot;In just 2 nights, my daughter went from waking every 2 hours to sleeping 11 hours straight. By night 3, she was sleeping 12 hours. I cried tears of joy. This method saved my sanity and my marriage.&quot;</p>
          </div>
        </div>
      </section>

      <section className="get">
        <div className="get-wrap">
          <h2>What you get</h2>
          <p>Everything you need to transform your nights in 3 days</p>
          <div className="get-items">
            <div className="get-item">
              <div className="get-item-icon">📖</div>
              <h3>The Complete Guide</h3>
              <p>The full Danish Method protocol — step-by-step for 3 days, with detailed explanations of the science behind each technique.</p>
            </div>
            <div className="get-item">
              <div className="get-item-icon">🎥</div>
              <h3>Video Tutorials</h3>
              <p>Visual demonstrations of every technique, environment setup, and soothing method — so you never feel lost.</p>
            </div>
            <div className="get-item">
              <div className="get-item-icon">📋</div>
              <h3>Daily Checklists</h3>
              <p>Print-ready daily action plans — just follow the steps, no guesswork.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="testimonials">
        <div className="testi-wrap">
          <h2>What parents are saying</h2>
          <div className="testi-grid">
            <div className="testi-google-card">
              <div className="testi-google-header">
                <div className="testi-google-author">
                  <div className="testi-google-avatar testi-google-avatar--initials">AP</div>
                  <div className="testi-google-meta">
                    <strong className="testi-google-name">Amanda P.</strong>
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
                  <span>Verified</span>
                </div>
              </div>
              <p className="testi-google-quote testi-google-quote--dark">&quot;12 hours on night 3 — I couldn&apos;t believe it. I was skeptical, but desperate. Night 1 was 6 hours, night 2 was 9 hours, night 3 was 12 HOURS STRAIGHT. My baby is happier, I&apos;m human again.&quot;</p>
            </div>

            <div className="testi-google-card">
              <div className="testi-google-header">
                <div className="testi-google-author">
                  <div className="testi-google-avatar testi-google-avatar--initials">CS</div>
                  <div className="testi-google-meta">
                    <strong className="testi-google-name">Carolina S.</strong>
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
                  <span>Verified</span>
                </div>
              </div>
              <p className="testi-google-quote testi-google-quote--dark">&quot;Better than any sleep consultant. I almost hired a $2,000 sleep consultant. Found this for $15 instead. Same Danish method they use. Worked in 2 days. Best investment ever.&quot;</p>
            </div>

            <div className="testi-google-card">
              <div className="testi-google-header">
                <div className="testi-google-author">
                  <div className="testi-google-avatar testi-google-avatar--initials">MT</div>
                  <div className="testi-google-meta">
                    <strong className="testi-google-name">Mariana T.</strong>
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
                  <span>Verified</span>
                </div>
              </div>
              <p className="testi-google-quote testi-google-quote--dark">&quot;Finally, science that works. No crying, no guilt, just results. My 7-month-old now sleeps 12 hours every single night. Life-changing.&quot;</p>
            </div>
          </div>
        </div>
      </section>

      <section className="transition">
        <div className="transition-wrap">
          <h2>What if this were the last night <em>without sleep?</em></h2>
          <p>Your baby sleeping peacefully in their crib. No more waking up every 2 hours. No more exhaustion. No more guilt.</p>
          <p>Peaceful nights, energized mornings, and the joy of being the mother you always wanted to be. This can be your reality in just 3 days.</p>
        </div>
      </section>

      <section className="offer" id={OFFER_ID}>
        <div className="offer-wrap">
          <div className="offer-box">
            <div className="offer-box-top">
              <p className="price-from">From $97</p>
              <div className="price"><sup>$</sup>15</div>
              <p className="price-note">one-time payment · lifetime access</p>
            </div>

            <ul className="offer-includes">
              <li>The Complete Guide — full Danish Method protocol, step-by-step for 3 days</li>
              <li>Video tutorials — every technique and environment setup</li>
              <li>Daily checklists — print-ready action plans</li>
              <li>Age-based adjustments (0-24 months)</li>
              <li>Lifetime access + free updates</li>
            </ul>

            <a href="https://pay.hotmart.com/I103988905G?checkoutMode=10" className="btn-offer" target="_blank" rel="noopener noreferrer">
              Get instant access now
              <span>Access in seconds</span>
            </a>

            <div className="guarantee">
              <strong>🛡️ 30-day guarantee</strong>
              If your baby isn&apos;t sleeping significantly better within 3 days, just send us an email and we&apos;ll refund 100% of your money. No questions asked.
            </div>
          </div>
        </div>
      </section>

      <section className="faq">
        <div className="faq-wrap">
          <h2>Frequently asked questions</h2>

          <div className="faq-item">
            <div className="faq-q">Will this work for my baby&apos;s age?</div>
            <div className="faq-a">Yes. The method includes specific protocols for ages 0-24 months, with adjustments for each developmental stage.</div>
          </div>

          <div className="faq-item">
            <div className="faq-q">Is this &quot;cry it out&quot;?</div>
            <div className="faq-a">Absolutely not. The Danish method is the opposite of cry-it-out. It&apos;s based on emotional security, gradual autonomy, and respect for the baby&apos;s needs.</div>
          </div>

          <div className="faq-item">
            <div className="faq-q">What if it doesn&apos;t work in 3 days?</div>
            <div className="faq-a">The vast majority of babies sleep 10-12 hours by day 3. But every baby is different. That&apos;s why we offer a 30-day money-back guarantee — you have a full month to see results.</div>
          </div>

          <div className="faq-item">
            <div className="faq-q">Do I need to buy anything else?</div>
            <div className="faq-a">No. Everything you need is included. No special equipment, no expensive gadgets — just the method.</div>
          </div>

          <div className="faq-item">
            <div className="faq-q">Is this safe for newborns?</div>
            <div className="faq-a">Yes. The method includes specific adaptations for newborns (0-3 months) that respect their feeding and developmental needs.</div>
          </div>

          <div className="faq-item">
            <div className="faq-q">Can I get a refund if it doesn&apos;t work?</div>
            <div className="faq-a">Absolutely. 30-day money-back guarantee, no questions asked. Just email us and we&apos;ll process your refund immediately.</div>
          </div>
        </div>
      </section>

      <footer>
        <p className="footer-cta-title">Your baby can sleep 12 hours tonight.</p>
        <p>
          <a href="https://pay.hotmart.com/I103988905G?checkoutMode=10" target="_blank" rel="noopener noreferrer" className="footer-cta-link">Get instant access now — $15</a>
        </p>
        <p className="footer-guarantee">30-day money-back guarantee</p>
        <p style={{ marginTop: 24 }}>© 2025 Baby Sleep Method · Sofia Martins</p>
        <p><a href="#">Privacy Policy</a> · <a href="#">Terms of Use</a></p>
        <p style={{ marginTop: 8, fontSize: 12 }}>This content is for educational purposes and does not replace medical or pediatric advice.</p>
      </footer>

    </>
  )
}

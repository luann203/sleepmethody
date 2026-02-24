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

          <h1>The 3-step baby massage that gets any baby to sleep in <em>under 30 seconds.</em></h1>

          <p className="hero-sub">No crying. No fuss. No complicated method. <strong>Just 3 simple moves</strong> any parent can learn today.</p>

          <div className="hero-cta-wrap">
            <button className="btn-main" type="button" onClick={scrollToOffer}>
              I want to learn the 3 steps
              <span>Instant access for just $27</span>
            </button>
            <p className="hero-reassure">🔒 7-day guarantee · no questions asked</p>
          </div>
        </div>
      </section>

      <section className="pain">
        <div className="pain-wrap">
          <h2>If you&apos;re reading this, you&apos;re probably exhausted.</h2>

          <p>Not the kind of tired that one good night&apos;s sleep fixes. It&apos;s the kind that builds up day after day, night after night, until you can barely remember your own name.</p>

          <p>You love your baby more than anything. But some nights you&apos;re on the floor—literally—not knowing what else to try. You&apos;ve tried music, nursing, hours of holding, ninja-mode transfers. <strong>Sometimes it works. Sometimes it doesn&apos;t.</strong> And that uncertainty is what wears you out the most.</p>

          <ul className="pain-list">
            <li>You wake up with the baby every hour at night</li>
            <li>You spend hours trying to get them to sleep</li>
            <li>You&apos;ve read everything and everyone says something different</li>
            <li>You feel guilty when you cry along with the baby</li>
            <li>You&apos;re exhausted but afraid to try something new</li>
          </ul>

          <p className="pain-close">You&apos;re not doing anything wrong. Nobody ever taught you what actually works.</p>
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

              <p>I&apos;ve been an infant sleep consultant for over 8 years. I&apos;ve worked with more than 2,000 families—from newborns to 2-year-olds—in all kinds of situations and contexts.</p>

              <p>I&apos;m not a doctor. I&apos;m not a pediatrician. And that, in my view, is exactly what gives me a different perspective. I see what happens <strong>after the appointment ends</strong>—inside real homes, in the middle of the night, with real parents at their limit.</p>

              <div className="about-highlight">
                &quot;I learned the 3-step baby massage from older women in my family. It was a natural gesture, with no name, no protocol. Something they did without thinking.&quot;
              </div>

              <p>This kind of knowledge doesn&apos;t come from a doctor&apos;s office. It&apos;s passed hand to hand, mother to daughter. It took me years to understand the mechanism behind it, study infant sleep physiology, test it with hundreds of real families, and refine every detail of the sequence.</p>

              <p>What you&apos;ll learn here isn&apos;t theory. It&apos;s a technique refined over years of practice, with results I&apos;ve seen up close.</p>
            </div>
          </div>
        </div>
      </section>

      <div className="divider">The method</div>

      <section className="method">
        <div className="method-wrap">
          <h2>A 3-step baby massage</h2>

          <p>It&apos;s not magic. It&apos;s physiology. A baby&apos;s nervous system responds in a very predictable way to specific tactile stimuli. The 3 steps were designed to trigger that response in sequence, bringing the baby into deep relaxation in seconds.</p>

          <p>What sets this apart from a regular massage is the combination of <strong>location, pressure, and rhythm</strong>. Every detail matters, and that&apos;s exactly what the guide teaches.</p>

          <div className="touches">
            <div className="touch">
              <div className="touch-num">1</div>
              <div>
                <h3>The Head Touch</h3>
                <p>Gentle movement on the scalp that activates relaxation receptors and slows the baby&apos;s nervous system. It&apos;s the first step and sets up everything that follows.</p>
              </div>
            </div>
            <div className="touch">
              <div className="touch-num">2</div>
              <div>
                <h3>The Chest Touch</h3>
                <p>Light, rhythmic pressure on the sternum that syncs the baby&apos;s breathing and recreates the sense of safety they felt in the womb.</p>
              </div>
            </div>
            <div className="touch">
              <div className="touch-num">3</div>
              <div>
                <h3>The Foot Touch</h3>
                <p>Stimulation of a specific point on the sole of the foot that releases built-up tension and signals the brain that it&apos;s time to rest. It&apos;s the step that closes the cycle.</p>
              </div>
            </div>
          </div>

          <p>In the guide I show exactly where to touch, how much pressure to use, for how long, and in what order. There&apos;s video for each step and variations by age.</p>
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
                  <span className="testi-google-sub">Mom of Miguel, 4 months</span>
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
            <p className="testi-google-quote">&quot;I couldn&apos;t believe it. It was 2 a.m., my son had been up for over an hour. I did the 3 steps for the first time and he was asleep in under a minute. I cried with relief.&quot;</p>
          </div>
        </div>
      </section>

      <section className="get">
        <div className="get-wrap">
          <h2>What you get</h2>
          <p>Everything in one app, on your phone 24/7. So you can access it in the dark, with the baby in your arms.</p>
          <div className="get-items">
            <div className="get-item">
              <div className="get-item-icon">🎬</div>
              <h3>Demonstration video</h3>
              <p>Each step shown visually, at the right pace, so you can apply it with confidence from the first try.</p>
            </div>
            <div className="get-item">
              <div className="get-item-icon">📖</div>
              <h3>Complete ebook</h3>
              <p>Detailed guide with explanations, age-based variations, and answers to the most common questions.</p>
            </div>
            <div className="get-item">
              <div className="get-item-icon">📱</div>
              <h3>App access</h3>
              <p>Always available. No digging for emails, links, or PDFs. One tap and it&apos;s there.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="testimonials">
        <div className="testi-wrap">
          <h2>What parents are saying</h2>
          <p>Over 2,000 families already use the method.</p>
          <div className="testi-grid">
            <div className="testi-google-card">
              <div className="testi-google-header">
                <div className="testi-google-author">
                  <div className="testi-google-avatar testi-google-avatar--initials">FL</div>
                  <div className="testi-google-meta">
                    <strong className="testi-google-name">Fernanda L.</strong>
                    <span className="testi-google-sub">Mom of Sofia, 7 months</span>
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
              <p className="testi-google-quote testi-google-quote--dark">&quot;I&apos;d bought two sleep courses before. This is the only one that worked. It&apos;s simple, practical, and you can use it the same day.&quot;</p>
            </div>

            <div className="testi-google-card">
              <div className="testi-google-header">
                <div className="testi-google-author">
                  <div className="testi-google-avatar testi-google-avatar--initials">AM</div>
                  <div className="testi-google-meta">
                    <strong className="testi-google-name">Ana Paula M.</strong>
                    <span className="testi-google-sub">Mom of Pedro and Luísa</span>
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
              <p className="testi-google-quote testi-google-quote--dark">&quot;My husband was skeptical. Now he&apos;s the one who uses it most. It worked with both our kids at different ages. It&apos;s part of our routine now.&quot;</p>
            </div>

            <div className="testi-google-card">
              <div className="testi-google-header">
                <div className="testi-google-author">
                  <div className="testi-google-avatar testi-google-avatar--initials">MS</div>
                  <div className="testi-google-meta">
                    <strong className="testi-google-name">Mariana S.</strong>
                    <span className="testi-google-sub">Mom of Helena, 5 months</span>
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
              <p className="testi-google-quote testi-google-quote--dark">&quot;I was skeptical at first but the guarantee gave me the courage to try. In three days my daughter was already sleeping much better.&quot;</p>
            </div>
          </div>
        </div>
      </section>

      <section className="transition">
        <div className="transition-wrap">
          <h2>What if this were the last night <em>without sleep?</em></h2>
          <p>You&apos;ve already tried so much. This time it&apos;s different. It&apos;s simple, it&apos;s quick, and it works on the first try. And if it doesn&apos;t work, you have 7 days to get your money back.</p>
        </div>
      </section>

      <section className="offer" id={OFFER_ID}>
        <div className="offer-wrap">
          <div className="offer-box">
            <div className="offer-box-top">
              <p className="price-from">From $97</p>
              <div className="price"><sup>$</sup>27</div>
              <p className="price-note">one-time payment · lifetime access</p>
            </div>

            <ul className="offer-includes">
              <li>Demonstration video of the 3 steps</li>
              <li>Complete ebook with detailed guide</li>
              <li>Age-based variations (0 to 18 months)</li>
              <li>24/7 app access</li>
              <li>Free updates forever</li>
            </ul>

            <a href="https://pay.hotmart.com/I103988905G?checkoutMode=10" className="btn-offer" target="_blank" rel="noopener noreferrer">
              Get my copy now
              <span>Access in seconds</span>
            </a>

            <div className="guarantee">
              <strong>🛡️ 7-day guarantee</strong>
              If it doesn&apos;t work or you&apos;re not satisfied for any reason, we&apos;ll refund 100%. No questions asked.
            </div>
          </div>
        </div>
      </section>

      <section className="faq">
        <div className="faq-wrap">
          <h2>Frequently asked questions</h2>

          <div className="faq-item">
            <div className="faq-q">From what age does it work?</div>
            <div className="faq-a">The method was developed for babies 0 to 18 months. The guide includes specific variations by age so you can apply it correctly at each stage.</div>
          </div>

          <div className="faq-item">
            <div className="faq-q">What if it doesn&apos;t work for my baby?</div>
            <div className="faq-a">You have a full 7-day guarantee. If it doesn&apos;t work or you&apos;re not satisfied for any reason, just request a refund and we&apos;ll return 100% of what you paid. No questions asked.</div>
          </div>

          <div className="faq-item">
            <div className="faq-q">How do I access the content?</div>
            <div className="faq-a">Right after payment you get access to the app with the video and ebook. Available on your phone anytime, day or night.</div>
          </div>

          <div className="faq-item">
            <div className="faq-q">Do I need any special knowledge?</div>
            <div className="faq-a">No. If you can hold your baby, you can do the 3 steps. The video shows everything clearly and in detail.</div>
          </div>

          <div className="faq-item">
            <div className="faq-q">Does it work for babies who need to be held to sleep?</div>
            <div className="faq-a">Yes. You can do the 3 steps with the baby in your arms and then transfer them to the crib already asleep. Many parents start this way and gradually the baby learns to fall asleep on their own.</div>
          </div>

          <div className="faq-item">
            <div className="faq-q">Does it work for breastfed babies?</div>
            <div className="faq-a">Yes. The method is independent of how you feed your baby. It works with breastfeeding, formula, or any combination.</div>
          </div>
        </div>
      </section>

      <footer>
        <p>© 2025 A 3-step baby massage · Sofia Martins</p>
        <p><a href="#">Privacy Policy</a> · <a href="#">Terms of Use</a></p>
        <p style={{ marginTop: 8, fontSize: 12 }}>This content is for educational purposes and does not replace medical or pediatric advice.</p>
      </footer>

    </>
  )
}

// Biz'o Landing Page v2 — Conversion Architecture (Hebrew RTL)
// Structural order: Hero → Contrast → Mechanism → Proof → Video Feature →
//   Pricing → Action Module → FAQ → Footer
(function () {
  const ns = () => window.BizODesignSystem_9b23bd || {};
  const WA_LINK = 'https://wa.me/15558628862'; // ← replace with real number

  function Wa({ size = 20 }) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.4A10 10 0 1 0 12 2zm0 2a8 8 0 1 1-4.2 14.8l-.3-.2-2.9.8.8-2.8-.2-.3A8 8 0 0 1 12 4zm-2.7 4c-.2 0-.5 0-.7.4-.3.4-1 1-1 2.4s1 2.8 1.2 3 2 3.2 5 4.4c2.4 1 2.9.8 3.4.8.5-.1 1.6-.7 1.9-1.4.2-.7.2-1.2.2-1.3l-1-.5c-.3-.1-1.6-.8-1.8-.9-.3-.1-.4-.1-.6.1l-.8 1c-.2.1-.3.2-.5 0l-.7-.3c-.7-.3-1.4-.9-2-1.6-.4-.5-.1-.5.2-1l.3-.4.2-.4v-.4l-.9-2c-.2-.6-.5-.5-.7-.5h-.6z"/>
      </svg>
    );
  }

  // Single universal CTA — every button on the page points here.
  function CTA({ children = 'התחילו עכשיו בוואטסאפ', size = 'md', style, href = WA_LINK, icon = true }) {
    const { Button } = ns();
    if (!Button) return null;
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', display: 'inline-block', ...style }}>
        <Button variant="accent" size={size} leadingIcon={icon ? <Wa size={size === 'lg' ? 22 : 18} /> : undefined}>
          {children}
        </Button>
      </a>
    );
  }

  // ====================== NAV ======================
  // 1:1 Attention Ratio — logo + single CTA only. No exit-ramp links.
  function Nav() {
    return (
      <header className="bz-nav">
        <div className="bz-wrap bz-nav-in">
          <a className="bz-logo" href="#top">
            <img src="assets/bizo-avatar.png" alt="" />
            <span>Biz'o</span>
          </a>
          <CTA />
        </div>
      </header>
    );
  }

  // ====================== HERO ======================
  // Zone 1 (0–3s): Orient + qualify. Outcome H1 ≤30 words. Trust cue adjacent.
  function Hero() {
    const { Badge } = ns();
    return (
      <section className="bz-hero" id="top">
        <div className="bz-wrap bz-hero-in">
          <div className="bz-hero-copy">
            <div className="bz-trust-bar">
              <strong>4.9</strong>
              <span>⭐⭐⭐⭐⭐</span>
              <span className="bz-sep">·</span>
              <span>100+ עסקים ישראלים</span>
            </div>
            <h1>
              תמונה אחת.<br />
              פוסט מוכן.<br />
              <span className="bz-accent">תוך 3 דקות.</span>
            </h1>
            <p className="bz-sub">
              ביז'ו הוא מנהל הסושיאל שלכם בוואטסאפ — שולחים תמונה, מקבלים פוסט מעוצב בקול של העסק, מאשרים בהקשה, ואנחנו מפרסמים. בלי אפליקציות, בלי ללמוד כלום.
            </p>
            <CTA size="lg" style={{ marginTop: 28 }} />
            <p className="bz-microcopy">2 עיבודי וידאו + 10 יצירות תמונה חינם · בלי כרטיס אשראי · ביטול בכל עת</p>
          </div>
          <div className="bz-hero-visual">
            <img className="bz-robot" src="assets/bizo-robot-hero.png" alt="הבוט של ביז'ו" />
          </div>
        </div>
        <Marquee />
      </section>
    );
  }

  function Marquee() {
    const tags = ['קוסמטיקאיות', 'מאפיות', 'בעלי מלאכה', 'חנויות שכונתיות', 'מספרות', 'בתי קפה', 'סטודיו לציפורניים', 'יועצי אופנה', 'מאמני כושר', 'שפים'];
    return (
      <div className="bz-marquee">
        <div className="bz-marquee-row">
          {[...tags, ...tags].map((t, i) => (
            <React.Fragment key={i}><span>{t}</span><i>·</i></React.Fragment>
          ))}
        </div>
      </div>
    );
  }

  // ====================== CONTRAST BLOCK ======================
  // Zone 2 (3–10s): Agitate status quo → desired outcome. Who it's NOT for.
  function Contrast() {
    return (
      <section className="bz-contrast">
        <div className="bz-wrap">
          <div className="bz-before-after">
            <div className="bz-before">
              <div className="bz-ba-label bz-label-before">לפני ביז'ו</div>
              <ul>
                <li>📸 יש לכם תמונות מדהימות — שנשארות בגלריה</li>
                <li>⏳ אין זמן לכתוב כיתובים בין לקוח ללקוח</li>
                <li>😟 אשמה שוב שבוע עוד בלי פוסט</li>
                <li>🤯 Canva, Buffer, ChatGPT — כלים שצריך ללמוד</li>
              </ul>
            </div>
            <div className="bz-arrow">←</div>
            <div className="bz-after">
              <div className="bz-ba-label bz-label-after">עם ביז'ו</div>
              <ul>
                <li>✅ שולחים תמונה בוואטסאפ — מקבלים פוסט</li>
                <li>✅ הכיתוב נשמע בדיוק כמוכם — לא כמו רובוט</li>
                <li>✅ אישור אחד → מפורסם באינסטגרם ובפייסבוק</li>
                <li>✅ אפס קימות חדשות, אפס לוחות זמנים</li>
              </ul>
            </div>
          </div>
          <div className="bz-built-for">
            <h2>בנוי בשביל בעלי עסקים, לא מומחי שיווק</h2>
            <p>כל שאר הפתרונות דורשים ללמוד כלי חדש. Biz'o עובד איפה שאתם כבר נמצאים.</p>
          </div>
          <div className="bz-not-for">
            <p className="bz-not-label">ביז'ו לא מתאים לכולם — וזה בכוונה</p>
            <div className="bz-not-grid">
              <div className="bz-not-card">
                <span>✕</span>
                <p>עסקים עם מחלקת שיווק פעילה שמייצרת כבר תוכן</p>
              </div>
              <div className="bz-not-card">
                <span>✕</span>
                <p>עסקים שצריכים קמפיינים ממומנים ופרסום בתשלום</p>
              </div>
              <div className="bz-not-card">
                <span>✕</span>
                <p>עסקים שלא פועלים בעברית — המערכת כרגע בעברית בלבד</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // ====================== MECHANISM ======================
  // Zone 3 (10–20s): The actual workflow — 4 real steps from the product.
  function Mechanism() {
    const steps = [
      { n: '1', icon: '📲', t: 'שולחים תמונה בוואטסאפ', d: 'שולחים תמונה (או סרטון) ישירות לצ\'אט של ביז\'ו. אפשר להוסיף הערה קצרה לכיוון התוכן — הכל דרך כפתורי תפריט, בלי הקלדה.' },
      { n: '2', icon: '✍️', t: 'ביז\'ו כותב ומעצב', d: 'המערכת מנתחת את התמונה, בוחרת את פרופיל הכתיבה שלכם (זה שחילצנו מהפוסטים הקיימים), וכותבת כיתוב שנשמע כמוכם — תוך פחות מ-3 דקות.' },
      { n: '3', icon: '👆', t: 'בוחרים: אשר, שנה, ערוך', d: 'מקבלים את הפוסט עם 3 כפתורים: אישור מיידי, יצירה מחדש, או כניסה לטופס עריכה קל. אתם בשליטה מלאה — בלי לצאת מהוואטסאפ.' },
      { n: '4', icon: '🚀', t: 'ביז\'ו מפרסם בשבילכם', d: 'לחיצה על "אישור" — וביז\'ו מפרסם לאינסטגרם, פייסבוק וטיקטוק בו זמנית. תקבלו אישור חזרה בצ\'אט כשזה עלה.' },
    ];
    return (
      <section className="bz-mechanism" id="how">
        <div className="bz-wrap">
          <h2 className="bz-st">ארבע הקשות. מהתמונה לפרסום.</h2>
          <p className="bz-ss">זה בדיוק מה שקורה מאחורי הקלעים — כל שלב, בשפה פשוטה.</p>
          <div className="bz-mech-in">
            {/* Vertical steps */}
            <div className="bz-steps-v">
              {steps.map((s, i) => (
                <div className="bz-step-v" key={i}>
                  <div className="bz-step-top">
                    <span className="bz-step-n">{s.n}</span>
                    <span className="bz-step-icon">{s.icon}</span>
                  </div>
                  <div className="bz-step-body">
                    <h3>{s.t}</h3>
                    <p>{s.d}</p>
                  </div>
                  {i < steps.length - 1 && <div className="bz-step-connector" />}
                </div>
              ))}
            </div>
            {/* Demo GIF */}
            <div className="bz-mech-gif">
              <img src="assets/bizo-whatsapp-demo.gif" alt="הדגמה של ביז'ו בפעולה" />
            </div>
          </div>
        </div>
      </section>
    );
  }

  // ====================== PROOF 1 ======================
  // Scattered immediately after mechanism (peak skepticism point).
  function Proof1() {
    return (
      <section className="bz-proof">
        <div className="bz-wrap">
          <div className="bz-testi-grid">
            <Testimonial
              quote="הייתי מפרסמת פוסט אחד בחודש כי לא היה לי כוח לכתוב. עם ביז'ו אני מפרסמת ארבע פעמים בשבוע — ו-3 לקוחות חדשות פנו אליי בחודש הראשון בלבד."
              name="דנה ל."
              role="סטודיו לציפורניים, תל אביב"
              stars={5}
            />
            <Testimonial
              quote="חשבתי שזה יהיה עוד תוכנה שצריך ללמוד. שלחתי תמונה לצ'אט, קיבלתי פוסט מוכן תוך כמה דקות. פשוט ככה. לא הייתה לי שום סיבה לא להמשיך."
              name="יובל מ."
              role="ספר, ירושלים"
              stars={5}
            />
          </div>
        </div>
      </section>
    );
  }

  function Testimonial({ quote, name, role, stars }) {
    return (
      <div className="bz-testi">
        <div className="bz-stars">{'⭐'.repeat(stars)}</div>
        <p className="bz-quote">"{quote}"</p>
        <div className="bz-attrib">
          <strong>{name}</strong>
          <span>{role}</span>
        </div>
      </div>
    );
  }

  // ====================== VIDEO FEATURE ======================
  // The waterfall content differentiator — unique mechanism.
  function VideoFeature() {
    const outputs = [
      { e: '🎥', t: 'הסרטון המקורי', d: 'עם כיתוב מותאם' },
      { e: '🖼️', t: 'פוסט קרוסלה', d: 'טקסט ארוך + תמונות' },
      { e: '📝', t: 'פוסט ארוך', d: 'כיתוב מורחב' },
      { e: '✨', t: '3–5 פוסטים קצרים', d: 'מתמונות קצובות מהסרטון' },
    ];
    return (
      <section className="bz-video-feat">
        <div className="bz-wrap">
          <div className="bz-vf-in">
            <div className="bz-vf-copy">
              <div className="bz-eyebrow">יכולת בונוס</div>
              <h2>סרטון אחד →<br /><span className="bz-accent">7 פוסטים.</span></h2>
              <p>מעלים סרטון קצר של העסק — ביז'ו מוציא ממנו קרוסלה, פוסטים עם כיתובים שונים, ואת הסרטון עצמו. שבוע שלם של תוכן מרגע אחד שצילמתם.</p>
              <CTA style={{ marginTop: 24 }}>נסו את הפיצ'ר הזה</CTA>
            </div>
            <div className="bz-vf-outputs">
              <div className="bz-vf-input">
                <div className="bz-vf-phone-icon">📱</div>
                <div className="bz-vf-arrow-label">סרטון 1</div>
              </div>
              <span className="bz-vf-eq">→</span>
              <div className="bz-vf-cards">
                {outputs.map((o, i) => (
                  <div className="bz-vf-card" key={i}>
                    <span>{o.e}</span>
                    <div>
                      <strong>{o.t}</strong>
                      <span>{o.d}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // ====================== PRICING ======================
  // Real Hebrew tier names from the product brief.
  function Pricing() {
    const { Badge } = ns();
    const tiers = [
      {
        he: 'נוכחות דיגיטלית מואצת',
        en: 'Starter',
        price: '500',
        popular: false,
        tagline: 'לעסק שרוצה להתחיל להופיע',
        feats: ['עד 50 יצירות ועריכות תמונה בחודש', 'עד 4 עיבודי וידאו בחודש', 'כל הפלטפורמות', 'כיתובים בקול שלכם', 'פרסום אוטומטי אחרי אישור'],
        pay: 'https://pay.sumit.co.il/5a9qk9/memp5f/vmmntj/payment/',
      },
      {
        he: 'מנוע צמיחה אורגני',
        en: 'Growth',
        price: '1,200',
        popular: true,
        tagline: 'לעסק צומח שרוצה נוכחות יומיומית',
        feats: ['עד 190 יצירות ועריכות תמונה בחודש', 'עד 14 עיבודי וידאו בחודש', 'כל הפלטפורמות', 'פרופיל כתיבה מותאם אישית', 'תמיכה מועדפת'],
        pay: 'https://pay.sumit.co.il/5a9qk9/memp5f/vmmo44/payment/',
      },
      {
        he: 'מנוע צמיחה בלתי מוגבל',
        en: 'Unlimited',
        price: '2,500',
        popular: false,
        tagline: 'לעסק שלא מתפשר על נוכחות',
        feats: ['יצירות ועריכות תמונה ללא הגבלה', 'עיבודי וידאו ללא הגבלה (Fair Use)', 'כל הפלטפורמות', 'פרופיל כתיבה מותאם אישית', 'תמיכה ראשונית מועדפת'],
        pay: 'https://pay.sumit.co.il/5a9qk9/memp5f/vmmodi/payment/',
      },
    ];
    return (
      <section className="bz-pricing" id="pricing">
        <div className="bz-wrap">
          <h2 className="bz-st">מחיר ברור. בלי הפתעות.</h2>
          <p className="bz-ss">כל עלויות ה-AI כלולות. בערך 80% פחות ממנהל סושיאל אנושי.</p>
          <div className="bz-tiers">
            {tiers.map((t, i) => (
              <div className={'bz-tier' + (t.popular ? ' bz-tier-pop' : '')} key={i}>
                {t.popular && Badge ? <div className="bz-tier-flag"><Badge tone="brand" solid>הכי פופולרי</Badge></div> : null}
                <div className="bz-tier-names">
                  <h3>{t.he}</h3>
                  <span className="bz-tier-en">{t.en}</span>
                </div>
                <p className="bz-tier-tag">{t.tagline}</p>
                <div className="bz-tier-price">
                  <span className="bz-amt">{t.price}</span>
                  <span className="bz-per">₪ / חודש</span>
                </div>
                <ul>
                  {t.feats.map((f, fi) => <li key={fi}><span className="bz-check">✓</span>{f}</li>)}
                </ul>
                <CTA style={{ width: '100%' }} href={t.pay} icon={false}>בחירת המסלול</CTA>
              </div>
            ))}
          </div>
          <div className="bz-trust-badges">
            <span>🔒 ביטול בכל עת</span>
            <span>💳 בלי כרטיס אשראי לניסיון</span>
            <span>🇮🇱 תמיכה בעברית</span>
            <span>⚡ הגדרה תוך 5 דקות</span>
          </div>
          <Proof2 />
        </div>
      </section>
    );
  }

  // Proof near pricing (investment point — peak skepticism)
  function Proof2() {
    return (
      <div className="bz-proof-inline">
        <Testimonial
          quote="צילמתי סרטון קצר של מוצר חדש — ביז'ו שלח לי חזרה 6 פוסטים שונים תוך 10 דקות. חסכתי שעתיים עבודה. מסלול ה-Growth שווה כל שקל."
          name="מיה כ."
          role="יועצת אופנה, חיפה"
          stars={5}
        />
      </div>
    );
  }

  // ====================== ACTION MODULE ======================
  // Zone 5: The conversion unit. Minimal friction. WA link, no form.
  function ActionModule() {
    return (
      <section className="bz-action" id="start">
        <div className="bz-wrap bz-action-in">
          <img src="assets/bizo-avatar.png" alt="" className="bz-action-bot" />
          <h2>הפוסט הבא שלכם נמצא<br />במרחק תמונה אחת.</h2>
          <p>שלחו הי לביז'ו בוואטסאפ — תוך 5 דקות תעשו אונבורדינג קצר ותשלחו את התמונה הראשונה שלכם.</p>
          <CTA size="lg">שלחו הי לביז'ו →</CTA>
          <p className="bz-action-micro">2 עיבודי וידאו + 10 יצירות תמונה חינם · ביטול בכל עת · ללא כרטיס אשראי</p>
        </div>
      </section>
    );
  }

  // ====================== FAQ ======================
  // Zone 6: Objection handlers. Sticky secondary CTA at end.
  function Faq() {
    const qa = [
      { q: `הכיתוב לא יישמע כמוני?`, a: `ביז'ו חולץ את קול המותג שלכם מהפוסטים הקיימים — אותו אורך משפט, אותן מילים, אותם אימוג'ים. ואם משהו לא מדויק, לוחצים "ערוך" וזה מתוקן תוך שניות. אתם מאשרים לפני שמשהו עולה — תמיד.` },
      { q: `מה קורה אם לא נאשר את הפוסט מיד?`, a: `הפוסט נשמר בתור ומחכה לאישורכם. ביז'ו ישלח תזכורת אחת עדינה אחרי 24 שעות. שום דבר לא מפורסם בלי שלוחצים "אישור" — אתם בשליטה מלאה.` },
      { q: `כמה זמן לוקחת ההגדרה הראשונית?`, a: `כ-5 דקות: שם העסק, תיאור קצר, ובחירת הפלטפורמות. המערכת מנתחת לבד את הפרופיל החזותי והכתיבתי מהפוסטים הקיימים — אתם לא צריכים להגדיר כלום ידנית.` },
      { q: `מה ההבדל בין המסלולים?`, a: `ההבדל העיקרי הוא הכמות החודשית: מסלול Starter מגיע ל-50 תמונות ו-4 סרטונים, Growth ל-190 תמונות ו-14 סרטונים, ו-Unlimited ללא מגבלה. כל המסלולים כוללים את אותה איכות כיתובים ופרסום אוטומטי.` },
      { q: `אפשר לבטל?`, a: `כן — בכל עת, ישר מהוואטסאפ. לא צריך לדבר עם אף אחד. לא חיובים על חלקי חודש אחרי ביטול.` },
    ];
    const [open, setOpen] = React.useState(0);
    return (
      <section className="bz-faq" id="faq">
        <div className="bz-wrap bz-faq-wrap">
          <h2 className="bz-st">שאלות ששואלים אותנו</h2>
          <div className="bz-faq-list">
            {qa.map((item, i) => (
              <div className={'bz-faq-item' + (open === i ? ' bz-open' : '')} key={i}>
                <button className="bz-faq-q" onClick={() => setOpen(open === i ? -1 : i)}>
                  <span>{item.q}</span><span className="bz-faq-ic">{open === i ? '–' : '+'}</span>
                </button>
                <div className="bz-faq-a"><p>{item.a}</p></div>
              </div>
            ))}
          </div>
          {/* Secondary CTA after last objection resolved */}
          <div style={{ textAlign: 'center', marginTop: 40 }}>
            <p style={{ color: 'var(--text-muted)', marginBottom: 16, fontSize: 17 }}>מוכנים לנסות?</p>
            <CTA size="lg" />
          </div>
        </div>
      </section>
    );
  }

  // ====================== FOOTER ======================
  function Footer() {
    return (
      <footer className="bz-footer">
        <div className="bz-wrap bz-footer-in">
          <div className="bz-logo"><img src="assets/bizo-avatar.png" alt="" /><span>Biz'o</span></div>
          <p className="bz-footer-tag">מנהל הסושיאל שלכם בוואטסאפ · עשוי בישראל 🇮🇱</p>
          <div className="bz-footer-links">
            <a href="#how">איך זה עובד</a>
            <a href="#pricing">מחירים</a>
            <a href="#faq">שאלות</a>
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer">דברו איתנו</a>
          </div>
        </div>
        <div className="bz-copy">© 2026 Biz'o · כל הזכויות שמורות</div>
      </footer>
    );
  }

  // ====================== STICKY MOBILE CTA ======================
  // Visible on mobile after scrolling past hero; keeps 1:1 ratio on desktop
  // by not adding another exit ramp.
  function StickyCTA() {
    const [show, setShow] = React.useState(false);
    React.useEffect(() => {
      const handler = () => setShow(window.scrollY > 600);
      window.addEventListener('scroll', handler, { passive: true });
      return () => window.removeEventListener('scroll', handler);
    }, []);
    if (!show) return null;
    return (
      <div className="bz-sticky-cta">
        <CTA size="md">התחילו עכשיו בוואטסאפ</CTA>
      </div>
    );
  }

  // ====================== LANDING ROOT ======================
  function Landing() {
    return (
      <div className="bz-page" dir="rtl">
        <Nav />
        <Hero />
        <Contrast />
        <Mechanism />
        <Proof1 />
        <VideoFeature />
        <Pricing />
        <ActionModule />
        <Faq />
        <Footer />
        <StickyCTA />
      </div>
    );
  }

  window.Landing = Landing;
})();

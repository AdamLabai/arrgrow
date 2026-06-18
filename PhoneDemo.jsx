// Animated phone demo for the landing hero — a looping Biz'o conversation
// built from the design-system chat primitives. Self-contained.
(function () {
  const ns = () => window.BizODesignSystem_9b23bd || {};

  function Phone({ children, width = 300 }) {
    const scale = width / 360;
    return (
      <div style={{ width, height: 740 * scale, position: 'relative', flex: 'none' }}>
        <div style={{
          position: 'absolute', inset: 0, transform: `scale(${scale})`, transformOrigin: 'top left',
          width: 360, height: 740, background: '#0b0b0c', borderRadius: 50, padding: 10, boxSizing: 'border-box',
          boxShadow: '0 30px 70px rgba(107,60,15,.28), 0 2px 0 rgba(255,255,255,.07) inset',
        }}>
          <div style={{ width: '100%', height: '100%', background: '#fff', borderRadius: 40, overflow: 'hidden', position: 'relative', display: 'flex', flexDirection: 'column' }}>
            <div style={{ position: 'absolute', top: 8, left: '50%', transform: 'translateX(-50%)', width: 110, height: 28, background: '#000', borderRadius: 18, zIndex: 50 }} />
            {children}
          </div>
        </div>
      </div>
    );
  }

  function Header({ typing }) {
    const { Avatar } = ns();
    return (
      <div style={{ background: 'var(--wa-green-deep)', color: '#fff', display: 'flex', alignItems: 'center', gap: 9, padding: '30px 12px 10px', flex: 'none' }}>
        <span style={{ fontSize: 20, opacity: .9 }}>‹</span>
        {Avatar ? <Avatar src="assets/bizo-avatar.png" name="Bizo" size={36} /> : null}
        <div style={{ flex: 1, lineHeight: 1.15 }}>
          <div style={{ font: "600 15.5px var(--font-body)" }}>Biz'o</div>
          <div style={{ fontSize: 11.5, opacity: .82 }}>{typing ? 'מקליד…' : 'מחובר'}</div>
        </div>
        <span style={{ fontSize: 17, opacity: .9, letterSpacing: 3 }}>⋮</span>
      </div>
    );
  }

  const CAPTION = "בוקר של מאפים טריים אצלנו 🥐\nהקרואסון החמאתי החדש כבר כאן — פריך מבחוץ, רך מבפנים. בואו לטעום ☕️\n\n#מאפייה_לוי #בוקרטוב";

  // Conversation timeline. t = ms from loop start when item appears.
  const TIMELINE = [
    { t: 400,  kind: 'in', text: "היי דנה! 👋 שלחי לי תמונה ואני אהפוך אותה לפוסט ✨" },
    { t: 1500, kind: 'out', photo: true },
    { t: 2400, kind: 'typing' },
    { t: 3600, kind: 'in', text: "מהמם! כתבתי כיתוב בקול של העסק שלך 👇" },
    { t: 4500, kind: 'preview' },
    { t: 6200, kind: 'out', text: "אישור ופרסום ✓" },
    { t: 7200, kind: 'published' },
  ];
  const LOOP = 10500;

  function PhoneDemo({ width = 300 }) {
    const { ChatBubble, TypingDots, PostPreview, DatePill, Badge } = ns();
    // Seed to the settled end-state so the full thread shows in static
    // captures (dsCard thumbnail, screenshots, PDF, backgrounded tabs).
    const [now, setNow] = React.useState(LOOP);
    const scrollRef = React.useRef(null);
    const startRef = React.useRef(performance.now());

    React.useEffect(() => {
      // Replay loop is a progressive enhancement only — skip it for reduced
      // motion; the settled full thread (now=LOOP) stays put otherwise.
      const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (reduce) return;
      let raf;
      const tick = (ts) => {
        if (document.visibilityState === 'visible') {
          const el = ts - startRef.current;
          if (el > LOOP) { startRef.current = ts; setNow(0); }
          else setNow(el);
        } else {
          startRef.current = ts; // keep clock aligned while hidden
        }
        raf = requestAnimationFrame(tick);
      };
      startRef.current = performance.now();
      setNow(0); // start the replay from the top once we're live
      raf = requestAnimationFrame(tick);
      return () => cancelAnimationFrame(raf);
    }, []);

    React.useEffect(() => {
      const el = scrollRef.current; if (el) el.scrollTop = el.scrollHeight;
    }, [now]);

    if (!ChatBubble) return <Phone width={width}><div /></Phone>;
    const shown = TIMELINE.filter(x => now >= x.t);
    const typingNow = (() => {
      const ty = TIMELINE.find(x => x.kind === 'typing');
      const next = TIMELINE.find(x => x.t > ty.t);
      return now >= ty.t && now < next.t;
    })();

    return (
      <Phone width={width}>
        <Header typing={typingNow} />
        <div ref={scrollRef} style={{
          flex: 1, overflowY: 'auto', padding: '6px 8px 10px',
          backgroundColor: 'var(--wa-chat-bg)',
          backgroundImage: 'radial-gradient(rgba(0,0,0,.03) 1px, transparent 1px)', backgroundSize: '14px 14px',
        }}>
          <DatePill>היום</DatePill>
          {shown.map((m, i) => {
            if (m.kind === 'typing') return null;
            if (m.photo) return <ChatBubble key={i} from="out" time="10:31" status="read" media={<FoodShot />} />;
            if (m.kind === 'preview') return (
              <div key={i} style={{ display: 'flex', justifyContent: 'flex-start', margin: '3px 0' }}>
                <PostPreview image={<FoodShot h={150} />} caption={CAPTION} platforms={['instagram', 'facebook']} status="מוכן לאישור" style={{ width: 232 }} />
              </div>
            );
            if (m.kind === 'published') return (
              <div key={i} style={{ display: 'flex', justifyContent: 'flex-start', margin: '4px 0' }}>
                <div style={{ background: '#fff', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-bubble)', padding: '10px 12px', direction: 'rtl' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
                    <span style={{ width: 22, height: 22, borderRadius: '50%', background: 'var(--success)', color: '#fff', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: 13 }}>✓</span>
                    <span style={{ font: '600 13.5px var(--font-body)', color: 'var(--ink-900)' }}>פורסם! 🎉</span>
                  </div>
                </div>
              </div>
            );
            return <ChatBubble key={i} from={m.kind} time={m.kind === 'out' ? '10:32' : '10:30'} status={m.kind === 'out' ? 'read' : 'none'} dir="rtl">{m.text}</ChatBubble>;
          })}
          {typingNow && <TypingDots />}
        </div>
      </Phone>
    );
  }

  function FoodShot({ h = 184 }) {
    return (
      <div style={{ width: '100%', height: h, background: 'radial-gradient(120% 90% at 30% 20%, #F6D9A8, #E0913F)', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
        <div style={{ fontSize: h * 0.4, filter: 'drop-shadow(0 6px 10px rgba(0,0,0,.2))' }}>🥐</div>
      </div>
    );
  }

  window.PhoneDemo = PhoneDemo;
})();

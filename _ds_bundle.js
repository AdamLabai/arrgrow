/* @ds-bundle: {"format":3,"namespace":"BizODesignSystem_9b23bd","components":[{"name":"ChatBubble","sourcePath":"components/chat/ChatBubble.jsx"},{"name":"DatePill","sourcePath":"components/chat/DatePill.jsx"},{"name":"PostPreview","sourcePath":"components/chat/PostPreview.jsx"},{"name":"QuickReply","sourcePath":"components/chat/QuickReply.jsx"},{"name":"TypingDots","sourcePath":"components/chat/TypingDots.jsx"},{"name":"Avatar","sourcePath":"components/core/Avatar.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Input","sourcePath":"components/core/Input.jsx"},{"name":"Switch","sourcePath":"components/core/Switch.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"}],"sourceHashes":{"components/chat/ChatBubble.jsx":"7598b659e79e","components/chat/DatePill.jsx":"7a7e5240a818","components/chat/PostPreview.jsx":"63498a94e646","components/chat/QuickReply.jsx":"2ae89c9166b0","components/chat/TypingDots.jsx":"a857cb4ba936","components/core/Avatar.jsx":"0d351be69e8b","components/core/Badge.jsx":"30dd2fe96188","components/core/Button.jsx":"b2943351795b","components/core/Card.jsx":"6d12be37b9da","components/core/IconButton.jsx":"dc41ca0e9478","components/core/Input.jsx":"e0eed33e6a4a","components/core/Switch.jsx":"935cc9838f99","components/core/Tag.jsx":"cbc6179da81f","ui_kits/landing/PhoneDemo.jsx":"280ac5c888a0","ui_kits/landing/Sections.jsx":"ebbef80d4c5f"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.BizODesignSystem_9b23bd = window.BizODesignSystem_9b23bd || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/chat/ChatBubble.jsx
try { (() => {
function Ticks({
  status
}) {
  if (status === 'none') return null;
  const blue = status === 'read';
  const single = status === 'sent';
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      marginInlineStart: 3,
      color: blue ? 'var(--wa-tick-blue)' : 'var(--ink-400)'
    },
    "aria-hidden": true
  }, /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "11",
    viewBox: "0 0 16 11",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M11.07.65 5.5 6.2 3.4 4.1l-.9.9 3 3L12 1.55z",
    fill: "currentColor"
  }), !single && /*#__PURE__*/React.createElement("path", {
    d: "M15.07.65 9.5 6.2 8.2 4.9l-.9.9 2.2 2.2L16 1.55z",
    fill: "currentColor"
  })));
}

/**
 * A WhatsApp-style chat bubble. Incoming bubbles are white (Biz'o speaking),
 * outgoing are brand-green (the business owner). Supports an optional tail,
 * media, timestamp and delivery ticks.
 */
function ChatBubble({
  children,
  from = 'in',
  time,
  status = 'none',
  tail = true,
  media,
  dir,
  style
}) {
  const out = from === 'out';
  const bg = out ? 'var(--wa-bubble-out)' : 'var(--surface-1)';
  const tailSize = 8;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: out ? 'flex-end' : 'flex-start',
      padding: '1px 0',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      maxWidth: '78%'
    }
  }, tail && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 0,
      [out ? 'right' : 'left']: -tailSize + 1,
      width: 0,
      height: 0,
      borderTop: `${tailSize}px solid ${bg}`,
      [out ? 'borderRight' : 'borderLeft']: `${tailSize}px solid transparent`
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      background: bg,
      borderRadius: 'var(--radius-bubble)',
      [out ? 'borderTopRightRadius' : 'borderTopLeftRadius']: tail ? 'var(--radius-bubble-tail)' : 'var(--radius-bubble)',
      boxShadow: 'var(--shadow-bubble)',
      padding: media ? 4 : '6px 9px 8px',
      font: 'var(--type-body)',
      color: 'var(--ink-900)',
      position: 'relative',
      direction: dir,
      textAlign: dir === 'rtl' ? 'right' : 'left'
    }
  }, media && /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: 6,
      overflow: 'hidden',
      marginBottom: children ? 5 : 0
    }
  }, typeof media === 'string' ? /*#__PURE__*/React.createElement("img", {
    src: media,
    alt: "",
    style: {
      display: 'block',
      width: '100%'
    }
  }) : media), /*#__PURE__*/React.createElement("span", {
    style: {
      padding: media && !children ? '0' : undefined
    }
  }, children), time && /*#__PURE__*/React.createElement("span", {
    style: {
      float: out ? 'right' : 'right',
      display: 'inline-flex',
      alignItems: 'center',
      font: 'var(--fw-medium) 11px var(--font-ui)',
      color: 'var(--ink-400)',
      marginInlineStart: 8,
      marginTop: 2,
      lineHeight: 1,
      transform: 'translateY(3px)',
      ...(media && !children ? {
        position: 'absolute',
        right: 10,
        bottom: 10,
        background: 'rgba(0,0,0,.4)',
        color: '#fff',
        padding: '2px 6px',
        borderRadius: 8
      } : {})
    }
  }, time, /*#__PURE__*/React.createElement(Ticks, {
    status: out ? status : 'none'
  })))));
}
Object.assign(__ds_scope, { ChatBubble });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/chat/ChatBubble.jsx", error: String((e && e.message) || e) }); }

// components/chat/DatePill.jsx
try { (() => {
/** Centered "Today" / date divider pill that floats over the chat canvas. */
function DatePill({
  children = 'Today',
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      padding: '8px 0',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      background: '#FFFFFF',
      color: 'var(--ink-500)',
      font: 'var(--fw-medium) 12px var(--font-ui)',
      textTransform: 'uppercase',
      letterSpacing: '.02em',
      padding: '5px 12px',
      borderRadius: 'var(--radius-sm)',
      boxShadow: 'var(--shadow-bubble)'
    }
  }, children));
}
Object.assign(__ds_scope, { DatePill });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/chat/DatePill.jsx", error: String((e && e.message) || e) }); }

// components/chat/PostPreview.jsx
try { (() => {
const PLATFORMS = {
  instagram: {
    label: 'Instagram',
    color: '#E1306C'
  },
  facebook: {
    label: 'Facebook',
    color: '#1877F2'
  },
  tiktok: {
    label: 'TikTok',
    color: '#111'
  },
  whatsapp: {
    label: 'Status',
    color: '#25D366'
  }
};

/**
 * The generated-post preview Biz'o sends back in chat: the user's photo,
 * a ready caption, target platforms, and approve / edit actions.
 * This is the product's core deliverable rendered as a card.
 */
function PostPreview({
  image,
  caption,
  platforms = ['instagram', 'facebook'],
  status = 'Ready to review',
  onApprove,
  onEdit,
  dir = 'rtl',
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-1)',
      borderRadius: 'var(--radius-md)',
      overflow: 'hidden',
      boxShadow: 'var(--shadow-bubble)',
      width: 300,
      maxWidth: '82%',
      ...style
    }
  }, image && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, typeof image === 'string' ? /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: "",
    style: {
      display: 'block',
      width: '100%',
      maxHeight: 260,
      objectFit: 'cover'
    }
  }) : image, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 8,
      insetInlineStart: 8,
      display: 'inline-flex',
      alignItems: 'center',
      gap: 5,
      background: 'rgba(17,27,33,.66)',
      color: '#fff',
      font: 'var(--fw-semibold) 11px var(--font-ui)',
      padding: '4px 9px',
      borderRadius: 'var(--radius-pill)',
      backdropFilter: 'blur(2px)'
    }
  }, "\u2728 ", status)), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '11px 13px 13px',
      direction: dir,
      textAlign: dir === 'rtl' ? 'right' : 'left'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      marginBottom: 9,
      flexWrap: 'wrap',
      direction: 'ltr',
      justifyContent: dir === 'rtl' ? 'flex-end' : 'flex-start'
    }
  }, platforms.map(p => {
    const pf = PLATFORMS[p] || {
      label: p,
      color: 'var(--ink-500)'
    };
    return /*#__PURE__*/React.createElement("span", {
      key: p,
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 5,
        font: 'var(--fw-semibold) 11px var(--font-ui)',
        color: pf.color,
        background: 'var(--surface-2)',
        padding: '4px 9px',
        borderRadius: 'var(--radius-pill)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 7,
        height: 7,
        borderRadius: '50%',
        background: pf.color
      }
    }), pf.label);
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: 'var(--type-body)',
      color: 'var(--ink-900)',
      lineHeight: 1.5,
      whiteSpace: 'pre-wrap'
    }
  }, caption), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      marginTop: 13
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onApprove,
    style: btn('var(--color-accent)', '#fff')
  }, "\u2713 \u05D0\u05D9\u05E9\u05D5\u05E8 \u05D5\u05E4\u05E8\u05E1\u05D5\u05DD"), /*#__PURE__*/React.createElement("button", {
    onClick: onEdit,
    style: btn('var(--surface-2)', 'var(--text-strong)')
  }, "\u05E2\u05E8\u05D9\u05DB\u05D4"))));
}
function btn(bg, fg) {
  return {
    flex: 1,
    padding: '10px 12px',
    border: 'none',
    borderRadius: 'var(--radius-pill)',
    background: bg,
    color: fg,
    font: 'var(--fw-semibold) 14px var(--font-body)',
    cursor: 'pointer',
    whiteSpace: 'nowrap'
  };
}
Object.assign(__ds_scope, { PostPreview });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/chat/PostPreview.jsx", error: String((e && e.message) || e) }); }

// components/chat/QuickReply.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * WhatsApp interactive "quick reply" buttons — the stacked accent-colored
 * actions Biz'o offers under a message (Approve / Edit / Schedule).
 */
function QuickReply({
  options = [],
  onSelect,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 2,
      maxWidth: '78%',
      ...style
    }
  }, options.map((opt, i) => {
    const o = typeof opt === 'string' ? {
      label: opt
    } : opt;
    return /*#__PURE__*/React.createElement(QuickReplyButton, _extends({
      key: i
    }, o, {
      onClick: () => onSelect && onSelect(o.value ?? o.label, i)
    }));
  }));
}
function QuickReplyButton({
  label,
  icon,
  onClick
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 7,
      width: '100%',
      padding: '11px 14px',
      border: 'none',
      background: hover ? 'var(--surface-2)' : 'var(--surface-1)',
      color: 'var(--wa-green-accent)',
      font: 'var(--fw-semibold) 15px var(--font-body)',
      borderRadius: 'var(--radius-sm)',
      boxShadow: 'var(--shadow-bubble)',
      cursor: 'pointer',
      transition: 'background var(--dur-fast)'
    }
  }, icon && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      fontSize: 17
    }
  }, icon), label);
}
Object.assign(__ds_scope, { QuickReply });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/chat/QuickReply.jsx", error: String((e && e.message) || e) }); }

// components/chat/TypingDots.jsx
try { (() => {
/** The three-dot "Biz'o is typing…" bubble. */
function TypingDots({
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'flex-start',
      padding: '1px 0',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-1)',
      borderRadius: 'var(--radius-bubble)',
      borderTopLeftRadius: 'var(--radius-bubble-tail)',
      boxShadow: 'var(--shadow-bubble)',
      padding: '11px 14px',
      display: 'flex',
      gap: 5,
      alignItems: 'center'
    }
  }, [0, 1, 2].map(i => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      width: 8,
      height: 8,
      borderRadius: '50%',
      background: 'var(--ink-300)',
      animation: `bizo-typing 1.2s ${i * 0.18}s infinite ease-in-out`
    }
  })), /*#__PURE__*/React.createElement("style", null, '@keyframes bizo-typing{0%,60%,100%{opacity:.35;transform:translateY(0)}30%{opacity:1;transform:translateY(-3px)}}')));
}
Object.assign(__ds_scope, { TypingDots });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/chat/TypingDots.jsx", error: String((e && e.message) || e) }); }

// components/core/Avatar.jsx
try { (() => {
/** Round avatar with image, initials fallback, and optional online dot. */
function Avatar({
  src,
  name = '',
  size = 44,
  online = false,
  ring = false,
  style
}) {
  const [err, setErr] = React.useState(false);
  const initials = name.split(' ').map(w => w[0]).filter(Boolean).slice(0, 2).join('').toUpperCase();
  return /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'inline-flex',
      width: size,
      height: size,
      flex: 'none',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: size,
      height: size,
      borderRadius: 'var(--radius-pill)',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'var(--bizo-orange-100)',
      color: 'var(--bizo-orange-700)',
      font: `var(--fw-semibold) ${Math.round(size * 0.4)}px var(--font-body)`,
      boxShadow: ring ? '0 0 0 2px var(--surface-1), 0 0 0 4px var(--color-primary)' : 'var(--shadow-xs)'
    }
  }, src && !err ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: name,
    onError: () => setErr(true),
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }) : initials || '?'), online && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      right: 0,
      bottom: 0,
      width: size * 0.28,
      height: size * 0.28,
      minWidth: 9,
      minHeight: 9,
      borderRadius: '50%',
      background: 'var(--wa-green)',
      border: '2px solid var(--surface-1)'
    }
  }));
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
const TONES = {
  neutral: {
    bg: 'var(--surface-2)',
    fg: 'var(--ink-700)'
  },
  brand: {
    bg: 'var(--bizo-orange-100)',
    fg: 'var(--bizo-orange-700)'
  },
  success: {
    bg: 'var(--success-bg)',
    fg: 'var(--success)'
  },
  danger: {
    bg: 'var(--danger-bg)',
    fg: 'var(--danger)'
  },
  warning: {
    bg: 'var(--warning-bg)',
    fg: 'var(--bizo-orange-700)'
  },
  info: {
    bg: 'var(--info-bg)',
    fg: 'var(--info)'
  }
};

/** Small status pill. Optional leading dot. */
function Badge({
  children,
  tone = 'neutral',
  dot = false,
  solid = false,
  style
}) {
  const t = TONES[tone] || TONES.neutral;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '5px',
      font: 'var(--fw-semibold) 12px/1 var(--font-body)',
      padding: '5px 10px',
      borderRadius: 'var(--radius-pill)',
      background: solid ? t.fg : t.bg,
      color: solid ? '#fff' : t.fg,
      whiteSpace: 'nowrap',
      ...style
    }
  }, dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: '50%',
      background: solid ? '#fff' : t.fg
    }
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  sm: {
    font: '13px',
    pad: '7px 14px',
    gap: '6px',
    icon: 15,
    minH: 32
  },
  md: {
    font: '15px',
    pad: '10px 20px',
    gap: '8px',
    icon: 18,
    minH: 42
  },
  lg: {
    font: '16px',
    pad: '13px 26px',
    gap: '9px',
    icon: 20,
    minH: 50
  }
};
const VARIANTS = {
  primary: {
    background: 'var(--color-primary)',
    color: 'var(--color-on-primary)',
    border: '1px solid transparent',
    boxShadow: 'var(--shadow-brand)',
    hoverBg: 'var(--color-primary-hover)',
    pressBg: 'var(--color-primary-press)'
  },
  accent: {
    background: 'var(--color-accent)',
    color: '#fff',
    border: '1px solid transparent',
    boxShadow: 'var(--shadow-fab)',
    hoverBg: 'var(--color-accent-hover)',
    pressBg: 'var(--wa-green-dark)'
  },
  secondary: {
    background: 'var(--surface-1)',
    color: 'var(--text-strong)',
    border: '1px solid var(--border-default)',
    boxShadow: 'var(--shadow-xs)',
    hoverBg: 'var(--surface-2)',
    pressBg: 'var(--line)'
  },
  ghost: {
    background: 'transparent',
    color: 'var(--color-primary-press)',
    border: '1px solid transparent',
    boxShadow: 'none',
    hoverBg: 'var(--bizo-orange-50)',
    pressBg: 'var(--bizo-orange-100)'
  },
  danger: {
    background: 'var(--danger)',
    color: '#fff',
    border: '1px solid transparent',
    boxShadow: 'none',
    hoverBg: '#D8443B',
    pressBg: '#C23A32'
  }
};

/**
 * Biz'o primary button. Pill-shaped, friendly, brand-orange by default.
 */
function Button({
  children,
  variant = 'primary',
  size = 'md',
  block = false,
  disabled = false,
  loading = false,
  leadingIcon,
  trailingIcon,
  type = 'button',
  onClick,
  style,
  ...rest
}) {
  const s = SIZES[size] || SIZES.md;
  const v = VARIANTS[variant] || VARIANTS.primary;
  const [state, setState] = React.useState('rest');
  const bg = disabled ? undefined : state === 'press' ? v.pressBg : state === 'hover' ? v.hoverBg : v.background;
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled || loading,
    onClick: onClick,
    onMouseEnter: () => setState('hover'),
    onMouseLeave: () => setState('rest'),
    onMouseDown: () => setState('press'),
    onMouseUp: () => setState('hover'),
    style: {
      display: block ? 'flex' : 'inline-flex',
      width: block ? '100%' : 'auto',
      alignItems: 'center',
      justifyContent: 'center',
      gap: s.gap,
      font: `var(--fw-semibold) ${s.font}/1 var(--font-body)`,
      padding: s.pad,
      minHeight: s.minH,
      boxSizing: 'border-box',
      borderRadius: 'var(--radius-pill)',
      border: v.border,
      background: bg,
      color: v.color,
      boxShadow: state === 'press' ? 'none' : v.boxShadow,
      cursor: disabled || loading ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.45 : 1,
      transform: state === 'press' && !disabled ? 'scale(0.97)' : 'none',
      transition: 'background var(--dur-fast) var(--ease-standard), transform var(--dur-fast) var(--ease-spring), box-shadow var(--dur-fast)',
      whiteSpace: 'nowrap',
      userSelect: 'none',
      ...style
    }
  }, rest), loading && /*#__PURE__*/React.createElement(Spinner, {
    size: s.icon
  }), !loading && leadingIcon ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      fontSize: s.icon
    }
  }, leadingIcon) : null, children, !loading && trailingIcon ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      fontSize: s.icon
    }
  }, trailingIcon) : null);
}
function Spinner({
  size
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      width: size,
      height: size,
      borderRadius: '50%',
      border: '2px solid rgba(255,255,255,.5)',
      borderTopColor: '#fff',
      display: 'inline-block',
      animation: 'bizo-spin .7s linear infinite'
    }
  }, /*#__PURE__*/React.createElement("style", null, '@keyframes bizo-spin{to{transform:rotate(360deg)}}'));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
/** Generic Biz'o surface card — soft 16px corners, hairline border, gentle lift. */
function Card({
  children,
  padded = true,
  hover = false,
  onClick,
  style
}) {
  const [h, setH] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClick,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      background: 'var(--surface-card)',
      borderRadius: 'var(--radius-lg)',
      border: '1px solid var(--border-subtle)',
      boxShadow: hover && h ? 'var(--shadow-md)' : 'var(--shadow-sm)',
      padding: padded ? 'var(--pad-card)' : 0,
      transform: hover && h ? 'translateY(-2px)' : 'none',
      transition: 'box-shadow var(--dur-base), transform var(--dur-base) var(--ease-out)',
      cursor: onClick ? 'pointer' : 'default',
      overflow: 'hidden',
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Round icon-only button — used across WhatsApp-style chrome (header,
 * composer). Defaults to a transparent chrome button on dark headers.
 */
function IconButton({
  children,
  label,
  variant = 'chrome',
  size = 40,
  disabled = false,
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const VAR = {
    chrome: {
      color: '#fff',
      hoverBg: 'rgba(255,255,255,.16)'
    },
    onLight: {
      color: 'var(--ink-500)',
      hoverBg: 'var(--surface-2)'
    },
    brand: {
      color: '#fff',
      bg: 'var(--color-primary)',
      hoverBg: 'var(--color-primary-hover)'
    },
    accent: {
      color: '#fff',
      bg: 'var(--color-accent)',
      hoverBg: 'var(--color-accent-hover)'
    }
  }[variant] || {};
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": label,
    title: label,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPress(false);
    },
    onMouseDown: () => setPress(true),
    onMouseUp: () => setPress(false),
    style: {
      width: size,
      height: size,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 'var(--radius-pill)',
      border: 'none',
      background: hover || VAR.bg ? hover ? VAR.hoverBg : VAR.bg || 'transparent' : 'transparent',
      color: VAR.color,
      fontSize: Math.round(size * 0.5),
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.4 : 1,
      transform: press ? 'scale(0.9)' : 'none',
      transition: 'background var(--dur-fast), transform var(--dur-fast) var(--ease-spring)',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Labeled text input / textarea with helper & error states. */
function Input({
  label,
  value,
  onChange,
  placeholder,
  type = 'text',
  multiline = false,
  rows = 3,
  helper,
  error,
  disabled = false,
  leadingIcon,
  dir,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const Field = multiline ? 'textarea' : 'input';
  const borderColor = error ? 'var(--danger)' : focus ? 'var(--color-primary)' : 'var(--border-default)';
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '6px',
      font: 'var(--type-body)',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--fw-semibold) 13px var(--font-body)',
      color: 'var(--text-strong)'
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: multiline ? 'flex-start' : 'center',
      gap: '8px',
      border: '1.5px solid ' + borderColor,
      borderRadius: 'var(--radius-md)',
      background: disabled ? 'var(--surface-2)' : 'var(--surface-1)',
      padding: multiline ? '10px 12px' : '0 12px',
      boxShadow: focus ? 'var(--ring-brand)' : 'none',
      transition: 'border-color var(--dur-fast), box-shadow var(--dur-fast)'
    }
  }, leadingIcon && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      color: 'var(--text-faint)',
      fontSize: 17,
      paddingTop: multiline ? 2 : 0
    }
  }, leadingIcon), /*#__PURE__*/React.createElement(Field, _extends({
    type: multiline ? undefined : type,
    rows: multiline ? rows : undefined,
    value: value,
    onChange: onChange,
    placeholder: placeholder,
    disabled: disabled,
    dir: dir,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      flex: 1,
      border: 'none',
      outline: 'none',
      background: 'transparent',
      font: 'var(--type-body)',
      color: 'var(--text-strong)',
      padding: multiline ? 0 : '11px 0',
      resize: 'vertical',
      minWidth: 0
    }
  }, rest))), (helper || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      font: '12px var(--font-body)',
      color: error ? 'var(--danger)' : 'var(--text-muted)'
    }
  }, error || helper));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Input.jsx", error: String((e && e.message) || e) }); }

// components/core/Switch.jsx
try { (() => {
/** iOS/WhatsApp-style toggle switch. */
function Switch({
  checked = false,
  onChange,
  disabled = false,
  label,
  style
}) {
  const toggle = () => {
    if (!disabled && onChange) onChange(!checked);
  };
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '10px',
      cursor: disabled ? 'not-allowed' : 'pointer',
      font: 'var(--type-body)',
      color: 'var(--text-strong)',
      opacity: disabled ? 0.5 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    role: "switch",
    "aria-checked": checked,
    onClick: toggle,
    style: {
      width: 44,
      height: 26,
      borderRadius: 'var(--radius-pill)',
      flex: 'none',
      background: checked ? 'var(--color-accent)' : 'var(--ink-300)',
      position: 'relative',
      transition: 'background var(--dur-base) var(--ease-standard)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 3,
      left: checked ? 21 : 3,
      width: 20,
      height: 20,
      borderRadius: '50%',
      background: '#fff',
      boxShadow: 'var(--shadow-sm)',
      transition: 'left var(--dur-base) var(--ease-spring)'
    }
  })), label && /*#__PURE__*/React.createElement("span", null, label));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Switch.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
/** Removable / selectable chip — platform filters, tags, statuses. */
function Tag({
  children,
  selected = false,
  onRemove,
  onClick,
  leadingIcon,
  style
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("span", {
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '6px',
      font: 'var(--fw-medium) 13px/1 var(--font-body)',
      padding: '7px 12px',
      borderRadius: 'var(--radius-pill)',
      border: '1.5px solid ' + (selected ? 'var(--color-primary)' : 'var(--border-default)'),
      background: selected ? 'var(--bizo-orange-50)' : hover ? 'var(--surface-2)' : 'var(--surface-1)',
      color: selected ? 'var(--bizo-orange-700)' : 'var(--text-body)',
      cursor: onClick ? 'pointer' : 'default',
      transition: 'all var(--dur-fast)',
      userSelect: 'none',
      ...style
    }
  }, leadingIcon && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      fontSize: 15
    }
  }, leadingIcon), children, onRemove && /*#__PURE__*/React.createElement("button", {
    onClick: e => {
      e.stopPropagation();
      onRemove(e);
    },
    "aria-label": "Remove",
    style: {
      border: 'none',
      background: 'none',
      cursor: 'pointer',
      color: 'inherit',
      fontSize: 15,
      lineHeight: 1,
      opacity: 0.6,
      padding: 0,
      marginInlineEnd: -2
    }
  }, "\xD7"));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing/PhoneDemo.jsx
try { (() => {
// Animated phone demo for the landing hero — a looping Biz'o conversation
// built from the design-system chat primitives. Self-contained.
(function () {
  const ns = () => window.BizODesignSystem_9b23bd || {};
  function Phone({
    children,
    width = 300
  }) {
    const scale = width / 360;
    return /*#__PURE__*/React.createElement("div", {
      style: {
        width,
        height: 740 * scale,
        position: 'relative',
        flex: 'none'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        inset: 0,
        transform: `scale(${scale})`,
        transformOrigin: 'top left',
        width: 360,
        height: 740,
        background: '#0b0b0c',
        borderRadius: 50,
        padding: 10,
        boxSizing: 'border-box',
        boxShadow: '0 30px 70px rgba(107,60,15,.28), 0 2px 0 rgba(255,255,255,.07) inset'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: '100%',
        height: '100%',
        background: '#fff',
        borderRadius: 40,
        overflow: 'hidden',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        top: 8,
        left: '50%',
        transform: 'translateX(-50%)',
        width: 110,
        height: 28,
        background: '#000',
        borderRadius: 18,
        zIndex: 50
      }
    }), children)));
  }
  function Header({
    typing
  }) {
    const {
      Avatar
    } = ns();
    return /*#__PURE__*/React.createElement("div", {
      style: {
        background: 'var(--wa-green-deep)',
        color: '#fff',
        display: 'flex',
        alignItems: 'center',
        gap: 9,
        padding: '30px 12px 10px',
        flex: 'none'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 20,
        opacity: .9
      }
    }, "\u2039"), Avatar ? /*#__PURE__*/React.createElement(Avatar, {
      src: "../../assets/bizo-avatar.png",
      name: "Bizo",
      size: 36
    }) : null, /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        lineHeight: 1.15
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        font: "600 15.5px var(--font-body)"
      }
    }, "Biz'o"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11.5,
        opacity: .82
      }
    }, typing ? 'מקליד…' : 'מחובר')), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 17,
        opacity: .9,
        letterSpacing: 3
      }
    }, "\u22EE"));
  }
  const CAPTION = "בוקר של מאפים טריים אצלנו 🥐\nהקרואסון החמאתי החדש כבר כאן — פריך מבחוץ, רך מבפנים. בואו לטעום ☕️\n\n#מאפייה_לוי #בוקרטוב";

  // Conversation timeline. t = ms from loop start when item appears.
  const TIMELINE = [{
    t: 400,
    kind: 'in',
    text: "היי דנה! 👋 שלחי לי תמונה ואני אהפוך אותה לפוסט ✨"
  }, {
    t: 1500,
    kind: 'out',
    photo: true
  }, {
    t: 2400,
    kind: 'typing'
  }, {
    t: 3600,
    kind: 'in',
    text: "מהמם! כתבתי כיתוב בקול של העסק שלך 👇"
  }, {
    t: 4500,
    kind: 'preview'
  }, {
    t: 6200,
    kind: 'out',
    text: "אישור ופרסום ✓"
  }, {
    t: 7200,
    kind: 'published'
  }];
  const LOOP = 10500;
  function PhoneDemo({
    width = 300
  }) {
    const {
      ChatBubble,
      TypingDots,
      PostPreview,
      DatePill,
      Badge
    } = ns();
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
      const tick = ts => {
        if (document.visibilityState === 'visible') {
          const el = ts - startRef.current;
          if (el > LOOP) {
            startRef.current = ts;
            setNow(0);
          } else setNow(el);
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
      const el = scrollRef.current;
      if (el) el.scrollTop = el.scrollHeight;
    }, [now]);
    if (!ChatBubble) return /*#__PURE__*/React.createElement(Phone, {
      width: width
    }, /*#__PURE__*/React.createElement("div", null));
    const shown = TIMELINE.filter(x => now >= x.t);
    const typingNow = (() => {
      const ty = TIMELINE.find(x => x.kind === 'typing');
      const next = TIMELINE.find(x => x.t > ty.t);
      return now >= ty.t && now < next.t;
    })();
    return /*#__PURE__*/React.createElement(Phone, {
      width: width
    }, /*#__PURE__*/React.createElement(Header, {
      typing: typingNow
    }), /*#__PURE__*/React.createElement("div", {
      ref: scrollRef,
      style: {
        flex: 1,
        overflowY: 'auto',
        padding: '6px 8px 10px',
        backgroundColor: 'var(--wa-chat-bg)',
        backgroundImage: 'radial-gradient(rgba(0,0,0,.03) 1px, transparent 1px)',
        backgroundSize: '14px 14px'
      }
    }, /*#__PURE__*/React.createElement(DatePill, null, "\u05D4\u05D9\u05D5\u05DD"), shown.map((m, i) => {
      if (m.kind === 'typing') return null;
      if (m.photo) return /*#__PURE__*/React.createElement(ChatBubble, {
        key: i,
        from: "out",
        time: "10:31",
        status: "read",
        media: /*#__PURE__*/React.createElement(FoodShot, null)
      });
      if (m.kind === 'preview') return /*#__PURE__*/React.createElement("div", {
        key: i,
        style: {
          display: 'flex',
          justifyContent: 'flex-start',
          margin: '3px 0'
        }
      }, /*#__PURE__*/React.createElement(PostPreview, {
        image: /*#__PURE__*/React.createElement(FoodShot, {
          h: 150
        }),
        caption: CAPTION,
        platforms: ['instagram', 'facebook'],
        status: "\u05DE\u05D5\u05DB\u05DF \u05DC\u05D0\u05D9\u05E9\u05D5\u05E8",
        style: {
          width: 232
        }
      }));
      if (m.kind === 'published') return /*#__PURE__*/React.createElement("div", {
        key: i,
        style: {
          display: 'flex',
          justifyContent: 'flex-start',
          margin: '4px 0'
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          background: '#fff',
          borderRadius: 'var(--radius-md)',
          boxShadow: 'var(--shadow-bubble)',
          padding: '10px 12px',
          direction: 'rtl'
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          display: 'flex',
          alignItems: 'center',
          gap: 7
        }
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          width: 22,
          height: 22,
          borderRadius: '50%',
          background: 'var(--success)',
          color: '#fff',
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 13
        }
      }, "\u2713"), /*#__PURE__*/React.createElement("span", {
        style: {
          font: '600 13.5px var(--font-body)',
          color: 'var(--ink-900)'
        }
      }, "\u05E4\u05D5\u05E8\u05E1\u05DD! \uD83C\uDF89"))));
      return /*#__PURE__*/React.createElement(ChatBubble, {
        key: i,
        from: m.kind,
        time: m.kind === 'out' ? '10:32' : '10:30',
        status: m.kind === 'out' ? 'read' : 'none',
        dir: "rtl"
      }, m.text);
    }), typingNow && /*#__PURE__*/React.createElement(TypingDots, null)));
  }
  function FoodShot({
    h = 184
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        width: '100%',
        height: h,
        background: 'radial-gradient(120% 90% at 30% 20%, #F6D9A8, #E0913F)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: h * 0.4,
        filter: 'drop-shadow(0 6px 10px rgba(0,0,0,.2))'
      }
    }, "\uD83E\uDD50"));
  }
  window.PhoneDemo = PhoneDemo;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing/PhoneDemo.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing/Sections.jsx
try { (() => {
// Biz'o Landing Page v2 — Conversion Architecture (Hebrew RTL)
// Structural order: Hero → Contrast → Mechanism → Proof → Video Feature →
//   Pricing → Action Module → FAQ → Footer
(function () {
  const ns = () => window.BizODesignSystem_9b23bd || {};
  const WA_LINK = 'https://wa.me/972500000000'; // ← replace with real number

  function Wa({
    size = 20
  }) {
    return /*#__PURE__*/React.createElement("svg", {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "currentColor",
      "aria-hidden": true
    }, /*#__PURE__*/React.createElement("path", {
      d: "M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.4A10 10 0 1 0 12 2zm0 2a8 8 0 1 1-4.2 14.8l-.3-.2-2.9.8.8-2.8-.2-.3A8 8 0 0 1 12 4zm-2.7 4c-.2 0-.5 0-.7.4-.3.4-1 1-1 2.4s1 2.8 1.2 3 2 3.2 5 4.4c2.4 1 2.9.8 3.4.8.5-.1 1.6-.7 1.9-1.4.2-.7.2-1.2.2-1.3l-1-.5c-.3-.1-1.6-.8-1.8-.9-.3-.1-.4-.1-.6.1l-.8 1c-.2.1-.3.2-.5 0l-.7-.3c-.7-.3-1.4-.9-2-1.6-.4-.5-.1-.5.2-1l.3-.4.2-.4v-.4l-.9-2c-.2-.6-.5-.5-.7-.5h-.6z"
    }));
  }

  // Single universal CTA — every button on the page points here.
  function CTA({
    children = 'התחילו עכשיו בוואטסאפ',
    size = 'md',
    style
  }) {
    const {
      Button
    } = ns();
    if (!Button) return null;
    return /*#__PURE__*/React.createElement("a", {
      href: WA_LINK,
      target: "_blank",
      rel: "noopener noreferrer",
      style: {
        textDecoration: 'none',
        display: 'inline-block',
        ...style
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "accent",
      size: size,
      leadingIcon: /*#__PURE__*/React.createElement(Wa, {
        size: size === 'lg' ? 22 : 18
      })
    }, children));
  }

  // ====================== NAV ======================
  // 1:1 Attention Ratio — logo + single CTA only. No exit-ramp links.
  function Nav() {
    return /*#__PURE__*/React.createElement("header", {
      className: "bz-nav"
    }, /*#__PURE__*/React.createElement("div", {
      className: "bz-wrap bz-nav-in"
    }, /*#__PURE__*/React.createElement("a", {
      className: "bz-logo",
      href: "#top"
    }, /*#__PURE__*/React.createElement("img", {
      src: "../../assets/bizo-avatar.png",
      alt: ""
    }), /*#__PURE__*/React.createElement("span", null, "Biz'o")), /*#__PURE__*/React.createElement(CTA, null)));
  }

  // ====================== HERO ======================
  // Zone 1 (0–3s): Orient + qualify. Outcome H1 ≤30 words. Trust cue adjacent.
  function Hero() {
    const {
      Badge
    } = ns();
    return /*#__PURE__*/React.createElement("section", {
      className: "bz-hero",
      id: "top"
    }, /*#__PURE__*/React.createElement("div", {
      className: "bz-wrap bz-hero-in"
    }, /*#__PURE__*/React.createElement("div", {
      className: "bz-hero-copy"
    }, /*#__PURE__*/React.createElement("div", {
      className: "bz-trust-bar"
    }, /*#__PURE__*/React.createElement("strong", null, "4.9"), /*#__PURE__*/React.createElement("span", null, "\u2B50\u2B50\u2B50\u2B50\u2B50"), /*#__PURE__*/React.createElement("span", {
      className: "bz-sep"
    }, "\xB7"), /*#__PURE__*/React.createElement("span", null, "100+ \u05E2\u05E1\u05E7\u05D9\u05DD \u05D9\u05E9\u05E8\u05D0\u05DC\u05D9\u05DD")), /*#__PURE__*/React.createElement("h1", null, "\u05EA\u05DE\u05D5\u05E0\u05D4 \u05D0\u05D7\u05EA.", /*#__PURE__*/React.createElement("br", null), "\u05E4\u05D5\u05E1\u05D8 \u05DE\u05D5\u05DB\u05DF.", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
      className: "bz-accent"
    }, "\u05EA\u05D5\u05DA 3 \u05D3\u05E7\u05D5\u05EA.")), /*#__PURE__*/React.createElement("p", {
      className: "bz-sub"
    }, "\u05D1\u05D9\u05D6'\u05D5 \u05D4\u05D5\u05D0 \u05DE\u05E0\u05D4\u05DC \u05D4\u05E1\u05D5\u05E9\u05D9\u05D0\u05DC \u05E9\u05DC\u05DB\u05DD \u05D1\u05D5\u05D5\u05D0\u05D8\u05E1\u05D0\u05E4 \u2014 \u05E9\u05D5\u05DC\u05D7\u05D9\u05DD \u05EA\u05DE\u05D5\u05E0\u05D4, \u05DE\u05E7\u05D1\u05DC\u05D9\u05DD \u05E4\u05D5\u05E1\u05D8 \u05DE\u05E2\u05D5\u05E6\u05D1 \u05D1\u05E7\u05D5\u05DC \u05E9\u05DC \u05D4\u05E2\u05E1\u05E7, \u05DE\u05D0\u05E9\u05E8\u05D9\u05DD \u05D1\u05D4\u05E7\u05E9\u05D4, \u05D5\u05D0\u05E0\u05D7\u05E0\u05D5 \u05DE\u05E4\u05E8\u05E1\u05DE\u05D9\u05DD. \u05D1\u05DC\u05D9 \u05D0\u05E4\u05DC\u05D9\u05E7\u05E6\u05D9\u05D5\u05EA, \u05D1\u05DC\u05D9 \u05DC\u05DC\u05DE\u05D5\u05D3 \u05DB\u05DC\u05D5\u05DD."), /*#__PURE__*/React.createElement(CTA, {
      size: "lg",
      style: {
        marginTop: 28
      }
    }), /*#__PURE__*/React.createElement("p", {
      className: "bz-microcopy"
    }, "\u05E0\u05D9\u05E1\u05D9\u05D5\u05DF 14 \u05D9\u05D5\u05DD \u05D7\u05D9\u05E0\u05DD \xB7 \u05D1\u05DC\u05D9 \u05DB\u05E8\u05D8\u05D9\u05E1 \u05D0\u05E9\u05E8\u05D0\u05D9 \xB7 \u05D1\u05D9\u05D8\u05D5\u05DC \u05D1\u05DB\u05DC \u05E2\u05EA")), /*#__PURE__*/React.createElement("div", {
      className: "bz-hero-visual"
    }, /*#__PURE__*/React.createElement("img", {
      className: "bz-robot",
      src: "../../assets/bizo-robot-hero.png",
      alt: "\u05D4\u05D1\u05D5\u05D8 \u05E9\u05DC \u05D1\u05D9\u05D6'\u05D5"
    }))), /*#__PURE__*/React.createElement(Marquee, null));
  }
  function Marquee() {
    const tags = ['קוסמטיקאיות', 'מאפיות', 'בעלי מלאכה', 'חנויות שכונתיות', 'מספרות', 'בתי קפה', 'סטודיו לציפורניים', 'יועצי אופנה', 'מאמני כושר', 'שפים'];
    return /*#__PURE__*/React.createElement("div", {
      className: "bz-marquee"
    }, /*#__PURE__*/React.createElement("div", {
      className: "bz-marquee-row"
    }, [...tags, ...tags].map((t, i) => /*#__PURE__*/React.createElement(React.Fragment, {
      key: i
    }, /*#__PURE__*/React.createElement("span", null, t), /*#__PURE__*/React.createElement("i", null, "\xB7")))));
  }

  // ====================== CONTRAST BLOCK ======================
  // Zone 2 (3–10s): Agitate status quo → desired outcome. Who it's NOT for.
  function Contrast() {
    return /*#__PURE__*/React.createElement("section", {
      className: "bz-contrast"
    }, /*#__PURE__*/React.createElement("div", {
      className: "bz-wrap"
    }, /*#__PURE__*/React.createElement("div", {
      className: "bz-before-after"
    }, /*#__PURE__*/React.createElement("div", {
      className: "bz-before"
    }, /*#__PURE__*/React.createElement("div", {
      className: "bz-ba-label bz-label-before"
    }, "\u05DC\u05E4\u05E0\u05D9 \u05D1\u05D9\u05D6'\u05D5"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "\uD83D\uDCF8 \u05D9\u05E9 \u05DC\u05DB\u05DD \u05EA\u05DE\u05D5\u05E0\u05D5\u05EA \u05DE\u05D3\u05D4\u05D9\u05DE\u05D5\u05EA \u2014 \u05E9\u05E0\u05E9\u05D0\u05E8\u05D5\u05EA \u05D1\u05D2\u05DC\u05E8\u05D9\u05D4"), /*#__PURE__*/React.createElement("li", null, "\u23F3 \u05D0\u05D9\u05DF \u05D6\u05DE\u05DF \u05DC\u05DB\u05EA\u05D5\u05D1 \u05DB\u05D9\u05EA\u05D5\u05D1\u05D9\u05DD \u05D1\u05D9\u05DF \u05DC\u05E7\u05D5\u05D7 \u05DC\u05DC\u05E7\u05D5\u05D7"), /*#__PURE__*/React.createElement("li", null, "\uD83D\uDE1F \u05D0\u05E9\u05DE\u05D4 \u05E9\u05D5\u05D1 \u05E9\u05D1\u05D5\u05E2 \u05E2\u05D5\u05D3 \u05D1\u05DC\u05D9 \u05E4\u05D5\u05E1\u05D8"), /*#__PURE__*/React.createElement("li", null, "\uD83E\uDD2F Canva, Buffer, ChatGPT \u2014 \u05DB\u05DC\u05D9\u05DD \u05E9\u05E6\u05E8\u05D9\u05DA \u05DC\u05DC\u05DE\u05D5\u05D3"))), /*#__PURE__*/React.createElement("div", {
      className: "bz-arrow"
    }, "\u2190"), /*#__PURE__*/React.createElement("div", {
      className: "bz-after"
    }, /*#__PURE__*/React.createElement("div", {
      className: "bz-ba-label bz-label-after"
    }, "\u05E2\u05DD \u05D1\u05D9\u05D6'\u05D5"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "\u2705 \u05E9\u05D5\u05DC\u05D7\u05D9\u05DD \u05EA\u05DE\u05D5\u05E0\u05D4 \u05D1\u05D5\u05D5\u05D0\u05D8\u05E1\u05D0\u05E4 \u2014 \u05DE\u05E7\u05D1\u05DC\u05D9\u05DD \u05E4\u05D5\u05E1\u05D8"), /*#__PURE__*/React.createElement("li", null, "\u2705 \u05D4\u05DB\u05D9\u05EA\u05D5\u05D1 \u05E0\u05E9\u05DE\u05E2 \u05D1\u05D3\u05D9\u05D5\u05E7 \u05DB\u05DE\u05D5\u05DB\u05DD \u2014 \u05DC\u05D0 \u05DB\u05DE\u05D5 \u05E8\u05D5\u05D1\u05D5\u05D8"), /*#__PURE__*/React.createElement("li", null, "\u2705 \u05D0\u05D9\u05E9\u05D5\u05E8 \u05D0\u05D7\u05D3 \u2192 \u05DE\u05E4\u05D5\u05E8\u05E1\u05DD \u05D1\u05D0\u05D9\u05E0\u05E1\u05D8\u05D2\u05E8\u05DD \u05D5\u05D1\u05E4\u05D9\u05D9\u05E1\u05D1\u05D5\u05E7"), /*#__PURE__*/React.createElement("li", null, "\u2705 \u05D0\u05E4\u05E1 \u05E7\u05D9\u05DE\u05D5\u05EA \u05D7\u05D3\u05E9\u05D5\u05EA, \u05D0\u05E4\u05E1 \u05DC\u05D5\u05D7\u05D5\u05EA \u05D6\u05DE\u05E0\u05D9\u05DD")))), /*#__PURE__*/React.createElement("div", {
      className: "bz-built-for"
    }, /*#__PURE__*/React.createElement("h2", null, "\u05D1\u05E0\u05D5\u05D9 \u05D1\u05E9\u05D1\u05D9\u05DC \u05D1\u05E2\u05DC\u05D9 \u05E2\u05E1\u05E7\u05D9\u05DD, \u05DC\u05D0 \u05DE\u05D5\u05DE\u05D7\u05D9 \u05E9\u05D9\u05D5\u05D5\u05E7"), /*#__PURE__*/React.createElement("p", null, "\u05DB\u05DC \u05E9\u05D0\u05E8 \u05D4\u05E4\u05EA\u05E8\u05D5\u05E0\u05D5\u05EA \u05D3\u05D5\u05E8\u05E9\u05D9\u05DD \u05DC\u05DC\u05DE\u05D5\u05D3 \u05DB\u05DC\u05D9 \u05D7\u05D3\u05E9. Biz'o \u05E2\u05D5\u05D1\u05D3 \u05D0\u05D9\u05E4\u05D4 \u05E9\u05D0\u05EA\u05DD \u05DB\u05D1\u05E8 \u05E0\u05DE\u05E6\u05D0\u05D9\u05DD.")), /*#__PURE__*/React.createElement("div", {
      className: "bz-not-for"
    }, /*#__PURE__*/React.createElement("p", {
      className: "bz-not-label"
    }, "\u05D1\u05D9\u05D6'\u05D5 \u05DC\u05D0 \u05DE\u05EA\u05D0\u05D9\u05DD \u05DC\u05DB\u05D5\u05DC\u05DD \u2014 \u05D5\u05D6\u05D4 \u05D1\u05DB\u05D5\u05D5\u05E0\u05D4"), /*#__PURE__*/React.createElement("div", {
      className: "bz-not-grid"
    }, /*#__PURE__*/React.createElement("div", {
      className: "bz-not-card"
    }, /*#__PURE__*/React.createElement("span", null, "\u2715"), /*#__PURE__*/React.createElement("p", null, "\u05E2\u05E1\u05E7\u05D9\u05DD \u05E2\u05DD \u05DE\u05D7\u05DC\u05E7\u05EA \u05E9\u05D9\u05D5\u05D5\u05E7 \u05E4\u05E2\u05D9\u05DC\u05D4 \u05E9\u05DE\u05D9\u05D9\u05E6\u05E8\u05EA \u05DB\u05D1\u05E8 \u05EA\u05D5\u05DB\u05DF")), /*#__PURE__*/React.createElement("div", {
      className: "bz-not-card"
    }, /*#__PURE__*/React.createElement("span", null, "\u2715"), /*#__PURE__*/React.createElement("p", null, "\u05E2\u05E1\u05E7\u05D9\u05DD \u05E9\u05E6\u05E8\u05D9\u05DB\u05D9\u05DD \u05E7\u05DE\u05E4\u05D9\u05D9\u05E0\u05D9\u05DD \u05DE\u05DE\u05D5\u05DE\u05E0\u05D9\u05DD \u05D5\u05E4\u05E8\u05E1\u05D5\u05DD \u05D1\u05EA\u05E9\u05DC\u05D5\u05DD")), /*#__PURE__*/React.createElement("div", {
      className: "bz-not-card"
    }, /*#__PURE__*/React.createElement("span", null, "\u2715"), /*#__PURE__*/React.createElement("p", null, "\u05E2\u05E1\u05E7\u05D9\u05DD \u05E9\u05DC\u05D0 \u05E4\u05D5\u05E2\u05DC\u05D9\u05DD \u05D1\u05E2\u05D1\u05E8\u05D9\u05EA \u2014 \u05D4\u05DE\u05E2\u05E8\u05DB\u05EA \u05DB\u05E8\u05D2\u05E2 \u05D1\u05E2\u05D1\u05E8\u05D9\u05EA \u05D1\u05DC\u05D1\u05D3"))))));
  }

  // ====================== MECHANISM ======================
  // Zone 3 (10–20s): The actual workflow — 4 real steps from the product.
  function Mechanism() {
    const steps = [{
      n: '1',
      icon: '📲',
      t: 'שולחים תמונה בוואטסאפ',
      d: 'שולחים תמונה (או סרטון) ישירות לצ\'אט של ביז\'ו. אפשר להוסיף הערה קצרה לכיוון התוכן — הכל דרך כפתורי תפריט, בלי הקלדה.'
    }, {
      n: '2',
      icon: '✍️',
      t: 'ביז\'ו כותב ומעצב',
      d: 'המערכת מנתחת את התמונה, בוחרת את פרופיל הכתיבה שלכם (זה שחילצנו מהפוסטים הקיימים), וכותבת כיתוב שנשמע כמוכם — תוך פחות מ-3 דקות.'
    }, {
      n: '3',
      icon: '👆',
      t: 'בוחרים: אשר, שנה, ערוך',
      d: 'מקבלים את הפוסט עם 3 כפתורים: אישור מיידי, יצירה מחדש, או כניסה לטופס עריכה קל. אתם בשליטה מלאה — בלי לצאת מהוואטסאפ.'
    }, {
      n: '4',
      icon: '🚀',
      t: 'ביז\'ו מפרסם בשבילכם',
      d: 'לחיצה על "אישור" — וביז\'ו מפרסם לאינסטגרם, פייסבוק וטיקטוק בו זמנית. תקבלו אישור חזרה בצ\'אט כשזה עלה.'
    }];
    return /*#__PURE__*/React.createElement("section", {
      className: "bz-mechanism",
      id: "how"
    }, /*#__PURE__*/React.createElement("div", {
      className: "bz-wrap"
    }, /*#__PURE__*/React.createElement("h2", {
      className: "bz-st"
    }, "\u05D0\u05E8\u05D1\u05E2 \u05D4\u05E7\u05E9\u05D5\u05EA. \u05DE\u05D4\u05EA\u05DE\u05D5\u05E0\u05D4 \u05DC\u05E4\u05E8\u05E1\u05D5\u05DD."), /*#__PURE__*/React.createElement("p", {
      className: "bz-ss"
    }, "\u05D6\u05D4 \u05D1\u05D3\u05D9\u05D5\u05E7 \u05DE\u05D4 \u05E9\u05E7\u05D5\u05E8\u05D4 \u05DE\u05D0\u05D7\u05D5\u05E8\u05D9 \u05D4\u05E7\u05DC\u05E2\u05D9\u05DD \u2014 \u05DB\u05DC \u05E9\u05DC\u05D1, \u05D1\u05E9\u05E4\u05D4 \u05E4\u05E9\u05D5\u05D8\u05D4."), /*#__PURE__*/React.createElement("div", {
      className: "bz-mech-in"
    }, /*#__PURE__*/React.createElement("div", {
      className: "bz-steps-v"
    }, steps.map((s, i) => /*#__PURE__*/React.createElement("div", {
      className: "bz-step-v",
      key: i
    }, /*#__PURE__*/React.createElement("div", {
      className: "bz-step-top"
    }, /*#__PURE__*/React.createElement("span", {
      className: "bz-step-n"
    }, s.n), /*#__PURE__*/React.createElement("span", {
      className: "bz-step-icon"
    }, s.icon)), /*#__PURE__*/React.createElement("div", {
      className: "bz-step-body"
    }, /*#__PURE__*/React.createElement("h3", null, s.t), /*#__PURE__*/React.createElement("p", null, s.d)), i < steps.length - 1 && /*#__PURE__*/React.createElement("div", {
      className: "bz-step-connector"
    })))), /*#__PURE__*/React.createElement("div", {
      className: "bz-mech-gif"
    }, /*#__PURE__*/React.createElement("img", {
      src: "../../assets/bizo-whatsapp-demo.gif",
      alt: "\u05D4\u05D3\u05D2\u05DE\u05D4 \u05E9\u05DC \u05D1\u05D9\u05D6'\u05D5 \u05D1\u05E4\u05E2\u05D5\u05DC\u05D4"
    })))));
  }

  // ====================== PROOF 1 ======================
  // Scattered immediately after mechanism (peak skepticism point).
  function Proof1() {
    return /*#__PURE__*/React.createElement("section", {
      className: "bz-proof"
    }, /*#__PURE__*/React.createElement("div", {
      className: "bz-wrap"
    }, /*#__PURE__*/React.createElement("div", {
      className: "bz-testi-grid"
    }, /*#__PURE__*/React.createElement(Testimonial, {
      quote: "\u05D4\u05D9\u05D9\u05EA\u05D9 \u05DE\u05E4\u05E8\u05E1\u05DE\u05EA \u05E4\u05D5\u05E1\u05D8 \u05D0\u05D7\u05D3 \u05D1\u05D7\u05D5\u05D3\u05E9 \u05DB\u05D9 \u05DC\u05D0 \u05D4\u05D9\u05D4 \u05DC\u05D9 \u05DB\u05D5\u05D7 \u05DC\u05DB\u05EA\u05D5\u05D1. \u05E2\u05DD \u05D1\u05D9\u05D6'\u05D5 \u05D0\u05E0\u05D9 \u05DE\u05E4\u05E8\u05E1\u05DE\u05EA \u05D0\u05E8\u05D1\u05E2 \u05E4\u05E2\u05DE\u05D9\u05DD \u05D1\u05E9\u05D1\u05D5\u05E2 \u2014 \u05D5-3 \u05DC\u05E7\u05D5\u05D7\u05D5\u05EA \u05D7\u05D3\u05E9\u05D5\u05EA \u05E4\u05E0\u05D5 \u05D0\u05DC\u05D9\u05D9 \u05D1\u05D7\u05D5\u05D3\u05E9 \u05D4\u05E8\u05D0\u05E9\u05D5\u05DF \u05D1\u05DC\u05D1\u05D3.",
      name: "\u05D3\u05E0\u05D4 \u05DC.",
      role: "\u05E1\u05D8\u05D5\u05D3\u05D9\u05D5 \u05DC\u05E6\u05D9\u05E4\u05D5\u05E8\u05E0\u05D9\u05D9\u05DD, \u05EA\u05DC \u05D0\u05D1\u05D9\u05D1",
      stars: 5
    }), /*#__PURE__*/React.createElement(Testimonial, {
      quote: "\u05D7\u05E9\u05D1\u05EA\u05D9 \u05E9\u05D6\u05D4 \u05D9\u05D4\u05D9\u05D4 \u05E2\u05D5\u05D3 \u05EA\u05D5\u05DB\u05E0\u05D4 \u05E9\u05E6\u05E8\u05D9\u05DA \u05DC\u05DC\u05DE\u05D5\u05D3. \u05E9\u05DC\u05D7\u05EA\u05D9 \u05EA\u05DE\u05D5\u05E0\u05D4 \u05DC\u05E6'\u05D0\u05D8, \u05E7\u05D9\u05D1\u05DC\u05EA\u05D9 \u05E4\u05D5\u05E1\u05D8 \u05DE\u05D5\u05DB\u05DF \u05EA\u05D5\u05DA \u05DB\u05DE\u05D4 \u05D3\u05E7\u05D5\u05EA. \u05E4\u05E9\u05D5\u05D8 \u05DB\u05DB\u05D4. \u05DC\u05D0 \u05D4\u05D9\u05D9\u05EA\u05D4 \u05DC\u05D9 \u05E9\u05D5\u05DD \u05E1\u05D9\u05D1\u05D4 \u05DC\u05D0 \u05DC\u05D4\u05DE\u05E9\u05D9\u05DA.",
      name: "\u05D9\u05D5\u05D1\u05DC \u05DE.",
      role: "\u05E1\u05E4\u05E8, \u05D9\u05E8\u05D5\u05E9\u05DC\u05D9\u05DD",
      stars: 5
    }))));
  }
  function Testimonial({
    quote,
    name,
    role,
    stars
  }) {
    return /*#__PURE__*/React.createElement("div", {
      className: "bz-testi"
    }, /*#__PURE__*/React.createElement("div", {
      className: "bz-stars"
    }, '⭐'.repeat(stars)), /*#__PURE__*/React.createElement("p", {
      className: "bz-quote"
    }, "\"", quote, "\""), /*#__PURE__*/React.createElement("div", {
      className: "bz-attrib"
    }, /*#__PURE__*/React.createElement("strong", null, name), /*#__PURE__*/React.createElement("span", null, role)));
  }

  // ====================== VIDEO FEATURE ======================
  // The waterfall content differentiator — unique mechanism.
  function VideoFeature() {
    const outputs = [{
      e: '🎥',
      t: 'הסרטון המקורי',
      d: 'עם כיתוב מותאם'
    }, {
      e: '🖼️',
      t: 'פוסט קרוסלה',
      d: 'טקסט ארוך + תמונות'
    }, {
      e: '📝',
      t: 'פוסט ארוך',
      d: 'כיתוב מורחב'
    }, {
      e: '✨',
      t: '3–5 פוסטים קצרים',
      d: 'מתמונות קצובות מהסרטון'
    }];
    return /*#__PURE__*/React.createElement("section", {
      className: "bz-video-feat"
    }, /*#__PURE__*/React.createElement("div", {
      className: "bz-wrap"
    }, /*#__PURE__*/React.createElement("div", {
      className: "bz-vf-in"
    }, /*#__PURE__*/React.createElement("div", {
      className: "bz-vf-copy"
    }, /*#__PURE__*/React.createElement("div", {
      className: "bz-eyebrow"
    }, "\u05D9\u05DB\u05D5\u05DC\u05EA \u05D1\u05D5\u05E0\u05D5\u05E1"), /*#__PURE__*/React.createElement("h2", null, "\u05E1\u05E8\u05D8\u05D5\u05DF \u05D0\u05D7\u05D3 \u2192", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
      className: "bz-accent"
    }, "7 \u05E4\u05D5\u05E1\u05D8\u05D9\u05DD.")), /*#__PURE__*/React.createElement("p", null, "\u05DE\u05E2\u05DC\u05D9\u05DD \u05E1\u05E8\u05D8\u05D5\u05DF \u05E7\u05E6\u05E8 \u05E9\u05DC \u05D4\u05E2\u05E1\u05E7 \u2014 \u05D1\u05D9\u05D6'\u05D5 \u05DE\u05D5\u05E6\u05D9\u05D0 \u05DE\u05DE\u05E0\u05D5 \u05E7\u05E8\u05D5\u05E1\u05DC\u05D4, \u05E4\u05D5\u05E1\u05D8\u05D9\u05DD \u05E2\u05DD \u05DB\u05D9\u05EA\u05D5\u05D1\u05D9\u05DD \u05E9\u05D5\u05E0\u05D9\u05DD, \u05D5\u05D0\u05EA \u05D4\u05E1\u05E8\u05D8\u05D5\u05DF \u05E2\u05E6\u05DE\u05D5. \u05E9\u05D1\u05D5\u05E2 \u05E9\u05DC\u05DD \u05E9\u05DC \u05EA\u05D5\u05DB\u05DF \u05DE\u05E8\u05D2\u05E2 \u05D0\u05D7\u05D3 \u05E9\u05E6\u05D9\u05DC\u05DE\u05EA\u05DD."), /*#__PURE__*/React.createElement(CTA, {
      style: {
        marginTop: 24
      }
    }, "\u05E0\u05E1\u05D5 \u05D0\u05EA \u05D4\u05E4\u05D9\u05E6'\u05E8 \u05D4\u05D6\u05D4")), /*#__PURE__*/React.createElement("div", {
      className: "bz-vf-outputs"
    }, /*#__PURE__*/React.createElement("div", {
      className: "bz-vf-input"
    }, /*#__PURE__*/React.createElement("div", {
      className: "bz-vf-phone-icon"
    }, "\uD83D\uDCF1"), /*#__PURE__*/React.createElement("div", {
      className: "bz-vf-arrow-label"
    }, "\u05E1\u05E8\u05D8\u05D5\u05DF 1")), /*#__PURE__*/React.createElement("span", {
      className: "bz-vf-eq"
    }, "\u2192"), /*#__PURE__*/React.createElement("div", {
      className: "bz-vf-cards"
    }, outputs.map((o, i) => /*#__PURE__*/React.createElement("div", {
      className: "bz-vf-card",
      key: i
    }, /*#__PURE__*/React.createElement("span", null, o.e), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("strong", null, o.t), /*#__PURE__*/React.createElement("span", null, o.d)))))))));
  }

  // ====================== PRICING ======================
  // Real Hebrew tier names from the product brief.
  function Pricing() {
    const {
      Badge
    } = ns();
    const tiers = [{
      he: 'נוכחות דיגיטלית מואצת',
      en: 'Starter',
      price: '500',
      popular: false,
      tagline: 'לעסק שרוצה להתחיל להופיע',
      feats: ['עד 50 יצירות ועריכות תמונה בחודש', 'עד 4 עיבודי וידאו בחודש', 'כל הפלטפורמות', 'כיתובים בקול שלכם', 'פרסום אוטומטי אחרי אישור']
    }, {
      he: 'מנוע צמיחה אורגני',
      en: 'Growth',
      price: '1,200',
      popular: true,
      tagline: 'לעסק צומח שרוצה נוכחות יומיומית',
      feats: ['עד 190 יצירות ועריכות תמונה בחודש', 'עד 14 עיבודי וידאו בחודש', 'כל הפלטפורמות', 'פרופיל כתיבה מותאם אישית', 'תמיכה מועדפת']
    }, {
      he: 'מנוע צמיחה בלתי מוגבל',
      en: 'Unlimited',
      price: '2,500',
      popular: false,
      tagline: 'לעסק שלא מתפשר על נוכחות',
      feats: ['יצירות ועריכות תמונה ללא הגבלה', 'עיבודי וידאו ללא הגבלה (Fair Use)', 'כל הפלטפורמות', 'פרופיל כתיבה מותאם אישית', 'תמיכה ראשונית מועדפת']
    }];
    return /*#__PURE__*/React.createElement("section", {
      className: "bz-pricing",
      id: "pricing"
    }, /*#__PURE__*/React.createElement("div", {
      className: "bz-wrap"
    }, /*#__PURE__*/React.createElement("h2", {
      className: "bz-st"
    }, "\u05DE\u05D7\u05D9\u05E8 \u05D1\u05E8\u05D5\u05E8. \u05D1\u05DC\u05D9 \u05D4\u05E4\u05EA\u05E2\u05D5\u05EA."), /*#__PURE__*/React.createElement("p", {
      className: "bz-ss"
    }, "\u05DB\u05DC \u05E2\u05DC\u05D5\u05D9\u05D5\u05EA \u05D4-AI \u05DB\u05DC\u05D5\u05DC\u05D5\u05EA. \u05D1\u05E2\u05E8\u05DA 80% \u05E4\u05D7\u05D5\u05EA \u05DE\u05DE\u05E0\u05D4\u05DC \u05E1\u05D5\u05E9\u05D9\u05D0\u05DC \u05D0\u05E0\u05D5\u05E9\u05D9."), /*#__PURE__*/React.createElement("div", {
      className: "bz-tiers"
    }, tiers.map((t, i) => /*#__PURE__*/React.createElement("div", {
      className: 'bz-tier' + (t.popular ? ' bz-tier-pop' : ''),
      key: i
    }, t.popular && Badge ? /*#__PURE__*/React.createElement("div", {
      className: "bz-tier-flag"
    }, /*#__PURE__*/React.createElement(Badge, {
      tone: "brand",
      solid: true
    }, "\u05D4\u05DB\u05D9 \u05E4\u05D5\u05E4\u05D5\u05DC\u05E8\u05D9")) : null, /*#__PURE__*/React.createElement("div", {
      className: "bz-tier-names"
    }, /*#__PURE__*/React.createElement("h3", null, t.he), /*#__PURE__*/React.createElement("span", {
      className: "bz-tier-en"
    }, t.en)), /*#__PURE__*/React.createElement("p", {
      className: "bz-tier-tag"
    }, t.tagline), /*#__PURE__*/React.createElement("div", {
      className: "bz-tier-price"
    }, /*#__PURE__*/React.createElement("span", {
      className: "bz-amt"
    }, t.price), /*#__PURE__*/React.createElement("span", {
      className: "bz-per"
    }, "\u20AA / \u05D7\u05D5\u05D3\u05E9")), /*#__PURE__*/React.createElement("ul", null, t.feats.map((f, fi) => /*#__PURE__*/React.createElement("li", {
      key: fi
    }, /*#__PURE__*/React.createElement("span", {
      className: "bz-check"
    }, "\u2713"), f))), /*#__PURE__*/React.createElement(CTA, {
      style: {
        width: '100%'
      }
    })))), /*#__PURE__*/React.createElement("div", {
      className: "bz-trust-badges"
    }, /*#__PURE__*/React.createElement("span", null, "\uD83D\uDD12 \u05D1\u05D9\u05D8\u05D5\u05DC \u05D1\u05DB\u05DC \u05E2\u05EA"), /*#__PURE__*/React.createElement("span", null, "\uD83D\uDCB3 \u05D1\u05DC\u05D9 \u05DB\u05E8\u05D8\u05D9\u05E1 \u05D0\u05E9\u05E8\u05D0\u05D9 \u05DC\u05E0\u05D9\u05E1\u05D9\u05D5\u05DF"), /*#__PURE__*/React.createElement("span", null, "\uD83C\uDDEE\uD83C\uDDF1 \u05EA\u05DE\u05D9\u05DB\u05D4 \u05D1\u05E2\u05D1\u05E8\u05D9\u05EA"), /*#__PURE__*/React.createElement("span", null, "\u26A1 \u05D4\u05D2\u05D3\u05E8\u05D4 \u05EA\u05D5\u05DA 5 \u05D3\u05E7\u05D5\u05EA")), /*#__PURE__*/React.createElement(Proof2, null)));
  }

  // Proof near pricing (investment point — peak skepticism)
  function Proof2() {
    return /*#__PURE__*/React.createElement("div", {
      className: "bz-proof-inline"
    }, /*#__PURE__*/React.createElement(Testimonial, {
      quote: "\u05E6\u05D9\u05DC\u05DE\u05EA\u05D9 \u05E1\u05E8\u05D8\u05D5\u05DF \u05E7\u05E6\u05E8 \u05E9\u05DC \u05DE\u05D5\u05E6\u05E8 \u05D7\u05D3\u05E9 \u2014 \u05D1\u05D9\u05D6'\u05D5 \u05E9\u05DC\u05D7 \u05DC\u05D9 \u05D7\u05D6\u05E8\u05D4 6 \u05E4\u05D5\u05E1\u05D8\u05D9\u05DD \u05E9\u05D5\u05E0\u05D9\u05DD \u05EA\u05D5\u05DA 10 \u05D3\u05E7\u05D5\u05EA. \u05D7\u05E1\u05DB\u05EA\u05D9 \u05E9\u05E2\u05EA\u05D9\u05D9\u05DD \u05E2\u05D1\u05D5\u05D3\u05D4. \u05DE\u05E1\u05DC\u05D5\u05DC \u05D4-Growth \u05E9\u05D5\u05D5\u05D4 \u05DB\u05DC \u05E9\u05E7\u05DC.",
      name: "\u05DE\u05D9\u05D4 \u05DB.",
      role: "\u05D9\u05D5\u05E2\u05E6\u05EA \u05D0\u05D5\u05E4\u05E0\u05D4, \u05D7\u05D9\u05E4\u05D4",
      stars: 5
    }));
  }

  // ====================== ACTION MODULE ======================
  // Zone 5: The conversion unit. Minimal friction. WA link, no form.
  function ActionModule() {
    return /*#__PURE__*/React.createElement("section", {
      className: "bz-action",
      id: "start"
    }, /*#__PURE__*/React.createElement("div", {
      className: "bz-wrap bz-action-in"
    }, /*#__PURE__*/React.createElement("img", {
      src: "../../assets/bizo-avatar.png",
      alt: "",
      className: "bz-action-bot"
    }), /*#__PURE__*/React.createElement("h2", null, "\u05D4\u05E4\u05D5\u05E1\u05D8 \u05D4\u05D1\u05D0 \u05E9\u05DC\u05DB\u05DD \u05E0\u05DE\u05E6\u05D0", /*#__PURE__*/React.createElement("br", null), "\u05D1\u05DE\u05E8\u05D7\u05E7 \u05EA\u05DE\u05D5\u05E0\u05D4 \u05D0\u05D7\u05EA."), /*#__PURE__*/React.createElement("p", null, "\u05E9\u05DC\u05D7\u05D5 \u05D4\u05D9 \u05DC\u05D1\u05D9\u05D6'\u05D5 \u05D1\u05D5\u05D5\u05D0\u05D8\u05E1\u05D0\u05E4 \u2014 \u05EA\u05D5\u05DA 5 \u05D3\u05E7\u05D5\u05EA \u05EA\u05E2\u05E9\u05D5 \u05D0\u05D5\u05E0\u05D1\u05D5\u05E8\u05D3\u05D9\u05E0\u05D2 \u05E7\u05E6\u05E8 \u05D5\u05EA\u05E9\u05DC\u05D7\u05D5 \u05D0\u05EA \u05D4\u05EA\u05DE\u05D5\u05E0\u05D4 \u05D4\u05E8\u05D0\u05E9\u05D5\u05E0\u05D4 \u05E9\u05DC\u05DB\u05DD."), /*#__PURE__*/React.createElement(CTA, {
      size: "lg"
    }, "\u05E9\u05DC\u05D7\u05D5 \u05D4\u05D9 \u05DC\u05D1\u05D9\u05D6'\u05D5 \u2192"), /*#__PURE__*/React.createElement("p", {
      className: "bz-action-micro"
    }, "14 \u05D9\u05D5\u05DD \u05E0\u05D9\u05E1\u05D9\u05D5\u05DF \u05D7\u05D9\u05E0\u05DD \xB7 \u05D1\u05D9\u05D8\u05D5\u05DC \u05D1\u05DB\u05DC \u05E2\u05EA \xB7 \u05DC\u05DC\u05D0 \u05DB\u05E8\u05D8\u05D9\u05E1 \u05D0\u05E9\u05E8\u05D0\u05D9"), /*#__PURE__*/React.createElement("p", {
      className: "bz-action-micro",
      style: {
        opacity: .55,
        fontSize: 13
      }
    }, "\u05DE\u05E1\u05E4\u05E8 \u05D4\u05D5\u05D5\u05D0\u05D8\u05E1\u05D0\u05E4: +972-50-000-0000 ", /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--bizo-orange-200)'
      }
    }, "(placeholder \u2014 \u05D9\u05E9 \u05DC\u05D4\u05D7\u05DC\u05D9\u05E3)"))));
  }

  // ====================== FAQ ======================
  // Zone 6: Objection handlers. Sticky secondary CTA at end.
  function Faq() {
    const qa = [{
      q: `הכיתוב לא יישמע כמוני?`,
      a: `ביז'ו חולץ את קול המותג שלכם מהפוסטים הקיימים — אותו אורך משפט, אותן מילים, אותם אימוג'ים. ואם משהו לא מדויק, לוחצים "ערוך" וזה מתוקן תוך שניות. אתם מאשרים לפני שמשהו עולה — תמיד.`
    }, {
      q: `מה קורה אם לא נאשר את הפוסט מיד?`,
      a: `הפוסט נשמר בתור ומחכה לאישורכם. ביז'ו ישלח תזכורת אחת עדינה אחרי 24 שעות. שום דבר לא מפורסם בלי שלוחצים "אישור" — אתם בשליטה מלאה.`
    }, {
      q: `כמה זמן לוקחת ההגדרה הראשונית?`,
      a: `כ-5 דקות: שם העסק, תיאור קצר, ובחירת הפלטפורמות. המערכת מנתחת לבד את הפרופיל החזותי והכתיבתי מהפוסטים הקיימים — אתם לא צריכים להגדיר כלום ידנית.`
    }, {
      q: `מה ההבדל בין המסלולים?`,
      a: `ההבדל העיקרי הוא הכמות החודשית: מסלול Starter מגיע ל-50 תמונות ו-4 סרטונים, Growth ל-190 תמונות ו-14 סרטונים, ו-Unlimited ללא מגבלה. כל המסלולים כוללים את אותה איכות כיתובים ופרסום אוטומטי.`
    }, {
      q: `אפשר לבטל?`,
      a: `כן — בכל עת, ישר מהוואטסאפ. לא צריך לדבר עם אף אחד. לא חיובים על חלקי חודש אחרי ביטול.`
    }];
    const [open, setOpen] = React.useState(0);
    return /*#__PURE__*/React.createElement("section", {
      className: "bz-faq",
      id: "faq"
    }, /*#__PURE__*/React.createElement("div", {
      className: "bz-wrap bz-faq-wrap"
    }, /*#__PURE__*/React.createElement("h2", {
      className: "bz-st"
    }, "\u05E9\u05D0\u05DC\u05D5\u05EA \u05E9\u05E9\u05D5\u05D0\u05DC\u05D9\u05DD \u05D0\u05D5\u05EA\u05E0\u05D5"), /*#__PURE__*/React.createElement("div", {
      className: "bz-faq-list"
    }, qa.map((item, i) => /*#__PURE__*/React.createElement("div", {
      className: 'bz-faq-item' + (open === i ? ' bz-open' : ''),
      key: i
    }, /*#__PURE__*/React.createElement("button", {
      className: "bz-faq-q",
      onClick: () => setOpen(open === i ? -1 : i)
    }, /*#__PURE__*/React.createElement("span", null, item.q), /*#__PURE__*/React.createElement("span", {
      className: "bz-faq-ic"
    }, open === i ? '–' : '+')), /*#__PURE__*/React.createElement("div", {
      className: "bz-faq-a"
    }, /*#__PURE__*/React.createElement("p", null, item.a))))), /*#__PURE__*/React.createElement("div", {
      style: {
        textAlign: 'center',
        marginTop: 40
      }
    }, /*#__PURE__*/React.createElement("p", {
      style: {
        color: 'var(--text-muted)',
        marginBottom: 16,
        fontSize: 17
      }
    }, "\u05DE\u05D5\u05DB\u05E0\u05D9\u05DD \u05DC\u05E0\u05E1\u05D5\u05EA?"), /*#__PURE__*/React.createElement(CTA, {
      size: "lg"
    }))));
  }

  // ====================== FOOTER ======================
  function Footer() {
    return /*#__PURE__*/React.createElement("footer", {
      className: "bz-footer"
    }, /*#__PURE__*/React.createElement("div", {
      className: "bz-wrap bz-footer-in"
    }, /*#__PURE__*/React.createElement("div", {
      className: "bz-logo"
    }, /*#__PURE__*/React.createElement("img", {
      src: "../../assets/bizo-avatar.png",
      alt: ""
    }), /*#__PURE__*/React.createElement("span", null, "Biz'o")), /*#__PURE__*/React.createElement("p", {
      className: "bz-footer-tag"
    }, "\u05DE\u05E0\u05D4\u05DC \u05D4\u05E1\u05D5\u05E9\u05D9\u05D0\u05DC \u05E9\u05DC\u05DB\u05DD \u05D1\u05D5\u05D5\u05D0\u05D8\u05E1\u05D0\u05E4 \xB7 \u05E2\u05E9\u05D5\u05D9 \u05D1\u05D9\u05E9\u05E8\u05D0\u05DC \uD83C\uDDEE\uD83C\uDDF1"), /*#__PURE__*/React.createElement("div", {
      className: "bz-footer-links"
    }, /*#__PURE__*/React.createElement("a", {
      href: "#how"
    }, "\u05D0\u05D9\u05DA \u05D6\u05D4 \u05E2\u05D5\u05D1\u05D3"), /*#__PURE__*/React.createElement("a", {
      href: "#pricing"
    }, "\u05DE\u05D7\u05D9\u05E8\u05D9\u05DD"), /*#__PURE__*/React.createElement("a", {
      href: "#faq"
    }, "\u05E9\u05D0\u05DC\u05D5\u05EA"), /*#__PURE__*/React.createElement("a", {
      href: WA_LINK,
      target: "_blank",
      rel: "noopener noreferrer"
    }, "\u05D3\u05D1\u05E8\u05D5 \u05D0\u05D9\u05EA\u05E0\u05D5"))), /*#__PURE__*/React.createElement("div", {
      className: "bz-copy"
    }, "\xA9 2026 Biz'o \xB7 \u05DB\u05DC \u05D4\u05D6\u05DB\u05D5\u05D9\u05D5\u05EA \u05E9\u05DE\u05D5\u05E8\u05D5\u05EA"));
  }

  // ====================== STICKY MOBILE CTA ======================
  // Visible on mobile after scrolling past hero; keeps 1:1 ratio on desktop
  // by not adding another exit ramp.
  function StickyCTA() {
    const [show, setShow] = React.useState(false);
    React.useEffect(() => {
      const handler = () => setShow(window.scrollY > 600);
      window.addEventListener('scroll', handler, {
        passive: true
      });
      return () => window.removeEventListener('scroll', handler);
    }, []);
    if (!show) return null;
    return /*#__PURE__*/React.createElement("div", {
      className: "bz-sticky-cta"
    }, /*#__PURE__*/React.createElement(CTA, {
      size: "md"
    }, "\u05D4\u05EA\u05D7\u05D9\u05DC\u05D5 \u05E2\u05DB\u05E9\u05D9\u05D5 \u05D1\u05D5\u05D5\u05D0\u05D8\u05E1\u05D0\u05E4"));
  }

  // ====================== LANDING ROOT ======================
  function Landing() {
    return /*#__PURE__*/React.createElement("div", {
      className: "bz-page",
      dir: "rtl"
    }, /*#__PURE__*/React.createElement(Nav, null), /*#__PURE__*/React.createElement(Hero, null), /*#__PURE__*/React.createElement(Contrast, null), /*#__PURE__*/React.createElement(Mechanism, null), /*#__PURE__*/React.createElement(Proof1, null), /*#__PURE__*/React.createElement(VideoFeature, null), /*#__PURE__*/React.createElement(Pricing, null), /*#__PURE__*/React.createElement(ActionModule, null), /*#__PURE__*/React.createElement(Faq, null), /*#__PURE__*/React.createElement(Footer, null), /*#__PURE__*/React.createElement(StickyCTA, null));
  }
  window.Landing = Landing;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing/Sections.jsx", error: String((e && e.message) || e) }); }

__ds_ns.ChatBubble = __ds_scope.ChatBubble;

__ds_ns.DatePill = __ds_scope.DatePill;

__ds_ns.PostPreview = __ds_scope.PostPreview;

__ds_ns.QuickReply = __ds_scope.QuickReply;

__ds_ns.TypingDots = __ds_scope.TypingDots;

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Tag = __ds_scope.Tag;

})();

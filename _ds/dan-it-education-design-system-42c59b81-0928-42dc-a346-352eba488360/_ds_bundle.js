/* @ds-bundle: {"format":4,"namespace":"DANITEducationDesignSystem_42c59b","components":[{"name":"ArticleCard","sourcePath":"components/cards/ArticleCard.jsx"},{"name":"CourseCard","sourcePath":"components/cards/CourseCard.jsx"},{"name":"EventCard","sourcePath":"components/cards/EventCard.jsx"},{"name":"FormatCard","sourcePath":"components/cards/FormatCard.jsx"},{"name":"StepCard","sourcePath":"components/cards/StepCard.jsx"},{"name":"TestimonialCard","sourcePath":"components/cards/TestimonialCard.jsx"},{"name":"AvatarGroup","sourcePath":"components/core/AvatarGroup.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"IconCircle","sourcePath":"components/core/IconCircle.jsx"},{"name":"LogoStrip","sourcePath":"components/core/LogoStrip.jsx"},{"name":"CarouselControls","sourcePath":"components/feedback/CarouselControls.jsx"},{"name":"AccordionItem","sourcePath":"components/forms/Accordion.jsx"},{"name":"Accordion","sourcePath":"components/forms/Accordion.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"PhoneInput","sourcePath":"components/forms/PhoneInput.jsx"},{"name":"Tabs","sourcePath":"components/forms/Tabs.jsx"},{"name":"Footer","sourcePath":"components/navigation/Footer.jsx"},{"name":"Navbar","sourcePath":"components/navigation/Navbar.jsx"}],"sourceHashes":{"components/cards/ArticleCard.jsx":"c734baf113e4","components/cards/CourseCard.jsx":"4c6a751d9a21","components/cards/EventCard.jsx":"b4e1c04ffae6","components/cards/FormatCard.jsx":"3d9c60b249b2","components/cards/StepCard.jsx":"9ef240986640","components/cards/TestimonialCard.jsx":"a641b10b2feb","components/core/AvatarGroup.jsx":"e8dc2fa622a7","components/core/Badge.jsx":"96622de32d0c","components/core/Button.jsx":"5ec7da56be37","components/core/IconCircle.jsx":"a3106f5ff266","components/core/LogoStrip.jsx":"7758b1d4e428","components/feedback/CarouselControls.jsx":"2ba8acdf93dd","components/forms/Accordion.jsx":"d4689efda17c","components/forms/Input.jsx":"e86cac879e45","components/forms/PhoneInput.jsx":"1c116203ba56","components/forms/Tabs.jsx":"6b13abbdb327","components/navigation/Footer.jsx":"0c83a5792cce","components/navigation/Navbar.jsx":"c4a2f9c0a9a9","ui_kits/marketing-website/sections/CareerPath.jsx":"b99778d128b6","ui_kits/marketing-website/sections/CoursePicker.jsx":"21906e08f1bc","ui_kits/marketing-website/sections/EventsArticles.jsx":"cf4c3f33d312","ui_kits/marketing-website/sections/FAQSection.jsx":"b8bb2d207b39","ui_kits/marketing-website/sections/FormatSection.jsx":"960d7272db2b","ui_kits/marketing-website/sections/Hero.jsx":"4368101bb3d6","ui_kits/marketing-website/sections/LeadFormCTA.jsx":"df49f37f1a00","ui_kits/marketing-website/sections/Portfolio.jsx":"79baae3ad5e9","ui_kits/marketing-website/sections/PurpleCTA.jsx":"304f4618aad2","ui_kits/marketing-website/sections/Stories.jsx":"66936294a0de"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.DANITEducationDesignSystem_42c59b = window.DANITEducationDesignSystem_42c59b || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/cards/FormatCard.jsx
try { (() => {
/**
 * FormatCard — row item for "Оберай власний формат навчання": a pastel
 * rounded-square icon tile on the left, bold title + description on the
 * right, inside a thin-bordered card.
 */
function FormatCard({
  icon,
  tone = 'lilac',
  title,
  description
}) {
  const tones = {
    lilac: 'var(--lilac-100)',
    mint: 'var(--mint-100)',
    sky: 'var(--sky-100)',
    yellow: 'var(--yellow-100)'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 16,
      alignItems: 'flex-start',
      background: '#fff',
      border: '1px solid var(--color-border)',
      borderRadius: 'var(--radius-lg)',
      padding: 20,
      fontFamily: 'var(--font-sans)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 56,
      height: 56,
      borderRadius: 'var(--radius-md)',
      background: tones[tone],
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0,
      fontSize: 24
    }
  }, icon), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-h4)',
      fontSize: 18,
      color: 'var(--ink-900)',
      marginBottom: 6
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--text-body)',
      color: 'var(--ink-500)',
      margin: 0
    }
  }, description)));
}
Object.assign(__ds_scope, { FormatCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/FormatCard.jsx", error: String((e && e.message) || e) }); }

// components/cards/TestimonialCard.jsx
try { (() => {
/**
 * TestimonialCard — split two-tone card: photo fills the left/top half,
 * a flat pastel panel on the right/bottom holds a bold quote line, a short
 * bio paragraph, name, and a "Читати історію ↗" link. No shadow needed —
 * the color block itself creates separation.
 */
function TestimonialCard({
  photo,
  tone = 'mint',
  quote,
  body,
  name,
  role,
  ctaLabel = 'Читати історію'
}) {
  const tones = {
    mint: 'var(--mint-200)',
    lilac: 'var(--lilac-100)',
    sky: 'var(--sky-100)',
    yellow: 'var(--yellow-100)'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1.4fr',
      borderRadius: 'var(--radius-xl)',
      overflow: 'hidden',
      fontFamily: 'var(--font-sans)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      background: '#ccc'
    }
  }, photo && /*#__PURE__*/React.createElement("img", {
    src: photo,
    alt: name,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 12,
      left: 12,
      width: 28,
      height: 28,
      borderRadius: 6,
      background: '#0A66C2',
      color: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 14,
      fontWeight: 700
    }
  }, "in")), /*#__PURE__*/React.createElement("div", {
    style: {
      background: tones[tone],
      padding: 24,
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-h4)',
      fontSize: 20,
      color: 'var(--ink-900)'
    }
  }, quote), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--text-body-sm)',
      color: 'var(--ink-700)',
      margin: 0,
      flex: 1
    }
  }, body), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '700 15px var(--font-sans)',
      color: 'var(--ink-900)'
    }
  }, name), role && /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-body-sm)',
      color: 'var(--ink-500)'
    }
  }, role), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      font: '600 14px var(--font-sans)',
      color: 'var(--ink-900)',
      textDecoration: 'underline'
    }
  }, ctaLabel, " \u2197")));
}
Object.assign(__ds_scope, { TestimonialCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/TestimonialCard.jsx", error: String((e && e.message) || e) }); }

// components/core/AvatarGroup.jsx
try { (() => {
/**
 * AvatarGroup — overlapping circular avatars used next to the "9 700+
 * випускників" stat. Accepts image URLs; falls back to initials on a
 * pastel background when no image is given.
 */
function AvatarGroup({
  items = [],
  size = 40,
  overlap = 12,
  max = 4
}) {
  const shown = items.slice(0, max);
  const bgFallbacks = ['var(--lilac-100)', 'var(--mint-100)', 'var(--sky-100)', 'var(--yellow-100)'];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex'
    }
  }, shown.map((item, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      width: size,
      height: size,
      borderRadius: '50%',
      marginLeft: i === 0 ? 0 : -overlap,
      border: '2px solid #fff',
      overflow: 'hidden',
      background: bgFallbacks[i % bgFallbacks.length],
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--font-sans)',
      fontWeight: 700,
      fontSize: size * 0.36,
      color: 'var(--ink-900)',
      zIndex: shown.length - i,
      flexShrink: 0
    }
  }, item.src ? /*#__PURE__*/React.createElement("img", {
    src: item.src,
    alt: item.alt || '',
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }) : item.initials || '?')));
}
Object.assign(__ds_scope, { AvatarGroup });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/AvatarGroup.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
/**
 * Badge — small pill-shaped label used everywhere: course meta chips
 * ("Старт 26 грудня", "3 місяці"), the "+AI Tools" tag, and category
 * call-outs. Source screenshots also show a handful of organic "blob"
 * shaped tags ("Популярно", "Топ вибір") layered behind a photo/emoji —
 * those are simplified here to the same pill shape (blob path not
 * recoverable from a screenshot).
 */
function Badge({
  children,
  tone = 'dark',
  size = 'md',
  style
}) {
  const tones = {
    dark: {
      background: 'var(--ink-900)',
      color: '#fff'
    },
    purple: {
      background: 'var(--purple-300)',
      color: 'var(--purple-800)'
    },
    lilac: {
      background: 'var(--lilac-100)',
      color: 'var(--ink-900)'
    },
    yellow: {
      background: 'var(--yellow-100)',
      color: 'var(--ink-900)'
    },
    mint: {
      background: 'var(--mint-100)',
      color: 'var(--ink-900)'
    },
    sky: {
      background: 'var(--sky-100)',
      color: 'var(--ink-900)'
    },
    outline: {
      background: '#fff',
      color: 'var(--ink-900)',
      border: '1.5px solid var(--color-border)'
    }
  };
  const sizes = {
    sm: {
      padding: '4px 10px',
      font: '600 11px/1.3 var(--font-sans)'
    },
    md: {
      padding: '6px 14px',
      font: 'var(--text-caption)'
    }
  };
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      borderRadius: 'var(--radius-pill)',
      whiteSpace: 'nowrap',
      ...sizes[size],
      ...tones[tone],
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/cards/ArticleCard.jsx
try { (() => {
/**
 * ArticleCard — blog/news card ("Корисні статті та новини"): illustrated
 * or photo thumbnail with a small corner tag, bold two-line title below,
 * small circular arrow-link button.
 */
function ArticleCard({
  image,
  tag,
  title
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden',
      aspectRatio: '4/3',
      background: '#e8e8f0'
    }
  }, image && /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: "",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block'
    }
  }), tag && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 12,
      right: 12
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: "outline",
    size: "sm"
  }, tag))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      gap: 12,
      marginTop: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '700 16px/1.35 var(--font-sans)',
      color: 'var(--ink-900)'
    }
  }, title), /*#__PURE__*/React.createElement("button", {
    style: {
      flexShrink: 0,
      width: 36,
      height: 36,
      borderRadius: '50%',
      border: 'none',
      background: 'var(--surface-tint)',
      color: 'var(--ink-900)',
      cursor: 'pointer',
      fontSize: 16
    },
    "aria-label": "Read"
  }, "\u2197")));
}
Object.assign(__ds_scope, { ArticleCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/ArticleCard.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Button — the two states seen across the DAN.IT homepage: a solid near-black
 * pill (primary) and a white pill with a dark 1px outline (secondary). Both are
 * fully rounded; there is no square/sharp-corner button anywhere in the source.
 */
function Button({
  children,
  variant = 'primary',
  size = 'md',
  as: Tag = 'button',
  icon = null,
  iconPosition = 'right',
  disabled = false,
  style,
  ...rest
}) {
  const sizes = {
    sm: {
      padding: '10px 20px',
      font: 'var(--text-body-sm)'
    },
    md: {
      padding: '14px 28px',
      font: 'var(--text-button)'
    },
    lg: {
      padding: '18px 36px',
      font: '600 18px/1 var(--font-sans)'
    }
  };
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    borderRadius: 'var(--radius-pill)',
    border: '1.5px solid transparent',
    cursor: disabled ? 'not-allowed' : 'pointer',
    transition: 'background var(--duration-base) var(--ease-standard), color var(--duration-base) var(--ease-standard), border-color var(--duration-base) var(--ease-standard)',
    ...sizes[size],
    opacity: disabled ? 0.5 : 1
  };
  const variants = {
    primary: {
      background: 'var(--color-btn-primary-bg)',
      color: 'var(--color-btn-primary-text)'
    },
    secondary: {
      background: '#fff',
      color: 'var(--color-btn-outline-text)',
      borderColor: 'var(--color-btn-outline-border)'
    },
    purple: {
      background: 'var(--color-accent)',
      color: '#fff'
    },
    text: {
      background: 'transparent',
      color: 'var(--color-text-link)',
      padding: 0
    }
  };
  return /*#__PURE__*/React.createElement(Tag, _extends({
    disabled: disabled,
    style: {
      ...base,
      ...variants[variant],
      fontFamily: 'var(--font-sans)',
      ...style
    },
    onMouseEnter: e => {
      if (disabled) return;
      if (variant === 'primary') e.currentTarget.style.background = 'var(--color-btn-primary-bg-hover)';
      if (variant === 'secondary') e.currentTarget.style.borderColor = 'var(--purple-600)';
      if (variant === 'text') e.currentTarget.style.color = 'var(--color-text-link-hover)';
    },
    onMouseLeave: e => {
      if (disabled) return;
      if (variant === 'primary') e.currentTarget.style.background = 'var(--color-btn-primary-bg)';
      if (variant === 'secondary') e.currentTarget.style.borderColor = 'var(--color-btn-outline-border)';
      if (variant === 'text') e.currentTarget.style.color = 'var(--color-text-link)';
    }
  }, rest), icon && iconPosition === 'left' ? icon : null, children, icon && iconPosition === 'right' ? icon : null);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/cards/CourseCard.jsx
try { (() => {
/**
 * CourseCard — the primary catalog card ("Курси Graphic design", "Курс Java
 * з нуля" …). White card, two meta badges up top, optional category chip
 * top-right, bold title + "+AI Tools" badge, short description, outline
 * "Про курс" button pinned to the bottom.
 */
function CourseCard({
  startDate,
  duration,
  categoryTag,
  title,
  aiTools = true,
  description,
  ctaLabel = 'Про курс',
  onCtaClick
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-card)',
      borderRadius: 'var(--radius-xl)',
      boxShadow: 'var(--shadow-card)',
      padding: 'var(--card-padding)',
      display: 'flex',
      flexDirection: 'column',
      gap: 14,
      fontFamily: 'var(--font-sans)',
      height: '100%',
      boxSizing: 'border-box'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8
    }
  }, startDate && /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: "dark"
  }, startDate), duration && /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: "dark"
  }, duration)), categoryTag && /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: "yellow"
  }, categoryTag)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-h4)',
      color: 'var(--ink-900)',
      marginBottom: aiTools ? 8 : 0
    }
  }, title), aiTools && /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: "purple"
  }, "+AI Tools")), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--text-body)',
      color: 'var(--ink-700)',
      margin: 0,
      flex: 1
    }
  }, description), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "secondary",
    onClick: onCtaClick,
    style: {
      width: '100%'
    }
  }, ctaLabel));
}
Object.assign(__ds_scope, { CourseCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/CourseCard.jsx", error: String((e && e.message) || e) }); }

// components/cards/EventCard.jsx
try { (() => {
/**
 * EventCard — "Найближчі заходи" event listing: full-bleed dark photo,
 * three meta badges, bold two-line title, short description, dark CTA.
 */
function EventCard({
  image,
  badges = [],
  title,
  description,
  ctaLabel = 'Детальніше'
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1.3fr',
      gap: 24,
      background: '#fff',
      borderRadius: 'var(--radius-xl)',
      boxShadow: 'var(--shadow-card)',
      overflow: 'hidden',
      fontFamily: 'var(--font-sans)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#20242e',
      minHeight: 200
    }
  }, image && /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: "",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '24px 24px 24px 0',
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      flexWrap: 'wrap'
    }
  }, badges.map((b, i) => /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    key: i,
    tone: b.tone || 'lilac',
    size: "sm"
  }, b.label))), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-h3)',
      fontSize: 24,
      color: 'var(--ink-900)'
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--text-body)',
      color: 'var(--ink-500)',
      margin: 0,
      flex: 1
    }
  }, description), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "primary",
    style: {
      alignSelf: 'flex-start'
    }
  }, ctaLabel)));
}
Object.assign(__ds_scope, { EventCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/EventCard.jsx", error: String((e && e.message) || e) }); }

// components/core/IconCircle.jsx
try { (() => {
/**
 * IconCircle — the solid dark circle used to carry a big stat number
 * ("120+", "20+", "7+") inside the hero's pastel stat cards, and also the
 * small icon-badge circles used in the "career path" band (question mark,
 * profile, briefcase, target icons on a translucent-white circle).
 */
function IconCircle({
  children,
  size = 64,
  tone = 'dark',
  style
}) {
  const tones = {
    dark: {
      background: 'var(--ink-900)',
      color: '#fff'
    },
    'on-purple': {
      background: 'rgba(255,255,255,0.16)',
      color: '#fff',
      border: '1px solid rgba(255,255,255,0.4)'
    },
    light: {
      background: '#fff',
      color: 'var(--purple-600)',
      boxShadow: 'var(--shadow-sm)'
    }
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: size,
      height: size,
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--font-sans)',
      fontWeight: 700,
      fontSize: size * 0.28,
      flexShrink: 0,
      ...tones[tone],
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { IconCircle });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconCircle.jsx", error: String((e && e.message) || e) }); }

// components/cards/StepCard.jsx
try { (() => {
/**
 * StepCard — one step of the purple "Твій шлях у нову кар'єру" band:
 * translucent icon circle, small pill label (Старт/Навчання/Результат/
 * Ціль), bold title, short description — all on white/light text over
 * the purple fill.
 */
function StepCard({
  icon,
  pill,
  title,
  description,
  highlighted = false
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      color: '#fff',
      textAlign: 'left',
      maxWidth: 220
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.IconCircle, {
    tone: highlighted ? 'light' : 'on-purple',
    size: 64,
    style: {
      marginBottom: 12,
      color: highlighted ? 'var(--purple-600)' : '#fff'
    }
  }, icon), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 10
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: highlighted ? 'mint' : 'outline',
    size: "sm",
    style: highlighted ? {} : {
      background: 'transparent',
      border: '1px solid rgba(255,255,255,0.5)',
      color: '#fff'
    }
  }, pill)), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '700 20px var(--font-sans)',
      marginBottom: 6
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--text-body-sm)',
      margin: 0,
      color: 'rgba(255,255,255,0.85)'
    }
  }, description));
}
Object.assign(__ds_scope, { StepCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/StepCard.jsx", error: String((e && e.message) || e) }); }

// components/core/LogoStrip.jsx
try { (() => {
/**
 * LogoStrip — row of partner/employer wordmarks ("Тут працюють наші
 * випускники"). Source shows plain text/logo wordmarks in their native
 * colors on a white card, repeated in 2-3 rows for a marquee-like density.
 */
function LogoStrip({
  logos = [],
  columns = 6
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: `repeat(${columns}, 1fr)`,
      gap: 'var(--space-8)',
      alignItems: 'center',
      background: '#fff',
      borderRadius: 'var(--radius-2xl)',
      padding: 'var(--space-8)',
      boxShadow: 'var(--shadow-card)'
    }
  }, logos.map((logo, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-start'
    }
  }, logo.src ? /*#__PURE__*/React.createElement("img", {
    src: logo.src,
    alt: logo.name,
    style: {
      height: 24,
      objectFit: 'contain'
    }
  }) : /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 700,
      fontSize: 18,
      color: 'var(--ink-900)'
    }
  }, logo.name))));
}
Object.assign(__ds_scope, { LogoStrip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/LogoStrip.jsx", error: String((e && e.message) || e) }); }

// components/feedback/CarouselControls.jsx
try { (() => {
const {
  useState
} = React;
/**
 * Carousel — the arrow + dot control row seen under every horizontally-
 * scrolling card row (courses, testimonials, events, articles). This
 * component renders just the control affordance; wrap your own row of
 * cards and drive its scroll position from `onPrev`/`onNext`/`onDot`.
 */
function CarouselControls({
  count = 3,
  active = 0,
  onPrev,
  onNext,
  onDot
}) {
  const [internal, setInternal] = useState(active);
  const current = active;
  const go = i => {
    const clamped = Math.max(0, Math.min(count - 1, i));
    setInternal(clamped);
    if (onDot) onDot(clamped);
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 16,
      fontFamily: 'var(--font-sans)'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => onPrev ? onPrev() : go(current - 1),
    "aria-label": "Previous",
    style: {
      width: 36,
      height: 36,
      borderRadius: '50%',
      border: 'none',
      background: '#fff',
      boxShadow: 'var(--shadow-sm)',
      cursor: 'pointer',
      color: 'var(--ink-900)'
    }
  }, "\u2039"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6
    }
  }, Array.from({
    length: count
  }).map((_, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    onClick: () => go(i),
    style: {
      width: 8,
      height: 8,
      borderRadius: '50%',
      background: i === current ? 'var(--ink-900)' : 'var(--ink-200)',
      cursor: 'pointer'
    }
  }))), /*#__PURE__*/React.createElement("button", {
    onClick: () => onNext ? onNext() : go(current + 1),
    "aria-label": "Next",
    style: {
      width: 36,
      height: 36,
      borderRadius: '50%',
      border: 'none',
      background: '#fff',
      boxShadow: 'var(--shadow-sm)',
      cursor: 'pointer',
      color: 'var(--ink-900)'
    }
  }, "\u203A"));
}
Object.assign(__ds_scope, { CarouselControls });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/CarouselControls.jsx", error: String((e && e.message) || e) }); }

// components/forms/Accordion.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
/**
 * Accordion — FAQ list item ("Питання що часто виникають"). Collapsed rows
 * show a chat-bubble icon + question + a down chevron; the open row turns
 * its question purple, flips the chevron up, and reveals the answer text.
 */
function AccordionItem({
  question,
  answer,
  defaultOpen = false,
  icon = null
}) {
  const [open, setOpen] = useState(defaultOpen);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      borderRadius: 'var(--radius-lg)',
      padding: '20px 24px',
      fontFamily: 'var(--font-sans)'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setOpen(!open),
    style: {
      all: 'unset',
      boxSizing: 'border-box',
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      cursor: 'pointer'
    }
  }, icon && /*#__PURE__*/React.createElement("span", {
    style: {
      color: open ? 'var(--purple-600)' : 'var(--ink-900)',
      flexShrink: 0
    }
  }, icon), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      font: 'var(--text-body-lg)',
      color: open ? 'var(--purple-600)' : 'var(--ink-900)',
      fontWeight: 500
    }
  }, question), /*#__PURE__*/React.createElement("span", {
    style: {
      transform: open ? 'rotate(180deg)' : 'none',
      transition: 'transform var(--duration-base) var(--ease-standard)',
      color: 'var(--ink-900)'
    }
  }, "\u2193")), open && answer && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 14,
      marginLeft: icon ? 38 : 0,
      font: 'var(--text-body)',
      color: 'var(--ink-500)'
    }
  }, answer));
}
function Accordion({
  items = []
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-tint)',
      borderRadius: 'var(--radius-2xl)',
      padding: 'var(--space-4)',
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, items.map((item, i) => /*#__PURE__*/React.createElement(AccordionItem, _extends({
    key: i
  }, item))));
}
Object.assign(__ds_scope, { AccordionItem, Accordion });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Accordion.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Input — plain text field used in lead-capture forms ("Ім'я", "E-mail").
 * Rounded rectangle, hairline border, placeholder-gray text, no label
 * chrome above it in the source — the placeholder doubles as the label.
 */
function Input({
  placeholder,
  type = 'text',
  value,
  onChange,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("input", _extends({
    type: type,
    placeholder: placeholder,
    value: value,
    onChange: onChange,
    style: {
      width: '100%',
      boxSizing: 'border-box',
      padding: '16px 20px',
      borderRadius: 'var(--radius-md)',
      border: '1.5px solid var(--color-border)',
      background: '#fff',
      font: 'var(--text-body)',
      color: 'var(--ink-900)',
      outline: 'none',
      fontFamily: 'var(--font-sans)',
      ...style
    },
    onFocus: e => e.target.style.borderColor = 'var(--purple-600)',
    onBlur: e => e.target.style.borderColor = 'var(--color-border)'
  }, rest));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/PhoneInput.jsx
try { (() => {
/**
 * PhoneInput — the "+380" phone capture field with a small country-flag
 * prefix, seen 3-4x down the page (career consultation forms). Visually a
 * single rounded pill split into a flag/code prefix and free-typed digits.
 */
function PhoneInput({
  value,
  onChange,
  countryCode = '+380',
  flag = '🇺🇦',
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      border: '1.5px solid var(--color-border)',
      borderRadius: 'var(--radius-md)',
      background: '#fff',
      overflow: 'hidden',
      fontFamily: 'var(--font-sans)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      padding: '16px 14px',
      borderRight: '1.5px solid var(--color-border)',
      font: 'var(--text-body)',
      color: 'var(--ink-900)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true"
  }, flag), countryCode), /*#__PURE__*/React.createElement("input", {
    value: value,
    onChange: onChange,
    placeholder: "00 000 00 00",
    style: {
      flex: 1,
      border: 'none',
      outline: 'none',
      padding: '16px 14px',
      font: 'var(--text-body)',
      color: 'var(--ink-900)',
      minWidth: 0
    }
  }));
}
Object.assign(__ds_scope, { PhoneInput });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/PhoneInput.jsx", error: String((e && e.message) || e) }); }

// components/forms/Tabs.jsx
try { (() => {
const {
  useState
} = React;
/**
 * Tabs — the segmented pill filter bar used to switch course categories
 * ("Популярні / Розробка / Дизайн / Маркетинг / Управління / Аналітика")
 * and project categories. Active tab is a solid dark pill; inactive tabs
 * are muted gray text with no visible background.
 */
function Tabs({
  items = [],
  value,
  onChange,
  trailing = null
}) {
  const [internal, setInternal] = useState(items[0]);
  const active = value !== undefined ? value : internal;
  const set = v => {
    if (onChange) onChange(v);else setInternal(v);
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 4,
      background: 'var(--surface-card)',
      borderRadius: 'var(--radius-pill)',
      padding: 6,
      boxShadow: 'var(--shadow-sm)',
      fontFamily: 'var(--font-sans)'
    }
  }, items.map(item => {
    const isActive = item === active;
    return /*#__PURE__*/React.createElement("button", {
      key: item,
      onClick: () => set(item),
      style: {
        border: 'none',
        cursor: 'pointer',
        borderRadius: 'var(--radius-pill)',
        padding: '10px 20px',
        font: isActive ? '600 15px var(--font-sans)' : '500 15px var(--font-sans)',
        background: isActive ? 'var(--ink-900)' : 'transparent',
        color: isActive ? '#fff' : 'var(--ink-500)',
        transition: 'background var(--duration-base) var(--ease-standard), color var(--duration-base) var(--ease-standard)'
      }
    }, item);
  }), trailing);
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Tabs.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Footer.jsx
try { (() => {
/**
 * Footer — full-bleed dark slate-navy band with three link columns
 * (Контакти, Курси, Корисні посилання), social icons, office hours/address,
 * and a centered copyright line.
 */
function Footer({
  columns = [],
  phone = '044 290 22 44',
  tollFree = '0 800 335 695',
  email = 'office@dan-it.com.ua',
  address = 'Україна, м. Київ, пр-т Павла Тичини, 1в,\nТОЦ «Silver Breeze», офіс А, 6-й поверх',
  hours = ['Пн-Пт 09:00-22:00', 'Сб-Вс 10:00-17:00'],
  year = new Date().getFullYear()
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--color-bg-footer)',
      borderRadius: 'var(--radius-2xl)',
      padding: '48px 48px 28px',
      color: 'rgba(255,255,255,0.85)',
      fontFamily: 'var(--font-sans)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 32,
      marginBottom: 32
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '700 16px var(--font-sans)',
      color: '#fff',
      marginBottom: 14
    }
  }, "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u0438"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-body)',
      marginBottom: 8
    }
  }, phone), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-body)',
      marginBottom: 14
    }
  }, tollFree, " ", /*#__PURE__*/React.createElement("span", {
    style: {
      opacity: 0.6
    }
  }, "(\u0414\u0437\u0432\u0456\u043D\u043A\u0438 \u0431\u0435\u0437\u043A\u043E\u0448\u0442\u043E\u0432\u043D\u0456)")), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-body)',
      marginBottom: 20
    }
  }, email), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10
    }
  }, ['f', 'in', 'ig', 'yt', 'tg', 'tt'].map(s => /*#__PURE__*/React.createElement("span", {
    key: s,
    style: {
      width: 32,
      height: 32,
      borderRadius: '50%',
      border: '1px solid rgba(255,255,255,0.3)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 12
    }
  }, s))), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '700 16px var(--font-sans)',
      color: '#fff',
      margin: '24px 0 10px'
    }
  }, "\u0413\u043E\u043B\u043E\u0432\u043D\u0438\u0439 \u043E\u0444\u0456\u0441"), hours.map(h => /*#__PURE__*/React.createElement("div", {
    key: h,
    style: {
      font: 'var(--text-body)',
      marginBottom: 4
    }
  }, h)), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-body)',
      whiteSpace: 'pre-line',
      marginTop: 8
    }
  }, address)), columns.map((col, i) => /*#__PURE__*/React.createElement("div", {
    key: i
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '700 16px var(--font-sans)',
      color: '#fff',
      marginBottom: 14
    }
  }, col.title), col.links.map(l => /*#__PURE__*/React.createElement("div", {
    key: l,
    style: {
      font: 'var(--text-body)',
      marginBottom: 12
    }
  }, l))))), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      paddingTop: 20,
      borderTop: '1px solid rgba(255,255,255,0.12)',
      font: 'var(--text-body-sm)'
    }
  }, "\xA9 ", year, " \u2014 DAN IT Education. \u0412\u0441\u0456 \u043F\u0440\u0430\u0432\u0430 \u0437\u0430\u0445\u0438\u0449\u0435\u043D\u043E. Dan-it.com.ua"));
}
Object.assign(__ds_scope, { Footer });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Footer.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Navbar.jsx
try { (() => {
/**
 * Navbar — sticky top nav: logo lockup + phone number on the left, a row
 * of text nav links (some with a dropdown chevron), an account icon and a
 * "UA" language switcher on the right. Floats slightly inset from the
 * page edge with a soft shadow and fully rounded corners.
 */
function Navbar({
  logo,
  phone = '067 501 82 12',
  phoneNote = 'ДЗВІНКИ БЕЗКОШТОВНІ',
  links = ['Курси', 'Для компаній', 'Заходи', 'Про нас', 'Контакти'],
  lang = 'UA'
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 24,
      background: '#fff',
      borderRadius: 'var(--radius-pill)',
      padding: '12px 20px',
      boxShadow: 'var(--shadow-md)',
      fontFamily: 'var(--font-sans)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 16
    }
  }, logo ? /*#__PURE__*/React.createElement("img", {
    src: logo,
    alt: "Logo",
    style: {
      height: 32
    }
  }) : /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 800,
      fontSize: 20
    }
  }, "DAN.IT"), /*#__PURE__*/React.createElement("div", {
    style: {
      lineHeight: 1.2
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '700 14px var(--font-sans)',
      color: 'var(--ink-900)'
    }
  }, phone), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '500 10px var(--font-sans)',
      color: 'var(--ink-300)',
      letterSpacing: '.02em'
    }
  }, phoneNote))), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 28
    }
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    style: {
      font: '500 15px var(--font-sans)',
      color: 'var(--ink-900)',
      textDecoration: 'none'
    }
  }, l))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 36,
      height: 36,
      borderRadius: '50%',
      border: '1.5px solid var(--color-border)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, "\uD83D\uDC64"), /*#__PURE__*/React.createElement("span", {
    style: {
      font: '600 14px var(--font-sans)',
      color: 'var(--ink-900)'
    }
  }, lang, " \u25BE")));
}
Object.assign(__ds_scope, { Navbar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Navbar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-website/sections/CareerPath.jsx
try { (() => {
const {
  LogoStrip,
  StepCard,
  PhoneInput,
  Button
} = window.DANITEducationDesignSystem_42c59b;
function Employers() {
  return /*#__PURE__*/React.createElement("section", {
    "data-screen-label": "Employers",
    style: {
      margin: '64px 48px 0'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      font: 'var(--text-h2)',
      textAlign: 'center',
      color: 'var(--ink-900)',
      margin: '0 0 24px'
    }
  }, "\u0422\u0443\u0442 \u043F\u0440\u0430\u0446\u044E\u044E\u0442\u044C \u043D\u0430\u0448\u0456 \u0432\u0438\u043F\u0443\u0441\u043A\u043D\u0438\u043A\u0438"), /*#__PURE__*/React.createElement(LogoStrip, {
    columns: 6,
    logos: [{
      name: 'IT Ukraine'
    }, {
      name: 'trinetix'
    }, {
      name: 'unitybars'
    }, {
      name: 'Terrasoft'
    }, {
      name: 'intetics'
    }, {
      name: 'SOFTELEGANCE'
    }]
  }));
}
function CareerPath() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      margin: '64px 48px 0',
      background: 'var(--purple-600)',
      borderRadius: 'var(--radius-2xl)',
      padding: '40px 48px'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      font: 'var(--text-h2)',
      color: '#fff',
      margin: '0 0 32px'
    }
  }, "\u0422\u0432\u0456\u0439 \u0448\u043B\u044F\u0445 \u0443 \u043D\u043E\u0432\u0443 \u043A\u0430\u0440'\u0454\u0440\u0443"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement(StepCard, {
    icon: "?",
    pill: "\u0421\u0442\u0430\u0440\u0442",
    title: "\u041A\u043E\u043D\u0441\u0443\u043B\u044C\u0442\u0430\u0446\u0456\u044F",
    description: "\u0412\u0438\u0437\u043D\u0430\u0447\u0430\u0454\u043C\u043E \u0432\u0430\u0448 \u043D\u0430\u043F\u0440\u044F\u043C\u043E\u043A"
  }), /*#__PURE__*/React.createElement(StepCard, {
    icon: "\uD83D\uDC64",
    pill: "\u041D\u0430\u0432\u0447\u0430\u043D\u043D\u044F",
    title: "\u041F\u0440\u0430\u043A\u0442\u0438\u043A\u0430",
    description: "\u0420\u0435\u0430\u043B\u044C\u043D\u0456 \u043F\u0440\u043E\u0454\u043A\u0442\u0438 \u0437 \u043C\u0435\u043D\u0442\u043E\u0440\u0430\u043C\u0438"
  }), /*#__PURE__*/React.createElement(StepCard, {
    icon: "\u2709",
    pill: "\u0420\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442",
    title: "\u041F\u043E\u0440\u0442\u0444\u043E\u043B\u0456\u043E",
    description: "\u0413\u043E\u0442\u043E\u0432\u0456 \u0440\u043E\u0431\u043E\u0442\u0438 \u0434\u043B\u044F \u0440\u043E\u0431\u043E\u0442\u043E\u0434\u0430\u0432\u0446\u044F"
  }), /*#__PURE__*/React.createElement(StepCard, {
    icon: "\uD83C\uDFAF",
    pill: "\u0426\u0456\u043B\u044C",
    title: "\u041D\u043E\u0432\u0430 \u043A\u0430\u0440'\u0454\u0440\u0430",
    description: "IT, Digital, \u0430\u0431\u043E AI \u043D\u0430\u043F\u0440\u044F\u043C\u043E\u043A",
    highlighted: true
  })));
}
function ConsultationCallout() {
  return /*#__PURE__*/React.createElement("section", {
    "data-screen-label": "Consultation",
    style: {
      margin: '48px 48px 0',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 24,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-h2)',
      color: 'var(--ink-900)',
      margin: 0
    }
  }, "\u041F\u043E\u043A\u0438 \u0442\u0438 \u0441\u0443\u043C\u043D\u0456\u0432\u0430\u0454\u0448\u0441\u044F \u0432 \u0441\u0432\u043E\u0457\u0445 \u0437\u0434\u0456\u0431\u043D\u043E\u0441\u0442\u044F\u0445, \u0456\u043D\u0448\u0456 \u043D\u0430\u0432\u0430\u0436\u0443\u044E\u0442\u044C\u0441\u044F \u0442\u0430 \u0434\u043E\u0441\u044F\u0433\u0430\u044E\u0442\u044C \u0443\u0441\u043F\u0456\u0445\u0443!")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 40,
      height: 40,
      borderRadius: '50%',
      background: 'var(--ink-900)',
      color: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, "\u23F0"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--text-body)',
      color: 'var(--ink-700)',
      margin: 0
    }
  }, "\u0414\u043E\u0441\u0438\u0442\u044C \u0432\u0456\u0434\u043A\u043B\u0430\u0434\u0430\u0442\u0438, \u0440\u043E\u0437\u043F\u043E\u0447\u043D\u0438 \u0432\u0436\u0435 \u0441\u044C\u043E\u0433\u043E\u0434\u043D\u0456.", /*#__PURE__*/React.createElement("br", null), "\u0417\u0430\u043F\u0438\u0441\u0443\u0439\u0441\u044F \u043D\u0430 \u043A\u043E\u043D\u0441\u0443\u043B\u044C\u0442\u0430\u0446\u0456\u044E")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement(PhoneInput, null)), /*#__PURE__*/React.createElement(Button, {
    variant: "primary"
  }, "\u0417\u0430\u043F\u0438\u0441\u0430\u0442\u0438\u0441\u044C"))));
}
window.Employers = Employers;
window.CareerPath = CareerPath;
window.ConsultationCallout = ConsultationCallout;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-website/sections/CareerPath.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-website/sections/CoursePicker.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  Tabs,
  Button,
  CourseCard
} = window.DANITEducationDesignSystem_42c59b;
const COURSES = [{
  startDate: 'Старт 26 грудня',
  duration: '3 місяці',
  title: 'Курси Graphic design',
  description: "Навчіться створювати круті креативи для реклами, оформляти соц.мережі та корпоративні презентації"
}, {
  startDate: 'Старт 26 грудня',
  duration: '3 місяці',
  categoryTag: 'Топ вибір',
  title: 'Курси IT recruiter',
  description: 'Практика з реальними кандидатами та стажування'
}, {
  startDate: 'Старт 26 грудня',
  duration: '3 місяці',
  title: 'Курс Java з нуля',
  description: 'Java, OOP, Algorithms, Spring, Hibernate'
}, {
  startDate: 'Старт 26 грудня',
  duration: '3 місяці',
  title: 'Курси Introduction to Python',
  description: 'Курс розробки на Пайтон з нуля'
}, {
  startDate: 'Старт 26 грудня',
  duration: '3 місяці',
  categoryTag: 'Новинка',
  title: 'Курси Front End',
  description: 'HTML, CSS, JavaScript, React.js, Redux, Node.js, Express.js'
}, {
  startDate: 'Старт 26 грудня',
  duration: '3 місяці',
  categoryTag: 'Хіт сезону',
  title: 'Курси Product owner',
  description: "Отримайте головне розуміння як управляти проєктом в IT"
}];
function CoursePicker() {
  return /*#__PURE__*/React.createElement("section", {
    "data-screen-label": "Course Picker",
    style: {
      margin: '64px 48px 0',
      background: 'var(--surface-tint)',
      borderRadius: 'var(--radius-2xl)',
      padding: 48
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      font: 'var(--text-h2)',
      textAlign: 'center',
      color: 'var(--ink-900)',
      margin: '0 0 24px'
    }
  }, "\u0412\u0438\u0431\u0435\u0440\u0438 \u0437\u0430\u0442\u0440\u0435\u0431\u0443\u0432\u0430\u043D\u0443 \u043F\u0440\u043E\u0444\u0435\u0441\u0456\u044E"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      marginBottom: 32
    }
  }, /*#__PURE__*/React.createElement(Tabs, {
    items: ['Популярні', 'Розробка', 'Дизайн', 'Маркетинг', 'Управління', 'Аналітика'],
    trailing: /*#__PURE__*/React.createElement(Button, {
      variant: "text",
      style: {
        padding: '10px 16px'
      }
    }, "\u0412\u0441\u0456 \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u0438 \u2197")
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 20
    }
  }, COURSES.map((c, i) => /*#__PURE__*/React.createElement(CourseCard, _extends({
    key: i
  }, c)))));
}
window.CoursePicker = CoursePicker;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-website/sections/CoursePicker.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-website/sections/EventsArticles.jsx
try { (() => {
const {
  EventCard,
  ArticleCard,
  CarouselControls,
  Badge
} = window.DANITEducationDesignSystem_42c59b;
function EventsSection() {
  return /*#__PURE__*/React.createElement("section", {
    "data-screen-label": "Events",
    style: {
      margin: '64px 48px 0'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      font: 'var(--text-h2)',
      textAlign: 'center',
      color: 'var(--ink-900)',
      margin: '0 0 32px'
    }
  }, "\u041D\u0430\u0439\u0431\u043B\u0438\u0436\u0447\u0456 \u0437\u0430\u0445\u043E\u0434\u0438"), /*#__PURE__*/React.createElement(EventCard, {
    badges: [{
      label: 'Офлайн-мітап',
      tone: 'sky'
    }, {
      label: '21 Лютого 11:00',
      tone: 'mint'
    }, {
      label: 'пр. П. Тичини 1В Silver Breeze',
      tone: 'lilac'
    }],
    title: "HR Meet Up \u2014 \u0423\u043F\u0440\u0430\u0432\u043B\u0456\u043D\u043D\u044F \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u043E\u043C \u0432 \u0443\u043C\u043E\u0432\u0430\u0445 \u0432\u0456\u0439\u043D\u0438 2025",
    description: "\u0420\u0435\u0454\u0441\u0442\u0440\u0443\u0439\u0441\u044F \u043D\u0430 \u043C\u0456\u0442\u0430\u043F \u0442\u0430 \u0434\u0456\u0437\u043D\u0430\u0439\u0441\u044F, \u044F\u043A \u0443\u0442\u0440\u0438\u043C\u0430\u0442\u0438 \u0442\u0430\u043B\u0430\u043D\u0442\u0438, \u043F\u0456\u0434\u0442\u0440\u0438\u043C\u0430\u0442\u0438 \u043A\u043E\u043C\u0430\u043D\u0434\u0443 \u0442\u0430 \u0430\u0434\u0430\u043F\u0442\u0443\u0432\u0430\u0442\u0438\u0441\u044F \u0434\u043E \u043D\u043E\u0432\u0438\u0445 \u0432\u0438\u043A\u043B\u0438\u043A\u0456\u0432."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 20
    }
  }, /*#__PURE__*/React.createElement(CarouselControls, {
    count: 3,
    active: 0
  })));
}
function ArticlesSection() {
  const topics = [{
    tag: 'HR',
    title: 'Як не загубитись у світі нових професій: гайд для тих, хто хоче знайти себе'
  }, {
    tag: 'HR',
    title: 'Очікування VS реальність: позиція рекрутера очима випускниці DAN.IT Education'
  }, {
    tag: 'AI',
    title: '10 AI-інструментів, які зроблять візуал за вас'
  }];
  return /*#__PURE__*/React.createElement("section", {
    "data-screen-label": "Articles",
    style: {
      margin: '64px 48px 0',
      background: 'var(--surface-tint)',
      borderRadius: 'var(--radius-2xl)',
      padding: 48
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      font: 'var(--text-h2)',
      textAlign: 'center',
      color: 'var(--ink-900)',
      margin: '0 0 32px'
    }
  }, "\u041A\u043E\u0440\u0438\u0441\u043D\u0456 \u0441\u0442\u0430\u0442\u0442\u0456 \u0442\u0430 \u043D\u043E\u0432\u0438\u043D\u0438"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 20
    }
  }, topics.map((t, i) => /*#__PURE__*/React.createElement("div", {
    key: i
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden',
      aspectRatio: '4/3',
      background: i === 1 ? '#1c5b9e' : 'var(--surface-card)',
      border: i === 1 ? 'none' : '1px solid var(--color-border)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '700 14px var(--font-sans)',
      color: i === 1 ? '#fff' : 'var(--ink-300)'
    }
  }, "\u0406\u043B\u044E\u0441\u0442\u0440\u0430\u0446\u0456\u044F \u2014 ", t.tag), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 12,
      right: 12
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "outline",
    size: "sm"
  }, t.tag))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      gap: 12,
      marginTop: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '700 16px/1.35 var(--font-sans)',
      color: 'var(--ink-900)'
    }
  }, t.title), /*#__PURE__*/React.createElement("span", {
    style: {
      flexShrink: 0,
      width: 36,
      height: 36,
      borderRadius: '50%',
      background: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, "\u2197"))))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 24
    }
  }, /*#__PURE__*/React.createElement(CarouselControls, {
    count: 3,
    active: 0
  })));
}
window.EventsSection = EventsSection;
window.ArticlesSection = ArticlesSection;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-website/sections/EventsArticles.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-website/sections/FAQSection.jsx
try { (() => {
const {
  Accordion
} = window.DANITEducationDesignSystem_42c59b;
function FAQSection() {
  return /*#__PURE__*/React.createElement("section", {
    "data-screen-label": "FAQ",
    style: {
      margin: '64px 48px 0'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      font: 'var(--text-h2)',
      textAlign: 'center',
      color: 'var(--ink-900)',
      margin: '0 0 24px'
    }
  }, "\u041F\u0438\u0442\u0430\u043D\u043D\u044F \u0449\u043E \u0447\u0430\u0441\u0442\u043E \u0432\u0438\u043D\u0438\u043A\u0430\u044E\u0442\u044C"), /*#__PURE__*/React.createElement(Accordion, {
    items: [{
      question: 'Якщо я не маю знань з програмування, чи підійдуть мені курси?',
      icon: '💬'
    }, {
      question: 'Чи потрібна технічна база для навчання?',
      icon: '💬',
      defaultOpen: true,
      answer: 'Cras diam mattis facilisis urna. Risus praesent suspendisse et maecenas rhoncus. Ultrices nullam ultricies sapien, sodales.'
    }, {
      question: 'Яка вартість та які є формати оплати?',
      icon: '💬'
    }, {
      question: 'Який напрям мені підійде, якщо я гуманітарій?',
      icon: '💬'
    }]
  }));
}
function MoreAbout() {
  return /*#__PURE__*/React.createElement("section", {
    "data-screen-label": "More About",
    style: {
      margin: '64px 48px 0',
      background: 'var(--surface-tint)',
      borderRadius: 'var(--radius-2xl)',
      padding: 48
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      font: 'var(--text-h2)',
      textAlign: 'center',
      color: 'var(--ink-900)',
      margin: '0 0 24px'
    }
  }, "\u0411\u0456\u043B\u044C\u0448\u0435 \u043F\u0440\u043E \u043D\u0430\u0432\u0447\u0430\u043D\u043D\u044F \u0432 DAN.IT"), /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      borderRadius: 'var(--radius-xl)',
      padding: 32
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--text-body)',
      color: 'var(--ink-500)',
      margin: '0 0 12px'
    }
  }, "Front end \u2013 \u044D\u0442\u043E \u043E\u0434\u043D\u043E \u0438\u0437 \u0441\u0430\u043C\u044B\u0445 \u043F\u043E\u043F\u0443\u043B\u044F\u0440\u043D\u044B\u0445 \u043D\u0430\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0439 \u0432 IT. \u0424\u0440\u043E\u043D\u0442\u0435\u043D\u0434 \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u0447\u0438\u043A\u0438 (\u0432\u0435\u0440\u0441\u0442\u0430\u043B\u044C\u0449\u0438\u043A) \u044F\u0432\u043B\u044F\u044E\u0442\u0441\u044F \u043D\u0435\u043E\u0442\u044A\u0435\u043C\u043B\u0435\u043C\u044B\u043C\u0438 \u0443\u0447\u0430\u0441\u0442\u043D\u0438\u043A\u0430\u043C\u0438 \u043B\u044E\u0431\u043E\u0439 \u043A\u043E\u043C\u0430\u043D\u0434\u044B, \u043A\u043E\u0442\u043E\u0440\u0430\u044F \u0437\u0430\u043D\u0438\u043C\u0430\u0435\u0442\u0441\u044F \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u043E\u0439 \u0432\u0435\u0431-\u0441\u0430\u0439\u0442\u043E\u0432, \u0432\u0435\u0431-\u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0439 \u0438\u043B\u0438 \u043B\u044E\u0431\u044B\u0445 \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u043E\u0432 \u0432 \u0432\u0435\u0431\u0435."), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--text-body)',
      color: 'var(--ink-300)',
      margin: '0 0 16px'
    }
  }, "\u041A\u0443\u0440\u0441\u044B \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F \u043F\u043E \u043D\u0430\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u044E Frontend \u0431\u0443\u0434\u0443\u0442 \u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u044B\u043C \u0440\u0435\u0448\u0435\u043D\u0438\u0435\u043C \u0434\u043B\u044F \u0442\u0435\u0445 \u043B\u044E\u0434\u0435\u0439, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u0445\u043E\u0442\u044F\u0442 \u043F\u0440\u0438\u0441\u043E\u0435\u0434\u0438\u043D\u0438\u0442\u044C\u0441\u044F \u043A IT-\u0438\u043D\u0434\u0443\u0441\u0442\u0440\u0438\u0438 \u0441\u043E \u0441\u0442\u043E\u0440\u043E\u043D\u044B web \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0438."), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      font: '600 14px var(--font-sans)',
      color: 'var(--purple-600)'
    }
  }, "\u0414\u0438\u0432\u0438\u0442\u0438\u0441\u044C \u0431\u0456\u043B\u044C\u0448\u0435 \u25BE")));
}
window.FAQSection = FAQSection;
window.MoreAbout = MoreAbout;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-website/sections/FAQSection.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-website/sections/FormatSection.jsx
try { (() => {
const {
  FormatCard,
  IconCircle
} = window.DANITEducationDesignSystem_42c59b;
function FormatSection() {
  return /*#__PURE__*/React.createElement("section", {
    "data-screen-label": "Format of Study",
    style: {
      margin: '64px 48px 0'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      font: 'var(--text-h2)',
      textAlign: 'center',
      color: 'var(--ink-900)',
      margin: '0 0 32px'
    }
  }, "\u041E\u0431\u0435\u0440\u0430\u0439 \u0432\u043B\u0430\u0441\u043D\u0438\u0439 \u0444\u043E\u0440\u043C\u0430\u0442 \u043D\u0430\u0432\u0447\u0430\u043D\u043D\u044F"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 24,
      alignItems: 'stretch'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(FormatCard, {
    tone: "lilac",
    icon: "\u25B6",
    title: "\u041D\u0430\u0432\u0447\u0430\u043D\u043D\u044F \u0443 \u0432\u043B\u0430\u0441\u043D\u043E\u043C\u0443 \u0442\u0435\u043C\u043F\u0456",
    description: "\u0412\u0447\u0456\u0442\u044C\u0441\u044F \u0431\u0435\u0437 \u043F\u0440\u0438\u0432'\u044F\u0437\u043A\u0438 \u0434\u043E \u0440\u043E\u0437\u043A\u043B\u0430\u0434\u0443, \u043A\u043E\u043B\u0438 \u0437\u0440\u0443\u0447\u043D\u043E. \u0423 \u0432\u0430\u0441 \u0431\u0443\u0434\u0443\u0442\u044C \u0433\u043E\u0442\u043E\u0432\u0456 \u0432\u0456\u0434\u0435\u043E\u0443\u0440\u043E\u043A\u0438, \u0434\u043E\u043C\u0430\u0448\u043D\u0456 \u0437\u0430\u0432\u0434\u0430\u043D\u043D\u044F \u0442\u0430 \u0437\u0432\u043E\u0440\u043E\u0442\u043D\u0438\u0439 \u0437\u0432'\u044F\u0437\u043E\u043A \u0432\u0456\u0434 \u043C\u0435\u043D\u0442\u043E\u0440\u0430."
  }), /*#__PURE__*/React.createElement(FormatCard, {
    tone: "mint",
    icon: "\uD83D\uDC65",
    title: "\u0413\u0440\u0443\u043F\u043E\u0432\u0456 \u0437\u0430\u043D\u044F\u0442\u0442\u044F \u0437 \u0432\u0438\u043A\u043B\u0430\u0434\u0430\u0447\u0435\u043C",
    description: "\u0421\u043F\u0456\u043B\u043A\u0443\u0432\u0430\u043D\u043D\u044F \u0432 \u0440\u0435\u0436\u0438\u043C\u0456 \u0440\u0435\u0430\u043B\u044C\u043D\u043E\u0433\u043E \u0447\u0430\u0441\u0443 \u0437 \u0432\u0456\u0434\u043F\u043E\u0432\u0456\u0434\u044F\u043C\u0438 \u043D\u0430 \u0432\u0441\u0456 \u0432\u0430\u0448\u0456 \u0437\u0430\u043F\u0438\u0442\u0430\u043D\u043D\u044F \u0442\u0430 \u0440\u043E\u0431\u043E\u0442\u043E\u044E \u043D\u0430\u0434 \u043F\u0440\u0430\u043A\u0442\u0438\u0447\u043D\u0438\u043C\u0438 \u043F\u0440\u043E\u0454\u043A\u0442\u0430\u043C\u0438 \u043F\u0440\u044F\u043C\u043E \u043D\u0430 \u0437\u0430\u043D\u044F\u0442\u0442\u044F\u0445."
  }), /*#__PURE__*/React.createElement(FormatCard, {
    tone: "sky",
    icon: "\uD83C\uDFA7",
    title: "\u0406\u043D\u0434\u0438\u0432\u0456\u0434\u0443\u0430\u043B\u044C\u043D\u043E \u0437 \u0432\u0438\u043A\u043B\u0430\u0434\u0430\u0447\u0435\u043C",
    description: "\u041F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u0438\u0439 \u0444\u043E\u0440\u043C\u0430\u0442 \u043D\u0430\u0432\u0447\u0430\u043D\u043D\u044F \u0443 \u0437\u0440\u0443\u0447\u043D\u043E\u043C\u0443 \u0434\u043B\u044F \u0432\u0430\u0441 \u0433\u0440\u0430\u0444\u0456\u043A\u0443 - \u043E\u043D\u043B\u0430\u0439\u043D \u0430\u0431\u043E \u043E\u0444\u043B\u0430\u0439\u043D, \u0437 \u0440\u043E\u0437\u0431\u043E\u0440\u0430\u043C\u0438 \u043C\u0430\u0442\u0435\u0440\u0456\u0430\u043B\u0443 \u0432\u0456\u0434 \u0432\u0438\u043A\u043B\u0430\u0434\u0430\u0447\u0430."
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      borderRadius: 'var(--radius-xl)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/reference/extracted/format-study-photo.jpg",
    alt: "",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 20,
      bottom: 20,
      background: '#fff',
      borderRadius: 'var(--radius-lg)',
      padding: 14,
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      boxShadow: 'var(--shadow-md)'
    }
  }, /*#__PURE__*/React.createElement(IconCircle, {
    size: 44
  }, "2+"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '700 15px var(--font-sans)',
      color: 'var(--ink-900)'
    }
  }, "\u0433\u043E\u0434\u0438\u043D\u0438"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-body-sm)',
      color: 'var(--ink-500)'
    }
  }, "\u043E\u043D\u043B\u0430\u0439\u043D \u0437\u0430\u043D\u044F\u0442\u0442\u044F"))))));
}
window.FormatSection = FormatSection;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-website/sections/FormatSection.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-website/sections/Hero.jsx
try { (() => {
const {
  Button,
  Badge,
  IconCircle,
  AvatarGroup
} = window.DANITEducationDesignSystem_42c59b;
function StatCard({
  tone,
  number,
  label,
  sub,
  avatars
}) {
  const tones = {
    lilac: 'var(--lilac-100)',
    yellow: 'var(--yellow-100)',
    mint: 'var(--mint-100)',
    sky: 'var(--sky-100)'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: tones[tone],
      borderRadius: 'var(--radius-xl)',
      padding: 20,
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      minWidth: 220
    }
  }, avatars ? /*#__PURE__*/React.createElement(AvatarGroup, {
    items: avatars,
    size: 44
  }) : /*#__PURE__*/React.createElement(IconCircle, {
    size: 56
  }, number), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '700 17px var(--font-sans)',
      color: 'var(--ink-900)'
    }
  }, avatars ? number : label), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-body-sm)',
      color: 'var(--ink-700)'
    }
  }, avatars ? label : sub)));
}
function Hero() {
  const avatarPhotos = [{
    src: '../../assets/reference/extracted/hero-avatar-1.jpg'
  }, {
    src: '../../assets/reference/extracted/hero-avatar-2.jpg'
  }];
  return /*#__PURE__*/React.createElement("section", {
    "data-screen-label": "Hero",
    style: {
      padding: '32px 48px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.3fr 1fr',
      gap: 32,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    style: {
      font: 'var(--text-h1)',
      color: 'var(--ink-900)',
      margin: '0 0 20px'
    }
  }, "DAN.IT \u2014 \u043E\u0441\u0432\u0456\u0442\u043D\u0456\u0439 \u0445\u0430\u0431", /*#__PURE__*/React.createElement("br", null), "IT \u0442\u0430 AI \u043F\u0440\u043E\u0444\u0435\u0441\u0456\u0439"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--text-body-lg)',
      color: 'var(--ink-700)',
      maxWidth: 520,
      margin: '0 0 28px'
    }
  }, "\u041E\u0431\u0438\u0440\u0430\u0439 \u0441\u0432\u043E\u044E \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u0443 \u043D\u0430\u0432\u0447\u0430\u043D\u043D\u044F, \u0437\u0434\u043E\u0431\u0443\u0432\u0430\u0439 \u0430\u043A\u0442\u0443\u0430\u043B\u044C\u043D\u0443 \u043F\u0440\u043E\u0444\u0435\u0441\u0456\u044E \u0442\u0430 \u043E\u0442\u0440\u0438\u043C\u0443\u0439 \u043C\u0430\u043A\u0441\u0438\u043C\u0443\u043C \u0432\u0456\u0434 \u0436\u0438\u0442\u0442\u044F \u0456 \u0432\u0456\u0434 \u043A\u0430\u0440'\u0454\u0440\u0438 \u0440\u0430\u0437\u043E\u043C \u0456\u0437 DAN. IT"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg"
  }, "\u041F\u0440\u043E\u0433\u0440\u0430\u043C\u0438 \u043D\u0430\u0432\u0447\u0430\u043D\u043D\u044F"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      textDecoration: 'none'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/icons/play-button.svg",
    alt: "",
    style: {
      width: 44,
      height: 44
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: '600 16px var(--font-sans)',
      color: 'var(--purple-600)'
    }
  }, "\u0412\u0456\u0434\u0433\u0443\u043A\u0438 \u0432\u0438\u043F\u0443\u0441\u043A\u043D\u0438\u043A\u0456\u0432")))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(StatCard, {
    tone: "lilac",
    number: "120+",
    label: "\u043A\u043E\u043C\u043F\u0430\u043D\u0456\u0439",
    sub: "\u043F\u0440\u0430\u0446\u0435\u0432\u043B\u0430\u0448\u0442\u0443\u0432\u0430\u043B\u0438 \u043D\u0430\u0448\u0438\u0445 \u0432\u0438\u043F\u0443\u0441\u043A\u043D\u0438\u043A\u0456\u0432"
  }), /*#__PURE__*/React.createElement(StatCard, {
    tone: "yellow",
    number: "20+",
    label: "\u043F\u0440\u043E\u0433\u0440\u0430\u043C",
    sub: "\u043F\u0456\u0434\u0433\u043E\u0442\u043E\u0432\u043A\u0438 IT \u0444\u0430\u0445\u0456\u0432\u0446\u0456\u0432"
  }), /*#__PURE__*/React.createElement(StatCard, {
    tone: "mint",
    number: "7+",
    label: "\u0440\u043E\u043A\u0456\u0432",
    sub: "\u043D\u0430 \u0440\u0438\u043D\u043A\u0443 \u0423\u043A\u0440\u0430\u0457\u043D\u0438"
  }), /*#__PURE__*/React.createElement(StatCard, {
    tone: "sky",
    number: "9 700+",
    label: "\u0432\u0438\u043F\u0443\u0441\u043A\u043D\u0438\u043A\u0456\u0432",
    avatars: avatarPhotos
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 20,
      marginTop: 40
    }
  }, [['hero-avatar-1.jpg', 'Ксенія Столбова', "Викладач курсу AI Tools — робота з нейромережами"], ['hero-avatar-2.jpg', 'Ірина Чиж', 'Викладач курсу Data Analyst'], ['hero-avatar-3.jpg', 'Сергій Коваленко', 'Викладач курсу UI/UX дизайн'], ['hero-avatar-4.jpg', 'Ольга Пантелеева', 'Викладач курсу Digital Marketing']].map(([img, name, role], i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      position: 'relative',
      borderRadius: 'var(--radius-xl)',
      overflow: 'hidden',
      aspectRatio: '280/300'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: `../../assets/reference/extracted/${img}`,
    alt: name,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(to top, rgba(0,0,0,0.65), transparent 55%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 16,
      right: 16,
      bottom: 14,
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '700 16px var(--font-sans)'
    }
  }, name), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-body-sm)',
      opacity: 0.9
    }
  }, role))))));
}
window.Hero = Hero;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-website/sections/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-website/sections/LeadFormCTA.jsx
try { (() => {
const {
  Input,
  PhoneInput,
  Button
} = window.DANITEducationDesignSystem_42c59b;
function LeadFormCTA() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      margin: '64px 48px 0',
      position: 'relative',
      background: 'var(--purple-600)',
      borderRadius: 'var(--radius-2xl)',
      padding: 48,
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 40,
      alignItems: 'center',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-h2)',
      color: '#fff',
      marginBottom: 16
    }
  }, "\u0420\u043E\u0437\u043F\u043E\u0447\u043D\u0438 \u0441\u0432\u0456\u0439 \u0448\u043B\u044F\u0445", /*#__PURE__*/React.createElement("br", null), "\u0432\u0436\u0435 \u0437\u0430\u0440\u0430\u0437!"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--text-body-lg)',
      color: 'rgba(255,255,255,0.85)',
      maxWidth: 380
    }
  }, "\u0420\u0435\u0454\u0441\u0442\u0440\u0443\u0439\u0441\u044F \u043D\u0430 \u043A\u043E\u043D\u0441\u0443\u043B\u044C\u0442\u0430\u0446\u0456\u044E \u0442\u0430 \u0437\u0440\u043E\u0431\u0438 \u043F\u0435\u0440\u0448\u0438\u0439 \u043A\u0440\u043E\u043A \u043D\u0430\u0437\u0443\u0441\u0442\u0440\u0456\u0447 \u043D\u043E\u0432\u0456\u0439 \u043F\u0440\u043E\u0444\u0435\u0441\u0456\u0457. \u041D\u0430\u0448 \u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440 \u0434\u043E\u043F\u043E\u043C\u043E\u0436\u0435 \u0442\u043E\u0431\u0456 \u043E\u0431\u0440\u0430\u0442\u0438 \u043D\u0430\u043F\u0440\u044F\u043C\u043E\u043A \u043D\u0430\u0432\u0447\u0430\u043D\u043D\u044F.")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      background: '#fff',
      borderRadius: 'var(--radius-xl)',
      padding: 28,
      boxShadow: 'var(--shadow-lg)',
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '700 16px var(--font-sans)',
      color: 'var(--ink-900)'
    }
  }, "\u0417\u0430\u043B\u0438\u0448\u0456\u0442\u044C \u0437\u0430\u044F\u0432\u043A\u0443 \u0442\u0430 \u043E\u0442\u0440\u0438\u043C\u0430\u0439\u0442\u0435 \u0434\u043E\u0441\u0442\u0443\u043F \u0434\u043E \u0440\u0435\u0441\u0443\u0440\u0441\u0456\u0432 \u043A\u043E\u043C'\u044E\u043D\u0456\u0442\u0456!"), /*#__PURE__*/React.createElement(Input, {
    placeholder: "\u0406\u043C'\u044F"
  }), /*#__PURE__*/React.createElement(PhoneInput, null), /*#__PURE__*/React.createElement(Input, {
    placeholder: "E-mail",
    type: "email"
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    style: {
      width: '100%'
    }
  }, "\u0417\u0430\u043F\u0438\u0441\u0430\u0442\u0438\u0441\u044C"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-body-sm)',
      color: 'var(--ink-500)',
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", null, "\u2713"), " \u0420\u0435\u0454\u0441\u0442\u0440\u0443\u044E\u0447\u0438\u0441\u044C, \u044F \u043F\u043E\u0433\u043E\u0434\u0436\u0443\u044E\u0441\u044C \u0437 ", /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: 'var(--color-text-link)'
    }
  }, "\u043F\u043E\u043B\u0456\u0442\u0438\u043A\u043E\u044E \u043F\u0440\u0438\u0432\u0430\u0442\u043D\u043E\u0441\u0442\u0456"))));
}
window.LeadFormCTA = LeadFormCTA;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-website/sections/LeadFormCTA.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-website/sections/Portfolio.jsx
try { (() => {
const {
  Tabs,
  Button
} = window.DANITEducationDesignSystem_42c59b;
function ProjectPlaceholder({
  tone,
  title,
  meta
}) {
  const tones = {
    dark: '#1c1c24',
    lilac: 'var(--lilac-100)'
  };
  const isDark = tone === 'dark';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      borderRadius: 'var(--radius-xl)',
      boxShadow: 'var(--shadow-card)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: '16/10',
      background: isDark ? tones.dark : tones.lilac,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '700 20px var(--font-sans)',
      color: isDark ? 'rgba(255,255,255,0.5)' : 'rgba(0,0,0,0.35)'
    }
  }, title)), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 16,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-body-sm)',
      color: 'var(--ink-500)'
    }
  }, meta), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 32,
      height: 32,
      borderRadius: '50%',
      background: 'var(--surface-tint)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, "\u2197")));
}
function Portfolio() {
  return /*#__PURE__*/React.createElement("section", {
    "data-screen-label": "Portfolio",
    style: {
      margin: '64px 48px 0',
      background: 'var(--surface-tint)',
      borderRadius: 'var(--radius-2xl)',
      padding: 48
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      font: 'var(--text-h2)',
      textAlign: 'center',
      color: 'var(--ink-900)',
      margin: '0 0 24px'
    }
  }, "\u0429\u043E \u0442\u0438 \u0437\u043C\u043E\u0436\u0435\u0448 \u0441\u0442\u0432\u043E\u0440\u044E\u0432\u0430\u0442\u0438"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      marginBottom: 32
    }
  }, /*#__PURE__*/React.createElement(Tabs, {
    items: ['Розробка', 'Маркетинг', 'Аналітика', 'Управління', 'Дизайн'],
    trailing: /*#__PURE__*/React.createElement(Button, {
      variant: "text",
      style: {
        padding: '10px 16px'
      }
    }, "\u0412\u0441\u0456 \u043F\u0440\u043E\u0454\u043A\u0442\u0438 \u2197")
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement(ProjectPlaceholder, {
    tone: "dark",
    title: "MINI COOPER",
    meta: "Landing page \u2014 Julia Borozenets"
  }), /*#__PURE__*/React.createElement(ProjectPlaceholder, {
    tone: "dark",
    title: "\u041C\u043E\u0454 \u0431\u0430\u0447\u0435\u043D\u043D\u044F \u0441\u0430\u0439\u0442\u0443",
    meta: "Case study"
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      textAlign: 'center',
      font: 'var(--text-body-sm)',
      color: 'var(--ink-300)',
      marginTop: 16
    }
  }, "\u26A0 real project screenshots not cleanly extractable at this pass \u2014 placeholders shown, swap in real thumbnails"));
}
window.Portfolio = Portfolio;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-website/sections/Portfolio.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-website/sections/PurpleCTA.jsx
try { (() => {
const {
  Button
} = window.DANITEducationDesignSystem_42c59b;
function PurpleCTA({
  eyebrow,
  title,
  note,
  ctaLabel
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      margin: '64px 48px 0',
      position: 'relative',
      background: 'var(--purple-600)',
      borderRadius: 'var(--radius-2xl)',
      padding: 48,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/patterns/decorative-pattern.svg",
    alt: "",
    style: {
      position: 'absolute',
      right: -40,
      top: '50%',
      transform: 'translateY(-50%)',
      height: '150%',
      opacity: 0.9,
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      maxWidth: 640
    }
  }, eyebrow && /*#__PURE__*/React.createElement("div", {
    style: {
      font: '700 14px var(--font-sans)',
      color: 'rgba(255,255,255,0.85)',
      marginBottom: 14
    }
  }, eyebrow), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-h2)',
      color: '#fff',
      marginBottom: 16
    }
  }, title), note && /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--text-body-lg)',
      color: 'rgba(255,255,255,0.85)',
      margin: '0 0 24px'
    }
  }, note), /*#__PURE__*/React.createElement(Button, {
    variant: "primary"
  }, ctaLabel)));
}
window.PurpleCTA = PurpleCTA;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-website/sections/PurpleCTA.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-website/sections/Stories.jsx
try { (() => {
const {
  TestimonialCard,
  CarouselControls
} = window.DANITEducationDesignSystem_42c59b;
function Stories() {
  return /*#__PURE__*/React.createElement("section", {
    "data-screen-label": "Graduate Stories",
    style: {
      margin: '64px 48px 0',
      background: 'var(--surface-tint)',
      borderRadius: 'var(--radius-2xl)',
      padding: 48
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      font: 'var(--text-h2)',
      textAlign: 'center',
      color: 'var(--ink-900)',
      margin: '0 0 32px'
    }
  }, "\u0406\u0441\u0442\u043E\u0440\u0456\u0457 \u043D\u0430\u0448\u0438\u0445 \u0432\u0438\u043F\u0443\u0441\u043A\u043D\u0438\u043A\u0456\u0432"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 20,
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement(TestimonialCard, {
    tone: "mint",
    photo: "../../assets/reference/extracted/story-photo-1.jpg",
    quote: "\u041D\u0435 \u0431\u0456\u0439\u0441\u044F \u0437\u0440\u043E\u0431\u0438\u0442\u0438 \u043A\u0440\u043E\u043A \u0443 \u043D\u0435\u0432\u0456\u0434\u043E\u043C\u0456\u0441\u0442\u044C!",
    body: "\u041A\u0441\u0435\u043D\u0456\u044F \u043C\u0430\u043B\u0430 \u0447\u0456\u0442\u043A\u0438\u0439 \u043F\u043B\u0430\u043D \u0434\u0456\u0439 \u2014 \u043E\u0442\u0440\u0438\u043C\u0430\u0442\u0438 \u0447\u0435\u0440\u0432\u043E\u043D\u0438\u0439 \u0434\u0438\u043F\u043B\u043E\u043C \u0442\u0430 \u0440\u043E\u0437\u0432\u0438\u0432\u0430\u0442\u0438\u0441\u044F \u0443 \u0441\u0444\u0435\u0440\u0456 IT, \u0430\u043B\u0435 \u0437\u0433\u043E\u0434\u043E\u043C \u0432\u043E\u043D\u0430 \u0437\u0440\u043E\u0437\u0443\u043C\u0456\u043B\u0430, \u0449\u043E \u0442\u0435\u0445\u043D\u0456\u0447\u043D\u0430 \u0441\u043F\u0435\u0446\u0456\u0430\u043B\u044C\u043D\u0456\u0441\u0442\u044C \u0442\u043E\u0447\u043D\u043E \u043D\u0435 \u0434\u043B\u044F \u043D\u0435\u0457 \u0439 \u043E\u0431\u0440\u0430\u043B\u0430 \u0440\u0435\u043A\u0440\u0443\u0442\u0438\u043D\u0433.",
    name: "\u041A\u0441\u0435\u043D\u0456\u044F \u0421\u0430\u0431\u0456\u0440\u043E\u0432\u0430",
    role: "HR-\u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440 \u0442\u0430 \u0440\u0435\u043A\u0440\u0443\u0442\u0435\u0440, \u0432\u0438\u043F\u0443\u0441\u043A\u043D\u0438\u0446\u044F \u043A\u0443\u0440\u0441\u0443 IT Recruiter"
  }), /*#__PURE__*/React.createElement(TestimonialCard, {
    tone: "lilac",
    photo: "../../assets/reference/extracted/story-photo-2.jpg",
    quote: "\u041D\u0456\u043A\u043E\u043B\u0438 \u043D\u0435 \u043F\u043E\u0440\u0456\u0432\u043D\u044E\u0439\u0442\u0435 \u0441\u0435\u0431\u0435 \u0437 \u0456\u043D\u0448\u0438\u043C\u0438",
    body: "\u0414\u0456\u0430\u043D\u0430 \u043D\u0435 \u043F\u043E\u0431\u043E\u044F\u043B\u0430\u0441\u044C \u043F\u043E\u043A\u0438\u043D\u0443\u0442\u0438 \u0437\u043E\u043D\u0443 \u043A\u043E\u043C\u0444\u043E\u0440\u0442\u0443 \u0442\u0430 \u0441\u0442\u0430\u0431\u0456\u043B\u044C\u043D\u0443 \u0440\u043E\u0431\u043E\u0442\u0443 \u0437\u0430\u0440\u0430\u0434\u0438 \u0440\u0435\u0430\u043B\u0456\u0437\u0430\u0446\u0456\u0457 \u0441\u0432\u043E\u0433\u043E \u0442\u0432\u043E\u0440\u0447\u043E\u0433\u043E \u043F\u043E\u0442\u0435\u043D\u0446\u0456\u0430\u043B\u0443 \u0456 \u043F\u0456\u0434 \u0447\u0430\u0441 \u043F\u043E\u0432\u043D\u043E\u043C\u0430\u0441\u0448\u0442\u0430\u0431\u043D\u043E\u0433\u043E \u0432\u0442\u043E\u0440\u0433\u043D\u0435\u043D\u043D\u044F \u0432\u0438\u0440\u0456\u0448\u0438\u043B\u0430 \u043F\u043E\u0432\u043D\u0456\u0441\u0442\u044E \u0437\u043C\u0456\u043D\u0438\u0442\u0438 \u0441\u0444\u0435\u0440\u0443 \u0434\u0456\u044F\u043B\u044C\u043D\u043E\u0441\u0442\u0456.",
    name: "\u0414\u0456\u0430\u043D\u0430 \u0421\u0438\u0434\u043E\u0440\u0435\u043D\u043A\u043E",
    role: "UX/UI-\u0434\u0438\u0437\u0430\u0439\u043D\u0435\u0440, \u0432\u0438\u043F\u0443\u0441\u043A\u043D\u0438\u0446\u044F \u043A\u0443\u0440\u0441\u0443 UX/UI-\u0434\u0438\u0437\u0430\u0439\u043D\u0443"
  })), /*#__PURE__*/React.createElement(CarouselControls, {
    count: 3,
    active: 0
  }));
}
function PressMentions() {
  return /*#__PURE__*/React.createElement("section", {
    "data-screen-label": "Press",
    style: {
      margin: '64px 48px 0'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      font: 'var(--text-h2)',
      textAlign: 'center',
      color: 'var(--ink-900)',
      margin: '0 0 32px'
    }
  }, "\u041F\u0440\u043E \u043D\u0430\u0441 \u0433\u043E\u0432\u043E\u0440\u044F\u0442\u044C"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 20
    }
  }, [['about-says-1.jpg', "CEO DAN.IT education розповіла про дискримінацію при пошуку роботи"], ['about-says-2.jpg', 'Я не хочу, щоб людей судили за віком. І буду про це невпинно писати'], ['about-says-3.jpg', 'Співпраця з Європейським університетом']].map(([img, title], i) => /*#__PURE__*/React.createElement("div", {
    key: i
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden',
      aspectRatio: '4/2.2'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: `../../assets/reference/extracted/${img}`,
    alt: "",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      gap: 10,
      marginTop: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '700 15px/1.35 var(--font-sans)',
      color: 'var(--ink-900)'
    }
  }, title), /*#__PURE__*/React.createElement("span", {
    style: {
      flexShrink: 0,
      width: 32,
      height: 32,
      borderRadius: '50%',
      background: 'var(--surface-tint)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, "\u2197"))))));
}
window.Stories = Stories;
window.PressMentions = PressMentions;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-website/sections/Stories.jsx", error: String((e && e.message) || e) }); }

__ds_ns.ArticleCard = __ds_scope.ArticleCard;

__ds_ns.CourseCard = __ds_scope.CourseCard;

__ds_ns.EventCard = __ds_scope.EventCard;

__ds_ns.FormatCard = __ds_scope.FormatCard;

__ds_ns.StepCard = __ds_scope.StepCard;

__ds_ns.TestimonialCard = __ds_scope.TestimonialCard;

__ds_ns.AvatarGroup = __ds_scope.AvatarGroup;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.IconCircle = __ds_scope.IconCircle;

__ds_ns.LogoStrip = __ds_scope.LogoStrip;

__ds_ns.CarouselControls = __ds_scope.CarouselControls;

__ds_ns.AccordionItem = __ds_scope.AccordionItem;

__ds_ns.Accordion = __ds_scope.Accordion;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.PhoneInput = __ds_scope.PhoneInput;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.Footer = __ds_scope.Footer;

__ds_ns.Navbar = __ds_scope.Navbar;

})();

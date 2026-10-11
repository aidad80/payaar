import { useEffect, useLayoutEffect, useRef } from "react";

const REDUCE_MOTION = "(prefers-reduced-motion: reduce)";

function canAnimate() {
  return (
    typeof window !== "undefined" &&
    "IntersectionObserver" in window &&
    !window.matchMedia(REDUCE_MOTION).matches
  );
}

// یک Observer مشترک برای کل سایت (بدون Observer تکراری)
const handlers = new WeakMap();
let observer = null;

function getObserver() {
  if (observer) return observer;
  const isMobile = window.matchMedia("(max-width: 768px)").matches;
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        handlers.get(entry.target)?.();
        observer.unobserve(entry.target);
        handlers.delete(entry.target);
      });
    },
    // موبایل: زودتر فعال می‌شود؛ دسکتاپ: وقتی کمی وارد دید شد
    { threshold: 0, rootMargin: isMobile ? "0px 0px -5% 0px" : "0px 0px -10% 0px" }
  );
  return observer;
}

/**
 * عنصر را با همان تگ و className قبلی رندر می‌کند (بدون wrapper اضافه)
 * و هنگام ورود به دید، با fade + حرکت ملایم نمایش می‌دهد.
 *
 * direction: "up" | "left" | "right"
 * delay: تأخیر به میلی‌ثانیه (برای ظاهر شدن مرحله‌ای کارت‌ها)
 */
export default function Reveal({
  as: Tag = "div",
  direction = "up",
  delay = 0,
  className = "",
  style,
  children,
  ...rest
}) {
  const ref = useRef(null);

  // قبل از اولین paint، تا عناصر یک لحظه چشمک نزنند
  useLayoutEffect(() => {
    if (canAnimate()) {
      document.documentElement.classList.add("reveal-ready");
    }
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // بدون پشتیبانی یا با reduced-motion: محتوا بلافاصله دیده می‌شود
    if (!canAnimate()) {
      el.setAttribute("data-visible", "");
      return;
    }

    const io = getObserver();
    handlers.set(el, () => el.setAttribute("data-visible", ""));
    io.observe(el);

    return () => {
      io.unobserve(el);
      handlers.delete(el);
    };
  }, []);

  return (
    <Tag
      ref={ref}
      className={`reveal ${className}`.trim()}
      data-reveal={direction}
      style={delay ? { "--reveal-delay": `${delay}ms`, ...style } : style}
      {...rest}
    >
      {children}
    </Tag>
  );
}

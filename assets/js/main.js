/* 陈艺 JC · 个人品牌页 */
(function () {
  "use strict";

  /* ---------- 复制微信号 ---------- */
  var toast = document.getElementById("toast");
  var toastTimer = null;

  function showToast(msg) {
    if (!toast) return;
    toast.textContent = msg;
    toast.classList.add("is-on");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () {
      toast.classList.remove("is-on");
    }, 2400);
  }

  function copyText(text) {
    // 优先使用剪贴板 API，失败时退回到隐藏输入框
    if (navigator.clipboard && window.isSecureContext) {
      return navigator.clipboard.writeText(text);
    }
    return new Promise(function (resolve, reject) {
      var ta = document.createElement("textarea");
      ta.value = text;
      ta.setAttribute("readonly", "");
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.select();
      try {
        var ok = document.execCommand("copy");
        document.body.removeChild(ta);
        ok ? resolve() : reject(new Error("copy failed"));
      } catch (e) {
        document.body.removeChild(ta);
        reject(e);
      }
    });
  }

  document.querySelectorAll("[data-copy]").forEach(function (el) {
    el.addEventListener("click", function () {
      var text = el.getAttribute("data-copy");
      copyText(text).then(
        function () { showToast("微信号已复制，去微信搜索添加"); },
        function () { showToast("复制失败，请长按号码手动复制"); }
      );
    });
  });

  /* ---------- 滚动淡入 ---------- */
  var targets = document.querySelectorAll(
    ".stats li, .about__text, .about__photo, .belief blockquote, .belief__note, " +
    ".item, .card, .timeline li, .off__text, .contact h2, .contact__rows, " +
    ".contact__tip, .contact__hello, .label"
  );
  targets.forEach(function (el, i) {
    el.classList.add("reveal");
    el.style.setProperty("--d", Math.min((i % 4) * 0.06, 0.18) + "s");
  });

  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-in");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    targets.forEach(function (el) { io.observe(el); });
  } else {
    targets.forEach(function (el) { el.classList.add("is-in"); });
  }
})();

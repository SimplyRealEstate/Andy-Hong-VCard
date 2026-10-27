/* Shared template — builds the card from window.AGENT. No need to edit per agent. */
(function () {
  var A = window.AGENT, card = document.getElementById("card");

  function el(tag, attrs, kids) {
    var n = document.createElement(tag);
    for (var k in attrs || {}) {
      if (k === "text") n.textContent = attrs[k]; else n.setAttribute(k, attrs[k]);
    }
    (kids || []).forEach(function (c) { if (c) n.appendChild(c); });
    return n;
  }
  function icon(name) { return el("span", { "class": "ic", style: "--i:url(icons/" + name + ".svg)", "aria-hidden": "true" }); }
  function ext(url) { return { href: url, target: "_blank", rel: "noopener" }; }
  function btn(cls, href, ic, label, extra) {
    var a = el("a", Object.assign({ "class": "btn " + cls, href: href }, extra || {}), [icon(ic), el("span", { text: label })]);
    return a;
  }
  var map = A.addresses.filter(function (x) { return x.mapUrl; })[0];

  var photo = el("picture", {}, [
    el("source", { srcset: A.photo, type: "image/webp" }),
    el("img", { src: A.photoFallback, alt: "Photo of " + A.name, width: "720", height: "833", "class": "photo" })
  ]);

  [
    el("header", { "class": "brand" }, [el("img", { src: "logo.svg", alt: A.company + " logo", "class": "logo" })]),
    el("section", { "class": "hero" }, [
      photo
    ]),
    el("section", { "class": "who" }, [
      el("h1", {}, [document.createTextNode(A.name + " "), el("span", { "class": "ko", lang: "ko", text: A.nameKo })]),
      el("p", { "class": "role", text: A.title + " · " + A.company }),
      A.message ? el("p", { "class": "msg", text: A.message }) : null
    ]),
    el("nav", { "class": "actions", "aria-label": "Contact actions" }, [
      btn("primary wide", A.addContactUrl, "user-plus", "Add Contact"),
      btn("solid", A.callHref, "phone", "Call"),
      btn("solid", A.emailHref, "mail", "Email"),
      el("div", { "class": "minor" }, [
        btn("ghost", A.smsHref, "message-circle", "Text"),
        btn("ghost", A.website.url, "globe", "Website", ext(A.website.url)),
        map ? btn("ghost", map.mapUrl, "map-pin", "Map", ext(map.mapUrl)) : null
      ])
    ]),
    A.social.length ? el("nav", { "class": "social", "aria-label": "Social media" }, A.social.map(function (s) {
      return el("a", Object.assign({ "class": "soc", "aria-label": A.company + " on " + s.name }, ext(s.url)), [icon(s.icon)]);
    })) : null
  ].forEach(function (n) { card.appendChild(n); });
})();

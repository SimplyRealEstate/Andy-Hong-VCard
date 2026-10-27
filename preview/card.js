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
  function icon(name) { return el("span", { "class": "ic ic-" + name, "aria-hidden": "true" }); }
  function ext(url) { return { href: url, target: "_blank", rel: "noopener" }; }
  function btn(cls, href, ic, label, extra) {
    var a = el("a", Object.assign({ "class": "btn " + cls, href: href }, extra || {}), [icon(ic), el("span", { text: label })]);
    return a;
  }
  function row(href, ic, label, value, extra) {
    var inner = [icon(ic), el("span", { "class": "row-txt" }, [el("small", { text: label }), el("span", { text: value })])];
    return href ? el("a", Object.assign({ "class": "row", href: href }, extra || {}), inner)
                : el("div", { "class": "row" }, inner);
  }
  var map = A.addresses.filter(function (x) { return x.mapUrl; })[0];

  var photo = el("picture", {}, [
    el("source", { srcset: A.photo, type: "image/webp" }),
    el("img", { src: A.photoFallback, alt: "Photo of " + A.name, width: "400", height: "400", "class": "photo" })
  ]);

  var tabs = [
    ["Contact", [
      row(A.mobile.href, "phone", A.mobile.label, A.mobile.display),
      row(A.office.href, "phone", A.office.label, A.office.display),
      row(A.emailHref, "mail", A.email.label, A.email.display)
    ]],
    ["Offices", A.addresses.map(function (x) {
      return row(x.mapUrl, "map-pin", x.label, x.text, x.mapUrl ? ext(x.mapUrl) : null);
    })],
    ["About", [
      el("ul", { "class": "chips", "aria-label": "Services" }, A.services.map(function (s) { return el("li", { text: s }); })),
      row(A.website.url, "globe", A.website.label, A.website.display, ext(A.website.url)),
      row(A.officeSite.url, "globe", A.officeSite.label, A.officeSite.display, ext(A.officeSite.url))
    ]]
  ];
  var tabBox = el("section", { "class": "tabs", "aria-label": "Details" });
  tabs.forEach(function (t, i) {
    var r = el("input", { type: "radio", name: "tab", id: "tab" + i, "class": "tab-radio" });
    if (i === 0) r.checked = true;
    tabBox.appendChild(r);
  });
  tabBox.appendChild(el("div", { "class": "tab-list" }, tabs.map(function (t, i) { return el("label", { "for": "tab" + i, text: t[0] }); })));
  tabBox.appendChild(el("div", { "class": "panels" }, tabs.map(function (t, i) { return el("div", { "class": "panel p" + i }, t[1]); })));

  [
    el("header", { "class": "brand" }, [el("img", { src: "logo.svg", alt: A.company + " logo", "class": "logo" })]),
    el("section", { "class": "hero" }, [
      photo,
      el("div", { "class": "who" }, [
        el("h1", { text: A.name }),
        el("p", { "class": "ko", lang: "ko", text: A.nameKo }),
        el("p", { "class": "role", text: A.title }),
        el("p", { "class": "co", text: A.company })
      ])
    ]),
    el("p", { "class": "tagline", text: A.tagline }),
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
    tabBox,
    el("nav", { "class": "social", "aria-label": "Social media" }, A.social.map(function (s) {
      return el("a", Object.assign({ "class": "soc", "aria-label": A.company + " on " + s.name }, ext(s.url)), [icon(s.icon)]);
    }))
  ].forEach(function (n) { card.appendChild(n); });
})();

window.FALLES360_WAITLIST = Object.assign(
  {
    endpoint: "",
    countEndpoint: "",
    initialCount: 0,
    payloadFormat: "json",
    source: "github_pages_whitelist",
    privacyHref: "./privacy.html",
    landingHref: "./index.html",
    successTitle: "Ya estas dentro.",
    successMessage: "Te avisaremos antes que nadie cuando abramos el acceso anticipado.",
  },
  window.FALLES360_WAITLIST || {},
);

// Si la pagina se publica en GitHub Pages, sobrescribe al menos:
// - endpoint
// - countEndpoint
// con la URL completa de tu API externa.

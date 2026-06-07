window.FALLES360_WAITLIST = Object.assign(
  {
    endpoint: "https://formsubmit.co/ajax/info.falles360@gmail.com",
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

// FormSubmit envia cada solicitud por email sin necesitar PHP ni base de datos.

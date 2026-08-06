/* Rastreamento de acessos do evento Renovamente.
   Envia visualizações e eventos para a função renov-track (Supabase). */
(function () {
  var ENDPOINT = "https://rklhlorhfgpueffsqfod.supabase.co/functions/v1/renov-track";
  var APIKEY = "sb_publishable_BAkREDMOBuQjwfGDWEtAkQ_bx_xAoud";

  function send(event, meta) {
    try {
      var body = JSON.stringify({
        path: location.pathname,
        referrer: document.referrer || "",
        ua: navigator.userAgent,
        event: event || "view",
        meta: meta || null
      });
      fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", "apikey": APIKEY },
        body: body,
        keepalive: true,
        mode: "cors"
      }).catch(function () {});
    } catch (e) { /* silencioso */ }
  }

  window.renovTrack = send;
  // Registra a visualização da página
  send("view");
})();

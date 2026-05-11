import React, { useEffect } from "react";
import { LEGAL, BRAND } from "../constants";
import { X as XIcon } from "../components/icons";

// ─── Legal styles ─────────────────────────────────────────────────────
const ls = {
  h2: { color: BRAND.mint, fontSize: 15, fontWeight: 800, marginTop: 28, marginBottom: 8, letterSpacing: "-0.01em", fontFamily: "DM Sans, sans-serif" },
  h3: { color: "#FCFFFE", fontSize: 13, fontWeight: 700, marginTop: 18, marginBottom: 6, fontFamily: "DM Sans, sans-serif" },
  p: { color: "rgba(252,255,254,0.68)", fontSize: 13, lineHeight: 1.75, margin: "0 0 10px", fontFamily: "Roboto, sans-serif" },
  li: { color: "rgba(252,255,254,0.68)", fontSize: 13, lineHeight: 1.75, marginBottom: 4, fontFamily: "Roboto, sans-serif" },
  date: { color: "rgba(252,255,254,0.38)", fontSize: 12, marginBottom: 20, display: "block", fontFamily: "DM Sans, sans-serif", letterSpacing: "0.05em" },
  link: { color: BRAND.mint, textDecoration: "none" },
  table: { width: "100%", borderCollapse: "collapse", marginBottom: 16, fontSize: 12 },
  th: { color: BRAND.mint, fontWeight: 700, padding: "8px 10px", borderBottom: "1px solid rgba(99,215,177,0.2)", textAlign: "left", fontFamily: "DM Sans, sans-serif" },
  td: { color: "rgba(252,255,254,0.65)", padding: "8px 10px", borderBottom: "1px solid rgba(255,255,255,0.06)", verticalAlign: "top", fontFamily: "Roboto, sans-serif" },
};

function Section({ title, children }) {
  return (<><h2 style={ls.h2}>{title}</h2>{children}</>);
}

// ─── Privacy ──────────────────────────────────────────────────────────
function PrivacyPolicy() {
  return (
    <div>
      <span style={ls.date}>Última actualización: mayo de 2025 · Versión 1.0</span>
      <p style={ls.p}>En <strong style={{ color: "#FCFFFE" }}>VROCHE APP S.L.</strong> (en adelante, «Vroche») tratamos tus datos personales con total transparencia y en cumplimiento del <strong style={{ color: "#FCFFFE" }}>Reglamento (UE) 2016/679 (RGPD)</strong> y la <strong style={{ color: "#FCFFFE" }}>Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y garantía de los derechos digitales (LOPDGDD)</strong>.</p>

      <Section title="1. Responsable del tratamiento">
        <table style={ls.table}>
          <tbody>
            {[
              ["Denominación social", LEGAL.company],
              ["CIF", LEGAL.cif],
              ["Domicilio social", LEGAL.address],
              ["Correo de contacto", LEGAL.email],
              ["DPO / Delegado de protección", LEGAL.dpo_email],
            ].map(([k, v]) => (
              <tr key={k}>
                <td style={{ ...ls.td, fontWeight: 600, color: "rgba(252,255,254,0.85)", width: "42%" }}>{k}</td>
                <td style={ls.td}>{v}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Section>

      <Section title="2. Datos que recogemos y finalidades">
        <table style={ls.table}>
          <thead>
            <tr>
              <th style={ls.th}>Dato</th>
              <th style={ls.th}>Finalidad</th>
              <th style={ls.th}>Base legal</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Nombre y correo electrónico", "Gestión de acceso beta / waitlist y comunicaciones sobre el servicio", "Consentimiento (art. 6.1.a RGPD)"],
              ["Número de teléfono", "Comunicación directa y soporte durante la beta", "Consentimiento (art. 6.1.a RGPD)"],
              ["Fotografías / imágenes", "Funcionalidad de virtual try-on (prueba de prendas sobre tu imagen)", "Consentimiento explícito (art. 9 RGPD, datos biométricos)"],
              ["Medidas corporales y talla", "Recomendaciones de estilo personalizadas", "Consentimiento (art. 6.1.a RGPD)"],
              ["Perfil de estilo y preferencias", "Personalización de la experiencia AI Stylist", "Consentimiento (art. 6.1.a RGPD)"],
              ["Login social (Google, Apple)", "Autenticación en la aplicación", "Ejecución de contrato (art. 6.1.b RGPD)"],
              ["Datos de navegación / cookies", "Análisis estadístico del uso de la web (Google Analytics)", "Consentimiento (art. 6.1.a RGPD)"],
            ].map(([dato, fin, base]) => (
              <tr key={dato}>
                <td style={{ ...ls.td, fontWeight: 600, color: "rgba(252,255,254,0.85)" }}>{dato}</td>
                <td style={ls.td}>{fin}</td>
                <td style={ls.td}>{base}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p style={{ ...ls.p, borderLeft: `3px solid ${BRAND.coral}`, paddingLeft: 12 }}>
          <strong style={{ color: "#FCFFFE" }}>Nota especial sobre imágenes:</strong> Las fotografías con imágenes de personas pueden constituir datos biométricos (categoría especial, art. 9 RGPD). Tratamos estas imágenes exclusivamente para la funcionalidad de virtual try-on y las eliminamos de nuestros servidores en el plazo máximo de 30 días desde su carga, salvo que el usuario solicite su eliminación antes.
        </p>
        <p style={{ ...ls.p, borderLeft: `3px solid ${BRAND.coral}`, paddingLeft: 12 }}>
          <strong style={{ color: "#FCFFFE" }}>Menores de 14 años:</strong> Conforme al art. 7 LOPDGDD, los menores de 14 años requieren consentimiento parental para registrarse. Si detectamos que un usuario menor de 14 años se ha registrado sin dicho consentimiento, eliminaremos su cuenta de inmediato.
        </p>
      </Section>

      <Section title="3. Conservación de los datos">
        <p style={ls.p}>Conservamos tus datos mientras mantengas tu cuenta activa o mientras sean necesarios para prestarte el servicio. Transcurrido ese período, los bloqueamos durante los plazos legales de prescripción (máximo 6 años, art. 30 Código de Comercio) y posteriormente los eliminamos de forma segura.</p>
      </Section>

      <Section title="4. Destinatarios y transferencias internacionales">
        <p style={ls.p}>Podemos compartir tus datos con los siguientes proveedores (encargados del tratamiento), todos con garantías adecuadas:</p>
        <ul style={{ paddingLeft: 20 }}>
          {[
            "Google LLC (Analytics, Firebase, Google Sign-In) — transferencia amparada en Cláusulas Contractuales Tipo",
            "Apple Inc. (Sign in with Apple) — transferencia amparada en Cláusulas Contractuales Tipo",
            "Proveedores de infraestructura cloud en la UE/EEE",
          ].map((it) => <li key={it} style={ls.li}>{it}</li>)}
        </ul>
        <p style={ls.p}>No vendemos ni cedemos datos a terceros para sus propias finalidades comerciales.</p>
      </Section>

      <Section title="5. Tus derechos (RGPD)">
        <p style={ls.p}>Puedes ejercer en cualquier momento los siguientes derechos enviando un correo a <a href={`mailto:${LEGAL.email}`} style={ls.link}>{LEGAL.email}</a> con copia de tu DNI u otro documento identificativo:</p>
        <ul style={{ paddingLeft: 20 }}>
          {[
            "Acceso: conocer qué datos tenemos sobre ti.",
            "Rectificación: corregir datos inexactos o incompletos.",
            "Supresión (derecho al olvido): solicitar la eliminación de tus datos.",
            "Oposición: oponerte al tratamiento basado en interés legítimo.",
            "Limitación: solicitar la restricción del tratamiento.",
            "Portabilidad: recibir tus datos en formato estructurado.",
            "Retirada del consentimiento: sin que ello afecte al tratamiento previo.",
            "No ser objeto de decisiones automatizadas con efectos significativos.",
          ].map((it) => <li key={it} style={ls.li}>{it}</li>)}
        </ul>
        <p style={ls.p}>Si no obtienes respuesta satisfactoria en el plazo de 1 mes, puedes presentar una reclamación ante la <strong style={{ color: "#FCFFFE" }}>Agencia Española de Protección de Datos (AEPD)</strong>: <a href={LEGAL.aepd_url} style={ls.link} target="_blank" rel="noopener noreferrer">www.aepd.es</a>.</p>
      </Section>

      <Section title="6. Seguridad">
        <p style={ls.p}>Aplicamos medidas técnicas y organizativas apropiadas (cifrado TLS, control de acceso, seudonimización) para proteger tus datos frente a accesos no autorizados, pérdida o destrucción. En caso de brecha de seguridad con riesgo para tus derechos, te notificaremos en el plazo máximo de 72 horas establecido por el RGPD.</p>
      </Section>

      <Section title="7. Cambios en esta política">
        <p style={ls.p}>Si realizamos cambios materiales, te lo notificaremos por correo electrónico o mediante un aviso destacado en la app con al menos 15 días de antelación.</p>
      </Section>
    </div>
  );
}

// ─── Terms ────────────────────────────────────────────────────────────
function TermsConditions() {
  return (
    <div>
      <span style={ls.date}>Última actualización: mayo de 2025 · Versión 1.0</span>
      <p style={ls.p}>Estos Términos y Condiciones regulan el acceso y uso de la plataforma <strong style={{ color: "#FCFFFE" }}>Vroche</strong> (web y aplicación móvil) ofrecida por <strong style={{ color: "#FCFFFE" }}>VROCHE APP S.L.</strong> (en adelante, «Vroche» o «nosotros»).</p>

      <Section title="1. Aceptación">
        <p style={ls.p}>El acceso a Vroche implica la aceptación plena y sin reservas de estos Términos. Si no estás de acuerdo, no debes utilizar el servicio.</p>
      </Section>

      <Section title="2. Descripción del servicio y fase beta">
        <p style={ls.p}>Vroche es una aplicación de moda con inteligencia artificial que ofrece, entre otras funciones, virtual try-on, armario digital, recomendaciones de estilo personalizadas y una red social de moda.</p>
        <p style={{ ...ls.p, borderLeft: `3px solid ${BRAND.mint}`, paddingLeft: 12 }}>
          <strong style={{ color: "#FCFFFE" }}>El servicio se encuentra actualmente en fase de beta cerrada.</strong> Esto implica que puede contener errores, funcionalidades incompletas y que Vroche puede interrumpir, modificar o discontinuar el acceso en cualquier momento sin previo aviso. El acceso beta se otorga de forma gratuita y sin garantías de continuidad.
        </p>
      </Section>

      <Section title="3. Registro y cuenta">
        <ul style={{ paddingLeft: 20 }}>
          <li style={ls.li}>Debes tener al menos <strong style={{ color: "#FCFFFE" }}>14 años</strong> para registrarte. Los menores de 14 años necesitan consentimiento parental verificable.</li>
          <li style={ls.li}>Eres responsable de mantener la confidencialidad de tus credenciales.</li>
          <li style={ls.li}>Debes proporcionar información veraz y actualizada.</li>
          <li style={ls.li}>Está prohibido crear cuentas con identidades falsas o suplantar a otras personas.</li>
        </ul>
      </Section>

      <Section title="4. Uso aceptable">
        <p style={ls.p}>Queda expresamente prohibido:</p>
        <ul style={{ paddingLeft: 20 }}>
          {[
            "Subir contenido ilegal, ofensivo, discriminatorio, pornográfico o que infrinja derechos de terceros.",
            "Utilizar la plataforma para spam, phishing o cualquier actividad fraudulenta.",
            "Intentar acceder de forma no autorizada a sistemas o cuentas de otros usuarios.",
            "Realizar ingeniería inversa, descompilar o intentar extraer el código fuente de la app.",
            "Usar bots o herramientas automatizadas para acceder al servicio sin autorización expresa.",
            "Subir imágenes de terceros sin su consentimiento expreso.",
          ].map((it) => <li key={it} style={ls.li}>{it}</li>)}
        </ul>
      </Section>

      <Section title="5. Contenido generado por el usuario">
        <p style={ls.p}>Al subir contenido (fotos, looks, comentarios), conservas la titularidad de tus derechos de propiedad intelectual, pero concedes a Vroche una licencia mundial, no exclusiva, gratuita y transferible para usar, mostrar, almacenar y procesar dicho contenido exclusivamente con la finalidad de prestar el servicio.</p>
        <p style={ls.p}>Vroche puede eliminar cualquier contenido que infrinja estos Términos o la legislación aplicable, sin necesidad de previo aviso.</p>
      </Section>

      <Section title="6. Propiedad intelectual de Vroche">
        <p style={ls.p}>Todos los elementos de la plataforma (diseño, código, marca, logotipos, textos, modelos de IA) son propiedad de VROCHE APP S.L. o de sus licenciantes y están protegidos por la legislación española e internacional de propiedad intelectual e industrial. Queda prohibida su reproducción, distribución o comunicación pública sin autorización expresa.</p>
      </Section>

      <Section title="7. Exclusión de garantías y limitación de responsabilidad">
        <p style={ls.p}>El servicio se presta «tal cual» (as-is) durante la fase beta. Vroche no garantiza la disponibilidad ininterrumpida, la exactitud de las recomendaciones de estilo ni la calidad de los resultados de virtual try-on. En ningún caso la responsabilidad de Vroche superará el importe que el usuario haya abonado en los 12 meses anteriores al hecho causante (que durante la beta será de cero euros).</p>
      </Section>

      <Section title="8. Suspensión y cancelación">
        <p style={ls.p}>Vroche puede suspender o cancelar tu cuenta si incumples estos Términos. Puedes cancelar tu cuenta en cualquier momento enviando un correo a <a href={`mailto:${LEGAL.email}`} style={ls.link}>{LEGAL.email}</a>.</p>
      </Section>

      <Section title="9. Modificaciones">
        <p style={ls.p}>Vroche puede modificar estos Términos. En caso de cambios materiales, te notificaremos con al menos 15 días de antelación. El uso continuado del servicio tras esa fecha implica la aceptación de los nuevos Términos.</p>
      </Section>

      <Section title="10. Ley aplicable y jurisdicción">
        <p style={ls.p}>Estos Términos se rigen por la legislación española. Para la resolución de disputas, las partes se someten a los Juzgados y Tribunales de Madrid, salvo que la normativa de consumidores y usuarios aplicable establezca un fuero diferente.</p>
        <p style={ls.p}>Para resolución extrajudicial de conflictos en línea (ODR), la Comisión Europea pone a disposición la siguiente plataforma: <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" style={ls.link}>https://ec.europa.eu/consumers/odr</a>.</p>
      </Section>
    </div>
  );
}

// ─── Legal Notice ─────────────────────────────────────────────────────
function LegalNotice() {
  return (
    <div>
      <span style={ls.date}>Última actualización: mayo de 2025</span>
      <p style={ls.p}>En cumplimiento del artículo 10 de la <strong style={{ color: "#FCFFFE" }}>Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI-CE)</strong>, se facilitan los siguientes datos identificativos:</p>

      <table style={ls.table}>
        <tbody>
          {[
            ["Denominación social", LEGAL.company],
            ["CIF", LEGAL.cif],
            ["Domicilio social", LEGAL.address + ", España"],
            ["Correo electrónico", LEGAL.email],
            ["Dominio web", LEGAL.domain],
            ["Inscripción registral", "Pendiente de inscripción en el Registro Mercantil de Madrid"],
          ].map(([k, v]) => (
            <tr key={k}>
              <td style={{ ...ls.td, fontWeight: 600, color: "rgba(252,255,254,0.85)", width: "42%" }}>{k}</td>
              <td style={ls.td}>{v}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <Section title="Objeto y actividad">
        <p style={ls.p}>VROCHE APP S.L. es titular del sitio web <strong style={{ color: "#FCFFFE" }}>vroche.com</strong> y de la aplicación móvil Vroche, dedicados a ofrecer servicios de moda inteligente basados en inteligencia artificial.</p>
      </Section>

      <Section title="Propiedad intelectual e industrial">
        <p style={ls.p}>Todos los contenidos del sitio web (textos, imágenes, diseños gráficos, código fuente, logotipos y marcas) son propiedad de VROCHE APP S.L. o de sus licenciantes, y están protegidos por las leyes españolas e internacionales de propiedad intelectual e industrial. Se prohíbe expresamente su reproducción, distribución, comunicación pública o transformación sin autorización previa y por escrito de VROCHE APP S.L.</p>
      </Section>

      <Section title="Exclusión de responsabilidad">
        <p style={ls.p}>VROCHE APP S.L. no se hace responsable de los daños o perjuicios de cualquier naturaleza causados por la imposibilidad de acceder al servicio, por interrupciones, virus informáticos o fallos en la conexión, ni por el uso inadecuado que el usuario pudiera realizar de los contenidos del sitio.</p>
      </Section>

      <Section title="Legislación aplicable">
        <p style={ls.p}>El presente aviso legal se rige en su totalidad por la legislación española, siendo competentes los Juzgados y Tribunales de Madrid para conocer de cuantas cuestiones se susciten sobre la interpretación, aplicación y cumplimiento del mismo.</p>
      </Section>
    </div>
  );
}

// ─── Cookie Policy ────────────────────────────────────────────────────
function CookiePolicy() {
  return (
    <div>
      <span style={ls.date}>Última actualización: mayo de 2025</span>
      <p style={ls.p}>Esta Política de Cookies explica qué son las cookies, qué tipos utilizamos en <strong style={{ color: "#FCFFFE" }}>vroche.com</strong> y cómo puedes gestionarlas, en cumplimiento del artículo 22.2 de la LSSI-CE y el RGPD.</p>

      <Section title="¿Qué es una cookie?">
        <p style={ls.p}>Una cookie es un fichero de texto que un sitio web envía al navegador y que queda almacenado en tu dispositivo. Las cookies permiten al sitio recordar tus preferencias y analizar cómo utilizas la página.</p>
      </Section>

      <Section title="Tipos de cookies que utilizamos">
        <table style={ls.table}>
          <thead>
            <tr>
              <th style={ls.th}>Cookie</th>
              <th style={ls.th}>Tipo</th>
              <th style={ls.th}>Finalidad</th>
              <th style={ls.th}>Duración</th>
              <th style={ls.th}>Consentimiento</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["vroche_cookie_consent_v1", "Técnica / Necesaria", "Almacena tus preferencias de consentimiento", "1 año", "No requerido"],
              ["_ga, _ga_*", "Analítica (Google Analytics 4)", "Análisis estadístico del uso de la web (datos anónimos)", "2 años / sesión", "Requerido"],
              ["_gid", "Analítica (Google Analytics)", "Distingue sesiones de usuario (datos anónimos)", "24 horas", "Requerido"],
            ].map(([name, tipo, fin, dur, cons]) => (
              <tr key={name}>
                <td style={{ ...ls.td, fontFamily: "monospace", fontSize: 11, color: BRAND.mint }}>{name}</td>
                <td style={ls.td}>{tipo}</td>
                <td style={ls.td}>{fin}</td>
                <td style={ls.td}>{dur}</td>
                <td style={{ ...ls.td, color: cons === "No requerido" ? "rgba(252,255,254,0.45)" : BRAND.mint }}>{cons}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Section>

      <Section title="Cookies de Google Analytics">
        <p style={ls.p}>Utilizamos Google Analytics 4 de Google LLC para analizar el uso de nuestra web. Google puede transferir esta información a terceros cuando así lo requiera la legislación o cuando dichos terceros procesen la información en nombre de Google. Hemos activado la <strong style={{ color: "#FCFFFE" }}>anonimización de IP</strong> y hemos suscrito el Acuerdo de Procesamiento de Datos con Google. Más información en la <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" style={ls.link}>Política de Privacidad de Google</a>.</p>
      </Section>

      <Section title="Gestión y retirada del consentimiento">
        <p style={ls.p}>Puedes gestionar tus preferencias de cookies en cualquier momento a través del panel de preferencias (disponible en el pie de página de la web). También puedes desactivar las cookies desde la configuración de tu navegador:</p>
        <ul style={{ paddingLeft: 20 }}>
          {[
            ["Chrome", "chrome://settings/cookies"],
            ["Firefox", "about:preferences#privacy"],
            ["Safari", "Preferencias > Privacidad"],
            ["Edge", "edge://settings/cookies"],
          ].map(([nav, url]) => (
            <li key={nav} style={ls.li}>
              <strong style={{ color: "#FCFFFE" }}>{nav}:</strong>{" "}
              {url.startsWith("http") ? <a href={url} target="_blank" rel="noopener noreferrer" style={ls.link}>{url}</a> : <span style={{ fontFamily: "monospace", color: "rgba(252,255,254,0.75)" }}>{url}</span>}
            </li>
          ))}
        </ul>
        <p style={ls.p}>Ten en cuenta que deshabilitar ciertas cookies puede afectar al funcionamiento de la web.</p>
      </Section>
    </div>
  );
}

// ─── Modal ────────────────────────────────────────────────────────────
export default function LegalModal({ page, onClose }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    const handler = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handler);
    return () => { document.body.style.overflow = ""; window.removeEventListener("keydown", handler); };
  }, [onClose]);

  const pages = { privacy: <PrivacyPolicy />, terms: <TermsConditions />, legal: <LegalNotice />, cookies: <CookiePolicy /> };
  const titles = { privacy: "Política de Privacidad", terms: "Términos y Condiciones", legal: "Aviso Legal", cookies: "Política de Cookies" };

  return (
    <div
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
      style={{
        position: "fixed", inset: 0, zIndex: 10000,
        background: "rgba(4,8,6,0.88)", backdropFilter: "blur(16px)",
        display: "flex", alignItems: "flex-end", justifyContent: "center",
      }}
      role="dialog" aria-modal="true" aria-label={titles[page]}
    >
      <div
        style={{
          background: "#0a120e",
          border: "1px solid rgba(99,215,177,0.14)",
          borderRadius: "28px 28px 0 0",
          width: "100%", maxWidth: 780,
          maxHeight: "90vh",
          display: "flex", flexDirection: "column",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            padding: "20px 28px 16px",
            borderBottom: "1px solid rgba(255,255,255,0.07)",
            display: "flex", alignItems: "center", justifyContent: "space-between",
            flexShrink: 0,
          }}
        >
          <h2 style={{ color: "#FCFFFE", fontSize: 18, fontWeight: 800, margin: 0, letterSpacing: "-0.02em", fontFamily: "DM Sans, sans-serif" }}>
            {titles[page]}
          </h2>
          <button
            onClick={onClose}
            aria-label="Cerrar"
            style={{
              background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: "50%", width: 36, height: 36,
              display: "flex", alignItems: "center", justifyContent: "center",
              cursor: "pointer", color: "rgba(252,255,254,0.7)",
            }}
          >
            <XIcon className="h-4 w-4" />
          </button>
        </div>
        <div style={{ overflowY: "auto", padding: "24px 28px 40px", flex: 1 }}>
          {pages[page]}
        </div>
      </div>
    </div>
  );
}

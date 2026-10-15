# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary users are builders, architects, developers, and high-end residential property owners in Greater Sydney who need an electrical partner they can trust before and during delivery.

They are evaluating providers under real project pressure: protecting budgets, avoiding construction delays, coordinating multiple technical systems, and reducing rework late in the build.

## Product Purpose

Quantum Electrical & Technological Services uses this website to generate qualified leads for premium electrical, automation, architectural lighting, security, and specialist infrastructure work.

Success means convincing the visitor to make contact for a quote or project discussion, with confidence that Quantum can protect scope, schedule, and execution quality from blueprint to handover.

## Positioning

Quantum positions itself as a single point of accountability across electrical infrastructure, smart automation, and architectural lighting, entering early enough to prevent budget blowouts, late-stage variations, and timeline surprises.

This is not presented as a generic installer offer. The differentiator is integrated engineering rigor across design, construction, automation, and site execution for demanding Sydney projects.

## Operating Context

- Greater Sydney residential, commercial, industrial, strata, and sports-lighting projects.
- Pre-construction discussions with builders, consultants, architects, and owners.
- Project delivery tied to budget certainty, program certainty, compliance, and handover quality.
- Field execution managed in real time via SimPRO.
- Evaluation happens through service breadth, proof of technical capability, contact access, licenses, and confidence in delivery discipline.

## Capabilities and Constraints

- Existing site is a single-page marketing surface with hero, services, operational-rigor messaging, sectors served, projects, founder statement, CTA, and footer contact details.
- Contact paths currently rely on direct phone and email.
- Confirmed service areas include design and construction, smart automation and architectural lighting, electronic security, sports lighting, maintenance, and broader electrical infrastructure.
- The current redesign request requires the hero section and header/navbar to remain untouched; changes must start from the second fold down to the footer.
- The user explicitly wants the existing texts preserved.
- The project already runs as an Astro site with GSAP-driven motion.
- The active visual runtime source of truth is `src/styles/global.css`, not the generated token artifacts under `assets/`.
- The current homepage uses a light-surface editorial system with controlled dark zones for the preserved hero, the interactive lighting fold, the projects fold, and the footer.

## Brand Commitments

- Brand name: Quantum Electrical & Technological Services.
- Preserve institutional colors defined in `DESIGN.md`.
- Preserve existing logo assets in `public/`.
- The user explicitly requested Urbanist as the primary typography from the second fold downward in the redesign scope.
- Preserve IBM Plex Mono as the technical-label layer and Cormorant Garamond as the editorial accent layer already present in the implemented UI.
- The brand should read as technical, premium, sober, and trustworthy rather than playful.
- The current redesign no longer uses a pill-first UI language for most CTAs; lower folds now rely on precise small-radius panels, underlined link-actions, and selected dark glass HUDs.

## Evidence on Hand

- Structured site copy and heading hierarchy in `quantumelectricalsolutions-com-au.md`.
- Brand colors and existing visual tokens in `DESIGN.md`.
- Active runtime visual tokens and utilities in `src/styles/global.css`.
- Existing logo assets in `public/logo-*.png`.
- Current Astro implementation in `src/pages/index.astro` and `src/components/**`.
- Existing hero imagery and motion assets in `public/hero/` and `referencia/`.
- Legal proof already present in the site copy: Electrical Contractor license `478965C` and Master Security License `000109137`.
- No verified case-study metrics, awards, or performance benchmarks were provided; future work must not invent them.

## Product Principles

- Lead with confidence-building signals that reduce perceived delivery risk.
- Present Quantum as an engineering partner, not a commodity contractor.
- Keep the journey focused on qualified-contact conversion rather than exploratory browsing.
- Use real service breadth and execution rigor as proof, without adding invented claims.
- Preserve trust by keeping the brand institutional, precise, and technically credible.
- Prefer design precision over generic marketing UI: editorial spacing, restrained glass usage, thin navy hairlines, and teal reserved for interaction or active emphasis.

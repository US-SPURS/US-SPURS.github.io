# spurs.gov Production Domain Cutover

This document defines the production-domain steps for the US-SPURS public website hosted from `US-SPURS/US-SPURS.github.io` with GitHub Pages and a custom GitHub Actions publishing workflow.

## Current deployment model

- Repository: `US-SPURS/US-SPURS.github.io`
- Production branch: `main`
- Publishing: GitHub Actions (`actions/deploy-pages`)
- Intended custom domain: `spurs.gov`
- Default GitHub Pages organization domain: `US-SPURS.github.io`

## Important GitHub Pages behavior

For a site published through a custom GitHub Actions workflow, GitHub Pages custom-domain configuration is stored in repository Pages settings. A repository `CNAME` file is ignored and is not required for this publishing model.

Do not add a `CNAME` file solely to configure `spurs.gov`.

## Required GitHub configuration

Before changing public DNS:

1. Verify control of `spurs.gov` for the US-SPURS GitHub organization/account where supported.
2. Open `US-SPURS/US-SPURS.github.io` → **Settings** → **Pages**.
3. Set **Custom domain** to `spurs.gov` and save.
4. Keep the Pages publishing source configured for the GitHub Actions workflow.
5. After DNS is valid and GitHub provisions the certificate, enable **Enforce HTTPS**.

GitHub recommends adding the custom domain in repository settings before pointing DNS at GitHub Pages to reduce domain-takeover risk.

## Required apex DNS records

If `spurs.gov` is served directly from GitHub Pages using GitHub's documented apex addresses, create these records at the authoritative DNS provider:

```text
spurs.gov.  A     185.199.108.153
spurs.gov.  A     185.199.109.153
spurs.gov.  A     185.199.110.153
spurs.gov.  A     185.199.111.153

spurs.gov.  AAAA  2606:50c0:8000::153
spurs.gov.  AAAA  2606:50c0:8001::153
spurs.gov.  AAAA  2606:50c0:8002::153
spurs.gov.  AAAA  2606:50c0:8003::153
```

An `ALIAS` or `ANAME` to `US-SPURS.github.io` can be used instead of the apex `A`/`AAAA` set if the authoritative DNS platform supports that model and it is preferred operationally.

Do **not** configure a conventional CNAME at the zone apex.

## Recommended `www` record

For the `www` variant:

```text
www.spurs.gov.  CNAME  US-SPURS.github.io.
```

When both apex and `www` records are configured correctly and `spurs.gov` is the Pages custom domain, GitHub Pages can redirect the `www` variant to the apex domain.

## DNS source of truth

The separate `US-SPURS/dns` repository is structured as a Terraform/Route 53 DNS source of truth. Its documentation requires a domain-specific Terraform file when a zone is managed there.

At the time this document was added, no `spurs.gov.tf` file had been identified in that repository. Do not assume the domain is managed by that Route 53 deployment until the authoritative nameservers and existing zone ownership are verified.

If `spurs.gov` is moved into `US-SPURS/dns`, that change should be performed as a separate DNS change with its own branch, review, Terraform plan, rollback considerations, and explicit approval.

## Pre-cutover validation

Before switching DNS, confirm:

- [ ] PR #2 or its successor is fully reviewed and merged to `main`.
- [ ] The production Pages workflow builds and deploys successfully from `main`.
- [ ] `https://us-spurs.github.io/` serves the expected production artifact.
- [ ] `spurs.gov` is configured in repository Pages settings.
- [ ] Domain ownership is verified where supported.
- [ ] Existing `spurs.gov` DNS records and services have been inventoried so unrelated services are not disrupted.
- [ ] DNS TTL is reduced ahead of a planned migration where appropriate.
- [ ] Apex `A`/`AAAA` or approved `ALIAS`/`ANAME` records are staged.
- [ ] `www.spurs.gov` is staged if desired.
- [ ] No wildcard record creates an avoidable Pages takeover risk.

## Post-cutover validation

Verify:

```text
A      spurs.gov
AAAA   spurs.gov
CNAME  www.spurs.gov
```

Then confirm:

- [ ] `https://spurs.gov/` loads the current US-SPURS site.
- [ ] TLS certificate is valid for `spurs.gov`.
- [ ] HTTPS enforcement is enabled in GitHub Pages.
- [ ] `https://www.spurs.gov/` redirects as intended.
- [ ] `robots.txt` references `https://spurs.gov/sitemap.xml`.
- [ ] `sitemap.xml` uses canonical `https://spurs.gov/` URLs.
- [ ] OpenGraph metadata resolves correctly from the custom domain.
- [ ] No existing mail, verification, or other DNS records were unintentionally changed.

## Rollback

If cutover fails:

1. Restore the previously documented apex/`www` DNS records.
2. Leave the website deployment on GitHub Pages available at its default organization URL for troubleshooting.
3. Do not delete unrelated MX, TXT, CAA, DKIM, DMARC, or service-validation records.
4. Re-test the Pages custom-domain configuration before attempting another DNS cutover.

import type { Metadata } from 'next';
import { InfoGrid, PageHero, Section } from '@/components/interior';

export const metadata: Metadata = { title: 'Accessibility' };

export default function AccessibilityPage() {
  return <main id="main-content">
    <PageHero eyebrow="Accessibility" title="Digital services should work for everyone." summary="US-SPURS V2 is being designed around semantic structure, keyboard access, readable contrast, responsive layouts, and automated accessibility checks as part of the engineering lifecycle." />
    <Section eyebrow="Design standard" title="Accessibility is built into the system"><InfoGrid items={[
      { title: 'Keyboard access', body: 'Interactive elements should be reachable, operable, and visibly focused without requiring a mouse.' },
      { title: 'Semantic structure', body: 'Landmarks, headings, labels, links, and form controls should expose clear structure to assistive technology.' },
      { title: 'Contrast & readability', body: 'Text, controls, and status indicators should maintain sufficient contrast and remain usable at enlarged text sizes.' },
      { title: 'Screen-reader support', body: 'Meaningful content and controls should be understandable with modern screen readers and common navigation patterns.' },
      { title: 'Responsive behavior', body: 'The site should remain usable across mobile, tablet, desktop, zoomed, and reflowed layouts.' },
      { title: 'Automated + manual testing', body: 'Automated tools are a baseline, not a substitute for keyboard, screen-reader, and human usability review.' },
    ]} /></Section>
    <Section dark eyebrow="Target" title="Section 508 and WCAG-aligned delivery" intro="The production objective is conformance with applicable federal accessibility requirements, including Section 508 and current WCAG guidance. Public claims should reflect verified test results rather than assumptions." />
    <Section eyebrow="Report a barrier" title="Accessibility feedback should have a direct path." intro="Accessibility issues should be reported through the agency’s published accessibility contact channel or the website issue process when appropriate. Reports should include the affected page, device/browser, assistive technology if relevant, and the barrier encountered." />
  </main>;
}

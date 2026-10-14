import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  turbopack: {
    root: path.resolve(__dirname),
  },
  // Renamed Thinking articles: keep old links and search rankings working
  async redirects() {
    return [
      { source: '/thinking/designing-for-confidence-not-just-clarity', destination: '/thinking/clarity-was-never-the-finish-line', permanent: true },
      { source: '/thinking/loading-states-are-not-one-component', destination: '/thinking/please-dont-let-it-sit-at-99', permanent: true },
      { source: '/thinking/form-validation-timing-is-not-a-detail', destination: '/thinking/when-should-a-form-tell-you-youre-wrong', permanent: true },
      { source: '/thinking/empty-states-are-not-one-thing', destination: '/thinking/five-ways-a-screen-can-be-empty', permanent: true },
      { source: '/thinking/greenfield-work-is-accountability-with-no-precedent', destination: '/thinking/everyone-wants-a-blank-slate-until-they-get-one', permanent: true },
      { source: '/thinking/the-brief-is-a-hypothesis', destination: '/thinking/before-you-open-figma-ask-how-anyone-knows', permanent: true },
      { source: '/thinking/design-systems-dont-fail-because-of-bad-components', destination: '/thinking/nobody-used-the-perfect-component-library', permanent: true },
    ];
  },
};

export default nextConfig;

import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'United States Department of Special Projects and Unified Response Services',
    short_name: 'US-SPURS',
    description: 'Official public web experience for US-SPURS.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#071b33',
    icons: [],
  };
}

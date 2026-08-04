import adapter from '@sveltejs/adapter-vercel';

export default {
  kit: {
    // Pinned because the adapter can't infer a runtime from Node 23 locally.
    // Every route is prerendered, so this only affects the build environment.
    adapter: adapter({ runtime: 'nodejs22.x' }),
    prerender: { entries: ['*'] }
  }
};

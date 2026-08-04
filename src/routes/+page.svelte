<script>
  import { profile, sections } from '$lib/sections.js';
  import Menu from '$lib/components/Menu.svelte';
  import Slide from '$lib/components/Slide.svelte';

  let open = $state(false);
  let current = $state('intro');
  let deck = $state(null);

  const ids = ['intro', ...sections.map((s) => s.id)];

  // Track which slide is in view for the menu highlight and the progress rail.
  $effect(() => {
    const els = ids.map((id) => document.getElementById(id)).filter(Boolean);
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) current = e.target.id;
      },
      { threshold: 0.5 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  });

  function step(delta) {
    const i = ids.indexOf(current);
    const next = ids[Math.min(ids.length - 1, Math.max(0, i + delta))];
    document.getElementById(next)?.scrollIntoView({ behavior: 'smooth' });
  }

  function onkeydown(e) {
    if (open || e.metaKey || e.ctrlKey || e.altKey) return;
    if (e.key === 'ArrowDown' || e.key === 'ArrowRight' || e.key === 'PageDown') {
      e.preventDefault();
      step(1);
    } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft' || e.key === 'PageUp') {
      e.preventDefault();
      step(-1);
    }
  }
</script>

<svelte:window on:keydown={onkeydown} />

<Menu bind:open {current} />

<!-- Progress rail: one tick per slide, current one filled. Decorative only —
     the menu is the real navigation, so this is hidden from assistive tech. -->
<div
  class="fixed top-1/2 left-4 z-30 hidden -translate-y-1/2 flex-col gap-1.5 sm:flex"
  aria-hidden="true"
>
  {#each ids as id}
    <span
      class="block h-1.5 w-1.5 rounded-full transition-colors duration-300
             {current === id ? 'bg-accent' : 'bg-rule'}"
    ></span>
  {/each}
</div>

<main bind:this={deck} class="deck h-dvh overflow-y-auto bg-paper text-ink">
  <section id="intro" class="slide flex min-h-dvh items-center px-6 py-24 sm:px-12">
    <div class="mx-auto w-full max-w-3xl">
      <h1 class="font-serif text-5xl leading-none text-ink sm:text-7xl">
        {profile.name}
      </h1>
      <p class="mt-4 font-sans text-sm tracking-[0.18em] text-muted uppercase">
        {profile.tagline}
      </p>
      <p class="mt-8 max-w-2xl font-serif text-xl leading-relaxed text-ink/90">
        {profile.intro}
      </p>
      <p class="mt-8 flex flex-wrap gap-x-6 gap-y-2">
        {#each profile.links as l}
          <a
            class="font-sans text-sm text-accent underline decoration-accent/30
                   underline-offset-4 transition hover:decoration-accent
                   focus-visible:outline-2 focus-visible:outline-offset-2
                   focus-visible:outline-accent"
            href={l.href}
            rel="noopener">{l.label}</a
          >
        {/each}
      </p>
      <p class="mt-16 font-sans text-xs text-muted">
        Use the menu, or arrow keys, to move between sections.
      </p>
    </div>
  </section>

  {#each sections as section}
    <Slide {section} />
  {/each}

  <footer class="slide flex min-h-dvh items-center px-6 py-24 sm:px-12">
    <div class="mx-auto w-full max-w-3xl">
      <h2 class="font-serif text-4xl text-ink sm:text-5xl">Get in touch</h2>
      <p class="mt-5 max-w-2xl font-serif text-lg leading-relaxed text-ink/90">
        The common thread has always been building production systems around
        emerging technology. If that's useful to you, say hello.
      </p>
      <p class="mt-8">
        <a
          class="font-sans text-lg text-accent underline decoration-accent/30
                 underline-offset-4 transition hover:decoration-accent"
          href="mailto:{profile.email}">{profile.email}</a
        >
      </p>
      <p class="mt-16 font-sans text-xs text-muted">
        {profile.handle} · built with SvelteKit
      </p>
    </div>
  </footer>
</main>

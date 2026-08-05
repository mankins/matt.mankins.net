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
             {current === id ? 'bg-highlight' : 'bg-rule'}"
    ></span>
  {/each}
</div>

<main bind:this={deck} class="deck h-dvh overflow-y-auto bg-paper text-ink">
  <section id="intro" class="slide flex min-h-dvh items-center px-4 py-14 sm:px-12 sm:py-24">
    <div class="card mx-auto w-full max-w-3xl">
      <h1 class="font-serif text-4xl leading-none text-ink sm:text-7xl">
        {profile.name}
      </h1>
      <p
        class="mt-4 font-sans text-xs tracking-[0.11em] text-muted uppercase
               sm:text-sm sm:tracking-[0.18em]"
      >
        {profile.tagline}
      </p>
      <p class="mt-6 max-w-2xl font-serif text-lg leading-relaxed text-ink/90 sm:mt-8 sm:text-xl">
        {profile.intro}
      </p>
      <p class="mt-8 flex flex-wrap gap-x-6 gap-y-2">
        {#each profile.links as l}
          <a
            class="py-1 font-sans text-sm text-accent underline decoration-accent/30
                   underline-offset-4 transition hover:decoration-highlight
                   focus-visible:outline-2 focus-visible:outline-offset-2
                   focus-visible:outline-accent"
            href={l.href}
            rel="noopener">{l.label}</a
          >
        {/each}
      </p>
      <!-- Heroicons v2 `arrows-up-down`, inlined rather than pulling in an icon
           package for a single glyph. Decorative, so the instruction it
           replaced stays available to screen readers alongside it. -->
      <p class="mt-10 sm:mt-16">
        <svg
          class="h-6 w-6 text-muted"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="1.5"
          aria-hidden="true"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3 7.5 7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5"
          />
        </svg>
        <span class="sr-only">
          Use the menu, or the up and down arrow keys, to move between sections.
        </span>
      </p>
    </div>
  </section>

  {#each sections as section}
    <Slide {section} />
  {/each}

  <footer class="slide flex min-h-dvh items-center px-4 py-14 sm:px-12 sm:py-24">
    <div class="card mx-auto w-full max-w-3xl">
      <h2 class="font-serif text-3xl text-ink sm:text-5xl">Get in touch</h2>
      <p class="mt-5 max-w-2xl font-serif text-lg leading-relaxed text-ink/90">
        The common thread has always been building production systems around
        emerging technology. If that's useful to you, say hello.
      </p>
      <p class="mt-8">
        <!-- `break-all` so a long address can't push the card wider than a
             narrow screen; inline-block keeps the tap target a full line. -->
        <a
          class="inline-block py-1 font-sans text-base break-all text-accent underline
                 decoration-accent/30 underline-offset-4 transition
                 hover:decoration-highlight sm:text-lg"
          href="mailto:{profile.email}">{profile.email}</a
        >
      </p>
      <p class="mt-10 font-sans text-xs text-muted sm:mt-16">
        {profile.handle} · built with SvelteKit
      </p>
    </div>
  </footer>
</main>

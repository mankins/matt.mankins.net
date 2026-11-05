<script>
  import { showYears } from '$lib/sections.js';

  let { section } = $props();
</script>

<section
  id={section.id}
  class="slide flex min-h-dvh w-full items-center px-4 py-14 sm:px-12 sm:py-24"
>
  <div class="card mx-auto w-full max-w-3xl">
    {#if section.kicker}
      <p
        class="font-sans text-[11px] tracking-[0.11em] text-muted uppercase
               sm:tracking-[0.18em]"
      >
        {section.kicker}
      </p>
    {/if}

    <h2 class="mt-3 font-serif text-3xl leading-tight text-ink sm:text-5xl">
      {section.title}
      {#if showYears && section.year}
        <span class="ml-3 align-middle font-sans text-sm text-muted tabular-nums">
          {section.year}
        </span>
      {/if}
    </h2>

    {#if section.draft}
      <p class="mt-4 border-l-2 border-accent pl-3 font-sans text-xs text-accent">
        Draft — needs content.
      </p>
    {/if}

    {#if section.blurb}
      <p class="mt-5 max-w-2xl font-serif text-lg leading-relaxed text-ink/90">
        {section.blurb}
      </p>
    {/if}

    {#if section.points?.length}
      <dl class="mt-8 space-y-5 border-t border-rule pt-7">
        {#each section.points as p}
          {#if p.text}
            <div class="grid gap-1 sm:grid-cols-[11rem_1fr] sm:gap-6">
              <dt class="font-sans text-sm font-medium text-ink">{p.label}</dt>
              <dd class="font-sans text-sm leading-relaxed text-muted">{p.text}</dd>
            </div>
          {/if}
        {/each}
      </dl>
    {/if}

    {#if section.links?.length}
      <p class="mt-8 flex flex-wrap gap-x-6 gap-y-2">
        {#each section.links as l}
          <a
            class="py-1 font-sans text-sm text-accent underline decoration-accent/30
                   underline-offset-4 transition hover:decoration-highlight
                   focus-visible:outline-2 focus-visible:outline-offset-2
                   focus-visible:outline-accent"
            href={l.href}
            rel="noopener"
            target="_blank">{l.label}</a
          >
        {/each}
      </p>
    {/if}
  </div>
</section>

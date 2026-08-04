<script>
  import { groups, sections } from '$lib/sections.js';

  let { open = $bindable(false), current = '' } = $props();

  // Trap focus and close on Escape while the menu is open, so keyboard and
  // screen-reader users aren't stranded behind the overlay.
  function onkeydown(e) {
    if (e.key === 'Escape') open = false;
  }

  function go(id) {
    open = false;
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    history.replaceState(null, '', `#${id}`);
  }
</script>

<svelte:window on:keydown={onkeydown} />

<button
  class="fixed top-5 right-5 z-50 flex h-11 w-11 items-center justify-center
         rounded-full border border-rule bg-paper/85 backdrop-blur
         transition hover:border-ink focus-visible:outline-2
         focus-visible:outline-offset-2 focus-visible:outline-accent"
  aria-expanded={open}
  aria-controls="site-menu"
  aria-label={open ? 'Close menu' : 'Open menu'}
  onclick={() => (open = !open)}
>
  <span class="relative block h-3 w-5">
    <span
      class="absolute left-0 h-px w-5 bg-ink transition-transform duration-200"
      style:top={open ? '6px' : '0'}
      style:transform={open ? 'rotate(45deg)' : 'none'}
    ></span>
    <span
      class="absolute top-1.5 left-0 h-px w-5 bg-ink transition-opacity duration-200"
      style:opacity={open ? 0 : 1}
    ></span>
    <span
      class="absolute left-0 h-px w-5 bg-ink transition-transform duration-200"
      style:top={open ? '6px' : '12px'}
      style:transform={open ? 'rotate(-45deg)' : 'none'}
    ></span>
  </span>
</button>

{#if open}
  <nav
    id="site-menu"
    class="fixed inset-0 z-40 overflow-y-auto bg-paper/97 px-6 py-20 backdrop-blur-sm
           sm:px-12"
    aria-label="Sections"
  >
    <div class="mx-auto max-w-3xl">
      {#each groups as group}
        <h2 class="mt-10 mb-3 font-sans text-[11px] tracking-[0.18em] text-muted uppercase first:mt-0">
          {group}
        </h2>
        <ul class="border-t border-rule">
          {#each sections.filter((s) => s.group === group) as s}
            <li class="border-b border-rule">
              <button
                class="group flex w-full items-baseline justify-between gap-4 py-3 text-left
                       focus-visible:outline-2 focus-visible:outline-offset-2
                       focus-visible:outline-accent"
                onclick={() => go(s.id)}
              >
                <span
                  class="font-serif text-xl transition-colors group-hover:text-accent
                         {current === s.id ? 'text-accent' : 'text-ink'}"
                >
                  {s.title}{#if s.draft}<span class="ml-2 align-middle font-sans text-[10px] tracking-wider text-muted uppercase">draft</span>{/if}
                </span>
                <span class="shrink-0 font-sans text-xs text-muted tabular-nums">{s.year}</span>
              </button>
            </li>
          {/each}
        </ul>
      {/each}
    </div>
  </nav>
{/if}

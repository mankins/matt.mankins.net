<script>
  import '../app.css';
  let { children } = $props();
</script>

<svelte:head>
  <title>Matt Mankins</title>
  <meta
    name="description"
    content="Matt Mankins — 25+ years building production systems and the organizations around them. Agentic AI runtimes, media platforms, internet infrastructure, books, ads, innovation."
  />
</svelte:head>

{@render children()}

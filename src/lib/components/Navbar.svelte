<script>
  import { fly } from "svelte/transition";
  import SocialLinkList from "./SocialLinkList.svelte";
  import Logo from "./Logo.svelte";

  const navLinks = [
    {
      text: "About me",
      link: "#aboutMe",
    },
    {
      text: "Last activity",
      link: "#lastActivity",
    },
    {
      text: "Policy",
      link: "#policy",
    },
    {
      text: "Donate",
      link: "#donate",
    },
    {
      text: "Feedback",
      link: "#feedback",
    },
  ];
  let isOffcanvasOpening = false;
  function handleOffcanvas() {
    isOffcanvasOpening = !isOffcanvasOpening;
  }
</script>

<div class="sticky top-0 z-20 border-b-2 bg-white border-orange px-8 lg:hidden">
  <button class="p-4" type="button" on:click={handleOffcanvas}>
    {#if isOffcanvasOpening}
      <img src="/src/assets/images/close.png" alt="mobile menu button" />
    {:else}
      <img src="/src/assets/images/menu.png" alt="mobile menu button" />
    {/if}
  </button>
  <Logo />
</div>
<div class="hidden grid-cols-5 border-b-2 border-orange lg:grid lg:py-6">
  <div class="col-span-2 flex items-center justify-around">
    {#each navLinks.slice(0, 3) as { text, link }}
      <a
        class="block p-2 text-center font-jost text-sm font-bold text-brown"
        href={link}>{text}</a
      >
    {/each}
  </div>
  <Logo />
  <div class="col-span-2 col-end-6 flex items-center justify-around">
    {#each navLinks.slice(3) as { text, link }}
      <a
        class="block p-2 text-center font-jost text-sm font-bold text-brown"
        href={link}>{text}</a
      >
    {/each}
    <SocialLinkList border={false} />
  </div>
</div>
{#if isOffcanvasOpening}
  <div
    class="fixed z-10 w-full h-full bg-white"
    transition:fly={{ x: -100, duration: 1000 }}
  >
    <ul class="border-b border-gray-300 pb-10 pt-14">
      {#each navLinks as { text, link }}
        <li class="mb-4">
          <a
            on:click={handleOffcanvas}
            class="block py-2 text-center font-jost text-lg font-bold text-brown"
            href={link}>
            {text}
          </a>
        </li>
      {/each}
    </ul>
    <div class="py-14">
      <SocialLinkList />
    </div>
  </div>
{/if}

<script>
  const baseImgUrl = "/src/assets/images/";
  const socialLinks = [
    {
      link: "fb",
      src: "facebook.png",
    },
    {
      link: "ig",
      src: "instagram.png",
    },
    {
      link: "youtube",
      src: "youtube.png",
    },
    {
      link: "line",
      src: "line.png",
    },
  ];
  export let border = true;
</script>

<ul class="flex justify-center">
  {#each socialLinks as link}
    <li>
      <a
        href="https://github.com/MengHanLiao/5TH_THE_F2E_week1"
        class:border
        class="block h-full rounded-full border-gray-300 p-4"
      >
        <img src={baseImgUrl + link.src} alt={link.link + "icon"} />
      </a>
    </li>
  {/each}
</ul>

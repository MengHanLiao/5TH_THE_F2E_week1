<script>
  import Navbar from "../components/Navbar.svelte";
</script>

<Navbar />
<main>
  <div
    class="bg-hero mb-15 flex min-h-[700px] flex-col justify-between xl:mb-37.5"
  >
    <div class="container pt-14">
      <h1 class="text-center md:text-left">
        台灣的明天，<br />喵先鋪路
      </h1>
    </div>
    <img
      src="/src/assets/images/fish_decoration1.png"
      alt="fish decoration"
      class="m-10 max-w-fit"
    />
  </div>
  <section id="aboutMe">
    <div
      class="container mb-15 lg:mb-20 grid grid-flow-row content-center text-center lg:grid-cols-2 lg:gap-x-12 lg:text-left xl:gap-x-24"
    >
      <div class="lg:self-end">
        <span class="mb-1 block font-jost text-md text-orange lg:text-xl"
          >About me</span
        >
        <h2 class="mb-6 lg:mb-20">
          立法委員<br />候選人主張
        </h2>
      </div>
      <div
        class="relative mb-5 lg:col-start-2 lg:row-start-1 lg:row-end-3 lg:mb-0"
      >
        <picture class="inline-block">
          <source
            srcset="/src/assets/images/avatar_pc.png"
            media="(min-width: 1024px)"
          />
          <img src="/src/assets/images/avatar.png" alt="candidate avatar" />
        </picture>
        <div
          class="absolute inset-x-0 bottom-6 flex justify-between lg:bottom-0 lg:left-1/2 lg:flex-col-reverse"
        >
          <img
            class="mt-4 w-5/12 lg:w-auto lg:self-end"
            src="/src/assets/images/fish_decoration1.png"
            alt="fish decoration"
          />
          <h3 class="text-right text-brown lg:text-left">
            喵立翰
            <span class="block font-jost text-sm font-medium lg:text-xl"
              >Miao Li-Han</span
            >
          </h3>
        </div>
      </div>
      <p class="text-xs text-gray-600 md:text-base">
        我堅信，藉由推動更完善的貓咪福利和相關政策，更是間接地投資於台灣的未來。畢竟，民眾的身心健康與工作熱情是推動經濟的核心動力。透過完善的貓咪福利政策，為台灣的GDP
        經濟帶來巨大效益。<br
        />因此，我期望能在立法院內推進這些政策，確保每一隻貓咪都能得到他們應有的照顧，同時也為台灣的經濟發展助一臂之力。讓我們一同護航台灣的幸福經濟，從照顧每一隻貓咪開始。
      </p>
    </div>
  </section>
</main>
<footer></footer>

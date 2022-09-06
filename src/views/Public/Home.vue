<template>
  <section>
    <video v-if="$store.state.mobile || $store.state.window.width / $store.state.window.height < 1.25" playsinline autoplay muted preload loop class="absolute inset-0 block object-cover object-center">
      <source src="https://firebasestorage.googleapis.com/v0/b/saosimao.appspot.com/o/config%2Fportrait.mp4?alt=media&token=c08a3527-bbf3-4e7d-bf1f-349fcdef6483" type="video/mp4" />
      <source src="https://firebasestorage.googleapis.com/v0/b/saosimao.appspot.com/o/config%2Fportrait.mov?alt=media&token=80540beb-c09e-4f07-99bc-577ea59a68dd" type="video/quicktime" />
      <source src="https://firebasestorage.googleapis.com/v0/b/saosimao.appspot.com/o/config%2Fportrait.webm?alt=media&token=d4c4c82d-ad12-40c9-9096-6547370ec754" type="video/webm" />
    </video>
    <video v-else playsinline autoplay muted preload loop class="absolute inset-0 h-full w-full block object-cover object-center">
      <source src="https://firebasestorage.googleapis.com/v0/b/saosimao.appspot.com/o/config%2Flandscape.mov?alt=media&token=2ac2fbba-1208-4987-8d46-eb59c57490cf" type="video/quicktime" />
      <source src="https://firebasestorage.googleapis.com/v0/b/saosimao.appspot.com/o/config%2Flandscape.webm?alt=media&token=c6f7f67c-e2bd-443f-9751-1d500d37d5ac" type="video/webm" />
      <source src="https://firebasestorage.googleapis.com/v0/b/saosimao.appspot.com/o/config%2Flandscape.mp4?alt=media&token=44f10d8a-c021-4ee5-9d1a-fb33d4f1cbed" type="video/mp4" />
    </video>
    <div class="absolute inset-0 h-full w-full bg-black bg-opacity-20" />
  </section>
</template>
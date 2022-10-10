(async () => {
  const imagemin = await import("imagemin");
  const imageminMozjpeg = await import("imagemin-mozjpeg");
  const imageminWebp = await import("imagemin-webp");
  const imageminPngquant = await import("imagemin-pngquant");
  const files = await imagemin.default(
    [
      "build/static/media/*.jpg",
      "buildstatic/media//*.jpeg",
      "build/static/media/*.png",
      "build/static/media/*.webp",
    ],
    {
      destination: "build/static/media",
      plugins: [
        imageminMozjpeg.default({ quality: 50 }),
        imageminPngquant.default(),
        imageminWebp.default({ quality: 50 }),
      ],
    }
  );
  console.log(files);
})();

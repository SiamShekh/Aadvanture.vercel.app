import { useState } from "react";

export default function ImageSlider({ images }) {
  const [index, setIndex] = useState(0);
  const count = images.length;
  const current = images[index];

  const go = (next) => setIndex((next + count) % count);

  return (
    <div className="relative w-full overflow-hidden rounded-lg bg-black/30 aspect-[4/3]">
      <img
        src={current.url}
        alt={current.alt || ""}
        className="h-full w-full object-cover"
        draggable="false"
      />
      <button
        type="button"
        aria-label="Previous image"
        onClick={() => go(index - 1)}
        className="absolute left-2 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/70 text-2xl text-white"
      >
        ‹
      </button>
      <button
        type="button"
        aria-label="Next image"
        onClick={() => go(index + 1)}
        className="absolute right-2 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/70 text-2xl text-white"
      >
        ›
      </button>
      <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2">
        {images.map((image, imageIndex) => (
          <button
            key={image.url}
            type="button"
            aria-label={`Show image ${imageIndex + 1}`}
            aria-current={imageIndex === index}
            onClick={() => setIndex(imageIndex)}
            className={`h-2.5 w-2.5 rounded-full ${imageIndex === index ? "bg-[#B9FF24]" : "bg-white/70"}`}
          />
        ))}
      </div>
    </div>
  );
}

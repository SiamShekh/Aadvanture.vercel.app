import { useState } from "react";

const stories = [
  {
    title: "Trailblazer's Triumph: Tales from the Top",
    image: "https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=1200&q=80",
    body: "Embark on a journey of triumph with Trailblazer's Triumph! Our trails are not just paths; they are gateways to personal victory. Experience the thrill of conquering new heights, guided by experts through carefully curated routes. Each step is a testament to your resilience, leaving you with a profound sense of accomplishment.",
  },
  {
    title: "Nature's Embrace: Trailblazer Tales",
    image: "https://static.toiimg.com/photo/67382132.cms",
    body: "Immerse yourself in the beauty of the great outdoors with Nature's Embrace. From the invigorating mountain air to the camaraderie of fellow adventurers, every journey is a testament to the spirit of exploration. Meticulously crafted routes, coupled with insightful guidance, make each trek a seamless blend of challenge and reward.",
  },
  {
    title: "Peak Pursuits: Testimonials from Summit Seekers",
    image: "https://blog.daraz.com.bd/wp-content/uploads/2019/12/Tours-and-Travel.jpg",
    body: "Scale the heights of achievement with Peak Pursuits! Our trails lead to more than just mountain summits; they pave the way to personal triumph. The well-curated experiences, coupled with the expertise of our guides, ensure that each ascent is a transformative adventure.",
  },
  {
    title: "Elevation Euphoria: Pinnacle Praise",
    image: "https://img.freepik.com/premium-photo/travel-world-monuments-concept_117023-14.jpg",
    body: "Elevate your spirits and discover euphoria with Elevation Euphoria! Our carefully designed trails and panoramic views create an unforgettable adventure. The expertly guided treks and thoughtfully planned routes ensure a seamless journey, leaving you with a deep sense of achievement and elation.",
  },
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);
  const [startX, setStartX] = useState(null);
  const count = stories.length;
  const story = stories[index];

  const go = (next) => setIndex((next + count) % count);

  return (
    <section className="bg-[#031403] px-4 py-16 sm:px-6 lg:px-10" aria-label="Customer stories">
      <h2 className="section-title">
        Customer Chronicles: <br /> Stories of Adventure
      </h2>
      <p className="section-copy text-white">
        We invite you to share your own tales, contributing to a community woven together by a shared love for adventure. Join us in celebrating the spirit of exploration and the remarkable stories that unfold along the way.
      </p>

      <div
        className="mx-auto mt-8 max-w-6xl"
        onPointerDown={(event) => setStartX(event.clientX)}
        onPointerUp={(event) => {
          if (startX == null) return;
          const delta = event.clientX - startX;
          if (delta > 40) go(index - 1);
          if (delta < -40) go(index + 1);
          setStartX(null);
        }}
      >
        <article className="overflow-hidden rounded-xl border-2 border-yellow-400 bg-[#0B2B04] md:grid md:grid-cols-2">
          <img
            draggable="false"
            src={story.image}
            alt=""
            className="h-52 w-full bg-neutral-900 object-cover sm:h-64 md:h-full md:min-h-[280px]"
            onError={(event) => {
              event.currentTarget.onerror = null;
              event.currentTarget.style.visibility = "hidden";
            }}
          />
          <div className="flex flex-col justify-center p-5 sm:p-8">
            <h3 className="leading-safe font-Tektur text-xl text-white sm:text-2xl lg:text-4xl">{story.title}</h3>
            <p className="mt-4 font-Genos text-sm leading-relaxed text-white sm:text-base lg:text-lg">{story.body}</p>
          </div>
        </article>

        <div className="mt-5 flex items-center justify-center gap-4">
          <button
            type="button"
            aria-label="Previous story"
            onClick={() => go(index - 1)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-[#B9FF24] text-2xl text-white"
          >
            ‹
          </button>
          <div className="flex gap-2" role="tablist" aria-label="Choose a story">
            {stories.map((item, storyIndex) => (
              <button
                key={item.title}
                type="button"
                role="tab"
                aria-selected={storyIndex === index}
                aria-label={`Show story ${storyIndex + 1}`}
                onClick={() => setIndex(storyIndex)}
                className={`h-2.5 w-2.5 rounded-full ${storyIndex === index ? "bg-[#B9FF24]" : "bg-white/40"}`}
              />
            ))}
          </div>
          <button
            type="button"
            aria-label="Next story"
            onClick={() => go(index + 1)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-[#B9FF24] text-2xl text-white"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

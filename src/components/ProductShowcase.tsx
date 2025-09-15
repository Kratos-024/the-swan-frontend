const ProductShowcase = ({
  imageUrl = "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
  alt = "AI Portrait Studio Interface",
  title = "AI Portrait Studio",
}) => {
  return (
    <div className="relative z-10 w-fit    rounded-lg md:rounded-3xl  bg-amber-200  ">
      <div className="mx-auto flex    rounded-lg md:rounded-3xl  justify-center opacity-100">
        <div
          className="relative w-fit aspect-video
         
          rounded-3xl"
        >
          <img
            alt={alt}
            className="w-fit object-contain
                       object-center
             rounded-lg md:rounded-3xl shadow-2xl"
            src={imageUrl}
            loading="lazy"
          />

          <div className="absolute inset-0 rounded-lg md:rounded-3xl bg-gradient-to-t from-black/10 via-transparent to-transparent pointer-events-none" />

          <div className="absolute bottom-4 left-4 right-4 text-center">
            <h3 className="text-white text-lg font-semibold drop-shadow-lg opacity-0 hover:opacity-100 transition-opacity duration-300">
              {title}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductShowcase;

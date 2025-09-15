import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const ProductShowcase = ({
  imageUrl = "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
  alt = "AI Portrait Studio Interface",
  title = "AI Portrait Studio",
}) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [0.6, 1.2]);
  return (
    <motion.div
      ref={ref}
      style={{ scale }}
      transition={{ type: "spring", stiffness: 80, damping: 20 }}
      className="relative z-10: 2xl:w-[1680px] xl:w-[1360px] lg:w-[1240px] mx-auto bg-red-100 rounded-lg md:rounded-3xl    "
    >
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
          ></img>

          <div className="absolute inset-0 rounded-lg md:rounded-3xl bg-gradient-to-t from-black/10 via-transparent to-transparent pointer-events-none" />

          <div className="absolute bottom-4 left-4 right-4 text-center">
            <h3 className="text-white text-lg font-semibold drop-shadow-lg opacity-0 hover:opacity-100 transition-opacity duration-300">
              {title}
            </h3>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductShowcase;

import { motion } from "framer-motion";
import { useState } from "react";
import { InputTaker } from "./InputTaker";
import { PiSidebar } from "react-icons/pi";

export const ChatHero = () => {
  const [isAtBottom, setIsAtBottom] = useState(false);

  const handleInputClick = () => {
    setIsAtBottom(true);
  };

  return (
    <section className="w-full  flex justify-center  bg-[#1d1e1e] items-center h-screen relative">
      <div>
        <div className=" absolute top-0 left-10"></div>
        <div className="-translate-y-28 flex items-center flex-col">
          <span className="text-[116px] font-bold bg-[linear-gradient(120deg,#EDC98F,#9861E4)] bg-clip-text text-transparent">
            ❃
          </span>
          <h1 className="flex flex-col items-center  ">
            <span
              className="text-[38px] font-semibold bg-gradient-to-b
           from-white to-neutral-700 text-transparent bg-clip-text"
            >
              {" "}
              Welcome Back,
            </span>
            <span
              className="text-[38px] font-semibold bg-gradient-to-b
           from-white to-neutral-700 text-transparent bg-clip-text"
            >
              How Can I Help You?{" "}
            </span>
          </h1>

          <div className="gap-3 mt-3   flex flex-col ">
            <div className=" flex gap-1 justify-center items-center ">
              <div
                className="flex px-5 py-2 cursor-pointer
                 items-center gap-2 bg-gradient-to-br
                  from-white to-neutral-700 
                  dark:bg-gradient-to-br dark:from-white/[0.08] dark:to-white/[0.02] rounded-3xl"
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 640 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M624 448H16c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16h608c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16zM80.55 341.27c6.28 6.84 15.1 10.72 24.33 10.71l130.54-.18a65.62 65.62 0 0 0 29.64-7.12l290.96-147.65c26.74-13.57 50.71-32.94 67.02-58.31 18.31-28.48 20.3-49.09 13.07-63.65-7.21-14.57-24.74-25.27-58.25-27.45-29.85-1.94-59.54 5.92-86.28 19.48l-98.51 49.99-218.7-82.06a17.799 17.799 0 0 0-18-1.11L90.62 67.29c-10.67 5.41-13.25 19.65-5.17 28.53l156.22 98.1-103.21 52.38-72.35-36.47a17.804 17.804 0 0 0-16.07.02L9.91 230.22c-10.44 5.3-13.19 19.12-5.57 28.08l76.21 82.97z"></path>
                </svg>
                <span>What is apple?</span>
              </div>
              <div
                className="flex px-5 py-2 cursor-pointer
                 items-center gap-2 bg-gradient-to-br
                  from-white to-neutral-700 
                  dark:bg-gradient-to-br dark:from-white/[0.08] dark:to-white/[0.02] rounded-3xl"
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 640 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M624 448H16c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16h608c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16zM80.55 341.27c6.28 6.84 15.1 10.72 24.33 10.71l130.54-.18a65.62 65.62 0 0 0 29.64-7.12l290.96-147.65c26.74-13.57 50.71-32.94 67.02-58.31 18.31-28.48 20.3-49.09 13.07-63.65-7.21-14.57-24.74-25.27-58.25-27.45-29.85-1.94-59.54 5.92-86.28 19.48l-98.51 49.99-218.7-82.06a17.799 17.799 0 0 0-18-1.11L90.62 67.29c-10.67 5.41-13.25 19.65-5.17 28.53l156.22 98.1-103.21 52.38-72.35-36.47a17.804 17.804 0 0 0-16.07.02L9.91 230.22c-10.44 5.3-13.19 19.12-5.57 28.08l76.21 82.97z"></path>
                </svg>
                <span>What is apple?</span>
              </div>
              <div
                className="flex px-5 py-2 cursor-pointer
                 items-center gap-2 bg-gradient-to-br
                  from-white to-neutral-700 
                  dark:bg-gradient-to-br dark:from-white/[0.08] dark:to-white/[0.02] rounded-3xl"
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 640 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M624 448H16c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16h608c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16zM80.55 341.27c6.28 6.84 15.1 10.72 24.33 10.71l130.54-.18a65.62 65.62 0 0 0 29.64-7.12l290.96-147.65c26.74-13.57 50.71-32.94 67.02-58.31 18.31-28.48 20.3-49.09 13.07-63.65-7.21-14.57-24.74-25.27-58.25-27.45-29.85-1.94-59.54 5.92-86.28 19.48l-98.51 49.99-218.7-82.06a17.799 17.799 0 0 0-18-1.11L90.62 67.29c-10.67 5.41-13.25 19.65-5.17 28.53l156.22 98.1-103.21 52.38-72.35-36.47a17.804 17.804 0 0 0-16.07.02L9.91 230.22c-10.44 5.3-13.19 19.12-5.57 28.08l76.21 82.97z"></path>
                </svg>
                <span>What is apple?</span>
              </div>
            </div>{" "}
            <div className=" flex gap-1 justify-center items-center ">
              {" "}
              <div
                className="flex px-5 py-2 cursor-pointer
                 items-center gap-2 bg-gradient-to-br
                  from-white to-neutral-700 
                  dark:bg-gradient-to-br dark:from-white/[0.08] dark:to-white/[0.02] rounded-3xl"
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 640 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M624 448H16c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16h608c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16zM80.55 341.27c6.28 6.84 15.1 10.72 24.33 10.71l130.54-.18a65.62 65.62 0 0 0 29.64-7.12l290.96-147.65c26.74-13.57 50.71-32.94 67.02-58.31 18.31-28.48 20.3-49.09 13.07-63.65-7.21-14.57-24.74-25.27-58.25-27.45-29.85-1.94-59.54 5.92-86.28 19.48l-98.51 49.99-218.7-82.06a17.799 17.799 0 0 0-18-1.11L90.62 67.29c-10.67 5.41-13.25 19.65-5.17 28.53l156.22 98.1-103.21 52.38-72.35-36.47a17.804 17.804 0 0 0-16.07.02L9.91 230.22c-10.44 5.3-13.19 19.12-5.57 28.08l76.21 82.97z"></path>
                </svg>
                <span>Search</span>
              </div>
              <div
                className="flex px-5 py-2 cursor-pointer
                 items-center gap-2 bg-gradient-to-br
                  from-white to-neutral-700 
                  dark:bg-gradient-to-br dark:from-white/[0.08] dark:to-white/[0.02] rounded-3xl"
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 640 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M624 448H16c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16h608c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16zM80.55 341.27c6.28 6.84 15.1 10.72 24.33 10.71l130.54-.18a65.62 65.62 0 0 0 29.64-7.12l290.96-147.65c26.74-13.57 50.71-32.94 67.02-58.31 18.31-28.48 20.3-49.09 13.07-63.65-7.21-14.57-24.74-25.27-58.25-27.45-29.85-1.94-59.54 5.92-86.28 19.48l-98.51 49.99-218.7-82.06a17.799 17.799 0 0 0-18-1.11L90.62 67.29c-10.67 5.41-13.25 19.65-5.17 28.53l156.22 98.1-103.21 52.38-72.35-36.47a17.804 17.804 0 0 0-16.07.02L9.91 230.22c-10.44 5.3-13.19 19.12-5.57 28.08l76.21 82.97z"></path>
                </svg>
                <span>Help</span>
              </div>
            </div>
          </div>
        </div>

        <motion.div
          onClick={handleInputClick}
          animate={{
            y: isAtBottom ? 260 : 0,
          }}
          transition={{
            duration: 0.6,
            ease: [0.4, 0, 0.2, 1],
          }}
          className="cursor-pointer mt-8"
        >
          <InputTaker />
        </motion.div>
      </div>
    </section>
  );
};

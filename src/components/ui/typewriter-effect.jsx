import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

export const TypewriterEffect = ({ words, className, cursorClassName }) => {
  const wordsArray = words.map((word) => {
    return {
      ...word,
      text: word.text.split(""),
    }
  })

  const renderWords = () => {
    return (
      <div>
        {wordsArray.map((word, idx) => {
          return (
            <div key={`word-${idx}`} className="inline-block">
              {word.text.map((char, index) => (
                <span
                  key={`char-${index}`}
                  className={cn(`dark:text-white text-black `, word.className)}
                >
                  {char}
                </span>
              ))}
              &nbsp;
            </div>
          )
        })}
      </div>
    )
  }

  return (
    <div className={cn("flex justify-center items-center my-6 w-full px-4", className)}>
      <motion.div
        className="overflow-hidden pb-2 max-w-full"
        initial={{
          width: "0%",
        }}
        whileInView={{
          width: "fit-content",
        }}
        transition={{
          duration: 2,
          ease: "linear",
          delay: 1,
        }}
      >
        <div
          className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight"
          style={{
            whiteSpace: "normal",
            wordBreak: "break-word",
          }}
        >
          {renderWords()}{" "}
        </div>{" "}
      </motion.div>
      <motion.span
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className={cn(
          "block rounded-sm w-[4px] h-6 sm:h-8 md:h-12 lg:h-16 xl:h-20 bg-primary flex-shrink-0",
          cursorClassName
        )}
      ></motion.span>
    </div>
  )
}

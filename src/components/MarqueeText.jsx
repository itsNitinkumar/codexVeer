import { motion } from 'framer-motion'

export default function MarqueeText({ items, speed = 80 }) {
    // Calculate total width based on items
    const totalWidth = items.length * 300 // Approximate width per item

    return (
        <div className="relative overflow-hidden bg-muted/30 border-y py-6">
            <motion.div
                className="flex gap-12 whitespace-nowrap"
                animate={{
                    x: [0, -totalWidth],
                }}
                transition={{
                    x: {
                        repeat: Infinity,
                        repeatType: "loop",
                        duration: speed,
                        ease: "linear",
                    },
                }}
            >
                {/* Render items multiple times for seamless loop */}
                {[...items, ...items, ...items].map((item, index) => (
                    <div key={index} className="flex items-center gap-4">
                        <span className="text-xl font-bold text-foreground/80 tracking-wide">
                            {item}
                        </span>
                        <span className="text-primary text-xl">◆</span>
                    </div>
                ))}
            </motion.div>
        </div>
    )
}

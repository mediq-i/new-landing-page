"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";

// Counter component for animating numbers
// function Counter({ from, to, decimals = 0 }: { from: number; to: number; decimals?: number }) {
//   const count = useMotionValue(from)
//   const rounded = useSpring(count, { stiffness: 50, damping: 15 })
//   const ref = useRef(null)
//   const inView = useInView(ref, { once: true, margin: "-100px" })

//   useEffect(() => {
//     if (inView) {
//       count.set(to)
//     }
//   }, [count, inView, to])

//   useEffect(() => {
//     return rounded.on("change", (latest) => {
//       if (ref.current) {
//         ref.current.textContent = latest.toFixed(decimals)
//       }
//     })
//   }, [rounded, decimals])

//   return <span ref={ref}>{from}</span>
// }

// // Stat component for displaying individual statistics
// function Stat({
//   number,
//   label,
//   suffix = "",
//   decimals = 0,
// }: {
//   number: number
//   label: string
//   suffix?: string
//   decimals?: number
// }) {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       transition={{ duration: 0.5 }}
//       className="mb-8 pr-4 border-r border-gray-200 last:border-r-0"
//     >
//       <div className="text-3xl font-bold mb-2 text-primary">
//         <Counter from={0} to={number} decimals={decimals} />
//         {suffix}
//       </div>
//       <p className="text-sm text-muted-foreground">{label}</p>
//     </motion.div>
//   )
// }

export default function AboutSection() {
  return (
    <section className="py-16 px-6 md:px-12 bg-background" id="about">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-primary font-medium"
            >
              About Us
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold mt-2 mb-4"
            >
              Comprehensive Health Care
              <br />
              The Best For You
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-muted-foreground mb-8"
            >
              We care for our patient that's why we have the best, exclusive and
              ground-breaking technology to give you what you need.
            </motion.p>
            {/* 
            <div className="grid grid-cols-2 gap-4">
              <Stat number={19.8} suffix="K+" decimals={1} label="Patients served and treated every week in here" />
              <Stat number={1200} suffix="+" label="Doctors, nurses and other medical person collaborated" />
              <Stat
                number={98.99}
                decimals={2}
                suffix="%"
                label="Recovery rate of our patient with every treatment and medicine"
              />
              <Stat number={300} suffix="~" label="Health complexes/department joined and take part" />
            </div> */}
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative h-[500px] rounded-2xl overflow-hidden"
          >
            <Image
              src="/images/about-doctors.png"
              alt="Medical professional in surgical attire"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

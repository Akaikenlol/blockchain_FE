import { cn } from "@/lib/utils";
import React from "react";
import { ComponentPropsWithoutRef } from "react";
import { motion } from "framer-motion";

const Circle = (
	props: ComponentPropsWithoutRef<"div"> & { animate?: boolean }
) => {
	const { children, className, animate = false } = props;
	return (
		<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
			<div
				className={cn(
					"bg-zinc-900 size-[240px] inline-flex items-center justify-center rounded-full absolute outline outline-[6px] -outline-offset-[6px] outline-fuchsia-500/10",
					className
				)}
			>
				<motion.div
					animate={
						animate && {
							rotate: 360,
						}
					}
					transition={{
						ease: "linear",
						duration: 15,
						repeat: Infinity,
					}}
					className={cn(
						"outline outline-[6px] -outline-offset-[6px] outline-fuchsia-500/10 absolute inset-0 rounded-full border-[6px] border-transparent",
						animate && "border-t-fuchsia-500/30"
					)}
				/>
				{children}
			</div>
		</div>
	);
};

export default Circle;

import React from "react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { ComponentPropsWithoutRef } from "react";

const TextButton = (
	props: ComponentPropsWithoutRef<"button"> & { color?: string }
) => {
	const { className, color, children } = props;
	return (
		<Button
			className={cn(
				"text-sm font-heading uppercase font-extrabold tracking-wider text-fuchsia-500",
				color === "lime" && "text-lime-500",
				color === "cyan" && "text-cyan-500",
				color === "violet" && "text-violet-500",
				className
			)}
		>
			{children}
		</Button>
	);
};

export default TextButton;

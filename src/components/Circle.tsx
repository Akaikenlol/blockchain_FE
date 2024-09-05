import { cn } from "@/lib/utils";
import React from "react";
import { ComponentPropsWithoutRef } from "react";

const Circle = (props: ComponentPropsWithoutRef<"div">) => {
	const { children, className } = props;
	return (
		<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
			<div
				className={cn(
					"bg-zinc-900 size-[240px] inline-flex items-center justify-center rounded-full outline outline-[6px] -outline-offset-[6px] outline-fuchsia-500/10 absolute",
					className
				)}
			>
				{children}
			</div>
		</div>
	);
};

export default Circle;

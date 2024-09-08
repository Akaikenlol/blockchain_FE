import { Button } from "@/components/ui/button";
import { cardData } from "@/constants";
import { cn } from "@/lib/utils";
import React from "react";

const FeaturesCard = () => {
	return (
		<section className="py-24 overflow-x-clip md:-mt-28">
			<div className="container">
				<h2 className="font-heading font-black text-4xl md:text-5xl lg:text-6xl text-center">
					Discover the future of blockchain with Blockchain with Blockforge.
				</h2>
				<div className="mt-36 lg:mt-48 flex">
					<div className="flex flex-none gap-8">
						{cardData.map((card, i) => (
							<div
								className="relative z-0 p-8 md:p-10 max-w-xs md:max-w-md group"
								key={i}
							>
								<div
									className={cn(
										"absolute size-16 rounded-xl bg-fuchsia-500 top-1.5 right-1.5 -z-10 blur-lg opacity-0 group-hover:opacity-100 transition duration-300",
										card.color === "lime" && "bg-lime-500",
										card.color === "cyan" && "bg-cyan-500",
										card.color === "violet" && "bg-violet-500"
									)}
								/>
								<div
									className={cn(
										"absolute size-16 rounded-xl bg-fuchsia-500 group-hover:bg-fuchsia-400 transition duration-300 top-1.5 right-1.5 -z-10",
										card.color === "lime" &&
											"bg-lime-500 group-hover:bg-lime-400",
										card.color === "cyan" &&
											"bg-cyan-500 group-hover:bg-cyan-400",
										card.color === "violet" &&
											"bg-violet-500 group-hover:bg-violet-400"
									)}
								/>
								<div className="absolute inset-0 bg-zinc-800 -z-10 rounded-2xl [mask-image:linear-gradient(225deg,transparent,transparent_40px,black_40px)]" />
								<div className="flex justify-center -mt-28">
									<div className="inline-flex relative">
										<div className="absolute group-hover:bg-zinc-950/30 transition duration-300 h-4 w-full top-[calc(100%+16px)] bg-zinc-950/70 rounded-[100%] [mask-image:radial-gradient(closest-side,black,transparent)]" />
										<img
											src={card.image}
											alt={card.alt}
											className="size-40 group-hover:-translate-y-6 transition duration-300"
										/>
									</div>
								</div>
								<h3 className="font-heading font-black text-3xl mt-12">
									{card.title}
								</h3>
								<p className="text-lg text-zinc-400 mt-4">{card.description}</p>
								<div className="flex justify-between items-center mt-12">
									<Button
										className={cn(
											"text-sm font-heading uppercase font-extrabold tracking-wider text-fuchsia-500",
											card.color === "lime" && "text-lime-500",
											card.color === "cyan" && "text-cyan-500",
											card.color === "violet" && "text-violet-500"
										)}
									>
										Learn More
									</Button>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke-width="1.5"
										stroke="currentColor"
										className="size-6 text-zinc-500 group-hover:text-zinc-300 transition duration-300 -translate-x-2 group-hover:translate-x-0"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
										/>
									</svg>
								</div>
							</div>
						))}
					</div>
				</div>
				<div className="flex justify-center mt-10">
					<div className="bg-zinc-950 inline-flex gap-4 p-2.5 rounded-full">
						{cardData.map(({ title }) => (
							<div
								key={title}
								className="size-2.5 bg-zinc-500 rounded-full cursor-pointer"
							></div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default FeaturesCard;

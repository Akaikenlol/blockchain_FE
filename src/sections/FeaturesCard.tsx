import Card from "@/components/Card";
import { cardData } from "@/constants";
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
						{cardData.map(({ image, alt, title, description, color }) => (
							<Card key={title} className={"max-w-xs md:max-w-md"}>
								<div className="flex justify-center -mt-28">
									<div className="inline-flex relative">
										<div className="absolute group-hover:bg-zinc-950/30 transition duration-300 h-4 w-full top-[calc(100%+16px)] bg-zinc-950/70 rounded-[100%] [mask-image:radial-gradient(closest-side,black,transparent)]" />
										<img
											src={image}
											alt={alt}
											className="size-40 group-hover:-translate-y-6 transition duration-300"
										/>
									</div>
								</div>
								<h3 className="font-heading font-black text-3xl mt-12">
									{title}
								</h3>
								<p className="text-lg text-zinc-400 mt-4">{description}</p>
							</Card>
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

import { testimonials } from "@/constants";
import { cn } from "@/lib/utils";
import React from "react";

const Testimonials = () => {
	return (
		<section className="py-32 bg-zinc-800">
			<div className="container">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 md:gap-8 lg:gap-12">
					{testimonials.map((item, index) => (
						<blockquote
							key={index}
							className={cn(index === 2 && "md:hidden lg:block")}
						>
							<p className="font-heading text-3xl lg:text-4xl font-black">
								&ldquo;{item.text}&rdquo;
							</p>
							<cite className="mt-8 block">
								<div className="flex gap-3 items-center">
									<div>
										<div>
											<div
												className="size-16 bg-zinc-700 rounded-full bg-cover"
												style={{ backgroundImage: `url(${item.avatarImage})` }}
											></div>
										</div>
									</div>
									<div>
										<div className="text-lg not-italic font-black">
											{item.name}
										</div>
										<div className="text-zinc-400 not-italic">{item.title}</div>
									</div>
								</div>
							</cite>
						</blockquote>
					))}
				</div>
			</div>
		</section>
	);
};

export default Testimonials;

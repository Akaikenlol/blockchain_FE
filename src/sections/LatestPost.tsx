import Card from "@/components/Card";
import { CollectionEntry } from "astro:content";
import { getPostColorFromCategory } from "@/utils/postUtils";
import React from "react";
import Tag from "@/components/Tag";
import CutCornerButton from "@/components/CutCornerButton";
import { cn } from "@/lib/utils";
import { useRef, useState, useEffect } from "react";
import { useScroll, useTransform } from "framer-motion";
import { motion } from "framer-motion";

const LatestPost = (props: { latestPosts: CollectionEntry<"blog">[] }) => {
	const { latestPosts } = props;
	const targetRef = useRef(null);

	const { scrollYProgress } = useScroll({
		target: targetRef,
		offset: ["start end", "end start"],
	});

	const marginTop = useTransform(scrollYProgress, [0, 1], [0, 64]);
	return (
		<section className="py-60">
			<div className="container">
				<div className="max-w-3xl mx-auto">
					<h1 className="font-heading font-black text-4xl md:text-5xl lg:text-6xl text-center">
						Your portal to everything blockchain.
					</h1>
					<p className="text-xl lg:text-2xl text-center text-zinc-400 mt-8">
						Keep up with the newest trends, updates, and insights in the
						blockchain word, updated weekly.
					</p>
				</div>
				<div className="mt-16 md:mt-28 grid grid-cols-1 md:grid-cols-2 gap-8">
					<div className="flex flex-col gap-8">
						{latestPosts.map(
							({ data: { title, description, category } }, postIndex) => (
								<Card
									key={postIndex}
									buttonText={"Read More"}
									color={getPostColorFromCategory(category)}
									className={cn(
										(postIndex === 1 || postIndex === 3) && "md:hidden",
										postIndex % 2 === 0 ? "md:right-0" : "md:left-0"
									)}
								>
									<Tag color={getPostColorFromCategory(category)}>
										{category}
									</Tag>
									<h3 className="font-heading font-black text-3xl mt-3">
										{title}
									</h3>
									<p className="text-lg text-zinc-400 mt-6">{description}</p>
								</Card>
							)
						)}
					</div>
					<motion.div
						className="hidden md:flex flex-col gap-8 mt-16"
						ref={targetRef}
						style={{
							marginTop,
						}}
					>
						{latestPosts.map(
							({ data: { title, description, category } }, postIndex) => (
								<Card
									key={postIndex}
									buttonText={"Read More"}
									color={getPostColorFromCategory(category)}
									className={cn(
										(postIndex === 0 || postIndex === 2) && "md:hidden",
										postIndex % 2 === 0 ? "md:right-0" : "md:left-0"
									)}
								>
									<Tag color={getPostColorFromCategory(category)}>
										{category}
									</Tag>
									<h3 className="font-heading font-black text-3xl mt-3">
										{title}
									</h3>
									<p className="text-lg text-zinc-400 mt-6">{description}</p>
								</Card>
							)
						)}
					</motion.div>
				</div>
				<div className="flex justify-center mt-48 md:mt-32">
					<CutCornerButton>Read the Blog</CutCornerButton>
				</div>
			</div>
		</section>
	);
};

export default LatestPost;

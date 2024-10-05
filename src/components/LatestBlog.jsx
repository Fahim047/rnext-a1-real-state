import React from 'react';
import BlogCard from './BlogCard';
import { blogData } from '../data';

const LatestBlog = () => {
	return (
		<div className="w-full px-4 md:w-2/3 lg:w-6/12 xl:w-3/12">
			<div className="mb-10 w-full">
				<h4 className="mb-9 text-lg font-semibold text-white">Latest blog</h4>
				<div className="flex flex-col gap-8">
					{blogData.map((blog) => (
						<BlogCard
							key={blog.id}
							title={blog.title}
							imageUrl={blog.imageUrl}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default LatestBlog;

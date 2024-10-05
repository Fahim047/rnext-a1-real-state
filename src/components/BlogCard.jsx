const BlogCard = ({ title, imageUrl }) => {
	return (
		<a href="blog-details.html" className="group flex items-center gap-[22px]">
			<div className="overflow-hidden rounded">
				<img src={imageUrl} />
			</div>
			<span className="max-w-[180px] text-base text-gray-7 group-hover:text-white">
				{title}
			</span>
		</a>
	);
};

export default BlogCard;

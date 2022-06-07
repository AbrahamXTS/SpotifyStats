export const ArtistCard = ({artists}) => {
	
    return (
		<>
			{artists.map(({name, image, genres, link}) => (
				<div key={name} className='bg-primary flex gap-2 mb-2 rounded-lg'>
					<a href={link} target="_blank" rel="noopener noreferrer">
						<div className="w-24">
							<img src={image} alt={name} className="w-24 rounded-tl-lg rounded-bl-lg" />
						</div>
					</a>
					<div className='pt-3 text-white'>
						<p className='font-semibold'>{name}</p>
						<p className='font-light text-sm'>{genres.slice(0, 2).map((e) => e.charAt(0).toUpperCase() + e.slice(1)).join(", ")}</p>
					</div>
				</div>
			))}
		</>
	);
};

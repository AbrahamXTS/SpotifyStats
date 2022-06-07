export const UserCard = ({ user }) => {

    const { name, image } = user;

	return (
		<div className='bg-primary p-3 mt-7 rounded-lg w-full'>
			<p className='text-white text-center'>¡Hey {name}!</p>
		</div>
	);
};

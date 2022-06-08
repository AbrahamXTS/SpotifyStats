import { Sesion } from './Sesion';

export const ContentContainer = ({ children }) => {
	return (
		<div className="md:flex md:justify-center mb-10">
			<div className="mx-3 md:w-4/6">
                {children}
                <div className="mt-10 hidden fold:block">
					<Sesion />
				</div>
            </div>
		</div>
	);
};

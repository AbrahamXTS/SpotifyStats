import { TokenProvider } from "./providers";
import {
	ContentContainer,
	Navigation,
	NoContent,
	SelectService,
	Title,
} from "./components";

function App() {
	return (
		<TokenProvider>
			<Navigation />
			<Title />
			<ContentContainer>
				<SelectService />
				<NoContent />
			</ContentContainer>
		</TokenProvider>
	);
}

export default App;

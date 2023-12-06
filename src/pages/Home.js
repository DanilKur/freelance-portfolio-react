import Header from './../components/header/Header'

const Home = () => {
    return (
		<>
			<Header />
			<main className="section">
				<div className="container">
					<ul className="content-list">
						<li className="content-list__item">
							<h2 className="title-2">Front-end</h2>
							<p>
								HTML, CSS(SCSS), JavaScript, ReactJS, React-Redux, React-Router,  
								React-Hooks, NPM, BootStrap, GIT, Firebase, Webpack, API
							</p>
						</li>
					</ul>
				</div>
			</main>
		</>
	);
}

export default Home;

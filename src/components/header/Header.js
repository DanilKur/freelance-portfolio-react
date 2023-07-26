import "./style.css";

const Header = () => {
    return (
		<header className="header">
			<div className="header__wrapper">
				<h1 className="header__title">
					<strong>
						Hi, my name is <em>Danil</em>
					</strong>
					<br />a frontend developer
				</h1>
				<div className="header__text">
					<p>with passion for learning and creating.</p>
				</div>
				<a href="https://cv.djinni.co/91/da01326b0e15cf16369d3912efb7c0/Danil_Kurinnyi_Junior_Front-end_Developer_.pdf" className="btn">
					Download CV
				</a>
			</div>
		</header>
	);
}

export default Header;
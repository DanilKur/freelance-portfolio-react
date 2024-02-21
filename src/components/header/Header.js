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
				<a href="https://cv.djinni.co/aa/9976a47e9378123db5c37e1633e8dd/Danil_Kurinnyi__Front-end_Developer_.pdf" className="btn">
					Download CV
				</a>
			</div>
		</header>
	);
}

export default Header;

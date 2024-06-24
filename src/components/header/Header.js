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
				<a href="https://cv.djinni.co/28/51fb2a01aafe4f380231432807ab1e/Danil_Kurinnyi__Front-End_Engineer__.pdf" className="btn">
					Download CV
				</a>
			</div>
		</header>
	);
}

export default Header;

const Contacts = () => {
    return (
		<main className="section">
			<div className="container">
				<h1 className="title-1">Contacts</h1>

				<ul className="content-list">
					<li className="content-list__item">
						<h2 className="title-2">Location</h2>
						<p>Ukraine(Kharkiv)</p>
					</li>
					<li className="content-list__item">
						<h2 className="title-2">Telegram</h2>
						<p>
							<a href="tel:+380959313088">+38 (095) 931 30 88</a>
						</p>
					</li>
					<li className="content-list__item">
						<h2 className="title-2">Email</h2>
						<p>
							<a href="mailto:danilkau311@gmail.com">
								danilkau311@gmail.com
							</a>
						</p>
					</li>
				</ul>
			</div>
		</main>
	);
}

export default Contacts;
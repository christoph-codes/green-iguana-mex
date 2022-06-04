const drinks = {
	title: 'Beverages',
	description: 'All fountain drinks are unlimited refills while dining in.',
	content: [
		{
			title: 'Beverages',
			price: 2.49,
			description: `Pepsi | Diet Pepsi | Cherry Pepsi | Mountain Dew | Sierra Mist |
			Dr.Pepper | Diet Dr.Pepper | Mug Root Beer | Tropicana Lemonade |
			Brisk Raspberry Iced Tea | Crush Orange`,
		},
		{
			title: 'Mexican Drinks',
			price: 2.49,
			description: (
				<>
					<p>
						<strong>*** No Refills on Mexican Drinks***</strong>
					</p>
					<ul>
						<li>Jarritos (*Ask us About the Available Flavors)</li>
						<li>Sangria Non alcoholic</li>
						<li>Horchata (Cinnamon Rice Milk)</li>
					</ul>
				</>
			),
		},
	],
};

export default drinks;

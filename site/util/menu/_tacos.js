const tacos = {
	title: 'Tacos',
	description:
		'Enjoy our delicious selection of Tacos. Served with rice & beans',
	content: [
		{
			title: '3 Fish Tacos',
			price: 14.49,
			description: (
				<>
					Choose From Tilapia or Shrimp
					<br />
					<small>
						Includes Shredded Green Cabbage l Pico l Ranch
					</small>
				</>
			),
		},
		{
			title: '3 Mexican Tacos',
			price: 13.49,
			description: (
				<>
					Choose From Charbroiled Chicken l Ground Beef l Shredded
					Beef l Shredded Chicken l Carne Asada l Sweet Pork l
					Carnitas l<br />
					<small>
						Includes Cilantro l Pico l Guacamole l Tomatillo Sauce l
						Fried Jalapeños l Grilled Onions
					</small>
				</>
			),
		},
	],
};

export default tacos;

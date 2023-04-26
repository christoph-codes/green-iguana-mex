export const newMenuOptions: any[] = [
	{
		title: 'Plato Especiales Includes',
		description: (
			<>
				<p>Includes Rice & Beans</p>
				<p>
					Lettuce | Pico | Guacamole | Sour Cream | Corn or Flour
					Tortillas
				</p>
			</>
		),
		options: [
			{
				title: '3 Mexican Tacos',
				price: '13.49',
				description: (
					<>
						<p>Includes Rice & Beans</p>
						<p>
							Guacamole | Pico | Cilantro | Tomatillo Sauce |
							Fried Jalapeño
						</p>
						<p>
							<strong>Mix & Match Up To 3 Meats</strong>
						</p>
					</>
				),
			},
			{
				title: 'Mar Y Tierra',
				price: '17.49',
				description:
					'Carne Asada | 6 Grilled Shrimp | Grilled Onions | Jalapeños',
			},
			{
				title: 'Cielo Mar Y Tierra',
				price: '21.49',
				description:
					'Carne Asada | 6 Grilled Shrimp | Charbroiled Chicken | Grilled Onions | Jalapeños',
			},
			{
				title: 'Albañil Platter',
				price: '16.99',
				description:
					'Carne Asada | Chorizo Cactus | Grilled Onions | Jalapeños',
			},
			{
				title: 'Chile Verde',
				price: '13.49',
				description:
					'Marinated Pork | Special Seasoning | Homemade Salsa Verde',
			},
			{
				title: 'Carnitas Michoacana',
				price: '13.49',
				description:
					'Slowly Cooked Pork | Cilantro | Onions | Jalapeños | Green Sauce',
			},
		],
	},
	{
		title: 'Fajitas',
		description: (
			<>
				<p>
					<strong>Meats:</strong> Charboiled Chicken | Carne Asada |
					Grilled Shrimp
					<br />
					<small>Additional Charge for Double & Triple Shrimp</small>
				</p>
				<p>
					<strong>Toppings:</strong> Onions | Bell Peppers | Pico |
					Guacamole | Sour Cream | Rice | Beans | Lime
					<br />
					<small className="🔥text-tertiary">
						Smother Fajitas with Cheese & Sauce $1.99
					</small>
				</p>
			</>
		),
		options: [
			{
				title: 'Uno Meat',
				price: '16.99',
			},
			{
				title: 'Dos Meat',
				price: '19.49',
			},
			{
				title: 'Tres Meat',
				price: '22.99',
			},
		],
	},
	{
		title: 'Appetizers',
		options: [
			{
				title: 'Chips & Guac',
				description: (
					<>
						8oz | <strong className="🔥text-tertiary">$8.99</strong>
						<br />
						16oz |{' '}
						<strong className="🔥text-tertiary">$11.50</strong>
					</>
				),
			},
			{
				title: 'Chips & Queso',
				description: (
					<>
						8oz | <strong className="🔥text-tertiary">$8.99</strong>
						<br />
						16oz |{' '}
						<strong className="🔥text-tertiary">$11.50</strong>
					</>
				),
			},
			{
				title: 'Chips & Salsa',
				description: (
					<>
						8oz | <strong className="🔥text-tertiary">$5.99</strong>
						<br />
						16oz |{' '}
						<strong className="🔥text-tertiary">$8.99</strong>
					</>
				),
			},
		],
	},
	{
		title: 'Kids Menu',
		description: (
			<>
				<p>(12 & Under Includes Soft Drink)</p>
				<p>Includes Rice & Beans | $1.00 to add Meat</p>
			</>
		),
		options: [
			{
				title: 'Cheese Quesadilla',
				price: '4.50',
			},
			{
				title: 'Cheese Enchilada',
				price: '4.50',
			},
			{
				title: 'Bean & Cheese Burrito',
				price: '4.50',
				description: 'Refried Beans | Cheese',
			},
			{
				title: 'Crunchy or Soft Taco',
				price: '4.50',
				description: 'Includes Meat Option except Permium Meats',
			},
		],
	},
	{
		title: 'Sides',
		options: [
			{
				title: 'Beans',
				description: 'Refried Beans | Black Beans',
			},
			{
				title: 'Spanish Rice',
				description:
					'Carrot | Onions | Green Bell Peppers | Chicken Base | Salt | Vegetable Oil',
			},
		],
	},
	{
		title: 'Dressing',
		options: [
			{
				title: 'Avocado Ranch',
				price: '1.25',
			},
			{
				title: 'Spicy Cilantro',
				price: '1.25',
			},
			{
				title: 'Ranch',
				price: '1.25',
			},
			{
				title: 'Sweet Italian',
				price: '1.25',
			},
			{
				title: 'Guacamole',
				price: '1.25',
			},
			{
				title: 'Sour Cream',
				price: '1.25',
			},
			{
				title: 'Salsa 3oz',
				price: '1.25',
			},
		],
	},
	{
		title: 'Dessert',
		options: [
			{
				title: 'Tres Leches Cheesecake',
				price: '4.99',
			},
		],
	},
];

export default newMenuOptions;

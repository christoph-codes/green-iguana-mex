export type TMenuOption = {
	title: string;
	description?: string;
	options: {
		title: string;
		price?: string;
		description?: string;
	}[];
};

export const newMenuOptions: TMenuOption[] = [
	{
		title: 'Step 1: Choose Your Entree',
		description: 'Includes Rice & Beans',
		options: [
			{
				title: 'Burritos',
				price: '11.99',
				description:
					'Choice of Meat | Choice of Sauce | Smothered with Cheese',
			},
			{
				title: 'Iguana Salad',
				price: '11.49',
				description:
					'Deep Fried Tortilla | Rice | Beans | Romaine Lettuce | Olives | Tomatoes | Cheese | Guacamole | Sour Cream | Choice of Dressing',
			},
			{
				title: 'Chimichanga',
				price: '10.99',
				description:
					'Deep Fried Tortilla | Choice of Meat | Choice of Sauce | Smothered with Cheese | Guacamole | Sour Cream',
			},
			{
				title: 'Mexican Taco',
				price: '7.99',
				description:
					'Choice of Meat | Cilantro Pico | Guacamole | Tomatillo Sauce | Fried Jalapeños',
			},
			{
				title: 'Enchiladas',
				price: '8.99',
				description:
					'Choice of Meat | Choice of Sauce | Cheese | Sour Cream',
			},
			{
				title: 'Nachos',
				price: '11.50',
				description:
					'Fresh Tortilla Chips | Mixed Cheese | Refried Beans | Tomatoes | Onions | Jalapeños | Guacamole | Sour Cream',
			},
		],
	},
	{
		title: 'Step 2: Choose Your Protein',
		options: [
			{
				title: 'Chile Verde',
			},
			{
				title: 'Shredded Beef',
			},
			{
				title: 'Fajita Veggies',
			},
			{
				title: 'Shredded Chicken',
			},
			{
				title: 'Marinated Chicken',
				description: 'Add $1.50',
			},
			{
				title: 'Shredded Sweet Pork',
			},
			{
				title: 'Marinated Steak',
				description: 'Add $1.50',
			},
			{
				title: 'Spinach Artichoke',
				description: 'Add $1.00',
			},
		],
	},
	{
		title: 'Step 3: Choose Your Extras',
		options: [
			{
				title: 'Signature Sauces (All Sauces Are Mild)',
				description:
					'Green (Roasted Tomatillo | Red (Guajillo Chile) | White (Creamy) Signature Sauce',
			},
			{
				title: 'Beans',
				description: 'Refried Beans OR Black Beans',
			},
			{
				title: 'Spanish Rice',
				description:
					'Carrot | Onions | Green Bell Peppers | Chicken Base | Salt | Vegetable Oil',
			},
			{
				title: 'Sides',
				description:
					'Avocado Ranch: $1.25 | Spicy Cilantro: $1.25 | Guacamole: $1.99 | Sour Cream: $1.49',
			},
			{
				title: 'Appetizers',
				description:
					'Chips & Guacamole 16oz.: $11.50 | Chips & Salsa 16oz.: $7.50',
			},
			{
				title: 'Dessert',
				price: '4.99',
				description: 'Tres Leches Cheesecake',
			},
		],
	},
	{
		title: 'Kids',
		description: 'Includes Rice | Beans | Kids Drink',
		options: [
			{
				title: 'Cheese Quesadilla',
				price: '4.50',
				description: '$0.50 Extra for Meat',
			},
			{
				title: 'Cheese Enchilada',
				price: '4.50',
				description: '$0.50 Extra for Meat',
			},
		],
	},
];

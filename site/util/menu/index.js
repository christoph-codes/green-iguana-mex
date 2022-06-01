import MenuItem from '../../components/MenuItem';
import Row from '../../components/Row';
import appetizers from './_appetizers';
import drinks from './_drinks';
import burritos from './_burritos';

const renderCategory = (dataset) => (
	<Row columns={{ xs: [6, 6] }}>
		{dataset.map((app) => (
			<MenuItem {...app} />
		))}
	</Row>
);

const menu = [
	{
		title: 'Appetizers',
		content: renderCategory(appetizers),
	},
	{
		title: 'Drinks',
		content: renderCategory(drinks),
	},
	{
		title: 'Burritos',
		content: renderCategory(burritos),
	},
];

export default menu;

var styles = ['background: linear-gradient(90deg, #ff9900, #0008ff)',
	'border: 1px solid #001dff',
	'color: white',
	'display: block',
	'text-shadow: 0 1px 0 rgba(0, 0, 0, 0.3)',
	'line-height: 40px',
	'text-align: center',
	'font-size: 1.2em',
	'font-weight: bold',
	'text-transform: uppercase',
	'padding: 1em 2.5em',
	'margin-top: 1em'
].join(';');

console.log("Git's %cpull%c is awesome", styles, '');
console.log('Check out the docs here https://git-scm.com/docs/git-pull');

var iceCream = [
	['cookie dough', 'strawberry', 'vanilla'],
	'mango'
];

var presidents = [
	{
		firstName: 'Barack', // I don't consider Trump my president
		lastName: 'Obama',
		termLength: '4 years',
		party: 'Democratic',
		yearsofPresidency: '8'
	},

	{
		firstName: 'George',
		lastName: 'Bush',
		termLength: '4 years',
		party: 'Republican',
		yearsofPresidency: '8'
	},

	{
		firstName: 'Bill',
		lastName: 'Clinton',
		termLength: '4 years',
		party: 'Democratic',
		yearsofPresidency: '8'
	},

	{
		firstName: 'George',
		lastName: 'Bush',
		termLength: '4 years',
		party: 'Republican',
		yearsofPresidency: '4'
	},

	{
		firstName: 'Ronald',
		lastName: 'Reagan',
		termLength: '4 years',
		party: 'Republican',
		yearsofPresidency: '8'
	}
	];

console.log(presidents[2]['firstName'] + ' ' + presidents[2]['lastName']);

function howdy() {
	console.log('Gisel Olivares says hi!');
}

var numba = function (string) {
if (string < 7) {
	console.log('What a short little word!');
} else if (string === 7) {
	console.log('7, what a perfect choice!');
} else {
	console.log('I’m sorry, but that’s too many to count.');
}
};

# Button

This component is used to page Rows and uses the Container component.

## Usage

```react
<Button
	className='your-class'
	href='/home'
	fullWidth
	variant='secondary'
>
	Awesome Button
</Button>
```

## Props

| Prop        | Type                                                                                           | Description                                                                              | Default   |
| ----------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | --------- |
| `children`  | React.Nodes[]                                                                                  | However many elements are passed in between the Row tag will be rendered in flex columns | -         |
| `className` | string                                                                                         | The class names to be added to the Row                                                   | ''        |
| `variant`   | 'primary', 'secondary', 'tertiary', 'primary-outline', 'secondary-outline', 'tertiary-outline' | The variant determines the style of the button                                           | 'primary' |
| `href`      | 'string', undefined                                                                            | This will render the button as an anchor tag to route to different pages.                | undefined |
| `fullWidth` | boolean                                                                                        | This will stretch the buttons width 100% of its parent                                   | false     |

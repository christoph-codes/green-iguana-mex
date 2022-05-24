# Row

This component is used to page Rows and uses the Container component.

## Usage

```react
<Row
	className='your-class'
	hideContainer
	columns={xs: [12,12,12], sm: [2,6,3]}
>
	<div>Column 1</div>
	<div>Column 2</div>
	<div>Column 3</div>
</Row>
```

## Props

| Prop        | Type                                   | Description                                                                              | Default |
| ----------- | -------------------------------------- | ---------------------------------------------------------------------------------------- | ------- |
| `children`  | React.Nodes[]                          | However many elements are passed in between the Row tag will be rendered in flex columns | -       |
| `className` | string                                 | The class names to be added to the Row                                                   | ''      |
| `columns`   | { xs?: [], sm?: [], md?: [], lg?: [] } | An array of number of columns each element should span                                   | -       |

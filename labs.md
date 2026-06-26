# Labs

## Listing Asteroids

### Part 1

Build a list of asteroids as an unordered list in `src/asteroids/ListAsteroids.tsx`.

- Import the raw data from `src/data/asteroids.json`
- Convert it to an array of Asteroid types using asteroid-utilities.ts#convertData()
- Iterate over the array of Asteroids, rendering them as items in an unordered list
- Print the name, mass, and lastObserved values

### Part 2: As a grid

Convert the output to either an HTML table or use divs and [CSS grids](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Grid_layout).

HTML table example:

```html
<table>
	<thead>
		<tr>
			<th>Header 1</th>
			<th>Header 2</th>
			<th>Header 3</th>
			<th>Header 4</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>data 1</td>
			<td>data 2</td>
			<td>data 3</td>
			<td>data 4</td>
		</tr>
		<tr>
			<td>data 1</td>
			<td>data 2</td>
			<td>data 3</td>
			<td>data 4</td>
		</tr>
		<tr>
			<td>data 1</td>
			<td>data 2</td>
			<td>data 3</td>
			<td>data 4</td>
		</tr>
	</tbody>
</table>
```

Consider using the [Bootstrap table](https://getbootstrap.com/docs/5.3/content/tables/#overview) classes.

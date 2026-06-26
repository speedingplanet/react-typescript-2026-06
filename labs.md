# Labs

## Listing Asteroids

### Part 1

Build a list of asteroids as an unordered list in `src/asteroids/ListAsteroids.tsx`.

- Import the raw data from `src/data/asteroids.json`
- Convert it to an array of Asteroid types using asteroid-utilities.ts#convertData()
- Iterate over the array of Asteroids, rendering them as items in an unordered list
- Print the name, mass, and lastObserved values

### Part 2: Sorting

- Create two components: `AsteroidsGrid` and `SortForm`
- `AsteroidsGrid` gets passed an array of `Asteroid` objects and renders them (currently as a list)
- `SortForm` has to tell `ListAsteroids` about the selected field, and the selected sort direction
  - Sounds like a callback method.
  - Click on a field in `SortForm` it calls back to `ListAsteroids`, which sorts the array of asteroids and passes them to `AsteroidsGrid`
  - True for picking either a field to sort on or a direction to sort in

Suggested processes

1. Create `SortField` and have it emit the sortField and sortDirection to the console
2. Make sure it works
3. Make sure it passes that data to `ListAsteroids`
4. Create `AsteroidsGrid` and pass it a list of asteroids to render
5. Tie together `SortField` and `AsteroidsGrid`. When `SortField` emits an updated sort config, `ListAsteroids` sorts the `asteroids[]` array and then passes it to `AsteroidsGrid`

### Later: As a grid

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

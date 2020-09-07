import React from "react";

const Products = () => {
	const [products, setProducts] = React.useState([]);
	const [productName, setName] = React.useState("");
	const [productDescription, setDescription] = React.useState("");
	const [productVarieties, setVarieties] = React.useState([
		{
			size: "",
			color: "",
			quantity: "",
			price: "",
		},
	]);
	const [dateUploaded, setDateUploaded] = React.useState("");
	const [dateEdited, setDateEdited] = React.useState("");

	React.useEffect(() => {
		async function fetchData() {
			const data = await fetch("http://localhost:5000/products", {
				method: "GET",
				headers: {
					"Content-Type": "application/json",
				},
			});
			const response = await data.json();
			console.log("response", response);
			setProducts(response);
		}

		fetchData();
	}, []);

	return (
		<div>
			<table class="table table-dark">
				<thead>
					<tr>
						<th scope="col">#</th>
						<th scope="col">Name</th>
						<th scope="col">Description</th>
						<th scope="col">Varieties</th>
						<th scope="col">Date Uploaded</th>
						<th scope="col">Date Edited</th>
						<th scope="col"></th>
						<th scope="col"></th>
					</tr>
				</thead>
				<tbody>
					{products.map((product, index) => {
						return (
							<tr key={product.id}>
								<th scope="row">{index + 1}</th>
								<td>{product.productName}</td>
								<td>{product.productDescription}</td>
								<td>
									{product.productVarieties.map((variety, index) => {
										return (
											<tr key={index}>
												<td> color: {variety.color}</td>
												<td> price: ${variety.price}</td>
												<td> size: {variety.size}</td>
											</tr>
										);
									})}
								</td>
								<td>{product.dateUploaded}</td>
								<td>{product.dateEdited}</td>
								<td>
									<button className="btn btn-primary">Edit</button>
								</td>
								<td>
									<button className="btn btn-danger">Delete</button>
								</td>
							</tr>
							//NOT YET COMPLETED
						);
					})}
				</tbody>
			</table>
		</div>
	);
};

export default Products;

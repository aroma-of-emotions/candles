products<script>
  import {
    Content,
    Grid,
    Row,
    Column,
    Dropdown,
    Button,
    TextInput
  } from 'carbon-components-svelte';
  let products = [
    { id: "1", name: "Product 1", description: "Description for Product 1", category: "Movies" },
    { id: "2", name: "Product 2", description: "Description for Product 2", category: "Art" },
    // Add more products as needed
  ];
  let categories = ["Movies", "Art", "All"];
  let selectedCategory = "All";
  let filteredProducts = products;

  function filterProducts(category) {
    selectedCategory = category;
    filteredProducts = category === "All" ? products : products.filter(p => p.category === category);
  }
</script>

<Content>
  <Grid>
    <Row>
      <Column sm={4} md={8} lg={16}>
        <h1>Our Products</h1>
        <Dropdown
          id="category-dropdown"
          label="Select a category"
          placeholder="Choose a category"
          items={categories}
          bind:selectedItem={selectedCategory}
          on:select={({ detail }) => { filterProducts(detail.selectedItem); }}
        />
        <TextInput placeholder="Suggest a category" />
        <Button>Submit Suggestion</Button>
      </Column>
    </Row>
    {#each filteredProducts as product}
      <Row>
        <Column sm={4} md={8} lg={4}>
          <h3>{product.name}</h3>
          <p>{product.description}</p>
        </Column>
      </Row>
    {/each}
  </Grid>
</Content>
<script>
  import { Button, Column, Grid, Row } from 'carbon-components-svelte';
</script>

<Grid>
  <Row>
    <Column>
      <h1>Welcome to Our Site</h1>
      <p>
        This is a brief introduction or mission statement. Explore our products, learn about our
        company, and contact us for more information.
      </p>
      <Button href="/candles/about">Learn More About Us</Button>
    </Column>
  </Row>

  <!-- Add additional sections for About Us, Catalog, Partners, etc., here. -->
  <Row>
    <Column>
      <h2>About Us</h2>
      <p>Information about the company, mission, and advantages.</p>
    </Column>
  </Row>

  <!-- Repeat for other sections as needed -->
</Grid>

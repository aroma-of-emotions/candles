<script>
  import { Grid, Row, Column, TextInput, TextArea, Button } from 'carbon-components-svelte';
</script>

<Grid>
  <Row>
    <Column sm={4} md={8} lg={16}>
      <h1>Contact Us</h1>
      <p>If you have any questions or need further information, please reach out to us.</p>
    </Column>
  </Row>
  <Row>
    <Column sm={4} md={8} lg={8}>
      <TextInput id="name" labelText="Name" placeholder="Enter your name" />
      <TextInput id="email" type="email" labelText="Email" placeholder="Enter your email" />
      <TextArea id="message" labelText="Message" placeholder="Your message" />
      <Button>Submit</Button>
    </Column>
    <Column sm={4} md={8} lg={8}>
      <h3>Our Address</h3>
      <p>123 Example St, City, Country</p>
      <h3>Email</h3>
      <p>contact@example.com</p>
      <h3>Phone</h3>
      <p>+123 456 7890</p>
      <!-- Placeholder for a map or additional contact info -->
    </Column>
  </Row>
</Grid>

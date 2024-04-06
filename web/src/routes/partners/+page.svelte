<script>
  import { Grid, Row, Column, TextInput, Button } from 'carbon-components-svelte';
</script>

<Grid>
  <Row>
    <Column sm={4} md={8} lg={16}>
      <h1>Become a Partner</h1>
      <p>
        We're always looking to expand our network of partners. If you're interested in
        collaboration, let us know.
      </p>
    </Column>
  </Row>
  <Row>
    <Column sm={4} md={8} lg={8}>
      <TextInput id="company-name" labelText="Company Name" placeholder="Your company name" />
      <TextInput id="contact-name" labelText="Contact Name" placeholder="Your name" />
      <TextInput id="email" type="email" labelText="Email" placeholder="Your email" />
      <Button>Submit Interest</Button>
    </Column>
    <Column sm={4} md={8} lg={8}>
      <h3>Why Partner with Us?</h3>
      <p>
        Learn about the benefits of being a partner, including access to our resources,
        collaborative opportunities, and shared growth.
      </p>
    </Column>
  </Row>
</Grid>

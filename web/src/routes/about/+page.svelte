<script>
  import { Grid, Row, Column, Button } from 'carbon-components-svelte';
</script>

<Grid>
  <Row>
    <Column sm={4} md={8} lg={16}>
      <h1>About Us</h1>
      <p>
        Welcome to our website! We're dedicated to providing you with the best experience possible.
      </p>
    </Column>
  </Row>
  <Row>
    <Column sm={4} md={8} lg={8}>
      <h2>Our Mission</h2>
      <p>
        Our mission is to solve problems X, Y, and Z by offering innovative solutions that make a
        difference in our users' lives.
      </p>
    </Column>
    <Column sm={4} md={8} lg={8}>
      <h2>Why Choose Us?</h2>
      <p>
        We understand the challenges you face and offer tailored solutions. Our dedicated team
        ensures you receive top-notch service and support.
      </p>
    </Column>
  </Row>
  <Row>
    <Column sm={4} md={8} lg={16}>
      <h2>Our Approach</h2>
      <p>
        At the heart of our approach is a commitment to quality and innovation. We continuously
        strive to improve and adapt, ensuring we always offer the best.
      </p>
    </Column>
  </Row>
  <Row>
    <Column sm={4} md={8} lg={16}>
      <Button>Learn More</Button>
    </Column>
  </Row>
</Grid>

import React from 'react';

import {
  Footer,
  Contact,
  CopyrightContaienr,
  Info,
  Text,
} from './footer.style';

const FooterComponent = () => {
  return (
    <Footer>
      <Info>
        <Contact>
          <h3>Contact</h3>
          <h4>email : millagoss19@gmail.com</h4>
          <h4>phone : +251923624645</h4>
        </Contact>
        <Text>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur,
            perspiciatis sed minus maiores non eaque rem consectetur
            necessitatibus ut iste assumenda illo, in ipsum dolore, veritatis
            officia impedit quam. Officia.
          </p>
        </Text>
      </Info>
      <CopyrightContaienr>
        <span>&#169;</span>Copyright
      </CopyrightContaienr>
    </Footer>
  );
};

export default FooterComponent;

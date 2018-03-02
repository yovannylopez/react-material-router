import React from 'react';

import {AppBar, RaisedButton} from 'material-ui';
import {Link} from 'react-router-dom';

const Home = () => (
  <div>
    <AppBar
      title="About"
      showMenuIconButton={false} />
    <Link to="/">
      <RaisedButton
        label="go to home"
        secondary={true}
        className="Button" />
    </Link>
  </div>
)

export default Home;

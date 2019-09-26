import React from 'react';

class NavBar extends React.Component {

  state = {
    links: [
      { path: '/', title: 'Home' },
      { path: '/posts/new', title: 'Add post' },
      { path: '/posts', title: 'Posts' },
      { path: '/contact', title: 'Contact' },
    ],
  }

  render() {
    const {links} = this.state;
    return (
      <nav>
     <Logo/>
     <MainMenu links={links}></MainMenu>
     </nav>
    );
  }

}

export default NavBar;
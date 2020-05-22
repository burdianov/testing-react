import React from 'react';
import {connect} from 'react-redux';

import Header from './components/header';
import './app.scss';
import Headline from './components/headline';
import {fetchPosts} from './redux/actions';
import SharedButton from './components/button';
import ListItem from './components/listItem';

const tempArr = [{
  firstName: 'Joe',
  lastName: 'Bloggs',
  email: 'joebloggs@gmail.com',
  age: 24,
  onlineStatus: true
}];

const App = ({posts, fetchPosts}) => {
  const fetch = () => {
    fetchPosts();
  }

  const configButton = {
    buttonText: 'Get Posts',
    emitEvent: fetch
  }

  return (
    <div className="App">
      <Header />
      <section className='main'>
        <Headline header='Posts' desc='Click the button to render props.'
                  tempArr={tempArr} />
        <SharedButton {...configButton} />
        {posts.length > 0 &&
        <div>
          {posts.map((post, index) => {
            const {title, body} = post;
            const configListItem = {
              title,
              desc: body
            }
            return (
              <ListItem key={index} {...configListItem} />
            );
          })}
        </div>
        }
      </section>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    posts: state.posts
  }
};

export default connect(mapStateToProps, {fetchPosts})(App);

import React from 'react';
import { PropTypes } from 'prop-types';
import PostsList from '../PostsList/PostsList';
import Spinner from '../../common/Spinner/Spinner';
import Alert from '../../common/Alert/Alert';
import Pagination from '../../common/Pagination/Pagination';


class Posts extends React.Component {

  componentDidMount() {
    const { loadPostsByPage } = this.props;
    loadPostsByPage(1);
  }

  loadPostsPage = (page) => {
    const { loadPostsByPage } = this.props;
    loadPostsByPage(page);
  }

  render() {
    const {posts, request, pages} = this.props;
    const {loadPostsPage} = this;

    const textin =  request.pending ? ( 
        <Spinner /> 
      ) : request.success ? ( 
         posts.length > 0 ? (
          <div>
            <PostsList posts={posts} />
            <Pagination pages={pages} onPageChange={loadPostsPage} />
          </div>
      ) : ( 
        <Alert variant="info"> No posts!!! </Alert>
      )) : ( 
        <Alert variant="error"> {request.error} </Alert>
      );

    return (
      <div> {textin} </div>
    );
  }

};

Posts.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
    })
  ),
  loadPostsByPage: PropTypes.func.isRequired,
};

export default Posts;
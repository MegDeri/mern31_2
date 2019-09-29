import { connect } from 'react-redux';
import {  getPosts, getRequest, getPages, loadPostsByPageRequest, postsPerPage} from '../../../redux/postsRedux';
import Posts from './Posts';

const mapStateToProps = state => ({
  posts: getPosts(state),
  request: getRequest(state),
  pages: getPages(state),
  postsPerPage: postsPerPage(state),
});

const mapDispatchToProps = dispatch => ({
  loadPostsByPage: (page, postsPerPage) => dispatch(loadPostsByPageRequest(page, postsPerPage)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
import React, {Fragment} from 'react'
import PropTypes from 'prop-types'
import {BlogPostTemplate} from '../../templates/blog-post'

const BlogPostPreview = ({entry, widgetFor}) => (
  <Fragment>
    <p>This is BlogPostPreview</p>
    <BlogPostTemplate
      content={widgetFor('body')}
      description={entry.getIn(['data', 'description'])}
      tags={entry.getIn(['data', 'tags'])}
      title={entry.getIn(['data', 'title'])}
    />
  </Fragment>
)

BlogPostPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default BlogPostPreview

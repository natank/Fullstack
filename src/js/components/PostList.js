import React, { Component } from 'react'

class PostList extends Component {
  constructor(props) {
    super(props);
  }


  renderList() {
    return this.props.posts.map(post => {
      return pug`
        .selectedUser__list-item(key=${post.id})
          .selectedUser__data-item
            div Title: 
            div ${post.title}
          .selectedUser__data-item
            div Body:
            div ${post.body}
      `
    })
  }

  render() {
    return pug`
    .selectedUser__header
      div.selectedUser__title Posts - User ${this.props.userId}  
      button.btn.btn--secondary(onClick=${() => {
        this.props.setPostFlag({ isOpen: true })
      }})
        | Add
    if(this.props.posts.length)
      .selectedUser__media-item 
        .selectedUser__list
          ${this.renderList()}
    else
      p.selectedUser__no-todos This user has no Posts yet
    `
  }


}

export default PostList;
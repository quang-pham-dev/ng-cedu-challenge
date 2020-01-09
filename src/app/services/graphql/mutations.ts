// tslint:disable
// this is an auto generated file. This will be overwritten

export const createUser = `mutation CreateUser($input: CreateUserInput!) {
  createUser(input: $input) {
    id
    username
    display_name
    email
    phone
    avatar
    rooms {
      nextToken
    }
    comments {
      nextToken
    }
    owner
  }
}
`;
export const updateUser = `mutation UpdateUser($input: UpdateUserInput!) {
  updateUser(input: $input) {
    id
    username
    display_name
    email
    phone
    avatar
    rooms {
      nextToken
    }
    comments {
      nextToken
    }
    owner
  }
}
`;
export const deleteUser = `mutation DeleteUser($input: DeleteUserInput!) {
  deleteUser(input: $input) {
    id
    username
    display_name
    email
    phone
    avatar
    rooms {
      nextToken
    }
    comments {
      nextToken
    }
    owner
  }
}
`;
export const createRoom = `mutation CreateRoom($input: CreateRoomInput!) {
  createRoom(input: $input) {
    id
    name
    description
    users_in_room {
      nextToken
    }
    posts {
      nextToken
    }
    date_created
    date_expired
    schedules
    user_created
  }
}
`;
export const createUsersInRoom = `mutation CreateUsersInRoom($input: CreateUsersInRoomInput!) {
  createUsersInRoom(input: $input) {
    id
    room {
      id
      name
      description
      date_created
      date_expired
      schedules
      user_created
    }
    score
    user {
      id
      username
      display_name
      email
      phone
      avatar
      owner
    }
  }
}
`;
export const createPost = `mutation CreatePost($input: CreatePostInput!) {
  createPost(input: $input) {
    id
    content {
      id
      any
    }
    room {
      id
      name
      description
      date_created
      date_expired
      schedules
      user_created
    }
    users_liked {
      nextToken
    }
    comments {
      nextToken
    }
    user_created
  }
}
`;
export const createContent = `mutation CreateContent($input: CreateContentInput!) {
  createContent(input: $input) {
    id
    any
  }
}
`;
export const updateContent = `mutation UpdateContent($input: UpdateContentInput!) {
  updateContent(input: $input) {
    id
    any
  }
}
`;
export const deleteContent = `mutation DeleteContent($input: DeleteContentInput!) {
  deleteContent(input: $input) {
    id
    any
  }
}
`;
export const createComment = `mutation CreateComment($input: CreateCommentInput!) {
  createComment(input: $input) {
    id
    comment
    user {
      id
      username
      display_name
      email
      phone
      avatar
      owner
    }
  }
}
`;
export const updateComment = `mutation UpdateComment($input: UpdateCommentInput!) {
  updateComment(input: $input) {
    id
    comment
    user {
      id
      username
      display_name
      email
      phone
      avatar
      owner
    }
  }
}
`;
export const deleteComment = `mutation DeleteComment($input: DeleteCommentInput!) {
  deleteComment(input: $input) {
    id
    comment
    user {
      id
      username
      display_name
      email
      phone
      avatar
      owner
    }
  }
}
`;
export const createLike = `mutation CreateLike($input: CreateLikeInput!) {
  createLike(input: $input) {
    id
    user_id
    post {
      id
      user_created
    }
  }
}
`;
export const updateLike = `mutation UpdateLike($input: UpdateLikeInput!) {
  updateLike(input: $input) {
    id
    user_id
    post {
      id
      user_created
    }
  }
}
`;
export const deleteLike = `mutation DeleteLike($input: DeleteLikeInput!) {
  deleteLike(input: $input) {
    id
    user_id
    post {
      id
      user_created
    }
  }
}
`;
export const createPrivateNote = `mutation CreatePrivateNote($input: CreatePrivateNoteInput!) {
  createPrivateNote(input: $input) {
    id
    content
    owner
  }
}
`;
export const updatePrivateNote = `mutation UpdatePrivateNote($input: UpdatePrivateNoteInput!) {
  updatePrivateNote(input: $input) {
    id
    content
    owner
  }
}
`;
export const deletePrivateNote = `mutation DeletePrivateNote($input: DeletePrivateNoteInput!) {
  deletePrivateNote(input: $input) {
    id
    content
    owner
  }
}
`;
export const updateRoom = `mutation UpdateRoom($input: UpdateRoomInput!) {
  updateRoom(input: $input) {
    id
    name
    description
    users_in_room {
      nextToken
    }
    posts {
      nextToken
    }
    date_created
    date_expired
    schedules
    user_created
  }
}
`;
export const deleteRoom = `mutation DeleteRoom($input: DeleteRoomInput!) {
  deleteRoom(input: $input) {
    id
    name
    description
    users_in_room {
      nextToken
    }
    posts {
      nextToken
    }
    date_created
    date_expired
    schedules
    user_created
  }
}
`;
export const updateUsersInRoom = `mutation UpdateUsersInRoom($input: UpdateUsersInRoomInput!) {
  updateUsersInRoom(input: $input) {
    id
    room {
      id
      name
      description
      date_created
      date_expired
      schedules
      user_created
    }
    score
    user {
      id
      username
      display_name
      email
      phone
      avatar
      owner
    }
  }
}
`;
export const deleteUsersInRoom = `mutation DeleteUsersInRoom($input: DeleteUsersInRoomInput!) {
  deleteUsersInRoom(input: $input) {
    id
    room {
      id
      name
      description
      date_created
      date_expired
      schedules
      user_created
    }
    score
    user {
      id
      username
      display_name
      email
      phone
      avatar
      owner
    }
  }
}
`;
export const updatePost = `mutation UpdatePost($input: UpdatePostInput!) {
  updatePost(input: $input) {
    id
    content {
      id
      any
    }
    room {
      id
      name
      description
      date_created
      date_expired
      schedules
      user_created
    }
    users_liked {
      nextToken
    }
    comments {
      nextToken
    }
    user_created
  }
}
`;
export const deletePost = `mutation DeletePost($input: DeletePostInput!) {
  deletePost(input: $input) {
    id
    content {
      id
      any
    }
    room {
      id
      name
      description
      date_created
      date_expired
      schedules
      user_created
    }
    users_liked {
      nextToken
    }
    comments {
      nextToken
    }
    user_created
  }
}
`;

// tslint:disable
// this is an auto generated file. This will be overwritten

export const onCreateUser = `subscription OnCreateUser($owner: String!) {
  onCreateUser(owner: $owner) {
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
export const onUpdateUser = `subscription OnUpdateUser($owner: String!) {
  onUpdateUser(owner: $owner) {
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
export const onDeleteUser = `subscription OnDeleteUser($owner: String!) {
  onDeleteUser(owner: $owner) {
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
export const onCreateRoom = `subscription OnCreateRoom {
  onCreateRoom {
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
export const onUpdateRoom = `subscription OnUpdateRoom {
  onUpdateRoom {
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
export const onDeleteRoom = `subscription OnDeleteRoom {
  onDeleteRoom {
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
export const onCreateUsersInRoom = `subscription OnCreateUsersInRoom {
  onCreateUsersInRoom {
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
export const onUpdateUsersInRoom = `subscription OnUpdateUsersInRoom {
  onUpdateUsersInRoom {
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
export const onDeleteUsersInRoom = `subscription OnDeleteUsersInRoom {
  onDeleteUsersInRoom {
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
export const onCreatePost = `subscription OnCreatePost {
  onCreatePost {
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
export const onUpdatePost = `subscription OnUpdatePost {
  onUpdatePost {
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
export const onDeletePost = `subscription OnDeletePost {
  onDeletePost {
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
export const onCreateContent = `subscription OnCreateContent {
  onCreateContent {
    id
    any
  }
}
`;
export const onUpdateContent = `subscription OnUpdateContent {
  onUpdateContent {
    id
    any
  }
}
`;
export const onDeleteContent = `subscription OnDeleteContent {
  onDeleteContent {
    id
    any
  }
}
`;
export const onCreateComment = `subscription OnCreateComment {
  onCreateComment {
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
export const onUpdateComment = `subscription OnUpdateComment {
  onUpdateComment {
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
export const onDeleteComment = `subscription OnDeleteComment {
  onDeleteComment {
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
export const onCreateLike = `subscription OnCreateLike {
  onCreateLike {
    id
    user_id
    post {
      id
      user_created
    }
  }
}
`;
export const onUpdateLike = `subscription OnUpdateLike {
  onUpdateLike {
    id
    user_id
    post {
      id
      user_created
    }
  }
}
`;
export const onDeleteLike = `subscription OnDeleteLike {
  onDeleteLike {
    id
    user_id
    post {
      id
      user_created
    }
  }
}
`;
export const onCreatePrivateNote = `subscription OnCreatePrivateNote($owner: String!) {
  onCreatePrivateNote(owner: $owner) {
    id
    content
    owner
  }
}
`;
export const onUpdatePrivateNote = `subscription OnUpdatePrivateNote($owner: String!) {
  onUpdatePrivateNote(owner: $owner) {
    id
    content
    owner
  }
}
`;
export const onDeletePrivateNote = `subscription OnDeletePrivateNote($owner: String!) {
  onDeletePrivateNote(owner: $owner) {
    id
    content
    owner
  }
}
`;

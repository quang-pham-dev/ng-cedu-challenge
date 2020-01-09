// tslint:disable
// this is an auto generated file. This will be overwritten

export const getRoom = `query GetRoom($id: ID!) {
  getRoom(id: $id) {
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
export const listRooms = `query ListRooms(
  $filter: ModelRoomFilterInput
  $limit: Int
  $nextToken: String
) {
  listRooms(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      description
      date_created
      date_expired
      schedules
      user_created
    }
    nextToken
  }
}
`;
export const getUsersInRoom = `query GetUsersInRoom($id: ID!) {
  getUsersInRoom(id: $id) {
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
export const listUsersInRooms = `query ListUsersInRooms(
  $filter: ModelUsersInRoomFilterInput
  $limit: Int
  $nextToken: String
) {
  listUsersInRooms(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      score
    }
    nextToken
  }
}
`;
export const getPost = `query GetPost($id: ID!) {
  getPost(id: $id) {
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
export const listPosts = `query ListPosts(
  $filter: ModelPostFilterInput
  $limit: Int
  $nextToken: String
) {
  listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      user_created
    }
    nextToken
  }
}
`;
export const getContent = `query GetContent($id: ID!) {
  getContent(id: $id) {
    id
    any
  }
}
`;
export const listContents = `query ListContents(
  $filter: ModelContentFilterInput
  $limit: Int
  $nextToken: String
) {
  listContents(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      any
    }
    nextToken
  }
}
`;
export const getComment = `query GetComment($id: ID!) {
  getComment(id: $id) {
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
export const listComments = `query ListComments(
  $filter: ModelCommentFilterInput
  $limit: Int
  $nextToken: String
) {
  listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      comment
    }
    nextToken
  }
}
`;
export const getLike = `query GetLike($id: ID!) {
  getLike(id: $id) {
    id
    user_id
    post {
      id
      user_created
    }
  }
}
`;
export const listLikes = `query ListLikes(
  $filter: ModelLikeFilterInput
  $limit: Int
  $nextToken: String
) {
  listLikes(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      user_id
    }
    nextToken
  }
}
`;
export const getPrivateNote = `query GetPrivateNote($id: ID!) {
  getPrivateNote(id: $id) {
    id
    content
    owner
  }
}
`;
export const listPrivateNotes = `query ListPrivateNotes(
  $filter: ModelPrivateNoteFilterInput
  $limit: Int
  $nextToken: String
) {
  listPrivateNotes(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      content
      owner
    }
    nextToken
  }
}
`;
export const getTeacherRooms = `query GetTeacherRooms(
  $user_created: String
  $sortDirection: ModelSortDirection
  $filter: ModelRoomFilterInput
  $limit: Int
  $nextToken: String
) {
  getTeacherRooms(
    user_created: $user_created
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      name
      description
      date_created
      date_expired
      schedules
      user_created
    }
    nextToken
  }
}
`;
export const getTeacherPosts = `query GetTeacherPosts(
  $user_created: String
  $sortDirection: ModelSortDirection
  $filter: ModelPostFilterInput
  $limit: Int
  $nextToken: String
) {
  getTeacherPosts(
    user_created: $user_created
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      user_created
    }
    nextToken
  }
}
`;
export const listUsers = `query ListUsers(
  $filter: ModelUserFilterInput
  $limit: Int
  $nextToken: String
) {
  listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      username
      display_name
      email
      phone
      avatar
      owner
    }
    nextToken
  }
}
`;
export const getUser = `query GetUser($id: ID!) {
  getUser(id: $id) {
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

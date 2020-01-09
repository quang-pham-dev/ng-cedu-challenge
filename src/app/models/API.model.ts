/* tslint:disable */
//  This file was automatically generated and should not be edited.

export type CreateUserInput = {
  id?: string | null,
  username: string,
  display_name: string,
  email: string,
  phone: string,
  avatar?: string | null,
};

export type UpdateUserInput = {
  id: string,
  username?: string | null,
  display_name?: string | null,
  email?: string | null,
  phone?: string | null,
  avatar?: string | null,
};

export type DeleteUserInput = {
  id?: string | null,
};

export type CreateRoomInput = {
  id?: string | null,
  name: string,
  description?: string | null,
  date_created: string,
  date_expired: string,
  schedules: Array< string | null >,
  user_created: string,
};

export type CreateUsersInRoomInput = {
  id?: string | null,
  score?: number | null,
  usersInRoomRoomId: string,
  usersInRoomUserId: string,
};

export type CreatePostInput = {
  id?: string | null,
  user_created: string,
  postRoomId: string,
};

export type CreateContentInput = {
  id?: string | null,
  any?: Array< string | null > | null,
};

export type UpdateContentInput = {
  id: string,
  any?: Array< string | null > | null,
};

export type DeleteContentInput = {
  id?: string | null,
};

export type CreateCommentInput = {
  id?: string | null,
  comment: string,
  commentUserId: string,
};

export type UpdateCommentInput = {
  id: string,
  comment?: string | null,
  commentUserId?: string | null,
};

export type DeleteCommentInput = {
  id?: string | null,
};

export type CreateLikeInput = {
  id?: string | null,
  user_id?: Array< string > | null,
  likePostId?: string | null,
};

export type UpdateLikeInput = {
  id: string,
  user_id?: Array< string > | null,
  likePostId?: string | null,
};

export type DeleteLikeInput = {
  id?: string | null,
};

export type CreatePrivateNoteInput = {
  id?: string | null,
  content: string,
};

export type UpdatePrivateNoteInput = {
  id: string,
  content?: string | null,
};

export type DeletePrivateNoteInput = {
  id?: string | null,
};

export type UpdateRoomInput = {
  id: string,
  name?: string | null,
  description?: string | null,
  date_created?: string | null,
  date_expired?: string | null,
  schedules?: Array< string | null > | null,
  user_created?: string | null,
};

export type DeleteRoomInput = {
  id?: string | null,
};

export type UpdateUsersInRoomInput = {
  id: string,
  score?: number | null,
  usersInRoomRoomId?: string | null,
  usersInRoomUserId?: string | null,
};

export type DeleteUsersInRoomInput = {
  id?: string | null,
};

export type UpdatePostInput = {
  id: string,
  user_created?: string | null,
  postRoomId?: string | null,
};

export type DeletePostInput = {
  id?: string | null,
};

export type ModelRoomFilterInput = {
  id?: ModelIDFilterInput | null,
  name?: ModelStringFilterInput | null,
  description?: ModelStringFilterInput | null,
  date_created?: ModelStringFilterInput | null,
  date_expired?: ModelStringFilterInput | null,
  schedules?: ModelStringFilterInput | null,
  user_created?: ModelStringFilterInput | null,
  and?: Array< ModelRoomFilterInput | null > | null,
  or?: Array< ModelRoomFilterInput | null > | null,
  not?: ModelRoomFilterInput | null,
};

export type ModelIDFilterInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type ModelStringFilterInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type ModelUsersInRoomFilterInput = {
  id?: ModelIDFilterInput | null,
  score?: ModelIntFilterInput | null,
  and?: Array< ModelUsersInRoomFilterInput | null > | null,
  or?: Array< ModelUsersInRoomFilterInput | null > | null,
  not?: ModelUsersInRoomFilterInput | null,
};

export type ModelIntFilterInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  contains?: number | null,
  notContains?: number | null,
  between?: Array< number | null > | null,
};

export type ModelPostFilterInput = {
  id?: ModelIDFilterInput | null,
  user_created?: ModelStringFilterInput | null,
  and?: Array< ModelPostFilterInput | null > | null,
  or?: Array< ModelPostFilterInput | null > | null,
  not?: ModelPostFilterInput | null,
};

export type ModelContentFilterInput = {
  id?: ModelIDFilterInput | null,
  any?: ModelStringFilterInput | null,
  and?: Array< ModelContentFilterInput | null > | null,
  or?: Array< ModelContentFilterInput | null > | null,
  not?: ModelContentFilterInput | null,
};

export type ModelCommentFilterInput = {
  id?: ModelIDFilterInput | null,
  comment?: ModelStringFilterInput | null,
  and?: Array< ModelCommentFilterInput | null > | null,
  or?: Array< ModelCommentFilterInput | null > | null,
  not?: ModelCommentFilterInput | null,
};

export type ModelLikeFilterInput = {
  id?: ModelIDFilterInput | null,
  user_id?: ModelStringFilterInput | null,
  and?: Array< ModelLikeFilterInput | null > | null,
  or?: Array< ModelLikeFilterInput | null > | null,
  not?: ModelLikeFilterInput | null,
};

export type ModelPrivateNoteFilterInput = {
  id?: ModelIDFilterInput | null,
  content?: ModelStringFilterInput | null,
  and?: Array< ModelPrivateNoteFilterInput | null > | null,
  or?: Array< ModelPrivateNoteFilterInput | null > | null,
  not?: ModelPrivateNoteFilterInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelUserFilterInput = {
  id?: ModelIDFilterInput | null,
  username?: ModelStringFilterInput | null,
  display_name?: ModelStringFilterInput | null,
  email?: ModelStringFilterInput | null,
  phone?: ModelStringFilterInput | null,
  avatar?: ModelStringFilterInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
};

export type CreateUserMutation = {
  createUser:  {
    __typename: "User",
    id: string,
    username: string,
    display_name: string,
    email: string,
    phone: string,
    avatar: string | null,
    rooms:  {
      __typename: "ModelUsersInRoomConnection",
      nextToken: string | null,
    } | null,
    comments:  {
      __typename: "ModelCommentConnection",
      nextToken: string | null,
    } | null,
    owner: string | null,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
};

export type UpdateUserMutation = {
  updateUser:  {
    __typename: "User",
    id: string,
    username: string,
    display_name: string,
    email: string,
    phone: string,
    avatar: string | null,
    rooms:  {
      __typename: "ModelUsersInRoomConnection",
      nextToken: string | null,
    } | null,
    comments:  {
      __typename: "ModelCommentConnection",
      nextToken: string | null,
    } | null,
    owner: string | null,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
};

export type DeleteUserMutation = {
  deleteUser:  {
    __typename: "User",
    id: string,
    username: string,
    display_name: string,
    email: string,
    phone: string,
    avatar: string | null,
    rooms:  {
      __typename: "ModelUsersInRoomConnection",
      nextToken: string | null,
    } | null,
    comments:  {
      __typename: "ModelCommentConnection",
      nextToken: string | null,
    } | null,
    owner: string | null,
  } | null,
};

export type CreateRoomMutationVariables = {
  input: CreateRoomInput,
};

export type CreateRoomMutation = {
  createRoom:  {
    __typename: "Room",
    id: string,
    name: string,
    description: string | null,
    users_in_room:  {
      __typename: "ModelUsersInRoomConnection",
      nextToken: string | null,
    } | null,
    posts:  {
      __typename: "ModelPostConnection",
      nextToken: string | null,
    } | null,
    date_created: string,
    date_expired: string,
    schedules: Array< string | null >,
    user_created: string,
  } | null,
};

export type CreateUsersInRoomMutationVariables = {
  input: CreateUsersInRoomInput,
};

export type CreateUsersInRoomMutation = {
  createUsersInRoom:  {
    __typename: "UsersInRoom",
    id: string,
    room:  {
      __typename: "Room",
      id: string,
      name: string,
      description: string | null,
      date_created: string,
      date_expired: string,
      schedules: Array< string | null >,
      user_created: string,
    },
    score: number | null,
    user:  {
      __typename: "User",
      id: string,
      username: string,
      display_name: string,
      email: string,
      phone: string,
      avatar: string | null,
      owner: string | null,
    },
  } | null,
};

export type CreatePostMutationVariables = {
  input: CreatePostInput,
};

export type CreatePostMutation = {
  createPost:  {
    __typename: "Post",
    id: string,
    content:  {
      __typename: "Content",
      id: string,
      any: Array< string | null > | null,
    } | null,
    room:  {
      __typename: "Room",
      id: string,
      name: string,
      description: string | null,
      date_created: string,
      date_expired: string,
      schedules: Array< string | null >,
      user_created: string,
    },
    users_liked:  {
      __typename: "ModelLikeConnection",
      nextToken: string | null,
    } | null,
    comments:  {
      __typename: "ModelCommentConnection",
      nextToken: string | null,
    } | null,
    user_created: string,
  } | null,
};

export type CreateContentMutationVariables = {
  input: CreateContentInput,
};

export type CreateContentMutation = {
  createContent:  {
    __typename: "Content",
    id: string,
    any: Array< string | null > | null,
  } | null,
};

export type UpdateContentMutationVariables = {
  input: UpdateContentInput,
};

export type UpdateContentMutation = {
  updateContent:  {
    __typename: "Content",
    id: string,
    any: Array< string | null > | null,
  } | null,
};

export type DeleteContentMutationVariables = {
  input: DeleteContentInput,
};

export type DeleteContentMutation = {
  deleteContent:  {
    __typename: "Content",
    id: string,
    any: Array< string | null > | null,
  } | null,
};

export type CreateCommentMutationVariables = {
  input: CreateCommentInput,
};

export type CreateCommentMutation = {
  createComment:  {
    __typename: "Comment",
    id: string,
    comment: string,
    user:  {
      __typename: "User",
      id: string,
      username: string,
      display_name: string,
      email: string,
      phone: string,
      avatar: string | null,
      owner: string | null,
    },
  } | null,
};

export type UpdateCommentMutationVariables = {
  input: UpdateCommentInput,
};

export type UpdateCommentMutation = {
  updateComment:  {
    __typename: "Comment",
    id: string,
    comment: string,
    user:  {
      __typename: "User",
      id: string,
      username: string,
      display_name: string,
      email: string,
      phone: string,
      avatar: string | null,
      owner: string | null,
    },
  } | null,
};

export type DeleteCommentMutationVariables = {
  input: DeleteCommentInput,
};

export type DeleteCommentMutation = {
  deleteComment:  {
    __typename: "Comment",
    id: string,
    comment: string,
    user:  {
      __typename: "User",
      id: string,
      username: string,
      display_name: string,
      email: string,
      phone: string,
      avatar: string | null,
      owner: string | null,
    },
  } | null,
};

export type CreateLikeMutationVariables = {
  input: CreateLikeInput,
};

export type CreateLikeMutation = {
  createLike:  {
    __typename: "Like",
    id: string,
    user_id: Array< string > | null,
    post:  {
      __typename: "Post",
      id: string,
      user_created: string,
    } | null,
  } | null,
};

export type UpdateLikeMutationVariables = {
  input: UpdateLikeInput,
};

export type UpdateLikeMutation = {
  updateLike:  {
    __typename: "Like",
    id: string,
    user_id: Array< string > | null,
    post:  {
      __typename: "Post",
      id: string,
      user_created: string,
    } | null,
  } | null,
};

export type DeleteLikeMutationVariables = {
  input: DeleteLikeInput,
};

export type DeleteLikeMutation = {
  deleteLike:  {
    __typename: "Like",
    id: string,
    user_id: Array< string > | null,
    post:  {
      __typename: "Post",
      id: string,
      user_created: string,
    } | null,
  } | null,
};

export type CreatePrivateNoteMutationVariables = {
  input: CreatePrivateNoteInput,
};

export type CreatePrivateNoteMutation = {
  createPrivateNote:  {
    __typename: "PrivateNote",
    id: string,
    content: string,
    owner: string | null,
  } | null,
};

export type UpdatePrivateNoteMutationVariables = {
  input: UpdatePrivateNoteInput,
};

export type UpdatePrivateNoteMutation = {
  updatePrivateNote:  {
    __typename: "PrivateNote",
    id: string,
    content: string,
    owner: string | null,
  } | null,
};

export type DeletePrivateNoteMutationVariables = {
  input: DeletePrivateNoteInput,
};

export type DeletePrivateNoteMutation = {
  deletePrivateNote:  {
    __typename: "PrivateNote",
    id: string,
    content: string,
    owner: string | null,
  } | null,
};

export type UpdateRoomMutationVariables = {
  input: UpdateRoomInput,
};

export type UpdateRoomMutation = {
  updateRoom:  {
    __typename: "Room",
    id: string,
    name: string,
    description: string | null,
    users_in_room:  {
      __typename: "ModelUsersInRoomConnection",
      nextToken: string | null,
    } | null,
    posts:  {
      __typename: "ModelPostConnection",
      nextToken: string | null,
    } | null,
    date_created: string,
    date_expired: string,
    schedules: Array< string | null >,
    user_created: string,
  } | null,
};

export type DeleteRoomMutationVariables = {
  input: DeleteRoomInput,
};

export type DeleteRoomMutation = {
  deleteRoom:  {
    __typename: "Room",
    id: string,
    name: string,
    description: string | null,
    users_in_room:  {
      __typename: "ModelUsersInRoomConnection",
      nextToken: string | null,
    } | null,
    posts:  {
      __typename: "ModelPostConnection",
      nextToken: string | null,
    } | null,
    date_created: string,
    date_expired: string,
    schedules: Array< string | null >,
    user_created: string,
  } | null,
};

export type UpdateUsersInRoomMutationVariables = {
  input: UpdateUsersInRoomInput,
};

export type UpdateUsersInRoomMutation = {
  updateUsersInRoom:  {
    __typename: "UsersInRoom",
    id: string,
    room:  {
      __typename: "Room",
      id: string,
      name: string,
      description: string | null,
      date_created: string,
      date_expired: string,
      schedules: Array< string | null >,
      user_created: string,
    },
    score: number | null,
    user:  {
      __typename: "User",
      id: string,
      username: string,
      display_name: string,
      email: string,
      phone: string,
      avatar: string | null,
      owner: string | null,
    },
  } | null,
};

export type DeleteUsersInRoomMutationVariables = {
  input: DeleteUsersInRoomInput,
};

export type DeleteUsersInRoomMutation = {
  deleteUsersInRoom:  {
    __typename: "UsersInRoom",
    id: string,
    room:  {
      __typename: "Room",
      id: string,
      name: string,
      description: string | null,
      date_created: string,
      date_expired: string,
      schedules: Array< string | null >,
      user_created: string,
    },
    score: number | null,
    user:  {
      __typename: "User",
      id: string,
      username: string,
      display_name: string,
      email: string,
      phone: string,
      avatar: string | null,
      owner: string | null,
    },
  } | null,
};

export type UpdatePostMutationVariables = {
  input: UpdatePostInput,
};

export type UpdatePostMutation = {
  updatePost:  {
    __typename: "Post",
    id: string,
    content:  {
      __typename: "Content",
      id: string,
      any: Array< string | null > | null,
    } | null,
    room:  {
      __typename: "Room",
      id: string,
      name: string,
      description: string | null,
      date_created: string,
      date_expired: string,
      schedules: Array< string | null >,
      user_created: string,
    },
    users_liked:  {
      __typename: "ModelLikeConnection",
      nextToken: string | null,
    } | null,
    comments:  {
      __typename: "ModelCommentConnection",
      nextToken: string | null,
    } | null,
    user_created: string,
  } | null,
};

export type DeletePostMutationVariables = {
  input: DeletePostInput,
};

export type DeletePostMutation = {
  deletePost:  {
    __typename: "Post",
    id: string,
    content:  {
      __typename: "Content",
      id: string,
      any: Array< string | null > | null,
    } | null,
    room:  {
      __typename: "Room",
      id: string,
      name: string,
      description: string | null,
      date_created: string,
      date_expired: string,
      schedules: Array< string | null >,
      user_created: string,
    },
    users_liked:  {
      __typename: "ModelLikeConnection",
      nextToken: string | null,
    } | null,
    comments:  {
      __typename: "ModelCommentConnection",
      nextToken: string | null,
    } | null,
    user_created: string,
  } | null,
};

export type GetRoomQueryVariables = {
  id: string,
};

export type GetRoomQuery = {
  getRoom:  {
    __typename: "Room",
    id: string,
    name: string,
    description: string | null,
    users_in_room:  {
      __typename: "ModelUsersInRoomConnection",
      nextToken: string | null,
    } | null,
    posts:  {
      __typename: "ModelPostConnection",
      nextToken: string | null,
    } | null,
    date_created: string,
    date_expired: string,
    schedules: Array< string | null >,
    user_created: string,
  } | null,
};

export type ListRoomsQueryVariables = {
  filter?: ModelRoomFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListRoomsQuery = {
  listRooms:  {
    __typename: "ModelRoomConnection",
    items:  Array< {
      __typename: "Room",
      id: string,
      name: string,
      description: string | null,
      date_created: string,
      date_expired: string,
      schedules: Array< string | null >,
      user_created: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetUsersInRoomQueryVariables = {
  id: string,
};

export type GetUsersInRoomQuery = {
  getUsersInRoom:  {
    __typename: "UsersInRoom",
    id: string,
    room:  {
      __typename: "Room",
      id: string,
      name: string,
      description: string | null,
      date_created: string,
      date_expired: string,
      schedules: Array< string | null >,
      user_created: string,
    },
    score: number | null,
    user:  {
      __typename: "User",
      id: string,
      username: string,
      display_name: string,
      email: string,
      phone: string,
      avatar: string | null,
      owner: string | null,
    },
  } | null,
};

export type ListUsersInRoomsQueryVariables = {
  filter?: ModelUsersInRoomFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersInRoomsQuery = {
  listUsersInRooms:  {
    __typename: "ModelUsersInRoomConnection",
    items:  Array< {
      __typename: "UsersInRoom",
      id: string,
      score: number | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetPostQueryVariables = {
  id: string,
};

export type GetPostQuery = {
  getPost:  {
    __typename: "Post",
    id: string,
    content:  {
      __typename: "Content",
      id: string,
      any: Array< string | null > | null,
    } | null,
    room:  {
      __typename: "Room",
      id: string,
      name: string,
      description: string | null,
      date_created: string,
      date_expired: string,
      schedules: Array< string | null >,
      user_created: string,
    },
    users_liked:  {
      __typename: "ModelLikeConnection",
      nextToken: string | null,
    } | null,
    comments:  {
      __typename: "ModelCommentConnection",
      nextToken: string | null,
    } | null,
    user_created: string,
  } | null,
};

export type ListPostsQueryVariables = {
  filter?: ModelPostFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPostsQuery = {
  listPosts:  {
    __typename: "ModelPostConnection",
    items:  Array< {
      __typename: "Post",
      id: string,
      user_created: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetContentQueryVariables = {
  id: string,
};

export type GetContentQuery = {
  getContent:  {
    __typename: "Content",
    id: string,
    any: Array< string | null > | null,
  } | null,
};

export type ListContentsQueryVariables = {
  filter?: ModelContentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListContentsQuery = {
  listContents:  {
    __typename: "ModelContentConnection",
    items:  Array< {
      __typename: "Content",
      id: string,
      any: Array< string | null > | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetCommentQueryVariables = {
  id: string,
};

export type GetCommentQuery = {
  getComment:  {
    __typename: "Comment",
    id: string,
    comment: string,
    user:  {
      __typename: "User",
      id: string,
      username: string,
      display_name: string,
      email: string,
      phone: string,
      avatar: string | null,
      owner: string | null,
    },
  } | null,
};

export type ListCommentsQueryVariables = {
  filter?: ModelCommentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCommentsQuery = {
  listComments:  {
    __typename: "ModelCommentConnection",
    items:  Array< {
      __typename: "Comment",
      id: string,
      comment: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetLikeQueryVariables = {
  id: string,
};

export type GetLikeQuery = {
  getLike:  {
    __typename: "Like",
    id: string,
    user_id: Array< string > | null,
    post:  {
      __typename: "Post",
      id: string,
      user_created: string,
    } | null,
  } | null,
};

export type ListLikesQueryVariables = {
  filter?: ModelLikeFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListLikesQuery = {
  listLikes:  {
    __typename: "ModelLikeConnection",
    items:  Array< {
      __typename: "Like",
      id: string,
      user_id: Array< string > | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetPrivateNoteQueryVariables = {
  id: string,
};

export type GetPrivateNoteQuery = {
  getPrivateNote:  {
    __typename: "PrivateNote",
    id: string,
    content: string,
    owner: string | null,
  } | null,
};

export type ListPrivateNotesQueryVariables = {
  filter?: ModelPrivateNoteFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPrivateNotesQuery = {
  listPrivateNotes:  {
    __typename: "ModelPrivateNoteConnection",
    items:  Array< {
      __typename: "PrivateNote",
      id: string,
      content: string,
      owner: string | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetTeacherRoomsQueryVariables = {
  user_created?: string | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelRoomFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type GetTeacherRoomsQuery = {
  getTeacherRooms:  {
    __typename: "ModelRoomConnection",
    items:  Array< {
      __typename: "Room",
      id: string,
      name: string,
      description: string | null,
      date_created: string,
      date_expired: string,
      schedules: Array< string | null >,
      user_created: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetTeacherPostsQueryVariables = {
  user_created?: string | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelPostFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type GetTeacherPostsQuery = {
  getTeacherPosts:  {
    __typename: "ModelPostConnection",
    items:  Array< {
      __typename: "Post",
      id: string,
      user_created: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      username: string,
      display_name: string,
      email: string,
      phone: string,
      avatar: string | null,
      owner: string | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser:  {
    __typename: "User",
    id: string,
    username: string,
    display_name: string,
    email: string,
    phone: string,
    avatar: string | null,
    rooms:  {
      __typename: "ModelUsersInRoomConnection",
      nextToken: string | null,
    } | null,
    comments:  {
      __typename: "ModelCommentConnection",
      nextToken: string | null,
    } | null,
    owner: string | null,
  } | null,
};

export type OnCreateUserSubscriptionVariables = {
  owner: string,
};

export type OnCreateUserSubscription = {
  onCreateUser:  {
    __typename: "User",
    id: string,
    username: string,
    display_name: string,
    email: string,
    phone: string,
    avatar: string | null,
    rooms:  {
      __typename: "ModelUsersInRoomConnection",
      nextToken: string | null,
    } | null,
    comments:  {
      __typename: "ModelCommentConnection",
      nextToken: string | null,
    } | null,
    owner: string | null,
  } | null,
};

export type OnUpdateUserSubscriptionVariables = {
  owner: string,
};

export type OnUpdateUserSubscription = {
  onUpdateUser:  {
    __typename: "User",
    id: string,
    username: string,
    display_name: string,
    email: string,
    phone: string,
    avatar: string | null,
    rooms:  {
      __typename: "ModelUsersInRoomConnection",
      nextToken: string | null,
    } | null,
    comments:  {
      __typename: "ModelCommentConnection",
      nextToken: string | null,
    } | null,
    owner: string | null,
  } | null,
};

export type OnDeleteUserSubscriptionVariables = {
  owner: string,
};

export type OnDeleteUserSubscription = {
  onDeleteUser:  {
    __typename: "User",
    id: string,
    username: string,
    display_name: string,
    email: string,
    phone: string,
    avatar: string | null,
    rooms:  {
      __typename: "ModelUsersInRoomConnection",
      nextToken: string | null,
    } | null,
    comments:  {
      __typename: "ModelCommentConnection",
      nextToken: string | null,
    } | null,
    owner: string | null,
  } | null,
};

export type OnCreateRoomSubscription = {
  onCreateRoom:  {
    __typename: "Room",
    id: string,
    name: string,
    description: string | null,
    users_in_room:  {
      __typename: "ModelUsersInRoomConnection",
      nextToken: string | null,
    } | null,
    posts:  {
      __typename: "ModelPostConnection",
      nextToken: string | null,
    } | null,
    date_created: string,
    date_expired: string,
    schedules: Array< string | null >,
    user_created: string,
  } | null,
};

export type OnUpdateRoomSubscription = {
  onUpdateRoom:  {
    __typename: "Room",
    id: string,
    name: string,
    description: string | null,
    users_in_room:  {
      __typename: "ModelUsersInRoomConnection",
      nextToken: string | null,
    } | null,
    posts:  {
      __typename: "ModelPostConnection",
      nextToken: string | null,
    } | null,
    date_created: string,
    date_expired: string,
    schedules: Array< string | null >,
    user_created: string,
  } | null,
};

export type OnDeleteRoomSubscription = {
  onDeleteRoom:  {
    __typename: "Room",
    id: string,
    name: string,
    description: string | null,
    users_in_room:  {
      __typename: "ModelUsersInRoomConnection",
      nextToken: string | null,
    } | null,
    posts:  {
      __typename: "ModelPostConnection",
      nextToken: string | null,
    } | null,
    date_created: string,
    date_expired: string,
    schedules: Array< string | null >,
    user_created: string,
  } | null,
};

export type OnCreateUsersInRoomSubscription = {
  onCreateUsersInRoom:  {
    __typename: "UsersInRoom",
    id: string,
    room:  {
      __typename: "Room",
      id: string,
      name: string,
      description: string | null,
      date_created: string,
      date_expired: string,
      schedules: Array< string | null >,
      user_created: string,
    },
    score: number | null,
    user:  {
      __typename: "User",
      id: string,
      username: string,
      display_name: string,
      email: string,
      phone: string,
      avatar: string | null,
      owner: string | null,
    },
  } | null,
};

export type OnUpdateUsersInRoomSubscription = {
  onUpdateUsersInRoom:  {
    __typename: "UsersInRoom",
    id: string,
    room:  {
      __typename: "Room",
      id: string,
      name: string,
      description: string | null,
      date_created: string,
      date_expired: string,
      schedules: Array< string | null >,
      user_created: string,
    },
    score: number | null,
    user:  {
      __typename: "User",
      id: string,
      username: string,
      display_name: string,
      email: string,
      phone: string,
      avatar: string | null,
      owner: string | null,
    },
  } | null,
};

export type OnDeleteUsersInRoomSubscription = {
  onDeleteUsersInRoom:  {
    __typename: "UsersInRoom",
    id: string,
    room:  {
      __typename: "Room",
      id: string,
      name: string,
      description: string | null,
      date_created: string,
      date_expired: string,
      schedules: Array< string | null >,
      user_created: string,
    },
    score: number | null,
    user:  {
      __typename: "User",
      id: string,
      username: string,
      display_name: string,
      email: string,
      phone: string,
      avatar: string | null,
      owner: string | null,
    },
  } | null,
};

export type OnCreatePostSubscription = {
  onCreatePost:  {
    __typename: "Post",
    id: string,
    content:  {
      __typename: "Content",
      id: string,
      any: Array< string | null > | null,
    } | null,
    room:  {
      __typename: "Room",
      id: string,
      name: string,
      description: string | null,
      date_created: string,
      date_expired: string,
      schedules: Array< string | null >,
      user_created: string,
    },
    users_liked:  {
      __typename: "ModelLikeConnection",
      nextToken: string | null,
    } | null,
    comments:  {
      __typename: "ModelCommentConnection",
      nextToken: string | null,
    } | null,
    user_created: string,
  } | null,
};

export type OnUpdatePostSubscription = {
  onUpdatePost:  {
    __typename: "Post",
    id: string,
    content:  {
      __typename: "Content",
      id: string,
      any: Array< string | null > | null,
    } | null,
    room:  {
      __typename: "Room",
      id: string,
      name: string,
      description: string | null,
      date_created: string,
      date_expired: string,
      schedules: Array< string | null >,
      user_created: string,
    },
    users_liked:  {
      __typename: "ModelLikeConnection",
      nextToken: string | null,
    } | null,
    comments:  {
      __typename: "ModelCommentConnection",
      nextToken: string | null,
    } | null,
    user_created: string,
  } | null,
};

export type OnDeletePostSubscription = {
  onDeletePost:  {
    __typename: "Post",
    id: string,
    content:  {
      __typename: "Content",
      id: string,
      any: Array< string | null > | null,
    } | null,
    room:  {
      __typename: "Room",
      id: string,
      name: string,
      description: string | null,
      date_created: string,
      date_expired: string,
      schedules: Array< string | null >,
      user_created: string,
    },
    users_liked:  {
      __typename: "ModelLikeConnection",
      nextToken: string | null,
    } | null,
    comments:  {
      __typename: "ModelCommentConnection",
      nextToken: string | null,
    } | null,
    user_created: string,
  } | null,
};

export type OnCreateContentSubscription = {
  onCreateContent:  {
    __typename: "Content",
    id: string,
    any: Array< string | null > | null,
  } | null,
};

export type OnUpdateContentSubscription = {
  onUpdateContent:  {
    __typename: "Content",
    id: string,
    any: Array< string | null > | null,
  } | null,
};

export type OnDeleteContentSubscription = {
  onDeleteContent:  {
    __typename: "Content",
    id: string,
    any: Array< string | null > | null,
  } | null,
};

export type OnCreateCommentSubscription = {
  onCreateComment:  {
    __typename: "Comment",
    id: string,
    comment: string,
    user:  {
      __typename: "User",
      id: string,
      username: string,
      display_name: string,
      email: string,
      phone: string,
      avatar: string | null,
      owner: string | null,
    },
  } | null,
};

export type OnUpdateCommentSubscription = {
  onUpdateComment:  {
    __typename: "Comment",
    id: string,
    comment: string,
    user:  {
      __typename: "User",
      id: string,
      username: string,
      display_name: string,
      email: string,
      phone: string,
      avatar: string | null,
      owner: string | null,
    },
  } | null,
};

export type OnDeleteCommentSubscription = {
  onDeleteComment:  {
    __typename: "Comment",
    id: string,
    comment: string,
    user:  {
      __typename: "User",
      id: string,
      username: string,
      display_name: string,
      email: string,
      phone: string,
      avatar: string | null,
      owner: string | null,
    },
  } | null,
};

export type OnCreateLikeSubscription = {
  onCreateLike:  {
    __typename: "Like",
    id: string,
    user_id: Array< string > | null,
    post:  {
      __typename: "Post",
      id: string,
      user_created: string,
    } | null,
  } | null,
};

export type OnUpdateLikeSubscription = {
  onUpdateLike:  {
    __typename: "Like",
    id: string,
    user_id: Array< string > | null,
    post:  {
      __typename: "Post",
      id: string,
      user_created: string,
    } | null,
  } | null,
};

export type OnDeleteLikeSubscription = {
  onDeleteLike:  {
    __typename: "Like",
    id: string,
    user_id: Array< string > | null,
    post:  {
      __typename: "Post",
      id: string,
      user_created: string,
    } | null,
  } | null,
};

export type OnCreatePrivateNoteSubscriptionVariables = {
  owner: string,
};

export type OnCreatePrivateNoteSubscription = {
  onCreatePrivateNote:  {
    __typename: "PrivateNote",
    id: string,
    content: string,
    owner: string | null,
  } | null,
};

export type OnUpdatePrivateNoteSubscriptionVariables = {
  owner: string,
};

export type OnUpdatePrivateNoteSubscription = {
  onUpdatePrivateNote:  {
    __typename: "PrivateNote",
    id: string,
    content: string,
    owner: string | null,
  } | null,
};

export type OnDeletePrivateNoteSubscriptionVariables = {
  owner: string,
};

export type OnDeletePrivateNoteSubscription = {
  onDeletePrivateNote:  {
    __typename: "PrivateNote",
    id: string,
    content: string,
    owner: string | null,
  } | null,
};

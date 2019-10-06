/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createTalk = `mutation CreateTalk($input: CreateTalkInput!) {
  createTalk(input: $input) {
    id
    clientId
    name
    description
    speakerName
    speakerBio
    speakerPhone
    comments {
      nextToken
    }
  }
}
`;
export const updateTalk = `mutation UpdateTalk($input: UpdateTalkInput!) {
  updateTalk(input: $input) {
    id
    clientId
    name
    description
    speakerName
    speakerBio
    speakerPhone
    comments {
      nextToken
    }
  }
}
`;
export const deleteTalk = `mutation DeleteTalk($input: DeleteTalkInput!) {
  deleteTalk(input: $input) {
    id
    clientId
    name
    description
    speakerName
    speakerBio
    speakerPhone
    comments {
      nextToken
    }
  }
}
`;
export const createComment = `mutation CreateComment($input: CreateCommentInput!) {
  createComment(input: $input) {
    id
    message
    createdBy
    talk {
      id
      clientId
      name
      description
      speakerName
      speakerBio
      speakerPhone
    }
  }
}
`;
export const updateComment = `mutation UpdateComment($input: UpdateCommentInput!) {
  updateComment(input: $input) {
    id
    message
    createdBy
    talk {
      id
      clientId
      name
      description
      speakerName
      speakerBio
      speakerPhone
    }
  }
}
`;
export const deleteComment = `mutation DeleteComment($input: DeleteCommentInput!) {
  deleteComment(input: $input) {
    id
    message
    createdBy
    talk {
      id
      clientId
      name
      description
      speakerName
      speakerBio
      speakerPhone
    }
  }
}
`;

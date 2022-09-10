// utilize the possibilities of mongoose.

import mongoose from "mongoose";

// create mongoose schema
/**
 * 몽구스는 사용자가 작성한 스키마를 기준으로 데이터를 DB에 넣기 전에 먼저 검사합니다.
 * 스키마에 어긋나는 데이터가 있으면 에러를 발생시킵니다.
 * 즉, 테이블과 어느 정도 비슷한 역할을 합니다.
 * 또한 스키마를 설정할 때 인덱스까지 같이 걸어둘 수도 있습니다.
 * ==> allows us to give some sort of uniformity to our documents
 */
const postSchema = mongoose.Schema({
  title: String,
  message: String,
  creator: String,
  tags: [String],
  seelctedFile: String,
  likeCount: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    dafault: new Date(),
  },
});

// we have to turn it into a model
const PostMessage = mongoose.model("PostMessage", postSchema);

export default PostMessage;

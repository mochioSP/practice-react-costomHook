import { VFC } from "react";
import { UserProfile } from "../types/userProfile";

type Props = {
  user: UserProfile;
};

const style = {
  border: "solid 1px #ccc",
  borderRadius: "8px",
  padding: "16px 16px",
  margin: "8px"
};

export const UserCard: VFC<Props> = (props) => {
  const { user } = props;
  return (
    <div style={style}>
      <dt>
        <dt>名前</dt>
        <dd>{user.name}</dd>
        <dt>メール</dt>
        <dd>{user.email}</dd>
        <dt>住所</dt>
        <dd>{user.address}</dd>
      </dt>
    </div>
  );
};

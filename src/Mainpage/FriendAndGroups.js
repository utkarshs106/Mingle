import { useState } from "react";
function FriendAndGroups() {
  var [chatAndFriend, setChatAndFriend] = useState("Friends");
  function RenderChatAndFriends() {
    if (chatAndFriend === "Friends") {
      console.log("friends");
      return (
        <>
          <p>There are Friends</p>
        </>
      );
    } else {
      console.log("groups");
      return <>These are Groups</>;
    }
  }
  function switchToFriends() {
    setChatAndFriend("Friends");
  }
  function switchToGroups() {
    setChatAndFriend("Groups");
  }
  return (
    <section
      style={{
        position: "relative",
        marginLeft: "3px",
        border: "white",
        borderStyle: "solid",
        borderWidth: "1px",
        width: "15%"
      }}
    >
      <button type="button" class="btn btn-warning" onClick={switchToFriends}>
        Friends
      </button>
      <button
        type="button"
        class="btn btn-info"
        onClick={switchToGroups}
        style={{ position: "relative", marginLeft: "2%" }}
      >
        Groups
      </button>
      <RenderChatAndFriends />
    </section>
  );
}

export default FriendAndGroups;

import NavbarForMainpage from "./Mainpage/NavbarForMainpage";
import ChatBox from "./Mainpage/ChatBox";
import FriendsAndGroups from "./Mainpage/FriendAndGroups";

function Mainpage() {
  return (
    <>
      <NavbarForMainpage />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          marginLeft: "3%",
          marginTop: "2%"
        }}
      >
        <ChatBox />
        <FriendsAndGroups />
      </div>
    </>
  );
}

export default Mainpage;

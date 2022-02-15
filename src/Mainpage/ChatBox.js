import "./style.css";
function ChatBox() {
  return (
    <>
      <section
        style={{
          position: "relative",
          border: "white",
          borderStyle: "solid",
          borderWidth: "1px",
          width: "80%",
          display: "flex",
          flexDirection: "column"
        }}
      >
        <div
          className="chatWindow"
          style={{
            position: "realtive",
            display: "flex",
            flexDirection: "Column",
            height: "600px",
            overflow: "auto"
          }}
        >
          <p className="message"> Hi this is chatbox</p>
          <p className="message">Yes this is</p>
          <p className="message">Yes this is</p>
          <p className="message">Yes this is</p>
          <p className="message">Yes this is</p>
          <p className="message">Yes this is</p>
          <p className="message">Yes this is</p>
          <p className="message">Yes this is</p>
          <p className="message">Yes this is</p>
          <p className="message">Yes this is</p>
          <p className="message">Yes this is</p>
          <p className="message">Yes this is</p>
          <p className="message">Yes this is</p>
          <p className="message">Yes this is</p>
          <p className="message">Yes this is</p>
          <p className="message">Yes this is</p>
          <p className="message">Yes this is</p>
          <p className="message">Yes this is</p>
        </div>

        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "row"
          }}
        >
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="input text"
          />
          <button type="button" class="btn btn-success">
            Send
          </button>
        </div>
      </section>
    </>
  );
}

export default ChatBox;

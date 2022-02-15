function CoverPic() {
  return (
    <>
      <section
        style={{
          position: "relative",
          marginLeft: "10%",
          marginRight: "10%",
          marginTop: "6px",
          top: "3%",
          border: "green",
          borderStyle: "solid",
          borderWidth: "3px",
          height: "370px"
        }}
      >
        <div style={{ position: "absolute", marginBottom: "100px" }}>
          This place is for cover image
        </div>
        <div
          //profile pic and name
          style={{
            position: "relative",
            height: "180px",
            width: "155px",
            top: "150px",
            left: "50px",
            color: "red",
            border: "brown",
            borderStyle: "solid",
            borderWidth: "2px"
          }}
        >
          This is for profile
        </div>
        <p style={{ position: "relative", left: "250px", top: "100px" }}>
          Utkarsh Verma
        </p>
      </section>
    </>
  );
}

export default CoverPic;

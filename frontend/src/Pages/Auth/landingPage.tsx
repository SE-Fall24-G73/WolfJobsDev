import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div style={{ overflow: "hidden", padding: "20px" }}>
      <div
        style={{
          width: "90%",
          maxWidth: "523px",
          margin: "auto",
          fontFamily: "Urbanist",
          fontStyle: "normal",
          fontWeight: 600,
          fontSize: "6vw",
          lineHeight: "1.2",
          textAlign: "center",
          color: "#000000",
          marginTop: "10vh",
        }}
      >
        We understand that being a student can be{" "}
        <span style={{ color: "#FF5353" }}>challenging.</span>
      </div>

      <div
        style={{
          width: "90%",
          maxWidth: "550px",
          margin: "20px auto",
          fontFamily: "Urbanist",
          fontStyle: "normal",
          fontWeight: "400",
          fontSize: "4vw",
          lineHeight: "1.2",
          color: "#666666",
          textAlign: "center",
        }}
      >
        Join our dynamic team right here on campus. Earn, learn, and be part of
        the community that powers your daily essentials. Apply now and shape
        your campus experience!
      </div>

      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "10px", marginTop: "10px" }}>
        <button
          onClick={(e) => {
            e.preventDefault();
            navigate("/register");
          }}
          type="button"
          style={{
            width: "40%",
            maxWidth: "223px",
            height: "54px",
            background: "#FF5353",
            borderRadius: "10px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <p
            style={{
              fontFamily: "Urbanist",
              fontStyle: "normal",
              fontWeight: 600,
              fontSize: "4vw",
              lineHeight: "1.2",
              color: "white",
              margin: 0,
            }}
          >
            Sign Up
          </p>
        </button>

        <p
          style={{
            fontFamily: "Poppins",
            fontStyle: "normal",
            fontWeight: 500,
            fontSize: "4vw",
            color: "#8C8D90",
            margin: "0 10px",
          }}
        >
          OR
        </p>

        <button
          onClick={(e) => {
            e.preventDefault();
            navigate("/login");
          }}
          type="button"
          style={{
            width: "40%",
            maxWidth: "223px",
            height: "54px",
            background: "#FFFFFF",
            border: "1px solid #656565",
            borderRadius: "10px",
          }}
        >
          <p
            style={{
              fontFamily: "Urbanist",
              fontStyle: "normal",
              fontWeight: 600,
              fontSize: "4vw",
              lineHeight: "1.2",
              margin: 0,
              color: "#656565",
            }}
          >
            Login
          </p>
        </button>
      </div>

      <div
        style={{
          position: "relative",
          width: "90%",
          maxWidth: "735px",
          margin: "auto",
          marginTop: "20px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src="/images/landingpage_image1.png"
          alt="Landing Page Image"
          style={{
            width: "100%",
            height: "auto",
            maxWidth: "100%",
          }}
        />
        <img
          src="/images/landingpage_image2.png"
          alt="Landing Page Image"
          style={{
            position: "absolute",
            width: "60%",
            maxWidth: "420px",
            height: "auto",
            top: "10%",
          }}
        />
      </div>
    </div>
  );
};

export default LandingPage;

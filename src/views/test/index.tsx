import img1 from "@a/images/project/3.png";

const Test = () => {
    return (
        <div>
            <h1>TEST</h1>
            <div
                style={{
                    marginLeft:'40px',
                    width: "300px",
                    background: `url(${img1})`,
                    backgroundSize:'cover',
                    backgroundColor: "red",
                    height: "180px",
                    transition:'all .5s linear'
                }}
            ></div>
        </div>
    );
};
export default Test;

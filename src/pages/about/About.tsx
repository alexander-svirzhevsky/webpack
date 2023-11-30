import pngImg from "@/assets/nike.png";
import jpegImg from "@/assets/brazil.jpeg";
import SvgImg from "@/assets/amazon.svg";

const About = () => {
  return (
    <>
      <img width={100} height={100} src={pngImg} alt='' />
      <img width={150} height={100} src={jpegImg} alt='' />
      <SvgImg width={100} height={100} />
    </>
  );
};

export default About;

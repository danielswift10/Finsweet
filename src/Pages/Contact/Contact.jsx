import { useEffect } from "react";
import ContactSection from "../../Components/ContactUs/ContactUs";

const Contact = (props) => {
  useEffect(() => {
    document.title = props.title || "";
  }, [props.title]);
  return <section>
    <ContactSection/>
  </section>;
};

export default Contact;

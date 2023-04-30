import React, { useEffect, useCallback, useRef } from "react";
import 
import styles from "../../styles";
import { closeModal } from "../../Assets";
import { Button } from "../../Utils";

const Modal = (props) => {
  const { onClose } = props;
  const modalContentRef = useRef(null);

  const closeOnEscapeKeyDown = useCallback((e) => {
    if ((e.charCode || e.keyCode) === 27) {
      onClose();
    }
  }, [onClose]);

  const handleClick = useCallback(
    (e) => {
      if (modalContentRef.current && !modalContentRef.current.contains(e.target)) {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    document.body.addEventListener("keydown", closeOnEscapeKeyDown);
    return function cleanup() {
      document.body.removeEventListener("keydown", closeOnEscapeKeyDown);
    };
  }, [closeOnEscapeKeyDown]);

  return (
    <div
      className={`modal fixed left-0 top-0 right-0 bottom-0 bg-[#00000080] ${
        styles.flexCenter
      } opacity-0 min-h-screen pointer-events-none z-20 ${
        props.show ? "show" : ""
      }`}
      onClick={handleClick}
    >
      <div
        ref={modalContentRef}
        className="modal-content w-full h-full xs:h-fit bg-white xs:w-[420px] xl:w-[714px] md:w-[650px] xl:h-[820px] xl:py-0 flex flex-col justify-center items-start ss:w-[550px] py-[40px] px-[35px] md:py-[50px] ss:px-[53px] "
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-header w-full flex  mb-10  justify-between items-start mx-auto ">
          <div className="modal-header-title  pt-7">
            <h2
              className={`font-poppins font-bold flex items-end justify-end  w-full xl:text-[38px] md:text-[34px]  xl:leading-[58px] leading-[42px] mb-2  md:mb-3 text-[28px] text-black `}
            >
              <span className=" ">  Have a Question ? <br className="hidden ss:block" /> Let’s Get in
              Touch with us</span>
               <span className="han  w-fit block" >👋</span>
            </h2>
            <p
              className={`font-poppins font-normal xl:text-[16px]  xl:leading-[24px] text-secondary text-[14px]`}
            >
              Fill up the form and the team will get back to within 24 hrs
            </p>
          </div>
          <button className="modal-close-btn">
            <img
              src={closeModal}
              alt=""
              onClick={onClose} 
              className="cursor-pointer w-[78px] hover:scale-[1.03] ss:w-[40px] md:w-[48px]"
            />
          </button>
        </div>

        <div className="modal-body w-full mx-auto">
          <form>
            <div className="name flex flex-col gap-2 mb-6">
              <label
                className={`${styles.paragraphSmall} text-veryDimBlack2  `}
              >
                Name
              </label>
              <input
                type="text"
                className={`${styles.paragraph} outline-0 pb-1 md:w-[405px] border-b text-black font-semibold border-b-veryLightBlack2 `}
                placeholder="Enter your Name"
              />
            </div>
            <div className="email flex flex-col gap-2 mb-6 ">
              <label className={`${styles.paragraphSmall} text-veryDimBlack2`}>
                Email
              </label>
              <input
                type="email"
                className={`${styles.paragraph} outline-0 pb-1 md:w-[405px]  border-b text-black font-semibold border-b-veryLightBlack2`}
                placeholder="abc@gmail.com"
              />
            </div>
            <div className="subject flex flex-col gap-2 mb-6">
              <label className={`${styles.paragraphSmall} text-veryDimBlack2`}>
                Subject
              </label>
              <input
                type="text"
                className={`${styles.paragraph} outline-0 pb-1 md:w-[405px]  border-b text-black font-semibold border-b-veryLightBlack2`}
                placeholder="Title of the mail"
              />
            </div>
            <div className="message flex flex-col gap-2 mb-12">
              <label className={`${styles.paragraphSmall} text-veryDimBlack2`}>
                Message
              </label>
              <input
                type="text"
                className={`${styles.paragraph} outline-0 pb-1 md:w-[405px]  border-b text-black font-semibold border-b-veryLightBlack2`}
                placeholder="Type your Message here"
              />
            </div>
            <Button title={"Send Message"} />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;

const styles  = {
    boxWidth: "xl:max-w-[1280px] w-full mx-auto",

    heading1: "font-poppins font-bold w-full xl:text-[56px] xl:leading-[68px] xl:w-[624px] text-white  ",
    heading2: "font-poppins font-semibold w-full xl:text-[48px] xl:leading-[58px] text-black  ",
    heading3: "font-poppins font-semibold w-full xl:text-[36px] xl:leading-[54px] text-black  ",
    
    paragraph: "font-poppins font-normal text-[16px] xl:leading-[24px]",

    flexCenter: "flex justify-center items-center",
    flexStart: "flex justify-center items-start",
    flexBetween: "flex justify-between items-center",

    paddingX: "sm:px-16 px-6 xl:px-0",
    paddingY: "sm:py-16 py-6",
    padding: "sm:px-16 px-6 sm:py-12 py-4",

    marginX: "sm:mx-16 mx-6",
    marginY: "sm:my-16 my-6",
}
 
export const layout = {
    section: `flex md:flex-row flex-col ${styles.paddingY}`
}

export default styles;
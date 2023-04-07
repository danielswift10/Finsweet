const styles  = {
    boxWidth: "xl:max-w-[1280px] w-full  mx-auto",

    heading1: "font-poppins font-bold w-full xl:text-[56px] xl:leading-[68px] xl:w-[624px] text-white  ",
    heading2: "font-poppins font-bold w-full xl:text-[48px] xl:leading-[58px] leading-[42px] text-black  ",
    heading3: "font-poppins font-bold w-full xl:text-[36px] xl:leading-[54px] text-black  ",
    heading4: "font-poppins font-bold w-full xl:text-[24px] xl:leading-[36px] text-black  ",
    heading6: "font-poppins font-bold w-full xl:text-[16px] xl:leading-[28px] text-secondary  ",

    
    paragraph: "font-poppins font-normal text-[16px]  xl:leading-[24px]",
    paragraphSmall: "font-poppins font-semibold text-[14px] xl:leading-[20px]",
    paragraphLarge: "font-poppins font-semibold text-[18px]  xl:leading-[28px]",

    caption: "font-poppins font-semibold text-[14px] leading-[20px] text-secondary tracking-[3px]",

    flexCenter: "flex justify-center items-center",
    flexStart: "flex justify-center items-start",
    flexBetween: "flex justify-between items-center",
    flexStartB: "flex justify-between items-start",
    flexEnd: "flex justify-end items-center",
    flexWrap: "flex flex-wrap justify-center",

    paddingX: "sm:px-16 px-7 xl:px-0",
    paddingY: "sm:py-16 py-6",
    padding: "sm:px-16 px-7 xl:px-0  sm:py-12  py-4",

    marginX: "sm:mx-16 mx-6",
    marginY: "sm:my-16 my-6",
}
 
export const layout = {
    section: `flex md:flex-row flex-col ${styles.paddingY}`,
    section1: `flex md:flex-row flex-col`,
    section2: `flex lg:flex-row flex-col`,
    sectionCol: `flex flex-col`,
    
    button: `bg-primary ${styles.flexCenter} gap-4 text-white font-poppins text-[16px] font-semibold xl:leading-[24px] `
}

export default styles;
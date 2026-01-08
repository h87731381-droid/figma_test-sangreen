import svgPaths from "./svg-bym9psl9cj";
import clsx from "clsx";
import imgComponent3 from "figma:asset/49372c01b4c8b66048b19571ca4151d09baae85e.png";
import imgFrame7356 from "figma:asset/d56ae1be0105400d2254b4f5f31f09f08b1c5bbf.png";
import imgFrame7357 from "figma:asset/5b35d25e2f101265815adef039c5b80e526fa391.png";
import imgFrame7358 from "figma:asset/aab06e539ab9034734be952fdb6048effd772624.png";
import imgFrame7359 from "figma:asset/76775d5a3d3a36e0b24d19a0614f1ed2451ae1ea.png";
import imgFrame7360 from "figma:asset/0a2a5a5d3a740844f1cd9eaa394d7fe795454133.png";
import imgFrame7361 from "figma:asset/46161f36eeb1c2ffa24f05df226e3cd3af215541.png";
import imgComponent5 from "figma:asset/aad8ffb13691c56a0b0329fa480e8c69578dd172.png";
import imgComponent6 from "figma:asset/e80ae12985c9915f553f41d1f7a248d765f9b7e7.png";
import imgComponent7 from "figma:asset/9fe3b99c7bea0f99d9c59fe700834fac31cd5574.png";
import imgComponent8 from "figma:asset/d1ec18a08262e5e87598a78649c0d34f92d60a73.png";
import imgFrame7379 from "figma:asset/f0005d9c57540cff28a8880c7c9eb182c64e0f05.png";
import imgFrame7381 from "figma:asset/d15440c4228be08452cc53b19aa5c3662ac04cd8.png";
import imgFrame7382 from "figma:asset/179dc737dede39345d2330e29f1a74c8c9cd3cab.png";
import imgFrame7380 from "figma:asset/cb7639c998441a2d0f502c7c6a6ba297ec71f3f6.png";

function Wrapper1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[20px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        {children}
      </svg>
    </div>
  );
}

function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="content-stretch flex flex-col items-start px-[62px] py-[143px] relative shrink-0 size-[325px]">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        {children}
      </div>
      <Helper1 text="아침고요수목원" text1="경기도 가평군 상면 수목원로 432" />
    </div>
  );
}

function Component2({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="absolute h-[362px] left-0 top-0 w-[1300px]">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute bg-[rgba(29,29,29,0.5)] inset-0" />
        <div className="absolute inset-0 overflow-hidden">{children}</div>
      </div>
    </div>
  );
}
type Helper2Props = {
  text: string;
  text1: string;
  additionalClassNames?: string;
};

function Helper2({ text, text1, additionalClassNames = "" }: Helper2Props) {
  return (
    <div className={clsx("content-stretch flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal gap-[16px] items-start leading-[0] relative shrink-0", additionalClassNames)}>
      <div className="flex flex-col h-[7.557px] justify-center relative shrink-0 text-[#555] text-[14px] w-full">
        <p className="leading-[15px]">{text}</p>
      </div>
      <div className="flex flex-col h-[9.069px] justify-center relative shrink-0 text-[#333] text-[16px] w-full">
        <p className="leading-[15px]">{text1}</p>
      </div>
    </div>
  );
}
type Text1Props = {
  text: string;
  additionalClassNames?: string;
};

function Text1({ text, additionalClassNames = "" }: Text1Props) {
  return (
    <div style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }} className={clsx("flex flex-col justify-center relative shrink-0 w-full", additionalClassNames)}>
      <p className="leading-[32px]">{text}</p>
    </div>
  );
}
type Helper1Props = {
  text: string;
  text1: string;
};

function Helper1({ text, text1 }: Helper1Props) {
  return (
    <div className="content-stretch flex flex-col gap-[19px] items-center leading-[0] opacity-0 relative shrink-0 text-black text-center w-[201px]">
      <Text1 text={text} additionalClassNames="font-['Noto_Sans:Bold',sans-serif] font-bold text-[16px]" />
      <Text1 text={text1} additionalClassNames="font-['Noto_Sans:Light',sans-serif] font-light text-[12px]" />
    </div>
  );
}
type HelperProps = {
  text: string;
  text1: string;
};

function Helper({ text, text1 }: HelperProps) {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[15px] grow items-start min-h-px min-w-px relative shrink-0">
      <div className="flex flex-col font-['Montserrat:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[24px] text-black">
        <p className="leading-[normal] text-nowrap">{text}</p>
      </div>
      <p className="font-['Noto_Sans:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[26px] relative shrink-0 text-[#555] text-[16px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        {text1}
      </p>
    </div>
  );
}

function Component3() {
  return (
    <div className="[grid-area:1_/_1] h-[859px] ml-0 mt-0 relative w-[1920px]" data-name="Component 3">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute bg-[#d9d9d9] inset-0" />
        <img alt="" className="absolute max-w-none object-50%-50% object-cover size-full" src={imgComponent3} />
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-[88px] place-items-start relative">
      <Component3 />
      <div className="[grid-area:1_/_1] flex flex-col font-['Montserrat:Bold',sans-serif] font-bold h-[66.077px] justify-center leading-[0] ml-[50px] mt-[804.39px] relative text-[80px] text-white tracking-[5.6px] translate-y-[-50%] w-[846px]">
        <p className="leading-[normal]">THE DAY OF REST.</p>
      </div>
    </div>
  );
}

function Component() {
  return (
    <div className="relative shrink-0 size-[48px]" data-name="버거메뉴">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="ë²ê±°ë©ë´" opacity="0">
          <path d="M10 12H38M10 24H38M10 36H38" id="Vector" stroke="var(--stroke-0, #373500)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
        </g>
      </svg>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex gap-[65px] items-start justify-center relative shrink-0">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#373500] text-[16px] text-center text-nowrap">
        <p className="leading-[normal]">KO</p>
      </div>
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#373500] text-[16px] text-center text-nowrap">
        <p className="leading-[normal]">EN</p>
      </div>
      <Component />
    </div>
  );
}

function Frame8() {
  return (
    <div className="[grid-area:1_/_1] bg-[#fff6ed] content-stretch flex items-center justify-between ml-0 mt-0 pb-[20px] pt-[30px] px-[50px] relative w-[1920px]">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#373500] text-[32px] text-center w-[186px]">
        <p className="leading-[normal]">SANGREEN</p>
      </div>
      <Frame7 />
    </div>
  );
}

function Group3() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] ml-[calc(50%-960px)] mt-0 place-items-start relative">
      <Frame8 />
    </div>
  );
}

function Component1() {
  return (
    <div className="relative shrink-0 size-[48px]" data-name="버거메뉴">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
        <g id="ë²ê±°ë©ë´">
          <path d="M10 12H38M10 24H38M10 36H38" id="Vector" stroke="var(--stroke-0, #373500)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
        </g>
      </svg>
    </div>
  );
}

function Frame27() {
  return (
    <div className="absolute bg-[rgba(217,217,217,0)] content-stretch flex h-[648px] items-start justify-end left-0 px-[36px] py-[26px] top-0 w-[482px]">
      <Component1 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex font-['Noto_Sans_KR:Regular',sans-serif] font-normal gap-[16px] items-center leading-[0] relative shrink-0 text-[16px] text-[rgba(85,84,76,0)] text-nowrap w-full">
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[normal] text-nowrap">101</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[normal] text-nowrap">102</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[normal] text-nowrap">103</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[normal] text-nowrap">104</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[normal] text-nowrap">105</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[normal] text-nowrap">106</p>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-[242px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[16px] text-[rgba(47,47,47,0)] w-full">
        <p className="leading-[normal]">객실정보</p>
      </div>
      <Frame1 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex font-['Noto_Sans_KR:Regular',sans-serif] font-normal gap-[22px] items-center leading-[0] relative shrink-0 text-[16px] text-[rgba(85,84,76,0)] text-nowrap w-full">
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[normal] text-nowrap">예약현황</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[normal] text-nowrap">예약하기</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[normal] text-nowrap">예약확인/취소</p>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full">
      <div className="flex flex-col font-['Noto_Sans_KR:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[16px] text-[rgba(47,47,47,0)] w-full">
        <p className="leading-[normal]">예약하기</p>
      </div>
      <Frame2 />
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex flex-col gap-[49px] items-start relative shrink-0 w-[257px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Bold',sans-serif] font-bold justify-center leading-[0] min-w-full relative shrink-0 text-[16px] text-[rgba(47,47,47,0)] w-[min-content]">
        <p className="leading-[normal]">펜션소개</p>
      </div>
      <Frame3 />
      <div className="flex flex-col font-['Noto_Sans_KR:Bold',sans-serif] font-bold justify-center leading-[0] min-w-full relative shrink-0 text-[16px] text-[rgba(47,47,47,0)] w-[min-content]">
        <p className="leading-[normal]">부대시설</p>
      </div>
      <Frame4 />
      <div className="flex flex-col font-['Noto_Sans_KR:Bold',sans-serif] font-bold justify-center leading-[0] min-w-full relative shrink-0 text-[16px] text-[rgba(47,47,47,0)] w-[min-content]">
        <p className="leading-[normal]">주변관광지</p>
      </div>
    </div>
  );
}

function Frame29() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex gap-[10px] h-[648px] items-center ml-[1420px] mt-0 px-[60px] py-[151px] relative w-[482px]">
      <Frame27 />
      <Frame28 />
    </div>
  );
}

function Group5() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative">
      <Group3 />
      <Frame29 />
    </div>
  );
}

function Group6() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <Group />
      <Group5 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 text-nowrap w-[1300px]">
      <Helper text="Room List" text1="지친 일상 속 자연을 느낄 수 있는 산그린펜션의 객실입니다." />
      <p className="font-['Montserrat:Regular',sans-serif] font-normal leading-[26px] relative shrink-0 text-[#555] text-[16px]">{`Detail >`}</p>
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex flex-col h-[480px] items-start px-[21px] py-[16px] relative shrink-0 w-[296px]">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute bg-[#bebebe] inset-0" />
        <img alt="" className="absolute max-w-none object-50%-50% object-cover size-full" src={imgFrame7356} />
      </div>
      <div className="flex flex-col font-['Noto_Sans_KR:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[16px] text-nowrap text-white">
        <p className="leading-[normal]">101호</p>
      </div>
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex flex-col h-[480px] items-start px-[21px] py-[16px] relative shrink-0 w-[296px]">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute bg-[#bebebe] inset-0" />
        <img alt="" className="absolute max-w-none object-50%-50% object-cover size-full" src={imgFrame7357} />
      </div>
      <div className="flex flex-col font-['Noto_Sans_KR:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[16px] text-nowrap text-white">
        <p className="leading-[normal]">102호</p>
      </div>
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex flex-col h-[480px] items-start px-[21px] py-[16px] relative shrink-0 w-[296px]">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute bg-[#bebebe] inset-0" />
        <img alt="" className="absolute max-w-none object-50%-50% object-cover size-full" src={imgFrame7358} />
      </div>
      <div className="flex flex-col font-['Noto_Sans_KR:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[16px] text-nowrap text-white">
        <p className="leading-[normal]">103호</p>
      </div>
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex flex-col h-[480px] items-start px-[21px] py-[16px] relative shrink-0 w-[296px]">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute bg-[#bebebe] inset-0" />
        <img alt="" className="absolute max-w-none object-50%-50% object-cover size-full" src={imgFrame7359} />
      </div>
      <div className="flex flex-col font-['Noto_Sans_KR:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[16px] text-nowrap text-white">
        <p className="leading-[normal]">104호</p>
      </div>
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex flex-col h-[480px] items-start px-[21px] py-[16px] relative shrink-0 w-[296px]">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute bg-[#bebebe] inset-0" />
        <img alt="" className="absolute max-w-none object-50%-50% object-cover size-full" src={imgFrame7360} />
      </div>
      <div className="flex flex-col font-['Noto_Sans_KR:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[16px] text-nowrap text-white">
        <p className="leading-[normal]">105호</p>
      </div>
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex flex-col h-[480px] items-start px-[21px] py-[16px] relative shrink-0 w-[296px]">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute bg-[#bebebe] inset-0" />
        <img alt="" className="absolute max-w-none object-50%-50% object-cover size-full" src={imgFrame7361} />
      </div>
      <div className="flex flex-col font-['Noto_Sans_KR:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[16px] text-nowrap text-white">
        <p className="leading-[normal]">106호</p>
      </div>
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[1609px]">
      <Frame19 />
      <Frame20 />
      <Frame21 />
      <Frame22 />
      <Frame23 />
      <Frame24 />
    </div>
  );
}

function Frame26() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex flex-col gap-[40px] items-start ml-[310px] mt-0 relative w-[1609px]">
      <Frame6 />
      <Frame25 />
    </div>
  );
}

function Component2P() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="2p">
      <div className="[grid-area:1_/_1] bg-[rgba(255,255,255,0)] h-[576px] ml-0 mt-0 w-[1920px]" />
      <Frame26 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 text-nowrap w-full">
      <Helper text="Special" text1="산그린 펜션의 부대시설과 특장점을 확인해보세요." />
      <p className="font-['Montserrat:Regular',sans-serif] font-normal leading-[26px] relative shrink-0 text-[#555] text-[16px]">{`Detail >`}</p>
    </div>
  );
}

function Component4() {
  return (
    <Component2>
      <img alt="" className="absolute h-[172.59%] left-[-4.23%] max-w-none top-[-58.97%] w-[32.06%]" src={imgComponent5} />
    </Component2>
  );
}

function Frame31() {
  return (
    <div className="h-[362px] overflow-clip relative shrink-0 w-[325px]">
      <Component4 />
    </div>
  );
}

function Component5() {
  return (
    <Component2>
      <img alt="" className="absolute h-[244.4%] left-[-11.29%] max-w-none top-[-81.05%] w-[45.4%]" src={imgComponent6} />
    </Component2>
  );
}

function Frame32() {
  return (
    <div className="h-[362px] overflow-clip relative shrink-0 w-[325px]">
      <Component5 />
    </div>
  );
}

function Component6() {
  return (
    <Component2>
      <img alt="" className="absolute h-[261.91%] left-[-7.53%] max-w-none top-[-38.64%] w-[48.65%]" src={imgComponent7} />
    </Component2>
  );
}

function Frame33() {
  return (
    <div className="h-[362px] overflow-clip relative shrink-0 w-[325px]">
      <Component6 />
    </div>
  );
}

function Component7() {
  return (
    <Component2>
      <img alt="" className="absolute h-[179.48%] left-[-3.96%] max-w-none top-[-39.86%] w-[33.34%]" src={imgComponent8} />
    </Component2>
  );
}

function Frame34() {
  return (
    <div className="h-[362px] overflow-clip relative shrink-0 w-[325px]">
      <Component7 />
    </div>
  );
}

function Frame35() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[1300px]">
      <Frame31 />
      <Frame32 />
      <Frame33 />
      <Frame34 />
    </div>
  );
}

function Frame30() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex flex-col gap-[40px] items-start ml-[310px] mt-0 relative w-[1300px]">
      <Frame12 />
      <Frame35 />
    </div>
  );
}

function Group1() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] bg-[rgba(217,217,217,0)] h-[457px] ml-0 mt-0 w-[1920px]" />
      <Frame30 />
    </div>
  );
}

function Group2() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[calc(50%-960px)] mt-0 place-items-start relative">
      <div className="[grid-area:1_/_1] bg-[rgba(217,217,217,0)] h-[650px] ml-0 mt-0 w-[1920px]" />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col gap-[15px] h-[55px] items-start relative shrink-0 text-nowrap w-[420px]">
      <div className="flex flex-col font-['Montserrat:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[24px] text-black">
        <p className="leading-[normal] text-nowrap">Tour Spot</p>
      </div>
      <p className="font-['Noto_Sans:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[26px] relative shrink-0 text-[#555] text-[16px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        펜션 주요 관광지 정보를 확인해보세요!
      </p>
    </div>
  );
}

function Text() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] not-italic place-items-start relative shrink-0" data-name="text">
      <div className="[grid-area:1_/_1] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center ml-0 mt-[7.5px] relative text-[#463535] text-[20px] translate-y-[-50%] w-[550px]">
        <p className="leading-[normal]">Main Swimming Pool</p>
      </div>
      <div className="[grid-area:1_/_1] flex flex-col font-['Inter:Regular','Noto_Sans_KR:Regular','Noto_Sans:Regular',sans-serif] font-normal justify-center leading-[24px] ml-0 mt-[105px] relative text-[#555] text-[16px] tracking-[-0.32px] translate-y-[-50%] w-[550px]">
        <p className="mb-0">{`깨끗하고 넓은 수영 공간에서 가족, 친구들과 함께 시원한 물놀이를 즐겨보세요. `}</p>
        <p className="mb-0">{`투명카약을 수영장에서 즐기며 물 위를 떠다니는 특별한 경험을 만끽해보세요. `}</p>
        <p className="mb-0"> </p>
        <p>* 오후 3시~ 오후 8시까지 하절기에만 운영합니다.</p>
      </div>
    </div>
  );
}

function Frame42() {
  return (
    <div className="content-stretch flex flex-col gap-[448px] items-start relative shrink-0 w-[550px]">
      <Frame5 />
      <Text />
    </div>
  );
}

function Frame36() {
  return (
    <Wrapper>
      <div className="absolute bg-[#d9d9d9] inset-0" />
      <img alt="" className="absolute max-w-none object-50%-50% object-cover size-full" src={imgFrame7379} />
    </Wrapper>
  );
}

function Frame38() {
  return (
    <Wrapper>
      <div className="absolute bg-[#d9d9d9] inset-0" />
      <img alt="" className="absolute max-w-none object-50%-50% object-cover size-full" src={imgFrame7381} />
    </Wrapper>
  );
}

function Frame39() {
  return (
    <Wrapper>
      <div className="absolute bg-[#d9d9d9] inset-0" />
      <img alt="" className="absolute max-w-none object-50%-50% object-cover size-full" src={imgFrame7382} />
    </Wrapper>
  );
}

function Frame37() {
  return (
    <Wrapper>
      <div className="absolute bg-[#d9d9d9] inset-0" />
      <img alt="" className="absolute max-w-none object-50%-50% object-cover size-full" src={imgFrame7380} />
    </Wrapper>
  );
}

function Frame41() {
  return (
    <div className="content-start flex flex-wrap gap-0 items-start relative shrink-0 w-[650px]">
      <Frame36 />
      <Frame38 />
      <Frame39 />
      <Frame37 />
    </div>
  );
}

function Frame43() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex gap-[100px] items-center ml-[310px] mt-0 relative">
      <Frame42 />
      <Frame41 />
    </div>
  );
}

function Group4() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <Group2 />
      <Frame43 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex flex-col gap-[13px] items-start relative shrink-0 w-full">
      <div className="flex flex-col justify-center relative shrink-0 w-full">
        <p className="leading-[normal]">경기도 가평군 조종면 현등사길 35-9, 산그린펜션</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 w-full">
        <p className="leading-[normal]">{`대표자 : 이엽  |  E : sidezzz@naver.com`}</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 w-full">
        <p className="leading-[normal]">{`T : 031-584-5748  |  P : 010-2206-5748`}</p>
      </div>
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal gap-[50px] items-start leading-[0] relative shrink-0 text-[#b5afa8] text-[14px] w-full">
      <Frame15 />
      <div className="flex flex-col justify-center relative shrink-0 w-full">
        <p className="leading-[normal]">Copyright ⓒ 산그린펜션 All rights reserved.</p>
      </div>
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex flex-col gap-[27px] items-start relative shrink-0 w-[280px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#fff6ed] text-[30px] w-full">
        <p className="leading-[normal]">SANGREEN</p>
      </div>
      <Frame16 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex font-['Noto_Sans_KR:Regular',sans-serif] font-normal gap-[42px] items-center leading-[0] relative shrink-0 text-[#b5afa8] text-[14px] text-nowrap w-full">
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[normal] text-nowrap">고객센터</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[normal] text-nowrap">이용약관</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[normal] text-nowrap">개인정보처리방침</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[normal] text-nowrap">Contact Us</p>
      </div>
    </div>
  );
}

function LogosInstagramIcon() {
  return (
    <Wrapper1>
      <g clipPath="url(#clip0_1_534)" id="logos:instagram-icon">
        <path d={svgPaths.p30a25700} fill="var(--fill-0, #FFF6ED)" id="Vector" />
      </g>
      <defs>
        <clipPath id="clip0_1_534">
          <rect fill="white" height="20" width="20" />
        </clipPath>
      </defs>
    </Wrapper1>
  );
}

function QlementineIconsFacebook() {
  return (
    <Wrapper1>
      <g clipPath="url(#clip0_1_537)" id="qlementine-icons:facebook-16">
        <path clipRule="evenodd" d={svgPaths.p1f656a80} fill="var(--fill-0, #FFF6ED)" fillRule="evenodd" id="Vector" />
      </g>
      <defs>
        <clipPath id="clip0_1_537">
          <rect fill="white" height="20" width="20" />
        </clipPath>
      </defs>
    </Wrapper1>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex gap-[13px] items-center relative shrink-0">
      <LogosInstagramIcon />
      <QlementineIconsFacebook />
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex flex-col gap-[132px] items-end relative shrink-0 w-[405px]">
      <Frame14 />
      <Frame13 />
    </div>
  );
}

function Component5P() {
  return (
    <div className="content-stretch flex items-start justify-between pb-0 pt-[50px] px-0 relative shrink-0 w-[1300px]" data-name="5p">
      <div aria-hidden="true" className="absolute border-[#fff6ed] border-[1px_0px_0px] border-solid inset-[-0.5px_0_0_0] pointer-events-none" />
      <Frame18 />
      <Frame17 />
    </div>
  );
}

function Frame44() {
  return (
    <div className="bg-[#373500] content-stretch flex flex-col h-[567px] items-center justify-center relative shrink-0 w-full">
      <Component5P />
    </div>
  );
}

function Frame45() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[195px] items-start left-0 top-0 w-[1920px]">
      <Group6 />
      <Component2P />
      <Group1 />
      <Group4 />
      <Frame44 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="h-[57.786px] relative shrink-0 w-[20px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 57.7857">
        <g id="Frame 7333">
          <path d="M10 10V47.7857" id="Vector 1" stroke="var(--stroke-0, #555555)" />
        </g>
      </svg>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex gap-[33px] items-center relative shrink-0">
      <Helper2 text="Reservation" text1="Room 101" additionalClassNames="w-[79.282px]" />
      <Frame11 />
      <Helper2 text="Check In/Out" text1="2025.01.27 월 - 2025.01.28 화" additionalClassNames="w-[213.451px]" />
    </div>
  );
}

function Frame9() {
  return (
    <div className="backdrop-blur-[2px] backdrop-filter bg-[rgba(255,255,255,0.6)] content-stretch flex items-center px-[20px] py-[10px] relative shrink-0">
      <Frame10 />
    </div>
  );
}

function Btn() {
  return (
    <div className="bg-[#d3c6b0] content-stretch flex h-[78px] items-center justify-center px-[20px] py-[12px] relative shrink-0 w-[176px]" data-name="▣ 기본 Btn(사각형)">
      <div aria-hidden="true" className="absolute border border-[#373500] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#373500] text-[24px] text-nowrap">
        <p className="leading-[15px]">예약하기</p>
      </div>
    </div>
  );
}

function Frame40() {
  return (
    <div className="absolute content-stretch flex items-center right-[0.27px] top-[869px]">
      <Frame9 />
      <Btn />
    </div>
  );
}

export default function Frame() {
  return (
    <div className="bg-[#fff6ed] relative size-full">
      <Frame40 />
      <Frame45 />
    </div>
  );
}
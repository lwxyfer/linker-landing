import { lazy } from "react";
import i18n from "i18next";
import { useTranslation } from "react-i18next";


import IntroContentEN from "../../locales/en/IntroContent.json";
import MiddleBlockContentEN from "../../locales/en/MiddleBlockContent.json";
import AboutContentEN from "../../locales/en/AboutContent.json";
import MissionContentEN from "../../locales/en/MissionContent.json";
import ProductContentEN from "../../locales/en/ProductContent.json";
import ContactContentEN from "../../locales/en/ContactContent.json";

import IntroContentZH from "../../locales/zh/IntroContent.json";
import MiddleBlockContentZH from "../../locales/zh/MiddleBlockContent.json";
import AboutContentZH from "../../locales/zh/AboutContent.json";
import MissionContentZH from "../../locales/zh/MissionContent.json";
import ProductContentZH from "../../locales/zh/ProductContent.json";
import ContactContentZH from "../../locales/zh/ContactContent.json";

const Contact = lazy(() => import("../../components/ContactForm"));
const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));


const CustomZHMission = () => {
  return <p style={{fontSize: '16px'}}>
    <p style={{ fontSize: '16px' }}> "开启智能书签管理新纪元 —— 让信息触手可及"</p>
    <p style={{ fontSize: '16px' }}>在这个信息爆炸的时代，我们的目标是打造一款革命性的AI助手，它不仅能自动管理您的书签，还能根据您的需求智能推荐网站。</p>
    <p style={{ fontSize: '16px' }}> "智能，让书签管理更简单"</p>
    <p style={{ fontSize: '16px' }}>我们刚刚推出了MVP 0.0.1版本，标志着我们愿景的第一步。虽然我们还有很多待完善的功能，但我们已经准备好与您一起踏上这段旅程：</p>
    <p style={{ fontSize: '16px' }}>
    <ul>
      <li>AI智能保存：自动捕捉并保存您访问的每一个有价值的链接。</li>
      <li>个性化标签系统：AI将自动为链接添加标签和分类，让管理更加直观。</li>
      <li>智能分类引擎：通过深度学习，我们的AI将不断优化分类算法，确保您的书签井然有序。</li>
    </ul>
    </p>
  </p>
}

const CustomENMission = () => {
  return (
    <div style={{ fontSize: '16px' }}>
      <p> "Start the new era of intelligent bookmark management - make information at your fingertips"</p>
      <p>In this information explosion era, our goal is to create a revolutionary AI assistant that not only automatically manages your bookmarks but also intelligently recommends websites based on your needs.</p>
      <p> "Intelligence makes bookmark management simpler"</p>
      <p>We have just released the MVP 0.0.1 version, marking the first step of our vision. Although we have many features to improve, we are ready to embark on this journey with you:</p>
      <p>
        <ul>
          <li>AI Smart Save: Automatically capture and save every valuable link you visit.</li>
          <li>Personalized Tag System: AI will automatically add tags and categories to links, making management more intuitive.</li>
          <li>Smart Classification Engine: Through deep learning, our AI will continuously optimize the classification algorithm to ensure your bookmarks are well-organized.</li>
        </ul>
      </p>
    </div>
  );
}


const Home = () => {
  const { t, i18n } = useTranslation();  // useTranslation hook
  const isZH = i18n.language === "zh";  // get current active language

  const contents = isZH  ? {
    IntroContent: IntroContentZH,
    AboutContent: AboutContentZH,
    MiddleBlockContent: MiddleBlockContentZH,
    MissionContent: MissionContentZH,
    ProductContent: ProductContentZH,
    ContactContent: ContactContentZH
  } : {
    IntroContent: IntroContentEN,
    AboutContent: AboutContentEN,
    MiddleBlockContent: MiddleBlockContentEN,
    MissionContent: MissionContentEN,
    ProductContent: ProductContentEN,
    ContactContent: ContactContentEN
  }

  const {
    IntroContent,
    AboutContent,
    MiddleBlockContent,
    MissionContent,
    ProductContent,
    ContactContent
  } = contents;

  return (
    <Container>
      <ScrollToTop />
      <ContentBlock
        direction="right"
        title={IntroContent.title}
        content={IntroContent.text}
        button={IntroContent.button}
        icon="developer.svg"
        id="intro"
      />
      {/* <ContentBlock
        direction="left"
        title={t(AboutContent.title)}
        content={t(AboutContent.text)}
        section={AboutContent.section}
        icon="graphs.svg"
        id="about"
      /> */}
      <ContentBlock
        direction="left"
        title={MissionContent.title}
        // @ts-ignore
        content={isZH ? <CustomZHMission /> : <CustomENMission />}
        // icon="product-launch.svg"
        id="mission"
      />
      {/* <ContentBlock
        direction="left"
        title={t(ProductContent.title)}
        content={t(ProductContent.text)}
        icon="waving.svg"
        id="product"
      /> */}
    </Container>
  );
};

export default Home;

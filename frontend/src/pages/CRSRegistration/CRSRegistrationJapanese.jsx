/* eslint-disable react/prop-types */
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Check, Search, SlashIcon } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { useState, useRef, useEffect, useMemo } from "react";
import ServicesRightSideContentEng from "@/components/manual/ServicesRightSideContent/CDSCOContentRight";
import { Separator } from "@/components/ui/separator";
import {
    Table,
    TableBody,
    TableCell,
    TableHeader,
    TableRow,
    TableHead,
} from "@/components/ui/table";
import ScrollToTopButton from "@/components/common/ScrollToTop";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
// Contact Form Import
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";
import { ClockLoader } from "react-spinners";
import axios from "axios";
import BISImage from "../../assets/images/BIS.jpg";
import CDSCO from "../../assets/images/CDSCO.jpg";
import BISCRS from "../../assets/images/BISCRS.jpg";
import PlasticWasteManagement from "../../assets/images/PlasticWasteManagement.jpg";
import EPRCertificate from "../../assets/images/EPRCertificate.jpg";
import LMPC from "../../assets/images/LMPC.jpg";
import ISIMark from "../../assets/images/ISIMark.jpg";
import { BoxReveal } from "@/components/magicui/box-reveal";
import FooterJapanese from "@/components/manual/Footer/FooterJapanese";
import ServiceAuthorJapanese from "@/components/manual/ServiceAuthor/ServiceAuthorJapanese";


const BASE_URL = import.meta.env.VITE_APP_BASE_URL;


const CRSRegistrationJapanese = () => {
    return (
        <div className="relative">
            {/* CRS Registration Meta Tags */}
            <CRSRegistrationJapaneseMetaTags />
            {/* CRS Registration Breadcrumb */}
            <CRSRegistrationJapaneseBreadcrumb />
            {/* CRS Registration Hero Section */}
            <CRSRegistrationJapaneseHero />
            {/* CRS Registration Index Section */}
            <CRSRegistrationJapaneseIndex />
            {/* CRS Registration Main Content Section */}
            <CRSRegistrationJapaneseMainContent />
            {/* Footer Section */}
            <FooterJapanese />
            {/* Scroll To Top Button Section */}
            <ScrollToTopButton />
        </div>
    )
}

export default CRSRegistrationJapanese


const CRSRegistrationJapaneseMainContent = () => {
    return (
        <div>
            <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12">
                <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] w-full">
                    {/* Left Side */}
                    <CRSRegistrationJapaneseMainContentLeft />
                    {/* Right Side */}
                    <ServicesRightSideContentEng />
                </div>
            </div>
            <CRSRegistrationJapaneseServiceFaq />
            <CRSRegistrationJapaneseCISProductTable />
            <div id="services">
                <ServicesJapanese />
            </div>

        </div>
    );
};

export const ServicesJapanese = () => {
    return (
        <div className="pt-6 md:pt-12 pb-12  md:pb-16  overflow-x-hidden ">
            <div className="max-w-[80rem] w-full mx-auto">
                <div className="flex flex-col items-center justify-center">
                    <BoxReveal boxColor={"#B6B4DF"} duration={0.5}>
                        <h2 className="text-[30px] md:text-[48px] font-bold font-geist md:font-geist  text-center text-[#1E1E1E] ">
                            私たちのサービス
                        </h2>
                    </BoxReveal>

                    <BoxReveal boxColor={"#B6B4DF"} duration={0.5}>
                        <div className="hidden md:flex items-center w-[608.46px] gap-3 h-[35px] mx-auto justify-center">
                            <Separator className="w-[94.46px] h-[2px] bg-[#008080]" />
                            <span className="uppercase font-poppins font-semibold text-[20px] text-[#008080]">
                                インド最高の証明書コンサルタント
                            </span>
                            <Separator className="w-[94.46px] h-[2px] bg-[#008080]" />
                        </div>
                    </BoxReveal>
                </div>

                <div className="mt-16 md:mt-24 grid grid-cols-2 md:grid-cols-4 gap-x-3 md:gap-x-10 px-4 md:px-0 gap-y-12 md:gap-y-24">
                    <Link
                        to="/a-guide-to-bis-certification-for-foreign-manufacturers-indian-bis"
                        className="relative col-span-1 h-[145px] md:h-[240px] bg-[#B5DDEB] rounded-[15px] md:rounded-[20px] shadow-2xl shadow-blue-500/20 flex items-center justify-center md:block hover:scale-105 transition-all duration-300"
                    >
                        <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
                            <img
                                src={BISImage}
                                alt="BIS"
                                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
                            />
                        </div>
                        <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
                            外国製造業者向けBISマーク（ISIライセンス）
                        </p>
                    </Link>

                    <Link
                        to="/cdsco-registration-certification"
                        className="relative col-span-1 h-[145px] md:h-[240px] bg-[#B5DDEB] rounded-[15px] md:rounded-[20px] shadow-2xl shadow-blue-500/20 flex items-center justify-center md:block"
                    >
                        <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
                            <img
                                src={CDSCO}
                                alt="CDSCO"
                                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
                            />
                        </div>
                        <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
                            CDSCO登録認証
                        </p>
                    </Link>

                    <Link
                        to="/what-is-crs-bis-or-crs-registration"
                        className="relative col-span-1 h-[145px] md:h-[240px] bg-[#B5DDEB] rounded-[15px] md:rounded-[20px] shadow-2xl shadow-blue-500/20 flex items-center justify-center md:block"
                    >
                        <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
                            <img
                                src={BISCRS}
                                alt="BISCRS"
                                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
                            />
                        </div>
                        <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
                            BIS（CRS）登録
                        </p>
                    </Link>

                    <Link
                        to="/epr-certificate-for-plastic-waste-management-pwm"
                        className="relative col-span-1 h-[145px] md:h-[240px] bg-[#B5DDEB] rounded-[15px] md:rounded-[20px] shadow-2xl shadow-blue-500/20 flex items-center justify-center md:block"
                    >
                        <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
                            <img
                                src={PlasticWasteManagement}
                                alt="PlasticWasteManagement"
                                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
                            />
                        </div>
                        <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
                            プラスチック廃棄物管理
                        </p>
                    </Link>

                    <Link
                        to="/a-guide-on-how-to-obtain-epr-certificate"
                        className="relative col-span-1 h-[145px] md:h-[240px] bg-[#B5DDEB] rounded-[15px] md:rounded-[20px] shadow-2xl shadow-blue-500/20 flex items-center justify-center md:block"
                    >
                        <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
                            <img
                                src={EPRCertificate}
                                alt="EPRCertificate"
                                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
                            />
                        </div>
                        <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
                            EPR証明書認証
                        </p>
                    </Link>

                    <Link
                        to="/a-guide-on-how-to-obtain-lmpc-certificate"
                        className="relative col-span-1 h-[145px] md:h-[240px] bg-[#B5DDEB] rounded-[15px] md:rounded-[20px] shadow-2xl shadow-blue-500/20 flex items-center justify-center md:block"
                    >
                        <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
                            <img
                                src={LMPC}
                                alt="LMPC"
                                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
                            />
                        </div>
                        <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
                            LMPC証明書認証
                        </p>
                    </Link>

                    <Link
                        to="/what-is-bis-certificate-indian-bis"
                        className="relative col-span-1 h-[145px] md:h-[240px] bg-[#B5DDEB] rounded-[15px] md:rounded-[20px] shadow-2xl shadow-blue-500/20 flex items-center justify-center md:block"
                    >
                        <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
                            <img
                                src={BISImage}
                                alt="BIS"
                                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
                            />
                        </div>
                        <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
                            BIS登録証明書
                        </p>
                    </Link>

                    <Link
                        to="/a-guide-to-bis-certification-indian-bis"
                        className="relative col-span-1 h-[145px] md:h-[240px] bg-[#B5DDEB] rounded-[15px] md:rounded-[20px] shadow-2xl shadow-blue-500/20 flex items-center justify-center md:block"
                    >
                        <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
                            <img
                                src={ISIMark}
                                alt="ISIMark"
                                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
                            />
                        </div>
                        <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
                            インド製造業者向けISIマーク（BIS）
                        </p>
                    </Link>
                </div>
            </div>
        </div>
    );
};

const productsData = [
    {
        id: 1,
        product: "入力電力2000W以上のアンプ",
        isNumber: "IS 616:2017",
        date: "03 July 2013",
    },
    {
        id: 2,
        product: "自動データ処理機器",
        isNumber: "IS 13252(Part 1):2010",
        date: "03 July 2013",
    },
    {
        id: 3,
        product: "主電源式電子時計",
        isNumber: "IS 302-2-26:2014",
        date: "03 July 2013",
    },
    {
        id: 4,
        product: "電子ゲーム（ビデオ）",
        isNumber: "IS 616:2017",
        date: "03 July 2013",
    },
    {
        id: 5,
        product: "入力電力200W以上の電子音楽システム",
        isNumber: "IS 616:2017",
        date: "03 July 2013",
    },
    {
        id: 6,
        product: "ラップトップ/ノートブック/タブレット",
        isNumber: "IS 13252(Part 1):2010",
        date: "03 July 2013",
    },
    {
        id: 7,
        product: "電子レンジ",
        isNumber: "IS 302-2-25:2014",
        date: "03 July 2013",
    },
    {
        id: 8,
        product:
            "入力電力200W以上の内蔵アンプ付き光学ディスクプレーヤー",
        isNumber: "IS 616:2017",
        date: "03 July 2013",
    },
    {
        id: 9,
        product: '画面サイズ32"以上のプラズマ/LCD/LEDテレビ',
        isNumber: "IS 616:2017",
        date: "03 July 2013",
    },
    {
        id: 10,
        product: "プリンター、プロッター",
        isNumber: "IS 13252(Part 1):2010",
        date: "03 July 2013",
    },
    {
        id: 11,
        product: "スキャナー",
        isNumber: "IS 13252(Part 1):2010",
        date: "03 July 2013",
    },
    {
        id: 12,
        product: "セットトップボックス",
        isNumber: "IS 13252(Part 1):2010",
        date: "03 July 2013",
    },
    {
        id: 13,
        product: "電話応答機",
        isNumber: "IS 13252(Part 1):2010",
        date: "03 July 2013",
    },
    {
        id: 14,
        product:
            '画面サイズ32"以上のビジュアルディスプレイユニット、ビデオモニター',
        isNumber: "IS 13252(Part 1):2010",
        date: "03 July 2013",
    },
    {
        id: 15,
        product: "ワイヤレスキーボード",
        isNumber: "IS 13252(Part 1):2010",
        date: "03 July 2013",
    },
    {
        id: 16,
        product: "レジスター",
        isNumber: "IS 13252(Part 1):2010",
        date: "13 May 2015",
    },
    {
        id: 17,
        product: "コピー機/複写機",
        isNumber: "IS 13252(Part 1):2010",
        date: "13 May 2015",
    },
    {
        id: 18,
        product: "パスポートリーダー",
        isNumber: "IS 13252(Part 1):2010",
        date: "13 May 2015",
    },
    {
        id: 19,
        product: "POS端末",
        isNumber: "IS 13252(Part 1):2010",
        date: "13 May 2015",
    },
    {
        id: 20,
        product: "メール処理機/郵便料金機/消印機",
        isNumber: "IS 13252(Part 1):2010",
        date: "13 May 2015",
    },
    {
        id: 21,
        product: "携帯用途用パワーバンク",
        isNumber: "IS 13252(Part 1):2010",
        date: "13 May 2015",
    },
    {
        id: 22,
        product: "スマートカードリーダー",
        isNumber: "IS 13252(Part 1):2010",
        date: "13 May 2015",
    },
    {
        id: 23,
        product: "携帯電話",
        isNumber: "IS 13252(Part 1):2010",
        date: "13 September 2015",
    },
    {
        id: 24,
        product: "一般照明サービス用セルフバラストLEDランプ",
        isNumber: "IS 16102(Part 1):2012",
        date: "13 September 2015",
    },
    {
        id: 25,
        product: "LEDモジュール用DC/AC電源電子制御装置",
        isNumber: "IS 15885(Part 2/Sec 13):2012",
        date: "01 December 2015",
    },
    {
        id: 26,
        product: "オーディオ、ビデオおよび類似電子機器用電源アダプター",
        isNumber: "IS 616:2010",
        date: "01 December 2015",
    },
    {
        id: 27,
        product: "IT機器用電源アダプター",
        isNumber: "IS 13252(Part 1):2010",
        date: "01 December 2015",
    },
    {
        id: 28,
        product: "固定式一般用途LED照明器具",
        isNumber: "IS 10322(Part 5/Sec 1):2012",
        date: "01 March 2016",
    },
    {
        id: 29,
        product: "定格5KVA以下のUPS/インバーター",
        isNumber: "IS 16242(Part 1):2014",
        date: "01 March 2016",
    },
    {
        id: 30,
        product:
            "携帯用途用アルカリまたはその他の非酸性電解質を含む密閉二次電池/バッテリー パート1 ニッケル系",
        isNumber: "IS 16046(Part 1): 2018",
        date: "01 June 2016",
    },
    {
        id: 31,
        product:
            "携帯用途用アルカリまたはその他の非酸性電解質を含む密閉二次電池/バッテリー パート2 リチウム系",
        isNumber: "IS 16046(Part 2): 2018",
        date: "01 June 2016",
    },
    {
        id: 32,
        product: "携帯電話ハンドセット用インド言語サポート",
        isNumber: "IS 16333 (Part 3) : 2022",
        date: "01 May 2018",
    },
    {
        id: 33,
        product: "埋め込み式LED照明器具",
        isNumber: "IS 10322 (Part 5/Section 2) : 2012",
        date: "23 May 2018",
    },
    {
        id: 34,
        product: "道路・街路灯用LED照明器具",
        isNumber: "IS 10322 (Part 5/Section 3) : 2012",
        date: "23 May 2018",
    },
    {
        id: 35,
        product: "LED投光器",
        isNumber: "IS 10322 (Part 5/Section 5) : 2013",
        date: "23 May 2018",
    },
    {
        id: 36,
        product: "LEDハンドランプ",
        isNumber: "IS 10322 (Part 5/Section 6) : 2013",
        date: "23 May 2018",
    },
    {
        id: 37,
        product: "LED照明チェーン",
        isNumber: "IS 10322 (Part 5/Section 7) : 2017",
        date: "23 May 2018",
    },
    {
        id: 38,
        product: "非常照明用LED照明器具",
        isNumber: "IS 10322 (Part 5/Section 8) : 2013",
        date: "23 May 2018",
    },
    {
        id: 39,
        product: "定格10kVA以下のUPS/インバーター",
        isNumber: "IS 16242 (Part 1) : 2014",
        date: "23 May 2018",
    },
    {
        id: 40,
        product: "画面サイズ32以下のプラズマ/LCD/LEDテレビ",
        isNumber: "IS 616 : 2017",
        date: "23 May 2018",
    },
    {
        id: 41,
        product: "画面サイズ32以下のビジュアルディスプレイユニット、ビデオモニター",
        isNumber: "IS 13252 (Part 1) : 2010",
        date: "23 May 2018",
    },
    {
        id: 42,
        product: "CCTVカメラ/CCTVレコーダー",
        isNumber:
            "IS 13252 (Part 1) : 2010, Essential Requirement(s) for Security of CCTV",
        date: "23 May 2018",
    },
    {
        id: 43,
        product: "家庭用および類似電気機器用アダプター",
        isNumber: "IS 302 (Part 1) : 2008",
        date: "23 May 2018",
    },
    {
        id: 44,
        product:
            "USB駆動バーコードリーダー、バーコードスキャナー、虹彩スキャナー、光学指紋スキャナー",
        isNumber: "IS 13252 (Part 1) : 2010",
        date: "23 May 2018",
    },
    {
        id: 45,
        product: "スマートウォッチ",
        isNumber: "IS 13252 (Part 1) : 2010",
        date: "23 May 2018",
    },
    {
        id: 46,
        product:
            "結晶シリコン地上用太陽光発電（PV）モジュール（Siウェーハベース）",
        isNumber:
            "IS 14286 : 2010/ IEC 61215 : 2005, IS/IEC 61730 (Part 1) : 2004 & IS/IEC 61730 (Part 2) : 2004",
        date: "31 March 2019",
    },
    {
        id: 47,
        product:
            "薄膜地上用太陽光発電（PV）モジュール（a-Si、CiGs、CdTe）",
        isNumber:
            "IS 16077 : 2013/ IEC 61646 : 2008, IS/IEC 61730 (Part 1) : 2004 & IS/IEC 61730 (Part 2) : 2004",
        date: "31 March 2019",
    },
    {
        id: 48,
        product: "太陽光発電システム用パワーコンバーター",
        isNumber: "IS 16221 (Part 2) : 2015 / IEC 62109-2 : 2011",
        date: "30 June 2021",
    },
    {
        id: 49,
        product: "系統連系太陽光発電インバーター",
        isNumber:
            "IS 16221 (Part 2):2015/IEC 62109-2 :2011 & IS 16169 :2014/IEC 62116 :2008",
        date: "30 June 2021",
    },
    {
        id: 50,
        product: "蓄電池",
        isNumber: "IS 16270 : 2014",
        date: "01 January 2019",
    },
    {
        id: 51,
        product: "一般照明用独立LEDモジュール",
        isNumber: "IS 16103 (Part 1) : 2012",
        date: "01 April 2021",
    },
    {
        id: 52,
        product: "照明チェーン（ロープライト）",
        isNumber: "IS 10322 (Part 5/Sec 9) : 2017",
        date: "01 April 2021",
    },
    {
        id: 53,
        product: "キーボード",
        isNumber: "IS 13252 (Part 1) : 2010",
        date: "01 April 2021",
    },
    {
        id: 54,
        product: "IHクッキングヒーター",
        isNumber: "IS 302-2-6 : 2009",
        date: "01 April 2021",
    },
    {
        id: 55,
        product: "現金自動支払機",
        isNumber: "IS 13252 (Part 1) : 2010",
        date: "01 April 2021",
    },
    {
        id: 56,
        product: "USBタイプ外付けハードディスクドライブ",
        isNumber: "IS 13252 (Part 1) : 2010",
        date: "01 April 2021",
    },
    {
        id: 57,
        product: "ワイヤレスヘッドフォン・イヤホン",
        isNumber: "IS 616 : 2017",
        date: "01 April 2021",
    },
    {
        id: 58,
        product:
            "USBタイプ外付けソリッドステートストレージデバイス（256GB容量以上）",
        isNumber: "IS 13252 (Part 1) : 2010",
        date: "01 April 2021",
    },
    {
        id: 59,
        product: "入力電力200W以下の電子音楽システム",
        isNumber: "IS 616 : 2017",
        date: "01 April 2021",
    },
    {
        id: 60,
        product:
            "出力電圧48V（最大）のスタンドアロンスイッチモード電源（SMPS）",
        isNumber: "IS 13252 (Part 1) : 2010",
        date: "01 April 2021",
    },
    {
        id: 61,
        product: "プラズマ/LCD/LEDテレビ以外のテレビ",
        isNumber: "IS 616 : 2017",
        date: "01 April 2021",
    },
    {
        id: 62,
        product: "炊飯器",
        isNumber: "IS 302-2-15 : 2009",
        date: "01 April 2021",
    },
    {
        id: 63,
        product: "ワイヤレスマイクロフォン",
        isNumber: "IS 616 : 2017",
        date: "01 October 2021",
    },
    {
        id: 64,
        product: "デジタルカメラ",
        isNumber: "IS 13252 (Part 1) : 2010",
        date: "01 October 2021",
    },
    {
        id: 65,
        product: "ビデオカメラ",
        isNumber: "IS 616 : 2017",
        date: "01 October 2021",
    },
    {
        id: 66,
        product: "ウェブカメラ（完成品）",
        isNumber: "IS 616 : 2017",
        date: "01 October 2021",
    },
    {
        id: 67,
        product: "スマートスピーカー（ディスプレイ付き・なし）",
        isNumber: "IS 616 : 2017",
        date: "01 October 2021",
    },
    {
        id: 68,
        product: "LED製品用調光器",
        isNumber: "IS 60669-2-1: 2008",
        date: "01 October 2021",
    },
    {
        id: 69,
        product: "Bluetoothスピーカー",
        isNumber: "IS 616 : 2017",
        date: "01 October 2021",
    },
    {
        id: 70,
        product: "オルトリン酸",
        isNumber: "IS 798 : 2020",
        date: "12 December 2021",
    },
    {
        id: 71,
        product: "ポリリン酸",
        isNumber: "IS 17439:2020",
        date: "24 December 2021",
    },
    {
        id: 72,
        product: "綿花梱包",
        isNumber: "IS 12171:2019",
        date: "03 March 2023",
    },
    {
        id: 73,
        product: "トリメチルホスファイト工業用",
        isNumber: "IS 17412:2020",
        date: "03 March 2023",
    },
    {
        id: 74,
        product: "テレビセット",
        isNumber: "IS 18112:2022",
        date: "26 April 2023",
    },
];


const CRSRegistrationJapaneseCISProductTable = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 20;

    const filteredProducts = productsData.filter(
        (product) =>
            product.product.toLowerCase().includes(searchQuery.toLowerCase()) ||
            product.isNumber.toLowerCase().includes(searchQuery.toLowerCase())
    );

    useEffect(() => {
        setCurrentPage(1);
    }, [searchQuery]);

    const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = filteredProducts.slice(
        indexOfFirstProduct,
        indexOfLastProduct
    );

    const scrollToTable = () => {
        const tableSection = document.querySelector(".product-table-section");
        if (tableSection) {
            tableSection.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    };

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
            scrollToTable();
        }
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
            scrollToTable();
        }
    };
    return (
        <section className="w-full pb-12 product-table-section">
            <div className="max-w-[88rem] mx-auto px-4 md:px-12">
                <h2 className="text-[28px] md:text-[40px] font-roboto font-bold text-[#131316] leading-none md:leading-normal mb-4">
                    BIS CRS登録の公式製品リスト
                </h2>

                <p className="font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose mb-8">
                    以下の表は、インドでBIS CRS登録が必要な製品と、適用されるインド規格（IS）番号および実施日をリストアップしています。
                </p>

                <div className="relative mb-6">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                        <Search className="w-5 h-5 text-gray-400" />
                    </div>
                    <input
                        type="text"
                        placeholder="製品名またはIS番号で検索..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full p-3 pl-12 text-base font-geist text-gray-800 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#1A8781] focus:border-transparent transition-shadow hover:shadow-md"
                    />
                </div>

                <div className="rounded-md border bg-white shadow-sm">
                    <Table>
                        <TableHeader>
                            <TableRow className="bg-[#F9F7F2] hover:bg-[#F9F7F2]/80">
                                <TableHead className="font-semibold font-geist text-left text-base md:text-lg w-[80px] border-r border-gray-300">
                                    番号
                                </TableHead>
                                <TableHead className="font-semibold font-geist text-left text-base md:text-lg w-[180px] border-r border-gray-300">
                                    製品
                                </TableHead>
                                <TableHead className="font-semibold font-geist text-left text-base md:text-lg w-[180px] border-r border-gray-300">
                                    IS番号
                                </TableHead>
                                <TableHead className="font-semibold font-geist text-left text-base md:text-lg">
                                    実施日
                                </TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {currentProducts.map((item) => (
                                <TableRow key={item.id}>
                                    <TableCell className="font-medium font-geist text-base md:text-lg text-left border-r border-gray-200">
                                        {item.id}
                                    </TableCell>
                                    <TableCell className="font-geist text-base md:text-lg text-left border-r border-gray-200">
                                        {item.product}
                                    </TableCell>
                                    <TableCell className="font-geist text-base md:text-lg text-left border-r border-gray-200">
                                        {item.isNumber}
                                    </TableCell>
                                    <TableCell className="font-geist text-base md:text-lg text-left">
                                        {item.date}
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
                {totalPages > 1 && (
                    <div className="flex justify-center items-center mt-6">
                        <div className="flex items-center">
                            <button
                                onClick={handlePrevPage}
                                disabled={currentPage === 1}
                                className="px-4 py-2 mx-1 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                前へ
                            </button>
                            <span className="px-4 py-2 font-geist text-sm">
                                {currentPage} / {totalPages} ページ
                            </span>
                            <button
                                onClick={handleNextPage}
                                disabled={currentPage === totalPages}
                                className="px-4 py-2 mx-1 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                次へ
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </section>
    )
}


const CRSRegistrationJapaneseServiceFaq = () => {
    const [showAllFaqs, setShowAllFaqs] = useState(false);

    const allFaqs = [
        {
            id: "item-1",
            question: "1. BIS登録とは何ですか？",
            answer:
                "BIS認証は、インド標準局が管理するコンプライアンスプロセスで、製品が品質、安全性、信頼性に関する適用されるインド規格（IS）を満たしていることを検証します。",
        },
        {
            id: "item-2",
            question: "2. BISの下でのCRS登録とは何ですか？",
            answer:
                "CRSは強制登録スキームを意味します。これは、電子機器、電気機器、バッテリー、太陽光アイテムなどの特定の製品カテゴリーに対する必須登録プロセスです。CRSの下の製品は、インドで販売される前にBISでテストされ登録される必要があります。",
        },
        {
            id: "item-3",
            question: "3. インドでBIS認証は必須ですか？",
            answer:
                "はい。CRS製品リスト（現在80以上のアイテム）に記載されているすべての製品について、インドでの製造、輸入、または販売にはBIS登録が必須です。",
        },
        {
            id: "item-4",
            question: "4. BIS CRSとISIマークの違いは何ですか？",
            answer:
                "BIS CRS：電子機器およびIT製品用、QCOの下で通知された必須製品のみ。<br />ISIマーク：より幅広い製品範囲で使用され、製品カテゴリーに応じて任意または必須の場合があります。",
        },
        {
            id: "item-5",
            question: "5. 誰がBIS CRS登録を申請できますか？",
            answer:
                "製造業者のみが申請できます。これにはインドの製造業者と外国の製造業者の両方が含まれます。外国ブランドは認可インド代表者（AIR）を任命する必要があります。",
        },
        {
            id: "item-6",
            question: "6. AIRの役割は何ですか？",
            answer:
                "認可インド代表者（AIR）は、外国製造業者に代わってBIS申請を提出する法的責任があります。彼らはBISと海外申請者の間の公式連絡役として機能します。",
        },
        {
            id: "item-7",
            question: "7. BIS CRS登録にはどのくらい時間がかかりますか？",
            answer:
                "プロセスは通常3〜4週間かかります。すべての文書とテストレポートが正しく提出され、BISから異議が提起されないことを前提としています。",
        },
        {
            id: "item-8",
            question: "8. BIS CRS証明書の費用はいくらですか？",
            answer:
                "費用には以下が含まれます：<br />テスト料金：₹10,000〜₹20,000 + GST<br />政府料金：テストレポートあたり₹53,000 + GST<br />追加料金：宣誓供述書、宅配便、AIR文書など<br />インドのMSME登録製造業者には割引が適用されます",
        },
        {
            id: "item-9",
            question: "9. BIS CRS証明書の有効性はどのくらいですか？",
            answer:
                "初期のBISライセンスは2年間有効です。製品と製造詳細が変更されない場合、最大5年間更新できます。",
        },
        {
            id: "item-10",
            question: "10. BIS認証は任意で取得できますか？",
            answer:
                "いいえ。CRSの下では、QCOの下にリストされていない製品について任意で申請することはできません。任意認証は、ISIスキームを通じた非CRS製品にのみ適用されます。",
        },
        {
            id: "item-11",
            question: "11. BIS CRS製品リストはどこで見つけられますか？",
            answer:
                '公式BISウェブサイト<a href="https://www.crsbis.in/BIS/publicdashAction.do" target="_blank" rel="noopener noreferrer" className="text-[#1A8781] underline">https://www.crsbis.in/BIS/publicdashAction.do</a>にアクセスし、「CRSの下の製品」セクションに移動して、対象製品の完全なリストを表示できます。',
        },
        {
            id: "item-12",
            question: "12. BISマークは電子的に表示できますか？",
            answer:
                "はい、e-ラベリングを通じて可能ですが、厳格なBISルールを満たす必要があります：ラベル情報はファームウェアに埋め込まれている必要があります<br />デバイスメニューで4ステップ以内で簡単にアクセス可能<br />物理パッケージングには規制情報を引き続き表示する必要があります",
        },
        {
            id: "item-13",
            question:
                "13. 必須製品についてBIS登録を取得しないとどうなりますか？",
            answer:
                "深刻な罰則が科せられます：<br />製品の押収<br />税関での却下<br />法的罰金<br />eコマースポータルからの削除<br />インド市場からの永久禁止",
        },
        {
            id: "item-14",
            question: "14. 1つのBIS証明書で複数のモデルやブランドをカバーできますか？",
            answer:
                "いいえ。各ブランドと工場所在地は別々に認証される必要があります。追加レポートを使用して複数のモデルを追加することは可能ですが、同じ申請とブランドの下でのみです。",
        },
        {
            id: "item-15",
            question: "15. Sun Certifications Indiaはどのように支援してくれますか？",
            answer:
                "私たちは以下を提供します：<br />完全な文書サポート<br />ラボコーディネーション<br />BISポータル申請処理<br />照会解決とBISフォローアップ<br />更新とラベリングガイダンス<br />AIRサービスを通じた外国ブランドのコンプライアンス保証",
        },
    ];

    const visibleFaqs = showAllFaqs ? allFaqs : allFaqs.slice(0, 5);

    return (
        <div id="faqs" className="my-2 scroll-mt-20">
            <div className="max-w-[88rem] mx-auto px-4 py-8 md:p-12">
                <h2 className="text-[32px] md:text-[48px] text-center font-geist font-semibold text-[#181818]">
                    よくある質問
                </h2>
                <p className="text-[#52525b] text-center text-[16px] md:text-[20px] font-geist">
                    お探しの答えが見つかりませんか？{" "}
                    <span className="text-[#27272a] font-geist text-[20px] font-medium underline underline-offset-4">
                        お気軽にお問い合わせください！
                    </span>
                </p>

                <div className="w-full max-w-[1104px] mt-[16px] md:mt-[24px] mx-auto">
                    <Accordion type="single" collapsible className="w-full">
                        {visibleFaqs.map((faq) => (
                            <AccordionItem key={faq.id} value={faq.id}>
                                <AccordionTrigger className="font-geist text-[16px] md:text-[18px] text-[#3f3f46] font-medium">
                                    <h3>{faq.question}</h3>
                                </AccordionTrigger>
                                <AccordionContent className="font-geist text-[16px] md:text-[18px] text-[#5e5f6e]">
                                    <div dangerouslySetInnerHTML={{ __html: faq.answer }} />
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>

                    {/* Show More/Show Less Button */}
                    <div className="flex justify-center mt-8">
                        <button
                            onClick={() => setShowAllFaqs(!showAllFaqs)}
                            className="inline-flex items-center gap-2 px-6 py-3 bg-[#1A8781] text-white font-geist font-medium text-[16px] rounded-lg hover:bg-[#125E5A] transition-colors duration-300 shadow-md hover:shadow-lg"
                        >
                            {showAllFaqs ? (
                                <>
                                    <svg
                                        className="w-5 h-5 transform rotate-180"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M19 9l-7 7-7-7"
                                        />
                                    </svg>
                                    よくある質問を少なく表示
                                </>
                            ) : (
                                <>
                                    <svg
                                        className="w-5 h-5"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M19 9l-7 7-7-7"
                                        />
                                    </svg>
                                    よくある質問をもっと表示
                                </>
                            )}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

const CRSRegistrationJapaneseMainContentLeft = () => {
    return (
        <div className="flex-1">
            <div className="flex flex-col gap-[20px] md:gap-[40px]">
                <div className="flex flex-col gap-2">
                    <h2 className="crs-heading-two">BIS登録とは何ですか？</h2>

                    <p className="crs-paragraph">
                        インド標準局（BIS）は、インドの国家標準化機関であり、インド政府の消費者問題・食料・公共配給省の下で活動しています。BISは、関連するインド規格（IS）に従って、インドの様々な製品とサービスの品質、安全性、性能基準を維持する責任があります。
                    </p>

                    <p className="crs-paragraph">
                        BISは、インドにおける様々なスキームの監督と実施を担当しています。強制登録スキーム（CRS）は、様々なカテゴリーの電子機器およびIT製品をカバーするBISの非常に重要な必須認証スキームです。
                    </p>

                    <p className="crs-paragraph">
                        インド製品の性能と安全性は、インドにとって重要な問題です。BIS CRS認証は、電子機器およびIT製品がインド規格に準拠していることを保証し、消費者を非準拠および粗悪な製品から保護するのに役立ちます。
                    </p>
                </div>

                {/* Overview Section */}
                <CRSRegistrationJapaneseMainContentLeftOverviewSection />

                {/* Divider */}
                <div className="crs-divider" />

                {/* Eligibility Section */}
                <CRSRegistrationJapaneseMainContentLeftEligibilitySection />

                {/* Divider */}
                <div className="crs-divider" />

                {/* Documents Section */}
                <CRSRegistrationJapaneseMainContentLeftDocumentsSection />

                {/* Divider */}
                <div className="crs-divider" />

                {/* Registration Section */}
                <CRSRegistrationJapaneseMainContentLeftRegistrationSection />

                {/* Divider */}
                <div className="crs-divider" />

                {/* Fees Section */}
                <CRSRegistrationJapaneseMainContentLeftFeesSection />

                {/* Divider */}
                <div className="crs-divider" />

                {/* E-Labelling  */}
                <CRSRegistrationJapaneseMainContentLeftELabellingSection />

                {/* Divider */}
                <div className="crs-divider" />

                <ServiceAuthorJapanese />
            </div>
        </div>
    )
}



const CRSRegistrationJapaneseMainContentLeftELabellingSection = () => {
    return (
        <div id="elabelling" className="flex flex-col scroll-mt-20">
            {/* E-Labelling */}
            <div className="flex w-full items-center gap-3">
                <span className="crs-index-heading">E-ラベリング</span>
                <Separator className="crs-separator" />
            </div>

            <div className="crs-heading-two">
                CRS認証製品のE-ラベリングガイドライン
            </div>

            <div className="crs-heading-three">E-ラベリングとは何ですか？</div>

            <p className="crs-paragraph">
                E-ラベリングは、デバイスに印刷して貼り付ける代わりに、デバイス内で規制情報を電子的に表示する慣行です。BISの強制登録スキーム（CRS）の下では、指定された製品、特にコンパクトまたはデジタルデバイスは、ソフトウェアインターフェースまたはデジタルパッケージングを通じてBIS証明書の詳細、標準マーク、ISコードを表示することができます。
            </p>

            <div className="crs-heading-three">
                E-ラベリングに関するBISガイドライン：電子E-ラベリング（BIS CMD
                3/8:1/6975. 2015年12月3日付）
            </div>

            <h3 className="crs-heading-three">E-ラベリングの要件：</h3>

            {/* E-Labelling Requirements Table */}
            <div className="mt-[16px] md:mt-[24px] mb-[16px] md:mb-[20px] overflow-x-auto">
                <div className="rounded-md border bg-white shadow-sm min-w-full">
                    <Table>
                        <TableHeader>
                            <TableRow className="bg-[#F9F7F2] hover:bg-[#F9F7F2]/80">
                                <TableHead className="font-semibold font-geist text-sm md:text-lg text-left w-[300px] border-r border-gray-300 tracking-wide leading-loose">
                                    ルール
                                </TableHead>
                                <TableHead className="font-semibold font-geist text-sm md:text-lg text-left tracking-wide leading-loose">
                                    説明
                                </TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            <TableRow>
                                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                                    パッケージング上の物理ラベル
                                </TableCell>
                                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                                    製品ボックスまたは外部パッケージングにはBIS CRSロゴと登録詳細を表示する必要があります。
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                                    バルクパッケージング用の取り外し可能ラベル
                                </TableCell>
                                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                                    製品がバルクで出荷される場合、外側のパッケージに取り外し可能な接着ラベルが受け入れ可能です。
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                                    アクセスにツール不要
                                </TableCell>
                                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                                    ユーザーはツールやアクセサリーを必要とせずにe-ラベル情報にアクセスできる必要があります（例：SIMカードの取り外しは許可されません）。
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                                    セキュアプログラミング
                                </TableCell>
                                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                                    E-ラベル情報はファームウェア/ソフトウェアに埋め込まれ、第三者による変更からロックされている必要があります。
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                                    メニューベースアクセス
                                </TableCell>
                                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                                    ユーザーはデバイスのメニューインターフェースを通じて最大4ステップで情報にアクセスする必要があります。
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                                    指示が必要
                                </TableCell>
                                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                                    e-ラベル詳細にアクセスする方法の指示を提供する必要があります。
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </div>
            </div>

            <p className="crs-paragraph">
                Sun Certifications IndiaがCRSスキームの下でBIS登録をどのように支援できるか
            </p>

            <div className="crs-heading-three">なぜBISコンサルタントを選ぶのか？</div>

            <p className="crs-paragraph">
                全体のBIS CRS登録は、ルールと文書の量に関して非常に技術的で包括的です。インド規格、最近のQCO、テストレポートの構造、ポータルインターフェースのワークフローに対する徹底的な理解がない場合、申請者は遅延、却下、または長期間の積極的な非準拠という後続の行動において大幅に損失を被る可能性があります。ここでSun Certifications Indiaが信頼できる信頼できるパートナーとして、強制認証スキームのあらゆる詳細で申請者を支援します。
            </p>
        </div>
    )
}

const CRSRegistrationJapaneseMainContentLeftFeesSection = () => {
    return (
        <div id="fees" className="flex flex-col scroll-mt-20">
            {/* Fees */}
            <div className="flex w-full items-center gap-3">
                <span className="crs-index-heading">登録料金</span>
                <Separator className="crs-separator" />
            </div>

            <h2 className="crs-heading-two">
                BIS CRS登録料金、有効性および更新ガイドライン
            </h2>

            <p className="crs-paragraph">
                CRSの下でBIS証明書を取得するには、申請者は政府料金とテスト対象製品の支払いを行う必要があります。プロセスがオンラインでインターフェースが合理化されているにもかかわらず、多くの申請者は支払い不足や申請の誤提出により、リクエストの遅延や却下に直面しています。
            </p>

            <h3 className="crs-heading-three">CRS登録の料金体系</h3>

            {/* Fee Structure Table */}
            <div className="mt-[16px] md:mt-[24px] mb-[16px] md:mb-[20px] overflow-x-auto">
                <div className="rounded-md border bg-white shadow-sm min-w-full">
                    <Table>
                        <TableHeader>
                            <TableRow className="bg-[#F9F7F2] hover:bg-[#F9F7F2]/80">
                                <TableHead className="font-semibold font-geist text-sm md:text-lg text-left w-[300px] border-r border-gray-300 tracking-wide leading-loose">
                                    料金タイプ
                                </TableHead>
                                <TableHead className="font-semibold font-geist text-sm md:text-lg text-left tracking-wide leading-loose">
                                    金額
                                </TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            <TableRow>
                                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                                    政府料金
                                </TableCell>
                                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                                    テストレポートあたり₹53,000 + 18% GST
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                                    テスト料金
                                </TableCell>
                                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                                    ₹10,000 – ₹20,000 + 18% GST（製品/ラボにより異なる）
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                                    同一申請での追加レポート
                                </TableCell>
                                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                                    レポートあたり₹20,000 + 18% GST
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                                    更新料金
                                </TableCell>
                                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                                    ₹53,000 + 18% GST
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </div>
            </div>

            <p className="crs-paragraph italic text-center">
                <em>
                    価格は更新される可能性があります — BISポータルまたはコンサルタントで確認してください。
                </em>
            </p>

            <h3 className="crs-heading-three">CRS証明書の有効性と更新</h3>

            {/* Certificate Validity & Renewal Table */}
            <div className="mt-[16px] md:mt-[24px] mb-[16px] md:mb-[20px] overflow-x-auto">
                <div className="rounded-md border bg-white shadow-sm min-w-full">
                    <Table>
                        <TableHeader>
                            <TableRow className="bg-[#F9F7F2] hover:bg-[#F9F7F2]/80">
                                <TableHead className="font-semibold font-geist text-sm md:text-lg text-left w-[300px] border-r border-gray-300 tracking-wide leading-loose">
                                    パラメータ
                                </TableHead>
                                <TableHead className="font-semibold font-geist text-sm md:text-lg text-left tracking-wide leading-loose">
                                    詳細
                                </TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            <TableRow>
                                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                                    初期有効性
                                </TableCell>
                                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                                    2年
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                                    更新期間
                                </TableCell>
                                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                                    最大5年（製品変更がない場合）
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                                    更新プロセス
                                </TableCell>
                                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                                    オンライン、新しい宣誓供述書+更新料金に基づく
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                                    再テストが必要？
                                </TableCell>
                                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                                    製品仕様/IS規格が変更されない限り不要
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </div>
            </div>
        </div>
    )
}

const CRSRegistrationJapaneseMainContentLeftRegistrationSection = () => {
    return (
        <div id="registration" className="flex flex-col scroll-mt-20">
            {/* Registration */}
            <div className="flex w-full items-center gap-3">
                <span className="crs-index-heading">登録プロセス</span>
                <Separator className="crs-separator" />
            </div>

            <h2 className="crs-heading-two">BIS CRS登録プロセス</h2>

            <p className="crs-paragraph">
                BIS CRS登録は、BIS登録ポータルを通じた完全オンラインプロセスです。文書のアップロードを含む手順だけではありません。技術的な性質の特別な注意、規制の理解、およびインド規格（IS）への完全な準拠も必要です。
            </p>

            <p className="crs-paragraph">
                BIS CRSプロセス、現在は認証・登録システム（CRS）と呼んでいますが、BIS認証の旅がどのように展開するかを以下に示します。
            </p>

            <div className="crs-heading-three">
                ステップ1：BIS認可ラボでの製品テスト
            </div>

            <PointsListWithoutHeading
                points={[
                    "BIS承認リストからラボを選択する",
                    "関連するISのテストを実行する製品のサンプルを提出する",
                    "BISテストレポート形式に従ってサンプルのテストレポートを取得する",
                ]}
            />

            <div className="crs-heading-three">ステップ2：文書準備</div>

            <PointsListWithoutHeading
                points={[
                    "既に概説した必要な文書を収集する",
                    "文書が適切に命名、フォーマット、署名、日付付けされていることを確認する",
                    "BISロゴ用のスペースとIS規格用のスペースを含むモックステッカーである製品ラベルを開発する",
                ]}
            />

            <div className="crs-heading-three">
                ステップ3：オンライン申請の記入
            </div>

            <PointsListWithoutHeading
                points={[
                    "BIS CRSポータル（https://www.bis.org.in/）にアクセスしてログインまたは登録する",
                    "必要に応じて、製品、モデル番号、ブランド、AIRの製造ユニットを完成させる",
                    "政府手数料の支払い手順に従う",
                ]}
            />

            <div className="crs-heading-three">
                ステップ4：BISによる申請の審査
            </div>

            <PointsListWithoutHeading
                points={[
                    "BISが補助文書とラボレポートをチェックする",
                    "必要に応じて、ポータルを通じて照会が提起される",
                    "適切な文書または論理的な説明で回答する",
                ]}
            />

            <p className="crs-paragraph">
                照会クエリの場合、30日以内に回答する必要があり、そうでなければ申請はアーカイブファイルに送られ、つまり却下されます。
            </p>

            <div className="crs-heading-three">ステップ5：BIS登録の付与</div>

            <PointsListWithoutHeading
                points={[
                    "BIS職員が実施した評価の結果に満足した場合、BIS証明書が発行される",
                ]}
            />

            <p className="crs-paragraph">証明書には以下が含まれます：</p>

            <PointsListWithoutHeading
                points={[
                    "BIS登録番号",
                    "ブランド名",
                    "製品のモデル",
                    "IS規格コード",
                ]}
            />

            <PointsListWithoutHeading
                points={[
                    "製品ラベルには証明書の詳細のe-ラベリングを含めるか持つ必要があります。",
                ]}
            />

            <div className="crs-heading-three">ステップ6：ラベリングと流通</div>

            <PointsListWithoutHeading
                points={[
                    "BIS認証製品は以下を携帯する必要があります：",
                    "BIS CRSロゴ",
                    "製品に関連するISコード",
                    "BIS登録番号",
                    "登録番号とBISロゴは、BIS規制に従って印刷またはデジタル埋め込みされる必要があります。",
                ]}
            />

            <h3 className="crs-heading-three">概算タイムライン</h3>

            {/* Timeline Table */}
            <div className="mt-[16px] md:mt-[24px] mb-[16px] md:mb-[20px] overflow-x-auto">
                <div className="rounded-md border bg-white shadow-sm min-w-full">
                    <Table>
                        <TableHeader>
                            <TableRow className="bg-[#F9F7F2] hover:bg-[#F9F7F2]/80">
                                <TableHead className="font-semibold font-geist text-sm md:text-lg text-left w-[300px] border-r border-gray-300 tracking-wide leading-loose">
                                    活動
                                </TableHead>
                                <TableHead className="font-semibold font-geist text-sm md:text-lg text-left tracking-wide leading-loose">
                                    推定時間
                                </TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            <TableRow>
                                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                                    製品テスト
                                </TableCell>
                                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                                    7-10営業日
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                                    文書収集
                                </TableCell>
                                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                                    2-3日
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                                    申請提出
                                </TableCell>
                                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                                    1日
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                                    BIS審査+照会解決
                                </TableCell>
                                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                                    10-15営業日
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                                    最終証明書発行
                                </TableCell>
                                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                                    2-4営業日
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                                    合計
                                </TableCell>
                                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full font-semibold">
                                    ~4週間
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </div>
            </div>
        </div>
    )
}

const CRSRegistrationJapaneseMainContentLeftDocumentsSection = () => {
    return (
        <div id="documents" className="flex flex-col scroll-mt-20">
            {/* Documents */}
            <div className="flex w-full items-center gap-3">
                <span className="crs-index-heading">文書</span>
                <Separator className="crs-separator" />
            </div>

            <h2 className="crs-heading-two">
                BIS CRS登録に必要な文書
            </h2>

            <div className="crs-heading-three">
                BIS CRS登録を取得するために必要な文書のリスト。
            </div>

            <p className="crs-paragraph">
                BIS CRS登録申請の記入は完全にデジタルですが、承認を得るためには完全に完成した文書が必要です。文書タイプ、不適切な形式、間違ったファイルタイプなどのあらゆる側面に従わない細かなミスや失敗は、申請が却下されたり遅延したりする原因となる可能性があります。
            </p>

            <p className="crs-paragraph">
                BIS文書の適切で迅速な処理のためには、各ステップで適切な文書を手元に持つことが必要です。適切な文書を準備しておくことで、BIS証明書が時間通りに処理され、コンプライアンス監査、税関検査、またはマーケットプレイス承認から法的にクリアな状態を保つことができます。
            </p>

            <div className="crs-heading-three">
                BIS CRS登録の文書チェックリスト
            </div>

            {/* Documents Requirements Table */}
            <div className="mt-[16px] md:mt-[24px] mb-[16px] md:mb-[20px] overflow-x-auto">
                <div className="rounded-md border bg-white shadow-sm min-w-full">
                    <Table>
                        <TableHeader>
                            <TableRow className="bg-[#F9F7F2] hover:bg-[#F9F7F2]/80">
                                <TableHead className="font-semibold font-geist text-sm md:text-lg text-left w-[250px] border-r border-gray-300 tracking-wide leading-loose">
                                    文書
                                </TableHead>
                                <TableHead className="font-semibold font-geist text-sm md:text-lg text-left w-[200px] border-r border-gray-300 tracking-wide leading-loose">
                                    提出者
                                </TableHead>
                                <TableHead className="font-semibold font-geist text-sm md:text-lg text-left tracking-wide leading-loose">
                                    備考
                                </TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            <TableRow>
                                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                                    製造業者の住所証明
                                </TableCell>
                                <TableCell className="font-geist text-sm md:text-lg text-left border-r border-gray-200 tracking-wide leading-loose max-w-full">
                                    製造業者
                                </TableCell>
                                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                                    工場賃貸契約、公共料金請求書、またはライセンス
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                                    BIS承認ラボからのテストレポート
                                </TableCell>
                                <TableCell className="font-geist text-sm md:text-lg text-left border-r border-gray-200 tracking-wide leading-loose max-w-full">
                                    製造業者/ラボ
                                </TableCell>
                                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                                    最新（90日以内）でISコードを参照している必要がある
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                                    誓約書（BIS形式による）
                                </TableCell>
                                <TableCell className="font-geist text-sm md:text-lg text-left border-r border-gray-200 tracking-wide leading-loose max-w-full">
                                    申請者
                                </TableCell>
                                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                                    責任、コンプライアンス、製品責任を含む
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                                    商標証明書
                                </TableCell>
                                <TableCell className="font-geist text-sm md:text-lg text-left border-r border-gray-200 tracking-wide leading-loose max-w-full">
                                    製造業者
                                </TableCell>
                                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                                    ブランドが登録されている場合に必要
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                                    AIR合意書（外国申請者用）
                                </TableCell>
                                <TableCell className="font-geist text-sm md:text-lg text-left border-r border-gray-200 tracking-wide leading-loose max-w-full">
                                    外国製造業者＆AIR
                                </TableCell>
                                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                                    署名および公証済み
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                                    宣誓供述書
                                </TableCell>
                                <TableCell className="font-geist text-sm md:text-lg text-left border-r border-gray-200 tracking-wide leading-loose max-w-full">
                                    製造業者またはAIR
                                </TableCell>
                                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                                    BISポータルからダウンロード可能な形式
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                                    手数料領収書
                                </TableCell>
                                <TableCell className="font-geist text-sm md:text-lg text-left border-r border-gray-200 tracking-wide leading-loose max-w-full">
                                    申請者
                                </TableCell>
                                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                                    政府手数料の支払い証明
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                                    委任状
                                </TableCell>
                                <TableCell className="font-geist text-sm md:text-lg text-left border-r border-gray-200 tracking-wide leading-loose max-w-full">
                                    製造業者
                                </TableCell>
                                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                                    AIRが彼らに代わって行動することを認可する
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                                    会社登録証明書
                                </TableCell>
                                <TableCell className="font-geist text-sm md:text-lg text-left border-r border-gray-200 tracking-wide leading-loose max-w-full">
                                    製造業者
                                </TableCell>
                                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                                    事業登録の証明（GST、ROCなど）
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                                    製品ラベル/マーキング
                                </TableCell>
                                <TableCell className="font-geist text-sm md:text-lg text-left border-r border-gray-200 tracking-wide leading-loose max-w-full">
                                    製造業者
                                </TableCell>
                                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                                    BISロゴ、IS規格、登録スペースを表示する必要がある
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </div>
            </div>
        </div>
    )
}

const CRSRegistrationJapaneseMainContentLeftEligibilitySection = () => {
    return (
        <div id="eligibility" className="flex flex-col scroll-mt-20">
            {/* Eligibility */}
            <div className="flex w-full items-center gap-3">
                <span className="crs-index-heading">資格</span>
                <Separator className="crs-separator" />
            </div>

            <h2 className="crs-heading-two">
                BIS CRS登録の資格基準
            </h2>

            <p className="crs-paragraph">
                CRSの下でBIS認証を申請できるのは誰ですか？
            </p>

            <p className="crs-paragraph">
                インドでは、強制登録スキーム（CRS）の下でのBIS証明書は、インド標準局が定めた要件を満たす製造業者のみに付与されます。これにより、真正な製造業者のみが登録し、製品にBIS CRSロゴを貼付する特権を得ることが保証されます。
            </p>

            <div className="crs-heading-three">資格基準チェックリスト</div>

            {/* Eligibility Requirements Table */}
            <div className="mt-[16px] md:mt-[24px] mb-[16px] md:mb-[20px] overflow-x-auto">
                <div className="rounded-md border bg-white shadow-sm min-w-full">
                    <Table>
                        <TableHeader>
                            <TableRow className="bg-[#F9F7F2] hover:bg-[#F9F7F2]/80">
                                <TableHead className="font-semibold font-geist text-sm md:text-lg text-left w-[250px] border-r border-gray-300 tracking-wide leading-loose">
                                    要件
                                </TableHead>
                                <TableHead className="font-semibold font-geist text-sm md:text-lg text-left tracking-wide leading-loose">
                                    説明
                                </TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            <TableRow>
                                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                                    申請者は製造業者でなければならない
                                </TableCell>
                                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                                    製品の元の製造業者（トレーダーや再販業者ではない）のみが申請資格があります。
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                                    所在地はインドまたは外国でも可
                                </TableCell>
                                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                                    インドの製造業者と国際ブランドの両方が申請できます。
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                                    AIR（認可インド代表者）
                                </TableCell>
                                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                                    外国の製造業者は、インド支社または正式に認可された第三者であるAIRを任命する必要があります。
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                                    BIS承認ラボからのテストレポート
                                </TableCell>
                                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                                    製品はBIS認定ラボでテストされ、適用されるインド規格（IS）を満たす必要があります。
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                                    適切な文書
                                </TableCell>
                                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                                    すべての必要な文書は所定の形式で提出する必要があります（詳細は次のセクション）。
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                                    ブランド・所在地ごとに1つの登録
                                </TableCell>
                                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                                    製品タイプ、製造場所、ブランド名ごとに別々の申請を提出する必要があります。
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </div>
            </div>

            <h2 className="crs-heading-three">
                認可インド代表者（AIR）とは誰ですか？
            </h2>

            <p className="crs-paragraph">
                外国の製造業者にとって、インドでのコミュニケーションと代表のための認可インド代表者（AIR）を任命することは義務の一つです。
            </p>

            <div className="crs-heading-three">AIRの責任：</div>

            <PointsListWithoutHeading
                points={[
                    "外国申請者の法的代表者として行動する",
                    "製造業者に代わってBISとのすべての義務をコミュニケーションし管理する",
                    "すべてのコンプライアンスと文書について法的責任を負う",
                    "製造業者によって明確に認可されていない限り、エージェントやディストリビューターになることはできない",
                ]}
            />

            <p className="crs-paragraph">
                合意の一部として、AIRは両当事者からの署名入り合意書とインド住所の証明を提出する必要があります。
            </p>

            <div className="crs-heading-three">実際のシナリオ：</div>

            <p className="crs-paragraph">
                会社ABCはインドで新しいモデルのパワーバンクを導入する計画です。
            </p>

            <PointsListWithoutHeading
                points={[
                    "会社ABCが製造業者です。",
                    "インドのBIS認定ラボの一つで製品をテストしています。",
                    "デリーの支社が登録されたAIRとして機能しています。",
                    "必要な文書とともにBISポータルに申請をアップロードしています。",
                ]}
            />

            <p className="crs-paragraph">
                結果として、CRSの下でBIS証明書が発行されます。
            </p>
        </div>
    )
}

const CRSRegistrationJapaneseMainContentLeftOverviewSection = () => {
    return (
        <div id="overview" className="flex flex-col scroll-mt-20">
            {/* Overview */}
            <div className="flex w-full items-center gap-3">
                <span className="crs-index-heading">概要</span>
                <Separator className="crs-separator" />
            </div>

            <h2 className="crs-heading-two">
                強制登録スキーム（CRS）とは何ですか？
            </h2>

            <p className="crs-paragraph">
                強制登録スキーム（CRS）は、2012年に開始されたBIS製品登録スキームで、主に電子製品に焦点を当てていました。年月が経つにつれて、より多くの製品がリリースされるにつれて、CRSは家電製品、太陽光設備、バッテリーなどを含むより幅広い製品カテゴリーを含むように拡張されました。CRS登録は、各省庁が発行する品質管理令（QCO）で指定された製品に必須です。
            </p>

            <p className="crs-paragraph">
                強制CRSスキームに該当する製品は、BISへの登録を取得した後にのみ、インドで販売、輸入、または流通させることができます。
            </p>

            <h3 className="crs-heading-three">
                インドにおけるCRS認証の歴史
            </h3>

            <p className="crs-paragraph">
                2012年、CRSスキームの下で最初のQCOがリリースされ、電子機器およびIT機器に焦点を当てました。それ以来、以下のセクターで追加のQCOが発行されています：
            </p>

            <PointsListWithoutHeading
                points={[
                    "家電製品",
                    "照明・LED",
                    "バッテリー・セル",
                    "無線通信機器",
                    "太陽光パネルおよびコンポーネント",
                    "家庭用電気機器",
                ]}
            />

            <p className="crs-paragraph">
                CRS認証のリストは急速に拡大しているため、製造業者が積極的で最新の更新情報を把握することが非常に重要です。
            </p>

            <h2 className="crs-heading-three">
                CRS登録 vs ISIマーク：違いは何ですか？
            </h2>

            {/* Table */}
            <div className="mt-[16px] md:mt-[24px] mb-[16px] md:mb-[20px] overflow-x-auto">
                <div className="rounded-md border bg-white shadow-sm min-w-full">
                    <Table>
                        <TableHeader>
                            <TableRow className="bg-[#F9F7F2] hover:bg-[#F9F7F2]/80">
                                <TableHead className="font-semibold font-geist text-sm md:text-lg text-left w-[200px] border-r border-gray-300 tracking-wide leading-loose">
                                    特徴
                                </TableHead>
                                <TableHead className="font-semibold font-geist text-sm md:text-lg text-left w-[300px] border-r border-gray-300 tracking-wide leading-loose">
                                    CRS登録
                                </TableHead>
                                <TableHead className="font-semibold font-geist text-sm md:text-lg text-left w-[300px] tracking-wide leading-loose">
                                    ISIマーク
                                </TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            <TableRow>
                                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                                    性質
                                </TableCell>
                                <TableCell className="font-geist text-sm md:text-lg text-left border-r border-gray-200 tracking-wide leading-loose max-w-full">
                                    強制（QCOリスト製品のみ）
                                </TableCell>
                                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                                    任意または強制（製品による）
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                                    製品範囲
                                </TableCell>
                                <TableCell className="font-geist text-sm md:text-lg text-left border-r border-gray-200 tracking-wide leading-loose max-w-full">
                                    電子機器、IT、電気、バッテリーなど
                                </TableCell>
                                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                                    食品、セメント、鋼材、電気機器など
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                                    申請方法
                                </TableCell>
                                <TableCell className="font-geist text-sm md:text-lg text-left border-r border-gray-200 tracking-wide leading-loose max-w-full">
                                    オンライン、BIS CRSポータル
                                </TableCell>
                                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                                    手動+オンライン、BIS ISIシステム
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                                    柔軟性
                                </TableCell>
                                <TableCell className="font-geist text-sm md:text-lg text-left border-r border-gray-200 tracking-wide leading-loose max-w-full">
                                    QCO対象商品のみ
                                </TableCell>
                                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                                    非QCO商品は任意にできる
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                                    ラベリング
                                </TableCell>
                                <TableCell className="font-geist text-sm md:text-lg text-left border-r border-gray-200 tracking-wide leading-loose max-w-full">
                                    BIS CRSロゴと登録番号が必要
                                </TableCell>
                                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                                    標準コード付きISIロゴが必要
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </div>
            </div>

            <h3 className="crs-heading-three">
                BIS CRSフレームワークを知る必要がある理由
            </h3>

            <p className="crs-paragraph">
                インドの生産者、またはインド市場に参入しようとしている外国企業の場合、BIS CRSのステップを知ることは必須です。これにより以下が可能になります：
            </p>

            <PointsListWithoutHeading
                points={[
                    "非準拠による罰金を回避する。",
                    "生産スケジュールを準備する（ラボテスト時間を考慮）。",
                    "通関処理を容易にする。",
                    "インドの顧客の長期的なブランド信頼を獲得する。",
                ]}
            />
        </div>
    )
}

const CRSRegistrationJapaneseIndex = () => {
    const [isSticky, setIsSticky] = useState(false);
    const [activeSection, setActiveSection] = useState("overview");
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const stickyRef = useRef(null);
    const mobileMenuRef = useRef(null);
    const toggleButtonRef = useRef(null);

    const SECTIONS = useMemo(
        () => [
            "overview",
            "eligibility",
            "documents",
            "registration",
            "fees",
            "elabelling",
        ],
        []
    );

    const MENU_ITEMS = {
        overview: "概要",
        eligibility: "対象製品",
        documents: "必要書類",
        registration: "登録手続き",
        fees: "登録料金",
        elabelling: "E-ラベリング",
    };

    const handleItemClick = (item) => {
        const element = document.getElementById(
            item.toLowerCase().replace(/\s+/g, "-")
        );
        if (element) {
            element.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
            setActiveSection(item);
            setIsMobileMenuOpen(false);
        }
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen((prevState) => !prevState);
    };

    // Close mobile menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                mobileMenuRef.current &&
                !mobileMenuRef.current.contains(event.target) &&
                toggleButtonRef.current &&
                !toggleButtonRef.current.contains(event.target)
            ) {
                setIsMobileMenuOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            if (stickyRef.current) {
                const rect = stickyRef.current.getBoundingClientRect();
                setIsSticky(rect.top <= 44);
            }
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll(); // Initial check

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        const handleScrollSpy = () => {
            const scrollPosition = window.scrollY + 200; // Offset for header

            for (let i = SECTIONS.length - 1; i >= 0; i--) {
                const section = SECTIONS[i];
                const element = document.getElementById(section);

                if (element) {
                    const offsetTop = element.offsetTop;

                    if (scrollPosition >= offsetTop) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener("scroll", handleScrollSpy);
        handleScrollSpy(); // Initial check

        return () => window.removeEventListener("scroll", handleScrollSpy);
    }, [SECTIONS]);

    return (
        <div
            ref={stickyRef}
            className={`sticky top-0 md:top-[44px] z-[50] transition-colors duration-300 w-full h-auto md:h-20 ${isSticky ? "bg-white/70 backdrop-blur-lg" : "bg-[#B9DEEB]"
                }`}
        >
            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center justify-between px-4 h-20">
                <div className="text-base font-semibold font-geist tracking-wider uppercase text-blue-900">
                    {MENU_ITEMS[activeSection]}
                </div>
                <button
                    ref={toggleButtonRef}
                    onClick={toggleMobileMenu}
                    className="p-2 rounded-md hover:bg-blue-100 transition-colors"
                    aria-label="Toggle menu"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-blue-900"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        {isMobileMenuOpen ? (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 15l7-7 7 7"
                            />
                        ) : (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 9l-7 7-7-7"
                            />
                        )}
                    </svg>
                </button>
            </div>

            {/* Mobile Menu Dropdown */}
            {isMobileMenuOpen && (
                <div
                    ref={mobileMenuRef}
                    className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg z-50 border-t border-gray-200"
                >
                    <div className="flex flex-col py-2">
                        {SECTIONS.map((item) => (
                            <div
                                key={item}
                                onClick={() => handleItemClick(item)}
                                className={`px-4 py-3 cursor-pointer transition-colors ${item === activeSection
                                    ? "bg-blue-50 text-blue-900 font-semibold"
                                    : "text-blue-950 hover:bg-blue-50"
                                    }`}
                            >
                                <div className="font-geist tracking-wider uppercase">
                                    {MENU_ITEMS[item]}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center justify-between px-12 h-full max-w-[88rem] mx-auto">
                {SECTIONS.map((item) => (
                    <div
                        key={item}
                        onClick={() => handleItemClick(item)}
                        className="relative cursor-pointer group whitespace-nowrap px-2"
                    >
                        <div
                            className={`text-base font-semibold font-geist tracking-wider uppercase transition-colors duration-300 ${item === activeSection
                                ? "text-blue-900"
                                : "text-blue-950 group-hover:text-blue-900"
                                }`}
                        >
                            {MENU_ITEMS[item]}
                        </div>
                        <div
                            className={`absolute bottom-0 left-0 w-full h-0.5 bg-blue-900 transition-transform duration-300 ${item === activeSection
                                ? "scale-x-100"
                                : "scale-x-0 group-hover:scale-x-100"
                                }`}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};


const CRSRegistrationJapaneseBreadcrumb = () => {
    return (
        <div className="absolute md:top-5 top-3 left-0 w-full z-30">
            <div className="max-w-[80rem] mx-auto px-4">
                <div className="w-fit font-inter">
                    <Breadcrumb>
                        <BreadcrumbList>
                            <BreadcrumbItem>
                                <BreadcrumbLink asChild>
                                    <Link to="/">ホーム</Link>
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator>
                                <SlashIcon />
                            </BreadcrumbSeparator>
                            <BreadcrumbItem>
                                <BreadcrumbPage>BIS CRS登録</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>
            </div>
        </div>
    );
};


const CRSRegistrationJapaneseMetaTags = () => {
    const breadcrumbStructuredData = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "ホーム",
                "item": window.location.origin + "/"
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": "BIS CRS登録",
                "item": window.location.href
            }
        ]
    };

    return (
        <Helmet>
            {/* Basic Meta Tags */}
            <title>BIS登録 - 強制登録制度（CRS）</title>
            <meta name="description" content="BIS登録とは、CRS制度の下で適用されるインド規格に準拠した電子・IT製品について、BISからライセンスを取得することです。" />
            <meta name="keywords" content="BIS証明書, BIS登録プロセス, BIS登録, BISオンライン登録プロセス, 電子製品のBIS認証, インドのBIS登録プロセス, 電子製品のBIS登録, 強制登録制度" />
            <meta name="author" content="Dhruv Aggarwal" />
            <meta name="publisher" content="Sun Certifications India" />
            <meta name="robots" content="index, follow" />

            {/* Canonical URL */}
            <link rel="canonical" href={window.location.href} />

            {/* Open Graph Meta Tags */}
            <meta property="og:title" content="BIS登録 - 強制登録制度（CRS）" />
            <meta property="og:description" content="BIS登録とは、CRS制度の下で適用されるインド規格に準拠した電子・IT製品について、BISからライセンスを取得することです。" />
            <meta property="og:type" content="website" />
            <meta property="og:url" content={window.location.href} />

            {/* Twitter Meta Tags */}
            <meta name="twitter:title" content="BIS登録 - 強制登録制度（CRS）" />
            <meta name="twitter:description" content="BIS登録とは、CRS制度の下で適用されるインド規格に準拠した電子・IT製品について、BISからライセンスを取得することです。" />
            <meta name="twitter:card" content="summary_large_image" />

            {/* Breadcrumb Structured Data */}
            <script type="application/ld+json">
                {JSON.stringify(breadcrumbStructuredData)}
            </script>
        </Helmet>
    )
}


const CRSRegistrationJapaneseHero = () => {
    return (
        <main className="relative pt-[60px] md:pt-[104px] pb-[30px] md:pb-[106px] overflow-x-hidden bg-[#F9F7F2]">
            {/* Background gradient */}
            <div className="hidden md:block absolute inset-0 rounded-bl-full z-10 transform translate-x-1/2 custom-radial-gradient-cdsco"></div>

            {/* Decorative elements */}
            <div
                className="absolute top-[20%] z-[10] right-[15%] w-[20px] h-[20px] rounded-full bg-[#1A8781]/30 animate-float"
                style={{ animationDelay: "1s" }}
            ></div>

            <div className="max-w-[84rem] gap-[40px] md:gap-[90px] flex flex-col md:flex-row items-center justify-center h-full w-full mx-auto px-4 md:px-0">
                {/* Left Side */}
                <div className="relative flex flex-col gap-6 md:gap-8 w-full md:w-[533px] items-start">
                    <div className="inline-flex items-center">
                        <div className="h-[3px] w-[40px] bg-[#1A8781] mr-4"></div>
                        <span className="text-[#1A8781] font-poppins text-sm font-medium tracking-wider uppercase">
                            認定された専門知識
                        </span>
                    </div>

                    <h1 className="leading-[1.2] md:leading-[70px] z-[10] font-playfair font-bold text-[40px] md:text-[52px] text-[#1E1E1E] -mt-2">
                        <span className="relative">
                            BIS CRS登録
                            <span className="absolute -bottom-2 left-0 w-[120px] h-[8px] bg-[#1A8781]/10 rounded-full"></span>
                        </span>
                    </h1>

                    <p className="font-poppins text-[18px] md:text-[20px] z-[10] leading-[1.6] md:leading-[40px] text-[#332156] max-w-[490px] -mt-2">
                        電子製品の安全性と品質を確保するために必須です。専門家の支援でBIS承認を取得しましょう！
                    </p>

                    <div className="flex items-center -mt-2">
                        <div
                            className="flex items-center cursor-pointer group"
                            onClick={() => {
                                const servicesSection = document.getElementById("services");
                                if (servicesSection) {
                                    servicesSection.scrollIntoView({
                                        behavior: "smooth",
                                        block: "start",
                                    });
                                }
                            }}
                        >
                            <div className="w-12 h-12 flex items-center justify-center rounded-full border-2 border-[#125E5A]/30 group-hover:border-[#125E5A] transition-all duration-300 mr-3">
                                <div className="w-3 h-3 border-t-2 border-r-2 border-[#125E5A] rotate-45 translate-x-[-1px]"></div>
                            </div>
                            <span className="font-geist text-[#125E5A] text-[18px] font-medium group-hover:translate-x-1 transition-all duration-300">
                                サービスを見る
                            </span>
                        </div>
                    </div>
                </div>

                {/* Right Side */}
                <CRSRegistrationHeroContactFormJapanese />
            </div>
        </main>
    )
}

const CRSRegistrationHeroContactFormJapanese = () => {
    const [loading, setLoading] = useState(false);

    // Function to get page name based on URL
    const getPageName = () => {
        const path = window.location.pathname;

        // Service pages
        if (path.includes("/ja/crs-bis-toha-nani-ka-crs-toroku"))
            return "CRS Registration Japanese";
    };

    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phoneNumber: "",
        companyName: "",
        productName: "",
        message: "",
        pageUrl: window.location.href,
        pageName: getPageName(),
    });

    const { fullName, email, phoneNumber, companyName, productName, message } =
        formData;

    const handleOnChange = (e) => {
        setFormData((prevData) => ({
            ...prevData,
            [e.target.name]: e.target.value,
        }));
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        // console.log("Form Data:", formData);

        // Full name validation
        const nameRegex = /^[a-zA-Z\s.'-]{2,50}$/;
        if (!nameRegex.test(fullName)) {
            toast({
                variant: "destructive",
                title: "有効な氏名を入力してください。",
                description: "氏名には文字とスペースのみ使用できます。",
            });
            setLoading(false);
            return;
        }

        // Email validation - allow any domain
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        if (!emailRegex.test(email)) {
            toast({
                variant: "destructive",
                title: "有効なメールアドレスを入力してください。",
                description: "メール形式が正しいかご確認ください",
            });
            setLoading(false);
            return;
        }

        // Phone number validation
        const phoneRegex = /^\+?[0-9\s-]{8,15}$/;
        if (!phoneRegex.test(phoneNumber)) {
            toast({
                variant: "destructive",
                title: "有効な電話番号を入力してください",
                description: "電話番号は8〜15桁である必要があります",
            });
            setLoading(false);
            return;
        }

        //  console.log(BASE_URL);
        try {
            const response = await axios.post(
                `${BASE_URL}/appointment/submit-appointment`,
                formData
            );

            if (!response.data.success) {
                throw new Error(response.data.message);
            }
            toast({
                title: "お問い合わせフォームが正常に送信されました！",
                description:
                    "お問い合わせありがとうございます。担当者より間もなくご連絡いたします。",
            });

            setFormData({
                fullName: "",
                email: "",
                phoneNumber: "",
                companyName: "",
                productName: "",
                message: "",
                pageUrl: window.location.href,
                pageName: getPageName(),
            });
        } catch (error) {
            const errorMessage =
                error.response?.data?.message || "問題が発生しました";
            toast({
                variant: "destructive",
                title: errorMessage || "お問い合わせフォームの送信に失敗しました！",
                description:
                    "問題が発生しました。入力内容をご確認の上、再度お試しください。",
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="z-20 w-full md:w-[580px] h-auto md:h-[435px] flex flex-col">
            <div className="flex w-full items-center gap-3">
                <span className="uppercase font-poppins font-semibold text-[18px] md:text-[20px] text-[#008080]">
                    お問い合わせ
                </span>
                <Separator className="w-[94.46px] h-[2px] bg-[#008080]" />
            </div>

            <h3 className="text-[30px] md:text-[48px] font-inter font-bold text-[#1E1E1E]">
                予約する
            </h3>

            <p className="font-medium font-poppins text-[18px] md:text-[20px] text-[#996C6C]">
                チームにご連絡いただき、通話のスケジュールを組みませんか？
                <span className="text-black"> 今すぐ試す</span>
            </p>

            <form onSubmit={handleFormSubmit} className="flex flex-col mt-5 gap-5">
                <div className="flex flex-col md:flex-row items-center justify-between gap-5">
                    <Input
                        disabled={loading}
                        required
                        type="text"
                        name="fullName"
                        value={fullName}
                        onChange={handleOnChange}
                        placeholder="氏名 *"
                        className="disabled:opacity-100 w-full focus-visible:ring-1 focus-visible:ring-[#BDBDBD] focus-visible:ring-offset-0 bg-[#F9F9F9] border-2 border-[#BDBDBD] rounded-[12px] h-[54px] md:h-[58px] text-[#7E7E7E]/90 font-poppins font-semibold text-[15px] md:text-[16px] leading-[24px] tracking-wide px-5 placeholder:text-[#7E7E7E]/90 placeholder:font-poppins placeholder:font-semibold placeholder:leading-[24px] placeholder:tracking-wide"
                    />

                    <Input
                        disabled={loading}
                        required
                        type="email"
                        name="email"
                        value={email}
                        onChange={handleOnChange}
                        placeholder="メールアドレス *"
                        className="disabled:opacity-100 w-full focus-visible:ring-1 focus-visible:ring-[#BDBDBD] focus-visible:ring-offset-0 bg-[#F9F9F9] border-2 border-[#BDBDBD] rounded-[12px] h-[54px] md:h-[58px] text-[#7E7E7E]/90 font-poppins font-semibold text-[15px] md:text-[16px] leading-[24px] tracking-wide px-5 placeholder:text-[#7E7E7E]/90 placeholder:font-poppins placeholder:font-semibold placeholder:leading-[24px] placeholder:tracking-wide"
                    />
                </div>

                <div className="flex flex-col md:flex-row items-center justify-between gap-5">
                    <Input
                        disabled={loading}
                        required
                        type="tel"
                        name="phoneNumber"
                        value={phoneNumber}
                        onChange={handleOnChange}
                        placeholder="連絡先番号 *"
                        className="disabled:opacity-100 w-full focus-visible:ring-1 focus-visible:ring-[#BDBDBD] focus-visible:ring-offset-0 bg-[#F9F9F9] border-2 border-[#BDBDBD] rounded-[12px] h-[54px] md:h-[58px] text-[#7E7E7E]/90 font-poppins font-semibold text-[15px] md:text-[16px] leading-[24px] tracking-wide px-5 placeholder:text-[#7E7E7E]/90 placeholder:font-poppins placeholder:font-semibold placeholder:leading-[24px] placeholder:tracking-wide"
                    />

                    <Input
                        disabled={loading}
                        required
                        type="text"
                        name="companyName"
                        value={companyName}
                        onChange={handleOnChange}
                        placeholder="会社名 *"
                        className="disabled:opacity-100 w-full focus-visible:ring-1 focus-visible:ring-[#BDBDBD] focus-visible:ring-offset-0 bg-[#F9F9F9] border-2 border-[#BDBDBD] rounded-[12px] h-[54px] md:h-[58px] text-[#7E7E7E]/90 font-poppins font-semibold text-[15px] md:text-[16px] leading-[24px] tracking-wide px-5 placeholder:text-[#7E7E7E]/90 placeholder:font-poppins placeholder:font-semibold placeholder:leading-[24px] placeholder:tracking-wide"
                    />
                </div>

                <div className="flex flex-col md:flex-row items-center justify-between gap-5">
                    <Input
                        disabled={loading}
                        required
                        type="text"
                        name="productName"
                        value={productName}
                        onChange={handleOnChange}
                        placeholder="製品名 *"
                        className="disabled:opacity-100 w-full focus-visible:ring-1 focus-visible:ring-[#BDBDBD] focus-visible:ring-offset-0 bg-[#F9F9F9] border-2 border-[#BDBDBD] rounded-[12px] h-[54px] md:h-[58px] text-[#7E7E7E]/90 font-poppins font-semibold text-[15px] md:text-[16px] leading-[24px] tracking-wide px-5 placeholder:text-[#7E7E7E]/90 placeholder:font-poppins placeholder:font-semibold placeholder:leading-[24px] placeholder:tracking-wide"
                    />

                    <Input
                        disabled={loading}
                        required
                        type="text"
                        name="message"
                        value={message}
                        onChange={handleOnChange}
                        placeholder="必要な認証*"
                        className="disabled:opacity-100 w-full focus-visible:ring-1 focus-visible:ring-[#BDBDBD] focus-visible:ring-offset-0 bg-[#F9F9F9] border-2 border-[#BDBDBD] rounded-[12px] h-[54px] md:h-[58px] text-[#7E7E7E]/90 font-poppins font-semibold text-[15px] md:text-[16px] leading-[24px] tracking-wide px-5 placeholder:text-[#7E7E7E]/90 placeholder:font-poppins placeholder:font-semibold placeholder:leading-[24px] placeholder:tracking-wide"
                    />
                </div>

                <Button
                    disabled={loading}
                    type="submit"
                    className="disabled:opacity-100 mt-1 w-[218px] h-[50px] md:h-[60px] bg-[#1A8781] hover:bg-[#1A8781]/90 rounded-[5px] text-[15px] md:text-[15px] font-poppins tracking-wide leading-[28px] shadow-elegant transition-all duration-300 hover:translate-y-[-2px]"
                >
                    {loading ? (
                        <div className="flex gap-3 items-center justify-center">
                            <ClockLoader size={22} color="#fff" />
                            <span>送信中</span>
                        </div>
                    ) : (
                        <div className="flex gap-3 items-center justify-center">
                            <span>予約する</span>
                        </div>
                    )}
                </Button>
            </form>
        </div>
    );
};


const PointsListWithoutHeading = ({ points }) => {
    return (
        <div className="mt-[18px] md:mt-[18px]">
            <ul className="flex flex-col gap-3 list-none">
                {points.map((point, index) => (
                    <li key={index} className="flex items-start gap-3">
                        <div className="bg-green-500/10 p-1.5 rounded-full flex-shrink-0 flex items-center justify-center min-w-[24px] min-h-[24px] mt-0.5">
                            <Check size={12} className="text-[#020817]" />
                        </div>
                        <p className="font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose flex-1">
                            {point}
                        </p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

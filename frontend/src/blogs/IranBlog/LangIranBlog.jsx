import { Helmet } from "react-helmet-async";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom";
import { SlashIcon } from "lucide-react";
import ServicesRightSideContentArabic from "@/components/manual/ServicesRightSideContent/ServicesRightSideContentArabic";
import ServiceAuthorArabic from "@/components/manual/ServiceAuthor/ServiceAuthorArabic";
import { ServicesArabic } from "@/schemeXProducts/PumpsAndLiquidElevators/PumpsAndLiquidElevatorsArabic";
import VideoSection from "@/components/manual/home-page-sections/VideoSection";
import FooterArabic from "@/components/manual/Footer/FooterArabic";

const LangIranBlog = () => {
  return (
    <div className="relative w-full" dir="rtl">
      <LangIranBlogMetaData />
      <LangIranBlogBreadcrumb />
      <LangIranBlogMainContent />
      <ServicesArabic />
      <VideoSection />
      <FooterArabic />
    </div>
  );
};

export default LangIranBlog;

const LangIranBlogMetaData = () => {
  const title = "شهادة BIS في إيران | Sun Certifications India";
  const description =
    "شهادة BIS في إيران هي رمز للثقة والجودة والموثوقية. إنها متطلب قانوني يمنح الوصول إلى أسواق المستهلكين والصناعة الواسعة في الهند.";
  const keywords =
    "شهادة BIS في إيران, شهادة BIS في إيران, ترخيص BIS في إيران, علامة BIS, BIS FMCS في إيران, شهادة BIS FMCS في إيران, شهادة BIS للمصدرين في إيران";
  const canonicalUrl = window.location.href;
  const author = "Sun Certifications India";
  const publisher = "Dhruv Aggarwal، رئيس العمليات في Sun Certifications India";

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="publisher" content={publisher} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
    </Helmet>
  );
};

const LangIranBlogBreadcrumb = () => {
  return (
    <div className="absolute md:top-5 top-3 left-0 w-full z-30">
      <div className="max-w-[80rem] mx-auto px-4">
        <div className="w-full overflow-x-auto scrollbar-hide font-inter">
          <div className="w-fit min-w-full">
            <Breadcrumb>
              <BreadcrumbList className="flex-nowrap">
                <BreadcrumbItem className="flex-shrink-0">
                  <BreadcrumbLink asChild>
                    <Link to="/">الرئيسية</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="flex-shrink-0">
                  <SlashIcon />
                </BreadcrumbSeparator>

                <BreadcrumbItem className="flex-shrink-0">
                  <BreadcrumbLink asChild>
                    <Link to="/Blogs">أحدث المدونات</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="flex-shrink-0">
                  <SlashIcon />
                </BreadcrumbSeparator>

                <BreadcrumbItem className="flex-shrink-0">
                  <BreadcrumbPage className="whitespace-nowrap">
                    شهادة BIS في إيران
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </div>
      </div>
    </div>
  );
};

const LangIranBlogMainContent = () => {
  return (
    <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12 pt-[60px] md:pt-[75px]">
      <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] w-full">
        {/* Left Side Content */}
        <LangIranBlogMainContentLeft />

        {/* Right Side Content */}
        <ServicesRightSideContentArabic />
      </div>
    </div>
  );
};

const LangIranBlogMainContentLeft = () => {
  return (
    <div className="flex-1 overflow-y-auto pt-2 px-2  -mt-2 -mx-2 ">
      {/* Blog Content */}
      <div className="p-6 mb-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
        <h1 className="text-xl md:text-2xl font-playfair font-bold text-[#1e1e1e] mb-4">
          شهادة BIS في إيران
        </h1>

        <p className="text-gray-600 text-base font-geist mb-4">
          تشترك الهند وإيران في علاقة تجارية طويلة وديناميكية متجذرة في الاحترام
          المتبادل والتعاون الاقتصادي والتواصل الإقليمي. على مر السنين، برزت
          إيران كشريك تجاري مهم للهند، حيث تصدر مجموعة متنوعة من السلع مثل
          المواد الكيميائية والمعادن والبتروكيماويات والمعادن والمنتجات
          الصناعية. مع استمرار توسع السوق الهندية، يسعى المصنعون الإيرانيون بشكل
          متزايد إلى تعزيز قبول منتجاتهم والامتثال للوائح الهندية. أحد المتطلبات
          الحاسمة للمصدرين إلى الهند هو شهادة BIS، الصادرة عن مكتب المعايير
          الهندية (BIS).
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          تضمن شهادة BIS أن المنتجات تتوافق مع معايير السلامة والجودة والأداء في
          الهند. بالنسبة للمصنعين الإيرانيين، فإن الحصول على شهادة BIS بموجب
          نظام شهادة المصنعين الأجانب (FMCS) إلزامي لفئات معينة من المنتجات قبل
          أن يمكن تصديرها وبيعها بشكل قانوني في الهند. لا تعمل هذه الشهادة
          كعلامة على الامتثال فحسب، بل تعزز أيضًا مصداقية المنتج وقابليته
          للتسويق.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          في هذا الدليل التفصيلي، سنستكشف أهمية شهادة BIS في إيران، وعملية
          الشهادة، والوثائق، والتحديات، وكيف تساعد Sun Certifications India
          الشركات الإيرانية على تحقيق امتثال BIS بسلاسة.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          فهم شهادة BIS ونظام FMCS
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          يعمل مكتب المعايير الهندية (BIS) كهيئة المعايير الوطنية في الهند تحت
          إشراف وزارة شؤون المستهلك والغذاء والتوزيع العام. يلعب دورًا حاسمًا في
          صياغة معايير الجودة والسلامة لمختلف المنتجات لحماية المستهلكين والحفاظ
          على التوحيد في السوق الهندية.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          تم إنشاء نظام شهادة BIS لضمان أن كلا من البضائع المحلية والمستوردة
          تلبي المعايير الهندية (IS). بالنسبة للمصنعين الأجانب، بما في ذلك أولئك
          الموجودون في إيران، قدم BIS نظام شهادة المصنعين الأجانب (FMCS) في عام
          2000. يسمح هذا النظام للشركات الأجنبية بالحصول على شهادة BIS
          لمنتجاتها، شريطة أن تفي بجميع متطلبات المعايير الهندية ذات الصلة.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          بمجرد الموافقة، يحصل المصنع على الترخيص لاستخدام علامة ISI، وهي رمز
          يدل على الامتثال لمعايير الجودة والسلامة الهندية. علامة ISI، التي تعني
          "معهد المعايير الهندية"، معترف بها على نطاق واسع كضمان للجودة والثقة
          في الهند.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          يضمن FMCS أن المنتجات المستوردة تخضع لنفس المعايير الصارمة مثل تلك
          المصنوعة في الهند، وبالتالي تعزيز التجارة العادلة وحماية المستهلكين من
          السلع دون المستوى المطلوب.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          لماذا تعتبر شهادة BIS ضرورية لمصدري إيران
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          بالنسبة للمصدرين الإيرانيين، شهادة BIS أكثر من مجرد إجراء شكلي؛ إنها
          بوابة إلى واحدة من أسرع أسواق المستهلكين نموًا في العالم. جعلت حكومة
          الهند شهادة BIS إلزامية لمجموعة واسعة من المنتجات بموجب مختلف أوامر
          مراقبة الجودة (QCOs). وتشمل هذه الأجهزة الإلكترونية والأسمنت والصلب
          والمواد الكيميائية والسلع المنزلية وقطع غيار السيارات.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          بدون شهادة BIS، لا يمكن استيراد أو توزيع أو بيع هذه المنتجات في الهند.
          تصدير المنتجات غير المعتمدة يمكن أن يؤدي إلى رفض جمركي ومضاعفات
          قانونية وأضرار بالسمعة.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          ومع ذلك، توفر شهادة BIS العديد من المزايا الكبيرة للمصنعين الإيرانيين:
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          أولاً، تضمن وصولاً سلسًا إلى السوق. المنتجات المعتمدة التي تحمل علامة
          ISI يمكن أن تمر عبر الجمارك الهندية دون تأخير ويتم قبولها من قبل
          الموزعين وتجار التجزئة والمستهلكين الهنود.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          ثانيًا، تبني شهادة BIS سمعة العلامة التجارية وثقة المستهلك. يفضل
          المشترون الهنود المنتجات المعتمدة من BIS لأنها تمثل الجودة والسلامة
          والأداء. بالنسبة للمصدرين الإيرانيين، وجود علامة ISI على منتجاتهم يشير
          إلى الموثوقية والامتثال للوائح الهندية.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          ثالثًا، تقلل شهادة BIS من مخاطر التجارة. من خلال الالتزام بالمعايير
          الهندية، يتجنب المصدرون إمكانية استدعاء المنتجات أو العقوبات أو رفض
          الشحنات.
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          أخيرًا، توفر ميزة تنافسية. مع تشديد السلطات الهندية للوائح الجودة،
          المنتجات المعتمدة من BIS تبرز في سوق مزدحم، مما يمنح الشركات الإيرانية
          ميزة واضحة على المنافسين غير المعتمدين.
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          باختصار، تعمل شهادة BIS كمتطلب للامتثال وميزة تجارية استراتيجية
          للمصدرين الإيرانيين الذين يهدفون إلى تعزيز موطئ قدمهم في الهند.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          الصناعات في إيران التي تتطلب شهادة BIS
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          لدى إيران قاعدة صناعية راسخة تمتد عبر قطاعات مختلفة، والكثير منها ينتج
          سلعًا تقع ضمن قائمة شهادة BIS الإلزامية في الهند. الصناعات الرئيسية
          التي تتطلب عادةً شهادة BIS للتصدير إلى الهند تشمل:
        </p>

        {/* Bullet Points */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-3 mb-6">
          <li>
            <span className="font-medium text-[#1e1e1e]">
              الكهرباء والإلكترونيات:
            </span>{" "}
            عناصر مثل الكابلات والمفاتيح وقواطع الدوائر والمحولات يجب أن تمتثل
            لمعايير السلامة الكهربائية الهندية.
          </li>
          <li>
            <span className="font-medium text-[#1e1e1e]">
              مواد البناء والتشييد:
            </span>{" "}
            الأسمنت وقضبان الصلب والتركيبات الصحية ومواد البناء ذات الصلة تتطلب
            شهادة BIS للبيع في الهند.
          </li>
          <li>
            <span className="font-medium text-[#1e1e1e]">
              الصناعات الكيميائية والبتروكيماوية:
            </span>{" "}
            الدهانات والمذيبات واللاصقات والمواد الكيميائية الصناعية منظمة بموجب
            معايير هندية محددة.
          </li>
          <li>
            <span className="font-medium text-[#1e1e1e]">
              المعدات الميكانيكية والصناعية:
            </span>{" "}
            الآلات والمحركات والمضخات وأواني الضغط من بين العناصر الميكانيكية
            التي غالبًا ما تتطلب شهادة.
          </li>
          <li>
            <span className="font-medium text-[#1e1e1e]">
              السلع الاستهلاكية:
            </span>{" "}
            الأجهزة المنزلية ومعدات الإضاءة والمنتجات الاستهلاكية الأخرى تقع
            أيضًا ضمن الفئات المنظمة من قبل BIS.
          </li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-6">
          بالنظر إلى القائمة المتوسعة من السلع المنظمة، من الحيوي للمصنعين
          الإيرانيين البقاء على اطلاع بأوامر مراقبة الجودة الأحدث في الهند
          لتحديد ما إذا كانت منتجاتهم تحتاج إلى شهادة BIS.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          دور الممثل الهندي المعتمد (AIR)
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          بالنسبة لأي مصنع أجنبي يتقدم بطلب للحصول على شهادة BIS بموجب نظام
          FMCS، من الإلزامي تعيين ممثل هندي معتمد (AIR).
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          يعمل AIR كحلقة وصل بين الشركة المصنعة الأجنبية ومكتب المعايير الهندية
          في الهند. بالنسبة للشركات الإيرانية، يلعب هذا الممثل دورًا حاسمًا في
          ضمان التعامل الفعال مع الاتصالات والتوثيق وأنشطة الامتثال مع BIS.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          تشمل مسؤوليات AIR تقديم الطلبات، وتنسيق اختبار عينات المنتج في الهند،
          والمساعدة أثناء عمليات تفتيش المصنع، وإدارة المراسلات مع BIS، وضمان
          التزام المصنع بجميع متطلبات الامتثال بعد الشهادة.
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          اختيار AIR كفؤ وذو خبرة أمر ضروري لتجنب التأخيرات أو المضاعفات في
          عملية الشهادة. تعمل Sun Certifications India كـ AIR موثوق به للمصنعين
          الدوليين، بما في ذلك المقيمون في إيران، وتقدم مساعدة وتمثيل شاملين
          أمام BIS.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          عملية شهادة BIS لمصنعي إيران
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          تتضمن عملية شهادة BIS للمصنعين الإيرانيين بموجب نظام FMCS عدة مراحل
          رئيسية، يجب إكمال جميعها بدقة وامتثال.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          تبدأ العملية بتحديد المصنع للمعيار الهندي (IS) ذي الصلة المطبق على
          منتجه. كل فئة من المنتجات لها رمز IS فريد يحدد مواصفاتها وطرق
          اختبارها.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          بمجرد التحديد، يجب على المصنع تقديم طلب إلى BIS مع الوثائق المطلوبة.
          يمكن تقديم الطلب من خلال بوابة BIS الرسمية، بمساعدة الممثل الهندي
          المعتمد.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          بعد ذلك، يجب على المصنع إرسال عينات المنتج إلى مختبر اختبار معترف به
          من قبل BIS في الهند للتقييم. تختبر هذه المختبرات المنتج وفقًا لمواصفات
          IS المعمول بها للتحقق من المطابقة.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          بعد نجاح الاختبار، يرتب BIS لإجراء تفتيش للمصنع في موقع الإنتاج في
          إيران. أثناء التفتيش، يقوم مسؤولو BIS بتقييم أنظمة إدارة الجودة
          وعمليات الإنتاج ومرافق الاختبار والامتثال العام للمعايير الهندية.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          بمجرد أن يكون BIS راضيًا عن نتائج التفتيش والاختبار، يُمنح الترخيص
          لاستخدام علامة ISI. يمكن للمصنع بعد ذلك وضع شعار ISI على منتجاته
          المعتمدة وتصديرها إلى الهند.
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          يظل الترخيص ساريًا لمدة عام واحد في البداية ويمكن تجديده عند الاستمرار
          في الامتثال للوائح BIS. يتم أيضًا إجراء عمليات تدقيق رقابية دورية من
          قبل BIS لضمان حفاظ المصنع على جودة المنتج المتسقة.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          التحديات التي يواجهها مصدرو إيران مع شهادة BIS
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          بينما تفتح شهادة BIS فرصًا تجارية هائلة، غالبًا ما يواجه المصدرون
          الإيرانيون عدة تحديات أثناء عملية الشهادة.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          أحد التحديات الشائعة هو الاختلاف بين المعايير الهندية (IS) والمعايير
          الدولية مثل ISO أو IEC. حتى لو كان المنتج يلبي المعايير العالمية، فقد
          يحتاج إلى تعديلات أو اختبارات إضافية للتوافق مع المعايير الهندية.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          قضية أخرى هي الصعوبة اللوجستية في الاختبار. تصدير العينات من إيران إلى
          الهند لإجراء اختبارات المختبر يمكن أن يستغرق وقتًا طويلاً ومكلفًا،
          خاصة بالنسبة للعناصر الضخمة أو عالية القيمة.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          قد تقدم مرحلة تفتيش المصنع أيضًا عقبات، مثل تنسيق زيارات مسؤولي BIS،
          وإدارة حواجز اللغة، وإعداد الوثائق وفقًا للمتطلبات الهندية.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          علاوة على ذلك، قد يكون مواكبة التحديثات التنظيمية المتكررة من BIS
          أمرًا صعبًا للمصدرين غير المألوفين بأنظمة الامتثال الهندية.
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          أخيرًا، يمكن أن تؤدي أخطاء التوثيق أو الطلبات غير المكتملة إلى تأخيرات
          أو رفض الشهادة.
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          بالنظر إلى هذه التعقيدات، يصبح من الضروري للمصنعين الإيرانيين طلب
          التوجيه من خبراء مثل Sun Certifications India، الذين يمكنهم إدارة
          العملية بكفاءة وتقليل التأخيرات.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          كيف تدعم Sun Certifications India الشركات الإيرانية
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          تتخصص Sun Certifications India في مساعدة المصنعين الدوليين في الحصول
          على شهادة BIS. بالنسبة للمصدرين الإيرانيين، تقدم الشركة دعمًا شاملاً
          لتبسيط عملية الشهادة.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          تبدأ خدماتهم بتحديد المعايير الهندية ذات الصلة لكل منتج ونصح المصنعين
          بشأن التعديلات اللازمة للمنتج لتلبية تلك المعايير. يتعاملون مع جميع
          جوانب إعداد الوثائق وتقديم الطلبات وتنسيق العينات والإشراف على
          الاختبار مع المختبرات المعتمدة من BIS في الهند.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          تعمل Sun Certifications India أيضًا كممثل هندي معتمد (AIR) للمصنعين
          الإيرانيين، مما يضمن التواصل والتنسيق السلس مع BIS طوال العملية.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          تساعد الشركة في تنظيم ودعم عمليات تفتيش المصنع، وتوجيه المصنعين من
          خلال فحوصات الامتثال، وضمان استيفاء كل متطلب للحصول على الشهادة في
          الوقت المناسب.
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          بالإضافة إلى الشهادة الأولية، تقدم Sun Certifications India دعمًا بعد
          الشهادة، بما في ذلك عمليات التدقيق الرقابية وتجديدات التراخيص
          والتحديثات على التغييرات التنظيمية، مما يضمن الامتثال على المدى الطويل
          وعمليات التجارة السلسة.
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          مع خبرتهم العميقة والمهنية والسجل المثبت، تساعد Sun Certifications
          India الشركات الإيرانية على التنقل بثقة في الإطار التنظيمي المعقد
          للهند، مما يضمن أن منتجاتهم معتمدة بسرعة وكفاءة.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          الخلاصة
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          بالنسبة للمصدرين الإيرانيين، تمثل شهادة BIS المفتاح لفتح الوصول إلى
          أسواق المستهلكين والصناعة الواسعة في الهند. إنها ليست متطلبًا قانونيًا
          فحسب، بل هي أيضًا رمز للثقة والجودة والموثوقية.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          من خلال نظام شهادة المصنعين الأجانب (FMCS)، يمكن للمصنعين الإيرانيين
          الحصول على الترخيص لاستخدام علامة ISI، مما يسمح لهم بتصدير المنتجات
          المعتمدة إلى الهند دون مواجهة حواجز تنظيمية.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          بينما تتضمن عملية شهادة BIS توثيقًا تفصيليًا واختبارًا وعمليات تفتيش،
          فإن الشراكة مع خبير مثل Sun Certifications India تضمن أن كل خطوة تتم
          بمعالجة بدقة ومهنية.
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          مع خبرتها القوية والتمثيل المباشر والدعم الشامل، تمكن Sun
          Certifications India المصدرين الإيرانيين من تحقيق الامتثال بسهولة، مما
          يفتح الباب لنمو الأعمال الأكبر والاعتراف الدولي.
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          شهادة BIS في إيران ليست فقط عن تلبية المعايير التنظيمية؛ إنها عن تبني
          التميز في الجودة، وبناء ثقة العلامة التجارية، وتأسيس وجود طويل الأجل
          في واحدة من أكثر الأسواق ديناميكية في العالم — الهند.
        </p>

        <ServiceAuthorArabic />
      </div>
    </div>
  );
};

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

const LangIraqBlog = () => {
  return (
    <div className="relative w-full" dir="rtl">
      <LangIraqBlogMetaData />
      <LangIraqBlogBreadcrumb />
      <LangIraqBlogMainContent />
      <ServicesArabic />
      <VideoSection />
      <FooterArabic />
    </div>
  );
};

export default LangIraqBlog;

const LangIraqBlogMetaData = () => {
  const title = "شهادة BIS في العراق | Sun Certifications India";
  const description =
    "شهادة BIS في العراق هي بوابة لفرص تجارية جديدة ومصداقية علامة تجارية محسنة ونمو مستدام في واحدة من أكبر أسواق المستهلكين في العالم.";
  const keywords =
    "شهادة BIS في العراق, شهادة BIS في العراق, ترخيص BIS في العراق, علامة BIS, BIS FMCS في العراق, شهادة BIS FMCS في العراق, شهادة BIS لمصدري العراق";
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

const LangIraqBlogBreadcrumb = () => {
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
                    شهادة BIS في العراق
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

const LangIraqBlogMainContent = () => {
  return (
    <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12 pt-[60px] md:pt-[75px]">
      <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] w-full">
        {/* Left Side Content */}
        <LangIraqBlogMainContentLeft />

        {/* Right Side Content */}
        <ServicesRightSideContentArabic />
      </div>
    </div>
  );
};

const LangIraqBlogMainContentLeft = () => {
  return (
    <div className="flex-1 overflow-y-auto pt-2 px-2  -mt-2 -mx-2 ">
      {/* Blog Content */}
      <div className="p-6 mb-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
        <h1 className="text-xl md:text-2xl font-playfair font-bold text-[#1e1e1e] mb-4">
          شهادة BIS في العراق
        </h1>

        <p className="text-gray-600 text-base font-geist mb-4">
          العلاقة التجارية بين الهند والعراق لها جذور تاريخية عميقة وتستمر في التقوية مع توسع البلدين في تعاونهما الاقتصادي. يصدر العراق مجموعة متنوعة من المنتجات إلى الهند، بما في ذلك المواد الصناعية والمواد الكيميائية والبضائع الإنشائية والمعدات الكهربائية. مع تزايد طلب المستهلكين والصناعات الهندية على المنتجات عالية الجودة والآمنة، جعل مكتب المعايير الهندية (BIS) شهادة المنتج إلزامية لمجموعة واسعة من العناصر المستوردة. بالنسبة للمصنعين والمصدرين العراقيين، أصبح الحصول على شهادة BIS الآن متطلباً حاسماً للوصول إلى السوق الهندي بثقة وقانونية.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          تستكشف هذه المقالة أهمية شهادة BIS في العراق، وعملية الشهادة، ودور الممثل الهندي المعتمد (AIR)، والتحديات الشائعة التي يواجهها المصدرون، وكيف تساعد Sun Certifications India الشركات العراقية في تحقيق الامتثال لـ BIS بكفاءة.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          فهم شهادة BIS ونظام FMCS
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          مكتب المعايير الهندية (BIS) هو هيئة المعايير الوطنية في الهند التي تعمل تحت إشراف وزارة شؤون المستهلك والغذاء والتوزيع العام. تأسس لحماية مصالح المستهلكين والحفاظ على جودة المنتج وتعزيز التوحيد القياسي، يلعب BIS دوراً حاسماً في ضمان أن جميع السلع المباعة في الهند — سواء كانت مصنعة محلياً أو مستوردة — تلبي معايير السلامة والجودة المحددة.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          تعمل شهادة BIS كعلامة ضمان رسمية، ممثلة بعلامة ISI (علامة معهد المعايير الهندية). عندما يحمل المنتج علامة ISI، فإنه يشير إلى أن المنتج يتوافق مع المعيار الهندي (IS) ذي الصلة لهذه الفئة.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          بالنسبة للمصنعين الدوليين، بما في ذلك أولئك في العراق، يدير BIS نظام شهادة المصنعين الأجانب (FMCS). تم تقديمه في عام 2000، يسمح FMCS للشركات الأجنبية بالحصول على ترخيص BIS لاستخدام علامة ISI على منتجاتها بعد إثبات الامتثال للمعايير الهندية.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          تحت نظام FMCS، يخضع المصنع الأجنبي لعملية شاملة تشمل تقديم الطلب واختبار المنتج في المختبرات الهندية المعتمدة من BIS وتفتيش المصانع. بمجرد أن يكون BIS راضياً عن أن المنتج يلبي المعايير الهندية، يصدر ترخيص الشهادة، مما يمكن المصنع من التصدير إلى الهند بحرية.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          تضمن هذه الشهادة أن السلع المصنعة أجنبياً موثوقة وآمنة مثل تلك المنتجة داخل الهند، مما يخلق ميداناً متكافئاً لجميع المشاركين في السوق.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          لماذا تعتبر شهادة BIS ضرورية للمصدرين العراقيين
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          بالنسبة للمصدرين العراقيين الذين يتطلعون إلى التوسع في السوق الهندي المزدهر، شهادة BIS ليست مجرد متطلب تنظيمي — بل هي ميزة تجارية قوية. الحكومة الهندية، من خلال أوامر مراقبة الجودة المختلفة (QCOs)، تفرض شهادة BIS لمجموعة واسعة من المنتجات. تشمل هذه الأجهزة الكهربائية ومواد البناء والمواد الكيميائية والسلع المنزلية والأجهزة الإلكترونية.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          بدون شهادة BIS، لا يمكن استيراد أو بيع أو توزيع مثل هذه المنتجات في الهند. يمكن لسلطات الجمارك احتجاز أو رفض الشحنات التي تفتقر إلى الشهادة المناسبة، مما يؤدي إلى خسائر مالية وأضرار في السمعة.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          ومع ذلك، إلى جانب الامتثال، توفر شهادة BIS فوائد ملموسة متعددة للمصنعين العراقيين:
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          تضمن الدخول السلس إلى السوق الهندي، مما يلغي الحواجز أمام الاستيراد والتوزيع. مع علامة ISI، تحصل منتجاتك على مصداقية فورية واعتراف بين المشترين والمستوردين والموزعين الهنود.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          تعزز أيضاً ثقة المستهلك وثقة العلامة التجارية. يميل المستهلكون الهنود إلى تفضيل المنتجات المعتمدة من BIS لأنها ترمز إلى الجودة والسلامة والمتانة. بالنسبة للمصدر العراقي، هذا يعني احتمالاً أكبر للنجاح في السوق الهندي التنافسي.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          تقلل شهادة BIS أيضاً من المخاطر التجارية من خلال ضمان أن منتجاتك تلبي المعايير التقنية والسلامة الصارمة في الهند، مما يمنع الرفض المحتمل أو الاستدعاءات.
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          علاوة على ذلك، يمكن أن تؤدي الشهادة إلى زيادة الوصول إلى السوق والربحية، حيث أن المنتجات المعتمدة من BIS غالباً ما تحظى بقبول وموثوقية أعلى بين المشترين الصناعيين وتجار التجزئة والمستهلكين النهائيين.
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          في جوهر الأمر، شهادة BIS هي ضرورة قانونية واستثمار استراتيجي للمصدرين العراقيين الذين يهدفون إلى النجاح طويل الأمد في الهند.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          الصناعات في العراق التي تتطلب شهادة BIS
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          القطاع الصناعي في العراق متنوع، ويشمل عدة صناعات رئيسية تصدر منتجاتها إلى الهند بشكل متكرر. العديد من هذه القطاعات تقع تحت قائمة شهادة BIS الإلزامية في الهند. بعض الصناعات الرئيسية في العراق التي تتطلب عادةً شهادة BIS تشمل:
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          صناعة مواد البناء، التي تنتج الأسمنت وقضبان الصلب والتركيبات المستخدمة في مشاريع البنية التحتية في جميع أنحاء الهند. يجب أن تلبي هذه المواد المعايير الهندية لضمان السلامة الهيكلية والجودة.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          قطاع الكهرباء والإلكترونيات، الذي يشمل عناصر مثل الكابلات والمحولات والمفاتيح والمحركات التي يجب أن تتوافق مع معايير السلامة الكهربائية الهندية.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          صناعة المواد الكيميائية والبتروكيماويات، التي تصدر الدهانات والمواد اللاصقة والمذيبات الصناعية — جميعها منظمة تحت معايير هندية محددة.
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          بالإضافة إلى ذلك، الأجهزة الاستهلاكية والأدوات الميكانيكية والآلات الصناعية من العراق غالباً ما تتطلب شهادة للدخول إلى السوق الهندي.
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          مع استمرار توسع قائمة المنتجات تحت الشهادة الإلزامية، من المهم للمصنعين العراقيين البقاء محدثين حول الإطار التنظيمي المتطور في الهند وتحديد أي من منتجاتهم تحتاج إلى موافقة BIS قبل التصدير.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          دور الممثل الهندي المعتمد (AIR)
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          جانب حاسم من عملية شهادة BIS للمصنعين الأجانب هو تعيين ممثل هندي معتمد (AIR). يفرض BIS أن كل مصنع أجنبي يسعى للحصول على شهادة يجب أن يكون له ممثل معين قانونياً مقيم في الهند.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          يعمل AIR كجسر بين المصنع الأجنبي ومكتب المعايير الهندية. بالنسبة للشركات العراقية، يضمن AIR التواصل السلس والتعامل مع الوثائق والامتثال لمتطلبات BIS طوال عملية الشهادة.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          تشمل واجبات AIR تقديم طلب الشهادة والتنسيق مع اختبار المنتج مع المختبرات المعترف بها من BIS وتسهيل عملية تفتيش المصنع وإدارة جميع المراسلات مع سلطات BIS نيابة عن المصنع.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          بالإضافة إلى ذلك، AIR مسؤول عن ضمان أن المصنع يلتزم بمتطلبات الامتثال بعد الشهادة من BIS، مثل عمليات التدقيق الدورية وتجديد الوثائق.
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          الشراكة مع AIR مطلع وذو خبرة مثل Sun Certifications India يمكن أن تحدث فرقاً كبيراً في الحصول على شهادة BIS بسرعة وكفاءة. خبرتهم تقلل من الأخطاء وتقلل من تأخيرات المعالجة وتضمن أن جميع التوقعات التنظيمية يتم الوفاء بها.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          عملية شهادة BIS لمصنعي العراق
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          عملية شهادة BIS للمصنعين العراقيين تحت نظام شهادة المصنعين الأجانب (FMCS) شاملة ولكنها منظمة جيداً. تبدأ بتحديد المعيار الهندي المناسب (IS) المطبق على فئة المنتج. كل نوع منتج له رمز IS فريد يحدد مواصفاته وطرق الاختبار ومعايير الجودة.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          بمجرد تحديد IS الصحيح، يعد المصنع طلباً للتقديم إلى BIS. يجب أن يتضمن هذا الطلب جميع الوثائق التقنية وتقارير الاختبار وتفاصيل الشركة. تتم العملية عبر الإنترنت من خلال بوابة BIS، عادة ما يتم تسهيلها من قبل الممثل الهندي المعتمد.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          بعد التقديم، يتم إرسال عينات المنتج إلى مختبر معترف به من BIS في الهند للاختبار. تتحقق هذه الاختبارات من أن المنتج يلبي معايير الجودة والسلامة المحددة في المعيار الهندي المطبق.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          بعد الاختبار الناجح، يجري BIS تفتيشاً للمصنع في موقع التصنيع في العراق. خلال هذا التفتيش، يقيم مسؤولو BIS مرافق الإنتاج وإجراءات مراقبة الجودة والمعدات وممارسات التصنيع.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          بمجرد أن تكون نتائج الاختبار والتفتيش مرضية، يمنح BIS الترخيص لاستخدام علامة ISI، مما يسمح للمصنع بتصدير المنتج المعتمد إلى الهند.
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          الشهادة صالحة عادة لمدة عام واحد، وبعد ذلك يمكن تجديدها بناءً على الامتثال المستمر لمتطلبات BIS. المصنعون أيضاً يخضعون لعمليات تدقيق مراقبة دورية لضمان جودة المنتج المستمرة.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          التحديات التي يواجهها مصدرو العراق مع شهادة BIS
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          بينما تفتح شهادة BIS فرصاً هائلة للمصدرين العراقيين، تأتي العملية مع تحديات معينة. أحد التحديات الرئيسية هو الفرق بين المعايير الهندية والمعايير الدولية. المنتجات التي تتوافق مع معايير ISO أو IEC قد تحتاج إلى تعديلات أو اختبارات إضافية لتلبية اللوائح الهندية.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          تحدٍ آخر ينطوي على لوجستيات الاختبار، حيث يجب إرسال عينات المنتج إلى المختبرات المعتمدة من BIS الموجودة في الهند. يمكن أن يؤدي هذا إلى تأخيرات وتكاليف إضافية، خاصة للبضائع الضخمة أو الهشة.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          يمكن أن تكون عمليات تفتيش المصانع معقدة أيضاً، مما يتطلب التنسيق بين مسؤولي BIS والمصنعين في العراق. حواجز اللغة والتناقضات في الوثائق ونقص الألفة مع إجراءات BIS قد تعقد العملية أكثر.
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          بالإضافة إلى ذلك، التحديثات التنظيمية المتكررة والتغييرات في أوامر مراقبة الجودة في الهند يمكن أن تجعل من الصعب على المصدرين البقاء على اطلاع حول متطلبات المنتج الجديدة.
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          ومع ذلك، مع التوجيه المناسب والدعم الخبير، يمكن إدارة هذه التحديات بفعالية. هذا هو المكان الذي يصبح فيه دور المستشارين المحترفين مثل Sun Certifications India لا يقدر بثمن.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          كيف تدعم Sun Certifications India الشركات العراقية
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Sun Certifications India هي خبيرة الامتثال والشهادة الرائدة المكرسة لمساعدة المصنعين الدوليين في الحصول على شهادة BIS بسلاسة. مع سنوات من الخبرة وشبكة قوية داخل النظام البيئي التنظيمي في الهند، ساعدت الشركة بنجاح العديد من المصدرين العالميين، بما في ذلك أولئك من العراق، في تحقيق الامتثال لـ BIS.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          فريق الخبراء لديهم يقدم مساعدة شاملة، بدءاً من تحديد المعيار الهندي المطبق للمنتج وإعداد جميع الوثائق اللازمة. يتعاملون أيضاً مع تقديم الطلب والتنسيق مع اختبار العينات مع المختبرات المعتمدة من BIS وترتيب عمليات تفتيش المصانع.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          كممثل هندي معتمد (AIR)، تعمل Sun Certifications India كنقطة اتصال رسمية بين BIS والمصنع، مما يضمن التواصل الشفاف والمعالجة في الوقت المناسب لجميع المتطلبات.
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          إلى جانب الحصول على الشهادة، تقدم Sun Certifications India دعم ما بعد الشهادة المستمر، بما في ذلك تجديد التراخيص وتنسيق المراقبة الدورية والتحديثات حول التغييرات التنظيمية. هذا يضمن أن المصنعين العراقيين يبقون متوافقين ويحافظون على شهادتهم دون انقطاع.
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          مع نهج الخدمة الشامل والخبرة التقنية والالتزام بنجاح العميل، أصبحت Sun Certifications India شريكاً موثوقاً للمصدرين العراقيين الذين يهدفون إلى دخول السوق الهندي بثقة.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          الخلاصة
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          شهادة BIS في العراق هي أكثر من متطلب امتثال؛ إنها بوابة لفرص تجارية جديدة ومصداقية علامة تجارية محسنة ونمو مستدام في واحدة من أكبر أسواق المستهلكين في العالم. بالنسبة للمصدرين العراقيين، يضمن الحصول على شهادة BIS من خلال نظام شهادة المصنعين الأجانب (FMCS) أن منتجاتهم تتماشى مع معايير السلامة والجودة الصارمة في الهند.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          بينما تتضمن عملية الشهادة عدة خطوات تقنية، من الاختبار إلى التفتيش، فإنها تضمن في النهاية الوصول السلس إلى السوق وتحسين ثقة المستهلك والنجاح التجاري طويل الأمد.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          من خلال الشراكة مع شريك موثوق مثل Sun Certifications India، يمكن للمصنعين العراقيين التنقل في تعقيدات شهادة BIS بسهولة. مع التوجيه المهني ودعم الوثائق الخبير والتمثيل المعتمد، يصبح تحقيق الامتثال لـ BIS عملية مبسطة وفعالة.
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          في عصر حيث تحدد جودة المنتج التجارة العالمية، تقف شهادة BIS كرمز للثقة والتميز. بالنسبة للمصدرين العراقيين، إنها المفتاح لفتح إمكانات السوق الواسعة في الهند مع إظهار التزامهم بالسلامة والجودة والمعايير الدولية.
        </p>

        <ServiceAuthorArabic />
      </div>
    </div>
  );
};

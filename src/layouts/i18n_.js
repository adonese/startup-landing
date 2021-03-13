import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n.use(LanguageDetector).init({
    // we init with resources
    resources: {
        en: {
           
                translations: {
                    title: "Search Me!",
                    slogan: "Closest to you",
                    sign_up: "Download the App!",
                    email: "Your email",
                    subscribe: "Subscribe to Search Me!",
                    hero_text: "Search Me connects customers with service providers in a simple and easy to use mobile app interface.",
                    download_ios: "Download iOS",
                    download_android: "Download Android",
                    company_values: "Search Me offers simple and easy to use mobile app for customers to find service providers.",
                    company_values_desc: "Search Me offers a simple and unique solution to connect customers with service providers within our mobile apps. We offer great services and highly qualified individuals to fix your urgent problem. Got any problem, just Click Find on Search Me and you're off with great providers!",
                    ele: "Electricity",
                    ele_desc: "Got any electricity problems? We got you covered!",
                    sink: "Sink and Kitchen",
                    sink_desc: "Does your sink not work during your holidays? Search Me!",
                    colors: "Colors, Paint and interior Design",
                    colors_desc: "Do you want a new style for your new born room? Yeah, we got that",
                    carpenter: "Carpenter",
                    carpenter_desc: "Do you want to fix your bed noises? Search Me for the win",
                    car_fix: "Car Mechanics",
                    car_fix_desc: "Search Me can help you locate the best car mechanics nearest to your location (where ever you are) and with the best quality!",
                    batteries: "Batteries for Car",
                    batteries_desc: "Got any problem with your car batteries and you want a new replacement and fixing your current one, in your ride home? No worries, Search Me!",
                    workflow_title: "How Search Me Works",
                    workflow_desc: "For users, you simply register in our system, select a service you wish and submit your request. We offer you a curated list of our top service providers and you are free to call them, text them, or whatsapp them!",
                    highlighted_features: "1",
                    HIGHLIGHTED_FEATURES: "1",
                    sidefeatures_1: "Create a new Account",
                    sidefeatures_1_desc: "Mobile number, name, and Password. That all we want!",
                    sidefeatures_2: "Choose your problem",
                    sidefeatures_2_desc: "You can also search through our list of supported services.",
                    sidefeatures_3: "Pick one of the service providers",
                    sidefeatures_3_desc: "You can call them, whatsapp them or send them a SMS",
                    customer_voices: "What others say about us",
                    customer_voices_desc: "It is a good to hear what other partners and clients say about us.",
                    customer_voices_en1: "Search Me can really help in this niche market and we believe that they can make a great business case.",
                    customer1_name: "Amjad Abdeen",
                    customer1_company: "ACTS",
                    customer_voices_en2: "I think that the idea you can find a nearby service provider to fix your electricty lamp, or your kitchen sink to be very helpful",
                    customer2_name: "Mohamed Yousif",
                    customer2_company: "Solus",
            }
        },
        ar: {
            translations: {
                title: "ابحث لي!",
                slogan: "الأقرب لك",
                sign_up: "قم بتنزيل التطبيق",
                email: "رقم تلفونك",
                subscribe: "قم بالإشتراك بابحث لي",
                hero_text: "ابحث لي هو منصة لتقديم الخدمات من اصلاح كهرباء، نجارة، سباكة وغيرها بواسطة تطبيق بسيط وسهل الإستخدام",
                download_ios: "قم بتحميل تطبيق iOS",
                download_android: "قم بتحميل تطبيق Android",
                company_values: "ابحث لي هو منصة بسيطة وسهلة الاستخدام لتوفير الخدمات اليومية والجمع بين مزودي الخدمات والمستفيدين",
                company_values_desc: "باستخدام ابحث لي المتوفر في المتاجر المختلفة، يمكنك الحصول على أقرب وأفضل العملاء لحل مشكلتك المعينة.",
                ele: "كهرباء",
                ele_desc: "ابحث لي يساعدك على إيجاد أقرب كهربائي إليك",
                sink: "مشاكل المطبخ",
                sink_desc: "لديك مشكلة في المطبخ في نهاية الإسبوع؟ ابحث لي وتواصل مع أقربهم إليك",
                colors: "دهان وتصميم داخلي",
                colors_desc: "تريد تغيير الديزاين الخاص بمنزلك؟ ابحث لي هو الحل",
                carpenter: "نجار",
                carpenter_desc: "لحل كل المشاكل التي تخص النجارة في منزلك",
                car_fix: "ميكانيكي سيارات",
                car_fix_desc: "تعطلت بك السيارة في أثناء الطريق؟ لا يوجد أسرع ولا أقرب ولا أضمن من ابحث لي لحل مشكلتك!",
                batteries: "بطاريات سيارات",
                batteries_desc: "تريد تغيير بطارية سياراتك او حتى الحصول على واحدة جديدة؟ ابحث لي",
                workflow_title: "كيف يعمل تطبيق ابحث لي",
                workflow_desc: "كل المطلوب منك، ان تقوم بتنزيل التطبيق، إنشاء حساب جديد، اختيار خدمة أو البحث عن خدمة ومن ثم التواصل مباشرة مع مزود الخدمة! لا كلام أكثر!",
                sidefeatures_1: "خطوات انشاء حساب جديد",
                sidefeatures_1_desc: "أدخل رقم الهاتق الشخصي، اختر كلمة مرور ومن ثم سجّل!",
                sidefeatures_2: "ثم قم بإختيار الخدمة من قائمة الخدمات",
                sidefeatures_2_desc: "نعم! لدينا أكثر من 40 خدمة وهي في زيادة! اختر الخدمة المعينة واضغط عليها. يمكنك أيضاً البحث عن الخدمات",
                sidefeatures_3: "اختر موقعك واختر مزود الخدمة",
                sidefeatures_3_desc: "العملية اكتملت! تواصل مباشرة مع مزودي الخدمة! لا وسطاء، لا تأخير",
                customer_voices: "شهادة الشركاء والعملاء عن ابحث لي",
                customer_voices_desc: "شهادة عملائنا وشركائنا عن ابحث لي",
                customer_voices_en1: "ابحث لي تطبيق سهل وبسيط وأرى انه يساعد جداً في هذا السوق حيث لا يوجد منافسين بنفس الفكرة والسهولة",
                customer1_name: "أمجد عابدين",
                customer1_company: "آكتس",
                customer_voices_en2: "فكرة انك تختار مشكلتك ثم تجد أقرب مزودي الخدمة الموثوقين بكامل عناوين التواصل لهم مفيدة للغاية وفعلاً تطبيق يفيدني في أيامي العادية",
                customer2_name: "محمد يوسف",
                customer2_company: "سولس",
                HIGHLIGHTED_FEATURES: "1",
            }
        },




    },
    fallbackLng: "en",
    debug: true,

    // have a common namespace used around the full app
    ns: ["translations"],
    defaultNS: "translations",

    keySeparator: false, // we use content as keys

    react: {
        wait: true
    }
});

export default i18n;
/* Central content model — text and imagery mirrored from grangeschool.com */

export const G = (path: string) => `https://grangeschool.com${path}`;

export const LOGO = G("/wp-content/uploads/2026/03/GrangeNewLogoDesign-300x270.png");

export const HERO_SLIDES = [
  {
    image: G("/wp-content/uploads/2026/03/Grange-Hero-Carousel-Image-1.jpg"),
    fallback:
      "https://images.pexels.com/photos/34211747/pexels-photo-34211747.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    eyebrow: "Est. 1958 · Ikeja GRA, Lagos",
    title: "A Culture of Continuous Improvement",
    subtitle:
      "A premium British international day & boarding school delivering the National Curriculum of England and the Cambridge curriculum — from Nursery to Year 11.",
    primary: { label: "Apply for Admission", href: "#admissions" },
    secondary: { label: "Book a School Tour", href: "#contact" },
  },
  {
    image: G("/wp-content/uploads/2026/03/Grange-Carousel-2.jpg"),
    fallback:
      "https://images.pexels.com/photos/8471855/pexels-photo-8471855.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    eyebrow: "Academic Excellence",
    title: "Results Rivalling Top UK Independent Schools",
    subtitle:
      "In 2023, 97.1% of our pupils achieved grades A*–C at IGCSE, with 57.9% at A*–A — outperforming every other school in Lagos.",
    primary: { label: "Explore Our Results", href: "#results" },
    secondary: { label: "Why Choose Grange?", href: "#why-grange" },
  },
  {
    image: G("/wp-content/uploads/2026/03/Grange-Carousel-3.jpg"),
    fallback:
      "https://images.pexels.com/photos/8927017/pexels-photo-8927017.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    eyebrow: "COBIS Accredited · Day & Boarding",
    title: "British Tradition with Nigerian Innovation",
    subtitle:
      "Modern facilities, a safe learning environment and passionate teachers — where children flourish, lead and become global citizens.",
    primary: { label: "Discover Grange Life", href: "#life" },
    secondary: { label: "Contact Admissions", href: "#contact" },
  },
];

export const STATS = [
  { value: 1958, label: "Year Founded", suffix: "", plain: true },
  { value: 68, label: "Years of Excellence", suffix: "+" },
  { value: 97.1, label: "IGCSE A*–C (2023)", suffix: "%", decimals: 1 },
  { value: 100, label: "Boarders Housed", suffix: "+" },
];

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  {
    label: "About Us",
    href: "#about",
    children: [
      { label: "Welcome Address", href: "#welcome" },
      { label: "Our History", href: "#history" },
      { label: "Vision, Mission & Values", href: "#about" },
      { label: "Leadership Team", href: "#leadership" },
      { label: "Governors & Directors", href: "#leadership" },
      { label: "Exam Results", href: "#results" },
    ],
  },
  {
    label: "Primary",
    href: "#primary-secondary",
    children: [
      { label: "Nursery & Reception", href: "#primary-secondary" },
      { label: "Key Stage 1", href: "#primary-secondary" },
      { label: "Key Stage 2", href: "#primary-secondary" },
      { label: "Library & Learning Support", href: "#primary-secondary" },
    ],
  },
  {
    label: "Secondary",
    href: "#primary-secondary",
    children: [
      { label: "Key Stage 3", href: "#primary-secondary" },
      { label: "Key Stage 4 (IGCSE)", href: "#results" },
      { label: "Pastoral & Well-being", href: "#pastoral" },
      { label: "Co-Curricular", href: "#life" },
    ],
  },
  { label: "Boarding", href: "#boarding" },
  { label: "Admissions", href: "#admissions" },
  { label: "News & Events", href: "#news" },
  { label: "Contact", href: "#contact" },
];

export const WHY_GRANGE = [
  {
    icon: "graduation",
    title: "Academic Excellence",
    text: "Impressive IGCSE results, with the majority of pupils securing their first-choice place at leading A Level / IB schools worldwide.",
  },
  {
    icon: "trophy",
    title: "Sports & Co-Curricular",
    text: "An extensive sports and co-curricular programme — from inter-house sport to Duke of Edinburgh, swimming and PGL trips.",
  },
  {
    icon: "heart",
    title: "Pastoral Support",
    text: "A strong pastoral system with dedicated tutors caring for the personal, emotional, social, intellectual and moral needs of every pupil.",
  },
  {
    icon: "monitor",
    title: "Educational Technology",
    text: "Technology woven through learning — every classroom and teaching room is equipped with interactive boards.",
  },
  {
    icon: "badge",
    title: "International Accreditation",
    text: "Fully accredited by COBIS, with membership of AGBIS, AISEN and accreditation from the UK's Independent Association of Prep Schools.",
  },
  {
    icon: "plane",
    title: "International Trips",
    text: "Life-changing trips to France, the UK, South Africa, Spain, the Middle East, Qatar and the UAE.",
  },
  {
    icon: "hands",
    title: "Service Learning",
    text: "Developing learners who care for others — contributing to charities and serving the local community.",
  },
  {
    icon: "music",
    title: "Performing Arts",
    text: "Music, orchestra, choir, drama and instrumental tuition — with show-stopping concerts and productions every year.",
  },
];

export const SCHOOLS = [
  {
    tag: "Ages 2½ – 11",
    title: "Primary School",
    image: G("/wp-content/uploads/2026/05/132911_1_result.webp"),
    fallback:
      "https://images.pexels.com/photos/10638213/pexels-photo-10638213.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    text: "From Nursery and Reception through Key Stages 1 & 2, our primary phase builds happy, curious and confident learners with strong foundations in literacy, numeracy and character.",
    points: ["Nursery & Reception", "Key Stages 1 & 2", "Phonics-rich literacy", "Small class sizes"],
  },
  {
    tag: "Years 7 – 11",
    title: "Secondary School",
    image: G("/wp-content/uploads/2026/06/IMG_7209_result-scaled.webp"),
    fallback:
      "https://images.pexels.com/photos/8471975/pexels-photo-8471975.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    text: "Key Stages 3 & 4 culminating in Cambridge IGCSEs — rigorous academics, outstanding pastoral care and pathways to the world's finest A Level and IB colleges.",
    points: ["Key Stage 3 (Y7–9)", "Key Stage 4 · IGCSE", "Pastoral tutor system", "University guidance"],
  },
];

export const RESULTS = [
  { grade: "A* – C", value: 97.1, note: "of all IGCSE grades (2023)" },
  { grade: "A* – B", value: 84.16, note: "of all IGCSE grades (2023)" },
  { grade: "A* – A", value: 57.93, note: "of all IGCSE grades (2023)" },
];

export const HISTORY = [
  {
    year: "1957",
    title: "The Idea is Born",
    text: "A group of interested parents applied to West African Airways Corporation to rent a building for a school, forming Grange Education Limited as a not-for-profit company in GRA Ikeja.",
  },
  {
    year: "1958",
    title: "Grange School Opens",
    text: "The school was officially opened by Lady Robertson, wife of the then Governor-General of Nigeria, on 15th December 1958 — for children aged 4 to 11.",
  },
  {
    year: "1998",
    title: "Secondary School Founded",
    text: "For the 40th anniversary, the Board established a co-educational Secondary Section adjacent to the Primary School — a symbol of onward-going British traditions.",
  },
  {
    year: "2006",
    title: "Boarding Established",
    text: "Residential provision opened for families across Lagos and beyond. Today 100+ students in Years 5–11 live in eight terraced houses, five minutes from school.",
  },
  {
    year: "2014",
    title: "COBIS & IAPS Recognition",
    text: "Membership of the prestigious Council of British International Schools was granted, followed by accreditation from the UK's Independent Association of Prep Schools.",
  },
  {
    year: "2023",
    title: "Full COBIS Accreditation",
    text: "Grange became fully COBIS-accredited after rigorous external review — praised for resilient, respectful learners and strengths across the whole school.",
  },
];

export type Voice = { name: string; tag: string; image: string; quote: string; title?: string };
export type VoiceGroup = { id: string; eyebrow: string; heading: string; voices: Voice[] };

export const VOICE_GROUPS: VoiceGroup[] = [
  {
    id: "students",
    eyebrow: "Testimonials",
    heading: "Student Voices",
    voices: [
      {
        name: "Ijogun Oluwasikemi",
        tag: "Year 7A",
        image: G("/wp-content/uploads/2026/05/ijogun-oluwasikemi_result.webp"),
        quote:
          "My experience at Grange School has been an amazing one so far. I have made new friends, learnt a lot more and participated in many different activities like giving a speech in the famous gazebo which has built my level of confidence, being part of the Year 7 charity committee amongst others. Overall, Grange is a wonderful school as it combines discipline and excitement.",
      },
      {
        name: "Akim Ogunbunmi",
        tag: "Year 2B",
        image: G("/wp-content/uploads/2026/05/Akim-Ogunbunmi_result-e1783943378478.webp"),
        quote: "I like Grange School because it has the best classrooms.",
      },
      {
        name: "Usochi Nkoloenyi",
        tag: "Year 5A",
        image: G("/wp-content/uploads/2026/05/usochi-nkoloenyi_result.webp"),
        quote:
          "Grange has been like a second home to me. It's been a place where I have grown in behaviour and academics. It's an amazing place where everyone feels welcome and seen. It's also a place where you can explore talents like music and sports, costume days, recitals, induction, inter-house sports and going for PGL without parents.",
      },
      {
        name: "Shikemi Adelana",
        tag: "Reception 1",
        image: G("/wp-content/uploads/2026/05/Shikemi-Adelana_result.webp"),
        quote:
          "In Grange school I enjoy reading a variety of books. I love Miss Ife's teaching, the way she makes me happy and I like Grange School.",
      },
    ],
  },
  {
    id: "parents",
    eyebrow: "From Our Parents",
    heading: "Parent Testimonials",
    voices: [
      {
        name: "Grange Parent",
        tag: "Parent",
        image: G("/wp-content/uploads/2026/05/WhatsApp-Image-2026-07-17-at-2.18.26-PM_result.webp"),
        quote:
          "Grange has been amazing for my child. Her reading and writing skills have improved greatly, and she's become a much more confident communicator. Beyond academics, Grange has also ignited her interest in art. Her drawing has improved and she now spends hours creating. We've seen such wonderful growth.",
      },
      {
        name: "Grange Parent",
        tag: "Parent — Year 5",
        image: G("/wp-content/uploads/2026/06/team-member-four.jpg"),
        title: "Opportunities Beyond the Classroom",
        quote:
          "From the very beginning, we noticed the structured learning environment and the strong communication between home and school. Our daughter is challenged academically, yet supported pastorally. Grange has created a space where she feels confident, capable, and valued.",
      },
      {
        name: "Grange Parent",
        tag: "Parent — Year 8",
        image: G("/wp-content/uploads/2026/06/team-member-three-hvr.jpg"),
        title: "Strong School Leadership",
        quote:
          "We appreciate the transparency, professionalism, and high standards maintained across the school. The teachers are approachable, and the leadership team demonstrates genuine commitment to every child's development.",
      },
    ],
  },
  {
    id: "staff",
    eyebrow: "Staff Insight",
    heading: "From Our Staff",
    voices: [
      {
        name: "Siya Farojoye",
        tag: "Drama Teacher",
        image: G("/wp-content/uploads/2026/05/Farojoye_result.webp"),
        quote:
          "Teaching at Grange School has been an incredibly rewarding experience. As a Drama teacher, I enjoy helping students build confidence, creativity, and self-expression through the performing arts. The school's commitment to academic excellence creates an inspiring environment for both students and staff.",
      },
      {
        name: "Emmanuel Otene",
        tag: "Staff",
        image: G("/wp-content/uploads/2026/05/OTENE_result.webp"),
        quote:
          "My Grange experience has been amazing. The opportunity to have grown to a leadership position speaks volumes. This is a citadel of learning with the culture that continuously improves the best.",
      },
      {
        name: "Sarah Momoh",
        tag: "Secondary Librarian",
        image: G("/wp-content/uploads/2026/05/sarah-momoh-webp-png.png"),
        quote:
          "As Grange's Secondary Librarian, I have experienced a truly warm and welcoming community where learning, collaboration, and innovation flourish. Grange has a unique way of bringing us all within the range of perfection — not by expecting perfection, but by continually encouraging us to pursue excellence together.",
      },
      {
        name: "Ifeoluwa Kuti-George",
        tag: "Teacher",
        image: G("/wp-content/uploads/2026/05/Z91A1961_result-1.webp"),
        quote:
          "My experience at Grange School has been truly rewarding. It is here that my passion for teaching grew into a genuine sense of purpose. I am grateful to be part of a community that is dedicated to nurturing both its pupils and its staff.",
      },
      {
        name: "Raphael Francis",
        tag: "Teacher",
        image: G("/wp-content/uploads/2026/05/hgh_result.webp"),
        quote:
          "What I love about Grange School is the freedom to thrive as a creative and bring fresh ideas to life. The children's enthusiasm makes every lesson rewarding, while the safe, supportive working environment creates a place where people genuinely enjoy working together.",
      },
    ],
  },
  {
    id: "alumni",
    eyebrow: "Testimonials",
    heading: "Alumni Journeys",
    voices: [
      {
        name: "Alumni",
        tag: "Class of 2019",
        image: G("/wp-content/uploads/2026/06/team-mem-11.jpg"),
        title: "Developing a Global Perspective",
        quote:
          "The international outlook of the school broadened my perspective early. It shaped how I approach challenges and collaborate with people from diverse backgrounds.",
      },
      {
        name: "Alumni",
        tag: "Class of 2021",
        image: G("/wp-content/uploads/2026/06/team-member-four.jpg"),
        title: "Academic Rigour",
        quote:
          "The academic rigour and discipline at Grange prepared me exceptionally well for university abroad. I entered higher education confident, organised, and equipped to excel.",
      },
      {
        name: "Alumni",
        tag: "Class of 2017",
        image: G("/wp-content/uploads/2026/06/team-member-three-hvr.jpg"),
        title: "Developing Personal Confidence",
        quote:
          "Grange helped me develop strong communication and leadership skills. Presentations, group projects, and extracurricular activities built my confidence in ways I still rely on today.",
      },
    ],
  },
];

export const NEWS = [
  {
    title: "Year 11 Graduation Celebration",
    category: "Secondary",
    date: "June 2026",
    image: G("/wp-content/uploads/2026/06/web-post-year-11-graduation_result.webp"),
    text: "Our Year 11 cohort celebrated the end of their IGCSE journey in style — a joyful graduation ceremony with families, staff and friends.",
  },
  {
    title: "Summer Concert Spectacular",
    category: "Music",
    date: "May 2026",
    image: G("/wp-content/uploads/2026/05/web-post-summer-concert_result.webp"),
    text: "Orchestra, choir and instrumental soloists took the stage for an unforgettable evening of music at the annual Grange Summer Concert.",
  },
  {
    title: "Swimming Gala Success",
    category: "Sport",
    date: "June 2026",
    image: G("/wp-content/uploads/2026/06/web-post-swimming_result.webp"),
    text: "Records tumbled at the inter-house swimming gala as pupils from across the school competed with superb team spirit.",
  },
  {
    title: "Year 6 Final Assembly",
    category: "Primary",
    date: "June 2026",
    image: G("/wp-content/uploads/2026/06/web-post-year-6-final-assembly_result.webp"),
    text: "Year 6 bid a fond farewell to the Primary School with a moving final assembly celebrating their journey from Reception.",
  },
  {
    title: "TEDx Youth at Grange",
    category: "Enrichment",
    date: "February 2026",
    image: G("/wp-content/uploads/2026/02/tedx.jpg"),
    text: "Ideas worth spreading — pupils took the TEDx stage to share bold thinking on innovation, community and the future.",
  },
  {
    title: "Grange Day Celebrations",
    category: "Community",
    date: "March 2026",
    image: G("/wp-content/uploads/2026/03/web4.jpg"),
    text: "The whole Grange family came together for Grange Day — a vibrant celebration of our heritage, culture and community spirit.",
  },
];

export const GALLERY = [
  { image: G("/wp-content/uploads/2026/05/IMG_8441_result.webp"), label: "Learning in Action" },
  { image: G("/wp-content/uploads/2026/06/IMG_7803_result-scaled.webp"), label: "School Life" },
  { image: G("/wp-content/uploads/2026/05/IMG_9646_result-scaled.webp"), label: "Enrichment" },
  { image: G("/wp-content/uploads/2026/03/web1.jpg"), label: "Grange Moments" },
  { image: G("/wp-content/uploads/2026/03/web7.jpg"), label: "Celebrations" },
  { image: G("/wp-content/uploads/2026/03/web9.jpg"), label: "Community" },
  { image: G("/wp-content/uploads/2026/03/web8.jpg"), label: "Creativity" },
  { image: G("/wp-content/uploads/2026/03/web6.jpg"), label: "Together" },
];

export const LEADERSHIP = [
  { name: "Richard McMahon", role: "Head of School", image: G("/wp-content/uploads/2026/06/McMahon_result.webp") },
  { name: "Femi Olabisi", role: "Head of School Operations", image: G("/wp-content/uploads/2026/07/femi316340.png") },
  { name: "Sunday Sola-Oloyede", role: "Head of Secondary / Boarding", image: G("/wp-content/uploads/2026/08/tury_result.webp") },
  { name: "Kelechi Igbokwe", role: "Head of Primary", image: G("/wp-content/uploads/2026/06/Kelechi-IGBOKWE_result.webp") },
];

export const FAQS = [
  {
    q: "What ages does Grange School accept?",
    a: "Grange School is open to all children from age 2 years 6 months to 16 years — from Nursery through to Year 11 (IGCSE).",
  },
  {
    q: "What curriculum does the school follow?",
    a: "We deliver the National Curriculum of England and the Cambridge (CIE) curriculum, culminating in the International General Certificate of Secondary Education (IGCSE).",
  },
  {
    q: "Is there an application fee?",
    a: "Yes, there is an application fee payable to Grange School when submitting an application. Please contact the Admissions Office for the current fee schedule and payment details.",
  },
  {
    q: "Does the school accept students throughout the school year?",
    a: "Students can start at any date before the mid-term break of the Lent term. Applications at later times are considered on an individual basis. New students usually start on Mondays.",
  },
  {
    q: "What are the school hours?",
    a: "The school opens for drop-off at 07:00. The school day begins at 07:40 and ends at 15:15. Hours are the same for the Primary and Secondary phases.",
  },
  {
    q: "Does the school have a bus service?",
    a: "Yes — Grange School runs a bus service serving both the Island and the mainland.",
  },
  {
    q: "Is my child required to speak perfect English before admission?",
    a: "No. We welcome non-native speakers of English and provide support through EAL (English as an Additional Language) and a programme of Intensive English.",
  },
  {
    q: "What qualification will my child leave with?",
    a: "Pupils leave Grange with the International General Certificate of Secondary Education (IGCSE, CIE) — accepted by prestigious A Level and IB colleges in the UK, USA and worldwide.",
  },
  {
    q: "Is learning support available?",
    a: "Yes. The special educational needs of students with specific learning difficulties are addressed either individually or in small groups, alongside personalised programmes of support.",
  },
];

export const ACCREDITATIONS = ["COBIS", "CIS", "IAPS", "AGBIS", "AISEN", "Cambridge Pathway"];

export const CONTACT = {
  address: "2 Harold Shodipo Crescent, GRA Ikeja, Lagos, Nigeria",
  email: "info@grangeschool.com",
  admissions: "admissions@grangeschool.com",
  phone: "+234 (0)1 270 6046",
  hours: "Mon – Fri · 7:00am – 4:00pm",
};

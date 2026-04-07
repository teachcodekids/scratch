import React, { useState } from "react";
import {
  Play,
  Monitor,
  Tablet,
  ArrowLeft,
  Code,
  ChevronRight,
  Download,
  Info,
  Gamepad2,
  Star,
  Smile,
} from "lucide-react";

// ==========================================
// ส่วนสำหรับแก้ไขข้อมูลโปรเจค (แก้ข้อความ รูป ลิงก์ ที่นี่)
// ==========================================
const projectsData = [
  {
    id: 1,
    title: "โปรเจค 1: รถแข่ง (Racing car)",
    shortDesc: "ควบคุมรถแข่งในสนาม โดยห้ามหลุดออกนอกถนน",
    fullDesc:
      "ขับรถให้ครบเส้นทางในสนามอย่างปลอดภัยและรวดเร็วที่สุด ฝึกการควบคุมรถให้แม่นยำ เข้าโค้งให้ดี และพยายามลดเวลาในแต่ละรอบให้ดีกว่าเดิม",
    howToPlay:
      "ใช้ปุ่มลูกศรควบคุมรถ (ขึ้น=ไปหน้า ลง=ถอย ซ้าย/ขวา=เลี้ยว) ห้ามออกนอกถนน ไม่งั้นจะกลับจุดเริ่มต้น พยายามทำเวลาให้เร็วที่สุด",
    imageCover:
      "https://lh3.googleusercontent.com/u/0/d/1lL9JkOXkCg5El_Y3g8tkTbd3TXn-xt-t",
    videoUrl:
      "https://drive.google.com/file/d/1HQqLA6h_ZjfC-fxZcrA-A8dbW2RSP4HW/preview",
    linkPc:
      "https://drive.google.com/file/d/1YA5a01tJT2cisXAbsrM0lXAbJ2KvfMuv/view?usp=sharing",
    linkTablet: "#",
  },
  {
    id: 2,
    title: "โปรเจค 2: ผู้รุกรานอวกาศ (Space Invaders)",
    shortDesc: "บังคับยายและยิงเอเลี่ยนในอวกาศ ก่อนที่จะโดนโจมตี",
    fullDesc:
      "บังคับยานอวกาศให้ยิงศัตรูให้ได้คะแนนมากที่สุด ฝึกความไวในการกดปุ่มและเล็งเป้า พร้อมทั้งหลบการโจมตีและพยายามเอาชีวิตรอดให้นานที่สุด",
    howToPlay:
      "ใช้ปุ่มซ้าย–ขวาเลื่อนยาน และกดปุ่มเว้นวรรคเพื่อยิงศัตรู ยิงให้โดนเพื่อเก็บคะแนน",
    imageCover:
      "https://lh3.googleusercontent.com/u/0/d/18db3BSCkslOYOjSL9Dnpy2NDyd9pKl3G",
    videoUrl:
      "https://drive.google.com/file/d/16ApH0BpeaB6zUZ0y2qxsh3WntO8MX3S-/preview",
    linkPc:
      "https://drive.google.com/file/d/1X-G9aV2OoQVojRW6FPIpbijgKZGnIQmz/view?usp=drive_link",
    linkTablet: "#",
  },
  {
    id: 3,
    title: "โปรเจค 3: หุ่นยนต์ฝ่าอุปสรรค (Robot Dodge)",
    shortDesc:
      "หุ่นยนต์น้อยต้องหลบเลเซอร์ที่ยิงมาเพื่อเก็บคะแนนให้ได้เยอะที่สุด!",
    fullDesc:
      "ต้องใช้ทั้งความไวในการหลบหลีกเลเซอร์ที่ยิงมาและการคาดเดาทิศทางของมัน ทำให้เราต้องมีสมาธิและความเร็วเพื่อไม่ให้โดนโจมตีและทำคะแนนให้ได้เยอะที่สุด",
    howToPlay:
      "ใช้เม้าส์ควบคุมหุ่นยนต์ไปมาเพื่อหลบเลเซอร์ที่ยิงมา อย่าให้หุ่นยนต์โดนเลเซอร์เด็ดขาด เพราะถ้าโดนจะต้องเริ่มใหม่ พยายามหลบให้ทันและเก็บคะแนนให้ได้มากที่สุดค่ะ",
    imageCover:
      "https://lh3.googleusercontent.com/u/0/d/1Q84yJyZKjA3lEQUQh58dEqcFUuyOwzjH",
    videoUrl:
      "https://drive.google.com/file/d/1gx-LydptdymwIsZNno-0v2rn0Hb4OPvA/preview",
    linkPc:
      "https://drive.google.com/file/d/16nBh-gEPn9stIugcxRoZWL9zEmaIjLNH/view?usp=drive_link",
    linkTablet: "#",
  },
  {
    id: 4,
    title: "โปรเจค 4: ส่องแล้วหา (Flashlight)",
    shortDesc: "ต้องใช้ไฟฉายส่องหาขวดวิเศษที่ซ่อนอยู่ แล้วคลิกมันเมื่อเจอ",
    fullDesc:
      "ต้องตื่นตัวตลอดเวลา เพราะขวดวิเศษจะซ่อนตัวอยู่ในที่มืด ต้องส่องไฟหามันให้เจอและคลิกให้ทัน ยังมีแมวที่คอยวิ่งไปมาเพิ่มความท้าทายอีกด้วย",
    howToPlay:
      "ใช้เม้าส์เลื่อนไฟฉายไปหาขวดวิเศษที่ซ่อนอยู่ เมื่อเจอแล้วให้คลิกที่ขวดทันทีเพื่อเก็บคะแนน ระวังแมวน้อยที่คอยขัดขวางการหาขวดของเรา อย่าปล่อยให้มันมาขัดจังหวะนะ",
    imageCover:
      "https://lh3.googleusercontent.com/u/0/d/11-fYPcyKm5HLo93SI4iSQYf7GnXwlPjh",
    videoUrl:
      "https://drive.google.com/file/d/1jiBA7sGtOkXqrf308J1HDqUDN1EI6nff/preview",
    linkPc:
      "https://drive.google.com/file/d/1vqR5S6su_SEXYLwlKTpbundBW-M8pUG5/view?usp=drive_link",
    linkTablet: "#",
  },
  {
    id: 5,
    title: "โปรเจค 5: ผจญภัยล่าขุมทรัพย์ (Treasure Hunt)",
    shortDesc:
      "กัปตันเรือที่ต้องออกเดินทางหาสมบัติพร้อมหลบเรือโจรสลัดและเกาะที่ขวางทางไป",
    fullDesc:
      "ต้องใช้ทักษะในการควบคุมเรือด้วยเม้าส์ ขณะเดียวกันก็ต้องหลบหลีกเรือโจรสลัดและเกาะอันตรายที่ขวางทาง การไปถึงจุดหมายได้โดยไม่ชนจะทำให้เรารู้สึกเหมือนเป็นกัปตันที่เก่งมากๆ เลย",
    howToPlay:
      "ใช้เม้าส์ในการควบคุมเรือไปตามทางที่ต้องการ ระวังไม่ให้ชนกับเกาะหรือเรือโจรสลัดที่อยู่ในทะเล พยายามไปให้ถึงจุดหมายโดยไม่ให้เรือได้รับความเสียหายค่ะ!",
    imageCover:
      "https://lh3.googleusercontent.com/u/0/d/1umlqU3dnCxrpQaN3GpCpZkDJ44FDOqm_",
    videoUrl:
      "https://drive.google.com/file/d/18tG040dwwxt7hDyoi9tjLTUXkhlq7I6a/preview",
    linkPc:
      "https://drive.google.com/file/d/1r2BPP45Esk4WcyzQKVxJDp3bSBivWXrj/view?usp=drive_link",
    linkTablet: "#",
  },
  {
    id: 6,
    title: "โปรเจค 6: ระเบิดซอมบี้ (Zombie invasion)",
    shortDesc:
      "โลกเต็มไปด้วยซอมบี้ที่บุกเข้ามาทุกทิศทาง ต้องยิงเพื่อหยุดการรุกรานนี้ให้ได้",
    fullDesc:
      "ต้องใช้ความเร็วในการเล็งและยิงซอมบี้ที่บุกมาไม่หยุด การใช้เม้าส์ควบคุมทิศทางทำให้เล่นง่ายและสนุกยิ่งขึ้น!",
    howToPlay:
      "ใช้เม้าส์ในการควบคุมทิศทางตัวละครและเล็งไปที่ซอมบี้ที่กำลังเข้ามา กดคลิกเม้าส์เพื่อยิงกระสุนไปที่ซอมบี้ พยายามทำลายมันให้หมดก่อนที่มันจะมาถึงตัวคุณ และอย่าลืมเก็บคะแนนให้มากที่สุดนะคะ",
    imageCover:
      "https://lh3.googleusercontent.com/u/0/d/1iqypKMKxF8He20zlbuG2srVEonSlhLws",
    videoUrl:
      "https://drive.google.com/file/d/1e_K8yeiaM2b2FH1VAKo7ofDTsre2Rtjt/preview",
    linkPc:
      "https://drive.google.com/file/d/1f7uJI__9ZYlrkiW0MQXqDtvGZdRdSivF/view?usp=drive_link",
    linkTablet: "#",
  },
  {
    id: 7,
    title: "โปรเจค 7: งูน้อยจอมหิว (Snake Bite)",
    shortDesc: "งูน้อยต้องกินแอปเปิ้ลให้ได้เยอะๆ เพื่อให้หางยาวขึ้น",
    fullDesc:
      "ชวนเพื่อนมาประลองฝีมือในเกมปิงปองสุดคลาสสิก เรียนรู้การทำให้ลูกบอลสะท้อนขอบจอและแป้นรับลูกแบบสมจริง",
    howToPlay:
      "ใช้ปุ่มลูกศรในการควบคุมทิศทางของงูน้อย กินแอปเปิ้ลที่อยู่ในเกมให้ได้เยอะๆ เมื่อกินแอปเปิ้ลจะทำให้หางยาวขึ้น",
    imageCover:
      "https://lh3.googleusercontent.com/u/0/d/1bRiYcnf5tNIYW-8kROi4lKdWHaKjnEos",
    videoUrl:
      "https://drive.google.com/file/d/1rpeuTso6Rp5Ly0cqeKWjYyTWBrxq2TJG/preview",
    linkPc:
      "https://drive.google.com/file/d/1W9hN-4uTgdHUxAYb0rke9tsEQXiTMSwg/view?usp=drive_link",
    linkTablet: "#",
  },
  {
    id: 8,
    title: "โปรเจค 8: นักเตะแข้งทอง (FOOTBALL)",
    shortDesc:
      "ต้องควบคุมบอลและทำประตูให้ได้ แต่ระวังอย่าให้ทีมคู่แข่งแย่งบอลไป",
    fullDesc:
      "ต้องใช้ทักษะในการควบคุมบอลให้ไปถึงประตูของคู่แข่ง โดยต้องหลบทีมคู่แข่งที่พยายามแย่งบอลไป การทำประตูให้ได้ทำให้รู้สึกเหมือนเป็นนักเตะจริงๆ เลย",
    howToPlay:
      "ใช้ปุ่มลูกศรเพื่อควบคุมตัวละครของคุณและเลี้ยงบอลไปที่ประตูคู่แข่ง พยายามหลบผู้เล่นของทีมคู่แข่งที่พยายามแย่งบอลไป เมื่อถึงประตูแล้วให้เตะบอลเข้าไปทำประตูเพื่อคะแนน",
    imageCover:
      "https://lh3.googleusercontent.com/u/0/d/1aaObGxXLoIeaciPTVnk6hcq7Ra_7glfy",
    videoUrl:
      "https://drive.google.com/file/d/11WGUxh6DQPXWL44x5qUr9T2_Oy5CtqSv/preview",
    linkPc:
      "https://drive.google.com/file/d/1y8a8sqBgCkKyxSlEZe-vzJO9VDFyeGR4/view?usp=drive_link",
    linkTablet: "#",
  },
  {
    id: 9,
    title: "โปรเจค 9: ตกปลามหาสมุทร (Go Fish)",
    shortDesc: "ควบคุมเรือไปหาปลาที่ว่ายน้ำไปมา และใช้เบ็ดตกปลาให้ได้คะแนน",
    fullDesc:
      "ไม่เพียงแค่ควบคุมเรือไปหาปลา แต่ยังต้องจับจังหวะและกด space bar ให้ตรงเวลาเพื่อให้เบ็ดทำงานได้ ปลาในน้ำจะว่ายไปมา ทำให้คุณต้องปรับเรือและเบ็ดให้ตรงกับปลาที่ว่ายน้ำอยู่ เพื่อให้ตกปลาได้เยอะๆ และทำคะแนนให้สูง!",
    howToPlay:
      "ใช้ปุ่มลูกศรในการควบคุมเรือไปหาปลาที่กำลังว่ายน้ำไปมาบนผิวน้ำ เมื่อเห็นปลาที่เหมาะสม กด space bar เพื่อให้เบ็ดตกปลา พยายามตกปลาให้ได้เยอะๆ โดยระวังไม่ให้เบ็ดติดกับสิ่งอื่น และเก็บคะแนนให้ได้มากที่สุดค่ะ!",
    imageCover:
      "https://lh3.googleusercontent.com/u/0/d/13uKDdg_F3qR9w-hZHaiWnE2EpiDmQOP3",
    videoUrl:
      "https://drive.google.com/file/d/1FfA1S-z99hnnQ3S1iw_VGiqapQrSAGBH/preview",
    linkPc:
      "https://drive.google.com/file/d/1pQvVVB8WinzfTBOJXugVb0VnUPkwetib/view?usp=drive_link",
    linkTablet: "#",
  },
  {
    id: 10,
    title: "โปรเจค 10: หลบหลีกสุดขอบจักรวาล (Space Dodge)",
    shortDesc:
      "ควบคุมยานให้หลบหลีกดาวบนอวกาศ พร้อมควบคุมแรงมุ่งหมายเพื่อไปยังจุดปลอดภัย",
    fullDesc:
      "จะต้องใช้ทักษะในการควบคุมยาน โดยมีการปรับแรงมุ่งหมายเพื่อหลบหลีกดาวเล็กและใหญ่ที่มาพร้อมกับการเพิ่มระดับความท้าทาย หากยานโดนดวงดาว เกมจะจบทันที",
    howToPlay:
      "ใช้ลูกศรควบคุมทิศทางของยานไปในทิศทางที่ต้องการ โดยจะต้องหลบหลีกดวงดาว (สีเหลือง) ที่พยายามขวางทาง ไม่ให้ยานไปชน และหลีกเลี่ยงไม่ให้เรือออกนอกเส้นทางนะคะ!",
    imageCover:
      "https://lh3.googleusercontent.com/u/0/d/1GwCSsAZaC6i1Pc8-rr2ugyoqseVIHF1I",
    videoUrl:
      "https://drive.google.com/file/d/1o-zg5AF3pJ3DOiYbcZL_yd-SZqUT-XJf/preview",
    linkPc:
      "https://drive.google.com/file/d/1JSsiRxKT4A64Zkf38zdd-1aA6Hcd0Ddp/view?usp=drive_link",
    linkTablet: "#",
  },
];

// ==========================================

export default function App() {
  const [view, setView] = useState("dashboard");
  const [activeProject, setActiveProject] = useState(null);

  const goProject = (project) => {
    setActiveProject(project);
    setView("project");
    window.scrollTo(0, 0);
  };

  const goDashboard = () => {
    setView("dashboard");
    setActiveProject(null);
    window.scrollTo(0, 0);
  };

  const Header = () => (
    <header className="bg-black text-white p-3 md:p-4 sticky top-0 z-50 border-b-4 border-orange-500 shadow-sm">
      <div className="max-w-4xl mx-auto flex justify-between items-center px-2 sm:px-4">
        <div
          className="flex items-center gap-2 text-white font-extrabold text-lg sm:text-xl tracking-wider cursor-pointer transform hover:scale-105 transition-transform group"
          onClick={goDashboard}
        >
          <div className="bg-white text-black p-1 sm:p-1.5 rounded-full group-hover:animate-bounce">
            <Code size={18} className="font-black sm:w-5 sm:h-5" />
          </div>
          <span>TEACHCODE</span>
        </div>
      </div>
    </header>
  );

  // กำหนดฟอนต์แบบน่ารัก (Prompt)
  const fontStyle = { fontFamily: "'Prompt', sans-serif" };

  if (view === "dashboard") {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col" style={fontStyle}>
        <style>
          {`@import url('https://fonts.googleapis.com/css2?family=Prompt:wght@300;400;500;600;700;800&display=swap');`}
        </style>
        <Header />

        {/* แบนเนอร์ต้อนรับแบบรูปภาพ */}
        <div className="mx-auto w-full max-w-4xl px-0 sm:px-0 mb-4 sm:mb-6">
          <img
            src="https://lh3.googleusercontent.com/d/1way41qwIhtl1ykAnd3A4kGR52OhD9RiI"
            alt="Welcome Banner"
            className="w-full h-auto object-cover rounded-b-[2rem] sm:rounded-b-3xl shadow-sm"
          />
        </div>

        <main className="w-full max-w-4xl mx-auto px-4 sm:px-6 py-2 sm:py-4 flex-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5">
            {projectsData.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-[1.5rem] overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col group cursor-pointer border-2 border-gray-100 hover:border-orange-400"
                onClick={() => goProject(project)}
              >
                <div className="h-32 sm:h-36 bg-black flex items-center justify-center relative overflow-hidden">
                  {project.imageCover ? (
                    <img
                      src={project.imageCover}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  ) : (
                    <>
                      <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-orange-600 opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
                      <Code
                        size={36}
                        className="text-orange-500 transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-500"
                      />
                    </>
                  )}
                  {/* ป้ายเลขโปรเจคแบบกลม */}
                  <div className="absolute top-2 right-2 bg-white text-orange-500 text-[10px] sm:text-xs font-extrabold w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center rounded-full shadow-sm border-2 border-orange-500 transform group-hover:scale-110 transition-transform">
                    {project.id}
                  </div>
                </div>

                <div className="p-4 sm:p-5 flex-1 flex flex-col">
                  <h3 className="font-extrabold text-sm sm:text-base text-black mb-1 sm:mb-2 line-clamp-2 leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-xs sm:text-sm mb-3 sm:mb-4 flex-1 line-clamp-2 font-medium">
                    {project.shortDesc}
                  </p>
                  <button className="w-full bg-black text-white group-hover:bg-orange-500 font-bold py-2 sm:py-2.5 px-3 rounded-full text-xs sm:text-sm transition-colors duration-300 flex items-center justify-center gap-1 shadow-sm mt-auto">
                    เริ่มเรียนเลย 🚀{" "}
                    <ChevronRight size={14} className="sm:w-4 sm:h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    );
  }

  if (view === "project" && activeProject) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col" style={fontStyle}>
        <style>
          {`@import url('https://fonts.googleapis.com/css2?family=Prompt:wght@300;400;500;600;700;800&display=swap');`}
        </style>
        <Header />

        {/* แถบนำทางกลับ รองรับมือถือ */}
        <div className="bg-white border-b-2 border-gray-100 sticky top-[52px] sm:top-[60px] z-40 rounded-b-2xl shadow-sm">
          <div className="max-w-4xl mx-auto p-2 sm:p-3 px-4 sm:px-6">
            <button
              onClick={goDashboard}
              className="flex items-center gap-1 text-gray-500 hover:text-orange-500 font-bold text-xs sm:text-sm transition-colors w-fit bg-gray-50 hover:bg-orange-50 px-3 py-1.5 sm:py-2 rounded-full"
            >
              <ArrowLeft size={14} className="sm:w-4 sm:h-4" />{" "}
              กลับไปหน้าเมนูหลัก
            </button>
          </div>
        </div>

        <main className="w-full max-w-4xl mx-auto px-4 sm:px-6 py-4 sm:py-6 flex-1">
          <div className="mb-4 sm:mb-6 text-center bg-white p-4 sm:p-5 rounded-[1.5rem] border-2 border-orange-400 shadow-sm relative overflow-hidden">
            <Star
              size={60}
              className="absolute -right-4 -top-4 sm:-right-6 sm:-top-6 text-orange-100 opacity-60 transform rotate-12 sm:w-20 sm:h-20"
            />
            <span className="bg-black text-white px-3 py-1 rounded-full font-bold text-[10px] sm:text-xs tracking-wider uppercase mb-1 sm:mb-2 inline-block shadow-sm">
              PROJECT {activeProject.id}
            </span>
            <h1 className="text-lg sm:text-xl md:text-3xl font-extrabold text-black leading-snug sm:leading-tight relative z-10 px-2">
              {activeProject.title}
            </h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            {/* คอลัมน์ซ้าย */}
            <div className="md:col-span-2 space-y-4 sm:space-y-5">
              {/* ส่วนวิดีโอตัวอย่าง */}
              <div className="bg-black rounded-[1.5rem] overflow-hidden shadow-md border-2 border-black group">
                <div className="bg-gray-900 p-2 sm:p-3 flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <Play
                      size={14}
                      className="text-orange-500 fill-orange-500 sm:w-4 sm:h-4"
                    />
                    <h2 className="text-white font-bold text-xs sm:text-sm">
                      วิดีโอตัวอย่างผลลัพธ์เกม
                    </h2>
                  </div>
                  {/* เพิ่มปุ่มเปิดวิดีโอหน้าต่างใหม่เผื่อเบราว์เซอร์บล็อก iframe */}
                  {activeProject.videoUrl && (
                    <a
                      href={activeProject.videoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[10px] sm:text-xs bg-gray-800 hover:bg-orange-500 text-white px-3 py-1 rounded-full transition-colors flex items-center gap-1 border border-gray-700"
                    >
                      ดูวิดีโอเต็มจอ ↗
                    </a>
                  )}
                </div>

                <div className="aspect-video relative bg-black flex items-center justify-center cursor-pointer overflow-hidden">
                  {activeProject.videoUrl ? (
                    <iframe
                      src={activeProject.videoUrl}
                      className="absolute inset-0 w-full h-full border-0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      title={`Video Preview for ${activeProject.title}`}
                    ></iframe>
                  ) : (
                    <>
                      <img
                        src={`https://api.placeholder.com/800x450/222222/FF6600?text=Video+Preview+Project+${activeProject.id}`}
                        alt="Video Preview Placeholder"
                        className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-50 transition-opacity duration-300"
                      />
                      <div className="w-12 h-12 sm:w-14 sm:h-14 bg-orange-500 rounded-full flex items-center justify-center text-white shadow-[0_0_15px_rgba(255,102,0,0.8)] transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 z-10 border-2 border-white">
                        <Play
                          size={20}
                          className="ml-1 fill-white sm:w-6 sm:h-6"
                        />
                      </div>
                    </>
                  )}
                </div>
              </div>

              {/* ส่วนคำอธิบายเกมน่าสนใจ */}
              <div className="bg-white rounded-[1.5rem] p-4 sm:p-5 shadow-sm border-2 border-orange-100 relative overflow-hidden">
                <div className="flex items-center gap-2 mb-2 sm:mb-3 relative z-10">
                  <div className="bg-orange-100 p-1.5 rounded-full">
                    <Info size={16} className="text-orange-500 sm:w-5 sm:h-5" />
                  </div>
                  <h2 className="text-base sm:text-lg font-extrabold text-black">
                    เกมนี้น่าสนใจยังไง? ✨
                  </h2>
                </div>
                <p className="text-gray-700 text-xs sm:text-sm leading-relaxed relative z-10 font-medium">
                  {activeProject.fullDesc}
                </p>
              </div>

              {/* ส่วนวิธีการเล่น */}
              <div className="bg-white rounded-[1.5rem] p-4 sm:p-5 shadow-sm border-2 border-gray-100">
                <div className="flex items-center gap-2 mb-2 sm:mb-3">
                  <div className="bg-gray-100 p-1.5 rounded-full">
                    <Gamepad2 size={16} className="text-black sm:w-5 sm:h-5" />
                  </div>
                  <h2 className="text-base sm:text-lg font-extrabold text-black">
                    วิธีการเล่น 🎮
                  </h2>
                </div>
                <p className="text-gray-700 text-xs sm:text-sm leading-relaxed bg-orange-50 p-3 sm:p-4 rounded-xl border border-orange-100 font-medium break-words">
                  {activeProject.howToPlay}
                </p>
              </div>
            </div>

            {/* คอลัมน์ขวา: โหลดคู่มือ */}
            <div className="space-y-4 sm:space-y-5">
              <div className="bg-orange-500 rounded-[1.5rem] p-4 sm:p-5 text-center text-white shadow-md border-2 border-orange-400">
                <h2 className="text-base sm:text-lg font-extrabold mb-1">
                  ดาวน์โหลดคู่มือ 📚
                </h2>
                <p className="text-orange-100 text-[10px] sm:text-xs mb-3 sm:mb-4 font-medium">
                  เลือกคู่มือตามอุปกรณ์ที่ใช้นะคะ
                </p>

                <div className="space-y-3">
                  {/* ปุ่มโหลดคู่มือ PC */}
                  <a
                    href={activeProject.linkPc}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center justify-center bg-black hover:bg-gray-900 text-white p-3 sm:p-4 rounded-2xl transition-all duration-300 transform hover:-translate-y-1 shadow-sm hover:shadow-md border border-black hover:border-gray-700"
                  >
                    <div className="flex items-center justify-center gap-2 mb-1">
                      <Monitor
                        size={20}
                        className="text-orange-500 sm:w-6 sm:h-6"
                      />
                    </div>
                    <span className="block font-extrabold text-xs sm:text-sm mb-1 text-center">
                      คู่มือฉบับคอมพิวเตอร์
                    </span>
                    <span className="block text-[10px] sm:text-xs text-gray-400 mb-2 text-center">
                      (PC / Mac / โน้ตบุ๊ก)
                    </span>
                    <div className="inline-flex items-center justify-center gap-1 bg-orange-500 hover:bg-orange-600 text-white font-bold text-[10px] sm:text-xs py-1.5 px-3 rounded-full w-full max-w-[180px] transition-colors">
                      <Download size={12} className="sm:w-3.5 sm:h-3.5" />{" "}
                      เปิดไฟล์ PDF
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }

  return null;
}

// import Alumini from './images/lfghjbg.png'

const contentData = {
  summer: {
    title: "Join Summer Internship IT Program",
    description: `SaturnxNexus presents an exclusive Summer Internship Program for students from technical backgrounds who are eager to kickstart their career in IT. This program is specifically tailored for Engineering, BCA, MCA, and B.Sc IT students. You'll get hands-on training in Web Development, Mobile App Development, Data Analytics, and more.
Our experts with 5+ years of industry experience will guide you through live projects, industry tools, and job-oriented skills. This is the perfect opportunity to bridge the gap between academic knowledge and practical IT skills.

Perks:

Certification from SaturnxNexus

Live Project Experience

Placement Assistance

Resume Building Sessions

`,
    img: "https://img.freepik.com/free-photo/career-employment-occupation-recruitment-work-concept_53876-128104.jpg?t=st=1745479697~exp=1745483297~hmac=3996090bb7899945aefb05856af22a859dcfa012444a9879084b3a86918792a7&w=1060",
    enroll: "Enroll Now",
  },
  winter: {
    title: "Join Winter Internship IT Program",
    description: `SaturnxNexus offers a Winter Internship Program designed for students who want to utilize their winter break by gaining real-world IT skills. Whether you're preparing for placements or simply want to build a strong portfolio, this program is for you!

The internship covers HTML, CSS, JavaScript, React.js, and backend basics — giving you a solid foundation in Full Stack Web Development.

Perks:

Flexible Timing

Online/Offline Mode

Certificate of Completion

Portfolio Project

`,
    img: "https://img.freepik.com/free-photo/career-employment-occupation-recruitment-work-concept_53876-128104.jpg?t=st=1745479697~exp=1745483297~hmac=3996090bb7899945aefb05856af22a859dcfa012444a9879084b3a86918792a7&w=1060",

    enroll: "Enroll Now",
  },
  workshop: {
    title: "Attend Our Expert Workshops",
    description: `Take part in our skill-packed workshops organized regularly by SaturnxNexus. These workshops are built to give you exposure to cutting-edge technologies and trends in IT.

Topics include:

Web Development Crash Courses

UI/UX Design Principles

Python for Data Science

Git & GitHub for Collaboration`,
    img: "https://img.freepik.com/free-photo/career-employment-occupation-recruitment-work-concept_53876-128104.jpg?t=st=1745479697~exp=1745483297~hmac=3996090bb7899945aefb05856af22a859dcfa012444a9879084b3a86918792a7&w=1060",
    enroll: "Register Now",
  },
  collab: {
    title: "Collaboration With Colleges",
    description: `SaturnxNexus believes in building a stronger IT ecosystem by collaborating with colleges and universities. Our collaboration programs aim to provide training, live projects, faculty development sessions, and industry-relevant exposure to students and faculty members.

We provide:

Customized Training Programs

Campus Workshops & Seminars

Technical Bootcamps

MoU with College for Placements

Get in touch with us to bring SaturnxNexus to your campus.

`,
    img: "https://img.freepik.com/free-photo/career-employment-occupation-recruitment-work-concept_53876-128104.jpg?t=st=1745479697~exp=1745483297~hmac=3996090bb7899945aefb05856af22a859dcfa012444a9879084b3a86918792a7&w=1060",
    enroll: "Partner With Us",
  },
};

function showContent(type) {
  const data = contentData[type];

  document.getElementById("content").innerHTML = `
      <div class="text">
        <h2>${data.title}</h2>
        <p>${data.description}</p>
        <a class="enroll-btn" href="#">${data.enroll}</a><br />
      </div>
      <div>
        <img src="${data.img}" alt="${type} image" />
      </div>
    `;
}

const internships = [
  {
    heading: "Summer Internship 2025",
    description:
      "Join industry specific and practical oriented internship and make your career in IT industry. We have experts for each technology. We guarantee that you will feel more confident after the completion of industry level internship and training at Webgurukul...",
    image: "summer.jpg",
  },
  {
    heading: "Winter Internship 2025",
    description:
      "Enhance your skills during the winter break with our industry-level winter internship program. Learn from real projects and expert mentors.",
    image: "winter.jpg",
  },
  {
    heading: "Workshop",
    description:
      "Participate in hands-on workshops where you work on live problems and projects. Short, effective, and full of learning.",
    image: "workshop.jpg",
  },
  {
    heading: "Collaboration Program",
    description:
      "Collaborate with professionals and real-time teams to work on client-based projects. A great way to gain teamwork experience.",
    image: "collab.jpg",
  },
];

let currentIndex = 0;

function showNext() {
  currentIndex = (currentIndex + 1) % internships.length;

  document.getElementById("internship-heading").innerText =
    internships[currentIndex].heading;
  document.getElementById("internship-description").innerText =
    internships[currentIndex].description;
  document.getElementById("internship-img").src =
    internships[currentIndex].image;
}

const descriptionParagraphs = contentData.summer.description
  .split("\n\n") // Double newlines = paragraph breaks
  .map(para => `<p>${para}</p>`)
  .join("");

  console.log(descriptionParagraphs);

type CvData = {
  name: {
    first: string;
    middle: string;
    last: string;
  };
  phoneNumber: string;
  email: string;
  address: string;
  city: string; 
  country: string;
  profession: string;
  website: string;
  about: string;
  socialLinks: {
    facebook: string;
    twitter: string;
    linkedin: string;
    instagram: string;
    github: string;
    youtube: string;
  };
  education: {
    school: string;
    degree: string;
    fieldOfStudy: string;
    grade: string;
    description: string;
    startDate: string;
    endDate: string;
  }[];
  experience: {
    company: string;
    position: string;
    startDate: string;
    endDate: string;
    description: string;
  }[];
  skills: {
    skill: string;
    level: string;
    yearsOfExperience: string;
  }[];
};

export default CvData;

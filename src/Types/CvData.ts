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
  state: string;
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
  languages: {
    language: string;
    proficiency: string;
  }[];
  tools: {
    tool: string;
    level: number;
  }[];
  interests: string[];
};

export default CvData;

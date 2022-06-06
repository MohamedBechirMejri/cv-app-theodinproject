import React from "react";
import CvData from "../../Types/CvData";

const Edit = ({
  data,
  setData,
}: {
  data: CvData;
  setData: (data: CvData) => void;
}) => {
  const [firstName, setFirstName] = React.useState(data.name.first);
  const [lastName, setLastName] = React.useState(data.name.last);
  const [middleName, setMiddleName] = React.useState(data.name.middle);
  const [phoneNumber, setPhoneNumber] = React.useState(data.phoneNumber);
  const [email, setEmail] = React.useState(data.email);
  const [address, setAddress] = React.useState(data.address);
  const [city, setCity] = React.useState(data.city);
  const [state, setState] = React.useState(data.state);
  const [country, setCountry] = React.useState(data.country);
  const [profession, setProfession] = React.useState(data.profession);
  const [website, setWebsite] = React.useState(data.website);
  const [about, setAbout] = React.useState(data.about);
  const [facebook, setFacebook] = React.useState(data.socialLinks.facebook);
  const [twitter, setTwitter] = React.useState(data.socialLinks.twitter);
  const [linkedin, setLinkedin] = React.useState(data.socialLinks.linkedin);
  const [instagram, setInstagram] = React.useState(data.socialLinks.instagram);
  const [github, setGithub] = React.useState(data.socialLinks.github);
  const [youtube, setYoutube] = React.useState(data.socialLinks.youtube);
  const [discord, setDiscord] = React.useState(data.socialLinks.discord);
  const [education, setEducation] = React.useState(data.education);
  const [school, setSchool] = React.useState("");
  const [degree, setDegree] = React.useState("");
  const [descriptionEdu, setDescriptionEdu] = React.useState("");
  const [startDateEdu, setStartDateEdu] = React.useState("");
  const [endDateEdu, setEndDateEdu] = React.useState("");
  const [experience, setExperience] = React.useState(data.experience);
  const [company, setCompany] = React.useState("");
  const [position, setPosition] = React.useState("");
  const [startDateExp, setStartDateExp] = React.useState("");
  const [endDateExp, setEndDateExp] = React.useState("");
  const [descriptionExp, setDescriptionExp] = React.useState("");
  const [skills, setSkills] = React.useState(data.skills);
  const [skill, setSkill] = React.useState("");
  const [skillLevel, setSkillLevel] = React.useState(0);
  const [skillYears, setSkillYears] = React.useState("");
  const [languages, setLanguages] = React.useState(data.languages);
  const [language, setLanguage] = React.useState("");
  const [languageProficiency, setLanguageProficiency] = React.useState("");
  const [tools, setTools] = React.useState(data.tools);
  const [tool, setTool] = React.useState("");
  const [toolLevel, setToolLevel] = React.useState(0);
  const [interests, setInterests] = React.useState(data.interests);
  const [interest, setInterest] = React.useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setData({
      name: {
        first: firstName,
        last: lastName,
        middle: middleName,
      },
      phoneNumber: phoneNumber,

      email: email,
      address: address,
      city: city,
      state: state,
      country: country,
      profession: profession,
      website: website,
      about: about,
      socialLinks: {
        facebook: facebook,
        twitter: twitter,
        linkedin: linkedin,
        instagram: instagram,
        github: github,
        youtube: youtube,
        discord: discord,
      },
      education: education,
      experience: experience,
      skills: skills,
      languages: languages,
      tools: tools,
      interests: interests,
    });
  };

  const handleEducationSubmit = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    setEducation([
      ...education,
      {
        school,
        degree,
        description: descriptionEdu,
        startDate: startDateEdu,
        endDate: endDateEdu,
      },
    ]);
    setSchool("");
    setDegree("");
    setDescriptionEdu("");
    setStartDateEdu("");
    setEndDateEdu("");
  };

  const removeEducation = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    index: number
  ) => {
    e.preventDefault();
    const newEducation = [...education];
    newEducation.splice(index, 1);
    setEducation(newEducation);
  };

  const handleExperienceSubmit = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    setExperience([
      ...experience,
      {
        company,
        position,
        startDate: startDateExp,
        endDate: endDateExp,
        description: descriptionExp,
      },
    ]);
    setCompany("");
    setPosition("");
    setStartDateExp("");
    setEndDateExp("");
    setDescriptionExp("");
  };

  const removeExperience = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    index: number
  ) => {
    e.preventDefault();
    const newExperience = [...experience];
    newExperience.splice(index, 1);
    setExperience(newExperience);
  };

  const handleSkillSubmit = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    setSkills([
      ...skills,

      {
        skill: skill,
        level: skillLevel,
        yearsOfExperience: skillYears,
      },
    ]);
    setSkill("");
    setSkillLevel(0);
    setSkillYears("");
  };

  const removeSkill = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    index: number
  ) => {
    e.preventDefault();
    const newSkills = [...skills];
    newSkills.splice(index, 1);
    setSkills(newSkills);
  };

  const handleLanguageSubmit = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    setLanguages([
      ...languages,
      {
        language: language,
        proficiency: languageProficiency,
      },
    ]);
    setLanguage("");
    setLanguageProficiency("");
  };

  const removeLanguage = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    index: number
  ) => {
    e.preventDefault();
    const newLanguages = [...languages];
    newLanguages.splice(index, 1);
    setLanguages(newLanguages);
  };

  const handleToolSubmit = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    setTools([
      ...tools,
      {
        tool: tool,
        level: toolLevel,
      },
    ]);
    setTool("");
    setToolLevel(0);
  };

  const removeTool = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    index: number
  ) => {
    e.preventDefault();
    const newTools = [...tools];
    newTools.splice(index, 1);
    setTools(newTools);
  };

  const handleInterestSubmit = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    setInterests([...interests, interest]);
    setInterest("");
  };

  return (
    <form>
      <div className="">
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          className=""
          id="firstName"
          placeholder="First Name"
          value={firstName}
          onChange={e => setFirstName(e.target.value)}
        />
      </div>
      <div className="">
        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          className=""
          id="lastName"
          placeholder="Last Name"
          value={lastName}
          onChange={e => setLastName(e.target.value)}
        />
      </div>
      <div className="">
        <label htmlFor="middleName">Middle Name</label>
        <input
          type="text"
          className=""
          id="middleName"
          placeholder="Middle Name"
          value={middleName}
          onChange={e => setMiddleName(e.target.value)}
        />
      </div>
      <div className="">
        <label htmlFor="phoneNumber">Phone Number</label>
        <input
          type="text"
          className=""
          id="phoneNumber"
          placeholder="Phone Number"
          value={phoneNumber}
          onChange={e => setPhoneNumber(e.target.value)}
        />
      </div>
      <div className="">
        <label htmlFor="email">Email</label>
        <input
          type="text"
          className=""
          id="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
      </div>
      <div className="">
        <label htmlFor="address">Address</label>
        <input
          type="text"
          className=""
          id="address"
          placeholder="Address"
          value={address}
          onChange={e => setAddress(e.target.value)}
        />
      </div>
      <div className="">
        <label htmlFor="city">City</label>
        <input
          type="text"
          className=""
          id="city"
          placeholder="City"
          value={city}
          onChange={e => setCity(e.target.value)}
        />
      </div>
      <div className="">
        <label htmlFor="state">State</label>
        <input
          type="text"
          className=""
          id="state"
          placeholder="State"
          value={state}
          onChange={e => setState(e.target.value)}
        />
      </div>
      <div className="">
        <label htmlFor="country">Country</label>
        <input
          type="text"
          className=""
          id="country"
          placeholder="Country"
          value={country}
          onChange={e => setCountry(e.target.value)}
        />
      </div>
      <div className="">
        <label htmlFor="profession">Profession</label>
        <input
          type="text"
          className=""
          id="profession"
          placeholder="Profession"
          value={profession}
          onChange={e => setProfession(e.target.value)}
        />
      </div>
      <div className="">
        <label htmlFor="website">Website</label>
        <input
          type="text"
          className=""
          id="website"
          placeholder="Website"
          value={website}
          onChange={e => setWebsite(e.target.value)}
        />
      </div>
      <div className="">
        <label htmlFor="about">About</label>
        <textarea
          className=""
          id="about"
          rows={3}
          placeholder="About"
          value={about}
          onChange={e => setAbout(e.target.value)}
        />
      </div>
      <div className="">
        <label htmlFor="facebook">Facebook</label>
        <input
          type="text"
          className=""
          id="facebook"
          placeholder="Facebook"
          value={facebook}
          onChange={e => setFacebook(e.target.value)}
        />
      </div>
      <div className="">
        <label htmlFor="twitter">Twitter</label>
        <input
          type="text"
          className=""
          id="twitter"
          placeholder="Twitter"
          value={twitter}
          onChange={e => setTwitter(e.target.value)}
        />
      </div>
      <div className="">
        <label htmlFor="linkedin">Linkedin</label>
        <input
          type="text"
          className=""
          id="linkedin"
          placeholder="Linkedin"
          value={linkedin}
          onChange={e => setLinkedin(e.target.value)}
        />
      </div>
      <div className="">
        <label htmlFor="youtube">Youtube</label>
        <input
          type="text"
          className=""
          id="youtube"
          placeholder="Youtube"
          value={youtube}
          onChange={e => setYoutube(e.target.value)}
        />
      </div>
      <div className="">
        <label htmlFor="instagram">Instagram</label>
        <input
          type="text"
          className=""
          id="instagram"
          placeholder="Instagram"
          value={instagram}
          onChange={e => setInstagram(e.target.value)}
        />
      </div>
      <div className="">
        <label htmlFor="github">Github</label>
        <input
          type="text"
          className=""
          id="github"
          placeholder="Github"
          value={github}
          onChange={e => setGithub(e.target.value)}
        />
      </div>
      <div className="">
        <label htmlFor="discord">Discord</label>
        <input
          type="text"
          className=""
          id="discord"
          placeholder="Github"
          value={discord}
          onChange={e => setDiscord(e.target.value)}
        />
      </div>
      <div className="">
        {education.map((edu, i) => {
          return (
            <div key={i}>
              <h3>School: {edu.school}</h3>
              <h3>Degree: {edu.degree}</h3>
              <h3>
                Years: {edu.startDate} - {edu.endDate}
              </h3>
              <p>description: {edu.description}</p>
              <button className="" onClick={e => removeEducation(e, i)}>
                remove
              </button>
            </div>
          );
        })}
        <div>
          <div className="">
            <label htmlFor="school">School</label>
            <input
              type="text"
              className=""
              id="school"
              placeholder="School"
              value={school}
              onChange={e => setSchool(e.target.value)}
            />
          </div>
          <div className="">
            <label htmlFor="degree">Degree</label>
            <input
              type="text"
              className=""
              id="degree"
              placeholder="Degree"
              value={degree}
              onChange={e => setDegree(e.target.value)}
            />
          </div>
          <div className="">
            <label htmlFor="startDate">Start Date</label>
            <input
              type="number"
              className=""
              id="startDate"
              placeholder="Start Date"
              value={startDateEdu}
              onChange={e => setStartDateEdu(e.target.value)}
            />
          </div>
          <div className="">
            <label htmlFor="endDate">End Date</label>
            <input
              type="number"
              className=""
              id="endDate"
              placeholder="End Date"
              value={endDateEdu}
              onChange={e => setEndDateEdu(e.target.value)}
            />
          </div>
          <div className="">
            <label htmlFor="descriptionEdu">Description</label>
            <textarea
              className=""
              id="descriptionEdu"
              rows={3}
              placeholder="Description"
              value={descriptionEdu}
              onChange={e => setDescriptionEdu(e.target.value)}
            />
          </div>
          <button className="" onClick={e => handleEducationSubmit(e)}>
            Add
          </button>
        </div>
      </div>
      <div>
        {experience.map((exp, i) => {
          return (
            <div key={i}>
              <h3>Company: {exp.company}</h3>
              <h3>Position: {exp.position}</h3>
              <h3>
                Years: {exp.startDate} - {exp.endDate}
              </h3>
              <p>description: {exp.description}</p>
              <button className="" onClick={e => removeExperience(e, i)}>
                remove
              </button>
            </div>
          );
        })}
        <div>
          <div className="">
            <label htmlFor="company">Company</label>
            <input
              type="text"
              className=""
              id="company"
              placeholder="Company"
              value={company}
              onChange={e => setCompany(e.target.value)}
            />
          </div>
          <div className="">
            <label htmlFor="position">Position</label>
            <input
              type="text"
              className=""
              id="position"
              placeholder="Position"
              value={position}
              onChange={e => setPosition(e.target.value)}
            />
          </div>
          <div className="">
            <label htmlFor="startDateExp">Start Date</label>
            <input
              type="number"
              className=""
              id="startDateExp"
              placeholder="Start Date"
              value={startDateExp}
              onChange={e => setStartDateExp(e.target.value)}
            />
          </div>
          <div className="">
            <label htmlFor="endDateExp">End Date</label>
            <input
              type="number"
              className=""
              id="endDateExp"
              placeholder="End Date"
              value={endDateExp}
              onChange={e => setEndDateExp(e.target.value)}
            />
          </div>
          <div className="">
            <label htmlFor="descriptionExp">Description</label>
            <textarea
              className=""
              id="descriptionExp"
              rows={3}
              placeholder="Description"
              value={descriptionExp}
              onChange={e => setDescriptionExp(e.target.value)}
            />
          </div>
          <button className="" onClick={e => handleExperienceSubmit(e)}>
            Add
          </button>
        </div>
      </div>
      <div>
        {skills.map((skill, i) => {
          return (
            <div key={i}>
              <h3>Skill: {skill.skill}</h3>
              <h3>Level: {skill.level}</h3>
              <button className="" onClick={e => removeSkill(e, i)}>
                remove
              </button>
            </div>
          );
        })}
        <div>
          <div className="">
            <label htmlFor="skill">Skill</label>
            <input
              type="text"
              className=""
              id="skill"
              placeholder="Skill"
              value={skill}
              onChange={e => setSkill(e.target.value)}
            />
          </div>
          <div className="">
            <label htmlFor="skillLevel">Skill Level</label>
            <input
              type="range"
              min={0}
              max={100}
              className=""
              id="skillLevel"
              placeholder="Skill Level"
              value={skillLevel}
              onChange={e => setSkillLevel(Number(e.target.value))}
            />

            <p>{skillLevel}%</p>
          </div>
          <div className="">
            <label htmlFor="skillYears">Years of Experience</label>
            <input
              type="number"
              className=""
              id="skillYears"
              placeholder="Years of Experience"
              value={skillYears}
              onChange={e => setSkillYears(e.target.value)}
            />
          </div>
          <button className="" onClick={e => handleSkillSubmit(e)}>
            Add
          </button>
        </div>
      </div>
      <div className="">
        {languages.map((language, i) => {
          return (
            <div key={i}>
              <h3>Language: {language.language}</h3>
              <h3>Proficiency: {language.proficiency}</h3>
              <button className="" onClick={e => removeLanguage(e, i)}>
                remove
              </button>
            </div>
          );
        })}
        <div>
          <div className="">
            <label htmlFor="language">Language</label>
            <input
              type="text"
              className=""
              id="language"
              placeholder="Language"
              value={language}
              onChange={e => setLanguage(e.target.value)}
            />
          </div>
          <div className="">
            <label htmlFor="proficiency">Proficiency</label>
            <select
              className=""
              id="proficiency"
              placeholder="Proficiency"
              value={languageProficiency}
              onChange={e => setLanguageProficiency(e.target.value)}
            >
              <option value="Beginner" selected>
                Beginner
              </option>
              <option value="Conversational">Conversational</option>
              <option value="Fluent">Fluent</option>
              <option value="Native">Native</option>
            </select>
          </div>
          <button className="" onClick={e => handleLanguageSubmit(e)}>
            Add
          </button>
        </div>
      </div>
      <div>
        {tools.map((tool, i) => {
          return (
            <div key={i}>
              <h3>Tool: {tool.tool}</h3>
              <h3>Level: {tool.level}</h3>
              <button className="" onClick={e => removeTool(e, i)}>
                remove
              </button>
            </div>
          );
        })}
        <div>
          <div className="">
            <label htmlFor="tool">Tool</label>
            <input
              type="text"
              className=""
              id="tool"
              placeholder="Tool"
              value={tool}
              onChange={e => setTool(e.target.value)}
            />
          </div>
          <div className="">
            <label htmlFor="toolLevel">Tool Level</label>
            <input
              type="range"
              min={0}
              max={100}
              className=""
              id="toolLevel"
              placeholder="Tool Level"
              value={toolLevel}
              onChange={e => setToolLevel(Number(e.target.value))}
            />
            <p>{toolLevel}%</p>
          </div>
          <button className="" onClick={e => handleToolSubmit(e)}>
            Add
          </button>
        </div>
      </div>
    </form>
  );
};

export default Edit;

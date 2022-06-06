import React from "react";
import CvData from "../../Types/CvData";
import FormGroup from "./FormGroup";
import Button from "./Button";

const Edit = ({
  data,
  setData,
  setIsEditing,
}: {
  data: CvData;
  setData: (data: CvData) => void;
  setIsEditing: (isEditing: boolean) => void;
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

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
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
    setIsEditing(false);
  };

  const handleReset = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    setFirstName("");
    setLastName("");
    setMiddleName("");
    setPhoneNumber("");
    setEmail("");
    setAddress("");
    setCity("");
    setState("");
    setCountry("");
    setProfession("");
    setWebsite("");
    setAbout("");
    setFacebook("");
    setTwitter("");
    setLinkedin("");
    setInstagram("");
    setGithub("");
    setYoutube("");
    setDiscord("");
    setEducation([]);
    setSchool("");
    setDegree("");
    setDescriptionEdu("");
    setStartDateEdu("");
    setEndDateEdu("");
    setExperience([]);
    setCompany("");
    setPosition("");
    setStartDateExp("");
    setEndDateExp("");
    setDescriptionExp("");
    setSkills([]);
    setSkill("");
    setSkillLevel(0);
    setSkillYears("");
    setLanguages([]);
    setLanguage("");
    setLanguageProficiency("");
    setTools([]);
    setTool("");
    setToolLevel(0);
    setInterests([]);
    setInterest("");
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

  const removeInterest = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    index: number
  ) => {
    e.preventDefault();
    const newInterests = [...interests];
    newInterests.splice(index, 1);
    setInterests(newInterests);
  };

  return (
    <div className="flex flex-col items-center max-w-3xl p-8 m-auto">
      <form
        autoComplete="off"
        className="flex flex-col items-center justify-center gap-4 p-8 "
      >
        <fieldset className="p-8 border border-black ">
          <legend className="font-bold">Basic Info </legend>{" "}
          <FormGroup
            label="First Name"
            id="firstName"
            value={firstName}
            f={setFirstName}
          />
          <FormGroup
            label="Middle Name"
            id="middleName"
            value={middleName}
            f={setMiddleName}
          />
          <FormGroup
            label="Last Name"
            id="lastName"
            value={lastName}
            f={setLastName}
          />
          <FormGroup
            label="Phone Number"
            id="phoneNumber"
            value={phoneNumber}
            f={setPhoneNumber}
          />
          <FormGroup
            label="Email"
            id="email"
            value={email}
            f={setEmail}
            type="email"
          />
        </fieldset>
        <fieldset className="flex flex-col items-center gap-2 p-8 border border-black">
          <legend className="font-bold">Location</legend>{" "}
          <FormGroup
            label="Address"
            id="address"
            value={address}
            f={setAddress}
          />
          <FormGroup label="City" id="city" value={city} f={setCity} />
          <FormGroup label="State" id="state" value={state} f={setState} />
          <FormGroup
            label="Country"
            id="country"
            value={country}
            f={setCountry}
          />
        </fieldset>
        <fieldset className="flex flex-col items-center gap-2 p-8 border border-black">
          <legend className="font-bold">Other</legend>{" "}
          <FormGroup
            label="Profession"
            id="profession"
            value={profession}
            f={setProfession}
          />
          <FormGroup
            label="Website"
            id="website"
            value={website}
            f={setWebsite}
          />
          <FormGroup label="About" id="about" value={about} f={setAbout} />
        </fieldset>
        <fieldset className="flex flex-col items-center gap-2 p-8 border border-black">
          <legend className="font-bold">Social Links</legend>{" "}
          <FormGroup
            label="Facebook"
            id="facebook"
            value={facebook}
            f={setFacebook}
          />
          <FormGroup
            label="Twitter"
            id="twitter"
            value={twitter}
            f={setTwitter}
          />
          <FormGroup
            label="Linkedin"
            id="linkedin"
            value={linkedin}
            f={setLinkedin}
          />
          <FormGroup
            label="Youtube"
            id="youtube"
            value={youtube}
            f={setYoutube}
          />
          <FormGroup
            label="Instagram"
            id="instagram"
            value={instagram}
            f={setInstagram}
          />
          <FormGroup label="Github" id="github" value={github} f={setGithub} />
          <FormGroup
            label="Discord"
            id="discord"
            value={discord}
            f={setDiscord}
          />
        </fieldset>
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
        </div>{" "}
        <fieldset className="flex flex-col items-center gap-2 p-8 border border-black">
          <legend className="font-bold">Education</legend>
          <FormGroup label="School" id="school" value={school} f={setSchool} />
          <FormGroup label="Degree" id="degree" value={degree} f={setDegree} />
          <FormGroup
            label="Start Date"
            id="startDateEdu"
            value={startDateEdu}
            f={setStartDateEdu}
            type="number"
          />
          <FormGroup
            label="End Date"
            id="endDateEdu"
            value={endDateEdu}
            f={setEndDateEdu}
            type="number"
          />

          <div className="flex flex-col">
            <label
              className="w-full font-bold text-left"
              htmlFor="descriptionEdu"
            >
              Description
            </label>
            <textarea
              className="p-2 text-center skew-x-6 bg-yellow-400 border border-black placeholder:text-black"
              id="descriptionEdu"
              rows={3}
              placeholder="Description"
              value={descriptionEdu}
              onChange={e => setDescriptionEdu(e.target.value)}
            />
          </div>
          <Button handler={handleEducationSubmit} />
        </fieldset>
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
        </div>
        <fieldset className="flex flex-col items-center gap-2 p-8 border border-black">
          <legend className="font-bold">Experience</legend>
          <FormGroup
            label="Company"
            id="company"
            value={company}
            f={setCompany}
          />
          <FormGroup
            label="Position"
            id="position"
            value={position}
            f={setPosition}
          />
          <FormGroup
            label="Start Date"
            id="startDateExp"
            value={startDateExp}
            f={setStartDateExp}
            type="number"
          />
          <FormGroup
            label="End Date"
            id="endDateExp"
            value={endDateExp}
            f={setEndDateExp}
            type="number"
          />
          <div className="flex flex-col">
            <label
              className="w-full font-bold text-left"
              htmlFor="descriptionExp"
            >
              Description
            </label>
            <textarea
              className="p-2 text-center skew-x-6 bg-yellow-400 border border-black placeholder:text-black"
              id="descriptionExp"
              rows={3}
              placeholder="Description"
              value={descriptionExp}
              onChange={e => setDescriptionExp(e.target.value)}
            />
          </div>
          <Button handler={handleExperienceSubmit} />
        </fieldset>
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
        </div>
        <fieldset className="flex flex-col items-center gap-2 p-8 border border-black">
          <legend className="font-bold">Skills</legend>
          <FormGroup label="Skill" id="skill" value={skill} f={setSkill} />
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
          <FormGroup
            label="Skill"
            id="Years of Experience"
            value={skillYears}
            f={setSkillYears}
            type="number"
          />
          <Button handler={handleSkillSubmit} />
        </fieldset>
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
        </div>{" "}
        <fieldset className="flex flex-col items-center gap-2 p-8 border border-black">
          <legend className="font-bold">Languages</legend>
          <FormGroup
            label="Language"
            id="language"
            value={language}
            f={setLanguage}
          />
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
          <Button handler={handleLanguageSubmit} />
        </fieldset>
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
        </div>{" "}
        <fieldset className="flex flex-col items-center gap-2 p-8 border border-black">
          <legend className="font-bold">Tools</legend>
          <FormGroup label="Tool" id="tool" value={tool} f={setTool} />

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
          <Button handler={handleToolSubmit} />
        </fieldset>
        <fieldset className="flex flex-col items-center gap-2 p-8 border border-black">
          <legend className="font-bold">Interests</legend>
          {interests.map((interest, i) => {
            return (
              <div key={i}>
                <h3>- {interest}</h3>
                <button className="" onClick={e => removeInterest(e, i)}>
                  remove
                </button>
              </div>
            );
          })}

          <FormGroup
            label="Interest"
            id="interest"
            value={interest}
            f={setInterest}
          />
          <Button handler={handleInterestSubmit} />
        </fieldset>
      </form>{" "}
      <div className="text-2xl">
        <Button handler={handleSubmit} text="Submit" />
        <Button handler={handleReset} text="Clear" />
      </div>
    </div>
  );
};

export default Edit;

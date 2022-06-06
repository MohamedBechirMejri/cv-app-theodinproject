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
  const [description, setDescription] = React.useState("");
  const [startDateEdu, setStartDateEdu] = React.useState("");
  const [endDateEdu, setEndDateEdu] = React.useState("");
  const [experience, setExperience] = React.useState(data.experience);
  const [company, setCompany] = React.useState("");
  const [position, setPosition] = React.useState("");
  const [startDateExp, setStartDateExp] = React.useState("");
  const [endDateExp, setEndDateExp] = React.useState("");
  const [skills, setSkills] = React.useState(data.skills);
  const [skill, setSkill] = React.useState("");
  const [skillLevel, setSkillLevel] = React.useState(0);
  const [skillYears, setSkillYears] = React.useState("");
  const [languages, setLanguages] = React.useState(data.languages);
  const [language, setLanguage] = React.useState("");
  const [tools, setTools] = React.useState(data.tools);
  const [tool, setTool] = React.useState("");
  const [toolLevel, setToolLevel] = React.useState(0);
  const [interests, setInterests] = React.useState(data.interests);
  const [interest, setInterest] = React.useState("");
  return (
    <form>
      <div className="form-group">
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          className="form-control"
          id="firstName"
          placeholder="First Name"
          value={firstName}
          onChange={e => setFirstName(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          className="form-control"
          id="lastName"
          placeholder="Last Name"
          value={lastName}
          onChange={e => setLastName(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="middleName">Middle Name</label>
        <input
          type="text"
          className="form-control"
          id="middleName"
          placeholder="Middle Name"
          value={middleName}
          onChange={e => setMiddleName(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="phoneNumber">Phone Number</label>
        <input
          type="text"
          className="form-control"
          id="phoneNumber"
          placeholder="Phone Number"
          value={phoneNumber}
          onChange={e => setPhoneNumber(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="text"
          className="form-control"
          id="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="address">Address</label>
        <input
          type="text"
          className="form-control"
          id="address"
          placeholder="Address"
          value={address}
          onChange={e => setAddress(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="city">City</label>
        <input
          type="text"
          className="form-control"
          id="city"
          placeholder="City"
          value={city}
          onChange={e => setCity(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="state">State</label>
        <input
          type="text"
          className="form-control"
          id="state"
          placeholder="State"
          value={state}
          onChange={e => setState(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="country">Country</label>
        <input
          type="text"
          className="form-control"
          id="country"
          placeholder="Country"
          value={country}
          onChange={e => setCountry(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="profession">Profession</label>
        <input
          type="text"
          className="form-control"
          id="profession"
          placeholder="Profession"
          value={profession}
          onChange={e => setProfession(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="website">Website</label>
        <input
          type="text"
          className="form-control"
          id="website"
          placeholder="Website"
          value={website}
          onChange={e => setWebsite(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="about">About</label>
        <textarea
          className="form-control"
          id="about"
          rows={3}
          placeholder="About"
          value={about}
          onChange={e => setAbout(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="facebook">Facebook</label>
        <input
          type="text"
          className="form-control"
          id="facebook"
          placeholder="Facebook"
          value={facebook}
          onChange={e => setFacebook(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="twitter">Twitter</label>
        <input
          type="text"
          className="form-control"
          id="twitter"
          placeholder="Twitter"
          value={twitter}
          onChange={e => setTwitter(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="linkedin">Linkedin</label>
        <input
          type="text"
          className="form-control"
          id="linkedin"
          placeholder="Linkedin"
          value={linkedin}
          onChange={e => setLinkedin(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="youtube">Youtube</label>
        <input
          type="text"
          className="form-control"
          id="youtube"
          placeholder="Youtube"
          value={youtube}
          onChange={e => setYoutube(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="instagram">Instagram</label>
        <input
          type="text"
          className="form-control"
          id="instagram"
          placeholder="Instagram"
          value={instagram}
          onChange={e => setInstagram(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="github">Github</label>
        <input
          type="text"
          className="form-control"
          id="github"
          placeholder="Github"
          value={github}
          onChange={e => setGithub(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="discord">Discord</label>
        <input
          type="text"
          className="form-control"
          id="discord"
          placeholder="Github"
          value={discord}
          onChange={e => setDiscord(e.target.value)}
        />
      </div>
      <div className="form-group"></div>
    </form>
  );
};

export default Edit;

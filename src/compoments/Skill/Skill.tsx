import "./Skill.scss";

type Props = {
  skills: string[];
};

const Skill = (props: Props) => (
  <div className="skills">
    <ul>
      {props.skills.map((skill) => (
        <li key={skill}>{skill}</li>
      ))}
    </ul>
  </div>
);

export default Skill;

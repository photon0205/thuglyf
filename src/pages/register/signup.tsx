import "./signup.css";
import Select from 'react-select'
import makeAnimated from 'react-select/animated';

const options = [
  { value: 'Music', label: 'Music' },
  { value: 'Animal', label: 'Animal' },
  { value: 'Movie', label: 'Movie' },
  { value: 'Design', label: 'Design' },
  { value: 'Business', label: 'Business' },
  { value: 'Dance', label: 'Dance' },
  { value: 'Relationship', label: 'Relationship' }

]

const MyComponent = () => (
  <Select options={options} />
)

export default function Register() {
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Thug Lyf</h3>
          <span className="loginDesc">
            Connect with friends and the world around you on ThugLyf
          </span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input placeholder="Username" className="loginInput" />
            <input placeholder="Email" className="loginInput" />
            <input placeholder="Password" className="loginInput" />
            <input placeholder="Password Again" className="loginInput" />
            <p> Interests :</p>
            <Select 
            isMulti
            name="Interests"
            options={options}/>
            {/* <select>
              <option value = 'Music'>Music</option>
              <option value="Animal">Animal</option>
              <option value="Car">Car</option>
              <option value="Movie">Movie</option>
              <option value="Design">Design</option>
              <option value="Business">Business</option>
              <option value="Dance">Dance</option>
              <option value="Relationship">Relationship</option>
            </select> */}
            <button className="loginButton">Sign Up</button>
            <button className="loginRegisterButton">
              Log into Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
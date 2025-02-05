import PropTypes from 'prop-types';

function ProfileCard({name, age, isMember, hobbies, onHobbyClick }) {
   
    return (
            <div>
                <h3>Name: {name}</h3>
                <h3>Age: {age}</h3>
                <h3>Status: {isMember ? "Active Member" : "Guest"}</h3>
                <h3>Hobbies</h3>
                <ul>
                    {hobbies.map((hobby, index) => {
                       return <li key={index} 
                                    onClick={()=> onHobbyClick(hobby)}>
                                        {hobby} 
                                        </li> ;

                    })}
                </ul>
            </div>
    );

}

ProfileCard.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number.isRequired,
    isMember: PropTypes.bool.isRequired,
    hobbies: PropTypes.arrayOf(PropTypes.string),
};

export default ProfileCard;
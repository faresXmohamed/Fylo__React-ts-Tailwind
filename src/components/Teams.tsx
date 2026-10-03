import Person from "../components/Person"
import {useState , useMemo, type JSX} from 'react'

import person1 from '../assets/images/profile-1.jpg'
import person2 from '../assets/images/profile-2.jpg'
import person3 from '../assets/images/profile-3.jpg'
import quotes from "../assets/images/bg-quotes.png";

const Teams = () => {
    const [teamMembers]=useState([
        {
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus consectetur ea id debitis veniam earum magni, praesentium iste alias. A eum temporibus tempore laudantium adipisci ab doloremque quo quia repellat!",
            image: person1,
            name: "John Doe",
            education: "Bachelor's Degree in Computer Science"
        },
        {
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus consectetur ea id debitis veniam earum magni, praesentium iste alias. A eum temporibus tempore laudantium adipisci ab doloremque quo quia repellat!",
            image: person2,
            name: "Jane Smith",
            education: "Master's Degree in Business Administration"
        },
        {
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus consectetur ea id debitis veniam earum magni, praesentium iste alias. A eum temporibus tempore laudantium adipisci ab doloremque quo quia repellat!",
            image: person3,
            name: "Mike Johnson",
            education: "Doctorate in Engineering"
        }
    ]);
    const teamMembersList=useMemo(():JSX.Element[]=>{
        return teamMembers.map((member,index)=>(
            <Person
                key={index}
                description={member.description}
                image={member.image}
                name={member.name}
                education={member.education}
            />
        ))
    }, [teamMembers])
  return (
    <section id="team" className="container py-[90px] mx-auto px-[30px] pb-[40px] relative sm:px-[70px]">
        <div className="relative left-[-10px] top-[10px] z-[-1]">
        <img src={quotes} alt="" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]">
        {teamMembersList}
      </div>
    </section>
  )
}

export default Teams
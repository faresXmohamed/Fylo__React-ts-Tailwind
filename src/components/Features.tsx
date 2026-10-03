import icon1 from '../assets/images/icon-access-anywhere.svg';
import icon2 from '../assets/images/icon-security.svg';
import icon3 from '../assets/images/icon-collaboration.svg';
import icon4 from '../assets/images/icon-any-file.svg';
import { useState ,useMemo, type JSX } from 'react';
import FeaturesItem from './FeaturesItem';


const Features = () => {
  const [items]=useState([
    {
      icon: icon1,
      title: "Access your files, anywhere",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque quos minima molestias! Est odio ex sequi, suscipit repudiandae voluptatem aliquid."
    },
    {
      icon: icon2,
      title: "Security you can trust",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque quos minima molestias! Est odio ex sequi, suscipit repudiandae voluptatem aliquid."
    },
    {
      icon: icon3,
      title: "Real-time collaboration",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque quos minima molestias! Est odio ex sequi, suscipit repudiandae voluptatem aliquid."
    },
    {
      icon: icon4,
      title: "Store any type of file",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque quos minima molestias! Est odio ex sequi, suscipit repudiandae voluptatem aliquid."
    }
  ]);

    const featureItems=useMemo((): JSX.Element[] => {
    return items.map((item,index)=>(
      <FeaturesItem
        key={index}
        icon={item.icon}
        title={item.title}
        description={item.description}
      />
    ));
  }, [items]);

  return (
    <section id="features" className="container pt-[90px]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px] w-[865px] max-w-full mx-auto">
        {featureItems}
      </div>
    </section>
  )
}

export default Features
import Tilt from 'react-parallax-tilt'
import { motion } from 'framer-motion'

import { styles } from '../styles'
import { services } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'
import { SectionWrapper } from '../hoc'

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
        className="w=full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        <a
          href="https://drive.google.com/file/d/1ZiHfZArS2Fn-7oFprQ3PDgzTQlrHLVYp/view?usp=sharing"
          className={styles.heroSubText}
        >
          Download my CV
        </a>
        <br />
        <a
          href="https://www.linkedin.com/in/andrewduckworth96/"
          className={styles.heroSubText}
        >
          My LinkedIn
        </a>
        <br />
        Hey there! I'm a junior full stack web developer who just completed a
        coding bootcamp and is excited to dive into the tech industry. When it
        comes to web development, I enjoy both front-end and back-end work, and
        I love using my skills to make websites and apps that are both
        functional and visually appealing. One thing that sets me apart is my
        ability to work well with diverse teams. I'm always open to hearing
        different perspectives and ideas, and I believe that teamwork is
        essential for success in any industry. When I'm not coding, you can
        usually find me watching football or practicing kickboxing. I've found
        that these hobbies help me stay focused and motivated, and they also
        provide a fun way to blow off some steam after a long day of coding. If
        you're interested in working together or just want to chat about all
        things tech, feel free to connect with me!
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}
export default SectionWrapper(About, 'about')

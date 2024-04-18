import React from 'react'
import SkillsItem from './SkillsItem'
import SkillsLanguage from './SkillsLanguage'

const Skills = () => {
  return (
    <div className='pt-[4rem] md:pt-[8rem] pb-[5rem] bg-[#09101a]'>
        <h1 className='heading'>Education & <span className='text-rose-500'>Skills</span></h1>
        <div className='w-[80%] mx-auto pt-[4rem] md:pt-[8rem] grid grid-cols-1 md:grid-cols-2 gap-[2rem] items-center'>
            <div>
                <SkillsItem title="ICT Master - University of Tasmania" year="2018 - 2022"/>
                <SkillsItem title="Android Developer" year="2018 - Now"/>
                <SkillsItem title="Flutter Developer" year="2018 - Now"/>
                <SkillsLanguage 
                skill1 = "MySQL"
                skill2 = "MySQL"
                skill3 = "JAVA"
                level1 = "w-[100%]"
                level2 = "w-[85%]"
                level3 = "w-[70%]"
                />
            </div>
            <div>
                <SkillsItem title="Flutter Developer" year="2021 - Now"/>
                <SkillsItem title="Node Js Developer" year="2021 - Now"/>
                <SkillsItem title="React Native Developer" year="2021 - Now"/>
                <SkillsLanguage 
                skill1 = "Dark"
                skill2 = "Next Js"
                skill3 = "TypeScript"
                level1 = "w-[81%]"
                level2 = "w-[78%]"
                level3 = "w-[90%]"
                />
            </div>
        </div>
    </div>
  )
}

export default Skills
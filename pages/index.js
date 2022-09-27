import { Heading, Box, Text, Code, Flex, Link, Button } from '@chakra-ui/react'

import Navbar from "../components/navbar"
import ProfileHeadline from "../components/profileheadline"
import Links from "../components/links";

export default function Home() {
  return (
    <Box w="35%" h="100vh" m="auto">
      <Navbar />
      <ProfileHeadline />

      {/* console.log thing */}
      <Flex w="full" justify="center">
        {/* Do not pass children prop–React build */}
        <Code colorScheme="blue" px={3} py={1} m="auto">
          console.log(&apos;Hi, everyone! Welcome to my portfolio website.&apos;)
        </Code>
      </Flex>
      
      {/* About me section */}
      <Heading as="h3" size="md" variant="section-title">About Me</Heading>
      <Text fontStyle="md">
        Hi! I&apos;m Lukas Strelecky, a freshman at Brown University. I&apos;m on a pre-medical track, majoring in Math &#38; Computer Science, while 
        also pursuing language studies, specifically Chinese and Korean. After being born in New York City, I&apos;ve spent almost all of my 
        childhood in New Jersey, and love traveling to foreign countries. I have a passion for web development and photography that is deeply
        rooted in a strong desire to creatively express myself&ndash;art was never really my thing, so I resorted to less conventional means.
        <br /><br/>
        I started programming in 6th grade, and ever since, I&apos;ve been teaching myself different languages and creating small applications. In 
        high school, I delved deeper into CS and took high level courses like Data Structures and Algorithms, marrying my creative ambitions with
        a sound theoretical foundation. In college, I&apos;ll even further expand my horizons, focusing my coursework on software and theory. Recently, 
        I&apos;ve also picked up photography, and I hope that you choose to enjoy some of the photos I&apos;ve captured.
      </Text>  

      {/* Resume/CV Section */}
      <Heading as="h3" size="md" variant="section-title">Resume/CV</Heading>
      <Text fontStyle="md">
        I am currently a freshman at Brown Univeristy (expected 2026) on a pre-med track, pursuing a Sc.B. in Computer Science. I am also a 
        member of the Korean-American Student Association, Brown Tutoring Corps, and Brown Applied Computing. From 2015 to 2022, I 
        attended <Link href="https://www.pingry.org" isExternal>The Pingry School</Link> in Basking Ridge, NJ, where I played four years of varsity soccer and held 
        leaderships on two research teams and the Student Technology Committee. I also created a chapter of Digital Grandparents, a volunteer
        organization that provides tech education to the elderly.
        <br /><br/>
        In the spring of 2022, I had the pleasure of working with the cybersecurity team at Summit Health. I was trained in industry leading cybersecurity
        tools, such as Qualys, Medigate, and CrowdStrike, monitoring users&apos; actions before reporting to higher-ups with calculated advice for further action
        on vulnerabilities.
        <br /><br/>
        Throughout 2021, I worked as a Tech Office Intern, installing and reparing hardware, developing a classroom tech inventory system, and engineered a 
        scheduling algorithm for Pingry&apos;s courss.
        <br /><br/>        
        For a more detailed resume, <Link href="https://docs.google.com/document/d/1m9XJNbfNN5D_K8dpBT7ADqzgOLLgA0sf/edit?usp=sharing&ouid=111113412581063902371&rtpof=true&sd=true">click here.</Link>        
      </Text>

      {/* Links */}
      <Heading as="h3" size="md" variant="section-title">Links</Heading>
        <Text fontStyle="md">
          Use the links below to stay in touch and find out more about me. I&apos;m also reachable by email at lukas_strelecky@brown.edu.
        </Text>
      <Links />

      {/* Footer */}
      <Text mt={10} fontSize={10} textAlign={"center"}>
        Site powered by ChakraUI. Written by Lukas Strelecky.
      </Text>
          
    </Box>
  )
}

<template>
  <div>
    <Nav/>
    <Who/>
    <Skills/>
    <Portfolio/>
    <WorkExperience/>
    <Education/>
    <Languages/>
    <Contact/>
  </div>
</template>

<script>

import Nav from "@/components/Nav";
import Who from "@/components/Who";
import Skills from "@/components/Skills";
import Portfolio from "@/components/Portfolio";
import WorkExperience from "@/components/WorkExperience";
import Education from "@/components/Education";
import Languages from "@/components/Languages";
import Contact from "@/components/Contact";

export default {
  name: 'Home',
  components: {Contact, Languages, Education, WorkExperience, Portfolio, Skills, Who, Nav}
}
</script>

<style>
@import '../assets/index.css';
</style>

<template>
  <div>
    <Nav/>
<!--    <Who/>-->

    <section class="section section--hello" data-aos="fade-right" data-aos-duration="2500">
      <div class="section__inner">
        <div class="block">
          <h2> FRONT-END DEVELOPER <br>
            Valeriya Zaviriukha
          </h2>
          <ul class="anchornav">
            <li><a href="#" v-scroll-to="'#about'">
              <div class="square"></div>
              PROFESSIONAL SKILLS AND ABILITIES<span> What I do?</span></a>
            </li>
            <li><a href="#" v-scroll-to="'#clients'">
              <div class="square"></div>
              PORTFOLIO<span> Whatch it</span></a>
            </li>
            <li><a href="#" v-scroll-to="'#portfolio'">
              <div class="square"></div>
              WORK EXPERIENCE <span>  Where I worked?</span></a>
            </li>
            <li><a href="#" v-scroll-to="'#caching'">
              <div class="square"></div>
              EDUCATION<span>  Where I studied?</span></a>
            </li>
            <li><a href="#" v-scroll-to="'#streaming'">
              <div class="square"></div>
              Languages<span>  Let's speak</span></a>
            </li>
            <li><a href="#" v-scroll-to="'#contact'">
              <div class="square"></div>
              Contact <span> Write me a message</span></a>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <Skills  data-aos="fade-right" data-aos-duration="2500" id="about"/>
    <Portfolio data-aos="fade-right" data-aos-duration="2500" id="clients"/>
    <WorkExperience data-aos="fade-right" data-aos-duration="2500" id="portfolio"/>
    <Education data-aos="fade-right" data-aos-duration="2500" id="caching"/>
    <Languages data-aos="fade-right" data-aos-duration="2500" id="streaming"/>
    <Contact data-aos="fade-right" data-aos-duration="2500" id="contact"/>
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

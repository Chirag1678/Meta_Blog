import React from 'react'
import Section from './Section'

function generateSection(name, cards) {
    return {
      name: name,
      cards: cards
    };
  }

const popularContent={
       first: {
        title: 'by tomas laurinavicius in design process',
        heading:'how to boost conversions on your wooCommerce product pages',
        desc:"User research is the reality check every project needs. Here's our guide to why you should be doing it — and how to get started."
       },
       second: {
        title: 'freelancing',
        heading: '7 best worpress caching plugins for 2018'
       },
       third: {
        title: 'resource',
        heading: 'kinsta kinpin: interview with kevin mudloon'
       },
       fourth: {
        title: 'design process',
        heading: '8 ways to leverage linkedIn for marketing'
       },
       fifth: {
        title: 'inspiration',
        heading: 'working remotely - everything you need'
       },
}
const essentialsContent={
    first: {
     title: 'by tomas laurinavicius in design process',
     heading:'how to quickly fix wordPress mixed content warnings (HTTPS/SSL)',
     desc:"User research is the reality check every project needs. Here's our guide to why you should be doing it — and how to get started."
    },
    second: {
     title: 'freelancing',
     heading: '7 best worpress caching plugins for 2018'
    },
    third: {
     title: 'resource',
     heading: 'kinsta kinpin: interview with kevin mudloon'
    },
    fourth: {
     title: 'design process',
     heading: '8 ways to leverage linkedIn for marketing'
    },
    fifth: {
     title: 'inspiration',
     heading: 'working remotely - everything you need'
    },
}
const freelanceContent={
first: {
 title: 'by tomas laurinavicius in design process',
 heading:'how to boost conversions on your wooCommerce product pages',
 desc:"User research is the reality check every project needs. Here's our guide to why you should be doing it — and how to get started."
},
second: {
 title: 'freelancing',
 heading: '7 best worpress caching plugins for 2018'
},
third: {
 title: 'resource',
 heading: 'kinsta kinpin: interview with kevin mudloon'
},
fourth: {
 title: 'design process',
 heading: '8 ways to leverage linkedIn for marketing'
},
fifth: {
 title: 'inspiration',
 heading: 'working remotely - everything you need'
},
}
const popular = generateSection('popular', popularContent);
const essentials = generateSection('essentials', essentialsContent);
const freelance = generateSection('freelance', freelanceContent);

function Types() {
  return (
    <div className='w-full px-40 py-20 bg-[#f9f9fb]'>
      <Section section={popular}/>
      <Section section={essentials}/>
      <Section section={freelance}/>
    </div>
  )
}

export default Types
